<?php

namespace App\Http\Controllers\Api\Infraestructura;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\PowerRectifier as PowerRectifierResource;
use App\PowerRectifier;
use DB;

class PowerRectifierController extends Controller
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
    public function powerRectifierData($core)
    {
        if (Cache::has('powerRectifiersData_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_type_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_power_rectifiers

                    FROM entel_pops.crms
                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function powerRectifierDataCrm($crm_id, $core)
    {
        if (Cache::has('powerRectifiersData_crm'.$crm_id.'_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_crm'.$crm_id.'_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_type_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_power_rectifiers

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function powerRectifierDataZona($zona_id, $core)
    {
        if (Cache::has('powerRectifiersData_zona'.$zona_id.'_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_zona'.$zona_id.'_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_type_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_power_rectifiers

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id

                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
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
        $powerRectifier = PowerRectifier::with('power_rectifier_type')->where('pop_id', $id)->get();
        return new PowerRectifierResource($powerRectifier);
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
