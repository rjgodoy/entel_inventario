<?php

namespace App\Http\Controllers;

use App\Imports\CellsImport;
use App\Models\Comuna;
use App\Models\GeneratorSet;
use App\Models\GeneratorsPlatformGenerator;
use App\Models\GeneratorsPlatformMaintanceStatus;
use App\Models\GeneratorsPlatformMaintanceType;
use App\Models\GeneratorsPlatformOTMaintance;
use App\Models\GeneratorsPlatformStatistic;
use App\Models\OTForm;
use App\Models\OTTmpTaskLog;
use App\Models\Pop;
use App\Models\PsgTp;
use App\Models\Role;
use App\Models\RoomCapacity;
use App\Models\Site;
use App\Models\State;
use App\Models\Technology;
use App\Models\VandalismRecord;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
// use Illuminate\Database\Eloquent\Collection;

class HomeController extends Controller
{
    protected $seconds = 86400;
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $roles = Role::pluck('slug')->toArray();
        $request->user()->authorizeRoles($roles);

        // Latest Updates
        $latest = [
            [
                'date' => $lastUpdatePops = DB::table('entel_pops.pops')->latest('updated_at')->first()->updated_at,
                'table' => 'POPs'
            ],
            [
                'date' => $lastUpdateSites = DB::table('entel_pops.sites')->latest('updated_at')->first()->updated_at,
                'table' => 'Sitios'
            ],
            [
                'date' => $lastUpdateTechnologies = DB::table('entel_pops.technologies')->latest('updated_at')->first()->updated_at,
                'table' => 'Tecnologías'
            ],
            [
                'date' => $lastUpdateComsites = DB::table('entel_g_redes_inventario.comsites')->latest('updated_at')->first()->updated_at,
                'table' => 'Comsites'
            ],
            [
                'date' => $lastUpdateJunctions = DB::table('entel_g_redes_inventario.junctions')->latest('updated_at')->first()->updated_at,
                'table' => 'Empalmes'
            ],
            [
                'date' => $lastUpdateElectricLines = DB::table('entel_g_redes_inventario.electric_lines')->latest('updated_at')->first()->updated_at,
                'table' => 'Lineas Elécrtricas'
            ],
            [
                'date' => $lastUpdateGeneratorSets = DB::table('entel_g_redes_inventario.generator_sets')->latest('updated_at')->first()->updated_at,
                'table' => 'Grupos Electrógenos'
            ],
            [
                'date' => $lastUpdatePowerRectifiers = DB::table('entel_g_redes_inventario.power_rectifiers')->latest('updated_at')->first()->updated_at,
                'table' => 'Plantas Rectificadoras'
            ],
            // [
            //     'date' => $lastUpdateBatteries = DB::table('entel_g_redes_inventario.batteries')->latest('updated_at')->first()->updated_at,
            //     'table' => 'Baterías'
            // ],
            [
                'date' => $lastUpdateBatteryBanks = DB::table('entel_g_redes_inventario.battery_banks')->latest('updated_at')->first()->updated_at,
                'table' => 'Bancos Baterías'
            ],
            [
                'date' => $lastUpdateAirConditioners = DB::table('entel_g_redes_inventario.air_conditioners')->latest('updated_at')->first()->updated_at,
                'table' => 'Aires Acondicionados'
            ],
            [
                'date' => $lastUpdateVerticalStructures = DB::table('entel_g_redes_inventario.vertical_structures')->latest('updated_at')->first()->updated_at,
                'table' => 'Estructuras Verticales'
            ],
            [
                'date' => $lastUpdateInfrastructures = DB::table('entel_g_redes_inventario.infrastructures')->latest('updated_at')->first()->updated_at,
                'table' => 'Infraestructuras'
            ]
        ];

        usort($latest, function($a1, $a2) {
           $v1 = strtotime($a1['date']);
           $v2 = strtotime($a2['date']);
           return $v1 - $v2; // $v2 - $v1 to reverse direction
        });

        $last_updated_data = array_slice(array_reverse($latest), 0, 3);
        
        // ⚠️ Create api_token
        // $users = User::where('estado', 1)->get();
        // foreach ($users as $user) {
        //     $user->forceFill([
        //         'api_token' => Hash::make(Str::random(60))
        //     ])->save();
        // }


        // CONTADORES
        // $pop_news_day = Pop::whereDay('created_at', Carbon::now()->format('d'))->count();
        // $pop_news_month = Pop::whereMonth('created_at', Carbon::now()->format('m'))->whereYear('created_at', Carbon::now()->format('Y'))->count();
        // $sites_news_day = Site::whereDay('created_at', Carbon::now()->format('d'))->count();
        $sites_news_month = Site::whereMonth('created_at', Carbon::now()->format('m'))->whereYear('created_at', Carbon::now()->format('Y'))->count();
        // $technologies_news_day = Technology::whereDay('created_at', Carbon::now()->format('d'))->count();
        $technologies_news_month = Technology::whereMonth('created_at', Carbon::now()->format('m'))->whereYear('created_at', Carbon::now()->format('Y'))->count();

        // Equipos
        // $equipments_news_day = 
        //     GeneratorSet::whereDay('created_at', Carbon::now()->format('d'))->count() +
        //     PowerRectifier::whereDay('created_at', Carbon::now()->format('d'))->count() +
        //     AirConditioner::whereDay('created_at', Carbon::now()->format('d'))->count();
        // $equipments_news_month = 
        //     GeneratorSet::whereMonth('created_at', Carbon::now()->format('m'))->count() +
        //     PowerRectifier::whereMonth('created_at', Carbon::now()->format('m'))->count() +
        //     AirConditioner::whereMonth('created_at', Carbon::now()->format('m'))->count();


        $last_site = Site::with('pop.comuna', 'pop.zona.crm')->latest()->first();
        $last_technology = Technology::with('site.pop.comuna', 'site.pop.zona.crm')->latest()->first();
        $equipment = PsgTp::whereMonth('created_at', '>', Carbon::now()->format('m'))->count();

        $last_updated_pops = Carbon::parse(Pop::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_sites = Carbon::parse(Site::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_technologies = Carbon::parse(Technology::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');

        
        $last_data_counters = [
            // 'pop_news_day' => $pop_news_day,
            // 'pop_news_month' => $pop_news_month,
            // 'sites_news_day' => $sites_news_day,
            'sites_news_month' => $sites_news_month,
            // 'technologies_news_day' => $technologies_news_day,
            'technologies_news_month' => $technologies_news_month,
            // 'equipments_news_day' => $equipments_news_day,
            // 'equipments_news_month' => $equipments_news_month,
            'last_site' => $last_site,
            'last_technology' => $last_technology,
            'equipment' => $equipment,
            'last_updated_pops' => $last_updated_pops,
            'last_updated_sites' => $last_updated_sites,
            'last_updated_technologies' => $last_updated_technologies,
        ]; 

        $darkMode = 0;

        return view('layouts.app', compact(
            'last_data_counters',
            'last_updated_data',
            'darkMode'
        ));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function apiPops(Request $request)
    {
        // $roles = Role::pluck('slug')->toArray();
        // $request->user()->authorizeRoles($roles);

        // $now = Carbon::now()->isoFormat('YYYYMMDDHHmm');
        // $token = 'a3QwEBesPKm9b2f';
        // $hash = md5($now.''.$token);
        // $url = 'https://aess.entelchile.net/pop_m/all/all/?EXPORT=CSV&v=5&app=analytics&key='.$hash;
        // dd($url);
        // Storage::disk('local')->put('file.csv', fopen($url, 'r'));

        // (new CellsImport)->import('file.csv');
        // dd('success');


        $aessData = AessCell::whereRaw('aess_cells.pop_e_id IS NOT NULL AND aess_cells.pop_m_id NOT IN ("TBD", "EV001")')
            ->select(
                'aess_cells.rat_type_id',
                'aess_cells.frequency',
                'aess_cells.ran_device_id',
                'aess_cells.ran_device_status_id',
                'aess_cells.pop_m_status_id',
                'aess_cells.ran_device_name',
                'aess_cells.pop_m_id',
                'aess_cells.solution_type_id',
                'aess_cells.pop_e_id',
                'aess_cells.pop_name',
                'aess_cells.lat_wgs84',
                'aess_cells.lon_wgs84',
                'aess_cells.comuna_id',
                'aess_cells.address',
                'aess_cells.zona_fdt',
                'aess_cells.lloo700', 
                'aess_cells.lloo2600'               
            )
            ->get();

        foreach ($aessData as $newPop) {

            $zona_id = Comuna::where('id', $newPop->comuna_id)->first()->zona_id;

            // Insert POP
            $pop = Pop::insertOrIgnore([
                [
                    'pop_e_id' => $newPop->pop_e_id, 
                    'nombre' => $newPop->pop_name, 
                    'direccion' => $newPop->address, 
                    'comuna_id' => $newPop->comuna_id, 
                    'zona_id' => $zona_id,
                    'latitude' => $newPop->lat_wgs84, 
                    'longitude' => $newPop->lon_wgs84, 
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);

            // Insert Site
            $site = Site::withTrashed()->updateOrCreate(
                [
                    'nem_site' => $newPop->pop_m_id
                ],
                [
                    'pop_e_id' => $newPop->pop_e_id,
                    'pop_id' => Pop::withTrashed()->where('pop_e_id', $newPop->pop_e_id)->first()->id, 
                    'nombre' => $newPop->pop_name, 
                    'site_type_id' => 2,
                    'solution_type_id' => $newPop->solution_type_id, 
                    'site_class_type_id' => 6,
                    'state_id' => $newPop->pop_m_status_id,
                    'zona_fdt' => $newPop->zona_fdt ? $newPop->zona_fdt : 0,
                    'lloo700' => $newPop->lloo700 ? $newPop->lloo700 : 0,
                    'lloo2600' => $newPop->lloo2600 ? $newPop->lloo2600 : 0,
                    'localidad_obligatoria' => $newPop->lloo700 || $newPop->lloo2600 ? 1 : 0
                ]
            );

            // Insert Technologies
            $technology = Technology::withTrashed()->updateOrCreate(
                [
                    'nem_tech' => $newPop->ran_device_id 
                ],
                [
                    'site_id' => Site::withTrashed()->where('nem_site', $newPop->pop_m_id)->first()->id, 
                    'ran_device_name' => $newPop->ran_device_name,
                    'technology_type_id' => $newPop->rat_type_id,
                    'frequency' => $newPop->frequency,
                    'state_id' => $newPop->ran_device_status_id
                ]
            );
        }

        // Insert Room
        // $popsWORoom = Pop::doesntHave('rooms')->get();
        // foreach ($popsWORoom as $pop) {
        //     Room::create([
        //         'pop_id' => $pop->id,
        //         'name' => 'Sala 1.1',
        //         'criticity' => 0,
        //         'order' => 0
        //     ]);
        // }

        // $sitesDeleted = Site::where('state_id', 2)->get();
        // foreach ($sitesDeleted as $site) {
        //     $site->delete();
        // }

        // $sitesToRestore = Site::withTrashed()->where('state_id', '!=', 2)->restore();
        // // foreach ($sitesDeleted as $site) {
        // //     $site->restore();
        // // }

        // $technologiesDeleted = Technology::where('state_id', 2)->get();
        // foreach ($technologiesDeleted as $technology) {
        //     $technology->delete();
        // }
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function test(Request $request)
    {
        //
    }

    
}
