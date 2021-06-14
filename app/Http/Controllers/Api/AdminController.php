<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\AdminTab;

use App\Models\UserRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserRequest as NewUserRequest;
use App\Http\Resources\Admin as AdminResource;

class AdminController extends Controller
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
     * Get tabs for admin module.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function tabs()
    {
        $tabs = AdminTab::where('active', 1)->get();
        return new AdminResource($tabs);
    }

    /**
     * Get tabs for admin module.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function registerRequest(Request $request)
    {
        if (User::where('username', $request->username)->first()) {
            return response()->json([
                'status' => 201,
                'message' => 'Usuario ya existe en nuestros registros.'
            ]);
        } elseif (UserRequest::where('username', $request->username)->first()) {
            return response()->json([
                'status' => 202,
                'message' => 'Usuario ya solicitó registro.'
            ]);
        }
        
        $user = UserRequest::create([
            'name' => $request->name,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);

        $admins = User::whereHas('roles', function($q) { $q->where('name', 'admin'); })->get();
        foreach ($admins as $admin) {
            Mail::to($admin->email)->send(new NewUserRequest($user));
        }

        return response()->json([
            'status' => 200,
            'message' => 'Se ha enviado la solicitud al administrador'
        ]);
    }


    
}
