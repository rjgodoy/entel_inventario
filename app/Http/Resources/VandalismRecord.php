<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class VandalismRecord extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = 'record';

    /**
     * Indicates if the resource's collection keys should be preserved.
     *
     * @var bool
     */
    public $preserveKeys = true;

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
    protected function permissions()
    {
        return [
            'create' => Gate::allows('create-vandalism-record', $this->resource),
            'update' => Gate::allows('update-vandalism-record', $this->resource),
            'delete' => Gate::allows('delete-vandalism-record', $this->resource)
        ];
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
            'can' => $this->permissions()
        ];
    }
}
