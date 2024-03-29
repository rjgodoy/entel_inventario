<?php

namespace App\Http\Controllers\Api;

use App\Exports\VerticalStructuresExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\VerticalStructure as VerticalStructureResource;
use App\Http\Resources\VerticalStructureCollection;
use App\Models\User;
use App\Models\VerticalStructure;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

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

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

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

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

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

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $verticalStructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

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
        $verticalStructure = VerticalStructure::with('vertical_structure_type', 'beacons.beacon_type')->where('pop_id', $id)->get();
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

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        $response = (new VerticalStructuresExport($request))->download('estructuras_verticales.xlsx');
        ob_end_clean();
        return $response;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function apiVerticalStructures(Request $request)
    {     
        $user = User::where('api_token', $request->api_token)->get();
        if ($user) {
            $vertical_structures = VerticalStructure::
            select(
                "id",
                "pop_id",
                "vertical_structure_type_id",
                "height",
                "use_factor"
            )
            ->with(
                "vertical_structure_type:id,type",
                "pop:id,nombre"
            )
            ->get();

            return new VerticalStructureCollection($vertical_structures);
        }
        return false;
    }
}
