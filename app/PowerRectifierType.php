<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PowerRectifierType extends Model
{
    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }
}
