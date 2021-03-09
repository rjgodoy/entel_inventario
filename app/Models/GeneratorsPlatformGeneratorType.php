<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformGeneratorType extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.group_types';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'group_type_id');
    }

}
