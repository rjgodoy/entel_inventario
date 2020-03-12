<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function sites() 
    {
        return $this->hasMany(Site::class);
    }

    public function technologies() 
    {
        return $this->hasMany(Technology::class);
    }
}
