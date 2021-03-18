<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformGeneratorDetail extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'entel.generator_details';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformGeneratorDetail::class, 'generator_detail_id');
    }
}
