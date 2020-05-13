<?php

namespace App\Http\Controllers\Api;

use App\Models\File;
use App\Models\Site;
use App\Models\Folder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FolderCollection;
use App\Http\Resources\Folder as FolderResource;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $text = $request->text;
        $folders = Folder::with('site')
        ->whereHas('site', function($q) use($text) {
            $q->where('nem_site', 'LIKE', "%$text%")
            ->orWhere('nombre', 'LIKE', "%$text%");
        })
        ->where('name', $request->name)->get();
        return new FolderCollection($folders);
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
        if ($request->folder_id) {
            $folders = Folder::whereHas('site', function($q) use($id) {
                $q->where('pop_id', $id);
            })
            ->where('parent_id', $request->folder_id)
            ->first();
        } else {
            $folders = Folder::whereHas('site', function ($q) use ($id) {
                $q->where('pop_id', $id);
            })
            ->where('name', $request->folder_name)
            ->first();
        }

        if ($folders) {
            $folders = $folders->subfolders()->get();
        } else {
            $folders = [];
        }

        return new FolderCollection($folders);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFolders(Request $request)
    {
        $folders = Folder::where('parent_id', $request->folder_id)
        ->first();

        if ($folders) {
            $folders = $folders->subfolders()->get();
        } else {
            $folders = [];
        }

        return new FolderCollection($folders);
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function separateFolders(Request $request)
    {
        $files = File::all();
        dd($files);
        
        foreach($files as $file) {
            $explode = explode('/', $file->dirname);

            $site = Site::where('nem_site', $explode[1])->first();
            $site_id = $site ? $site->id : null;

            $folder = Folder::updateOrCreate([
                'parent_id' => null,
                'site_id' => $site_id,
                'name' => $explode[2],
            ], [
                'creator_id' => 1
            ]);
            
            $sf_id = $folder->id;
            if (count($explode) > 2) {
                for ($i=3; $i < count($explode); $i++) {
                    $subfolder = Folder::updateOrCreate([
                        'parent_id' => $sf_id,
                        'site_id' => $site_id,
                        'name' => $explode[$i],
                    ], [
                        'creator_id' => 1
                    ]);

                    $sf_id = $subfolder->id;
                }
            }

            $file->update([
                'folder_id' => $sf_id
            ]);

        }
        $folders = Folder::all();
        dd($folders);

    }
}
