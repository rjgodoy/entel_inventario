<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorTtaType extends Model
{
    public function generator_ttas() 
    {
        return $this->hasMany(GeneratorTta::class);
    }
}
