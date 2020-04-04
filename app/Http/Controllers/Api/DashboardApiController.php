<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Pop as PopResource;
use App\Models\Pop;
use App\Models\Site;
use App\Models\Technology;
use App\Models\Room;
use App\Models\PsgTp;
use DB;
use Carbon\Carbon;

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
        //             $q->where('state_id', 1);
        //         }])->groupBy('id')->get();

        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : 'id != '.$zona_id;

        $pops = Pop::whereHas('sites', function($q) use($condition_core) { 
                    $q->where(function($p) {
                        $p->where(function($w) {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1);
                        })
                        ->orWhere(function($s) {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            });
                        });
                    })
                    ->whereRaw($condition_core);
                    })
                    ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                        $q->whereRaw($condition_crm)
                        ->whereRaw($condition_zona);
                    })
                    ->distinct('pops.id')->count();


        $sites = Site::where(function($q) use ($condition_core) {
                        $q->where(function($w) {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1);
                        })->orWhere(function($s) {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            });
                        });
                    })
                    ->whereRaw($condition_core)
                    ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
                        $q->whereRaw($condition_crm)->whereRaw($condition_zona);
                    })
                    ->distinct('sites.id')->count();

        $technologies = Technology::whereHas('site', function($p) use($condition_core) { 
                $p->whereRaw($condition_core);
            })
            ->whereHas('site.pop.comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : 'id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->whereRaw('IF(frequency = 900, technology_type_id != 1, 1)')
            ->where('state_id', 1)
            ->distinct('technologies.id')->count();

        $critics = Room::whereHas('pop.sites', function($q) use($condition_core) { 
                $q->where(function($p) {
                    $p->where(function($w) {
                        $w->whereIn('site_type_id', [1,3,4])
                        ->where('state_id', 1);
                    })
                    ->orWhere(function($s) {
                        $s->whereIn('site_type_id', [2])
                        ->whereHas('technologies', function($r) {
                            $r->where('state_id', 1);
                        });
                    });
                })
                ->whereRaw($condition_core);
            })
            ->whereHas('pop.comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->where('criticity', 1)
            ->distinct('pop_id')->count('pop_id');

        $alba_project = Pop::join('sites', function($query) use($condition_core) { 
                $query->on('sites.pop_id', '=', 'pops.id')
                ->whereRaw($condition_core);
            })
            ->whereHas('comuna.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->where('alba_project', 1)
            ->distinct('pops.id')->count();


        $datos = [
            'pops' => $pops,
            'sites' => $sites,
            'technologies' => $technologies,
            'critics' => $critics,
            'alba_project' => $alba_project
        ];   

        return $datos;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboardMap(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // if (Cache::has('dashboardMap_core_'.$core.'_crm_'.$crm_id.'_zona_'.$zona_id)) {
        //     $popsMap = Cache::get('dashboardMap_core_'.$core.'_crm_'.$crm_id.'_zona_'.$zona_id);
        // } else {
        //     $popsMap = Cache::remember('dashboardMap_core_'.$core.'_crm_'.$crm_id.'_zona_'.$zona_id, $this->seconds, function () use ($condition_core, $condition_crm, $condition_zona) {

                $popsMap = Pop::whereHas('comuna.zona', function($query) use($condition_crm, $condition_zona) {
                        $query->whereRaw($condition_crm)
                            ->whereRaw($condition_zona);
                    })->whereHas('sites', function($q) use($condition_core) { 
                        $q->where(function($p) {
                            $p->whereIn('site_type_id', [1,3,4])
                            ->orWhere(function($query) {
                                $query->whereIn('site_type_id', [2])
                                ->whereHas('technologies', function($r) {
                                    $r->where('state_id', 1);
                                });
                            });
                        })
                        ->whereRaw($condition_core);
                    })
                    ->select(
                        'id',
                        'nombre',
                        'direccion',
                        'latitude',
                        'longitude'
                    )
                    ->get();

        //         return $popsMap; 
        //     });
        // }

        return $popsMap;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function criticPopList(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : 'id != '.$zona_id;

        // if (Cache::has('criticSites'.$core)) {
        //     $criticSites = Cache::get('criticSites'.$core);
        // } else {
        //     $criticSites = Cache::remember('criticSites'.$core, $this->seconds, function () use ($core) {

                $criticSites = Room::with('pop.comuna.zona.crm', 'pop.sites.classification_type')
                    ->whereHas('pop.sites', function($q) use($condition_core) { 
                        $q->whereRaw($condition_core);
                    })
                    ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
                        $q->whereRaw($condition_crm)->whereRaw($condition_zona);
                    })
                    ->where('criticity', 1)
                    ->groupBy('pop_id')
                    ->paginate(10);

        //         return $criticSites; 
        //     });
        // }
        return new PopResource($criticSites);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function criticPopsMap(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // if (Cache::has('criticPops'.$core)) {
        //     $criticPops = Cache::get('criticPops'.$core);
        // } else {
        //     $criticPops = Cache::remember('criticPops'.$core, $this->seconds, function () use ($core) {


            $criticPops = Pop::whereHas('comuna.zona', function($query) use($condition_crm, $condition_zona) {
                        $query->whereRaw($condition_crm)
                            ->whereRaw($condition_zona);
                    })->whereHas('sites', function($q) use($condition_core) { 
                        $q->whereRaw($condition_core);
                    })->whereHas('sites.critic_sites', function($p) {
                        $p->where('site_id', '!=', null);
                    })
                    ->select(
                        'id',
                        'nombre',
                        'direccion',
                        'pops.latitude',
                        'pops.longitude'
                    )
                    ->get();

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
    public function albaPopList(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // if (Cache::has('albaPopList'.$core)) {
        //     $albaPopList = Cache::get('albaPopList'.$core);
        // } else {
        //     $albaSites = Cache::remember('albaPopList'.$core, $this->seconds, function () use ($core) {

                $albaPopList = Pop::with('comuna.zona.crm', 'sites.classification_type')
                    ->whereHas('sites', function($q) use($condition_core) { 
                        $q->whereRaw($condition_core);
                    })
                    ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                        $q->whereRaw($condition_crm)->whereRaw($condition_zona);
                    })
                    ->where('alba_project', 1)
                    ->paginate(10);

        //         return $albaPopList;
        //     });
        // }
        return new PopResource($albaPopList);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function albaPopsMap(Request $request)
    {

        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // if (Cache::has('albaPops'.$core)) {
        //     $albaPops = Cache::get('albaPops'.$core);
        // } else {
        //     $albaPops = Cache::remember('albaPops'.$core, $this->seconds, function () use ($core) {

                $albaPops = Pop::join('sites', function($join) use($condition_core) {
                        $join->on('pops.id', '=', 'sites.pop_id')
                            ->whereRaw($condition_core);
                    })
                    ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', function($join) use($condition_crm, $condition_zona) {
                        $join->on('comunas.zona_id', '=', 'zonas.id')
                            ->whereRaw($condition_zona)
                            ->whereRaw($condition_crm);
                    })
                    ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                    ->join('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
                    ->where('pops.alba_project', 1)
                    ->select(
                        'pops.id',
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
                    ->get();

        //         return $albaPops; 
        //     });
        // }
        return new PopResource($albaPops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popData(Request $request)
    {
        $core = $request->core;

        // if (Cache::has('popData_core'.$core)) {
        //     $popQuantity = Cache::get('popData_core'.$core);
        // } else {
        //     $popQuantity = Cache::remember('popData_core'.$core, $this->seconds, function () use ($core) {

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
                            WHERE (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
                                )
                            ) AS pole_site

                    FROM entel_pops.crms
                "));
        //         return $popQuantity;
        //     });
        // }
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

        // if (Cache::has('popData_crm'.$crm_id.'_core'.$core)) {
        //     $popQuantity = Cache::get('popData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $popQuantity = Cache::remember('popData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id as id,
                    @zona:=nombre_zona AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
                                )
                            ) AS pole_site

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
        //         return $popQuantity;
        //     });
        // }
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

        // if (Cache::has('popData_zona'.$zona_id.'_core'.$core)) {
        //     $popQuantity = Cache::get('popData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $popQuantity = Cache::remember('popData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $popQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id as id,
                    @comuna:=nombre_comuna AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            WHERE P.comuna_id = @comuna_id
                            AND (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND P.id IN (
                                SELECT S.pop_id 
                                FROM entel_pops.sites S  
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
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
                                LEFT JOIN entel_pops.technologies T ON S.id = T.site_id
                                WHERE ((T.state_id = 1 AND S.site_type_id = 2) OR (S.state_id = 1 AND S.site_type_id IN (1,3,4)))
                                $condition
                                )
                            ) AS pole_site

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
        //         return $popQuantity;
        //     });
        // }
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

        // if (Cache::has('sitesData_core'.$core)) {
        //     $popQuantity = Cache::get('sitesData_core'.$core);
        // } else {
        //     $popQuantity = Cache::remember('sitesData_core'.$core, $this->seconds, function () use ($core) {

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
                            AND S.state_id = 1
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id AND T.state_id = 1 
                            WHERE S.site_type_id = 2
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 3
                            AND S.state_id = 1
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 4
                            AND S.state_id = 1
                            $condition
                            ) AS phone

                    FROM entel_pops.crms
                "));
        //         return $popQuantity;
        //     });
        // }
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

        // if (Cache::has('sitesData_crm'.$crm_id.'_core'.$core)) {
        //     $sitesQuantity = Cache::get('sitesData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $sitesQuantity = Cache::remember('sitesData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
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
                            AND S.state_id = 1 
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id AND T.state_id = 1 
                            WHERE S.site_type_id = 2
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 3
                            AND S.state_id = 1
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE S.site_type_id = 4
                            AND S.state_id = 1
                            $condition
                            ) AS phone

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
        //         return $sitesQuantity;
        //     });
        // }
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
        
        // if (Cache::has('sitesData_zona'.$zona_id.'_core'.$core)) {
        //     $popQuantity = Cache::get('sitesData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $popQuantity = Cache::remember('sitesData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
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
                            AND S.state_id = 1 
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            INNER JOIN entel_pops.technologies T ON S.id = T.site_id AND T.state_id = 1 
                            WHERE S.site_type_id = 2
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 3
                            AND S.state_id = 1 
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE S.site_type_id = 4
                            AND S.state_id = 1 
                            $condition
                            ) AS phone

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
        //         return $popQuantity;
        //     });
        // }
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

        // if (Cache::has('technologyData_core'.$core)) {
        //     $techQuantity = Cache::get('technologyData_core'.$core);
        // } else {
        //     $techQuantity = Cache::remember('technologyData_core'.$core, $this->seconds, function () use ($core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 1 AND T.frequency = 1900 AND T.state_id IN (1)
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 2 AND T.frequency = 900 AND T.state_id IN (1)
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 700 AND T.state_id IN (1)
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 2600 AND T.state_id IN (1)
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 3500 AND T.state_id IN (1)
                            ) as tecLTE3500

                    FROM entel_pops.crms
                "));
        //         return $techQuantity;
        //     });
        // }

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

        // if (Cache::has('technologyData_crm'.$crm_id.'_core'.$core)) {
        //     $techQuantity = Cache::get('technologyData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $techQuantity = Cache::remember('technologyData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 1 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 900 AND T.state_id IN (1)
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 700 AND T.state_id IN (1)
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 2600 AND T.state_id IN (1)
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 3500 AND T.state_id IN (1)
                            ) as tecLTE3500

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
        //         return $techQuantity;
        //     });
        // }

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

        // if (Cache::has('technologyData_zona'.$zona_id.'_core'.$core)) {
        //     $techQuantity = Cache::get('technologyData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $techQuantity = Cache::remember('technologyData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {
                $condition = $core == 1 ? 'AND S.classification_type_id = 1' : '';

                $techQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 1 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 900 AND T.state_id IN (1)
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 700 AND T.state_id IN (1)
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 1900 AND T.state_id IN (1)
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 2600 AND T.state_id IN (1)
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id AND S.state_id = 1 $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 3500 AND T.state_id IN (1)
                            ) as tecLTE3500

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
        //         return $techQuantity;
        //     });
        // }

        return new PopResource($techQuantity);
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
    // public function counters(Request $request)
    // {

    //     $pop_news = Pop::where('created_at', '>', Carbon::now()->subHours(1))->count();
    //     $sites_news = Site::where('created_at', '>', Carbon::now()->subHours(1))->count();
    //     $last_site = Site::with('pop.comuna.zona.crm')->latest()->first();
    //     $psg_info = PsgTp::where('created_at', '>', Carbon::now()->subHours(5))->count();
        
    //     $datos = [
    //         'pop_news' => $pop_news,
    //         'sites_news' => $sites_news,
    //         'last_site' => $last_site,
    //         'psg_info' => $psg_info,
    //     ];

    //     return $datos;
    // }

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
