<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dependence extends Model
{
	protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function dependence() 
    {
        return $this->belongsTo(Pop::class);
    }
}
