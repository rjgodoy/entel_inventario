<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformZone extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.zones';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'zone_id');
    }

    public function g_sector() 
    {
        return $this->belongsTo(GeneratorsPlatformSector::class, 'sector_id');
    }

}
