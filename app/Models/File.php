<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model
{
    use SoftDeletes;

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
