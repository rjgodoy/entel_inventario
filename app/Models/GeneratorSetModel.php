<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetModel extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.generator_set_models';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	public function generator_set_brand() 
    {
        return $this->belongsTo(GeneratorSetBrand::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function generator_sets() 
    {
        return $this->hasMany(GeneratorSet::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class);
    }
}
