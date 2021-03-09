<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformFuelPond extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.fuel_ponds';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformModel::class, 'fuel_pond_id');
    }
}
