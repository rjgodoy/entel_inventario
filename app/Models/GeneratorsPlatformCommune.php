<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformCommune extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.communes';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'commune_id');
    }

    public function g_region() 
    {
        return $this->belongsTo(GeneratorsPlatformRegion::class, 'region_id');
    }
}
