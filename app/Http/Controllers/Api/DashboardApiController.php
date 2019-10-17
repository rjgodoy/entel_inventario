<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Pop as PopResource;
use App\Pop;
use DB;

class DashboardApiController extends Controller
{
    protected $minutes = 3600;
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
    public function dashboardMap()
    {
        // if (Cache::has('pops')) {
            // $pops = Cache::get('pops');
        // } else {
            // $pops = Cache::remember('pops', $this->minutes, function () {
                $pops = Pop::all();
                // return $pops; 
            // });
        // }

        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapCrm($crm_id)
    {
        // if (Cache::has('popsCrm'.$crm_id)) {
            // $pops_crm = Cache::get('popsCrm'.$crm_id);
        // } else {
            // $pops_crm = Cache::remember('popsCrm'.$crm_id, $this->minutes, function () {
                $pops_crm = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                            ->join('zonas', function($join) {
                                $join->on('comunas.zona_id', '=', 'zonas.id');
                            })
                            ->where('zonas.crm_id', $crm_id)
                            ->get();
                // return $pops_crm; 
            // });
        // }

        return new PopResource($pops_crm);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapZona($zona_id)
    {
        // if (Cache::has('popsZona'.$zona_id)) {
        //     $pops_crm = Cache::get('popsZona'.$zona_id);
        // } else {
            // $pops_zona = Cache::remember('popsZona'.$zona_id, $this->minutes, function () {
                $pops_zona = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                            ->where('comunas.zona_id', $zona_id)
                            ->get();
                // return $pops_zona; 
            // });
        // }

        return new PopResource($pops_zona);
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapPop($pop_id)
    {
        // $pops = Cache::remember('pops', $this->minutes, function () {
            $pops = Pop::with('comuna.zona.crm')
                        ->where('id', $pop_id)
                        ->get();
            // return $pops; 
        // });

        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popData()
    {
        // $popQuantity = Cache::remember('popQuantity', $this->minutes, function () {
            $popQuantity = DB::select(DB::raw("
                SELECT
                @crm_id:=id AS id,
                @crm:=nombre AS nombre,

                -- POP FIJOS
                @fijo:=(SELECT count(P.id) 
                        FROM entel_pops.pops P 
                        INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                        INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                        INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 1
                        ) AS fijo,

                -- POP MOVILES
                @movil:=(SELECT count(P.id) 
                        FROM entel_pops.pops P 
                        INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                        INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                        INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 2
                        ) AS movil
                FROM entel_pops.crms
                -- GROUP BY id
            "));
            // return $popQuantity;
        // });

        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popDataCrm($crm_id)
    {
        $popQuantity = DB::select(DB::raw("
            SELECT
            @zona_id:=id as id,
            @zona:=nombre AS nombre,

            -- POP FIJOS
            @fijo:=(SELECT count(P.id) 
                    FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 1
                    ) AS fijo,

            -- POP MOVILES
            @movil:=(SELECT count(P.id) 
                    FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 2
                    ) AS movil
            FROM entel_pops.zonas
            WHERE crm_id = $crm_id
        "));

        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popDataZona($zona_id)
    {
        $popQuantity = DB::select(DB::raw("
            SELECT
            @comuna_id:=id as id,
            @comuna:=nombre AS nombre,

            -- POP FIJOS
            @fijo:=(SELECT count(P.id) 
                    FROM entel_pops.pops P
                    INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 1
                    WHERE P.comuna_id = @comuna_id
                    ) AS fijo,

            -- POP MOVILES
            @movil:=(SELECT count(P.id) 
                    FROM entel_pops.pops P
                    INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.pop_class_type_id = 2
                    WHERE P.comuna_id = @comuna_id
                    ) AS movil
            FROM entel_pops.comunas
            WHERE zona_id = $zona_id
        "));

        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyData()
    {
        $techQuantity = DB::select(DB::raw("
            SELECT
            @crm_id:=id AS id,
            @crm:=nombre AS nombre,

            -- TECNOLOGIAS
            @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec2g900,
            
            @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec2g1900,
            
            @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec3g900,

            @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec3g1900,

            @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec4g700,

            @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                    ) as tec4g2600
            FROM entel_pops.crms
            -- GROUP BY CRM.id
        "));

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyDataCrm($crm_id)
    {
        $techQuantity = DB::select(DB::raw("
            SELECT
            @zona_id:=id AS id,
            @zona:=nombre AS nombre,

            -- TECNOLOGIAS
            @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec2g900,
            
            @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec2g1900,
            
            @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec3g900,

            @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec3g1900,

            @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec4g700,

            @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    ) as tec4g2600
            FROM entel_pops.zonas
            WHERE crm_id = $crm_id
        "));

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyDataZona($zona_id)
    {
        $techQuantity = DB::select(DB::raw("
            SELECT
            @comuna_id:=id AS id,
            @comuna:=nombre AS nombre,

            -- TECNOLOGIAS
            @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec2g900,
            
            @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec2g1900,
            
            @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec3g900,

            @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec3g1900,

            @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec4g700,

            @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                    INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                    WHERE P.comuna_id = @comuna_id
                    ) as tec4g2600
            FROM entel_pops.comunas
            WHERE zona_id = $zona_id
        "));

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceData()
    {
        $servicesQuantity = DB::select(DB::raw("
            SELECT
            @crm_id:=id AS id,
            @crm:=nombre AS nombre,
            -- BAFI Y OLT
            @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id 
                    WHERE P.bafi = 1) AS bafi,
            @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id 
                    WHERE P.olt = 1) as olt,
            @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id 
                    WHERE P.olt_3play = 1) as olt_3play,
            @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id 
                    WHERE P.red_minima_n1 = 1) as red_minima_n1,
            @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                    INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id 
                    WHERE P.red_minima_n1 = 1) as red_minima_n2
            FROM entel_pops.crms
            -- GROUP BY CRM.id
        "));

        return new PopResource($servicesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceDataCrm($crm_id)
    {
        $servicesQuantity = DB::select(DB::raw("
            SELECT
            @zona_id:=id AS id,
            @zona:=nombre AS nombre,
            -- BAFI Y OLT
            @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    WHERE P.bafi = 1) AS bafi,
            @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    WHERE P.olt = 1) as olt,
            @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    WHERE P.olt_3play = 1) as olt_3play,
            @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    WHERE P.red_minima_n1 = 1) as red_minima_n1,
            @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                    INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                    WHERE P.red_minima_n1 = 1) as red_minima_n2
            FROM entel_pops.zonas
            WHERE crm_id = $crm_id
        "));

        return new PopResource($servicesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceDataZona($zona_id)
    {
        $servicesQuantity = DB::select(DB::raw("
            SELECT
            @comuna_id:=id AS id,
            @comuna:=nombre AS nombre,
            -- BAFI Y OLT
            @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                    WHERE P.comuna_id = @comuna_id
                    AND P.bafi = 1) AS bafi,
            @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                    WHERE P.comuna_id = @comuna_id
                    AND P.olt = 1) as olt,
            @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                    WHERE P.comuna_id = @comuna_id
                    AND P.olt_3play = 1) as olt_3play,
            @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                    WHERE P.comuna_id = @comuna_id
                    AND P.red_minima_n1 = 1) as red_minima_n1,
            @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                    WHERE P.comuna_id = @comuna_id
                    AND P.red_minima_n1 = 1) as red_minima_n2
            FROM entel_pops.comunas
            WHERE zona_id = $zona_id
        "));

        return new PopResource($servicesQuantity);
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
        //
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
