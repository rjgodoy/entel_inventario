<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyResponsable extends Model
{
    protected $connection = 'mysql_entel_pops';
	protected $table = 'entel_pops.energy_responsables';
	
    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }
}
