<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GeneratorMotor extends Model
{
	use SoftDeletes;

    protected $guarded = [];
	
    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function generator_motor_type() 
    {
        return $this->belongsTo(GeneratorMotorType::class);
    }
}
