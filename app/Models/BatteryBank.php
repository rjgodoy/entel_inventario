<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BatteryBank extends Model
{
	use SoftDeletes;

    protected $guarded = [];
	
	public function plane() 
    {
        return $this->belongsTo(Plane::class);
    }

    public function battery_bank_brand() 
    {
        return $this->belongsTo(BatteryBankBrand::class);
    }
}
