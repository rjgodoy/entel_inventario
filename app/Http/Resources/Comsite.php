<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Resources\Json\JsonResource;

class Comsite extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    // public static $wrap = 'comsite';

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }

    /**
     * Returns the permissions of the resource.
     *
     * @return array
     */
    // protected function permissions()
    // {
    //     return [
    //         'create' => Gate::allows('create-comsite', Comsite::class),
    //         'update' => Gate::allows('update-comsite', $this->resource),
    //         'delete' => Gate::allows('delete-comsite', $this->resource)
    //     ];
    // }

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
    //         'can' => $this->permissions()
    //     ];
    // }
}
