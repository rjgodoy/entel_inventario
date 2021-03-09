<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformModel extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.models';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'model_id');
    }

    public function g_brand() 
    {
        return $this->belongsTo(GeneratorsPlatformBrand::class, 'brand_id');
    }

    public function g_fuel_pond() 
    {
        return $this->belongsTo(GeneratorsPlatformFuelPond::class, 'fuel_pond_id');
    }
}
