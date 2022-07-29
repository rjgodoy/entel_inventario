<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TechnologyCollection;
use App\Models\Technology;
use App\Models\User;
use Illuminate\Http\Request;

class TechnologyController extends Controller
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
     * @param  \App\Models\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function show(Technology $technology)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Technology $technology)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function destroy(Technology $technology)
    {
        //
    }

    /**
     * Display a listing of the resource for iOS.
     *
     * @return \Illuminate\Http\Response
     */
    public function apiTechnologies(Request $request)
    {
        $user = User::where('api_token', $request->api_token)->get();
        if ($user) {
            $technologies = Technology::
            select(
                "id",
                "site_id",
                "nem_tech",
                "ran_device_name",
                "technology_type_id",
                "frequency",
                "state_id"
            )
            ->with(
                'state', 
                'technology_type'
            )->get();
            
            return new TechnologyCollection($technologies);
        }
        return 'false';
    }
}
