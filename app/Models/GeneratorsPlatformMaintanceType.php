<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformMaintanceType extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.maintance_types';

    public function g_maintances() 
    {
        return $this->hasMany(GeneratorsPlatformMaintance::class, 'maintance_type_id');
    }
}
