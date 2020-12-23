<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformBrand extends Model
{
    protected $connection = 'mysql_generators';
    protected $table = 'brands';

    public function g_models() 
    {
        return $this->hasMany(GeneratorsPlatformModel::class, 'brand_id');
    }
}
