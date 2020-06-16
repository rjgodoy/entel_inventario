<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Junction as JunctionResource;
use App\Http\Resources\JunctionCollection;
use App\Imports\JunctionsImport;
use App\Models\Junction;
use App\Models\JunctionConnection;
use App\Models\JunctionMeasurement;
use App\Models\JunctionProtection;
use App\Models\JunctionType;
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
            'r_a_amp_measure' => $request->r_a_amp_measure,
            's_a_amp_measure' => $request->s_a_amp_measure,
            't_a_amp_measure' => $request->t_a_amp_measure,
            'r_b_amp_measure' => $request->r_b_amp_measure,
            's_b_amp_measure' => $request->s_b_amp_measure,
            't_b_amp_measure' => $request->t_b_amp_measure,
            'r_a_volt_measure' => $request->r_a_volt_measure,
            's_a_volt_measure' => $request->s_a_volt_measure,
            't_a_volt_measure' => $request->t_a_volt_measure,
            'r_b_volt_measure' => $request->r_b_volt_measure,
            's_b_volt_measure' => $request->s_b_volt_measure,
            't_b_volt_measure' => $request->t_b_volt_measure,
            'nominal_a' => $request->nominal_a,
            'regulada_a' => $request->regulada_a,
            'nominal_b' => $request->nominal_b,
            'regulada_b' => $request->regulada_b,
            'use_factor' => $request->use_factor
        ]);

        JunctionProtection::create([
            'junction_id' => $id,
            'nominal_a' => $request->nominal_a,
            'regulada_a' => $request->regulada_a,
            'nominal_b' => $request->nominal_b,
            'regulada_b' => $request->regulada_b
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateTypes(Request $request, $id)
    {
        $junction = Junction::find($id);
        $junction->update([
            'client_number' => $request->client_number,
            'junction_number' => $request->junction_number,
            'junction_type_id' => $request->junction_type_id,
            'junction_connection_id' => $request->junction_connection_id,
            'use_factor' => $request->use_factor
        ]);


        Log::create([
            'pop_id' => $request->pop_id,
            'user_id' => $request->user_id,
            'log_type_id' => 1,
            'description' => 'Se ha introducido nuevos parámetros en el empalme.'
        ]);

        return $junction;
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function junctionTypes()
    {
        $junctionTypes = JunctionType::all();
        return new JunctionCollection($junctionTypes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function junctionConnections()
    {
        $junctionConnections = JunctionConnection::all();
        return new JunctionCollection($junctionConnections);
    }
}
