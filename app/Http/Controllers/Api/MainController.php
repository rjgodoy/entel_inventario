<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;

use App\Http\Resources\Main as MainResource;
use App\Models\Menu;
use App\Models\User;
use App\Models\AdminTab;

class MainController extends Controller
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function menu(Request $request) {

        // $user_role = User::find($request->user_id)->roles()->first()->get();
        // $id = $user_role->id;

        // if (User::find('id', $request->user->id)->roles()->first()->id == 1) {
            $menus = Menu::where('active', 1)->orderBy('order', 'asc')->get();
        // } else {
            // $menus = Menu::where('active', 1)->whereRaw('id NOT IN (12)')->orderBy('order', 'asc')->get();
        // }

        return new MainResource($menus);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function adminTabs() {
        $tabs = AdminTab::all();
        return new MainResource($tabs);
    }
}
