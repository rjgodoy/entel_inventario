<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditionerCondenser extends Model
{
    public function air_conditioner() 
    {
        return $this->belongsTo(AirConditioner::class);
    }
}
