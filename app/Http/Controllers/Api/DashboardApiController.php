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

        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'classification_type_id = '.$core : '1 = 1';
        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : '1 = 1';
        $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : '1 = 1';

        $pops = Pop::whereHas('zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->whereHas('sites', function($q) use($condition_core) { 
                $q->withoutTrashed()->whereRaw($condition_core);
            })
            ->distinct('pops.id')->count();

        $sites = Site::whereRaw($condition_core)
            ->whereHas('pop.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            ->distinct('sites.id')->count();

        $technologies = Technology::whereHas('site', function($p) use($condition_core) { 
                $p->whereRaw($condition_core);
            })
            ->whereHas('site.pop.zona', function($q) use($crm_id, $zona_id) {
                $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;
                $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : 'id != '.$zona_id;
                $q->whereRaw($condition_crm)->whereRaw($condition_zona);
            })
            // ->whereRaw('IF(frequency = 900, technology_type_id != 1, 1)')
            ->distinct('technologies.id')->count();

        $critics = Room::whereHas('pop.sites', function($q) use($condition_core) { 
                $q->whereRaw($condition_core);
                // ->where(function($p) {
                //     $p->where(function($w) {
                //         $w->whereIn('site_type_id', [1,3,4])
                //         ->where('state_id', 1);
                //     })
                //     ->orWhere(function($s) {
                //         $s->whereIn('site_type_id', [2])
                //         ->whereHas('technologies', function($r) {
                //             $r->where('state_id', 1);
                //         });
                //     });
                // })
            })
            ->whereHas('pop.zona', function($q) use($crm_id, $zona_id) {
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
            ->whereHas('zona', function($q) use($crm_id, $zona_id) {
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

        $condition_core = $core ? 'sites.classification_type_id = '.$core : '1 = 1';
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : '1 = 1';
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : '1 = 1';

        $popsMap = Pop::whereHas('zona', function($query) use($condition_crm, $condition_zona) {
                $query->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
            })
            ->whereHas('sites', function($q) use($condition_core) { 
                $q->whereRaw($condition_core);
            })
            ->select(
                'id',
                'nombre',
                'direccion',
                'latitude',
                'longitude'
            )
            ->get();

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

                $criticSites = Room::with('pop.comuna', 'pop.zona.crm', 'pop.sites.classification_type')
                    ->whereHas('pop.sites', function($q) use($condition_core) { 
                        $q->whereRaw($condition_core);
                    })
                    ->whereHas('pop.zona', function($q) use($condition_crm, $condition_zona) {
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


            $criticPops = Pop::whereHas('zona', function($query) use($condition_crm, $condition_zona) {
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
                        'latitude',
                        'longitude'
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

                $albaPopList = Pop::with('comuna', 'zona.crm', 'sites.classification_type')
                    ->whereHas('sites', function($q) use($condition_core) { 
                        $q->whereRaw($condition_core);
                    })
                    ->whereHas('zona', function($q) use($condition_crm, $condition_zona) {
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
                        $join->on('pops.zona_id', '=', 'zonas.id')
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
                        'pops.zona_id',
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
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 2
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 3
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 4
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 5
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 6
                            AND S.deleted_at IS NULL
                            $condition
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
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 2
                            AND S.deleted_at IS NULL   
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 3
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 4
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 5
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.pop_type_id = 6
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
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
                    @comuna_id:=C.id as id,
                    @comuna:=C.nombre_comuna AS nombre,

                    -- POP OPTO
                    @opto:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND (P.pop_type_id IS NULL OR P.pop_type_id = 0 OR P.pop_type_id = 1)
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS opto,

                    -- POP RADIO
                    @radio:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 2
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS radio,

                    -- POP REPETIDOR
                    @repetidor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 3
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS repetidor,

                    -- POP INDOOR
                    @indoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 4
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS indoor,

                    -- POP OUTDOOR
                    @outdoor:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 5
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS outdoor,

                    -- POP POLE SITE
                    @pole_site:=(SELECT count(DISTINCT P.id) 
                            FROM entel_pops.pops P
                            INNER JOIN entel_pops.sites S ON S.pop_id = P.id
                            WHERE P.comuna_id = @comuna_id
                            AND P.pop_type_id = 6
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS pole_site

                    FROM entel_pops.comunas C
                    INNER JOIN entel_pops.pops P ON P.comuna_id = C.id
                    WHERE P.zona_id = $zona_id
                    GROUP BY C.id
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
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 1
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            LEFT JOIN entel_pops.technologies T ON S.id = T.site_id 
                            WHERE S.site_type_id = 2
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 3
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 4
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS phone,

                    -- SITIOS REPETIDORES
                    @repetidor:=(SELECT count(DISTINCT S.id) 
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE S.site_type_id = 5
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS repetidor

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
                            WHERE S.site_type_id = 1
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            LEFT JOIN entel_pops.technologies T ON S.id = T.site_id 
                            WHERE S.site_type_id = 2
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 3
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 4
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS phone,

                    -- SITIOS REPETIDORES
                    @repetidor:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 5
                            AND S.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            $condition
                            ) AS repetidor

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
                    @comuna_id:=C.id as id,
                    @comuna:=C.nombre_comuna AS nombre,

                    -- SITIOS FIJOS
                    @fijo:=(SELECT count(DISTINCT S.id) 
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 1
                            AND P.comuna_id = @comuna_id
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS fijo,

                    -- SITIOS MOVILES
                    @movil:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            LEFT JOIN entel_pops.technologies T ON S.id = T.site_id 
                            WHERE S.site_type_id = 2
                            AND P.comuna_id = @comuna_id
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS movil,

                    -- SWITCH
                    @switch:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 3
                            AND P.comuna_id = @comuna_id
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS switch,
                            
                    -- PHONE
                    @phone:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 4
                            AND P.comuna_id = @comuna_id
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS phone,

                    -- SITIOS REPETIDORES
                    @repetidor:=(SELECT count(DISTINCT S.id)
                            FROM entel_pops.sites S
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE S.site_type_id = 5
                            AND P.comuna_id = @comuna_id
                            AND S.deleted_at IS NULL
                            $condition
                            ) AS repetidor

                    FROM entel_pops.comunas C
                    INNER JOIN entel_pops.pops P ON P.comuna_id = C.id 
                    WHERE P.zona_id = $zona_id
                    GROUP BY C.id
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

                    @2g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id 
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id 
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 1 AND T.frequency = 900 
                            AND T.deleted_at IS NULL
                            ) as tec2g900,

                    -- TECNOLOGIAS
                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id 
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id 
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 1 AND T.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 2 AND T.frequency = 900 
                            AND T.deleted_at IS NULL
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 2 AND t.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 700 
                            AND T.deleted_at IS NULL
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 2600 
                            AND T.deleted_at IS NULL
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 3500 
                            AND T.deleted_at IS NULL
                            ) as tecLTE3500,

                    @4g5800:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            INNER JOIN entel_pops.zonas Z ON P.zona_id = Z.id AND Z.crm_id = @crm_id
                            WHERE T.technology_type_id = 3 AND t.frequency = 5800 
                            AND T.deleted_at IS NULL
                            ) as tecLTE5800

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
                    @2g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 1 AND t.frequency = 900 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tec2g900,

                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 1 AND t.frequency = 1900 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 2 AND t.frequency = 900 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 2 AND t.frequency = 1900 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 3 AND t.frequency = 700 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 3 AND t.frequency = 1900 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 3 AND t.frequency = 2600 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 3 AND t.frequency = 3500 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tecLTE3500,

                    @4g5800:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id
                            WHERE T.technology_type_id = 3 AND t.frequency = 5800 
                            AND T.deleted_at IS NULL
                            AND P.zona_id = @zona_id
                            ) as tecLTE5800

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
                    @comuna_id:=C.id AS id,
                    @comuna:=C.nombre_comuna AS nombre,

                    -- TECNOLOGIAS
                    @2g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 1 AND T.frequency = 900 
                            AND T.deleted_at IS NULL
                            ) as tec2g900,

                    @2g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 1 AND T.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tec2g1900,
                    
                    @3g900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 2 AND T.frequency = 900 
                            AND T.deleted_at IS NULL
                            ) as tec3g900,

                    @3g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 2 AND T.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tec3g1900,

                    @4g700:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND T.frequency = 700
                            AND T.deleted_at IS NULL
                            ) as tecLTE700,

                    @4g1900:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND T.frequency = 1900 
                            AND T.deleted_at IS NULL
                            ) as tecLTE1900,

                    @4g2600:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND T.frequency = 2600 
                            AND T.deleted_at IS NULL
                            ) as tecLTE2600,

                    @4g3500:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND T.frequency = 3500 
                            AND T.deleted_at IS NULL
                            ) as tecLTE3500,

                    @4g5800:=(SELECT COUNT(DISTINCT T.id) FROM entel_pops.technologies T 
                            INNER JOIN entel_pops.sites S ON T.site_id = S.id
                            $condition
                            INNER JOIN entel_pops.pops P ON S.pop_id = P.id AND P.comuna_id = @comuna_id
                            WHERE T.technology_type_id = 3 AND T.frequency = 5800 
                            AND T.deleted_at IS NULL
                            ) as tecLTE5800

                    FROM entel_pops.comunas C
                    INNER JOIN entel_pops.pops P ON P.comuna_id = C.id 
                    WHERE P.zona_id = $zona_id
                    GROUP BY C.id
                "));
        //         return $techQuantity;
        //     });
        // }

        return new PopResource($techQuantity);
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
