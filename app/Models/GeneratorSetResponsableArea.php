<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetResponsableArea extends Model
{
    public function generator_set_responsables() 
    {
        return $this->hasMany(GeneratorSetResponsable::class);
    }
}
