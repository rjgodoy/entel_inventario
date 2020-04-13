<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetType extends Model
{
    public function generator_sets() 
    {
        return $this->hasMany(GeneratorSet::class);
    }
}
