<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\ElectricLine as ElectricLineResource;
use App\ElectricLine;
use DB;

class ElectricLineController extends Controller
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
    public function electricLineData($core)
    {
        if (Cache::has('electricLinesData_core'.$core)) {
            $electricLinesQuantity = Cache::get('electricLinesData_core'.$core);
        } else {
            $electricLinesQuantity = Cache::remember('electricLinesData_core'.$core, $this->seconds, function () use ($core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT EL.pop_id) 
                            FROM entel_g_redes_inventario.electric_lines EL 
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_electric_lines:=(SELECT count(DISTINCT EL.id) 
                            FROM entel_g_redes_inventario.electric_lines EL 
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_electric_lines

                    FROM entel_pops.crms
                "));
                return $electricLinesQuantity;
            });
        }
        return new ElectricLineResource($electricLinesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function electricLineDataCrm($crm_id, $core)
    {
        if (Cache::has('electricLinesData_crm'.$crm_id.'_core'.$core)) {
            $electricLinesQuantity = Cache::get('electricLinesData_crm'.$crm_id.'_core'.$core);
        } else {
            $electricLinesQuantity = Cache::remember('electricLinesData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- POP FIJOS
                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT EL.pop_id) 
                            FROM entel_g_redes_inventario.electric_lines EL 
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_electric_lines:=(SELECT count(DISTINCT EL.id) 
                            FROM entel_g_redes_inventario.electric_lines EL 
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_electric_lines

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $electricLinesQuantity;
            });
        }
        return new ElectricLineResource($electricLinesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function electricLineDataZona($zona_id, $core)
    {
        if (Cache::has('electricLinesData_zona'.$zona_id.'_core'.$core)) {
            $electricLinesQuantity = Cache::get('electricLinesData_zona'.$zona_id.'_core'.$core);
        } else {
            $electricLinesQuantity = Cache::remember('electricLinesData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP FIJOS
                    @q_pops:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_pops,

                    @q_info:=(SELECT count(DISTINCT EL.pop_id) 
                            FROM entel_g_redes_inventario.electric_lines EL 
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_electric_lines:=(SELECT count(DISTINCT EL.id) 
                            FROM entel_g_redes_inventario.electric_lines EL
                            INNER JOIN entel_pops.pops P ON EL.pop_id = P.id 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_electric_lines

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $electricLinesQuantity;
            });
        }
        return new ElectricLineResource($electricLinesQuantity);
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
        $electricLines = ElectricLine::where('pop_id', $id)->get();
        return new ElectricLineResource($electricLines);
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
