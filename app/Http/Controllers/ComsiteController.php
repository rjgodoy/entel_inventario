<?php

namespace App\Http\Controllers;

use App\Comsite;
use Illuminate\Http\Request;

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
    public function index(Request $request)
    {
        // $comsite_data = Comsite::paginate(20);
        $last_updated = Comsite::orderBy('updated_at', 'desc')->first()->updated_at;

        return view('comsite', compact(
            // 'comsite_data',
            'last_updated'
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, Comsite $comsite)
    {
        return self::update($request, $comsite);
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
     * @param  \App\Comsite  $comsite
     * @return \Illuminate\Http\Response
     */
    public function show(Comsite $comsite)
    {
        // $directory_path = '../resources/views';
        $directory_path = 'ftp://developer:Entel@123RepoDev@172.16.100.110/var/www/html';

        // Files
        $files = [];
        $filesInFolder = \File::files($directory_path, true);
        // $filesInFolder = \File::allFiles($directory_path, true);

        foreach($filesInFolder as $path)
        {
            $files[] = pathinfo($path);
        }

        // Directories
        $folders = [];
        $Folders = \File::directories($directory_path, true);
        // $Folders = \File::allDirectories($directory_path);

        foreach($Folders as $folder_path)
        {
            $folders[] = pathinfo($folder_path);
        }

        // dd($folders, $files);

        // $folders = json_encode($folders[0]);
        // $files = json_encode($files[0]);

        // dd($folders, $files);

        return view('repository', compact('folders', 'files'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comsite  $comsite
     * @return \Illuminate\Http\Response
     */
    public function edit(Comsite $comsite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comsite  $comsite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comsite $comsite)
    {
        $comsite_data = self::comsiteCall();

        foreach ($comsite_data as $data) {

            // Verifica si el Pop existe en Inventario. Si no existe, lo deja NULL
            if (Pop::where('nem_movil', $data->val02_CodSitio)->count()) {
                $pop_id = Pop::where('nem_movil', $data->val02_CodSitio)->first()->id;
            } elseif (Pop::where('nem_fijo', $data->val02_CodSitio)->count()){
                $pop_id = Pop::where('nem_fijo', $data->val02_CodSitio)->first()->id;
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

        return redirect('/comsite')->with('message', 'Datos de Comsite han sido actualizados exitosamente!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comsite  $comsite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comsite $comsite)
    {
        //
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
