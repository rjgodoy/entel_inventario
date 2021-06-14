<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Battery extends Model
{
	use SoftDeletes;
	
    public function battery_type() 
    {
        return $this->belongsTo(BatteryType::class);
    }
}
