<?php

namespace App\Http\Controllers\Api;

use App\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
        $sites = Site::whereHas('pop', function($q) use($id) {
            $q->where('id', $id);
        })->get();

        foreach ($sites as $site) {
            return $site;
        }
            // $directory_path = 'ftp://developer:Entel.123@172.16.100.123/OOCC/'.$site->nem_site;

        //     // Files
        //     $files = [];
        //     $filesInFolder = \File::files($directory_path, true);
        //     // $filesInFolder = \File::allFiles($directory_path, true);

        //     foreach($filesInFolder as $path)
        //     {
        //         $files[] = pathinfo($path);
        //     }

        //     // Directories
        //     $folders = [];
        //     $Folders = \File::directories($directory_path, true);
        //     // $Folders = \File::allDirectories($directory_path);

        //     foreach($Folders as $folder_path)
        //     {
        //         $folders[] = pathinfo($folder_path);
        //     }
        // }
        // $directory_path = 'ftp://developer:Entel.123@172.16.100.123/OOCC/';

        // // Files
        // $files = [];
        // $filesInFolder = \File::files($directory_path, true);
        // // $filesInFolder = \File::allFiles($directory_path, true);

        // foreach($filesInFolder as $path)
        // {
        //     $files[] = pathinfo($path);
        // }

        // // Directories
        // $folders = [];
        // $Folders = \File::directories($directory_path, true);
        // // $Folders = \File::allDirectories($directory_path);

        // foreach($Folders as $folder_path)
        // {
        //     $folders[] = pathinfo($folder_path);
        // }

        // return new DocumentResource($sites[0]);
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
