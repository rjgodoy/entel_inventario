<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NetType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function nets() 
    {
        return $this->hasMany(Net::class);
    }
}
