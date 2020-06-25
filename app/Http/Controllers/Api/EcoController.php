<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Eco as EcoResource;
use App\Http\Resources\FileCollection;
use App\Models\File;
use App\Models\Folder;
use App\Models\Log;
use App\Models\LogType;
use App\Models\Pop;
use App\Models\ProtectedZone;
use App\Models\Site;
use App\Models\TemporaryStorage;
use Illuminate\Http\File as FileResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function zones()
    {
        $protectedZones = ProtectedZone::with('pops')->get();
        return new EcoResource($protectedZones);
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
    public function newStorage(Request $request)
    {
        $new = TemporaryStorage::create([
            'pop_id' => $request->pop_id,
            'zona_id' => $request->zona_id
        ]);

        Log::create([
            'pop_id' => $request->pop_id,
            'user_id' => $request->user_id,
            'log_type_id' => LogType::where('type', 'eco')->first()->id,
            'description' => 'Se ha agregado este PoP como Zona de Acopio Temporal'
        ]);

        return $new;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        
        if ($request->pop_id) {
            $sites = Site::where('pop_id', $request->pop_id)->get();

            $folders = [];
            foreach ($sites as $site) {
                $folder = Folder::where('site_id', $site->id)->where('parent_id', null)->where('name', 'Informes')->first();
                $folder && array_push($folders, $folder);
            }
            return $folders;

        } else {
            $upload_path = '../storage/app/public/General/Gestión Ambiental';
            $file_name = $request->file->getClientOriginalName();
            $request->file->move($upload_path, $file_name);
        }


        // 1- FIND POP ID
        // 2- SEARCH FOLDER NAME "Gestion Ambiental"
        
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
    public function storage(Request $request, $pop_id)
    {
        $zona_id = Pop::with('comuna.zona')->where('id', $pop_id)->first()->comuna->zona->id;
        
        $storages = TemporaryStorage::with('pop')->where('zona_id', $zona_id)->get();
        
        return new EcoResource($storages);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function rcas(Request $request)
    {
        // $rcas = Folder::with('subfolders.files', 'site', 'files')->where('name', 'Gestión Ambiental')->get();

        $rcas = File::with('site.pop', 'pop.sites')->whereHas('folder', function($q) {
            $q->where('name', 'Gestión Ambiental')
            ->orWhere('name', 'LIKE', '%RCA%');
        })
        ->where('filename', 'LIKE', '%RCA%')
        ->get();

        return new FileCollection($rcas);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ecoDocs(Request $request)
    {
        // $rcas = Folder::with('subfolders.files', 'site', 'files')->where('name', 'Gestión Ambiental')->get();

        $docs = File::with('site.pop')->whereHas('folder', function($q) {
            $q->where('name', 'Gestión Ambiental');
        })
        ->where('filename', 'NOT LIKE', '%RCA%')
        ->get();

        return new FileCollection($docs);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function rcasPop(Request $request, $pop_id)
    {
        $rcas = File::where('pop_id', $pop_id)
        ->where('filename', 'LIKE', '%RCA%')
        ->get();

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
