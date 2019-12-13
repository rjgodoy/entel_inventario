<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InfrastructureType extends Model
{
    public function infrastructures() 
    {
        return $this->hasMany(Infrastructure::class);
    }
}
