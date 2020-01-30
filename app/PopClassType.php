<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PopClassType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }
}
