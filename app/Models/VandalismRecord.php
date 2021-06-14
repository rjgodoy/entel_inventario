<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class VandalismRecord extends Model
{
	use SoftDeletes;
    
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.vandalism_records';
    
    protected $guarded = [];

    public function site() 
    {
        return $this->belongsTo(Site::class);
    }
}
