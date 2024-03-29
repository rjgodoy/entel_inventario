<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Dependence as DependenceResource;
use App\Models\Dependence;

class DependenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $dependences = Dependence::with(
                            'dependence.pop.comuna', 'dependence.pop.zona.crm',
                            'dependence.classification_type'
                        )->whereHas('site.pop', function($q) use($id) {
                            $q->where('id', $id);
                        })->whereHas('dependence', function($q) {
                            $q->where('state_id', '!=', 2);
                        })
                        ->whereRaw('dependence_id IS NOT NULL')
                        ->orderBy('site_id', 'asc')->orderBy('dependence_id', 'asc')
                        ->get();

        return new DependenceResource($dependences);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
