<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BatteryBankBrand extends Model
{
    public function battery_banks() 
    {
        return $this->hasMany(BatteryBank::class);
    }
}
