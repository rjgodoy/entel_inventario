<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Junction as JunctionResource;
use App\Http\Resources\JunctionCollection;
use App\Imports\JunctionsImport;
use App\Models\Junction;
use App\Models\JunctionMeasurement;
use App\Models\JunctionProtection;
use App\Models\Log;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class JunctionController extends Controller
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
        $junctions = Junction::with('electric_company', 'junction_type', 'junction_connection', 'latest_measurement', 'latest_protection')
        ->where('pop_id', $id)
        ->get();

        return new JunctionResource($junctions);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function popJunctions($pop_id)
    {
        $junctions = Junction::with('electric_company', 'junction_type', 'junction_connection', 'latest_measurement', 'latest_protection')
        ->where('pop_id', $pop_id)
        ->get();

        return new JunctionCollection($junctions);
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
        JunctionMeasurement::create([
            'junction_id' => $id,
            'r_measure' => $request->phase_r,
            's_measure' => $request->phase_s,
            't_measure' => $request->phase_t
        ]);

        Log::create([
            'pop_id' => $request->pop_id,
            'user_id' => $request->user_id,
            'log_type_id' => 1,
            'description' => 'Se ha introducido nuevos parámetros en el empalme.'
        ]);

        return;
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function syncEfizity(Request $request)
    {
        // $this->output->title('Starting import');
        // (new JunctionsImport)->withOutput($this->output)->import($request->file('file'));
        // $this->output->success('Import successful');
        Excel::import(new JunctionsImport, $request->file('file'));

        return 'success!';
    }
}
