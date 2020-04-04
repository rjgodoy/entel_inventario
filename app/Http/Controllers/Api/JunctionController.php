<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Junction as JunctionResource;
use App\Models\Junction;
use App\Models\JunctionProtection;
use App\Models\JunctionMeasurement;

use App\Imports\JunctionsImport;
use Maatwebsite\Excel\Facades\Excel;

class JunctionController extends Controller
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
        $junctions = Junction::with('electric_company', 'junction_type', 'junction_connection', 'junction_protections', 'latest_measurement')
        ->whereHas('junction_protections', function($q) {
            $q->where('protection_type', 1)->latest();
        })
        ->where('pop_id', $id)
        ->get();

        return new JunctionResource($junctions);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function syncEfizity(Request $request)
    {
        return $request->file('file');
        Excel::import(new JunctionsImport, $request->file('file'));

        return 'success!';
    }
}
