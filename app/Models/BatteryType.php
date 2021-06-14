<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BatteryType extends Model
{
    public function batteries() 
    {
        return $this->hasMany(Battery::class);
    }
}
