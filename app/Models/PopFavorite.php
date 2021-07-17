<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PopFavorite extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.pop_favorites';
	
    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
