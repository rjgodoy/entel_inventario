<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BatteryBankAutonomy extends Model
{
    protected $connection = 'mysql_entel_pops';

    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
