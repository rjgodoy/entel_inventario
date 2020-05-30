<?php

namespace App\Http\Controllers\Api\Infraestructura;

use App\Exports\GeneratorSetsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\GeneratorSet as GeneratorSetResource;
use App\Models\GeneratorSet;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

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
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)

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
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)

                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)

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
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_generator_sets:=(SELECT count(DISTINCT GS.id) 
                            FROM entel_g_redes_inventario.generator_sets GS
                            INNER JOIN entel_pops.pops P ON GS.pop_id = P.id
                            INNER JOIN entel_pops.sites S ON P.id = S.pop_id
                            $condition_core
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id
                            AND T.state_id IN (1)

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
        //
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
            // 'generator_ttas.generator_tta_type',
            'current_maintainer'
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
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
}
