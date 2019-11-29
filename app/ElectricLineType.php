<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ElectricLineType extends Model
{
    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }
}
