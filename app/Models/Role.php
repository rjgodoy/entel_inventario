<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Role extends Model
{
	protected $connection = 'mysql';
	protected $table = 'entel_g_redes_inventario.roles'; 

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
    
}
