<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\ClientConnection;
use App\Menu;
use App\Pop;
use App\Crm;
use App\Site;
use App\Technology;
use App\PsgTp;
use Carbon\Carbon;
use App\CriticSite;
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

    // function buildDirs($folders, $path = null){
    function buildDirs(){
        $origenFiles = Storage::disk('local')->directories('/public/origen/06 - CAM/Informes');
        $destino = Storage::disk('local')->directories('/public/destino');
        $sites = Site::pluck('nem_site');

        // return $origenFiles;

        $fileSiteNems = [];

        foreach ($origenFiles as $file) {
            // return explode(' ', $file);
            // if (count(explode(' ', $file)) >= 4) {
                
                $siteFolder = explode(' ', explode('/', $file)[4])[0];
                // return $siteFolder;
                $files = Storage::disk('local')->allFiles('/public/origen/06 - CAM/Informes/'.explode('/', $file)[4]);

                // return $files;

                foreach ($files as $file) {
                    // return explode('/._', $file);
                    $fileName = explode('/', $file)[5];
                    if (count(explode('/._', $file)) == 1) {
                        // array_push($fileSiteNems, $fileName);
                        if (!Storage::exists('public/destino/'.$siteFolder.'/CAM/'.$fileName)) {
                            Storage::copy($file, 'public/destino/'.$siteFolder.'/CAM/'.$fileName);
                        }
                    }
                }
                
                
            // }
            
        }

        return $fileSiteNems;

        



        $path = $path == null ? "" : $path . "/";

        foreach($folders as $key => $val){
            mkdir($path.$val->name);
            echo "Folder: " . $path . $val->name . "<br>";

            if(!empty($val->files)){
                foreach($val->files as $file){
                    //Create the files inside the current folder $val->name
                    echo "File: " . $path . $val->name . "/" . $file->name . "<br>";
                    file_put_contents($path . $val->name . "/". $file->name, "your data");
                }
            }

            if(!empty($val->folders)){ 
                buildDirs($val->folders, $path . $val->name);
            }
        }
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $request->user()->authorizeRoles(['user', 'admin']);

        dd($this->buildDirs());

        // $sites = Site::whereIn('site_type_id', [1,4])
        //     ->orWhere(function($query) {
        //         $query->whereIn('site_type_id', [2,3])
        //             ->whereHas('technologies', function($q) {
        //                 $q->where('state_id', 1);
        //             });
        //         })
        //         ->get();

        // dd($sites);




        // $core = 0;
        // $crm_id = 0;
        // $zona_id = 0;

        // $condition_core = $core ? 'sites.classification_type_id = '.$core : 'sites.classification_type_id != '.$core;
        // $condition_crm = $crm_id != 0 ? 'zonas.crm_id = '.$crm_id : 'zonas.crm_id != '.$crm_id;
        // $condition_zona = $zona_id != 0 ? 'zonas.id = '.$zona_id : 'zonas.id != '.$zona_id;


        // $pops = Pop::with('comuna.zona.crm', 'sites.classification_type')
        //     ->whereHas('comuna.zona', function($query) use($condition_crm, $condition_zona) {
        //         $query->whereRaw($condition_crm)
        //             ->whereRaw($condition_zona);
        //     })->whereHas('sites', function($query) use($condition_core) {
        //         $query->whereRaw($condition_core)
        //             ->where(function($query) {
        //                 $query->whereIn('site_type_id', [1,4])
        //                     ->orWhere(function($query) {
        //                         $query->whereIn('site_type_id', [2,3])
        //                             ->whereHas('technologies', function($q) {
        //                                 $q->where('state_id', 1);
        //                             });
        //                     });
        //             });
        //     })
        //     ->get();

        // dd($popsMap);

        // $pretDataInfo = DB::select(DB::raw("
        //         SELECT      YEAR(created_at) as ano, MONTH(created_at) as mes, COUNT(*) as nuevos
        //         FROM        entel_pops.sites 
        //         GROUP BY    ano, mes
        //         ORDER BY    ano desc, mes desc
        //         limit 6
        //     "));

        // dd($pretDataInfo);


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

        if ($request->user()->hasRole('admin')) {
            $menu = Menu::where('active', 1)
                ->orderBy('order', 'asc')
                ->get();
        } else {
            $menu = Menu::where('active', 1)
                ->where('id', '!=', 13)
                ->orderBy('order', 'asc')
                ->get();
        }
        

        // CONTADORES
        $pop_news = Pop::where('created_at', '>', Carbon::now()->subHours(24))->count();
        $sites_news = Site::where('created_at', '>', Carbon::now()->subHours(24))->count();
        $technologies_news = Technology::where('created_at', '>', Carbon::now()->subHours(24))->count();
        $last_site = Site::with('pop.comuna.zona.crm')->latest()->first();
        $psg_info = PsgTp::where('created_at', '>', Carbon::now()->subHours(24))->count();

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

        return view('main', compact(
            'menu',
            'pops',
            'crms',
            'last_data_counters'
        ));
    }
    
}
