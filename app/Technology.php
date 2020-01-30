<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function site() 
    {
        return $this->belongsTo(Site::class);
    }

    public function technology_type() 
    {
        return $this->belongsTo(TechnologyType::class);
    }
}