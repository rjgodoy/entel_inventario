<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CriticPop extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
    
}
