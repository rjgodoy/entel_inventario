<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformMaintanceStatus extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.generator_platform_maintance_statuses';

    protected $guarded = [];

    public $timestamps = false;

    public function g_maintances() 
    {
        return $this->hasMany(GeneratorsPlatformMaintance::class, 'maintance_statuses_id');
    }

    public function g_ot_maintances() 
    {
        return $this->hasMany(GeneratorsPlatformOTMaintance::class, 'maintance_statuses_id');
    }

    public function g_maintance_records() 
    {
        return $this->hasMany(GeneratorsPlatformMaintanceRecord::class, 'maintance_statuses_id');
    }
}
