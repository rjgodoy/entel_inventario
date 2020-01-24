<?php

namespace App\Http\Controllers;

use App\Pop;
use Illuminate\Http\Request;

use App\Attention;
use App\AttentionPriority;
use App\Autonomy;
use App\Category;
use App\Classification;
use App\Coverage;
use App\Dependence;
use App\Derivation;
use App\Net;
use App\PopClass;
use App\Rca;
use App\Site;
use App\Transport;

use App\PopMenu;

use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PopsExport;

class PopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mapAttributes = collect([
            'latitude' => -33.44444275,
            'longitude' => -70.6561017,
            'zoom' => 5
        ]);

        return view('pops', compact('mapAttributes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function show(Pop $pop)
    {

        $contents = Storage::get('./public/Celdas por POP.xlsx');
        $exists = Storage::disk('public')->files();
        $exists = Storage::allFiles('public');
        // dd($exists);


        $pop = Pop::with('comuna.zona.crm', 'comuna.zona.responsable')->where('id', $pop->id)->first();

        $pop_menu = PopMenu::orderBy('order','asc')->get();

        $attentions = Attention::with('attention_type')->where('pop_id', $pop->id)->get();
        $attention = $attentions->last();

        $attention_priorities = AttentionPriority::with('attention_priority_type')->where('pop_id', $pop->id)->get();
        $attention_priority = $attention_priorities->last();

        $autonomies = Autonomy::where('pop_id', $pop->id)->get();
        $autonomy = $autonomies->last();

        $categories = Category::with('category_type')->where('pop_id', $pop->id)->get();
        $category = $categories->last();

        $classifications = Classification::with('classification_type')->where('pop_id', $pop->id)->get();
        $classification = $classifications->last();

        $coverages = Coverage::with('coverage_type')->where('pop_id', $pop->id)->get();
        $coverage = $coverages->last();

        $dependences = Dependence::with('dependence')->where('pop_id', $pop->id)->get();

        $derivations = Derivation::with('derivation_type')->where('pop_id', $pop->id)->get();
        $derivation = $derivations->last();

        $nets = Net::with('net_type')->where('pop_id', $pop->id)->get();
        $net = $nets->last();

        $pop_classes = PopClass::with('pop_class_type')->where('pop_id', $pop->id)->get();
        $pop_class = $pop_classes->last();

        $rcas = Rca::where('pop_id', $pop->id)->get();

        $sites = Site::with('site_type')->where('pop_id', $pop->id)->get();
        $site = $sites->last();

        $transports = Transport::with('transport_type')->where('pop_id', $pop->id)->get();
        $transport = $transports->last();

        return view('pop', compact(
            'pop',
            'pop_menu',
            'attention',
            'attentions',
            'attention_priority',
            'attention_priorities',
            'autonomy',
            'autonomies',
            'category',
            'categories',
            'classification', 
            'classifications',
            'coverage', 
            'coverages',
            'dependences',
            'derivation', 
            'derivations',
            'nets',
            'net',
            'pop_classes',
            'rcas', 
            'sites',
            'site',
            'transports',
            'transport',
            'pop_class'
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function edit(Pop $pop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pop $pop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pop $pop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        $core = $request->core;
        $crm_id = $request->crm_id;
        $zona_id = $request->zona_id;

        return Excel::download(new PopsExport($core, $crm_id, $zona_id), 'listado_pops - '.date("Y-m-d h:i:sa").'.xlsx');
    }
}
