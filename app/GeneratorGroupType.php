<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneratorGroupType extends Model
{
    public function generator_groups() 
    {
        return $this->hasMany(GeneratorGroup::class);
    }
}
