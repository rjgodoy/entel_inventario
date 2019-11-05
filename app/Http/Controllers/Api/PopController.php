<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Pop as PopResource;
use App\Pop;

class PopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })
                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                ->select(
                    'pops.id',
                    'pops.nombre as nombre_pop',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.nombre as nombre_comuna',
                    'zonas.nombre as nombre_zona',
                    'zonas.cod_zona',
                    'crms.nombre as nombre_crm',
                    'crms.subgerente_crm',
                    'crms.sigla',
                    'classifications.classification_type_id',
                    'classification_types.type'
                )
                ->orderBy('pops.id')
                ->paginate(10);

        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popsCrm($crm_id)
    {
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', function($join) use ($crm_id) {
                    $join->on('zonas.crm_id', '=', 'crms.id')
                    ->where('crms.id', $crm_id);
                })->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })
                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                ->select(
                    'pops.id',
                    'pops.nombre as nombre_pop',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.nombre as nombre_comuna',
                    'zonas.nombre as nombre_zona',
                    'zonas.cod_zona',
                    'crms.nombre as nombre_crm',
                    'crms.subgerente_crm',
                    'crms.sigla',
                    'classifications.classification_type_id',
                    'classification_types.type'
                )->orderBy('pops.id')
                ->paginate(10);

        return new PopResource($pops);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function popsZona($zona_id)
    {
        $pops = Pop::with('comuna.zona.crm')
                ->paginate(10);

        return new PopResource($pops);
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

     /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPops($text)
    {
        if ($text != '') {
            $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                ->where(function($query) use ($text) {
                    $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                        ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                        ->orWhere('pops.nombre', 'LIKE', "%$text%");
                })->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })
                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                ->select(
                    'pops.id',
                    'pops.nombre as nombre_pop',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.nombre as nombre_comuna',
                    'zonas.nombre as nombre_zona',
                    'zonas.cod_zona',
                    'crms.nombre as nombre_crm',
                    'crms.subgerente_crm',
                    'crms.sigla',
                    'classifications.classification_type_id',
                    'classification_types.type'
                )->orderBy('pops.id')
                ->paginate(10);
        }

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsCrm($text, $crm_id)
    {
        if ($text != '') {
            $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', function($join) use ($crm_id) {
                    $join->on('zonas.crm_id', '=', 'crms.id')
                    ->where('crms.id', $crm_id);
                })
                ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%");
            })->leftJoin('classifications', function ($join) {
                $join->on('pops.id', '=', 'classifications.pop_id')
                ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
            })
            ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
            ->select(
                'pops.id',
                'pops.nombre as nombre_pop',
                'pops.nem_movil',
                'pops.nem_fijo',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'pops.cod_planificacion',
                'comunas.nombre as nombre_comuna',
                'zonas.nombre as nombre_zona',
                'zonas.cod_zona',
                'crms.nombre as nombre_crm',
                'crms.subgerente_crm',
                'crms.sigla',
                'classifications.classification_type_id',
                'classification_types.type'
            )->orderBy('pops.id')
            ->paginate(10);
        }

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsZona($text)
    {
        if ($text != '') {
            $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                ->where(function($query) use ($text) {
                    $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                        ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                        ->orWhere('pops.nombre', 'LIKE', "%$text%");
                })->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })
                ->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')
                ->select(
                    'pops.id',
                    'pops.nombre as nombre_pop',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.nombre as nombre_comuna',
                    'zonas.nombre as nombre_zona',
                    'zonas.cod_zona',
                    'crms.nombre as nombre_crm',
                    'crms.subgerente_crm',
                    'crms.sigla',
                    'classifications.classification_type_id',
                    'classification_types.type'
                )->orderBy('pops.id')
                ->paginate(10);
        }

        return $pops;
    }
}
