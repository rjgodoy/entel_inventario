<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JunctionType extends Model
{
    public function junctions()
    {
        return $this->hasMany(Junction::class);
    }
}
