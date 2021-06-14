<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhaseType extends Model
{
    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }

    public function transformers()
    {
        return $this->hasMany(Transformer::class);
    }
}
