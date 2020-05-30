<?php

namespace App\Http\Controllers\Api\Infraestructura;

use App\Exports\InfrastructuresExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\Infrastructure as InfrastructureResource;
use App\Models\Infrastructure;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class InfrastructureController extends Controller
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
    public function infrastructureData($core)
    {
        if (Cache::has('infrastructuresData_core'.$core)) {
            $infrastructuresQuantity = Cache::get('infrastructuresData_core'.$core);
        } else {
            $infrastructuresQuantity = Cache::remember('infrastructuresData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $infrastructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.infrastructures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_infrastructures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.infrastructures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_infrastructures

                    FROM entel_pops.crms
                "));
                return $infrastructuresQuantity;
            });
        }
        return new InfrastructureResource($infrastructuresQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function infrastructureDataCrm($crm_id, $core)
    {
        if (Cache::has('infrastructuresData_crm'.$crm_id.'_core'.$core)) {
            $infrastructuresQuantity = Cache::get('infrastructuresData_crm'.$crm_id.'_core'.$core);
        } else {
            $infrastructuresQuantity = Cache::remember('infrastructuresData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $infrastructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.infrastructures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_infrastructures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.infrastructures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_infrastructures

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $infrastructuresQuantity;
            });
        }
        return new InfrastructureResource($infrastructuresQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function infrastructureDataZona($zona_id, $core)
    {
        if (Cache::has('infrastructuresData_zona'.$zona_id.'_core'.$core)) {
            $infrastructuresQuantity = Cache::get('infrastructuresData_zona'.$zona_id.'_core'.$core);
        } else {
            $infrastructuresQuantity = Cache::remember('infrastructuresData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $infrastructuresQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    @q_info:=(SELECT count(DISTINCT AC.pop_id) 
                            FROM entel_g_redes_inventario.infrastructures AC 
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_infrastructures:=(SELECT count(DISTINCT AC.id) 
                            FROM entel_g_redes_inventario.infrastructures AC
                            INNER JOIN entel_pops.pops P ON AC.pop_id = P.id 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_infrastructures

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $infrastructuresQuantity;
            });
        }
        return new InfrastructureResource($infrastructuresQuantity);
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
        $infrastructure = Infrastructure::with('infrastructure_type')->where('pop_id', $id)->get();
        return new InfrastructureResource($infrastructure);
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
        return (new InfrastructuresExport($request))->download('infraestructuras.xlsx');
    }
}
