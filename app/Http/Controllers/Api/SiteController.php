<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Site as SiteResource;
use App\Models\AttentionPriorityType;
use App\Models\ClassificationType;
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
                COUNT(*) as q_new,
                (SELECT COUNT(*) FROM entel_pops.sites WHERE YEAR(deleted_at) = @y AND MONTH(deleted_at) = @m) as q_deleted
                FROM entel_pops.sites 
                GROUP BY year, month
                ORDER BY year desc, month desc
                limit 6
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
