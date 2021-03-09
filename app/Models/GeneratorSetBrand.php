<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorSetBrand extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.generator_set_brands';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	public function generator_set_models() 
    {
        return $this->hasMany(GeneratorSetModel::class);
    }

}
