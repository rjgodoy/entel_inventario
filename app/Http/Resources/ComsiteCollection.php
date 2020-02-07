<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ComsiteCollection extends ResourceCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    // public static $wrap = 'comsite';

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
    // public function with($request)
    // {
    //     return [
    //         'can' => [
    //             'sync' => Gate::allows('sync-comsite'),
    //         ],
    //     ];
    // }
}
