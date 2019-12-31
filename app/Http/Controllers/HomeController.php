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

        $popsMap = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                    ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                    // ->leftJoin('classifications', function ($join) {
                    //     $join->on('pops.id', '=', 'classifications.pop_id')
                    //     ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                    // })
                    ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')
                    ->select(
                        'pops.id as pop_id',
                        'pops.nombre',
                        'pops.direccion',
                        'pops.nem_fijo',
                        'pops.nem_movil',
                        'pops.latitude',
                        'pops.longitude',
                        'comunas.zona_id',
                        'zonas.crm_id',
                        'pops.classification_type_id',
                        'classification_types.classification_type'
                    )
                    ->get();

                    dd($popsMap);

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
