<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

use App\Http\Resources\Document as DocumentResource;
use App\Models\Document;
use App\Models\Site;

class DocumentController extends Controller
{
    protected $originPath = 'Files';
    protected $originType = 'ftp';
    // protected $originType = 'local';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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
        $headers = [
            'Content-Type' => 'application/'.$request->extension,
        ];
        return Storage::download($request->dirname.'/'.$request->basename, $request->basename, $headers);
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function directories($id)
    {
        $site = Site::where('id', $id)->first();
        $siteFolder = $this->originPath.'/'.$site->nem_site;

        $directories = [];

        $dirs = Storage::disk($this->originType)->directories($siteFolder);

        if($dirs) {
            foreach ($dirs as $dir) {
                $siteDir = explode('/', $dir)[1];
                if ($siteDir == $site->nem_site) {
                    array_push($directories, pathinfo($dir));
                }
            }
        } else {
            return new DocumentResource('No hay archivos en este sitio');
        }

        return new DocumentResource($directories);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function folders($id, $path)
    {
        $site = Site::where('id', $id)->first();

        $folder = $this->originPath.'/'.$site->nem_site.'/'.$path;
        $foldersSite = Storage::disk($this->originType)->directories($folder);

        $directories = []; $files = [];

        $dirs = Storage::disk($this->originType)->directories($folder);
        if($dirs) {
            foreach ($dirs as $dir) {
                $siteDir = explode('/', $dir)[1];
                if ($siteDir == $site->nem_site) {
                    array_push($directories, pathinfo($dir));
                }
            }
        } else {
            return new DocumentResource('No hay archivos en este sitio');
        }

        return new DocumentResource($directories);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function files($id, $path, $path2)
    {
        $site = Site::where('id', $id)->first();

        $folder = $this->originPath.'/'.$site->nem_site.'/'.$path.'/'.$path2;

        $directories = []; $files = [];

        $dirs = Storage::disk($this->originType)->allFiles($folder);
        if($dirs) {
            foreach ($dirs as $dir) {
                $siteDir = explode('/', $dir)[1];
                if ($siteDir == $site->nem_site) {
                    array_push($directories, pathinfo($dir));
                }
            }
        } else {
            return new DocumentResource('No hay archivos en este sitio');
        }

        return new DocumentResource($directories);
        
    }
}
