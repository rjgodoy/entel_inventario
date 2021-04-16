<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Pop;
use App\Models\Role;
use App\Models\Site;
use App\Models\PsgTp;
use App\Models\OTForm;
use App\Models\Technology;
use App\Imports\CellsImport;
use App\Models\OTTmpTaskLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\GeneratorsPlatformGenerator;
use App\Models\GeneratorsPlatformStatistic;
use App\Models\GeneratorsPlatformOTMaintance;
use App\Models\GeneratorsPlatformMaintanceType;
use App\Models\GeneratorsPlatformMaintanceStatus;
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
        $roles = Role::pluck('slug')->toArray();
        $request->user()->authorizeRoles($roles);

        $now = Carbon::now()->isoFormat('YYYYMMDDHHmm');
        $token = 'a3QwEBesPKm9b2f';
        $hash = md5($now.''.$token);
        $url = 'https://aess.entelchile.net/pop_m/all/all/?EXPORT=CSV&v=5&app=analytics&key='.$hash;
        dd($url);
        Storage::disk('local')->put('file.csv', fopen($url, 'r'));

        (new CellsImport)->import('file.csv');
        dd('success');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function test(Request $request)
    {
        $now = Carbon::now()->isoFormat('YYYYMMDDHHmm');
        $token = 'a3QwEBesPKm9b2f';
        $hash = md5($now.''.$token);
        $url = 'https://aess.entelchile.net/pop_m/all/all/?EXPORT=CSV&v=5&app=analytics&key='.$hash;
        dd($url);

        Storage::disk('local')->put('file.csv', fopen($url, 'r'));

        

        
    }

    
}
