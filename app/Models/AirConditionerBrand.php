<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditionerBrand extends Model
{
	protected $guarded = [];
	
    public function air_conditioners() 
    {
        return $this->hasMany(AirConditioner::class);
    }

    public function air_conditioner_type() 
    {
        return $this->belongsTo(AirConditionerType::class);
    }
}
