<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tec4G2600Cell extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
