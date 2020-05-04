<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TemporaryStorage extends Model
{
	protected $connection = 'mysql';
	protected $table = 'entel_g_redes_inventario.temporary_storages';	

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
