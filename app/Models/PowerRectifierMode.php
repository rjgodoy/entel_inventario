<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PowerRectifierMode extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }
}
