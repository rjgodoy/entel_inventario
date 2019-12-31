<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function state_type() 
    {
        return $this->belongsTo(StateType::class);
    }
}
