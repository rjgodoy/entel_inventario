<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\UserRequest;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\UserRequestAccepted;
use App\Mail\UserRequestRejected;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function userRequests(Request $request)
    {
        $requests = UserRequest::all();

        return response()->json(
            [
                'status' => 'success',
                'requests' => $requests->toArray()
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

    /**
     * Get tabs for admin module.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function newUserAccepted(Request $request)
    {   
        // Busca algun nombre similar para asignar el sexo al nuevo usuario
        $userSex = User::where('name', $request->user['name'])->first();
        $sex = $userSex ? $userSex->sexo : null;

        // Crea al nuevo usuario
        $user = User::updateOrCreate([
            'email' => $request->user['email'],
            'username' => $request->user['username']
        ],[
            'name' => $request->user['name'],
            'apellido' => $request->user['apellido'],
            'password' => $request->user['password'],
            'api_token' => Hash::make(Str::random(10)),
            'estado' => 1,
            'sexo' => $sex
        ]);

        // Asigna Rol
        $user->roles()->attach(5);

        if ($user) {
            $userRequest = UserRequest::find($request->user['id']);
            $userRequest->update([
                'done_by' => $request->admin_id
            ]);
            $userRequest->delete();
        }

        Mail::to($request->user['email'])->send(new UserRequestAccepted());

        return response()->json([
            'status' => 200,
            'message' => 'Se ha otorgado el acceso al nuevo usuario.'
        ]);
    }

    /**
     * Get tabs for admin module.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function newUserRejected(Request $request)
    {   
        $userRequest = UserRequest::find($request->user['id']);
        $userRequest->update([
            'rejected' => 1,
            'done_by' => $request->admin_id
        ]);
        $userRequest->delete();

        Mail::to($request->user['email'])->send(new UserRequestRejected());

        return response()->json([
            'status' => 200,
            'message' => 'Se ha rechazado el acceso al nuevo usuario.'
        ]);
    }
}
