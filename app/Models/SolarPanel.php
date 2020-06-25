<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SolarPanel extends Model
{
	use SoftDeletes;
	
	protected $guarded = [];

    public function junction()
    {
        return $this->belongsTo(Junction::class);
    }
}
