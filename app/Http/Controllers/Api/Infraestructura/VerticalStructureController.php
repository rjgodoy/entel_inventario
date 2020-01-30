<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\VerticalStructure as VerticalStructureResource;
use App\VerticalStructure;
use DB;

class VerticalStructureController extends Controller
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
    public function verticalStructureData($core)
    {
        if (Cache::has('verticalStructuresData_core'.$core)) {
            $verticalStructuresQuantity = Cache::get('verticalStructuresData_core'.$core);
        } else {
            $verticalStructuresQuantity = Cache::remember('verticalStructuresData_core'.$core, $this->seconds, function () use ($core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.vertical_structures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_vertical_structures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.vertical_structures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_vertical_structures

                    FROM entel_pops.crms
                "));
                return $verticalStructuresQuantity;
            });
        }
        return new VerticalStructureResource($verticalStructuresQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function verticalStructureDataCrm($crm_id, $core)
    {
        if (Cache::has('verticalStructuresData_crm'.$crm_id.'_core'.$core)) {
            $verticalStructuresQuantity = Cache::get('verticalStructuresData_crm'.$crm_id.'_core'.$core);
        } else {
            $verticalStructuresQuantity = Cache::remember('verticalStructuresData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- POP FIJOS
                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.vertical_structures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_vertical_structures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.vertical_structures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_vertical_structures

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $verticalStructuresQuantity;
            });
        }
        return new VerticalStructureResource($verticalStructuresQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function verticalStructureDataZona($zona_id, $core)
    {
        if (Cache::has('verticalStructuresData_zona'.$zona_id.'_core'.$core)) {
            $verticalStructuresQuantity = Cache::get('verticalStructuresData_zona'.$zona_id.'_core'.$core);
        } else {
            $verticalStructuresQuantity = Cache::remember('verticalStructuresData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP FIJOS
                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.vertical_structures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_vertical_structures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.vertical_structures AC
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_vertical_structures

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $verticalStructuresQuantity;
            });
        }
        return new VerticalStructureResource($verticalStructuresQuantity);
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
        $verticalStructure = VerticalStructure::with('vertical_structure_type')->where('pop_id', $id)->get();
        return new VerticalStructureResource($verticalStructure);
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
}
