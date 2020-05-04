<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

use App\Http\Resources\Eco as EcoResource;
use App\Models\ProtectedZone;
use App\Models\Pop;

class EcoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $protectedZonesPops = Pop::with('protected_zones', 'comuna.zona', 'sites')->has('protected_zones')->get();
        return new EcoResource($protectedZonesPops);
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        $upload_path = '../storage/app/Files';
        $file_name = $request->file->getClientOriginalName();
        // $generated_new_name = time() . '.' . $request->file->getClientOriginalExtension();
        $request->file->move($upload_path, $file_name);


        // $file = $request->file('file');
        // $filename = $file->getClientOriginalName();

        // if( Storage::disk('local')->putFileAs('Files', $file_name)) {

        //     return response()->json([
        //         'success' => true
        //     ], 200);
        // }
        // return response()->json([
        //     'success' => false
        // ], 500);



        // return $request;
        // $file = $request->file('file');
        // $ext = $file->getClientOriginalExtension();
        // $type = $this->getType($ext);

        // Storage::putFileAs(
        //     '/public/' . $this->getUserDir() . '/' . $type . '/', 
        //     $file, 
        //     time().$request['name'] . '.' . $ext);
        
        return response()->json(false);
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
    public function rcas(Request $request)
    {
        $files = Storage::disk('local')->files('Files');
        $rcas = [];
        foreach ($files as $file) {
            array_push($rcas, pathinfo($file));
        }
        return new EcoResource($rcas);
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
    public function storages(Request $request)
    {
        $storageZones = Pop::with('temporary_storage', 'comuna.zona', 'sites')->whereHas('temporary_storage')->get();
        return new EcoResource($storageZones);
    }

}
