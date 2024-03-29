<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PowerRectifierModule extends Model
{
	use SoftDeletes;

	protected $guarded = [];
	
    public function power_rectifier() 
    {
        return $this->belongsTo(PowerRectifier::class);
    }
}
