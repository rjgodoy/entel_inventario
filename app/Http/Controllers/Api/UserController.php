<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $condition_role = $request->role_id == 0 ? "roles.id != 0" : "roles.id = $request->role_id";
        $users = User::with('roles', 'permissions')
            ->whereHas('roles', function($q) use($condition_role) {
                $q->whereRaw($condition_role);
            })
            ->where('estado', 1)->get();

        return response()->json(
            [
                'status' => 'success',
                'users' => $users->toArray()
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return 'hello';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        
        return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ],
            200
        );
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
        $user = User::find($id);
        $user->roles()->detach();
        $user->roles()->attach($request->role_id);

        return 'Done';
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
