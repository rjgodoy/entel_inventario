<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    protected $guarded = [];
    
    public function files() 
    {
        return $this->hasMany(File::class);
    }

    public function parent() 
    {
        return $this->belongsTo(Folder::class, 'parent_id');
    }

    public function subfolders() 
    {
        return $this->hasMany(Folder::class, 'parent_id');
    }

    public function site() 
    {
        return $this->belongsTo(Site::class);
    }
}
