<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformRegion extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.regions';

    public function g_commune() 
    {
        return $this->hasMany(GeneratorsPlatformCommune::class, 'commune_id');
    }
}
