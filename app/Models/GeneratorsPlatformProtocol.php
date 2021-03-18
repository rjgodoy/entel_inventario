<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformProtocol extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.protocols';

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'protocol_id');
    }
}
