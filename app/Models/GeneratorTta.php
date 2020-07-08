<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GeneratorTta extends Model
{
	use SoftDeletes;

    protected $guarded = [];
	
    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function generator_tta_type() 
    {
        return $this->belongsTo(GeneratorTtaType::class);
    }
}
