<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\Eco as EcoResource;
use App\ProtectedZone;
use App\Pop;

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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $directory_path = '../resources/views';
        $directory_path = 'ftp://developer:Entel@123RepoDev@172.16.100.110/var/www/html/storage';

        // $directory_path = 'ftp://developer:Entel@123RepoDev@172.16.100.110/var/www/html/storage';

        // Files
        $files = [];
        $filesInFolder = \File::files($directory_path, true);
        // $filesInFolder = \File::allFiles($directory_path, true);

        foreach($filesInFolder as $path)
        {
            $files[] = pathinfo($path);
        }

        // Directories
        $folders = [];
        $Folders = \File::directories($directory_path, true);
        // $Folders = \File::allDirectories($directory_path);

        foreach($Folders as $folder_path)
        {
            $folders[] = pathinfo($folder_path);
        }

        // dd($folders, $files);

        // $folders = json_encode($folders[0]);
        // $files = json_encode($files[0]);

        // dd($folders, $files);

        return $folders;
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
