<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JunctionMeasurement extends Model
{
	protected $guarded = [];
	
    public function junctions()
    {
        return $this->hasMany(Junction::class);
    }
}
