<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirConditioner extends Model
{
	protected $connection = 'mysql';
    protected $table = 'air_conditioners';

    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function air_conditioner_brand() 
    {
        return $this->belongsTo(AirConditionerBrand::class);
    }

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }

    public function air_conditioner_condensers() 
    {
        return $this->hasMany(AirConditionerCondenser::class);
    }

    public function air_conditioner_chillers() 
    {
        return $this->hasMany(AirConditionerChiller::class);
    }

    public function air_conditioner_consumptions() 
    {
        return $this->hasMany(AirConditionerConsumption::class);
    }

    public function current_consumption() 
    {
        return $this->hasOne(AirConditionerConsumption::class)->latest();
    }

    
}
