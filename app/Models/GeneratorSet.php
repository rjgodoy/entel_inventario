<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSet extends Model
{
    public function generator_set_type() 
    {
        return $this->belongsTo(GeneratorSetType::class);
    }

    public function generator_groups() 
    {
        return $this->hasMany(GeneratorGroup::class);
    }

    public function generator_motors() 
    {
        return $this->hasMany(GeneratorMotor::class);
    }

    public function generator_tanks() 
    {
        return $this->hasMany(GeneratorTank::class);
    }

    public function generator_ttas() 
    {
        return $this->hasMany(GeneratorTta::class);
    }

    public function generator_owner() 
    {
        return $this->belongsTo(GeneratorOwner::class);
    }
}
