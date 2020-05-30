<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorGroup extends Model
{
    public function generator_group_type() 
    {
        return $this->belongsTo(GeneratorGroupType::class);
    }

    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function phase_type() 
    {
        return $this->belongsTo(PhaseType::class);
    }
}
