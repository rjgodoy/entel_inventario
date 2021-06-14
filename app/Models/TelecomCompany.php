<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TelecomCompany extends Model
{
    public function generator_set_maintainers() 
    {
        return $this->hasMany(GeneratorSetMaintainer::class)->withTimestamps();
    }
}
