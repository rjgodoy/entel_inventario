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
        return view('main');
    }
    
}
