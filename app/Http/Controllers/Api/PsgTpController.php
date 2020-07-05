<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\PsgTp as PsgTpResource;
use App\Models\PsgTpSource;
use App\Models\PsgTp;
use App\Models\Site;
use DB;

class PsgTpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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

        return self::update($psgTpsSource);

        // $psgTpData = PsgTp::with('psg_tp_state', 'site')->get();
        // return $psgTpData;
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
    public function show(Request $request, $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($psgTpsSource)
    {
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
        return $psgTpData;
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
