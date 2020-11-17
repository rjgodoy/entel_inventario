<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccessType extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.access_types';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function client_companies() 
    {
        return $this->hasMany(ClientCompany::class);
    }
}
