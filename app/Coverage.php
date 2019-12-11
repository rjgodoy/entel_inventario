<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coverage extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function coverage_type() 
    {
        return $this->belongsTo(CoverageType::class);
    }
}
