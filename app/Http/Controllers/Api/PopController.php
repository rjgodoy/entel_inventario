<?php

namespace App\Http\Controllers\Api;

use App\Exports\AllInfoPopsExport;
use App\Exports\FilteredInfoPopsExport;
use App\Exports\FilteredPopsExport;
use App\Exports\FilteredSitesExport;
use App\Exports\PopsExport;
use App\Exports\SitesExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\Pop as PopResource;
use App\Models\GeneratorSet;
use App\Models\Pop;
use App\Models\PopMenu;
use App\Models\PopMenuType;
use App\Models\Projection;
use App\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

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
        $pop = Pop::with(
            'comuna.zona.crm', 
            'sites.classification_type', 
            'sites.technologies', 
            'comuna.zona.responsable', 
            'sites.site_type', 
            'sites.attention_priority_type', 
            'sites.dependences', 
            'sites.category_type', 
            'sites.attention_type', 
            'rooms.power_rectifiers',
            'rooms.air_conditioners.air_conditioner_consumptions',
            'rooms.air_conditioners.air_conditioner_brand.air_conditioner_type',
            'rooms.air_conditioners.air_conditioner_chillers',
            'rooms.air_conditioners.air_conditioner_condensers'
            )
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

        $condition_core = $core ? 'classification_type_id = '.$core : 'classification_type_id != '.$core;
        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'id = '.$zona_id : 'id != '.$zona_id;

        $sites = Site::with('pop.comuna.zona.crm', 'classification_type')
            ->where(function($p) use($text) {
                $p->where(function($q) use ($text) {
                    $q->where('nem_site', 'LIKE', "%$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                })
                ->orWhere(function($s) use($text) {
                    $s->whereHas('pop', function($u) use ($text) {
                        $u->where('nombre', 'LIKE', "%$text%")
                        ->orWhere('direccion', 'LIKE', "%$text%");
                    });
                });
            })
            ->where(function($r) {
                $r->where(function($p) {
                    $p->whereIn('site_type_id', [1,3,4])->where('state_id', 1);
                })
                ->orWhere(function($t) {
                    $t->whereIn('sites.site_type_id', [2])
                    ->whereHas('technologies', function($s) {
                        $s->where('state_id', 1);
                    });
                });
            })
            ->whereRaw($condition_core)
            ->whereHas('pop.comuna.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)
                ->whereRaw($condition_zona);
            })
            
            // ->select(
            //     'pops.id',
            //     'sites.id as site_id',
            //     'sites.nem_site',
            //     'sites.nombre as nombre_sitio',
            //     'sites.classification_type_id',
            //     'pops.nombre',
            //     'pops.direccion',
            //     'pops.latitude',
            //     'pops.longitude',
            //     'comunas.nombre_comuna',
            //     'comunas.zona_id',
            //     'zonas.crm_id',
            //     'zonas.nombre_zona',
            //     'crms.nombre_crm',
            //     'classification_types.classification_type',
            //     'pops.alba_project'
            // )
            ->orderBy('id')
            ->paginate(10);
    
        return $sites;
    }

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
        $text = $request->text;

        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        $bafi = $request->bafi;
        
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // Site
        $condition_core = $request->core ? 'classification_type_id = 1' : 'classification_type_id != 0';
        $condition_critic = $request->critic ? 'criticity = 1' : 'criticity IN (0,1)';
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
        $condition_bafi = $bafi ? 'technology_type_id = 3 AND frequency = 3500' : 'state_id = 1';
        $condition_offgrid = 'pops.offgrid IN ('.$request->offgrid.',1)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        $condition_alba_project = 'pops.alba_project IN ('.$request->alba_project.',1)';

        $protected_zone = $request->protected_zone;
        $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

        $junctions = $request->junction;
        $condition_junctions = 'pops.id IN (SELECT junctions.pop_id from entel_g_redes_inventario.junctions)';
        $generators = $request->generator_set;
        $condition_generators = 'pops.id IN (SELECT generator_sets.pop_id from entel_g_redes_inventario.generator_sets)';
        $rectifiers = $request->power_rectifier;
        $condition_rectifiers = 'pops.id IN (SELECT power_rectifiers.pop_id from entel_g_redes_inventario.power_rectifiers)';
        $air_conditioners = $request->air_conditioner;
        $condition_air_conditioners = 'pops.id IN (SELECT air_conditioners.pop_id from entel_g_redes_inventario.air_conditioners)';
        $vertical_structures = $request->vertical_structure;
        $condition_vertical_structures = 'pops.id IN (SELECT vertical_structures.pop_id from entel_g_redes_inventario.vertical_structures)';
        $infrastructures = $request->infrastructure;
        $condition_infrastructures = 'pops.id IN (SELECT infrastructures.pop_id from entel_g_redes_inventario.infrastructures)';

        $pops = Pop::with('comuna.zona.crm', 'sites.classification_type')
            ->whereHas('sites', function($q) use($text, $condition_core, $condition_bafi, $bafi) { 
                $q->where(function($p) use($text) {
                    $p->where(function($w) use($text) {
                        if ($text) {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1)
                            ->where(function($r) use($text) {
                                $r->where('sites.nem_site', 'LIKE', "%$text%")
                                ->orWhere('sites.nombre', 'LIKE', "%$text%");
                            });
                        } else {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1);
                        }
                    })
                    ->orWhere(function($s) use($text) {
                        if ($text) {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            })
                            ->where(function($q) use($text) {
                                $q->where('sites.nem_site', 'LIKE', "%$text%")
                                ->orWhere('sites.nombre', 'LIKE', "%$text%");
                            });
                        } else {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            });
                        }
                    });
                })
                ->where(function($q) use($condition_bafi, $bafi) {
                    if($bafi) {
                        $q->whereHas('technologies', function($q) use($condition_bafi) {
                            $q->whereRaw($condition_bafi);
                        });
                    } else {
                        $q->whereRaw('1 = 1');
                    }
                })
                ->whereRaw($condition_core);
            })
            ->whereHas('rooms', function($r) use($condition_critic) {
                $r->whereRaw($condition_critic);
            })
            ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)
                ->whereRaw($condition_zona);
            })
            
            ->whereRaw($condition_pe_3g)
            ->whereRaw($condition_mpls)
            ->whereRaw($condition_olt)
            ->whereRaw($condition_olt_3play)
            ->whereRaw($condition_vip)
            ->whereRaw($condition_lloo)
            ->whereRaw($condition_ranco)
            ->whereRaw($condition_offgrid)
            ->whereRaw($condition_solar)
            ->whereRaw($condition_eolica)
            ->whereRaw($condition_alba_project)

            ->where(function($q) use($condition_protected_zone, $protected_zone) {
                $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
            })

            ->where(function($q) use($condition_junctions, $junctions) {
                $junctions ? $q->whereRaw($condition_junctions) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_generators, $generators) {
                $generators ? $q->whereRaw($condition_generators) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_rectifiers, $rectifiers) {
                $rectifiers ? $q->whereRaw($condition_rectifiers) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_air_conditioners, $air_conditioners) {
                $air_conditioners ? $q->whereRaw($condition_air_conditioners) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_vertical_structures, $vertical_structures) {
                $vertical_structures ? $q->whereRaw($condition_vertical_structures) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_infrastructures, $infrastructures) {
                $infrastructures ? $q->whereRaw($condition_infrastructures) : $q->whereRaw('1 = 1');
            })

            ->orderBy('pops.id', 'asc')
            ->paginate(15);

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
        $text = $request->text;

        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;
        
        $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;

        // Site
        $condition_core = $request->core ? 'classification_type_id = 1' : 'classification_type_id != 0';
        $condition_critic = $request->critic ? 'criticity = 1' : 'criticity IS NOT NULL';
        $condition_red_minima = 
            $request->red_minima_n1 && $request->red_minima_n2 ? 'sites.red_minima IN (1,2)' : 
            ($request->red_minima_n1 ? 'sites.red_minima = 1' : 
                ($request->red_minima_n2 ? 'sites.red_minima = 2' : 'sites.red_minima IN (0,1,2)')
            );
        $bafi = $request->bafi;

        // POP
        $condition_pe_3g = 'pops.pe_3g IN ('.$request->pe_3g.' ,1)';
        $condition_mpls = 'pops.mpls IN ('.$request->mpls.',1)';
        $condition_olt = 'pops.olt IN ('.$request->olt.',1)';
        $condition_olt_3play = 'pops.olt_3play IN ('.$request->olt_3play.',1)';
        $condition_vip = 'pops.vip IN ('.$request->vip.',1)';
        $condition_lloo = 'pops.localidad_obligatoria IN ('.$request->lloo.',1)';
        $condition_ranco = 'pops.ranco IN ('.$request->ranco.',1)';
        $condition_bafi = $request->bafi ? 'technology_type_id = 3 AND frequency = 3500' : 'technology_type_id != 0';
        $condition_offgrid = 'pops.offgrid IN ('.$request->offgrid.',1)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        
        $condition_alba_project = 'pops.alba_project IN ('.$request->alba_project.',1)';

        $protected_zone = $request->protected_zone;
        $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

        $junctions = $request->junction;
        $condition_junctions = 'pops.id IN (SELECT junctions.pop_id from entel_g_redes_inventario.junctions)';
        $generators = $request->generator_set;
        $condition_generators = 'pops.id IN (SELECT generator_sets.pop_id from entel_g_redes_inventario.generator_sets)';
        $rectifiers = $request->power_rectifier;
        $condition_rectifiers = 'pops.id IN (SELECT power_rectifiers.pop_id from entel_g_redes_inventario.power_rectifiers)';
        $air_conditioners = $request->air_conditioner;
        $condition_air_conditioners = 'pops.id IN (SELECT air_conditioners.pop_id from entel_g_redes_inventario.air_conditioners)';
        $vertical_structures = $request->vertical_structure;
        $condition_vertical_structures = 'pops.id IN (SELECT vertical_structures.pop_id from entel_g_redes_inventario.vertical_structures)';
        $infrastructures = $request->infrastructure;
        $condition_infrastructures = 'pops.id IN (SELECT infrastructures.pop_id from entel_g_redes_inventario.infrastructures)';

        $pops = Pop::with('comuna.zona.crm', 'sites.classification_type')
            ->whereHas('sites', function($q) use($text, $condition_core, $condition_bafi, $bafi) { 
                $q->where(function($p) use($text) {
                    $p->where(function($w) use($text) {
                        if ($text) {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1)
                            ->where(function($r) use($text) {
                                $r->where('sites.nem_site', 'LIKE', "%$text%")
                                ->orWhere('sites.nombre', 'LIKE', "%$text%");
                            });
                        } else {
                            $w->whereIn('site_type_id', [1,3,4])
                            ->where('state_id', 1);
                        }
                    })
                    ->orWhere(function($s) use($text) {
                        if ($text) {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            })
                            ->where(function($q) use($text) {
                                $q->where('sites.nem_site', 'LIKE', "%$text%")
                                ->orWhere('sites.nombre', 'LIKE', "%$text%");
                            });
                        } else {
                            $s->whereIn('site_type_id', [2])
                            ->whereHas('technologies', function($r) {
                                $r->where('state_id', 1);
                            });
                        }
                    });
                })
                ->where(function($q) use($condition_bafi, $bafi) {
                    if($bafi) {
                        $q->whereHas('technologies', function($q) use($condition_bafi) {
                            $q->whereRaw($condition_bafi);
                        });
                    } else {
                        $q->whereRaw('1 = 1');
                    }
                })
                ->whereRaw($condition_core);
            })
            ->whereHas('rooms', function($r) use($condition_critic) {
                $r->whereRaw($condition_critic);
            })
            ->whereHas('comuna.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)
                ->whereRaw($condition_zona);
            })
            ->whereRaw($condition_pe_3g)
            ->whereRaw($condition_mpls)
            ->whereRaw($condition_olt)
            ->whereRaw($condition_olt_3play)
            ->whereRaw($condition_vip)
            ->whereRaw($condition_lloo)
            ->whereRaw($condition_ranco)
            ->whereRaw($condition_offgrid)
            ->whereRaw($condition_solar)
            ->whereRaw($condition_eolica)
            ->whereRaw($condition_alba_project)

            ->where(function($q) use($condition_protected_zone, $protected_zone) {
                $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
            })

            ->where(function($q) use($condition_junctions, $junctions) {
                $junctions ? $q->whereRaw($condition_junctions) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_generators, $generators) {
                $generators ? $q->whereRaw($condition_generators) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_rectifiers, $rectifiers) {
                $rectifiers ? $q->whereRaw($condition_rectifiers) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_air_conditioners, $air_conditioners) {
                $air_conditioners ? $q->whereRaw($condition_air_conditioners) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_vertical_structures, $vertical_structures) {
                $vertical_structures ? $q->whereRaw($condition_vertical_structures) : $q->whereRaw('1 = 1');
            })
            ->where(function($q) use($condition_infrastructures, $infrastructures) {
                $infrastructures ? $q->whereRaw($condition_infrastructures) : $q->whereRaw('1 = 1');
            })

            ->select(
                'id',
                'nombre',
                'direccion',
                'pops.latitude',
                'pops.longitude'
            )
            ->orderBy('pops.id', 'asc')
            ->get();

        return $pops;
    }

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
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        return (new AllInfoPopsExport($request))->download('pops.xlsx');
    }

}
