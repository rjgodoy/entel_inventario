<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditioner extends Model
{
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function air_conditioner_brand() 
    {
        return $this->belongsTo(AirConditionerBrand::class);
    }
}
