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
}
