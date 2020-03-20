<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorTank extends Model
{
    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }
}
