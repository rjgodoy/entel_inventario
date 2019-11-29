<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SiteType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function sites() 
    {
        return $this->hasMany(Site::class);
    }
}