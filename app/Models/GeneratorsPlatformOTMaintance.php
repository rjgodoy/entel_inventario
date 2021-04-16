<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformOTMaintance extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.generator_platform_maintances';

    protected $guarded = [];

    const CREATED_AT = 'created';

    // public function g_generator_records() 
    // {
    //     return $this->hasMany(GeneratorsPlatformMaintanceRecord::class, 'maintance_id');
    // }

    // public function g_last_maintance_record() {
    //     return $this->hasOne(GeneratorsPlatformMaintanceRecord::class, 'maintance_id')->latest();
    // }

    public function g_generator() 
    {
        return $this->belongsTo(GeneratorsPlatformGenerator::class, 'generator_id');
    }

    public function g_maintance_type() 
    {
        return $this->belongsTo(GeneratorsPlatformMaintanceType::class, 'maintance_type_id');
    }

    public function g_maintance_status() 
    {
        return $this->belongsTo(GeneratorsPlatformMaintanceStatus::class, 'maintance_statuses_id');
    }

}
