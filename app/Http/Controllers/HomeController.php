<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Crm;
use App\Models\Pop;
use App\Models\File;
use App\Models\Menu;
use App\Models\Role;
use App\Models\Room;
use App\Models\Site;
use App\Models\User;
use App\Models\Zona;
use App\Models\Plane;
use App\Models\PsgTp;
use App\Models\Folder;
use App\Models\Autonomy;
use App\Models\Junction;
use App\Models\Technology;
use Illuminate\Support\Str;
use App\Imports\CellsImport;
use App\Models\GeneratorSet;
use App\Models\GeneratorTta;
use Illuminate\Http\Request;
use App\Models\GeneratorTank;
use App\Models\AirConditioner;
use App\Models\GeneratorGroup;
use App\Models\GeneratorMotor;
use App\Models\PowerRectifier;
use App\Imports\JunctionsImport;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use App\Models\GeneratorsPlatformGenerator;

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

        // $folders = Folder::where('name', 'like', 'Levantamientos%')->get();
        // foreach ($folders as $folder) {
        //     $folder2019s = Folder::where('parent_id', $folder->id)->where('name', '2019')->get();
        //     // selecciona las carpetas de cada una de las carpetas principales y las duplica con el parent_id de la nueva carpeta padre
        //     foreach ($folder2019s as $folder2019) {
        //         $folder2020 = Folder::create([
        //             'parent_id' => $folder2019->parent_id,
        //             'site_id' => $folder2019->site_id,
        //             'pop_id' => $folder2019->pop_id,
        //             'name' => '2020',
        //             'creator_id' => $folder2019->creator_id
        //         ]);

        //         // Duplica los archivos de esa carpeta
        //         $subfiles = File::where('folder_id', $folder2019->id)->get();
        //         foreach ($subfiles as $subfile) {
        //             File::create([
        //                 'folder_id' => $folder2020->id,
        //                 'user_id' => $subfile->user_id,
        //                 'site_id' => $subfile->site_id,
        //                 'pop_id' => $subfile->pop_id,
        //                 'route' => $subfile->route,
        //                 'dirname' => $subfile->dirname,
        //                 'basename' => $subfile->basename,
        //                 'extension' => $subfile->extension,
        //                 'filename' => $subfile->filename,
        //                 'size' => $subfile->size,
        //                 'mime' => $subfile->mime
        //             ]);
        //         }


                    
        //         $foldersIn2019 = Folder::where('parent_id', $folder2019->id)->get();
        //         foreach ($foldersIn2019 as $subfolder2019) {
        //             $newInSubFolder = Folder::create([
        //                 'parent_id' => $folder2020->id,
        //                 'site_id' => $subfolder2019->site_id,
        //                 'pop_id' => $subfolder2019->pop_id,
        //                 'name' => $subfolder2019->name,
        //                 'creator_id' => $subfolder2019->creator_id
        //             ]);

        //             $subfiles = File::where('folder_id', $subfolder2019->id)->get();
        //             foreach ($subfiles as $subfile) {
        //                 File::create([
        //                     'folder_id' => $newInSubFolder->id,
        //                     'user_id' => $subfile->user_id,
        //                     'site_id' => $subfile->site_id,
        //                     'pop_id' => $subfile->pop_id,
        //                     'route' => $subfile->route,
        //                     'dirname' => $subfile->dirname,
        //                     'basename' => $subfile->basename,
        //                     'extension' => $subfile->extension,
        //                     'filename' => $subfile->filename,
        //                     'size' => $subfile->size,
        //                     'mime' => $subfile->mime
        //                 ]);
        //             }

        //             $onSubfolders = Folder::where('parent_id', $subfolder2019->id)->get();
        //             foreach ($onSubfolders as $onSubFolder) {
        //                 $newFolder = Folder::create([
        //                     'parent_id' => $newInSubFolder->id,
        //                     'site_id' => $onSubFolder->site_id,
        //                     'pop_id' => $onSubFolder->pop_id,
        //                     'name' => $onSubFolder->name,
        //                     'creator_id' => $onSubFolder->creator_id
        //                 ]);

        //                 $insubfiles = File::where('folder_id', $onSubFolder->id)->get();
        //                 foreach ($insubfiles as $insubfile) {
        //                     File::create([
        //                         'folder_id' => $newFolder->id,
        //                         'user_id' => $insubfile->user_id,
        //                         'site_id' => $insubfile->site_id,
        //                         'pop_id' => $insubfile->pop_id,
        //                         'route' => $insubfile->route,
        //                         'dirname' => $insubfile->dirname,
        //                         'basename' => $insubfile->basename,
        //                         'extension' => $insubfile->extension,
        //                         'filename' => $insubfile->filename,
        //                         'size' => $insubfile->size,
        //                         'mime' => $insubfile->mime
        //                     ]);
        //                 }
        //             }
        //         }
        //     }
        // }
        // dd('done');

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
        $text = '';
        $crm_id = 4;
        $zona_id = 0;
        $brand_id = 0;
        $group_type_id = 0;
        $sub_zone_id= 0;
        $core = 0;
        $critic = 0;
        $vip = 0;

        $data = GeneratorsPlatformGenerator::
            with(
                'g_zona.g_sector'
                ,'generator_set_model.generator_set_brand'
                ,'g_model.g_brand'
                ,'g_model.g_fuel_pond'
                ,'g_type'
                ,'g_last_maintance.g_maintance_status'
            )
            ->where(function($q) use($text) {
                if($text) {
                    $q->where('name', 'LIKE', "%$text%")
                    ->orWhere('mobile_code', 'LIKE', "%$text%");
                    // ->orWhereHas('pop.sites', function($p) use($text) {
                    //     if ($text) {
                    //         $p->where('nem_site', 'LIKE', "%$text%")->orWhere('nombre', 'LIKE', "%$text%");
                    //     }
                    // });
                }
            })
            ->where(function($q) use($crm_id, $zona_id) {
                if ($crm_id) {
                    if($zona_id) {
                        $q->where('zone_id', $zona_id);
                    } else {
                        $q->whereHas('g_zona.g_sector', function($p) use($crm_id) {
                            $p->where('sector_id', $crm_id);
                        });
                    }
                }
            })
            ->where(function($q) use($group_type_id) {
                if($group_type_id) {
                    $q->where('group_type_id', $group_type_id);
                }
            })
            ->whereHas('g_model', function($p) use($brand_id) {
                if ($brand_id) {
                    $p->where('brand_id', $brand_id);
                }
            })

            ->where(function($q) use($sub_zone_id) {
                if($sub_zone_id) {
                    $q->where('sub_zone_id', $sub_zone_id);
                }
            })
            ->orderBy('zone_id', 'asc')
            ->get();

            dd($data);
    }

    
}
