<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorOwner extends Model
{
    public function generator_sets() 
    {
        return $this->hasMany(GeneratorSet::class);
    }
}
