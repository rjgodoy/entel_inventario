<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformSystemType extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.system_types';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'system_type_id');
    }
}
