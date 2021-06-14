<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FireDetectionType extends Model
{
    public function fire_detections() 
    {
        return $this->hasMany(FireDetection::class);
    }
}
