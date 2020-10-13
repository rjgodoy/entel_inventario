<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PopLayout extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.pop_layouts'; 

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
    public function file() 
    {
        return $this->belongsTo(File::class);
    }
}
