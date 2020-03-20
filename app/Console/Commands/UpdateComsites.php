<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Artisaninweb\SoapWrapper\SoapWrapper;
use App\Http\Requests\GetComsiteData;

use App\Models\Comsite;
use App\Models\Pop;
use Carbon\Carbon;

class UpdateComsites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:comsites';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ingresa datos del WSDL en la tabla comsites. Si ya existe el contrato, actualiza los datos.';

    /**
     * @var SoapWrapper
     */
    protected $soapWrapper;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(SoapWrapper $soapWrapper)
    {
        parent::__construct();
        $this->soapWrapper = $soapWrapper;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $comsite_data = self::comsiteCall();

        foreach ($comsite_data as $data) {

            // Verifica si el Pop existe en Inventario. Si no existe, lo deja NULL
            if ($pop_id = Pop::join('sites', 'pops.id', '=', 'sites.pop_id')->where('nem_site', $data->val02_CodSitio)->count()) {
                $pop_id = Pop::join('sites', 'pops.id', '=', 'sites.pop_id')->where('nem_site', $data->val02_CodSitio)->first()->pop_id;
            } else {
                $pop_id = null;
            }

            // Transforma las fechas en 
            $time_started = strtotime($data->val05_FechaInicio);
            $time_ended = strtotime($data->val06_FechaTermino);
            $started_at = date('Y-m-d',$time_started);
            $ended_at = date('Y-m-d',$time_ended);
            // dd($ended_at);

            if (Comsite::where('id', $data->val01_IdContrato)->count()) {
                $comsite_update = Comsite::where('id', $data->val01_IdContrato)->first();

                $comsite_update->update([
                    'pop_id' => $pop_id,
                    'cod_pop' => $data->val02_CodSitio,
                    'nombre_pop' => $data->val03_NombreSitio,
                    'operador' => $data->val04_Operador,
                    'started_at' => $started_at,
                    'ended_at' => $ended_at,
                    'propietario' => $data->val07_Propietario,
                    'celular_propietario' => $data->val08_CelularPropietario,
                    'fono_propietario' => $data->val09_TelefonoParticularPropietario,
                    'rol_propiedad' => $data->val10_RolPropiedad
                ]);  
            } else {
                $comsite = new Comsite();
                $comsite->addData(
                    $data->val01_IdContrato,
                    $pop_id,
                    $data->val02_CodSitio,
                    $data->val03_NombreSitio,
                    $data->val04_Operador,
                    $started_at,
                    $ended_at,
                    $data->val07_Propietario,
                    $data->val08_CelularPropietario,
                    $data->val09_TelefonoParticularPropietario,
                    $data->val10_RolPropiedad
                );
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function comsiteCall()
    {
        $this->soapWrapper->add('Comsite', function ($service) {
            $service
            ->wsdl('http://comsites.sigib.cl/AdmContratosWS/services/InfoContratoWS?wsdl')
            ->trace(true)
            ->classmap([
                GetComsiteData::class,
                // GetListInfoContratoReturn::class,
            ]);
        });

        // Without classmap
        $response = $this->soapWrapper->call('Comsite.getListInfoContratoResponse');
        $comsite_data = $response->getListInfoContratoReturn;

        return $comsite_data;
    }
}
