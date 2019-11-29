<?php

namespace App\Http\Controllers;

use App\Pop;
use Illuminate\Http\Request;

use App\Attention;
use App\AttentionPriority;
use App\Autonomy;
use App\Category;
use App\Classification;
use App\Net;
use App\PopClass;
use App\Site;
use App\Rca;

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
        $pop = Pop::with('comuna.zona.crm', 'comuna.zona.responsable')->where('id', $pop->id)->first();
        // dd($pop->first());

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

        $nets = Net::with('net_type')->where('pop_id', $pop->id)->get();
        $net = $nets->last();

        $pop_classes = PopClass::with('pop_class_type')->where('pop_id', $pop->id)->get();
        $pop_class = $pop_classes->last();

        $sites = Site::with('site_type')->where('pop_id', $pop->id)->get();
        $site = $sites->last();

        $rcas = Rca::where('pop_id', $pop->id)->get();

        return view('pop', compact(
            'pop',
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
            'nets',
            'net',
            'pop_classes',
            'sites',
            'site',
            'rcas', 
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
        return Excel::download(new PopsExport(), 'listado_pops - '.date("Y-m-d h:i:sa").'.xlsx');
    }
}
