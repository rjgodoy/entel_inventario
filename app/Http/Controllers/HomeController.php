<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ClientConnection;
use App\Menu;
use App\Pop;
use App\Crm;
use App\Site;
use App\Technology;
use App\PsgTp;
use Carbon\Carbon;
use DB;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

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
    public function index()
    {

        // $pretPops = DB::table('entel_pops.pretPops')->join('entel_pops.comunas', 'pretPops.comuna', '=', 'comunas.nombre_comuna')
        //     ->whereRaw('pretPops.alias NOT IN ("TBD", "EV001", "alias") AND pretPops.ran_device_status NOT IN ("ELIMINADO", "PREVIO")')
        //     ->select(
        //         'pretPops.pop_e_id',
        //         'pretPops.ran_device_name',
        //         'comunas.id',
        //         'pretPops.lat_wgs84',
        //         'pretPops.lon_wgs84',
        //         'pretPops.lat_wgs84',
        //         'pretPops.lon_wgs84'
        //     )
        //     ->get();

        // foreach ($pretPops as $newPop) {
        //     Pop::insertOrIgnore([
        //         [
        //             'pop_e_id' => $newPop->pop_e_id, 
        //             'nombre' => $newPop->ran_device_name, 
        //             'comuna_id' => $newPop->id, 
        //             'latitude' => $newPop->lat_wgs84, 
        //             'longitude' => $newPop->lon_wgs84, 
        //             'latitude_b' => $newPop->lat_wgs84, 
        //             'longitude_b' => $newPop->lon_wgs84,
        //             'created_at' => Carbon::now(),
        //             'updated_at' => Carbon::now()
        //         ]
        //     ]);
        // }

        // dd($pretPops);

        if (Cache::has('crms')) {
            $crms = Cache::get('crms');
        } else {
            $crms = Cache::rememberForever('crms', function () {
                $crms = Crm::with('zonas.comunas', 'zonas.responsable')->get();
                return $crms;
            });
        }

        // FTP
        // $directory = Storage::disk('ftp')->files();
        // $directory = Storage::disk('ftp')->directories()[0];
        // $directories = Storage::disk('ftp')->directories($directory)[0];
        // $allFiles = Storage::disk('ftp')->files($directories);
        // $matchingFiles = preg_grep('/^TA224\./', $allFiles);
        // dd($matchingFiles);

        // LOCAL
        // $directory = Storage::disk('local')->directories('/public');
        // $directories = Storage::disk('local')->directories($directory)[0];
        // $allFiles = Storage::disk('local')->files($directories);
        // $matchingFiles = preg_grep('/^TA224\./', $allFiles);
        // dd($directory);


        $menu = Menu::where('active', 1)->orderBy('order', 'asc')->get();

        // if (Cache::has('dashboardMap')) {
        //     $pops = Cache::get('dashboardMap');
        // } else {
        //     $pops = Cache::remember('dashboardMap', $this->seconds, function () {
                // $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                //     ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                //     ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                //     ->join('sites', function($join) {
                //         $join->on('pops.id', '=', 'sites.pop_id')
                //             ->where('sites.state_id', 1);
                //     })
                //     ->join('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
                //     ->select(
                //         'pops.id',
                //         'pops.nombre',
                //         'pops.direccion',
                //         'sites.nem_site',
                //         'pops.latitude',
                //         'pops.longitude',
                //         'comunas.nombre_comuna',
                //         'comunas.zona_id',
                //         'zonas.crm_id',
                //         'zonas.nombre_zona',
                //         'crms.nombre_crm',
                //         'sites.classification_type_id',
                //         'classification_types.classification_type'
                //     )
                //     ->groupBy('pops.id')
                //     ->get();

            //     return $pops; 
            // });
        // }

        // CONTADORES
        $pop_news = Pop::where('created_at', '>', Carbon::now()->subMinutes(30))->count();
        $sites_news = Site::where('created_at', '>', Carbon::now()->subHours(1))->count();
        $technologies_news = Technology::where('created_at', '>', Carbon::now()->subHours(1))->count();
        $last_site = Site::with('pop.comuna.zona.crm')->latest()->first();
        $psg_info = PsgTp::where('created_at', '>', Carbon::now()->subHours(5))->count();

        $last_updated_pops = Carbon::parse(Pop::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_sites = Carbon::parse(Site::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_technologies = Carbon::parse(Technology::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        
        $last_data_counters = [
            'pop_news' => $pop_news,
            'sites_news' => $sites_news,
            'technologies_news' => $technologies_news,
            'last_site' => $last_site,
            'psg_info' => $psg_info,
            'last_updated_pops' => $last_updated_pops,
            'last_updated_sites' => $last_updated_sites,
            'last_updated_technologies' => $last_updated_technologies

        ]; 

        // dd($last_data_counters);

        return view('main', compact(
            'menu',
            // 'pops',
            'crms',
            'last_data_counters'
        ));
    }
    
}
