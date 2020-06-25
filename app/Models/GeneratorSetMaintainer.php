<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetMaintainer extends Model
{
	protected $guarded = [];

    public function generator_set() 
    {
        return $this->belongsTo(GeneratorSet::class);
    }

    public function telecom_company() 
    {
        return $this->belongsTo(TelecomCompany::class);
    }
}
