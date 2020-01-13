<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Pop as PopResource;
use App\Pop;
use App\Site;

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

                // Classificación
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')

                // Tipo Atención
                ->leftJoin('attentions', function ($join) {
                    $join->on('pops.id', '=', 'attentions.pop_id')
                    ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
                })
                // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

                ->select(
                    'pops.id as pop_id',
                    'pops.nombre',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.*',
                    'zonas.*',
                    'crms.*',
                    'classifications.classification_type_id',
                    'classification_types.classification_type',
                    'attentions.attention_type_id'
                    // 'attention_types.attention_type as attention_type'
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
    public function popsCrm()
    {
        $crm_id = $_GET["crm_id"];
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
                ->join('crms', function($join) use ($crm_id) {
                    $join->on('zonas.crm_id', '=', 'crms.id')
                    ->where('crms.id', $crm_id);
                })
                // Classificación
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')

                // Tipo Atención
                ->leftJoin('attentions', function ($join) {
                    $join->on('pops.id', '=', 'attentions.pop_id')
                    ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
                })
                // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

                ->select(
                    'pops.id as pop_id',
                    'pops.nombre',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.*',
                    'zonas.*',
                    'crms.*',
                    'classifications.classification_type_id',
                    'classification_types.classification_type',
                    'attentions.attention_type_id',
                    // 'attention_types.attention_type as attention_type',
                    'pops.alba_project'
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
    public function popsZona()
    {
        $zona_id = $_GET["zona_id"];
        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
                ->join('zonas', function($join) use ($zona_id) {
                    $join->on('comunas.zona_id', '=', 'zonas.id')
                    ->where('zonas.id', $zona_id);
                })
                ->join('crms', 'zonas.crm_id', '=', 'crms.id')
                // Classificación
                ->leftJoin('classifications', function ($join) {
                    $join->on('pops.id', '=', 'classifications.pop_id')
                    ->whereRaw('classifications.created_at = (SELECT MAX(classifications.created_at) FROM classifications WHERE classifications.pop_id = pops.id)');
                })->leftJoin('classification_types', 'classifications.classification_type_id', '=', 'classification_types.id')

                // Tipo Atención
                ->leftJoin('attentions', function ($join) {
                    $join->on('pops.id', '=', 'attentions.pop_id')
                    ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
                })
                // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

                ->select(
                    'pops.id as pop_id',
                    'pops.nombre',
                    'pops.nem_movil',
                    'pops.nem_fijo',
                    'pops.direccion',
                    'pops.latitude',
                    'pops.longitude',
                    'pops.cod_planificacion',
                    'comunas.*',
                    'zonas.*',
                    'crms.*',
                    'classifications.classification_type_id',
                    'classification_types.classification_type',
                    'attentions.attention_type_id',
                    // 'attention_types.attention_type as attention_type'
                    'pops.alba_project'
                )
                ->orderBy('pops.id')
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
    public function show($pop_id)
    {
        $pop = Pop::with('comuna', 'classification_type')->where('id', $pop_id)->first();

        return new PopResource($pop);
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
        return $request;
        $pop = Pop::find($pop_id);
        // $pop->update([
        //     $request-> => $
        // ])
        // if ($request->pe_3g != null) {
            $pop->{$request} = $request;
            $pop->save();
        
        // if ($request->mpls != null) {
        //     $pop->mpls = $request->mpls;
        //     $pop->save();
        // }
        // if ($request->olt != null) {
        //     $pop->olt = $request->olt;
        //     $pop->save();
        // }
        // if ($request->olt_3play != null) {
        //     $pop->olt_3play = $request->olt_3play;
        //     $pop->save();
        // }
        // if ($request->red_minima_n1 != null) {
        //     $pop->red_minima_n1 = $request->red_minima_n1;
        //     $pop->save();
        // }
        // if ($request->red_minima_n2 != null) {
        //     $pop->red_minima_n2 = $request->red_minima_n2;
        //     $pop->save();
        // }
        // if ($request->core != null) {
        //     $pop->core = $request->core;
        //     $pop->save();
        // }
        // if ($request->vip != null) {
        //     $pop->vip = $request->vip;
        //     $pop->save();
        // }
        // if ($request->localidad_obligatoria != null) {
        //     $pop->localidad_obligatoria = $request->localidad_obligatoria;
        //     $pop->save();
        // }
        // if ($request->ranco != null) {
        //     $pop->ranco = $request->ranco;
        //     $pop->save();
        // }
        // if ($request->bafi != null) {
        //     $pop->bafi = $request->bafi;
        //     $pop->save();
        // }
        // if ($request->offgrid != null) {
        //     $pop->offgrid = $request->offgrid;
        //     $pop->save();
        // }
        // if ($request->solar != null) {
        //     $pop->solar = $request->solar;
        //     $pop->save();
        // }
        // if ($request->eolica != null) {
        //     $pop->eolica = $request->eolica;
        //     $pop->save();
        // }

        // ESCRIBIR UN LOG DEL CAMBIO

        return $request;
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
    public function searchPops(Request $request)
    {
        $text = $request->text;
        $core = $request->core;

        $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
            ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
            ->join('crms', 'zonas.crm_id', '=', 'crms.id')                                
            ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
            ->where(function($query) use ($text) {
                $query->where('sites.nem_site', 'LIKE', "%$text%")
                    ->orWhere('sites.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            ->where('sites.state_type_id', 1)
            ->whereRaw('IF('.$core.' = 0, sites.classification_type_id IN (1,2,3,4,5), sites.classification_type_id IN (1))')
            ->select(
                'pops.id',
                'sites.id as site_id',
                'sites.nem_site',
                'sites.nombre as nombre_sitio',
                'sites.classification_type_id',
                'pops.nombre',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'comunas.nombre_comuna',
                'comunas.zona_id',
                'zonas.crm_id',
                'zonas.nombre_zona',
                'crms.nombre_crm',
                'classification_types.classification_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->get();
    
        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsCrm(Request $request)
    {
        $text = $request->text;
        $core = $request->core;
        $crm_id = $request->crm_id;

        $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
            ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
            ->join('crms', function($join) use ($crm_id) {
                $join->on('zonas.crm_id', '=', 'crms.id')
                ->where('crms.id', $crm_id);
            })
            ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
            ->where(function($query) use ($text) {
                $query->where('sites.nem_site', 'LIKE', "%$text%")
                    ->orWhere('sites.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            ->where('sites.state_type_id', 1)
            ->whereRaw('IF('.$core.' = 0, sites.classification_type_id IN (1,2,3,4,5), sites.classification_type_id IN (1))')
            ->select(
                'pops.id',
                'sites.id as site_id',
                'sites.nem_site',
                'sites.nombre as nombre_sitio',
                'sites.classification_type_id',
                'pops.nombre',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'comunas.nombre_comuna',
                'comunas.zona_id',
                'zonas.crm_id',
                'zonas.nombre_zona',
                'crms.nombre_crm',
                'classification_types.classification_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->get();

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsZona(Request $request)
    {
        $text = $request->text;
        $core = $request->core;
        $zona_id = $request->zona_id;

        $pops = Site::join('pops', 'sites.pop_id', '=', 'pops.id')
            ->join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', function($join) use ($zona_id) {
                $join->on('comunas.zona_id', '=', 'zonas.id')
                ->where('zonas.id', $zona_id);
            })
            ->join('crms', 'zonas.crm_id', '=', 'crms.id')
            ->leftJoin('classification_types', 'sites.classification_type_id', '=', 'classification_types.id')
            ->where(function($query) use ($text) {
                $query->where('sites.nem_site', 'LIKE', "%$text%")
                    ->orWhere('sites.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            ->where('sites.state_type_id', 1)
            ->whereRaw('IF('.$core.' = 0, sites.classification_type_id IN (1,2,3,4,5), sites.classification_type_id IN (1))')
            ->select(
                'pops.id',
                'sites.id as site_id',
                'sites.nem_site',
                'sites.nombre as nombre_sitio',
                'sites.classification_type_id',
                'pops.nombre',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'comunas.nombre_comuna',
                'comunas.zona_id',
                'zonas.crm_id',
                'zonas.nombre_zona',
                'crms.nombre_crm',
                'classification_types.classification_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->get();

        return $pops;
    }

     /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filterPops(Request $request)
    {
        $text = $request->text;

        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
            ->join('crms', 'zonas.crm_id', '=', 'crms.id')
    
            // Classificación
            ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

            // Tipo Atención
            ->leftJoin('attentions', function ($join) {
                $join->on('pops.id', '=', 'attentions.pop_id')
                ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
            })
            // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

            ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })

            ->select(
                'pops.id as pop_id',
                'pops.nombre',
                'pops.nem_movil',
                'pops.nem_fijo',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'pops.cod_planificacion',
                'comunas.*',
                'zonas.*',
                'crms.*',
                'pops.classification_type_id',
                'classification_types.classification_type',
                'attentions.attention_type_id',
                // 'attention_types.attention_type as attention_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->paginate(10);

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filterPopsCrm()
    {
        $text = $_GET["text"];
        $crm_id = $_GET["crm_id"];

        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', 'comunas.zona_id', '=', 'zonas.id')
            ->join('crms', function($join) use ($crm_id) {
                $join->on('zonas.crm_id', '=', 'crms.id')
                ->where('crms.id', $crm_id);
            })
            
            // Classificación
            ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

            // Tipo Atención
            ->leftJoin('attentions', function ($join) {
                $join->on('pops.id', '=', 'attentions.pop_id')
                ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
            })
            // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

            ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })

            ->select(
                'pops.id as pop_id',
                'pops.nombre',
                'pops.nem_movil',
                'pops.nem_fijo',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'pops.cod_planificacion',
                'comunas.*',
                'zonas.*',
                'crms.*',
                'pops.classification_type_id',
                'classification_types.classification_type',
                'attentions.attention_type_id',
                // 'attention_types.attention_type as attention_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->paginate(10);

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filterPopsZona()
    {
        $text = $_GET["text"];
        $zona_id = $_GET["zona_id"];

        $pops = Pop::join('comunas', 'pops.comuna_id', '=', 'comunas.id')
            ->join('zonas', function($join) use ($zona_id) {
                $join->on('comunas.zona_id', '=', 'zonas.id')
                ->where('zonas.id', $zona_id);
            })
            ->join('crms', 'zonas.crm_id', '=', 'crms.id')
            // Classificación
            ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

            // Tipo Atención
            ->leftJoin('attentions', function ($join) {
                $join->on('pops.id', '=', 'attentions.pop_id')
                ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
            })
            // ->leftJoin('attention_types', 'attentions.attention_type_id', '=', 'attention_types.id')

            ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })

            ->select(
                'pops.id as pop_id',
                'pops.nombre',
                'pops.nem_movil',
                'pops.nem_fijo',
                'pops.direccion',
                'pops.latitude',
                'pops.longitude',
                'pops.cod_planificacion',
                'comunas.*',
                'zonas.*',
                'crms.*',
                'pops.classification_type_id',
                'classification_types.classification_type',
                'attentions.attention_type_id',
                // 'attention_types.attention_type as attention_type',
                'pops.alba_project'
            )
            ->orderBy('pops.id')
            ->paginate(10);

        return $pops;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPopsEdicion($text, $core)
    {
        $pops = Pop::with('comuna.zona.crm', 'comuna.region')
            ->where(function($query) use ($text) {
                $query->where('pops.nem_fijo', 'LIKE', "%$text%")
                    ->orWhere('pops.nem_movil', 'LIKE', "%$text%")
                    ->orWhere('pops.nombre', 'LIKE', "%$text%")
                    ->orWhere('pops.direccion', 'LIKE', "%$text%");
            })
            // Classificación
            ->leftJoin('classification_types', 'pops.classification_type_id', '=', 'classification_types.id')

            // Tipo Atención
            ->leftJoin('attentions', function ($join) {
                $join->on('pops.id', '=', 'attentions.pop_id')
                ->whereRaw('attentions.created_at = (SELECT MAX(attentions.created_at) FROM attentions WHERE attentions.pop_id = pops.id)');
            })

            ->orderBy('pops.id')
            ->get();
    
        return $pops;
    }

}
