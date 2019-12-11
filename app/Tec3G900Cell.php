<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tec3G900Cell extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
