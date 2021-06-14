<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NetType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }
}
