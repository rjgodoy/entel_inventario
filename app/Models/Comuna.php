<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comuna extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }

    public function zona() 
    {
        return $this->belongsTo(Zona::class);
    }

    public function region() 
    {
        return $this->belongsTo(Region::class);
    }

    public function sgc_pops() 
    {
        return $this->hasMany(SgcPop::class);
    }
}
