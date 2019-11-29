<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Zona as ZonaResource;
use App\Zona;

class ZonaController extends Controller
{
    protected $minutes = 3600;

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
    public function zonasCrm($crm_id)
    {
        if (Cache::has('zonas_crm'.$crm_id)) {
            $zonas = Cache::get('zonas_crm'.$crm_id);
        } else {
            $zonas = Cache::remember('zonas_crm'.$crm_id, $this->minutes, function () use ($crm_id) {
                $zonas = Zona::with('comunas', 'responsable')->where('crm_id', $crm_id)->get();
                return $zonas;
            });
        }
        return new ZonaResource($zonas);
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
