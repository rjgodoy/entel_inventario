<?php

namespace App\Http\Controllers\Api;

use App\Exports\AllInfoPopsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\Pop as PopResource;
use App\Http\Resources\PopCollection;
use App\Models\Comuna;
use App\Models\EnergyResponsable;
use App\Models\EnergySystem;
use App\Models\EntelVip;
use App\Models\GeneratorSet;
use App\Models\Log;
use App\Models\LogType;
use App\Models\Pop;
use App\Models\PopFavorite;
use App\Models\PopMenu;
use App\Models\PopMenuType;
use App\Models\Projection;
use App\Models\Room;
use App\Models\Site;
use App\Models\User;
use App\Models\VipCategoryType;
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
        $pops = Pop::with('sites.classification_type', 'comuna', 'zona.crm')->orderBy('id', 'asc')->paginate(20);
        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource for iOS.
     *
     * @return \Illuminate\Http\Response
     */
    public function alliOS(Request $request)
    {

        $user = User::where('api_token', $request->api_token)->get();

        if ($user) {

            $pops = Pop::with('sites.state', 'sites.technologies.state', 'sites.technologies.technology_type', 'zona.crm', 'comuna', 'sites.classification_type', 'sites.attention_priority_type', 'sites.attention_type', 'autonomies', 'junctions.electric_company')
            // ->select('id', 'nombre', 'direccion', 'latitude', 'longitude', 'core')
            ->whereHas('sites', function($q) { 
                $q->withoutTrashed();
            })
            // ->whereHas('junctions', function($q) { 
            //     $q->withoutTrashed();
            // })
            // ->withoutTrashed()
            ->orderBy('id')
            // ->limit(100)
            ->get();

            return $pops;
        }

        return 'false';
    }

    /**
     * Display a listing of the resource for iOS.
     *
     * @return \Illuminate\Http\Response
     */
    public function alliOSv2(Request $request)
    {

        $user = User::where('api_token', $request->api_token)->get();

        if ($user) {

            $pops = Pop::
            select(
            "id",
            "pop_e_id",
            "nombre",
            "direccion",
            "comuna_id",
            "zona_id",
            "latitude",
            "longitude",
            // "pop_type_id",
            // "service_type_id",
            // "net_type_id",
            // "derivation_type_id",
            "dependences",
            "pe_3g",
            "mpls",
            "olt",
            "olt_3play",
            "core",
            "vip",
            "localidad_obligatoria",
            "isla",
            "paragua",
            "estival",
            "centro_invernal",
            "ranco",
            "energy_system_id",
            "operation_responsable_id",
            "cluster_type_id",
            "energy_responsable_id",
            "offgrid",
            "solar",
            "eolica",
            // "gestion_ambiental",
            // "turret_type_id",
            )
            ->with(
                'zona.crm', 
                'comuna',
                'current_autonomy', 
                'energy_responsable',
                'energy_system',
                'operation_responsable',
                'cluster_type',
                'current_entel_vip.vip_category_type',
                'layouts'

                // 'junctions.electric_company',
                // 'generator_sets',
                // 'power_rectifiers',
            )
            ->whereHas('sites', function($q) { 
                $q->withoutTrashed();
            })
            ->get();

            return new PopCollection($pops);
        }

        return 'false';
    }

    /**
     * Display a listing of the resource for Android.
     *
     * @return \Illuminate\Http\Response
     */
    public function allAndroid(Request $request)
    {
        $user = User::where('api_token', $request->api_token)->get();

        if ($user) {
            $pops = Pop::has('sites')
            ->orderBy('id')
            ->get();
            return $pops;
        }
        return 'false';
    }

    /**
     * Display a listing of the resource for iOS.
     *
     * @return \Illuminate\Http\Response
     */
    public function popInfoiOS(Request $request)
    {
        $user = User::where('api_token', $request->api_token)->get();

        if ($user) {
            $pop = Pop::with('sites.state', 'sites.technologies.state', 'sites.technologies.technology_type', 'zona.crm', 'comuna', 'sites.classification_type', 'sites.attention_priority_type', 'sites.attention_type', 'autonomies', 'junctions.electric_company', 'energy_system', 'energy_responsable')
            // ->select('id', 'nombre', 'direccion', 'latitude', 'longitude', 'core')
            ->whereHas('sites', function($q) { 
                $q->withoutTrashed();
            })
            ->where('id', $request->pop_id)
            ->first();

            return $pop;
        }

        return 'false';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allPops(Request $request)
    {
        $text = $request->text;
        $pops = Pop::with('comuna', 'zona.crm')
            ->where(function($q) use($text) {
                $q->whereHas('sites', function($p) use ($text) {
                    $p->where('nem_site', 'LIKE', "%$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                })
                ->orWhere('nombre', 'LIKE', "%$text%")
                ->orWhere('direccion', 'LIKE', "%$text%");
            })->paginate(20);

        return new PopCollection($pops);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popInfo(Request $request, $id)
    {
        $info = Pop::with('comuna', 'zona.crm', 'sites.classification_type')
                ->where('id', $id)
                ->first();
        return $info;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {        
        $zona_id = Comuna::where('id', $request->comuna_id)->first()->zona_id;

        $pop = Pop::updateOrCreate([
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ],[
            'pop_e_id' => $request->pop_e_id,
            'nombre' => $request->nombre,
            'direccion' => $request->direccion,
            'comuna_id' => $request->comuna_id,
            'zona_id' => $zona_id,
            'pop_type_id' => $request->pop_type_id,
            'net_type_id' => $request->net_type_id,

            'pe_3g' => $request->pe_3g,
            'mpls' => $request->mpls,
            'olt' => $request->olt,
            'olt_3play' => $request->olt_3play,
            'localidad_obligatoria' => $request->localidad_obligatoria,
            'ranco' => $request->ranco,
            'vip' => $request->vip,
            'energy_system_id' => $request->energy_system ? 2 : 1,
            'solar' => $request->solar,
            'eolica' => $request->eolica,
        ]);

        $site = Site::create([
            'pop_id' => $pop->id,
            'site_type_id' => $request->site_type_id,
            'nem_site' => $request->nem_site,
            'nombre' => $request->site_name,
            'classification_type_id' => $request->classification_type_id,
            'attention_priority_type_id' => $request->attention_priority_type_id,
            'category_type_id'=> null,
            'attention_type_id'=> 1,
            'solution_type_id'=> null,
            'site_class_type_id' => null,
            'coverage_type_id'=> null,
            'transport_type_id'=> null,
            'red_minima' => $request->red_minima_n1 ? $request->red_minima_n1 : ($request->red_minima_n2 ? $request->red_minima_n2 : 0),
            'core' => $request->core
        ]);

        $room = Room::create([
            'pop_id' => $pop->id,
            'name' => 'Sala 1.1',
            'criticity' => 0,
            'order' => 0,
        ]);

        return 'success';
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
            'comuna',
            'zona.crm.office', 
            'zona.responsable', 
            'sites.classification_type', 
            'sites.technologies.state', 
            'sites.technologies.technology_type', 
            'sites.site_type',
            'sites.state', 
            'sites.attention_priority_type', 
            'sites.dependences', 
            'sites.category_type', 
            'sites.attention_type', 
            'rooms.power_rectifiers',
            'rooms.air_conditioners.air_conditioner_consumptions',
            'rooms.air_conditioners.air_conditioner_brand.air_conditioner_type',
            'rooms.air_conditioners.air_conditioner_chillers',
            'rooms.air_conditioners.air_conditioner_condensers',
            'protected_zones',
            'energy_system',
            'energy_responsable',
            'current_entel_vip.vip_category_type',
            'current_office',
            'current_autonomy',
            'current_battery_bank_autonomy',
            'client_companies.access_type',
            'layouts',
            'comsites',
            'drone_videos',
            'risk_types',
            'current_alba.turret_type',
            'pop_favorites',
            'operation_responsable',
            'cluster_type',
            'service_type'
            )
            ->where('id', $id)
            ->first();

        return new PopResource($pop);
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function technologies(Request $request)
    // {
    //     $pop_id = $request->pop_id;

    //     $technologies = Technology::with(['technology_type', 'site' => function($q) use($pop_id) { 
    //         $q->where('pop_id', $pop_id); 
    //     }])->get();
    //     return new PopResource($technologies);
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popParameters(Request $request)
    {
        $strClassName = '';
        $array = explode('_', $request->parameter);
        for ($i=0; $i < count($array) - 1; $i++) { 
            $word = ucwords($array[$i]);
            $strClassName = ucwords($strClassName.=$word);
        }
        $className = "\\App\\Models\\".$strClassName;
        $parameters = app($className)->get();
        return new PopResource($parameters);
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
        $pop = Pop::find($id);
        $pop->update([
            $request->parameter => $request->value
        ]);

        if($request->parameter != 'energy_system_id') {
            $boolean = $request->value ? 'SI' : 'NO';
            // Busca el dato que se actualizó par incorporarlo en el Log
            Log::create([
                'pop_id' => $id,
                'user_id' => $request->user_id,
                'log_type_id' => LogType::where('type', 'pop-update')->first()->id,
                'description' => 'Se ha actualizado el parámetro "'. $request->parameter.'" a "'.$boolean.'"'
            ]);
        } elseif ($request->parameter == 'energy_system_id') {
            $es = EnergySystem::find($request->value);
            Log::create([
                'pop_id' => $id,
                'user_id' => $request->user_id,
                'log_type_id' => LogType::where('type', 'pop-update')->first()->id,
                'description' => 'Se ha actualizado el parámetro "Sistema de Energía" a "'.$es->system.'"'
            ]);
        } elseif ($request->parameter == 'energy_responsable_id') {
            $es = EnergyResponsable::find($request->value);
            Log::create([
                'pop_id' => $id,
                'user_id' => $request->user_id,
                'log_type_id' => LogType::where('type', 'pop-update')->first()->id,
                'description' => 'Se ha actualizado el parámetro "Responsable de Energía" a "'.$es->responsable.'"'
            ]);
        }

        return $request;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateVipEntel(Request $request, $id)
    {
        $vip = EntelVip::where('pop_id', $id)->first();
        if($vip || $request->delete) {
            $vip->delete();
        }

        if($request->vip_category_type_id && $request->category) {
            EntelVip::create([
                'pop_id' => $id,
                'vip_category_type_id' => $request->vip_category_type_id,
                'category' => $request->category
            ]);
        }
        
        $boolean = $request->value ? 'SI' : 'NO';

        // Busca el dato que se actualizó par incorporarlo en el Log
        Log::create([
            'pop_id' => $id,
            'user_id' => $request->user_id,
            'log_type_id' => LogType::where('type', 'pop-update')->first()->id,
            'description' => 'Se ha actualizado el parámetro "VIP Entel" a "'.$boolean.'"'
        ]);

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

        $sites = Site::withTrashed()->with('pop.comuna', 'pop.zona.crm', 'state', 'classification_type', 'technologies.technology_type', 'technologies.state')
            ->where(function($p) use($text) {
                $p->where(function($q) use ($text) {
                    $q->where('nem_site', 'LIKE', "$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                })
                ->orWhere(function($s) use($text) {
                    $s->whereHas('pop', function($u) use ($text) {
                        $u->where('nombre', 'LIKE', "$text%");
                    });
                })
                ->orWhere(function($s) use($text) {
                    $s->whereHas('technologies', function($u) use ($text) {
                        $u->where('nem_tech', 'LIKE', "$text%");
                    });
                });
            })
            ->whereRaw($condition_core)
            ->whereHas('pop.zona', function($q) use($condition_crm, $condition_zona) {
                $q->whereRaw($condition_crm)
                ->whereRaw($condition_zona);
            })
            ->orderBy('classification_type_id', 'asc')
            ->orderBy('nombre', 'asc')
            ->orderBy('nem_site', 'desc')
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
            $request->red_minima_n1 && $request->red_minima_n2 ? 'red_minima IN (1,2)' : 
            ($request->red_minima_n1 ? 'red_minima = 1' : 
                ($request->red_minima_n2 ? 'red_minima = 2' : 'red_minima IN (0,1,2)')
            );

        // POP
        $condition_pe_3g = 'pops.pe_3g IN ('.$request->pe_3g.' ,1)';
        $condition_mpls = 'pops.mpls IN ('.$request->mpls.',1)';
        $condition_olt = 'pops.olt IN ('.$request->olt.',1)';
        $condition_olt_3play = 'pops.olt_3play IN ('.$request->olt_3play.',1)';
        $condition_vip = 'pops.vip IN ('.$request->vip.',1)';
        $condition_lloo = 'pops.localidad_obligatoria IN ('.$request->lloo.',1)';
        $condition_ranco = 'pops.ranco IN ('.$request->ranco.',1)';
        $condition_bafi = $bafi ? 'technology_type_id = 3 AND frequency = 3500' : '1 = 1';
        $condition_offgrid = $request->offgrid ? 'pops.energy_system_id = 2' : 'pops.energy_system_id IN (0,1,2)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        $condition_turret_type = $request->turret_type_id ? 'pops.turret_type_id IN (1,2,3)' : '1=1';

        $protected_zone = $request->protected_zone;
        $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

        $electric_lines = $request->electric_line;
        $condition_electric_lines = 'pops.id IN (SELECT electric_lines.pop_id from entel_g_redes_inventario.electric_lines)';
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

        $pops = Pop::with('comuna', 'zona.crm', 'sites.classification_type')
            ->whereHas('sites', function($q) use($text, $condition_core, $condition_bafi, $bafi, $condition_red_minima) { 
                $q->where(function ($p) use ($text) {
                    if ($text) {
                        $p->where('nem_site', 'LIKE', "%$text%")
                        ->orWhere('nombre', 'LIKE', "%$text%");
                    } else {
                        $p;
                    }
                })
                ->where(function($q) use($condition_bafi, $bafi) {
                    if($bafi) {
                        $q->whereHas('technologies', function($q) use($condition_bafi) {
                            $q->whereRaw($condition_bafi);
                        });
                    } else {
                        $q;
                    }
                })
                ->whereRaw($condition_core)
                ->whereRaw($condition_red_minima);
            })
            ->whereHas('rooms', function($r) use($condition_critic) {
                $r->whereRaw($condition_critic);
            })
            ->whereHas('zona', function($q) use($condition_crm, $condition_zona) {
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
            ->whereRaw($condition_turret_type)

            ->where(function($q) use($condition_protected_zone, $protected_zone) {
                $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
            })

            ->where(function($q) use($condition_electric_lines, $electric_lines) {
                $electric_lines ? $q->whereRaw($condition_electric_lines) : $q->whereRaw('1 = 1');
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
            $request->red_minima_n1 && $request->red_minima_n2 ? 'red_minima IN (1,2)' : 
            ($request->red_minima_n1 ? 'red_minima = 1' : 
                ($request->red_minima_n2 ? 'red_minima = 2' : 'red_minima IN (0,1,2)')
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
        $condition_bafi = $request->bafi ? 'technology_type_id = 3 AND frequency = 3500' : '1 = 1';
        $condition_offgrid = $request->offgrid ? 'pops.energy_system_id = 2' : 'pops.energy_system_id IN (0,1,2)';
        $condition_solar = 'pops.solar IN ('.$request->solar.',1)';
        $condition_eolica = 'pops.eolica IN ('.$request->eolica.',1)';
        
        $condition_turret_type = $request->turret_type_id ? 'pops.turret_type_id IN (1,2)' : '1=1';

        $protected_zone = $request->protected_zone;
        $condition_protected_zone = 'pops.id IN (SELECT pop_protected_zone.pop_id from entel_pops.pop_protected_zone)';

        $electric_lines = $request->electric_line;
        $condition_electric_lines = 'pops.id IN (SELECT electric_lines.pop_id from entel_g_redes_inventario.electric_lines)';
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

        $pops = Pop::with('comuna', 'zona.crm', 'sites.classification_type')
            ->whereHas('sites', function($q) use($text, $condition_core, $condition_bafi, $bafi, $condition_red_minima) { 
                $q->where(function($p) use($text) {
                    if ($text) {
                        $p->where('nem_site', 'LIKE', "%$text%")
                        ->orWhere('nombre', 'LIKE', "%$text%");
                    } else {
                        $p;
                    }
                })
                ->where(function($q) use($condition_bafi, $bafi) {
                    if($bafi) {
                        $q->whereHas('technologies', function($q) use($condition_bafi) {
                            $q->whereRaw($condition_bafi);
                        });
                    } else {
                        $q;
                    }
                })
                ->whereRaw($condition_core)
                ->whereRaw($condition_red_minima);
            })
            ->whereHas('rooms', function($r) use($condition_critic) {
                $r->whereRaw($condition_critic);
            })
            ->whereHas('zona', function($q) use($condition_crm, $condition_zona) {
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
            ->whereRaw($condition_turret_type)

            ->where(function($q) use($condition_protected_zone, $protected_zone) {
                $protected_zone ? $q->whereRaw($condition_protected_zone) : $q->whereRaw('1 = 1');
            })

            ->where(function($q) use($condition_electric_lines, $electric_lines) {
                $electric_lines ? $q->whereRaw($condition_electric_lines) : $q->whereRaw('1 = 1');
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

    // /**
    //  * Search the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function searchPopsEdicion($text, $core)
    // {
    //     $pops = Pop::with('comuna', 'zona.crm', 'comuna.region')
    //         ->where(function($query) use ($text) {
    //             $query->where('pops.nem_fijo', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
    //                 ->orWhere('pops.nombre', 'LIKE', "%$text%")
    //                 ->orWhere('pops.direccion', 'LIKE', "%$text%");
    //         })
    //         // Classificación
    //         ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

    //         // Tipo Atención
    //         ->leftJoin('attentions', function ($join) {
    //             $join->on('pops.id', '=', 'attentions.pop_id')
    //             ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
    //         })

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
        $response = (new AllInfoPopsExport($request))->download('pops.xlsx');
	   ob_end_clean();
	   return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popFavorite(Request $request)
    {
        $favorite = PopFavorite::where('user_id', $request->user_id)->where('pop_id', $request->pop_id)->get();
        return $favorite;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getVipCategories(Request $request)
    {
        return VipCategoryType::all();
    }
    

}
