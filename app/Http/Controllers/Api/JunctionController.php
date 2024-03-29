<?php

namespace App\Http\Controllers\Api;

use App\Exports\JunctionsExport;
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
use App\Models\User;
use DB;
use Illuminate\Http\Request;

class JunctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {      
        $brand_id = $request->brand_id;
        $core = $request->core;
        $critic = $request->critic;
        $crm_id = $request->crm_id;
        $group_type_id = $request->group_type_id;
        $page = $request->page;
        $sub_zone_id = $request->sub_zone_id;
        $text = $request->text;
        $vip = $request->vip;
        $zona_id = $request->zona_id;

        $junctions = Junction::with(
            'pop.sites',
            'pop.zona',
            'electric_company',
            'junction_type',
            'junction_connection',
            'junction_measurements',
            'junction_protections',
            'latest_measurement',
            'latest_protection',
            'solar_panels' 
        )
        ->where(function($q) use($text) {
            $q->whereHas('pop.sites', function($p) use($text) {
                $p->where('nem_site', 'LIKE', "%$text%")
                ->orWhere('nombre', 'LIKE', "%$text%");
            });
        })
        ->orWhere(function($q) use($text) {
            $q->whereHas('pop', function($p) use($text) {
                $p->where('nombre', 'LIKE', "%$text%");
            });
        })
        ->orWhere('junction_number', 'LIKE', "%$text%")
        ->orWhere('client_number', 'LIKE', "%$text%")
        ->orWhere('rate_type', 'LIKE', "%$text%")
        
        ->orWhere(function($q) use($text) {
            $q->whereHas('electric_company', function($p) use($text) {
                $p->where('name', 'LIKE', "%$text%");
            });
        })
        ->paginate(20);

        return new JunctionCollection($junctions);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function junctionData($core)
    {
        // if (Cache::has('junctionsData_core'.$core)) {
        //     $junctionsQuantity = Cache::get('junctionsData_core'.$core);
        // } else {
            // $junctionsQuantity = Cache::remember('junctionsData_core'.$core, $this->seconds, function () use ($core) {

                $condition = $core ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $junctionsQuantity = DB::select(DB::raw("
                    SELECT
                    @crm_id:=id AS id,
                    @crm:=nombre_crm AS nombre,

                    @q_info:=(SELECT count(DISTINCT J.pop_id) 
                            FROM entel_g_redes_inventario.junctions J 
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_info,

                    @q_junctions:=(SELECT count(DISTINCT J.id) 
                            FROM entel_g_redes_inventario.junctions J 
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id 
                            INNER JOIN entel_pops.zonas Z ON C.zona_id = Z.id AND Z.crm_id = @crm_id
                            $condition
                            ) AS q_junctions

                    FROM entel_pops.crms
                "));
        //         return $junctionsQuantity;
        //     });
        // }
        return new JunctionResource($junctionsQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function junctionDataCrm($crm_id, $core)
    {
        // if (Cache::has('junctionsData_crm'.$crm_id.'_core'.$core)) {
        //     $junctionsQuantity = Cache::get('junctionsData_crm'.$crm_id.'_core'.$core);
        // } else {
        //     $junctionsQuantity = Cache::remember('junctionsData_crm'.$crm_id.'_core'.$core, $this->seconds, function () use ($crm_id, $core) {

                $condition = $core ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $junctionsQuantity = DB::select(DB::raw("
                    SELECT
                    @zona_id:=id AS id,
                    @zona:=nombre_zona AS nombre,

                    @q_info:=(SELECT count(DISTINCT J.pop_id) 
                            FROM entel_g_redes_inventario.junctions J 
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_info,

                    @q_junctions:=(SELECT count(DISTINCT J.id) 
                            FROM entel_g_redes_inventario.junctions J 
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id
                            INNER JOIN entel_pops.comunas C ON P.comuna_id = C.id AND C.zona_id = @zona_id
                            $condition
                            ) AS q_junctions

                    FROM entel_pops.zonas
                    WHERE crm_id = $crm_id
                "));
        //         return $junctionsQuantity;
        //     });
        // }
        return new JunctionResource($junctionsQuantity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function junctionDataZona($zona_id, $core)
    {
        // if (Cache::has('junctionsData_zona'.$zona_id.'_core'.$core)) {
        //     $junctionsQuantity = Cache::get('junctionsData_zona'.$zona_id.'_core'.$core);
        // } else {
        //     $junctionsQuantity = Cache::remember('junctionsData_zona'.$zona_id.'_core'.$core, $this->seconds, function () use ($zona_id, $core) {

                $condition = $core ? 'INNER JOIN entel_pops.sites S ON P.id = S.pop_id AND S.classification_type_id IN (1)' : '';
                $junctionsQuantity = DB::select(DB::raw("
                    SELECT
                    @comuna_id:=id AS id,
                    @comuna:=nombre_comuna AS nombre,

                    @q_info:=(SELECT count(DISTINCT J.pop_id) 
                            FROM entel_g_redes_inventario.junctions J 
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_info,

                    @q_junctions:=(SELECT count(DISTINCT J.id) 
                            FROM entel_g_redes_inventario.junctions J
                            INNER JOIN entel_pops.pops P ON J.pop_id = P.id 
                            $condition
                            WHERE P.comuna_id = @comuna_id
                            ) AS q_junctions

                    FROM entel_pops.comunas
                    WHERE zona_id = $zona_id
                "));
        //         return $junctionsQuantity;
        //     });
        // }
        return new JunctionResource($junctionsQuantity);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->is_only_room) {
            Junction::create([
                'pop_id' => $request->pop_id,
                'electric_company_id' => $request->electric_company_id,
                'room_id' => $request->room_id
            ]);
        } else {
            Junction::create([
                'pop_id' => $request->pop_id,
                'electric_company_id' => $request->electric_company_id,
                'client_number' => $request->client_number,
                'junction_number' => $request->junction_number,
                'rate_type' => $request->rate_type,
                'junction_type_id' => $request->junction_type_id,
                'junction_connection_id' => $request->junction_connection_id
            ]);
        }

        return 'junction created';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $junctions = Junction::with('electric_company', 'junction_type', 'junction_connection', 'latest_measurement', 'latest_protection', 'solar_panels', 'pop.rooms')
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
        $junctions = Junction::with('electric_company', 'junction_type', 'junction_connection', 'latest_measurement', 'latest_protection', 'solar_panels', 'pop.rooms')
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
        if(!$request->isSimpleEdit) {

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
        } else {
            $junction = Junction::find($id);
            $junction->update([
                'junction_number' => $request->junction_number,
                'client_number' => $request->client_number,
                'junction_type_id' => $request->junction_type_id,
                'junction_connection_id' => $request->junction_connection_id,
                'rate_type' => $request->rate_type
            ]);
        }

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
        if ($request->is_only_room) {
            $junction->update([
                'client_number' => $request->client_number,
                'junction_number' => $request->junction_number,
                'junction_type_id' => $request->junction_type_id,
                'junction_connection_id' => $request->junction_connection_id,
                'use_factor' => $request->use_factor,
                'room_id' => $request->room_id
            ]);
        } else {
            $junction->update([
                'client_number' => $request->client_number,
                'junction_number' => $request->junction_number,
                'junction_type_id' => $request->junction_type_id,
                'junction_connection_id' => $request->junction_connection_id,
                'use_factor' => $request->use_factor,
                'room_id' => null
            ]);
        }
        


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
        $junction = Junction::find($id);
        $junction->delete();
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
        // Excel::import(new JunctionsImport, $request->file('file'));
        (new JunctionsImport)->import($request->file('file'));

        return 'success!';
    }

    /**
     * Download all data from Pops (Dashboard).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function export(Request $request)
    {
        $response = (new JunctionsExport($request))->download('empalmes.xlsx');
        ob_end_clean();
        return $response;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function apiJunctions(Request $request)
    {     
        $user = User::where('api_token', $request->api_token)->get();
        if ($user) {
            $junctions = Junction::
            select(
                "id",
                "pop_id",
                "client_number",
                "junction_number",
                "electric_company_id",
                "rate_type",
            )
            ->with(
                'electric_company:id,name,contact_number',
                "pop:id,nombre"
            )
            ->get();

            return new JunctionCollection($junctions);
        }
        return false;
    }
}
