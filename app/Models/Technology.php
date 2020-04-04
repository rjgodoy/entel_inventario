<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $guarded = [];

    public function site() 
    {
        return $this->belongsTo(Site::class);
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
