<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergySystem extends Model
{
	protected $connection = 'mysql_entel_pops';
	protected $table = 'entel_pops.energy_systems';
	
    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }
}
