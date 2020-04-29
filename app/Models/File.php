<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
	protected $connection = 'mysql';
	protected $table = 'entel_g_redes_inventario.files';

    protected $guarded = [];

    public function site() 
    {
        return $this->belongsTo(Site::class);
    }

    public function folder() 
    {
        return $this->belongsTo(Folder::class);
    }
}
