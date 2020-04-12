<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use App\Models\Menu;
use App\Models\Pop;
use App\Models\Crm;
use App\Models\Site;
use App\Models\Technology;
use App\Models\GeneratorSet;
use App\Models\PowerRectifier;
use App\Models\AirConditioner;
use App\Models\TechnologyType;
use App\Models\PsgTp;
use App\Models\User;
use App\Models\Junction;
use Carbon\Carbon;

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
    public function index(Request $request)
    {
        $request->user()->authorizeRoles(['user', 'admin']);

        // $user = $request->user();

        // dd($user->can('vew-comsites'));

        // ⚠️ Create api_token
        // $users = User::where('estado', 1)->get();
        // foreach ($users as $user) {
        //     $user->forceFill([
        //         'api_token' => Hash::make(Str::random(60))
        //     ])->save();
        // }

        if (Cache::has('crms')) {
            $crms = Cache::get('crms');
        } else {
            $crms = Cache::rememberForever('crms', function () {
                $crms = Crm::with('zonas.comunas', 'zonas.responsable')->get();
                return $crms;
            });
        }

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
        // $pop_news_day = Pop::whereDay('created_at', Carbon::now()->format('d'))->count();
        $pop_news_month = Pop::whereMonth('created_at', Carbon::now()->format('m'))->count();
        // $sites_news_day = Site::whereDay('created_at', Carbon::now()->format('d'))->count();
        $sites_news_month = Site::whereMonth('created_at', Carbon::now()->format('m'))->count();
        // $technologies_news_day = Technology::whereDay('created_at', Carbon::now()->format('d'))->count();
        // $technologies_news_month = Technology::whereMonth('created_at', Carbon::now()->format('m'))->count();

        // Equipos
        // $equipments_news_day = 
        //     GeneratorSet::whereDay('created_at', Carbon::now()->format('d'))->count() +
        //     PowerRectifier::whereDay('created_at', Carbon::now()->format('d'))->count() +
        //     AirConditioner::whereDay('created_at', Carbon::now()->format('d'))->count();
        $equipments_news_month = 
            GeneratorSet::whereMonth('created_at', Carbon::now()->format('m'))->count() +
            PowerRectifier::whereMonth('created_at', Carbon::now()->format('m'))->count() +
            AirConditioner::whereMonth('created_at', Carbon::now()->format('m'))->count();


        $last_site = Site::with('pop.comuna.zona.crm')->latest()->first();
        $equipment = PsgTp::whereMonth('created_at', '>', Carbon::now()->format('m'))->count();

        $last_updated_pops = Carbon::parse(Pop::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_sites = Carbon::parse(Site::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        $last_updated_technologies = Carbon::parse(Technology::orderBy('updated_at', 'desc')->first()->updated_at)->isoFormat('DD MMMM YYYY, HH:mm:ss');
        
        $last_data_counters = [
            // 'pop_news_day' => $pop_news_day,
            'pop_news_month' => $pop_news_month,
            // 'sites_news_day' => $sites_news_day,
            'sites_news_month' => $sites_news_month,
            // 'technologies_news_day' => $technologies_news_day,
            // 'technologies_news_month' => $technologies_news_month,
            // 'equipments_news_day' => $equipments_news_day,
            'equipments_news_month' => $equipments_news_month,
            'last_site' => $last_site,
            'equipment' => $equipment,
            'last_updated_pops' => $last_updated_pops,
            'last_updated_sites' => $last_updated_sites,
            'last_updated_technologies' => $last_updated_technologies

        ]; 

        return view('layouts.main', compact(
            'menu',
            'crms',
            'last_data_counters'
        ));
    }
    
}
