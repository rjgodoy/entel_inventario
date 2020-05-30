<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Folder as FolderResource;
use App\Http\Resources\FolderCollection;
use App\Models\File;
use App\Models\Folder;
use App\Models\Log;
use App\Models\LogType;
use App\Models\Site;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $text = $request->text;
        if ($request->folder_id) {
            $folders = Folder::with('subfolders', 'pop', 'site')
            ->where('parent_id', $request->folder_id)
            ->get();
        } else {
            $folders = Folder::with('subfolders', 'pop', 'site')
            ->where('name', $request->folder_name)
            ->get();
        }
        return new FolderCollection($folders);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sideFolders(Request $request)
    {
        $text = $request->text;
        $folders = Folder::with('subfolders', 'pop', 'site')
        ->whereHas('pop.sites', function($q) use($text) {
            $q->where('nem_site', 'LIKE', "%$text%")
            ->orWhere('nombre', 'LIKE', "%$text%");
        })
        ->where('name', $request->folder_name)
        ->paginate(10);
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createFolder(Request $request, $id)
    {
        $parentFolderId = $id;
        if($id == 'null' || $id == 'undefined') {
            $parentFolder = Folder::updateOrCreate([
                'parent_id' => null,
                'pop_id' => $request->pop_id,
                'name' => $request->folderTab
            ],[
                'creator_id' => $request->creator_id
            ]);

            $parentFolderId = $parentFolder->id;

        }

        if ($folder = Folder::withTrashed()->where('parent_id', $parentFolderId)->where('name', $request->name)->first()) {
            $folder->restore();
        } else {
            $folder = Folder::create([
                'parent_id' => $parentFolderId,
                'pop_id' => $request->pop_id,
                'name' => $request->name,
                'creator_id' => $request->creator_id
            ]);
        }

        Log::create([
            'pop_id' => $request->pop_id,
            'user_id' => $request->creator_id,
            'log_type_id' => LogType::where('type', 'folder')->first()->id,
            'description' => 'Se ha agregado la carpeta "'. $request->name.'" a "'.$request->folderTab.'"'
        ]);

        return $folder;
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createRootFolder(Request $request)
    {
        return $request;
        Folder::create([
            'name' => $request->name,
            'creator_id' => $request->creator_id
        ]);        

        Log::create([
            'pop_id' => null,
            'user_id' => $request->creator_id,
            'log_type_id' => LogType::where('type', 'folder')->first()->id,
            'description' => 'Se ha creado la carpeta "'. $request->name.'" en "'.$request->folderTab.'"'
        ]);

        return $folder;
        
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
            $folders = Folder::with('subfolders', 'pop', 'site')->where('pop_id', $id)
            ->where('parent_id', $request->folder_id)
            ->get();
        } else {
            $folders = Folder::with('subfolders', 'pop', 'site')->where('pop_id', $id)
            ->where('name', $request->folder_name)
            ->get();
        }

        return new FolderCollection($folders);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function currentFolder(Request $request)
    {
        if ($request->folder_id) {
            $folder = Folder::where('pop_id', $request->pop_id)
            ->where('id', $request->folder_id)
            ->first();
        } else {
            $folder = Folder::where('pop_id', $request->pop_id)
            ->where('name', $request->folder_name)
            ->first();
        }

        return new FolderResource($folder);
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
    public function destroy(Request $request, $id)
    {
        $folder = Folder::find($id);
        $files = File::where('folder_id', $folder->id)->get();
        if($files){
            foreach ($files as $file) {
                $file->delete();
            }
        } 
        $folder->delete();

        Log::create([
            'pop_id' => $request->pop_id ? $request->pop_id : ($folder->pop_id ? $folder->pop_id : null),
            'user_id' => $request->user_id,
            'log_type_id' => LogType::where('type', 'delete-folder')->first()->id,
            'description' => 'Se ha eliminado la carpeta "'. $folder->name.'" y su contenido'
        ]);

        return 'done';
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
