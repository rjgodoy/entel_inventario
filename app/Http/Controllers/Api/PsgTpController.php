<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\PsgTp as PsgTpResource;
use App\PsgTpSource;
use App\PsgTp;
use App\Site;
use DB;

class PsgTpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, PsgTp $psgTp)
    {
        // $psgTpsSource = PsgTpSource::join('TIPO_TRABAJO_INVENTARIO', 'TIPO_TRABAJO_INVENTARIO.ID_TIPOCLASIF', '=', 'CONSOLIDADO_INVENTARIO.ID_TPCLAS')
        //     ->join('TRABAJO_INVENTARIO', 'TRABAJO_INVENTARIO.ID', '=', 'TIPO_TRABAJO_INVENTARIO.ID_TRABAJO')

        //     ->leftJoin('SITIOS_PLANNED', 'CONSOLIDADO_INVENTARIO.PLANNED_ID', '=', 'SITIOS_PLANNED.PLANNED_ID')
        //     ->leftJoin('o_m.SITIOS', 'SITIOS.SITE_ID', '=', 'SITIOS_PLANNED.SITE_ID')
            
        //     ->join('PLANNED', 'CONSOLIDADO_INVENTARIO.PLANNED_ID', '=', 'PLANNED.ID')

        //     ->whereRaw('PLANNED.ESTADOS_ID NOT IN (8) AND SITIOS.SITIO IS NOT NULL')
        //     ->select(
        //         'CONSOLIDADO_INVENTARIO.*',
        //         'SITIOS_PLANNED.SITE_ID',
        //         'SITIOS.SITIO',
        //         'TRABAJO_INVENTARIO.DESCRIPCION',
        //         'PLANNED.ESTADOS_ID'
        //     )
        //     ->orderBy('CONSOLIDADO_INVENTARIO.FECHA_INGRESO')
        //     ->get();

        // return self::update($request, $psgTp, $psgTpsSource);

        $psgTpData = PsgTp::with('psg_tp_state', 'site')->get();
        return $psgTpData;
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
    public function update(Request $request, PsgTp $psgTp, $psgTpsSource)
    {

        foreach ($psgTpsSource as $tp) {

            // Verifica si el Pop existe en Inventario. Si no existe, lo deja NULL
            if ($tp->SITIO && Site::where('nem_site', $tp->SITIO)->count()) {
                $site_id = Site::where('nem_site', $tp->SITIO)->first()->id;
            } else {
                $site_id = null;
            }

            if (PsgTp::where('tp_id', $tp->PLANNED_ID)->count()) {
                $psgTpUpdate = PsgTp::where('tp_id', $tp->PLANNED_ID)->first();

                $psgTpUpdate->update([
                    'psg_tp_state_id' => $tp->ESTADOS_ID,
                    'updated_at' => $tp->FECHA_MODIFICACION
                ]);  
            } else {
                $psgTp->addData(
                    $tp->PLANNED_ID,
                    $site_id,
                    $tp->ESTADOS_ID,
                    $tp->DESCRIPCION,
                    $tp->USER_INGRESO,
                    $tp->FECHA_INGRESO,
                    $tp->FECHA_MODIFICACION
                );
            }
        } 

        $psgTpData = PsgTp::with('psg_tp_state', 'site')->get();

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
