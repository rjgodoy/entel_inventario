<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Pop;
use App\Models\File;
use App\Models\Site;
use App\Models\Folder;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\For_;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileCollection;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\File as FileResource;

class FileController extends Controller
{
    protected $originPath = 'Files';
    // protected $originType = 'ftp';
    protected $originType = 'local';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $files = File::where('folder_id', $request->folder_id)->get();
        return new FileCollection($files);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if (($request->folder_id != 'null' && $request->folder_id != 'undefined' && $request->folder_id != '') 
            && ($request->pop_id != 'null' && $request->pop_id != 'undefined' && $request->pop_id != '') ) {
            $folder = Folder::find($request->folder_id);
            $upload_path = 'Files/'.$request->pop_id;
            $array = [$folder];
            while ($folder->parent_id != null) {
                $parentFolder = Folder::find($folder->parent_id);
                array_unshift($array, $parentFolder);
                $folder = $parentFolder;
            }
            for ($i=0; $i < count($array); $i++) { 
                $upload_path = $upload_path.'/'.$array[$i]->name;
            }
            // return $upload_path;
        } elseif($request->folder_id != 'null' && $request->folder_id != 'undefined' && $request->folder_id != '') {
            $folder = Folder::find($request->folder_id);
            $upload_path = 'Files';
            $array = [$folder];
            while ($folder->parent_id != null) {
                $parentFolder = Folder::find($folder->parent_id);
                array_unshift($array, $parentFolder);
                $folder = $parentFolder;
            }
            for ($i=0; $i < count($array); $i++) { 
                $upload_path = $upload_path.'/'.$array[$i]->name;
            }
        } elseif ($request->pop_id != 'null' && $request->pop_id != 'undefined' && $request->pop_id != '') {
            $folder = Folder::where('name', $request->folder_name)->where('pop_id', $request->pop_id)->first();
            if ($folder) {
                $upload_path = 'Files/'.$request->pop_id.'/'.$folder->name;
            } else {
                $folder = Folder::create([
                    'name' => $request->folder_name,
                    'pop_id' => $request->pop_id,
                    'creator_id' => $request->user_id
                ]);
                $upload_path = 'Files/'.$request->pop_id.'/'.$folder->name;
            }
        } else {
            $folder = null;
            $upload_path = 'Files/'.$request->folder_name;
        }

        $file_name = $request->file->getClientOriginalName();
        $file_mime = $request->file->getClientMimeType();
        $file_size = $request->file->getClientSize();
        $file_extension = $request->file->getClientOriginalExtension();
        $file_route = Storage::disk('local')->putFile($upload_path, $request->file);

        // if ($request->folder_id) {
            $file = File::create([
                'pop_id' => $request->pop_id ? $request->pop_id : ($folder ? $folder->pop_id : null),
                'user_id' => $request->user_id,
                'folder_id' => $request->folder_id ? $request->folder_id : ($folder ? $folder->id : null),
                'dirname' => $upload_path,
                'basename' => $file_name,
                'size' => $file_size,
                'mime' => $file_mime,
                'extension' => $file_extension,
                'route' => $file_route,
                'filename' => $request->filename != '' && $request->filename != null ? $request->filename : $file_name
            ]);
        // }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $files = File::where('pop_id', $id)
        ->where('folder_id', $request->folder_id)
        ->get();

        return new FileCollection($files);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFiles(Request $request)
    {
        $files = File::where('folder_id', $request->folder_id)->get();

        return new FileCollection($files);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function view(Request $request)
    {
        // $headers = [
        //     'Content-Type' => $request->mime,
        // ];
        // return Storage::response($request->route);

        return Storage::response($request->route, 'inline');
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
        File::find($id)->delete();
        return 'done';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function addDrone(Request $request)
    {
        $pop = Pop::find($request->pop_id);
        $pop->drone_videos()->attach($request->file_id);
        return $request;
    }
    

}
