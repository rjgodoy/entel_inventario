<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FireExtintionType extends Model
{
    public function fire_detections() 
    {
        return $this->hasMany(FireDetection::class);
    }
}
