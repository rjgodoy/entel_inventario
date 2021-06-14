<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Net extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function net_type() 
    {
        return $this->belongsTo(NetType::class);
    }
}
