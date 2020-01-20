<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Pop;
use App\Crm;
use App\Site;
use App\Technology;
use App\CriticPop;
use App\Menu;

class HomeController extends Controller
{
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
        $last_update_pops = Pop::orderBy('updated_at', 'desc')->first()->updated_at;
        $last_update_sites = Site::orderBy('updated_at', 'desc')->first()->updated_at;;
        $last_update_technologies = Technology::orderBy('updated_at', 'desc')->first()->updated_at;;

        return view('home', compact(
                'last_update_pops',
                'last_update_sites',
                'last_update_technologies'
            )
        );
    
    }
    
}
