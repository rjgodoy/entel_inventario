<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaneRedundantModule extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.plane_redundant_modules';

	protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function plane() 
    {
        return $this->belongsTo(Plane::class);
    }
}
