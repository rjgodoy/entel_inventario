<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function crm() 
    {
        return $this->belongsTo(Crm::class);
    }

    public function comunas() 
    {
        return $this->hasMany(Comuna::class);
    }
}
