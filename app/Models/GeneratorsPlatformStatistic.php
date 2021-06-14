<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformStatistic extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.statistics';

    const CREATED_AT = 'created';

    public function g_generator() 
    {
        return $this->belongsTo(GeneratorsPlatformGenerator::class, 'generator_id');
    }
}
