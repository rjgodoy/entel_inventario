<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FireDetection extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.fire_detections';

    protected $guarded = [];

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }

    public function fire_detection_type() 
    {
        return $this->belongsTo(FireDetectionType::class);
    }

    public function fire_extinction_type() 
    {
        return $this->belongsTo(FireExtinctionType::class);
    }
}
