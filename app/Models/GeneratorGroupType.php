<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorGroupType extends Model
{
    public function generator_groups() 
    {
        return $this->hasMany(GeneratorGroup::class);
    }
}
