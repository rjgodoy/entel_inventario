<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FolderCollection extends ResourceCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = 'folders';

    /**
     * Indicates if the resource's collection keys should be preserved.
     *
     * @var bool
     */
    public $preserveKeys = true;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }

    /**
     * Get any additional data that should be returned with the resource array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function with($request)
    {
        return [
            'can' => [
                'create' => Gate::allows('create-folder', Folder::class),
                'delete' => Gate::allows('delete-folder', Folder::class),
                'viewManuales' => Gate::allows('view-manuales', Folder::class),
                'createManuales' => Gate::allows('create-manuales', Folder::class),
                'viewProcedimientos' => Gate::allows('view-procedimientos', Folder::class),
                'createProcedimientos' => Gate::allows('create-procedimientos', Folder::class)
            ],
        ];
    }
}
