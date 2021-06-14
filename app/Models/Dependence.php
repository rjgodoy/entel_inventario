<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dependence extends Model
{
	protected $connection = 'mysql_entel_pops';
	
    public function site() 
    {
        return $this->belongsTo(Site::class);
    }

    public function dependence() 
    {
        return $this->belongsTo(Site::class);
    }
}
