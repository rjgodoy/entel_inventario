<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GeneratorSetMaintainer extends Model
{
	use SoftDeletes;
	
	protected $guarded = [];

    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class)->withTrashed();
    }

    public function telecom_company() 
    {
        return $this->belongsTo(TelecomCompany::class);
    }
}
