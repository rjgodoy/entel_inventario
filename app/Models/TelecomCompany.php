<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TelecomCompany extends Model
{
    public function generator_sets() 
    {
        return $this->belongsToMany(GeneratorSet::class)->withTimestamps();
    }
}
