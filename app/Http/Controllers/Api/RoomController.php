<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\RoomCollection;
use App\Models\Pop;
use App\Models\Projection;
use App\Models\Room;
use App\Models\RoomDistribution;
use App\Models\RoomSurface;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $text = $request->text;
        $crm_id = $request->crm_id;

        $condition_crm = $crm_id != 0 ? 'crm_id = '.$crm_id : 'crm_id != '.$crm_id;

        $pops = Pop::with(
                'comuna.zona.crm', 
                'sites', 
                'rooms.pop.current_autonomy',

                'junctions',
                'generator_sets',
                'power_rectifiers',
                'current_autonomy',

                'rooms.pop.rooms.planes.power_rectifiers.power_rectifier_type', 
                'rooms.pop.rooms.planes.power_rectifiers.power_rectifier_modules', 
                'rooms.pop.rooms.planes.battery_banks.battery_bank_brand',
                'rooms.pop.rooms.planes.power_rectifiers.power_rectifier_mode',
                'rooms.pop.rooms.planes.current_redundant_modules',
                'rooms.pop.rooms.planes.plane_type', 
                
                'rooms.pop.rooms.power_rectifiers.plane',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_type',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_modules',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_mode',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.battery_banks.battery_bank_brand',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.current_redundant_modules',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.plane_type',
                'rooms.pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.plane',

                'rooms.pop.rooms.current_fire_detection.fire_detection_type',
                'rooms.pop.rooms.current_fire_detection.fire_extinction_type',

                'rooms.planes.power_rectifiers.power_rectifier_type', 
                'rooms.planes.power_rectifiers.power_rectifier_modules', 
                'rooms.planes.battery_banks.battery_bank_brand',
                'rooms.planes.power_rectifiers.power_rectifier_mode',
                'rooms.planes.current_redundant_modules',
                'rooms.planes.plane_type',

                'rooms.power_rectifiers',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_type',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_modules',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_mode',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.battery_banks.battery_bank_brand',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.current_redundant_modules',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.plane_type',
                'rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.plane',

                'rooms.current_fire_detection.fire_detection_type',
                'rooms.current_fire_detection.fire_extinction_type',

                'rooms.air_conditioners.air_conditioner_consumptions',
                'rooms.air_conditioners.air_conditioner_brand.air_conditioner_type',
                'rooms.air_conditioners.air_conditioner_chillers',
                'rooms.air_conditioners.air_conditioner_condensers',


                'rooms.current_room_distribution',
                'rooms.current_room_surface',

                'rooms.current_air_conditioner_capacity'
            )
            ->whereHas('sites', function($q) use($text) {
                if ($text) {
                    $q->where('nem_site', 'LIKE', "%$text%")
                    ->orWhere('nombre', 'LIKE', "%$text%");
                }
            })
            ->whereHas('comuna.zona', function($r) use($condition_crm) {
                $r->whereRaw($condition_crm);
            })
            ->whereHas('rooms', function($p) {
                $p->where('criticity', 1);
            })
            ->get();

        return new RoomCollection($pops);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $last_room = Room::where('pop_id', $request->pop_id)->orderBy('order', 'desc')->first();
        $order = $last_room ? $last_room->order + 1 : 1;

        Room::create([
            'pop_id' => $request->pop_id,
            'name' => $request->name,
            'old_name' => $request->alias,
            'criticity' => 1,
            'order' => $order
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $room = Room::with(
            'pop.junctions',
            'pop.generator_sets',
            'pop.current_autonomy',

            'pop.rooms.current_room_distribution',
            'pop.rooms.current_room_surface',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_type',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_modules',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_mode',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.battery_banks.battery_bank_brand',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.current_redundant_modules',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.plane_type',
            'pop.rooms.current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.plane',
            'pop.rooms.current_air_conditioner_capacity',

            'pop.rooms.current_fire_detection.fire_detection_type',
            'pop.rooms.current_fire_detection.fire_extinction_type',

            'pop.rooms.power_rectifiers.plane',
            'pop.rooms.power_rectifiers.power_rectifier_type',
            'pop.rooms.power_rectifiers.power_rectifier_modules',
            'pop.rooms.power_rectifiers.power_rectifier_mode',

            'planes.power_rectifiers.power_rectifier_type', 
            'planes.power_rectifiers.power_rectifier_modules', 
            'planes.battery_banks.battery_bank_brand',
            'planes.power_rectifiers.power_rectifier_mode',
            'planes.current_redundant_modules',
            'planes.plane_type',

            // 'pop.rooms.planes.power_rectifiers.power_rectifier_type', 
            // 'pop.rooms.planes.power_rectifiers.power_rectifier_modules', 
            // 'pop.rooms.planes.power_rectifiers.power_rectifier_mode',
            'pop.rooms.planes.battery_banks.battery_bank_brand',
            'pop.rooms.planes.current_redundant_modules',
            'pop.rooms.planes.plane_type',
            
            'current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_type',
            'current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_modules',
            'current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.power_rectifier_mode',
            'current_room_delegation.plane_delegation_type.plane_types.planes.battery_banks.battery_bank_brand',
            'current_room_delegation.plane_delegation_type.plane_types.planes.current_redundant_modules',
            'current_room_delegation.plane_delegation_type.plane_types.planes.plane_type',
            'current_room_delegation.plane_delegation_type.plane_types.planes.power_rectifiers.plane',

            'current_fire_detection.fire_detection_type',
            'current_fire_detection.fire_extinction_type',


            'air_conditioners.air_conditioner_consumptions',
            'air_conditioners.air_conditioner_brand.air_conditioner_type',
            'air_conditioners.air_conditioner_chillers',
            'air_conditioners.air_conditioner_condensers',

            'current_room_distribution',
            'current_room_surface',
            'current_air_conditioner_capacity'
        )->where('id', $id)->first();

        return new RoomResource($room);
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function projection(Request $request)
    {
        $data = Projection::where('room_id', $request->room_id)
                ->orderBy('year', 'desc')
                ->orderBy('month', 'desc')
                ->get();
        return new RoomResource($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function createRoomDistribution(Request $request, $room_id)
    {
        $newDistribution = RoomDistribution::create([
            'room_id' => $room_id,
            'total_capacity' => $request->total_capacity,
            'used_capacity' => $request->used_capacity
        ]);
        return $newDistribution;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function createRoomSurface(Request $request, $room_id)
    {
        $newSurface = RoomSurface::create([
            'room_id' => $room_id,
            'total_surface' => $request->total_surface,
            'used_surface' => $request->used_surface
        ]);
        return $newSurface;
    }

}
