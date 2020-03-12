<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Pop as PopResource;
use App\Models\Pop;
use App\Models\Site;
use App\Models\PopMenu;
use App\Models\PopMenuType;

class PopController extends Controller
{
    protected $seconds = 86400;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // if (Cache::has('pops')) {
        //     $pops = Cache::get('pops');
        // } else {
            // $pops = Cache::remember('pops', $this->seconds, function () {
                $pops = Pop::with('sites.classification_type', 'comuna.zona.crm')->orderBy('id', 'asc')->paginate(20);
                // return $pops;
        //     });
        // }
        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popsCrm(Request $request)
    {
        $crm_id = $request->crm_id;
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', function($join) use ($crm_id) {
                    $join->on('zonas.crm_id', '=', 'crms.id')
                    ->where('crms.id', $crm_id);
                })
                // Classificación
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')

                // Tipo Atención
                ->leftJoin('attentions', function ($join) {
                    $join->on('pops.id', '=', 'attentions.pop_id')
                    ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
                })
                // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

                ->select(
                    'pops.id as pop_id',
                    'pops.nombre',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.*',
                    'zonas.*',
                    'crms.*',
                    'classifications.classification_type_id',
                    'classification_types.classification_type',
                    'attentions.attention_type_id',
                    // 'attention_types.attention_type as attention_type',
                    'pops.alba_project'
                )
                ->orderBy('pops.id')
                ->paginate(10);

        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popsZona()
    {
        $zona_id = $_GET["zona_id"];
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', function($join) use ($zona_id) {
                    $join->on('comunas.zona_id', '=', 'zonas.id')
                    ->where('zonas.id', $zona_id);
                })
                ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                // Classificación
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')

                // Tipo Atención
                ->leftJoin('attentions', function ($join) {
                    $join->on('pops.id', '=', 'attentions.pop_id')
                    ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
                })
                // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

                ->select(
                    'pops.id as pop_id',
                    'pops.nombre',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.*',
                    'zonas.*',
                    'crms.*',
                    'classifications.classification_type_id',
                    'classification_types.classification_type',
                    'attentions.attention_type_id',
                    // 'attention_types.attention_type as attention_type'
                    'pops.alba_project'
                )
                ->orderBy('pops.id')
                ->paginate(10);

        return new PopResource($pops);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popInfo(Request $request)
    {
        $popInfo = Pop::with('comuna.zona.crm', 'sites.classification_type')
                ->where('id', $request->pop_id)
                ->first();
        return $popInfo;
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
        $pop = Pop::with('comuna.zona.crm', 'sites.classification_type', 'sites.technologies', 'comuna.zona.responsable', 'sites.site_type', 'sites.attention_priority_type', 'sites.dependences', 'sites.category_type', 'sites.attention_type')
            ->where('id', $id)
            ->whereHas('sites', function($q) {
                $q->where(function($p) {
                    $p->whereIn('site_type_id', [1,3,4])->where('state_id', 1);
                })
                ->orWhere(function($r) {
                    $r->whereIn('sites.site_type_id', [2])
                    ->whereHas('technologies', function($s) {
                        $s->where('state_id', 1);
                    });
                });
            })
            ->first();

        return new PopResource($pop);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function technologies(Request $request)
    {
        $pop_id = $request->pop_id;

        $technologies = Technology::with(['technology_type', 'site' => function($q) use($pop_id) { 
            $q->where('pop_id', $pop_id); 
        }])->get();
        return new PopResource($technologies);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $pop_id)
    {
        return $request;
        $pop = Pop::find($pop_id);
        // $pop->update([
        //     $request-> => $
        // ])
        // if ($request->pe_3g != null) {
            $pop->{$request} = $request;
            $pop->save();
        
        // if ($request->mpls != null) {
        //     $pop->mpls = $request->mpls;
        //     $pop->save();
        // }
        // if ($request->olt != null) {
        //     $pop->olt = $request->olt;
        //     $pop->save();
        // }
        // if ($request->olt_3play != null) {
        //     $pop->olt_3play = $request->olt_3play;
        //     $pop->save();
        // }
        // if ($request->red_minima_n1 != null) {
        //     $pop->red_minima_n1 = $request->red_minima_n1;
        //     $pop->save();
        // }
        // if ($request->red_minima_n2 != null) {
        //     $pop->red_minima_n2 = $request->red_minima_n2;
        //     $pop->save();
        // }
        // if ($request->core != null) {
        //     $pop->core = $request->core;
        //     $pop->save();
        // }
        // if ($request->vip != null) {
        //     $pop->vip = $request->vip;
        //     $pop->save();
        // }
        // if ($request->localidad_obligatoria != null) {
        //     $pop->localidad_obligatoria = $request->localidad_obligatoria;
        //     $pop->save();
        // }
        // if ($request->ranco != null) {
        //     $pop->ranco = $request->ranco;
        //     $pop->save();
        // }
        // if ($request->bafi != null) {
        //     $pop->bafi = $request->bafi;
        //     $pop->save();
        // }
        // if ($request->offgrid != null) {
        //     $pop->offgrid = $request->offgrid;
        //     $pop->save();
        // }
        // if ($request->solar != null) {
        //     $pop->solar = $request->solar;
        //     $pop->save();
        // }
        // if ($request->eolica != null) {
        //     $pop->eolica = $request->eolica;
        //     $pop->save();
        // }

        // ESCRIBIR UN LOG DEL CAMBIO

        return $request;
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
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $text = $request->text;
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
            ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
            ->join('crms', 'zonas.crm_id', '=', 'crms.id')                                
            ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
            ->where(function($query) use ($text) {
                $query->where('sites.nem_site', 'LIKE', "%$text%")
                    ->orWhere('sites.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            ->where('sites.state_id', 1)
            ->whereRaw($condition_core)
            ->whereRaw($condition_crm)
            ->whereRaw($condition_zona)
            ->select(
                'pops.id',
                'sites.id as site_id',
                'sites.nem_site',
                'sites.nombre as nombre_sitio',
                'sites.classification_type_id',
                'pops.nombre',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'comunas.nombre_comuna',
                'comunas.zona_id',
                'zonas.crm_id',
                'zonas.nombre_zona',
                'crms.nombre_crm',
                'classification_types.classification_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->paginate(10);
    
        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function searchPopsCrm(Request $request)
    // {
    //     $text = $request->text;
    //     $core = $request->core;
    //     $crm_id = $request->crm_id;

    //     $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
    //         ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
    //         ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
    //         ->join('crms', function($join) use ($crm_id) {
    //             $join->on('zonas.crm_id', '=', 'crms.id')
    //             ->where('crms.id', $crm_id);
    //         })
    //         ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
    //         ->where(function($query) use ($text) {
    //             $query->where('sites.nem_site', 'LIKE', "%$text%")
    //                 ->orWhere('sites.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.direccion', 'LIKE', "%$text%");
    //         })
    //         ->where('sites.state_id', 1)
    //         ->whereRaw('IF('.$core.' = 0, sites.classification_type_id IN (1,2,3,4,5), sites.classification_type_id IN (1))')
    //         ->select(
    //             'pops.id',
    //             'sites.id as site_id',
    //             'sites.nem_site',
    //             'sites.nombre as nombre_sitio',
    //             'sites.classification_type_id',
    //             'pops.nombre',
    //             'pops.direccion',
    //             'pops.latitude',
    //             'pops.longitude',
    //             'comunas.nombre_comuna',
    //             'comunas.zona_id',
    //             'zonas.crm_id',
    //             'zonas.nombre_zona',
    //             'crms.nombre_crm',
    //             'classification_types.classification_type',
    //             'pops.alba_project'
    //         )
    //         ->orderBy('pops.id')
    //         ->get();

    //     return $pops;
    // }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function searchPopsZona(Request $request)
    // {
    //     $text = $request->text;
    //     $core = $request->core;
    //     $zona_id = $request->zona_id;

    //     $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
    //         ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
    //         ->join('zonas', function($join) use ($zona_id) {
    //             $join->on('comunas.zona_id', '=', 'zonas.id')
    //             ->where('zonas.id', $zona_id);
    //         })
    //         ->join('crms', 'zonas.crm_id', '=', 'crms.id')
    //         ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
    //         ->where(function($query) use ($text) {
    //             $query->where('sites.nem_site', 'LIKE', "%$text%")
    //                 ->orWhere('sites.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.direccion', 'LIKE', "%$text%");
    //         })
    //         ->where('sites.state_id', 1)
    //         ->whereRaw('IF('.$core.' = 0, sites.classification_type_id IN (1,2,3,4,5), sites.classification_type_id IN (1))')
    //         ->select(
    //             'pops.id',
    //             'sites.id as site_id',
    //             'sites.nem_site',
    //             'sites.nombre as nombre_sitio',
    //             'sites.classification_type_id',
    //             'pops.nombre',
    //             'pops.direccion',
    //             'pops.latitude',
    //             'pops.longitude',
    //             'comunas.nombre_comuna',
    //             'comunas.zona_id',
    //             'zonas.crm_id',
    //             'zonas.nombre_zona',
    //             'crms.nombre_crm',
    //             'classification_types.classification_type',
    //             'pops.alba_project'
    //         )
    //         ->orderBy('pops.id')
    //         ->get();

    //     return $pops;
    // }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filters()
    {
        $filters = PopMenuType::where('active', 1)->get();
        return $filters;
    }

     /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filterPops(Request $request)
    {
        $text = $request->text = 0 ? '' : $request->text;

        // $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;
        
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // Site
        $condition_core = $request->core ? 'sites.classification_type_id = 1' : 'sites.classification_type_id != 2';
        $condition_critic = $request->critic ? 'rooms.criticity = 1' : 'rooms.criticity IS NOT NULL';
        $condition_red_minima = 
            $request->red_minima_n1 && $request->red_minima_n2 ? 'sites.red_minima IN (1,2)' : 
            ($request->red_minima_n1 ? 'sites.red_minima = 1' : 
                ($request->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
            );

        // POP
        $condition_pe_3g = 'pops.pe_3g IN ('.$request->pe_3g.' ,1)';
        $condition_mpls = 'pops.mpls IN ('.$request->mpls.',1)';
        $condition_olt = 'pops.olt IN ('.$request->olt.',1)';
        $condition_olt_3play = 'pops.olt_3play IN ('.$request->olt_3play.',1)';
        $condition_vip = 'pops.vip IN ('.$request->vip.',1)';
        $condition_lloo = 'pops.localidad_obligatoria IN ('.$request->lloo.',1)';
        $condition_ranco = 'pops.ranco IN ('.$request->ranco.',1)';
        $condition_bafi = 'pops.bafi IN ('.$request->bafi.',1)';
        $condition_offgrid = 'pops.offgrid IN ('.$request->offgrid.',1)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        $condition_protected_zone = 'pops.protected_zone IN ('.$request->protected_zone.',1)';
        $condition_alba_project = 'pops.alba_project IN ('.$request->alba_project.',1)';

        $pops = Pop::with('comuna.zona.crm', 'sites.classification_type')
            ->whereHas('sites', function($query) use ($text, $condition_core, $condition_red_minima) {
                $query->where(function($q) use($text) {
                    $q->where('sites.nem_site', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
                })
                ->whereRaw($condition_core)
                ->whereRaw($condition_red_minima);
            })
            ->whereHas('comuna.zona', function($query) use($condition_crm, $condition_zona) {
                $query->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
            })
            ->whereRaw($condition_pe_3g)
            ->whereRaw($condition_mpls)
            ->whereRaw($condition_olt)
            ->whereRaw($condition_olt_3play)
            ->whereRaw($condition_vip)
            ->whereRaw($condition_lloo)
            ->whereRaw($condition_ranco)
            ->whereRaw($condition_bafi)
            ->whereRaw($condition_offgrid)
            ->whereRaw($condition_solar)
            ->whereRaw($condition_eolica)
            ->whereRaw($condition_protected_zone)
            ->whereRaw($condition_alba_project)
            ->orderBy('pops.id', 'asc')

            ->paginate(15);
            // ->get();

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popsMap(Request $request)
    {
        $text = $request->text = 0 ? '' : $request->text;

        // $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;
        
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // Site
        $condition_core = $request->core ? 'sites.classification_type_id = 1' : 'sites.classification_type_id != 2';
        $condition_critic = $request->critic ? 'rooms.criticity = 1' : 'rooms.criticity IS NOT NULL';
        $condition_red_minima = 
            $request->red_minima_n1 && $request->red_minima_n2 ? 'sites.red_minima IN (1,2)' : 
            ($request->red_minima_n1 ? 'sites.red_minima = 1' : 
                ($request->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
            );

        // POP
        $condition_pe_3g = 'pops.pe_3g IN ('.$request->pe_3g.' ,1)';
        $condition_mpls = 'pops.mpls IN ('.$request->mpls.',1)';
        $condition_olt = 'pops.olt IN ('.$request->olt.',1)';
        $condition_olt_3play = 'pops.olt_3play IN ('.$request->olt_3play.',1)';
        $condition_vip = 'pops.vip IN ('.$request->vip.',1)';
        $condition_lloo = 'pops.localidad_obligatoria IN ('.$request->lloo.',1)';
        $condition_ranco = 'pops.ranco IN ('.$request->ranco.',1)';
        $condition_bafi = 'pops.bafi IN ('.$request->bafi.',1)';
        $condition_offgrid = 'pops.offgrid IN ('.$request->offgrid.',1)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        $condition_protected_zone = 'pops.protected_zone IN ('.$request->protected_zone.',1)';
        $condition_alba_project = 'pops.alba_project IN ('.$request->alba_project.',1)';

        $popsMap = Pop::with('sites.classification_type', 'comuna.zona.crm')
            ->whereHas('comuna.zona', function($query) use($condition_crm, $condition_zona) {
                $query->whereRaw($condition_crm)
                    ->whereRaw($condition_zona);
            })->whereHas('sites', function($q) use($condition_core, $condition_red_minima, $condition_critic) { 
                $q->where(function($p) use($condition_critic) {
                    $p->whereIn('site_type_id', [1,3,4])
                    ->orWhere(function($query) use ($condition_critic) {
                        $query->whereIn('site_type_id', [2])
                        ->whereHas('technologies', function($r) {
                            $r->where('state_id', 1);
                        })
                        ->orWhereHas('rooms', function($t) use ($condition_critic) {
                            $t->whereRaw($condition_critic);
                        });
                    });
                })
                ->whereRaw($condition_core)
                ->whereRaw($condition_red_minima);
            })
            ->whereRaw($condition_pe_3g)
            ->whereRaw($condition_mpls)
            ->whereRaw($condition_olt)
            ->whereRaw($condition_olt_3play)
            ->whereRaw($condition_vip)
            ->whereRaw($condition_lloo)
            ->whereRaw($condition_ranco)
            ->whereRaw($condition_bafi)
            ->whereRaw($condition_offgrid)
            ->whereRaw($condition_solar)
            ->whereRaw($condition_eolica)
            ->whereRaw($condition_protected_zone)
            ->whereRaw($condition_alba_project)
            ->select(
                'id',
                'nombre',
                'direccion',
                'pops.latitude',
                'pops.longitude'
            )
            ->get();

        return $popsMap;
    }

    // /**
    //  * Search the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function filterPopsCrm()
    // {
    //     $text = $_GET["text"];
    //     $crm_id = $_GET["crm_id"];

    //     $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
    //         ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
    //         ->join('crms', function($join) use ($crm_id) {
    //             $join->on('zonas.crm_id', '=', 'crms.id')
    //             ->where('crms.id', $crm_id);
    //         })
            
    //         // Classificación
    //         ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

    //         // Tipo Atención
    //         ->leftJoin('attentions', function ($join) {
    //             $join->on('pops.id', '=', 'attentions.pop_id')
    //             ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
    //         })
    //         // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

    //         ->where(function($query) use ($text) {
    //             $query->where('pops.nem_fijo', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.direccion', 'LIKE', "%$text%");
    //         })

    //         ->select(
    //             'pops.id as pop_id',
    //             'pops.nombre',
    //             'pops.nem_movil',
    //             'pops.nem_fijo',
    //             'pops.direccion',
    //             'pops.latitude',
    //             'pops.longitude',
    //             'pops.cod_planificacion',
    //             'comunas.*',
    //             'zonas.*',
    //             'crms.*',
    //             'pops.classification_type_id',
    //             'classification_types.classification_type',
    //             'attentions.attention_type_id',
    //             // 'attention_types.attention_type as attention_type',
    //             'pops.alba_project'
    //         )
    //         ->orderBy('pops.id')
    //         ->paginate(10);

    //     return $pops;
    // }

    // /**
    //  * Search the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function filterPopsZona()
    // {
    //     $text = $_GET["text"];
    //     $zona_id = $_GET["zona_id"];

    //     $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
    //         ->join('zonas', function($join) use ($zona_id) {
    //             $join->on('comunas.zona_id', '=', 'zonas.id')
    //             ->where('zonas.id', $zona_id);
    //         })
    //         ->join('crms', 'zonas.crm_id', '=', 'crms.id')
    //         // Classificación
    //         ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

    //         // Tipo Atención
    //         ->leftJoin('attentions', function ($join) {
    //             $join->on('pops.id', '=', 'attentions.pop_id')
    //             ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
    //         })
    //         // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

    //         ->where(function($query) use ($text) {
    //             $query->where('pops.nem_fijo', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.direccion', 'LIKE', "%$text%");
    //         })

    //         ->select(
    //             'pops.id as pop_id',
    //             'pops.nombre',
    //             'pops.nem_movil',
    //             'pops.nem_fijo',
    //             'pops.direccion',
    //             'pops.latitude',
    //             'pops.longitude',
    //             'pops.cod_planificacion',
    //             'comunas.*',
    //             'zonas.*',
    //             'crms.*',
    //             'pops.classification_type_id',
    //             'classification_types.classification_type',
    //             'attentions.attention_type_id',
    //             // 'attention_types.attention_type as attention_type',
    //             'pops.alba_project'
    //         )
    //         ->orderBy('pops.id')
    //         ->paginate(10);

    //     return $pops;
    // }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsEdicion($text, $core)
    {
        $pops = Pop::with('comuna.zona.crm', 'comuna.region')
            ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            // Classificación
            ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

            // Tipo Atención
            ->leftJoin('attentions', function ($join) {
                $join->on('pops.id', '=', 'attentions.pop_id')
                ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
            })

            ->orderBy('pops.id')
            ->get();
    
        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popMenu()
    {
        $pop_menu = PopMenu::where('state', 1)->orderBy('order','asc')->get();
        return new PopResource($pop_menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        return $request;
        // $core = $request->core;
        // $crm_id = $request->crm_id;
        // $zona_id = $request->zona_id;

        // return Excel::download(new PopsExport($core, $crm_id, $zona_id), 'listado_pops - '.date("Y-m-d h:i:sa").'.xlsx');
        // return Excel::download(new PopsExport(), 'listado_pops - '.date("Y-m-d h:i:sa").'.xlsx');
        // return Excel::download(new PopsExport, 'pops.xlsx');
    }


}
