<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RoomCapacity;
use Illuminate\Http\Request;

class RoomCapacityController extends Controller
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
        $roomCapacity = RoomCapacity::create([
            'room_id' => $request->room_id,
            'battery_autonomy' => $request->battery_autonomy,
            'junction_total' => $request->junction_total,
            'junction_used' => $request->junction_used,
            'junction_available' => $request->junction_available,
            'generator_set_total' => $request->generator_set_total,
            'generator_set_used' => $request->generator_set_used,
            'generator_set_available' => $request->generator_set_available,
            'power_rectifier_total' =>  $request->power_rectifier_total,
            'power_rectifier_used' =>  $request->power_rectifier_used,
            'power_rectifier_available' =>  $request->power_rectifier_available,
            'battery_total' =>  $request->battery_total,
            'battery_used' =>  $request->battery_used,
            'battery_available' =>  $request->battery_available,
            'climate_total' =>  $request->climate_total,
            'climate_used' =>  $request->climate_used,
            'climate_available' =>  $request->climate_available,
            'distribution_total' =>  $request->distribution_total,
            'distribution_used' =>  $request->distribution_used,
            'distribution_available' =>  $request->distribution_available,
            'surface_total' =>  $request->surface_total,
            'surface_used' =>  $request->surface_used,
            'surface_available' =>  $request->surface_available,
        ]);

        return $roomCapacity;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $data = DB::select(DB::raw("
        //     SELECT * 
        //     FROM entel_g_redes_inventario.room_capacities
        //     WHERE 
        //         room_id = $id AND
        //         created_at IN (
        //         SELECT MAX(created_at) 
        //         FROM entel_g_redes_inventario.room_capacities
        //         GROUP BY DATE(created_at)
        //     )
        // "));
        $graphDates = [];
        $dates = RoomCapacity::where('room_id', $id)->groupByRaw('DATE(created_at)')->orderBy('created_at', 'asc')->get();
        foreach ($dates as $date) {
            array_push($graphDates, $date->created_at);
        }

        $data = RoomCapacity::where('room_id', $id)
        ->whereIn('created_at', [
            \DB::raw('SELECT MAX(created_at) 
                FROM entel_g_redes_inventario.room_capacities
                WHERE room_id = '.$id.'
                GROUP BY DATE(created_at)')
        ])
        ->orderBy('created_at', 'asc')->get();

        return $data;
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
