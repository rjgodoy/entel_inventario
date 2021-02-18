<?php

namespace App\Http\Controllers\Api;

use DB;
use Carbon\Carbon;
use App\Models\Log;
use App\Models\Site;
use App\Models\GeneratorSet;
use App\Models\GeneratorTta;
use Illuminate\Http\Request;
use App\Models\GeneratorTank;
use App\Models\GeneratorGroup;
use App\Models\GeneratorMotor;
use App\Models\TelecomCompany;
use App\Exports\GeneratorSetsExport;
use App\Http\Controllers\Controller;
use App\Models\GeneratorSetCapacity;
use Illuminate\Support\Facades\Cache;
use App\Models\GeneratorSetMaintainer;
use App\Models\GeneratorSetResponsable;
use App\Models\GeneratorsPlatformBrand;
use App\Models\GeneratorsPlatformValues;
use App\Models\GeneratorsPlatformGenerator;
use App\Http\Resources\GeneratorPlatformValuesCollection;
use App\Http\Resources\GeneratorSet as GeneratorSetResource;

class GeneratorSetController extends Controller
{
    protected $seconds = 2592000;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorSetData(Request $request)
    {
        $core = $request->core;
        $condition_core = $core == 1 ? 'AND S.classification_type_id IN (1)' : '';

        // if (Cache::has('generatorGroupsData_core'.$core)) {
        //     $generatorGroupsQuantity = Cache::get('generatorGroupsData_core'.$core);
        // } else {
        //     $generatorGroupsQuantity = Cache::remember('generatorGroupsData_core'.$core, $this->seconds, function() use($condition_core) {

                $generatorGroupsQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_info:=(SELECT count(DISTINCT GS.pop_id) 
                            FROM entel_g_redes_inventario.generator_sets GS 
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id

                            ) AS q_generator_sets

                    FROM entel_pops.crms
                "));
        //         return $generatorGroupsQuantity;
        //     });
        // }
        return new GeneratorSetResource($generatorGroupsQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorSetDataCrm(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $condition_core = $core == 1 ? 'AND S.classification_type_id IN (1)' : '';

        // if (Cache::has('generatorGroupsData_crm'.$crm_id.'_core'.$core)) {
        //     $generatorGroupsQuantity = Cache::get('generatorGroupsData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $generatorGroupsQuantity = Cache::remember('generatorGroupsData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $condition_core) {

                $generatorGroupsQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    @q_info:=(SELECT count(DISTINCT GS.pop_id) 
                            FROM entel_g_redes_inventario.generator_sets GS 
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id

                            ) AS q_generator_sets

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
        //         return $generatorGroupsQuantity;
        //     });
        // }
        return new GeneratorSetResource($generatorGroupsQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorSetDataZona(Request $request)
    {
        $core = $request->core;
        $zona_id = $request->zona_id;
        $condition_core = $core == 1 ? 'AND S.classification_type_id IN (1)' : '';

        // if (Cache::has('generatorGroupsData_zona'.$zona_id.'_core'.$core)) {
        //     $generatorGroupsQuantity = Cache::get('generatorGroupsData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $generatorGroupsQuantity = Cache::remember('generatorGroupsData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $condition_core) {

                $generatorGroupsQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    @q_info:=(SELECT count(DISTINCT GS.pop_id) 
                            FROM entel_g_redes_inventario.generator_sets GS 
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            -- INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            -- AND T.state_id IN (1)

                            WHERE P.comuna_id = @comuna_id

                            ) AS q_generator_sets

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
        //         return $generatorGroupsQuantity;
        //     });
        // }
        return new GeneratorSetResource($generatorGroupsQuantity);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->is_only_room) {
            $generatorSet = GeneratorSet::create([
                'pop_id' => $request->pop_id,
                'generator_set_type_id' => $request->generator_set_type_id,
                'room_id' => $request->room_id
            ]);
        } else {
            $generatorSet = GeneratorSet::create([
                'pop_id' => $request->pop_id,
                'generator_set_type_id' => $request->generator_set_type_id
            ]);
        }

        $generatorGroup = GeneratorGroup::create([
            'generator_set_id' => $generatorSet->id
        ]);

        $generatorTank = GeneratorTank::create([
            'generator_set_id' => $generatorSet->id
        ]);

        $generatorMotor = GeneratorMotor::create([
            'generator_set_id' => $generatorSet->id
        ]);

        $generatorTta = GeneratorTta::create([
            'generator_set_id' => $generatorSet->id
        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $generatorSets = GeneratorSet::with(
            'generator_set_type',
            'current_generator_group.generator_group_type',
            // 'generator_groups.generator_group_type', 
            'current_generator_motor.generator_motor_type',
            // 'generator_motors.generator_motor_type', 
            'current_generator_tank.generator_tank_type',
            // 'generator_tanks.generator_tank_type', 
            'current_generator_tta.generator_tta_type',
            'current_generator_responsable.generator_set_responsable_area',
            'current_generator_set_corp_disponibility',
            // 'generator_ttas.generator_tta_type',
            'current_maintainer.telecom_company',
            'current_generator_set_capacity',
            'generator_set_topology_type',
            'generator_set_level_type',
            'pop.rooms'

             )->where('pop_id', $id)->get();
        return new GeneratorSetResource($generatorSets);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $generatorSet = GeneratorSet::find($id);
        $pop_id = $generatorSet->pop_id; 

        if(
            (!$generatorSet->current_generator_set_capacity || ($generatorSet->current_generator_set_capacity && $generatorSet->current_generator_set_capacity->prime_capacity != $request->prime_capacity)) || 
            (!$generatorSet->current_generator_set_capacity || ($generatorSet->current_generator_set_capacity && $generatorSet->current_generator_set_capacity->used_capacity != $request->used_capacity))
            ) {
            GeneratorSetCapacity::create([
                'generator_set_id' => $id,
                'prime_capacity' => $request->prime_capacity,
                'used_capacity' => $request->used_capacity
            ]);

            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'Se han actualizado las capacidades del grupo electrógeno: Prime->'.$request->prime_capacity.' kVa; Utilizada->'.$request->used_capacity
            ]);
        }

        if($generatorSet->current_maintainer && $generatorSet->current_maintainer->telecom_company_id != $request->maintainer_id) {
            $generatorSetMaintainer = GeneratorSetMaintainer::create([
                'telecom_company_id' => $request->maintainer_id,
                'generator_set_id' => $id
            ]);
            $newMaintainer = TelecomCompany::find($request->maintainer_id)->name;
            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'El nuvo mantenedor del grupo electrógeno es '.$newMaintainer
            ]);
        }

        $generators = GeneratorSet::where('pop_id', $pop_id)->get();
        foreach ($generators as $generator) {
            if(!$generator->current_generator_responsable || ($generator->current_generator_responsable && $generator->current_generator_responsable->generator_set_responsable_area_id != $request->generator_set_responsable_area_id)) {
                $generatorSetResponsable = GeneratorSetResponsable::create([
                    'generator_set_responsable_area_id' => $request->generator_set_responsable_area_id,
                    'generator_set_id' => $generator->id
                ]);
            }
        }
        
        if($generatorSet->generator_set_topology_type_id != $request->generator_set_topology_type_id || 
            $generatorSet->generator_set_level_type_id != $request->generator_set_level_type_id) {
            $generatorSet->update([
                'generator_set_topology_type_id' => $request->generator_set_topology_type_id,
                'generator_set_level_type_id' => $request->generator_set_level_type_id
            ]);

            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'Se han actualizado los parámetros de "Topología" y "Plano" en el grupo electrógeno.'
            ]);
        }

        if($generatorSet->generator_set_type_id != $request->generator_set_type_id) {
            $generatorSet->update([
                'generator_set_type_id' => $request->generator_set_type_id
            ]);

            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'Se ha actualizado la marca y modelo en el grupo electrógeno.'
            ]);
        }

        if($request->is_only_room && $generatorSet->room_id != $request->room_id) {
            $generatorSet->update([
                'room_id' => $request->room_id
            ]);
        } else {
            $generatorSet->update([
                'room_id' => null
            ]);
        }

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $generatorSet = GeneratorSet::find($id);
        $generatorSet->delete();

        $generatorGroup = GeneratorGroup::where('generator_set_id', $id)->first();
        $generatorGroup->delete();

        $generatorTank = GeneratorTank::where('generator_set_id', $id)->first();
        $generatorTank->delete();

        $generatorMotor = GeneratorMotor::where('generator_set_id', $id)->first();
        $generatorMotor->delete();

        $generatorTta = GeneratorTta::where('generator_set_id', $id)->first();
        $generatorTta->delete();
    }

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        return (new GeneratorSetsExport($request))->download('grupos_electrógenos.xlsx');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorPlatformData(Request $request)
    {
        $text = $request->text;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;
        $brand_id = $request->brand_id;
        $core = $request->core;
        $critic = $request->critic;
        $vip = $request->vip;

        $data = GeneratorsPlatformGenerator::
        with(
            'g_zone.g_sector'
            ,'g_model.g_brand'
            ,'g_model.g_fuel_pond'
        //     ,'g_maintances.g_maintance_type'
        //     ,'g_maintances.g_maintance_status'
        //     ,'g_maintances.g_generator_records.g_maintance_status'
            ,'g_last_maintance.g_maintance_status'
        )
        ->where(function($q) use($text) {
            if($text) {
                $q->where('name', 'LIKE', "%$text%")
                ->orWhereHas('pop.sites', function($p) use($text) {
                    if ($text) {
                        $p->where('nem_site', 'LIKE', "%$text%")->orWhere('nombre', 'LIKE', "%$text%");
                    }
                });
            }
        })
        
        ->whereHas('g_model', function($p) use($brand_id) {
            if ($brand_id) {
                $p->where('brand_id', $brand_id);
            }
        })
        ->whereHas('g_zone', function($q) use ($crm_id, $zona_id) {
            $crm_id != 0 ? $q->where('sector_id', $crm_id) : $q->where('sector_id', '!=', $crm_id);
            $zona_id != 0 ? $q->where('id', $zona_id) : $q->where('id', '!=', $zona_id);
        })
        ->orderBy('zone_id', 'asc')
        ->paginate(15);

        return $data;     
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorValues(Request $request, $generator_id)
    {
        $startDate = $request->start_date; $endDate = $request->end_date;
        if($request->start_date && $request->end_date) {
            $startDate = new Carbon($request->start_date);
            $endDate = new Carbon($request->end_date);
            $startDate = $startDate->isoFormat('YYYY-MM-DD');
            $endDate = $endDate->isoFormat('YYYY-MM-DD');
            // $d = DateTime::createFromFormat('d-m-Y H:i:s', $startDate);
            // if ($d === false) {
            //     return("Incorrect date string");
            // } else {
            //     echo $d->getTimestamp();
            // }
            // return $startDate.' - '.$endDate;
        }

        switch ($request->unit) {
            case 'day':
                $order = 'YEAR(created), MONTH(created), DAY(created)';
                break;
            case 'month':
                $order = 'YEAR(created), MONTH(created)';
                break;
            case 'year':
                $order = 'YEAR(created)';
                break;
            default:
                $order = 'YEAR(created), MONTH(created)';
                break;
        }
        
        if($request->start_date && $request->end_date) {
            $data = GeneratorsPlatformValues::where('generator_id', $generator_id)
                ->where('hourmeter_consumption', '!=', -1)
                ->where('hourmeter_consumption', '<', 75)
                ->where(function($q) use($startDate, $endDate) {
                    if($startDate && $endDate) {
                        $q->whereBetween('created', [date($startDate), date($endDate)]);
                    }
                })
                ->groupByRaw($order)
                ->orderBy('created', 'desc')
                ->get();
        } else {
            $data = GeneratorsPlatformValues::where('generator_id', $generator_id)
                ->where('hourmeter_consumption', '!=', -1)
                ->where('hourmeter_consumption', '<', 75)
                ->groupByRaw($order)
                ->orderBy('created', 'desc')
                ->limit(7)
                ->get();
        }

        return $data;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorLastDay(Request $request)
    {
        $latest = GeneratorsPlatformValues::with('g_generator')
            ->where('generator_id', $request->generator_id)
            ->latest('created')
            ->first();

        if ($latest) {
            $date = date_format($latest->created, "Y-m-d");
            $data = GeneratorsPlatformValues::
                whereRaw('DATE(created) = "'.$date.'"')
                ->where('generator_id', $request->generator_id)
                ->where('hourmeter_consumption', '!=', -1)
                ->where('fuel_consumption', '<', 75)
                ->orderBy('created', 'desc')
                ->get();
            return $data;
        }

        return $latest;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatorPlatformBrands()
    {
        $data = GeneratorsPlatformBrand::all();
        return $data;     
    }

    // /**
    //  * Display a listing of the resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function generatorPlatformDataCapacity(Request $request)
    // {
    //     $pop_id = $request->pop_id;
    //     $latest = GeneratorsPlatformValues::with('g_generator')
    //         ->whereHas('g_generator', function($q) use($pop_id) {
    //             $q->where('pop_id', $pop_id);
    //         })
    //         ->latest('created')
    //         ->first();

    //     return $latest;
        
    // }

    

}
