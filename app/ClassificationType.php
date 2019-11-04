<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassificationType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function classifications() 
    {
        return $this->hasMany(Classification::class);
    }
}
