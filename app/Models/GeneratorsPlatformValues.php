<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformValues extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.generator_values';
    protected $guarded = [];

    const CREATED_AT = 'created';

    // public $timestamps= false;

    public function g_generator() 
    {
        return $this->belongsTo(GeneratorsPlatformGenerator::class, 'generator_id');
    }
}
