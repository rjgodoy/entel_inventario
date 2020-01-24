<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TechnologyType extends Model
{
	protected $connection = 'mysql_entel_pops';

    public function technologies() 
    {
        return $this->hasMany(Technology::class);
    }
}
