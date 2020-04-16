<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'rooms';

    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }

    public function air_conditioners() 
    {
        return $this->hasMany(AirConditioner::class);
    }

}
