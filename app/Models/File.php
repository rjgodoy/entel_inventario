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

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function folder() 
    {
        return $this->belongsTo(Folder::class);
    }

    public function layout() 
    {
        return $this->hasOne(PopLayout::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function drone_videos()
    {
        return $this->belongsToMany(Pop::class, 'entel_g_redes_inventario.drone_videos')->withTimestamps();
    }
}
