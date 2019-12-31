<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SolutionType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function solutions() 
    {
        return $this->hasMany(Solution::class);
    }
}
