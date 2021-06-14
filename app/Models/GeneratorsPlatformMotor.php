<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformMotor extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.motors';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformModel::class, 'motors_id');
    }
}
