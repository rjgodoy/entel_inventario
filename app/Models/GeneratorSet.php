<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSet extends Model
{

    public function current_generator_group() 
    {
        return $this->hasOne(GeneratorGroup::class)->latest();
    }

    public function current_generator_motor() 
    {
        return $this->hasOne(GeneratorMotor::class)->latest();
    }

    public function current_generator_tank() 
    {
        return $this->hasOne(GeneratorTank::class)->latest();
    }

    public function current_generator_tta() 
    {
        return $this->hasOne(GeneratorTta::class)->latest();
    }

    public function current_maintainer() 
    {
        return $this->belongsToMany(TelecomCompany::class)->latest();
    }


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

    public function maintainers() 
    {
        return $this->belongsToMany(TelecomCompany::class)->withTimestamps();
    }
}
