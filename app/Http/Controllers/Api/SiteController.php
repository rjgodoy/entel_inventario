<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Site as SiteResource;
use App\Http\Resources\SiteCollection;
use App\Models\AttentionPriorityType;
use App\Models\ClassificationType;
use App\Models\Log;
use App\Models\LogType;
use App\Models\Site;
use DB;
use Illuminate\Http\Request;

class SiteController extends Controller
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
     * Display a listing of the resource for iOS.
     *
     * @return \Illuminate\Http\Response
     */
    public function allSitesiOSv2(Request $request)
    {

        $user = User::where('api_token', $request->api_token)->get();

        if ($user) {

            $sites = Site::with('state', 'technologies.state', 'technologies.technology_type', 'classification_type', 'attention_priority_type', 'attention_type')
            ->whereHas('technologies', function($q) { 
                $q->withoutTrashed();
            })
            ->limit(200)
            ->get();

            return new SiteCollection($sites);
        }

        return 'false';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function stats(Request $request)
    {
        $data = DB::select(DB::raw("
                SELECT      
                @y:=YEAR(created_at) as year, 
                @m:=MONTH(created_at) as month, 
                COUNT(distinct id) as q_new,
                (SELECT COUNT(distinct id) FROM entel_pops.sites WHERE YEAR(deleted_at) = @y AND MONTH(deleted_at) = @m) as q_deleted
                FROM entel_pops.sites 
                GROUP BY year, month
                ORDER BY year desc, month desc
                limit 4
            "));

        return new SiteResource($data);
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function siteParameters(Request $request)
    {
        $strClassName = '';
        $array = explode('_', $request->parameter);
        for ($i=0; $i < count($array) - 1; $i++) { 
            $word = ucwords($array[$i]);
            $strClassName = ucwords($strClassName.=$word);
        }
        $className = "\\App\\Models\\".$strClassName;
        $parameters = app($className)->get();
        return new SiteResource($parameters);
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
        // return $request->value;
        $site = Site::find($id);
        $site->update([
            $request->parameter => $request->value
        ]);

        $parameterTypeName = '';
        switch ($request->parameter) {
            case 'classification_type_id':
                $parameterTypeName = 'Categoría';
                break;
            case 'attention_priority_type_id':
                $parameterTypeName = 'Prioridad de atención';
                break;
            default:
                break;
        }

        // Busca el dato que se actualizó par incorporarlo en el Log
        $strClassName = '';
        $parameterType = '';
        $array = explode('_', $request->parameter);
        for ($i=0; $i < count($array) - 1; $i++) { 
            $parameterType = $parameterType == '' ? $array[$i] : $parameterType.'_'.$array[$i];
            $word = ucwords($array[$i]);
            $strClassName = ucwords($strClassName.=$word);
        }
        $className = "\\App\\Models\\".$strClassName;
        $parameter = app($className)->find($request->value);
        // return $parameter->$parameterType;

        Log::create([
            'pop_id' => $site->pop_id,
            'user_id' => $request->user_id,
            'log_type_id' => LogType::where('type', 'pop-update')->first()->id,
            'description' => 'Se ha actualizado el parámetro "'. $parameterTypeName.'" a "'.$parameter->$parameterType.'"'
        ]);

        return $site;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function classificationTypes()
    {
        return ClassificationType::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function attentionPriorityTypes()
    {
        return AttentionPriorityType::all();
    }
}
