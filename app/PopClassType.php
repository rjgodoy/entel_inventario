<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PopClassType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop_classes() 
    {
        return $this->hasMany(PopClass::class);
    }
}
