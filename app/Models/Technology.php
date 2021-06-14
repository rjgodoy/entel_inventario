<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Technology extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql_entel_pops';
    protected $guarded = [];

    public function site() 
    {
        return $this->belongsTo(Site::class)->withTrashed();
    }

    public function technology_type() 
    {
        return $this->belongsTo(TechnologyType::class);
    }

    public function state() 
    {
        return $this->belongsTo(State::class);
    }
}
