<?php

namespace App\Console\Commands;

use App\Models\AirConditioner;
use App\Models\AirConditionerBrand;
use App\Models\AirConditionerType;
use App\Models\GeneratorGroup;
use App\Models\GeneratorMotor;
use App\Models\GeneratorSet;
use App\Models\GeneratorSetType;
use App\Models\GeneratorTank;
use App\Models\GeneratorTta;
use App\Models\Pop;
use App\Models\PsgTp;
use App\Models\PsgTpSource;
use App\Models\Site;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;

class UpdatePsgTps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:psg_tps';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Obtiene los datos de la tabla original y los escribe en la tabla de inventario. Luego busca todos los "finalizados" y los ingresa en el inventairo.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Obtiene los datos de origen
        $psgTpsSource = PsgTpSource::join('TIPO_TRABAJO_INVENTARIO', 'TIPO_TRABAJO_INVENTARIO.ID_TIPOCLASIF', '=', 'CONSOLIDADO_INVENTARIO.ID_TPCLAS')
            ->join('TRABAJO_INVENTARIO', 'TRABAJO_INVENTARIO.ID', '=', 'TIPO_TRABAJO_INVENTARIO.ID_TRABAJO')
            ->leftJoin('SITIOS_PLANNED', 'CONSOLIDADO_INVENTARIO.PLANNED_ID', '=', 'SITIOS_PLANNED.PLANNED_ID')
            ->leftJoin('o_m.SITIOS', 'SITIOS.SITE_ID', '=', 'SITIOS_PLANNED.SITE_ID')
            ->join('PLANNED', 'CONSOLIDADO_INVENTARIO.PLANNED_ID', '=', 'PLANNED.ID')
            // ->whereRaw('PLANNED.ESTADOS_ID NOT IN (8) AND SITIOS.SITIO IS NOT NULL')
            // ->whereRaw('SITIOS.SITIO IS NOT NULL')
            ->select(
                'CONSOLIDADO_INVENTARIO.*',
                'SITIOS_PLANNED.SITE_ID',
                'SITIOS.SITIO',
                'TRABAJO_INVENTARIO.ID as TIPO_TRABAJO_ID',
                'TRABAJO_INVENTARIO.DESCRIPCION',
                'PLANNED.ESTADOS_ID',
                'PLANNED.TP_FECHA_EXEC',
                'PLANNED.DESCRIPCION as DESCRIPCION_TP'
            )
            ->groupBy('CONSOLIDADO_INVENTARIO.ID')
            ->orderBy('CONSOLIDADO_INVENTARIO.FECHA_INGRESO')
            ->get();


        // Actualiza la tabla de inventario para guardar los registros.
        foreach ($psgTpsSource as $tp) {
            // Verifica si el Pop existe en Inventario. Si no existe, lo deja NULL
            $site_id = $tp->SITIO && ($site = Site::where('nem_site', $tp->SITIO)->first()) ? $site->id : null;
            PsgTp::withTrashed()->updateOrCreate([
                'tp_id' => $tp->PLANNED_ID,
            ],[
                'table_id' => $tp->ID,
                'site_id' => $site_id,
                'psg_tp_state_id' => $tp->ESTADOS_ID,
                'work_type_id' => $tp->TIPO_TRABAJO_ID,
                'title' => $tp->DESCRIPCION,
                'description' => str_replace('Descripcion: ', '', $tp->DESCRIPCION_TP),
                'user' => $tp->USER_INGRESO,
                'executed_at' => $tp->TP_FECHA_EXEC,
                'created_at' => $tp->FECHA_INGRESO,
                'updated_at' => $tp->FECHA_MODIFICACION
            ]);
        }

        $psgTpData = PsgTp::with('psg_tp_state', 'site')->where('site_id', '!=', null)->orderBy('created_at', 'asc')->get();
        foreach ($psgTpData as $tp) {

            if($tp->psg_tp_state_id == 8) {
                $resource = '';
                $psg = PsgTpSource::where('PLANNED_ID', $tp->tp_id)->first();
                $site_id = $tp->site_id;
                $pop_id = Pop::whereHas('sites', function($q) use($site_id) {
                    $q->where('id', $site_id);
                })->first()->id;
                $psgTp = PsgTp::where('tp_id', $psg->PLANNED_ID)->first();

                switch($tp->work_type_id) {
                    case 1:
                        $resource = 'powerRectifiers';
                        break;
                    case 2:
                        $resource = 'generatorSets';

                        if($generator_set_type = GeneratorSetType::where('type', $psg->MARCA)->where('model', $psg->MODELO)->first()) {
                            $generator_set_type_id = $generator_set_type->id;
                        } else {
                            $generator_set_type_id = GeneratorSetType::create([ 
                                'type' => $psg->MARCA,
                                'model' => $psg->MODELO
                            ])->id;
                        }
                        $newGS_id = GeneratorSet::create([
                            'pop_id' => $pop_id,
                            'generator_set_type_id' => $generator_set_type_id,
                        ])->id;

                        $newGG = GeneratorGroup::create([
                            'generator_set_id' => $newGS_id,
                            'power' => $psg->POTENCIA == '90 KVA' ? 90 : $psg->POTENCIA,
                        ]);
                        $newGM = GeneratorMotor::create([
                            'generator_set_id' => $newGS_id
                        ]);
                        $newGT = GeneratorTank::create([
                            'generator_set_id' => $newGS_id,
                            'capacity' => $psg->CAPACIDAD_ESTANQUE,
                        ]);
                        $newGTTA = GeneratorTta::create([
                            'generator_set_id' => $newGS_id
                        ]);

                        $psgTp->delete();
                        break;
                    case 3:
                        $resource = 'infrastructures';
                        break;
                    case 4:
                        // return $tp;
                        if($air_conditioner_type = AirConditionerType::where('type', $psg->TIPO)->first()) {
                            $air_conditioner_type_id = $air_conditioner_type->id;
                        } else {
                            $air_conditioner_type_id = AirConditionerType::create([ 'type' => $psg->TIPO ])->id;
                        }

                        if($air_conditioner_brand = AirConditionerBrand::where('brand', $psg->MARCA)
                            ->where(function($q) {
                                $q->where('model', null)->orWhere('model', '');
                            })->first()
                        ) {
                            $air_conditioner_brand_id = $air_conditioner_brand->id;
                        } else {
                            $air_conditioner_brand_id = AirConditionerBrand::create([
                                'air_conditioner_type_id' => $air_conditioner_type_id,
                                'brand' => $psg->MARCA
                            ])->id;
                        }

                        // $site_id = $tp->site_id;
                        // $pop_id = Pop::whereHas('sites', function($q) use($site_id) {
                        //     $q->where('id', $site_id);
                        // })->first()->id;

                        // $psgTp = PsgTp::where('tp_id', $psg->PLANNED_ID)->first();

                        $newAC = AirConditioner::create([
                            'pop_id' => $pop_id,
                            'air_conditioner_brand_id' => $air_conditioner_brand_id,
                            'capacity' => str_replace('.', '', $psg->CAPACIDAD_BTU),
                            'installed_at' => $psgTp->executed_at
                        ]);
                        $psgTp->delete();
                        break;
                    case 5:
                        $resource = 'transformers';
                        break;
                    case 6:
                        $resource = 'verticalStructures';
                        break;
                    case 7:
                        $resource = 'batteries';
                        break;
                    default:
                        break;
                }

            }
        }

    }
}
