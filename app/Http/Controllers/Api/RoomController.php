<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Room as RoomResource;
use App\Http\Resources\RoomCollection;
use App\Models\Pop;
use App\Models\Projection;
use App\Models\Room;
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

        $pops = Pop::with('comuna.zona.crm', 'sites', 'rooms')
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
            ->paginate(10);

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
        $room = Room::with(
            'pop.rooms.current_room_distribution',
            'pop.rooms.fire_detections.fire_detection_type',
            'pop.rooms.fire_detections.fire_extintion_type',
            'pop.junctions',
            'pop.generator_sets',
            'pop.power_rectifiers',
            'air_conditioners.air_conditioner_consumptions',
            'air_conditioners.air_conditioner_brand.air_conditioner_type',
            'air_conditioners.air_conditioner_chillers',
            'air_conditioners.air_conditioner_condensers',
            'current_room_distribution',
            'fire_detections.fire_detection_type',
            'fire_detections.fire_extintion_type'
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

}
