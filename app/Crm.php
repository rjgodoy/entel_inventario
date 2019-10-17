<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Crm extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function zonas() 
    {
        return $this->hasMany(Zona::class);
    }
}
