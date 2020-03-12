<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PowerRectifierModule extends Model
{
    public function power_rectifier() 
    {
        return $this->belongsTo(PowerRectifier::class);
    }
}
