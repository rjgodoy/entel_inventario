<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformMaintanceStatus extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.maintance_statuses';

    public function g_maintances() 
    {
        return $this->hasMany(GeneratorsPlatformMaintance::class, 'maintance_statuses_id');
    }

    public function g_maintance_records() 
    {
        return $this->hasMany(GeneratorsPlatformMaintanceRecord::class, 'maintance_statuses_id');
    }
}
