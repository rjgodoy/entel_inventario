<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beacon extends Model
{
    public function vertical_structure() 
    {
        return $this->belongsTo(VerticalStructure::class);
    }

    public function beacon_type() 
    {
        return $this->belongsTo(BeaconType::class);
    }
}
