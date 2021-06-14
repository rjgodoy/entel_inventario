<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GeneratorSetCapacity extends Model
{
	use SoftDeletes;

	protected $guarded = [];
	
    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class)->withTrashed();
    }
}
