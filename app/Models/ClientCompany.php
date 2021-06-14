<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientCompany extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.client_companies';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function access_type() 
    {
        return $this->belongsTo(AccessType::class);
    }
}
