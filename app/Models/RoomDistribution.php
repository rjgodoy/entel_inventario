<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomDistribution extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.room_distributions';

    protected $guarded = [];

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
