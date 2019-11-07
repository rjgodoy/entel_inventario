<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Comsite as ComsiteResource;
use App\Comsite;

class ComsiteController extends Controller
{
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
    public function search()
    {
        $text = $_GET["text"];

        $comsites = Comsite::where(function($query) use ($text) {
            $query->where('cod_pop', 'LIKE', "%$text%")
                ->orWhere('nombre_pop', 'LIKE', "%$text%")
                ->orWhere('operador', 'LIKE', "%$text%")
                ->orWhere('propietario', 'LIKE', "%$text%")
                ->orWhere('rol_propiedad', 'LIKE', "%$text%");
        })->paginate(20);

        return $comsites;
    }
}
