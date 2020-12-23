<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BatteryBank;
use App\Models\Log;
use Illuminate\Http\Request;

class BatteryBankController extends Controller
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
        BatteryBank::create([
            'plane_id' => $request->plane_id,
            'battery_bank_brand_id' => $request->battery_bank_brand_id,
            'capacity' => $request->capacity
        ]);

        return 'battery bank created';
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
        $batteryBank = BatteryBank::find($id);
        $batteryBank->update([
            'capacity' => $request->capacity,
            'battery_bank_brand_id' => $request->battery_bank_brand_id
        ]);

        Log::create([
            'pop_id' => $request->pop_id,
            'user_id' => $request->user_id,
            'log_type_id' => 1,
            'description' => 'Se ha actualizado los parametros del Banco de Baterías Nº '.$id.'.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $batteryBank = BatteryBank::find($id);
        $batteryBank->delete();
    }
}
