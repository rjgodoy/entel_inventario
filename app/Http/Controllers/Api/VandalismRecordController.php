<?php

namespace App\Http\Controllers\Api;

use App\Models\Pop;
use Illuminate\Http\Request;
use App\Models\VandalismRecord;
use App\Http\Controllers\Controller;
use App\Http\Resources\VandalismRecordCollection;

class VandalismRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $totals = VandalismRecord::all();

        return new VandalismRecordCollection($totals);
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
        $records = VandalismRecord::whereHas('site', function($q) use($id) {
            $q->where('pop_id', $id);
        })->get();

        return new VandalismRecordCollection($records);
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function coordinatesCaluculation()
    {
        $coordinates = Pop::select('latitude', 'longitude')->get();
        return $coordinates;
    }


}
