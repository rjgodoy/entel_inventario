<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditionerType extends Model
{
    public function air_conditioner_brands() 
    {
        return $this->hasMany(AirConditionerBrand::class);
    }
}
