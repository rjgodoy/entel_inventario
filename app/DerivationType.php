<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DerivationType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function derivations() 
    {
        return $this->hasMany(Derivation::class);
    }
}
