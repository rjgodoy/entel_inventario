<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Zona extends Model
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
