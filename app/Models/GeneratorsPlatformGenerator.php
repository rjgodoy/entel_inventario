<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformGenerator extends Model
{
	protected $connection = 'mysql_generators';
    protected $table = 'entel.generators';

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

    public function g_commune() 
    {
        return $this->belongsTo(GeneratorsPlatformCommune::class, 'commune_id');
    }

    public function zona() 
    {
        return $this->belongsTo(Zona::class, 'zone_id');
    }

    public function g_zona() 
    {
        return $this->belongsTo(GeneratorsPlatformZone::class, 'zone_id');
    }

    public function g_sub_zona() 
    {
        return $this->belongsTo(Zona::class, 'sub_zone_id');
    }

    public function g_model() 
    {
        return $this->belongsTo(GeneratorsPlatformModel::class, 'model_id');
    }

    public function g_type() 
    {
        return $this->belongsTo(GeneratorsPlatformGeneratorType::class, 'group_type_id');
    }

    public function g_system_type() 
    {
        return $this->belongsTo(GeneratorsPlatformSystemType::class, 'system_type_id');
    }

    public function generator_set_model() 
    {
        return $this->belongsTo(GeneratorSetModel::class, 'new_model_id');
    }

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function g_protocol() 
    {
        return $this->belongsTo(GeneratorsPlatformProtocol::class, 'protocol_id');
    }

}
