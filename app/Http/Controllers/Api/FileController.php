<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

use App\Http\Resources\File as FileResource;
use App\Models\File;
use App\Models\Site;

class FileController extends Controller
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
        $directories = Storage::disk($this->originType)->directories($this->originPath);

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
        // $files = Storage::disk('ftp')->directories('Files');
        // dd($files);
        // // $arrayFiles = [];
        // foreach ($files as $file) {
        //     $site = explode('/', $file)[1];
        //     if (substr($site, 0, 1) !== '.') {

        //         if($site_id = Site::where('nem_site', $site)->first()) {
        //             $site_id = $site_id->id;
        //         } else {
        //             $site_id = null;
        //         }
                
        //         $fileData = collect([
        //             'dirname' => isset(pathinfo($file)['dirname']) ? pathinfo($file)['dirname'] : '',
        //             'basename' => isset(pathinfo($file)['basename']) ? pathinfo($file)['basename'] : '',
        //             'extension' => isset(pathinfo($file)['extension']) ? pathinfo($file)['extension'] : '',
        //             'filename' => isset(pathinfo($file)['filename']) ? pathinfo($file)['filename'] : '',
        //             'size' => Storage::size($file) ? Storage::size($file) : 0,
        //             'mime' => Storage::mimeType($file) ? Storage::mimeType($file) : ''
        //         ]);

        //         if (substr($fileData['basename'], 0, 1) !== '.') {
        //             // array_push($arrayFiles, $fileData);

        //             File::updateOrCreate(
        //                 [
        //                     'site_id' => $site_id,
        //                     'dirname' => $fileData['dirname'],
        //                     'filename' => $fileData['filename'],
        //                 ],
        //                 [
        //                     'user_id' => 1,
        //                     'basename' => $fileData['basename'],
        //                     'extension' => $fileData['extension'],
        //                     'size' => $fileData['size'],
        //                     'mime' => $fileData['mime'],
        //                 ]
        //             );
        //         }
        //     }
        // }
        // // dd($arrayFiles);
        // dd('Done!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $headers = [
        //     'Content-Type' => 'application/'.$request->extension,
        // ];
        // return Storage::disk($this->originType)->download($request->dirname.'/'.$request->basename, $request->basename, $headers);

        $files = File::whereHas('site', function($q) use($id) {
            $q->where('pop_id', $id);
        })
        ->where('folder_id', $request->folder_id)
        ->get();

        return new FileResource($files);
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
        return Storage::disk('ftp')->get($request->dirname.'/'.$request->basename);
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
