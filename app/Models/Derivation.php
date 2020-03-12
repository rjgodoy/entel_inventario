<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Derivation extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function derivation_type() 
    {
        return $this->belongsTo(DerivationType::class);
    }
}
