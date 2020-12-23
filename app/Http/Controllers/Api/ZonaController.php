<?php

namespace App\Http\Controllers\Api;

use App\Models\Zona;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use App\Http\Resources\ZonaCollection;
use App\Http\Resources\Zona as ZonaResource;

class ZonaController extends Controller
{
    protected $seconds = 2592000;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Cache::has('zonas')) {
            $zonas = Cache::get('zonas');
        } else {
            $zonas = Cache::rememberForever('zonas', function () {
                $zonas = Zona::with('comunas', 'responsable')->get();
                return $zonas;
            });
        }
        return new ZonaCollection($zonas);
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
            $zonas = Cache::remember('zonas_crm'.$crm_id, $this->seconds, function () use ($crm_id) {
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
