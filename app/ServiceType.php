<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceType extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function site_types() 
    {
        return $this->hasMany(SiteType::class);
    }
}
