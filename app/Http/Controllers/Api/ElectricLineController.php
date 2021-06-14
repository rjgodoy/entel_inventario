<?php

namespace App\Http\Controllers\Api;

use App\Exports\ElectricLinesExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\ElectricLine as ElectricLineResource;
use App\Http\Resources\ElectricLineCollection;
use App\Models\ElectricLine;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

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
        $electricLines = ElectricLine::with(
            'pop.sites',
            'pop.zona', 
            'electric_line_type',
            'postation_type',
            'ferreteria_type',
            'terrain_type',
            'vegetation_type',
            'phase_type',
            'junctions',
            'transformers'
        )->paginate(20);

        return new ElectricLineCollection($electricLines);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function electricLineData($core)
    {
        // if (Cache::has('electricLinesData_core'.$core)) {
        //     $electricLinesQuantity = Cache::get('electricLinesData_core'.$core);
        // } else {
            // $electricLinesQuantity = Cache::remember('electricLinesData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

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
        //         return $electricLinesQuantity;
        //     });
        // }
        return new ElectricLineResource($electricLinesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function electricLineDataCrm($crm_id, $core)
    {
        // if (Cache::has('electricLinesData_crm'.$crm_id.'_core'.$core)) {
        //     $electricLinesQuantity = Cache::get('electricLinesData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $electricLinesQuantity = Cache::remember('electricLinesData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

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
        //         return $electricLinesQuantity;
        //     });
        // }
        return new ElectricLineResource($electricLinesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function electricLineDataZona($zona_id, $core)
    {
        // if (Cache::has('electricLinesData_zona'.$zona_id.'_core'.$core)) {
        //     $electricLinesQuantity = Cache::get('electricLinesData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $electricLinesQuantity = Cache::remember('electricLinesData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $electricLinesQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

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
        //         return $electricLinesQuantity;
        //     });
        // }
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
        $electricLines = ElectricLine::with('electric_line_type', 'phase_type', 'transformers')->where('pop_id', $id)->get();
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

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        return (new ElectricLinesExport($request))->download('electric_lines.xlsx');
    }
}
