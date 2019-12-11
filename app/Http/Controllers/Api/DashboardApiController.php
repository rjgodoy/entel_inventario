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
        if (Cache::has('dashboardMap')) {
            $pops = Cache::get('dashboardMap');
        } else {
            $pops = Cache::remember('dashboardMap', $this->minutes, function () {
                $popsMap = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                    ->leftJoin('classifications', function ($join) {
                        $join->on('pops.id', '=', 'classifications.pop_id')
                        ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    })
                    ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                    ->select(
                        'pops.id as pop_id',
                        'pops.*',
                        'comunas.zona_id',
                        'zonas.crm_id',
                        'classifications.classification_type_id',
                        'classification_types.classification_type'
                    )
                    ->get();
                return $popsMap; 
            });
        }
        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popData($core)
    {
        if (Cache::has('popData_core'.$core)) {
            $popQuantity = Cache::get('popData_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_core'.$core, $this->minutes, function () use ($core) {

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 1
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NOT NULL
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NOT NULL
                            ) AS movil,

                    -- POLE SITE
                    @poleSite:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.created_at = (SELECT MAX(pop_classes.created_at) FROM entel_pops.pop_classes WHERE pop_classes.pop_id = P.id) AND PC.pop_class_type_id = 6
                            $condition
                            WHERE P.state = 1
                            ) AS poleSite,

                    -- POP MOVILES
                    @others:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NULL
                            ) AS others

                    FROM entel_pops.crms
                "));
                return $popQuantity;
            });
        }
        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popDataCrm($crm_id, $core)
    {
        if (Cache::has('popData_crm'.$crm_id.'_core'.$core)) {
            $popQuantity = Cache::get('popData_crm'.$crm_id.'_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_crm'.$crm_id.'_core'.$core, $this->minutes, function () use ($crm_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id as id,
                    @zona:=nombre_zona AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 1
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NOT NULL
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NOT NULL
                            ) AS movil,

                    -- POLE SITE
                    @poleSite:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.created_at = (SELECT MAX(pop_classes.created_at) FROM entel_pops.pop_classes WHERE pop_classes.pop_id = P.id) AND PC.pop_class_type_id = 6
                            $condition
                            WHERE P.state = 1
                            ) AS poleSite,

                    -- POP MOVILES
                    @others:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NULL
                            ) AS others

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $popQuantity;
            });
        }
        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popDataZona($zona_id, $core)
    {
        if (Cache::has('popData_zona'.$zona_id.'_core'.$core)) {
            $popQuantity = Cache::get('popData_zona'.$zona_id.'_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_zona'.$zona_id.'_core'.$core, $this->minutes, function () use ($zona_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id as id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 1
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            AND P.nem_fijo IS NOT NULL
                            AND P.state = 1
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            AND P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NOT NULL
                            ) AS movil,

                    -- POLE SITE
                    @poleSite:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.pop_classes PC ON P.id = PC.pop_id AND PC.created_at = (SELECT MAX(pop_classes.created_at) FROM entel_pops.pop_classes WHERE pop_classes.pop_id = P.id) AND PC.pop_class_type_id = 6
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            AND P.state = 1
                            ) AS poleSite,

                    -- POP MOVILES
                    @others:=(SELECT count(P.id) 
                            FROM entel_pops.pops P
                            -- INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.created_at = (SELECT MAX(businesses.created_at) FROM entel_pops.businesses WHERE businesses.pop_id = P.id) AND B.business_type_id = 2
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            AND P.state = 1
                            AND P.nem_fijo IS NULL
                            AND P.nem_movil IS NOT NULL
                            AND P.cod_planificacion IS NULL
                            ) AS others

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $popQuantity;
            });
        }
        return new PopResource($popQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyData($core)
    {
        if (Cache::has('technologyData_core'.$core)) {
            $techQuantity = Cache::get('technologyData_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_core'.$core, $this->minutes, function () use ($core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g2600
                    FROM entel_pops.crms
                    -- GROUP BY CRM.id
                "));
                return $techQuantity;
            });
        }

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyDataCrm($crm_id, $core)
    {
        if (Cache::has('technologyData_crm'.$crm_id.'_core'.$core)) {
            $techQuantity = Cache::get('technologyData_crm'.$crm_id.'_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_crm'.$crm_id.'_core'.$core, $this->minutes, function () use ($crm_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec4g2600
                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $techQuantity;
            });
        }

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function technologyDataZona($zona_id, $core)
    {
        if (Cache::has('technologyData_zona'.$zona_id.'_core'.$core)) {
            $techQuantity = Cache::get('technologyData_zona'.$zona_id.'_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_zona'.$zona_id.'_core'.$core, $this->minutes, function () use ($zona_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id AND P.state = 1
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec4g2600
                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $techQuantity;
            });
        }

        return new PopResource($techQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceData($core)
    {
        if (Cache::has('serviceData_core'.$core)) {
            $servicesQuantity = Cache::get('serviceData_core'.$core);
        } else {
            $servicesQuantity = Cache::remember('serviceData_core'.$core, $this->minutes, function () use ($core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.bafi = 1
                            AND P.state = 1
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.olt = 1
                            AND P.state = 1
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.olt_3play = 1
                            AND P.state = 1
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n2
                    FROM entel_pops.crms
                    -- GROUP BY CRM.id
                "));
                return $servicesQuantity;
            });
        }

        return new PopResource($servicesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceDataCrm($crm_id, $core)
    {
        if (Cache::has('serviceData_crm'.$crm_id.'_core'.$core)) {
            $servicesQuantity = Cache::get('serviceData_crm'.$crm_id.'_core'.$core);
        } else {
            $servicesQuantity = Cache::remember('serviceData_crm'.$crm_id.'_core'.$core, $this->minutes, function () use ($crm_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.bafi = 1
                            AND P.state = 1
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.olt = 1
                            AND P.state = 1
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.olt_3play = 1
                            AND P.state = 1
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n2
                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $servicesQuantity;
            });
        }

        return new PopResource($servicesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serviceDataZona($zona_id, $core)
    {
        if (Cache::has('serviceData_zona'.$zona_id.'_core'.$core)) {
            $servicesQuantity = Cache::get('serviceData_zona'.$zona_id.'_core'.$core);
        } else {
            $servicesQuantity = Cache::remember('serviceData_zona'.$zona_id.'_core'.$core, $this->minutes, function () use ($zona_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.bafi = 1
                            AND P.state = 1
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt = 1
                            AND P.state = 1
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt_3play = 1
                            AND P.state = 1
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1
                            AND P.state = 1
                            ) as red_minima_n2
                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $servicesQuantity;
            });
        }

        return new PopResource($servicesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function infraData($core)
    {
        if (Cache::has('infraData_core'.$core)) {
            $infraQuantity = Cache::get('infraData_core'.$core);
        } else {
            $infraQuantity = Cache::remember('infraData_core'.$core, $this->minutes, function () use ($core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.offgrid = 1
                            AND P.state = 1
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.solar = 1
                            AND P.state = 1
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.eolica = 1
                            AND P.state = 1
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.alba_project = 1
                            AND P.state = 1
                            ) as alba_project
                    FROM entel_pops.crms
                    -- GROUP BY CRM.id
                "));
                return $infraQuantity;
            });
        }

        return new PopResource($infraQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function infraDataCrm($crm_id, $core)
    {
        if (Cache::has('infraData_crm'.$crm_id.'_core'.$core)) {
            $infraQuantity = Cache::get('infraData_crm'.$crm_id.'_core'.$core);
        } else {
            $infraQuantity = Cache::remember('infraData_crm'.$crm_id.'_core'.$core, $this->minutes, function () use ($crm_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.offgrid = 1
                            AND P.state = 1
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.solar = 1
                            AND P.state = 1
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.eolica = 1
                            AND P.state = 1
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.alba_project = 1
                            AND P.state = 1
                            ) as alba_project
                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $infraQuantity;
            });
        }

        return new PopResource($infraQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function infraDataZona($zona_id, $core)
    {
        if (Cache::has('infraData_zona'.$zona_id.'_core'.$core)) {
            $infraQuantity = Cache::get('infraData_zona'.$zona_id.'_core'.$core);
        } else {
            $infraQuantity = Cache::remember('infraData_zona'.$zona_id.'_core'.$core, $this->minutes, function () use ($zona_id, $core) {
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.created_at = (SELECT MAX(classifications.created_at) FROM entel_pops.classifications WHERE classifications.pop_id = P.id) AND CL.classification_type_id = 1' : $condition = '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.offgrid = 1
                            AND P.state = 1
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.solar = 1
                            AND P.state = 1
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.eolica = 1
                            AND P.state = 1
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.alba_project = 1
                            AND P.state = 1
                            ) as alba_project
                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $infraQuantity;
            });
        }

        return new PopResource($infraQuantity);
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
