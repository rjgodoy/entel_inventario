<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditionerCapacity extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.air_conditioner_capacities';

    protected $guarded = [];

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
