<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plane as PlaneResource;
use App\Http\Resources\PlaneCollection;
use App\Models\Plane;
use Illuminate\Http\Request;

class PlaneController extends Controller
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
        $plane = Plane::with(
            'power_rectifiers.power_rectifier_type', 
            'power_rectifiers.power_rectifier_modules', 
            'power_rectifiers.battery_banks.battery_bank_brand',
            'power_rectifiers.power_rectifier_mode',
            'plane_type'
        )
        ->where('id', $id)
        ->get();

        return new PlaneResource($plane);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function roomPlanes($pop_id)
    {
        $planes = Plane::with(
            'power_rectifiers.power_rectifier_type', 
            'power_rectifiers.power_rectifier_modules', 
            'battery_banks.battery_bank_brand',
            'power_rectifiers.power_rectifier_mode',
            'plane_type',
            'current_redundant_modules'
        )
        ->whereHas('room', function($q) use($pop_id) {
            $q->where('pop_id', $pop_id);
        })
        ->get();

        return new PlaneCollection($planes);
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
