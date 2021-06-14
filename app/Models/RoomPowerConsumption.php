<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RoomPowerConsumption extends Model
{
    use SoftDeletes;
    
	protected $connection = 'mysql';
    protected $table = 'room_power_consumptions';

    protected $guarded = [];

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
