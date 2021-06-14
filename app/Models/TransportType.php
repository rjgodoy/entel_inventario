<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransportType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function transports() 
    {
        return $this->hasMany(Transport::class);
    }
}
