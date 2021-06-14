<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformManagementSystem extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.management_systems';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformModel::class, 'management_system_id');
    }
}
