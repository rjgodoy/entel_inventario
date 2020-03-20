<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorMotor extends Model
{
    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function generator_motor_type() 
    {
        return $this->belongsTo(GeneratorMotorType::class);
    }
}
