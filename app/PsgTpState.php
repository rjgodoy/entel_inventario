<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PsgTpState extends Model
{
    public function psg_tps() 
    {
        return $this->hasMany(PsgTp::class);
    }
}
