<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformSubZone extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.sub_zones';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'sub_zone_id');
    }
}
