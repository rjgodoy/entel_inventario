<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
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
        $directories = Folder::where('parent_id', null)->get();

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
        return $request;

        // Store in disk
        if ($request->pop_id) {
            $sites = Site::where('pop_id', $request->pop_id)->get();

            $folders = [];
            foreach ($sites as $site) {
                $folder = Folder::where('site_id', $site->id)->where('parent_id', null)->where('name', 'Informes')->first();
                $folder && array_push($folders, $folder);
            }
            return $folders;

        } else {
            $upload_path = '../storage/app/public/General';
            $file_name = $request->file->getClientOriginalName();
            $request->file->move($upload_path, $file_name);
        }

        // Store in db
        $file = Storage::disk('local');
        // $files = File::create([
        //     'user_id' => ,
        //     'site_id' => ,
        //     'folder_id' => ,
        // ]);

        // Store in Log


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // return $request;

        $files = File::whereHas('site', function($q) use($id) {
            $q->where('pop_id', $id);
        })
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
        $headers = [
            'Content-Type' => $request->mime,
        ];
        return Storage::disk('local')->get($request->dirname.'/'.$request->basename);
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

}
