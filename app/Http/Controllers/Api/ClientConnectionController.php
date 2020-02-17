<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\ClientConnection as ClientConnectionResource;
use App\ClientConnection;

use App\Imports\ClientConnectionImport;
use Maatwebsite\Excel\Facades\Excel;

class ClientConnectionController extends Controller
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
        $clientConnection = ClientConnection::with('client_connection_state', 'electric_company')
        ->join('entel_pops.sites', function($q) {
            $q->on('client_connections.site_id', '=', 'sites.id')->where('sites.state_id', 1);
        })
        ->join('entel_pops.pops', function($q) use($id) {
            $q->on('sites.pop_id', '=', 'pops.id')->where('pops.id', $id);
        })
        ->get();

        return new ClientConnectionResource($clientConnection);
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function syncEfizity(Request $request)
    {
        // return $request->file('file');

        // Borra la tabla ConnectionClient
        // ConnectionClient::truncate();

        Excel::import(new ClientConnectionImport, $request->file('file'));
        // (new ClientConnectionImport)->import($request->file('file'), null, \Maatwebsite\Excel\Excel::XLS);

        return redirect()->route('/admin');
        // $alerts = Alert::orderBy('pop_id', 'asc')->orderBy('fecha_inicio', 'desc')->get();
        // Alert::truncate();

        // $alert_id = null;
        // $pop_id = null;
        // $difference = 0;
        // $difference_date = 0;
        // $fecha_inicio = null;
        // $i = 0;
        // foreach ($alerts as $alert) {

        //     if ($i == 0) {
        //         $difference = 0;
        //         $fecha_inicio = $alert->fecha_inicio;
        //     }
            
        //     if ($alert->pop_id == null || $alert->pop_id != $pop_id) {
        //         $pop_id = $alert->pop_id;
        //         $alert_id = $alert->id;
        //         $i++;
        //         $fecha_inicio = $alert->fecha_inicio;
        //         $difference = 0;
        //     } elseif ($pop_id == $alert->pop_id) {

        //         $difference_date = strtotime($fecha_inicio) - strtotime($alert->fecha_inicio) ;
        //         if ($difference + $difference_date <= 600)  { // El mismo Pop y la diferencia es de menos de 10 min
        //             $alert_id = $alert_id;
        //             $difference = $difference + $difference_date;
        //             $i++;
        //         } else {
        //             $alert_id = $alert->id;
        //             $pop_id = $alert->pop_id;
        //             $i++;
        //         }
        //     }

        //     $data = [
        //         'id' => $alert->id,
        //         'pop_id' => $alert->pop_id,
        //         'nem' => $alert->nem,
        //         'ticket' => $alert->ticket, 
        //         'category_id' => $alert->category_id,
        //         'affected_equipment' => $alert->affected_equipment,
        //         'alarm_type_id' => $alert->alarm_type_id,
        //         'parameter' => $alert->parameter,
        //         'state' => $alert->state,
        //         'detail' => $alert->detail,
        //         'operator' => $alert->operator,
        //         'dependences' => $alert->dependences,
        //         'alert_score' => $alert->alert_score,
        //         'fecha_inicio' => $alert->fecha_inicio,
        //         'fecha_termino' => $alert->fecha_termino,
        //         'difference' => $difference_date,
        //         'alert_id' => $alert_id
        //     ];
        //     Alert::create($data);
        // }
    }
}
