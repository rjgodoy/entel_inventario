<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformSector extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'sectors';

    public function g_zones() 
    {
        return $this->hasMany(GeneratorsPlatformZone::class, 'sector_id');
    }
}
