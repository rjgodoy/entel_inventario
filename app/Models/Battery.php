<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Battery extends Model
{
    public function battery_type() 
    {
        return $this->belongsTo(BatteryType::class);
    }
}
