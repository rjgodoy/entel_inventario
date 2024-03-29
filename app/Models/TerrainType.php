<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TerrainType extends Model
{
    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }
}
