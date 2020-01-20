<?php

namespace App\Http\Controllers;

use App\PsgTp;
use Illuminate\Http\Request;

class PsgTpController extends Controller
{
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $psgTps = PsgTp::leftJoin('SITIOS_PLANNED', 'CONSOLIDADO_INVENTARIO.PLANNED_ID', '=', 'SITIOS_PLANNED.PLANNED_ID')
            ->leftJoin('o_m.SITIOS', 'SITIOS.SITE_ID', '=', 'SITIOS_PLANNED.SITE_ID')
            ->leftJoin('TIPO_TRABAJO_INVENTARIO', 'TIPO_TRABAJO_INVENTARIO.ID_TIPOCLASIF', '=', 'CONSOLIDADO_INVENTARIO.ID_TPCLAS')
            ->leftJoin('TRABAJO_INVENTARIO', 'TRABAJO_INVENTARIO.ID', '=', 'TIPO_TRABAJO_INVENTARIO.ID_TRABAJO')
            // ->leftJoin(Site::where('nem_site', 'SITIOS.SITIO')->get())
            ->orderBy('CONSOLIDADO_INVENTARIO.FECHA_INGRESO')
            ->get();

        return self::update($psgTps);

        // return $psgTps;
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
     * @param  \App\PsgTp  $psgTp
     * @return \Illuminate\Http\Response
     */
    public function show(PsgTp $psgTp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PsgTp  $psgTp
     * @return \Illuminate\Http\Response
     */
    public function edit(PsgTp $psgTp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PsgTp  $psgTp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PsgTp $psgTp)
    {
        return $psgTp;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PsgTp  $psgTp
     * @return \Illuminate\Http\Response
     */
    public function destroy(PsgTp $psgTp)
    {
        //
    }
}
