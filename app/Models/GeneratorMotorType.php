<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorMotorType extends Model
{
    public function generator_motors()
    {
        return $this->hasMany(GeneratorMotor::class);
    }
}
