<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Pop as PopResource;
use App\Pop;
use App\Site;
use App\Technology;
use App\CriticPop;
use App\PsgTp;
use DB;

class DashboardApiController extends Controller
{
    protected $seconds = 86400;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // $pops = Pop::with(['comuna.zona.crm', 'sites.classification_type', 'sites.technologies', 'sites' => function($q) {
        //             $q->where('state_type_id', 1);
        //         }])->groupBy('id')->get();

        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;

        $pops = Pop::whereHas('sites', function($q) use($condition_core) { 
                $q->where('state_type_id', 1)
                ->whereRaw($condition_core);
            })
            ->whereHas('comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->distinct('pops.id')->count();


        $sites = Site::whereHas('pop.comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->where('state_type_id', 1)
            ->whereRaw($condition_core)
            ->distinct('sites.id')->count();

        $technologies = Technology::whereHas('site', function($q) use($condition_core) { 
                $q->where('state_type_id', 1)
                ->whereRaw($condition_core); 
            })
            ->whereHas('site.pop.comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })->distinct('technologies.id')->count();

        $critics = CriticPop::whereHas('pop.sites', function($q) use($condition_core) { 
                $q->where('state_type_id', 1)
                ->whereRaw($condition_core);
            })
            ->whereHas('pop.comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->distinct('pop_id')->count();


        $datos = [
            'pops' => $pops,
            'sites' => $sites,
            'technologies' => $technologies,
            'critics' => $critics
        ];   

        return $datos;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMap()
    {
        // if (Cache::has('dashboardMap')) {
        //     $popsMap = Cache::get('dashboardMap');
        // } else {
        //     $popsMap = Cache::remember('dashboardMap', $this->seconds, function () {
                $popsMap = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                    ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                    ->join('sites', function($join) {
                        $join->on('pops.id', '=', 'sites.pop_id')
                            ->where('sites.state_type_id', 1);
                    })
                    ->join('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
                    ->select(
                        'pops.id as pop_id',
                        'pops.nombre',
                        'pops.direccion',
                        'sites.nem_site',
                        'pops.latitude',
                        'pops.longitude',
                        'comunas.nombre_comuna',
                        'comunas.zona_id',
                        'zonas.crm_id',
                        'zonas.nombre_zona',
                        'crms.nombre_crm',
                        'sites.classification_type_id',
                        'classification_types.classification_type'
                    )
                    ->groupBy('pops.id')
                    ->get();

                // $popsMap = Pop::with('sites.classification_types', 'comuna.zona.crm')->whereHas('sites', function($q) {
                //     $q->where('sites.state_type_id', 1);
                // })->select(
                //     'pops.id as pop_id',
                //     'pops.nombre',
                //     'pops.direccion',
                //     // 'sites.nem_site',
                //     'pops.latitude',
                //     'pops.longitude'
                //     // 'comunas.nombre_comuna',
                //     // 'comunas.zona_id',
                //     // 'zonas.crm_id',
                //     // 'zonas.nombre_zona',
                //     // 'crms.nombre_crm',
                //     // 'sites.classification_type_id',
                //     // 'classification_types.classification_type'
                // )
                // ->groupBy('pops.id')
                // ->get();

        //         return $popsMap; 
        //     });
        // }
        return new PopResource($popsMap);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function criticPops(Request $request)
    {
        $core = $request->core;
        // if (Cache::has('criticPops'.$core)) {
        //     $criticPops = Cache::get('criticPops'.$core);
        // } else {
        //     $criticPops = Cache::remember('criticPops'.$core, $this->seconds, function () use ($core) {
                $criticPops = CriticPop::with('pop.comuna.zona.crm', 'pop.sites.classification_type')
                            ->whereHas('pop.sites', function($q) use($core) { 
                                $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
                                $q->where('state_type_id', 1)
                                ->whereRaw($condition_core); 
                            })
                            ->groupBy('pop_id')
                            ->paginate(12);
        //         return $criticPops; 
        //     });
        // }
        return new PopResource($criticPops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function criticPopsCrm(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;

        // if (Cache::has('criticPops_crm'.$crm_id.'_core'.$core)) {
        //     $criticPops = Cache::get('criticPops_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $criticPops = Cache::remember('criticPops_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($core) {
                $criticPops = CriticPop::with('pop.sites.classification_type')->whereHas('pop.sites', function($q) use($core) {
                    $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
                    $q->where('state_type_id', 1)
                    ->whereRaw($condition_core);
                })
                ->whereHas('pop.comuna.zona.crm', function($q) use($crm_id) {
                    $q->where('id', $crm_id);
                })
                ->groupBy('pop_id')
                ->paginate(12);
        //         return $criticPops; 
        //     });
        // }
        return new PopResource($criticPops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function criticPopsZona(Request $request)
    {
        $core = $request->core;
        $zona_id = $request->zona_id;

        // if (Cache::has('criticPops_zona'.$zona_id.'_core'.$core)) {
        //     $criticPops = Cache::get('criticPops_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $criticPops = Cache::remember('criticPops_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($core) {
                $criticPops = CriticPop::with('pop.sites.classification_type', 'pop.comuna.zona.crm')->whereHas('pop.sites', function($q) use($core) {
                    $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
                    $q->where('state_type_id', 1)
                    ->whereRaw($condition_core);
                })
                ->whereHas('pop.comuna.zona', function($q) use($zona_id) {
                    $q->where('id', $zona_id);
                })
                ->groupBy('pop_id')
                ->paginate(12);
        //         return $criticPops; 
        //     });
        // }
        return new PopResource($criticPops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popData(Request $request)
    {
        $core = $request->core;

        if (Cache::has('popData_core'.$core)) {
            $popQuantity = Cache::get('popData_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 0
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 2
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 3
                            AND P.id IN (
                                SELECT S.pop_id
                                FROM entel_pops.sites S
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 4
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 5
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.pop_type_id = 6
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS pole_site

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
    public function popDataCrm(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;

        if (Cache::has('popData_crm'.$crm_id.'_core'.$core)) {
            $popQuantity = Cache::get('popData_crm'.$crm_id.'_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id as id,
                    @zona:=nombre_zona AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id NOT IN (1,2,3,4,5,6)
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id = 2
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id = 3
                            AND P.id IN (
                                SELECT S.pop_id
                                FROM entel_pops.sites S
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id = 4
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id = 5
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.pop_type_id = 6
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS pole_site

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
    public function popDataZona(Request $request)
    {
        $core = $request->core;
        $zona_id = $request->zona_id;

        if (Cache::has('popData_zona'.$zona_id.'_core'.$core)) {
            $popQuantity = Cache::get('popData_zona'.$zona_id.'_core'.$core);
        } else {
            $popQuantity = Cache::remember('popData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id as id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id NOT IN (1,2,3,4,5,6)
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 2
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 3
                            AND P.id IN (
                                SELECT S.pop_id
                                FROM entel_pops.sites S
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 4
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 5
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 6
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                WHERE S.state_type_id = 1 $condition
                                )
                            ) AS pole_site

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
    public function sitesData(Request $request)
    {
        $core = $request->core;

        if (Cache::has('sitesData_core'.$core)) {
            $popQuantity = Cache::get('sitesData_core'.$core);
        } else {
            $popQuantity = Cache::remember('sitesData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- SITIOS FIJOS
                    @fijo:=(SELECT count(DISTINCT S.id) 
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 1
                            AND S.state_type_id = 1 
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 2
                            AND S.state_type_id = 1
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 3
                            AND S.state_type_id = 1
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 4
                            AND S.state_type_id = 1
                            $condition
                            ) AS phone

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
    public function sitesDataCrm(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;

        if (Cache::has('sitesData_crm'.$crm_id.'_core'.$core)) {
            $sitesQuantity = Cache::get('sitesData_crm'.$crm_id.'_core'.$core);
        } else {
            $sitesQuantity = Cache::remember('sitesData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $sitesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id as id,
                    @zona:=nombre_zona AS nombre,

                    -- SITIOS FIJOS
                    @fijo:=(SELECT count(DISTINCT S.id) 
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 1
                            AND S.state_type_id = 1 
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 2
                            AND S.state_type_id = 1
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 3
                            AND S.state_type_id = 1
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 4
                            AND S.state_type_id = 1
                            $condition
                            ) AS phone

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $sitesQuantity;
            });
        }
        return new PopResource($sitesQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sitesDataZona(Request $request)
    {
        $core = $request->core;
        $zona_id = $request->zona_id;
        
        if (Cache::has('sitesData_zona'.$zona_id.'_core'.$core)) {
            $popQuantity = Cache::get('sitesData_zona'.$zona_id.'_core'.$core);
        } else {
            $popQuantity = Cache::remember('sitesData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id as id,
                    @comuna:=nombre_comuna AS nombre,

                    -- SITIOS FIJOS
                    @fijo:=(SELECT count(DISTINCT S.id) 
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 1
                            AND S.state_type_id = 1 
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 2
                            AND S.state_type_id = 1 
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 3
                            AND S.state_type_id = 1 
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 4
                            AND S.state_type_id = 1 
                            $condition
                            ) AS phone

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
    public function technologyData(Request $request)
    {
        $core = $request->core;

        if (Cache::has('technologyData_core'.$core)) {
            $techQuantity = Cache::get('technologyData_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_core'.$core, $this->seconds, function () use ($core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 1
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 2
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3
                            ) as tec3g1900,

                    @3g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 4
                            ) as tec3g3500,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 5
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 6
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 7
                            ) as tec4g2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 8
                            ) as tec4g3500

                    FROM entel_pops.crms
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
    public function technologyDataCrm(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;

        if (Cache::has('technologyData_crm'.$crm_id.'_core'.$core)) {
            $techQuantity = Cache::get('technologyData_crm'.$crm_id.'_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 1
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 2
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 3
                            ) as tec3g1900,

                    @3g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 4
                            ) as tec3g3500,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 5
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 6
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 7
                            ) as tec4g2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 8
                            ) as tec4g3500

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
    public function technologyDataZona(Request $request)
    {
        $core = $request->core;
        $zona_id = $request->zona_id;

        if (Cache::has('technologyData_zona'.$zona_id.'_core'.$core)) {
            $techQuantity = Cache::get('technologyData_zona'.$zona_id.'_core'.$core);
        } else {
            $techQuantity = Cache::remember('technologyData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 1
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 2
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3
                            ) as tec3g1900,

                    @3g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 4
                            ) as tec3g3500,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 5
                            ) as tec4g700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 6
                            ) as tec4g1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 7
                            ) as tec4g2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_type_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 8
                            ) as tec4g3500

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
            $servicesQuantity = Cache::remember('serviceData_core'.$core, $this->seconds, function () use ($core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.bafi = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.olt = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.olt_3play = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
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
            $servicesQuantity = Cache::remember('serviceData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.bafi = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.olt = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.olt_3play = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
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
            $servicesQuantity = Cache::remember('serviceData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $servicesQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,
                    -- BAFI Y OLT
                    @bafi:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.bafi = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS bafi,
                    @olt:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt,
                    @olt_3play:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.olt_3play = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as olt_3play,
                    @rmn1:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as red_minima_n1,
                    @rmn2:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.red_minima_n1 = 1
                            AND P.state_type_id = 1
                            $condition
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
            $infraQuantity = Cache::remember('infraData_core'.$core, $this->seconds, function () use ($core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.offgrid = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.solar = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.eolica = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE P.alba_project = 1
                            AND P.state_type_id = 1
                            $condition
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
            $infraQuantity = Cache::remember('infraData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.offgrid = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.solar = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.eolica = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P 
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE P.alba_project = 1
                            AND P.state_type_id = 1
                            $condition
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
            $infraQuantity = Cache::remember('infraData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND P.classification_type_id = 1' : '';

                $infraQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,
                    -- BAFI Y OLT
                    @offgrid:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.offgrid = 1
                            AND P.state_type_id = 1
                            $condition
                            ) AS offgrid,
                    @solar:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.solar = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as solar,
                    @eolica:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.eolica = 1
                            AND P.state_type_id = 1
                            $condition
                            ) as eolica,
                    @alba:=(SELECT count(P.id) FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND P.alba_project = 1
                            AND P.state_type_id = 1
                            $condition
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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function counters(Request $request)
    {
        $pret_info = Site::whereYear('created_at', date("Y"))->whereMonth('created_at', date("m"))->count();
        $psg_info = PsgTp::whereYear('created_at', date("Y"))->whereMonth('created_at', date("m"))->count();

        // $psg_info = AirConditioner::all();

        $datos = [
            'pret' => $pret_info,
            'psg' => $psg_info
        ]; 

        return $datos;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function lastData()
    {
        $last_updated_pops = Pop::orderBy('updated_at', 'desc')->first()->updated_at;
        $last_updated_sites = Site::orderBy('updated_at', 'desc')->first()->updated_at;
        $last_updated_technologies = Technology::orderBy('updated_at', 'desc')->first()->updated_at;

        $datos = [
            'pops' => $last_updated_pops,
            'sites' => $last_updated_sites,
            'technologies' => $last_updated_technologies
        ]; 

        return $datos;
    }
}
