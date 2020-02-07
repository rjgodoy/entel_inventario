<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PowerRectifier extends Model
{
    public function power_rectifier_type() 
    {
        return $this->belongsTo(PowerRectifierType::class);
    }
}
