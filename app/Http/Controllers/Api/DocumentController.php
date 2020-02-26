<?php

namespace App\Http\Controllers\Api;

use App\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

use App\Http\Resources\Document as DocumentResource;
use App\Document;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $directories = Storage::disk('ftp')->directories('/');

        $folders = [];
        foreach ($directories as $directory) {
            array_push($folders, pathinfo($directory));
        }
        return $folders;
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
    public function show(Request $request, $id)
    {
        // return $request->path;

        $sites = Site::whereHas('pop', function($q) use($id) {
            $q->where('id', $id);
        })->get();



        $files = []; $folders = [];

        $directories = Storage::disk('ftp')->directories('/'.$request->path);

        // return $directories;

        // Folders
        foreach ($sites as $site) {
            // if (count($directories)) {
                foreach($directories as $folder_path) {
                    try {
                        $f = explode(' ', explode('/'.$request->path.'/', $folder_path, 2)[1], 2);
                    } catch (Exception $e) {

                    }

                    

                    if($f[0] == $site->nem_site) {
                        $folders[] = pathinfo($folder_path);
                        // if (Storage::files($folder_path)) {
                        //     $files[] = pathinfo(Storage::files($folder_path)[0]);
                        // }
                    }
                }
            // } else {
            //     return explode('/'.$request->path.'/', $folder_path, 2);
            // }
        }

        // Files
        // $filesInFolder = Storage::disk('ftp')->files('/'.$request->path);
        // foreach ($filesInFolder as $f) {
        //     $files[] = pathinfo($f);
        // }

        return [
            'directories' => $directories, 
            // 'folders' => $folders, 
            // 'files' => $files
        ];
        
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
