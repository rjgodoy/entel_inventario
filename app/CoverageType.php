<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoverageType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function sites() 
    {
        return $this->hasMany(Coverage::class);
    }
}
