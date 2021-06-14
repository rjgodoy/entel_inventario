<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeaconType extends Model
{
    public function beacons() 
    {
        return $this->hasMany(Beacon::class);
    }
}
