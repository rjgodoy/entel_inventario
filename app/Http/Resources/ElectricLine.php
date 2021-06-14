<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Resources\Json\JsonResource;

class ElectricLine extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = 'electricLine';

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
            // 'create' => Gate::allows('create-electric-line', ElectricLine::class),
            'update' => Gate::allows('edit-equipment', $this->resource),
            // 'delete' => Gate::allows('delete-electric-line', $this->resource)
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
