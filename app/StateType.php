<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StateType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function states() 
    {
        return $this->hasMany(State::class);
    }
}
