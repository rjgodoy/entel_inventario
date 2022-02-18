<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IframeView extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.iframe_views'; 

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
    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
