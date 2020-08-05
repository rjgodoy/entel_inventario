<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetType extends Model
{
	protected $guarded = [];
	
    public function generator_sets() 
    {
        return $this->hasMany(GeneratorSet::class);
    }
}
