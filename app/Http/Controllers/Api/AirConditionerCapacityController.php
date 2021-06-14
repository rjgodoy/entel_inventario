<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AirConditionerCapacity;
use App\Models\Log;
use App\Models\LogType;
use App\Models\Room;
use Illuminate\Http\Request;

class AirConditionerCapacityController extends Controller
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
        // return $request;
        $newAirConditionerCapacity = AirConditionerCapacity::create([
            'room_id' => $request->room_id,
            'total_capacity' => $request->total_capacity,
            'used_capacity' => $request->used_capacity
        ]);

        $room = Room::find($request->room_id);

        if($newAirConditionerCapacity) {
            Log::create([
                'pop_id' => $request->pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => LogType::where('type', 'capacity')->first()->id,
                'description' => 'Se han ingresado nuevas capacidades de Clima en la sala "'. $room->name.'"'
            ]);
        }

        return $newAirConditionerCapacity;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
