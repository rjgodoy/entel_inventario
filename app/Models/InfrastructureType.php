<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfrastructureType extends Model
{
    public function infrastructures() 
    {
        return $this->hasMany(Infrastructure::class);
    }
}
