<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorTankType extends Model
{
    public function generator_tanks() 
    {
        return $this->hasMany(GeneratorTank::class);
    }
}
