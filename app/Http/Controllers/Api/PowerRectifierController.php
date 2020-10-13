<?php

namespace App\Http\Controllers\Api;

use App\Exports\PowerRectifiersExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\PowerRectifier as PowerRectifierResource;
use App\Http\Resources\PowerRectifierCollection;
use App\Models\Log;
use App\Models\Plane;
use App\Models\PowerRectifier;
use App\Models\PowerRectifierMode;
use App\Models\PowerRectifierModule;
use App\Models\Room;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PowerRectifierController extends Controller
{
    protected $seconds = 86400;

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function powerRectifierData($core)
    {
        if (Cache::has('powerRectifiersData_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_power_rectifiers

                    FROM entel_pops.crms
                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function powerRectifierDataCrm($crm_id, $core)
    {
        if (Cache::has('powerRectifiersData_crm'.$crm_id.'_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_crm'.$crm_id.'_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_power_rectifiers

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function powerRectifierDataZona($zona_id, $core)
    {
        if (Cache::has('powerRectifiersData_zona'.$zona_id.'_core'.$core)) {
            $powerRectifiersQuantity = Cache::get('powerRectifiersData_zona'.$zona_id.'_core'.$core);
        } else {
            $powerRectifiersQuantity = Cache::remember('powerRectifiersData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $condition = $core == 1 ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1) AND S.state_id = 1' : '';
                $powerRectifiersQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    @q_info:=(SELECT count(DISTINCT PR.pop_id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_power_rectifiers:=(SELECT count(DISTINCT PR.id) 
                            FROM entel_g_redes_inventario.power_rectifiers PR 
                            INNER JOIN entel_pops.pops P ON PR.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_power_rectifiers

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id

                "));
                return $powerRectifiersQuantity;
            });
        }
        return new PowerRectifierResource($powerRectifiersQuantity);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $plane_type_id = $request->plane_type_id;
        $powerR = PowerRectifier::where('room_id', $request->room_id)
            ->whereHas('plane', function($q) use($plane_type_id) {
                $q->where('plane_type_id', $plane_type_id);
            })
            ->first();

        if($powerR) {
            $plane_id = $powerR->plane_id;
        } else {
            $plane = Plane::create([
                'plane_type_id' => $request->plane_type_id
            ]);
            $plane_id = $plane->id;
            $room = Room::find($request->room_id);
            $room->planes()->attach($plane_id);
        }

        $rooms = Room::where('pop_id', $request->pop_id)->get();
        foreach ($rooms as $thisRoom) {
            $powerRect = PowerRectifier::where('room_id', $thisRoom->id)->get();

            $planes = [];
            foreach ($powerRect as $power) {
                array_push($planes, $power->plane_id);
            }

            $popRooms = Room::where('pop_id', $thisRoom->pop_id)->get();

            foreach ($popRooms as $pRoom) {
                foreach ($planes as $planeId) {
                    if(!$pRoom->planes()->where('plane_id', $planeId)->exists()) {
                        $pRoom->planes()->attach($planeId);
                    }
                }
            }            
        }

        PowerRectifier::create([
            'pop_id' => $request->pop_id,
            'room_id' => $request->room_id,
            'plane_id' => $plane_id,
            'power_rectifier_type_id' => $request->power_rectifier_type_id,
            'power_rectifier_mode_id' => $request->power_rectifier_mode_id,
            'capacity' => $request->capacity
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
        $powerRectifier = PowerRectifier::with(
            'power_rectifier_type', 
            'power_rectifier_modules', 
            'plane.battery_banks.battery_bank_brand',
            'plane.plane_type',
            'power_rectifier_mode'
        )
        ->where('pop_id', $id)
        ->get();

        return new PowerRectifierResource($powerRectifier);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function powerRectifiersWithoutRoom(Request $request, $pop_id)
    {
        $powerRectifiers = PowerRectifier::with(
            'power_rectifier_type', 
            'power_rectifier_modules', 
            'plane.battery_banks.battery_bank_brand',
            'plane.plane_type',
            'power_rectifier_mode'
        )
        ->where('pop_id', $pop_id)
        ->whereRaw('room_id IS NULL')
        ->get();

        return new PowerRectifierCollection($powerRectifiers);
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
        $powerRectifier = PowerRectifier::find($id);
        $pop_id = $powerRectifier->pop_id;

        if ($request->room_id && $request->plane_type_id) {
            $room_id = $request->room_id;
            $plane_type_id = $request->plane_type_id;

            $powerR = PowerRectifier::where('room_id', $room_id)
            ->whereHas('plane', function($q) use($plane_type_id) {
                $q->where('plane_type_id', $plane_type_id);
            })
            ->first();

            if($powerR) {
                $plane_id = $powerR->plane_id;
            } else {
                $plane = Plane::create([
                    'plane_type_id' => $request->plane_type_id
                ]);
                $plane_id = $plane->id;
                $room = Room::find($room_id);
                $room->planes()->attach($plane_id);
            }

            $powerRectifier->update([
                'room_id' => $room_id,
                'plane_id' => $plane_id
            ]);
        }

        if ($request->capacity) {
            if(!$powerRectifier->capacity || ($powerRectifier->capacity != $request->capacity)) {
                $powerRectifier->update([
                    'capacity' => $request->capacity
                ]);
            }
            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'Se ha actualizado la capacidad de la planta ID '.$powerRectifier->id.' a '.$request->capacity.'.'
            ]);
        }

        if($powerRectifier->power_rectifier_mode_id != $request->power_rectifier_mode_id) {
            $powerRectifier->update([
                'power_rectifier_mode_id' => $request->power_rectifier_mode_id
            ]);

            $powerRectifierMode = PowerRectifierMode::find($request->power_rectifier_mode_id);

            Log::create([
                'pop_id' => $pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => 1,
                'description' => 'Se ha actualizado la planta ID '.$powerRectifier->id.' a modo '.$powerRectifierMode->mode.'.'
            ]);
        }

        if($request->power_rectifier_modules_quantity && $request->power_rectifier_modules_capacities) {
            if(!$powerRectifier->power_rectifier_modules->count()) {
                for ($i=0; $i < $request->power_rectifier_modules_quantity ; $i++) { 
                    PowerRectifierModule::create([
                        'power_rectifier_id' => $powerRectifier->id,
                        'capacity' => $request->power_rectifier_modules_capacities
                    ]);
                }
                Log::create([
                    'pop_id' => $pop_id,
                    'user_id' => $request->user_id,
                    'log_type_id' => 1,
                    'description' => 'Se han ingresado nuevos módulos de la planta ID '.$powerRectifier->id.'.'
                ]);
            } 

            if ($powerRectifier->power_rectifier_modules->count() != $request->power_rectifier_modules_quantity || $powerRectifier->power_rectifier_modules->first()->capacity != $request->power_rectifier_modules_capacities) {

                $modules = PowerRectifierModule::where('power_rectifier_id', $powerRectifier->id)->get();
                foreach ($modules as $module) {
                    $module->delete();
                }
                for ($i=0; $i < $request->power_rectifier_modules_quantity ; $i++) { 
                    PowerRectifierModule::create([
                        'power_rectifier_id' => $powerRectifier->id,
                        'capacity' => $request->power_rectifier_modules_capacities
                    ]);
                }

                Log::create([
                    'pop_id' => $pop_id,
                    'user_id' => $request->user_id,
                    'log_type_id' => 1,
                    'description' => 'Se han actualizado los módulos de la planta ID '.$powerRectifier->id.'..'
                ]);
            }
        }

        $rooms = Room::where('pop_id', $powerRectifier->pop_id)->get();
        foreach ($rooms as $thisRoom) {
            $powerRect = PowerRectifier::where('room_id', $thisRoom->id)->get();

            $planes = [];
            foreach ($powerRect as $power) {
                array_push($planes, $power->plane_id);
            }

            $popRooms = Room::where('pop_id', $thisRoom->pop_id)->get();

            foreach ($popRooms as $pRoom) {
                foreach ($planes as $planeId) {
                    if(!$pRoom->planes()->where('plane_id', $planeId)->exists()) {
                        $pRoom->planes()->attach($planeId);
                    }
                }
            }            
        }

        return $powerRectifier;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        PowerRectifier::find($id)->delete();
        return 'deleted';
    }

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        return (new PowerRectifiersExport($request))->download('power_rectifiers.xlsx');
    }
}
