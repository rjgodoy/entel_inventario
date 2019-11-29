<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Pop;
use App\Crm;

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

        $mapAttributes = collect([
            'latitude' => -33.44444275,
            'longitude' => -70.6561017,
            'zoom' => 5
        ]);

        return view('home', compact(
                'mapAttributes'
            )
        );
    
    }
}
