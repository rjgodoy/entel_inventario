<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomCapacity extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.room_capacities';
    
	protected $guarded = [];

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
