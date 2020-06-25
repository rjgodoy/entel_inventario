<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetResponsable extends Model
{
    protected $guarded = [];

    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function generator_set_responsable_area() 
    {
        return $this->belongsTo(GeneratorSetResponsableArea::class);
    }
}
