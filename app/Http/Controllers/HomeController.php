<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\Menu;
use App\Models\Pop;
use App\Models\Crm;
use App\Models\Site;
use App\Models\Technology;
use App\Models\PsgTp;
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
