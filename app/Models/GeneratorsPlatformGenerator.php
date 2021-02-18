<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformGenerator extends Model
{
	protected $connection = 'mysql_generators';
    protected $table = 'generators';

    const CREATED_AT = 'created';
    const UPDATED_AT = 'modified';

    public function g_generator_values() 
    {
        return $this->hasMany(GeneratorsPlatformValues::class, 'generator_id');
    }

    public function g_maintances() 
    {
        return $this->hasMany(GeneratorsPlatformMaintance::class, 'generator_id');
    }

    public function g_last_maintance() 
    {
        return $this->hasOne(GeneratorsPlatformMaintance::class, 'generator_id')->latest();
    }

    public function g_last_values() 
    {
        return $this->hasOne(GeneratorsPlatformValues::class, 'generator_id')->latest();
    }

    public function g_zone() 
    {
        return $this->belongsTo(GeneratorsPlatformZone::class, 'zone_id');
    }

    public function g_model() 
    {
        return $this->belongsTo(GeneratorsPlatformModel::class, 'model_id');
    }

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

}
