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
                $popsMap = Pop::leftJoin('classifications', function ($join) {
                        $join->on('pops.id', '=', 'classifications.pop_id')
                        ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    })
                    ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                    ->select(
                        'pops.id as pop_id',
                        'pops.*',
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
    public function dashboardMapCrm($crm_id)
    {
        if (Cache::has('dashboardMap_crm'.$crm_id)) {
            $pops_crm = Cache::get('dashboardMap_crm'.$crm_id);
        } else {
            $pops_crm = Cache::remember('dashboardMap_crm'.$crm_id, $this->minutes, function () use ($crm_id) {
                $popsCrm = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', function($join) {
                        $join->on('comunas.zona_id', '=', 'zonas.id');
                    })
                    ->leftJoin('classifications', function ($join) {
                        $join->on('pops.id', '=', 'classifications.pop_id')
                        ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    })
                    ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                    ->where('zonas.crm_id', $crm_id)
                    ->select(
                        'pops.id as pop_id',
                        'pops.*',
                        'classifications.classification_type_id',
                        'classification_types.classification_type'
                    )
                    ->get();
                return $popsCrm; 
            });
        }
        return new PopResource($pops_crm);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapZona($zona_id)
    {
        if (Cache::has('dashboardMap_zona'.$zona_id)) {
            $pops_zona = Cache::get('dashboardMap_zona'.$zona_id);
        } else {
            $pops_zona = Cache::remember('dashboardMap_zona'.$zona_id, $this->minutes, function () use ($zona_id) {
                $popsZona = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                                ->leftJoin('classifications', function ($join) {
                                    $join->on('pops.id', '=', 'classifications.pop_id')
                                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                                })
                                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                                ->where('comunas.zona_id', $zona_id)
                                ->select(
                                    'pops.id as pop_id',
                                    'pops.*',
                                    'classifications.classification_type_id',
                                    'classification_types.classification_type'
                                )
                                ->get();
                return $popsZona; 
            });
        }
        return new PopResource($pops_zona);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapCore()
    {
        if (Cache::has('dashboardMap_core')) {
            $pops = Cache::get('dashboardMap_core');
        } else {
            $pops = Cache::remember('dashboardMap_core', $this->minutes, function () {
                $popsMap = Pop::leftJoin('classifications', function ($join) {
                        $join->on('pops.id', '=', 'classifications.pop_id')
                        ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    })
                    ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                    ->where('classifications.classification_type_id', 1)
                    ->select(
                        'pops.id as pop_id',
                        'pops.*',
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
    public function dashboardMapCrmCore($crm_id)
    {
        if (Cache::has('dashboardMap_crm'.$crm_id.'_core')) {
            $pops_crm = Cache::get('dashboardMap_crm'.$crm_id.'_core');
        } else {
            $pops_crm = Cache::remember('dashboardMap_crm'.$crm_id.'_core', $this->minutes, function () use ($crm_id) {
                $popsCrm = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', function($join) {
                        $join->on('comunas.zona_id', '=', 'zonas.id');
                    })
                    ->leftJoin('classifications', function ($join) {
                        $join->on('pops.id', '=', 'classifications.pop_id')
                        ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    })
                    ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                    ->where('classifications.classification_type_id', 1)
                    ->where('zonas.crm_id', $crm_id)
                    ->select(
                        'pops.id as pop_id',
                        'pops.*',
                        'classifications.classification_type_id',
                        'classification_types.classification_type'
                    )
                    ->get();
                return $popsCrm; 
            });
        }
        return new PopResource($pops_crm);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapZonaCore($zona_id)
    {
        if (Cache::has('dashboardMap_zona'.$zona_id.'_core')) {
            $pops_zona = Cache::get('dashboardMap_zona'.$zona_id.'_core');
        } else {
            $pops_zona = Cache::remember('dashboardMap_zona'.$zona_id.'_core', $this->minutes, function () use ($zona_id) {
                $popsZona = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                                ->leftJoin('classifications', function ($join) {
                                    $join->on('pops.id', '=', 'classifications.pop_id')
                                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                                })
                                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                                ->where('classifications.classification_type_id', 1)
                                ->where('comunas.zona_id', $zona_id)
                                ->select(
                                    'pops.id as pop_id',
                                    'pops.*',
                                    'classifications.classification_type_id',
                                    'classification_types.classification_type'
                                )
                                ->get();
                return $popsZona; 
            });
        }
        return new PopResource($pops_zona);
    }


     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMapPop($pop_id)
    {
        $pops = Pop::with('comuna.zona.crm')
                    ->where('id', $pop_id)
                    ->get();

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

                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';
                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 1
                            $condition
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 2
                            $condition
                            ) AS movil
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id as id,
                    @zona:=nombre_zona AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 1
                            $condition
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 2
                            $condition
                            ) AS movil
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id as id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP FIJOS
                    @fijo:=(SELECT count(P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 1
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS fijo,

                    -- POP MOVILES
                    @movil:=(SELECT count(P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.businesses B ON P.id = B.pop_id AND B.business_type_id = 2
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS movil
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) as tec4g700,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) as tec4g700,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id 
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) as tec2g900,
                    
                    @2g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec2_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec3_g1900_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g700_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            ) as tec4g700,

                    @4g2600:=(SELECT COUNT(DISTINCT TA.pop_id) FROM entel_pops.tec4_g2600_cells TA 
                            INNER JOIN entel_pops.pops P ON TA.pop_id = P.id
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.bafi = 1) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.olt = 1) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.olt_3play = 1) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.red_minima_n1 = 1) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition 
                            WHERE P.red_minima_n1 = 1) as red_minima_n2
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.bafi = 1) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.olt = 1) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.olt_3play = 1) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.red_minima_n1 = 1) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            WHERE P.red_minima_n1 = 1) as red_minima_n2
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
                $core == 1 ? $condition = 'INNER JOIN entel_pops.classifications CL ON P.id = CL.pop_id AND CL.classification_type_id IN (1)' : $condition = '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.bafi = 1) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt = 1) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt_3play = 1) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P
                            $condition 
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1) as red_minima_n2
                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
                return $servicesQuantity;
            });
        }

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
