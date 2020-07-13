<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plane as PlaneResource;
use App\Http\Resources\PlaneCollection;
use App\Models\Plane;
use App\Models\PlaneType;
use App\Models\RoomDelegation;
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
    public function roomPlanes(Request $request, $room_id)
    {
        $plane_delegation_type_id = $request->plane_delegation_type_id;

        $planes = Plane::with(
            'rooms.current_room_delegation.plane_delegation_type.planes.power_rectifiers.power_rectifier_type',
            // 'rooms.current_room_delegation.plane_delegation_type.planes.power_rectifiers.power_rectifier_modules',
            // 'rooms.current_room_delegation.plane_delegation_type.planes.power_rectifiers.power_rectifier_mode',
            // 'rooms.current_room_delegation.plane_delegation_type.planes.battery_banks.battery_bank_brand',
            // 'rooms.current_room_delegation.plane_delegation_type.planes.plane_type',
            // 'rooms.current_room_delegation.plane_delegation_type.planes.current_redundant_modules',

            'power_rectifiers.power_rectifier_type', 
            'power_rectifiers.power_rectifier_modules', 
            'power_rectifiers.power_rectifier_mode',
            'battery_banks.battery_bank_brand',
            'plane_type',
            'current_redundant_modules'
        )
        ->whereHas('rooms', function($q) use($room_id) {
            $q->where('id', $room_id);
        })
        ->whereHas('plane_delegation_types', function($p) use($plane_delegation_type_id) {
            $p->where('id', $plane_delegation_type_id);
        })
        ->get();

        return new PlaneCollection($planes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function planeTypes()
    {
        $planeTypes = PlaneType::all();
        return new PlaneCollection($planeTypes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateRoomPlaneType(Request $request, $room_id)
    {
        $roomDelegation = RoomDelegation::create([
            'room_id' => $room_id,
            'plane_delegation_type_id' => $request->plane_type_id
        ]);

        return $roomDelegation;
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
