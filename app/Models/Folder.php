<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Folder extends Model
{
    use SoftDeletes;
    
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

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
