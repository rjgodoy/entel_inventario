<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneratorGroup extends Model
{
    public function generator_group_type() 
    {
        return $this->belongsTo(GeneratorGroupType::class);
    }
}
