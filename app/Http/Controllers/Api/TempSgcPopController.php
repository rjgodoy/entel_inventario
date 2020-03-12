<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\TempSgcPop as TempSgcPopResource;
use App\Models\TempSgcPop;
use App\Models\SgcRequest;

class TempSgcPopController extends Controller
{
    /**
     * Display a listing of the POPs to add.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Display a listing of the POPs to add.
     *
     * @return \Illuminate\Http\Response
     */
    public function toAdd()
    {
        $pops = TempSgcPop::join('entel_pops.comunas', 'temp_sgc_pops.comuna_id', '=', 'comunas.id')
                ->leftJoin('entel_pops.pops', function($join) {
                    $join->on('pops.nem_movil', '=', 'temp_sgc_pops.nem_movil')
                        ->orOn('pops.nem_fijo', '=', 'temp_sgc_pops.nem_movil');
                })
                ->whereRaw('pops.id IS NULL')
                ->whereRaw('temp_sgc_pops.nuevassolicitud_id IS NOT NULL')
                ->select(
                    'temp_sgc_pops.id',
                    'temp_sgc_pops.nombre as nombre_pop',
                    'temp_sgc_pops.nem_movil',
                    'temp_sgc_pops.nem_fijo',
                    'temp_sgc_pops.direccion',
                    'comunas.nombre_comuna'
                )
                ->groupBy('temp_sgc_pops.nem_movil')
                ->orderBy('temp_sgc_pops.id')
                ->paginate(10);

        return new TempSgcPopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function existing()
    {
        $pops = TempSgcPop::join('entel_pops.comunas', 'temp_sgc_pops.comuna_id', '=', 'comunas.id')
                ->join('entel_pops.pops', function($join) {
                    $join->on('pops.nem_movil', '=', 'temp_sgc_pops.nem_movil')
                        ->orOn('pops.nem_fijo', '=', 'temp_sgc_pops.nem_movil');
                })
                ->whereRaw('temp_sgc_pops.nuevassolicitud_id IS NOT NULL')
                ->select(
                    'temp_sgc_pops.*',
                    // 'temp_sgc_pops.nombre as nombre_pop',
                    // 'temp_sgc_pops.nem_movil',
                    // 'temp_sgc_pops.nem_fijo',
                    // 'temp_sgc_pops.direccion',
                    'pops.id as pop_id',
                    'comunas.nombre_comuna'
                )
                ->groupBy('pops.id')
                ->orderBy('pops.id')
                ->paginate(10);

        return new TempSgcPopResource($pops);
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $pop_id)
    {
        $pops = TempSgcPop::join('entel_pops.pops', function($join) {
                    $join->on('pops.nem_movil', '=', 'temp_sgc_pops.nem_movil')
                        ->orOn('pops.nem_fijo', '=', 'temp_sgc_pops.nem_movil');
                })
                ->where('pops.id', $pop_id)
                ->select(
                    'temp_sgc_pops.id',
                    'temp_sgc_pops.nuevassolicitud_id',
                    'temp_sgc_pops.nem_movil',
                    'pops.id as pop_id'
                )
                ->get();

        foreach ($pops as $pop) {
            $sgcRequests = SgcRequest::find($pop->nuevassolicitud_id);

            if($sgcRequests->id) {
                $sgcRequests->pop_id = $pop_id;
                $sgcRequests->save();

                // $sgcRequests->update([
                //     'pop_id' => $pop_id
                // ]);

                self::destroy($pop->id);
            } else {

            }
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($pop_id)
    {
        TempSgcPop::destroy($pop_id);
    }
}
