<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Comsite as ComsiteResource;
use App\Http\Resources\ComsiteCollection;
use App\Comsite;
use App\Pop;

use Artisaninweb\SoapWrapper\SoapWrapper;
use App\Http\Requests\GetComsiteData;

class ComsiteController extends Controller
{

    /**
     * @var SoapWrapper
     */
    protected $soapWrapper;

    /**
     * SoapController constructor.
     *
     * @param SoapWrapper $soapWrapper
     */
    public function __construct(SoapWrapper $soapWrapper)
    {
        $this->soapWrapper = $soapWrapper;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comsites = Comsite::with('pop.comuna.zona.crm')->paginate(20);
        return new ComsiteResource($comsites);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comsite_data = self::comsiteCall();

        foreach ($comsite_data as $data) {

            // Verifica si el Pop existe en Inventario. Si no existe, lo deja NULL
            if ($pop_id = Pop::join('sites', 'pops.id', '=', 'sites.pop_id')->where('nem_site', $data->val02_CodSitio)->count()) {
                $pop_id = Pop::join('sites', 'pops.id', '=', 'sites.pop_id')->where('nem_site', $data->val02_CodSitio)->first()->pop_id;
            } else {
                $pop_id = null;
            }

            // Transforma las fechas en 
            $time_started = strtotime($data->val05_FechaInicio);
            $time_ended = strtotime($data->val06_FechaTermino);
            $started_at = date('Y-m-d',$time_started);
            $ended_at = date('Y-m-d',$time_ended);
            // dd($ended_at);

            if (Comsite::where('id', $data->val01_IdContrato)->count()) {
                $comsite_update = Comsite::where('id', $data->val01_IdContrato)->first();

                $comsite_update->update([
                    'pop_id' => $pop_id,
                    'cod_pop' => $data->val02_CodSitio,
                    'nombre_pop' => $data->val03_NombreSitio,
                    'operador' => $data->val04_Operador,
                    'started_at' => $started_at,
                    'ended_at' => $ended_at,
                    'propietario' => $data->val07_Propietario,
                    'celular_propietario' => $data->val08_CelularPropietario,
                    'fono_propietario' => $data->val09_TelefonoParticularPropietario,
                    'rol_propiedad' => $data->val10_RolPropiedad
                ]);  
            } else {
                $comsite = new Comsite();
                $comsite->addData(
                    $data->val01_IdContrato,
                    $pop_id,
                    $data->val02_CodSitio,
                    $data->val03_NombreSitio,
                    $data->val04_Operador,
                    $started_at,
                    $ended_at,
                    $data->val07_Propietario,
                    $data->val08_CelularPropietario,
                    $data->val09_TelefonoParticularPropietario,
                    $data->val10_RolPropiedad
                );
            }
        }        

        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comsites = Comsite::where('pop_id', $id)->get();
        return new ComsiteResource($comsites);
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
    public function search(Request $request)
    {
        $text = $request->text;

        $comsites = Comsite::where(function($query) use ($text) {
            $query->where('cod_pop', 'LIKE', "%$text%")
                ->orWhere('nombre_pop', 'LIKE', "%$text%")
                ->orWhere('operador', 'LIKE', "%$text%")
                ->orWhere('propietario', 'LIKE', "%$text%")
                ->orWhere('rol_propiedad', 'LIKE', "%$text%");
        })->paginate(20);

        return $comsites;
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function lastData()
    {
        $last_updated = Comsite::orderBy('updated_at', 'desc')->first()->updated_at;
        return $last_updated;
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function comsiteCall()
    {
        $this->soapWrapper->add('Comsite', function ($service) {
            $service
            ->wsdl('http://comsites.sigib.cl/AdmContratosWS/services/InfoContratoWS?wsdl')
            ->trace(true)
            ->classmap([
                GetComsiteData::class,
                // GetListInfoContratoReturn::class,
            ]);
        });

        // Without classmap
        $response = $this->soapWrapper->call('Comsite.getListInfoContrato');
        $comsite_data = $response->getListInfoContratoReturn;

        return $comsite_data;
    }

}
