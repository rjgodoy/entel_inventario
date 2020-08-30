<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Crm as CrmResource;
use App\Http\Resources\CrmCollection;
use App\Models\Crm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CrmController extends Controller
{
    protected $seconds = 2592000;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Cache::has('crms')) {
            $crms = Cache::get('crms');
        } else {
            $crms = Cache::rememberForever('crms', function () {
                $crms = Crm::with('zonas.comunas', 'zonas.responsable')->get();
                return $crms;
            });
        }
        return new CrmCollection($crms);
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
