<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Log;
use App\Models\LogType;
use App\Models\SolarPanel;
use Illuminate\Http\Request;

class SolarPanelController extends Controller
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
        $newSolarPanel = SolarPanel::create([
            'junction_id' => $request->junction_id,
            'unit_capacity' => $request->unit_capacity,
            'quantity' => $request->quantity
        ]);

        if($newSolarPanel) {
            Log::create([
                'pop_id' => $request->pop_id,
                'user_id' => $request->user_id,
                'log_type_id' => LogType::where('type', 'capacity')->first()->id,
                'description' => 'Se han ingresado nuevos paneles solares en el POP'
            ]);
        }

        return $newSolarPanel;
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
