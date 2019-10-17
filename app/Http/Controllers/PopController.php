<?php

namespace App\Http\Controllers;

use App\Pop;
use Illuminate\Http\Request;

class PopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pops');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function show(Pop $pop)
    {
        return view('pop');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function edit(Pop $pop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pop $pop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pop  $pop
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pop $pop)
    {
        //
    }
}
