<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditionerType extends Model
{
	protected $guarded = [];
	
    public function air_conditioner_brands() 
    {
        return $this->hasMany(AirConditionerBrand::class);
    }
}
