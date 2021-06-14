<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PsgTpState extends Model
{
    public function psg_tps() 
    {
        return $this->hasMany(PsgTp::class);
    }
}
