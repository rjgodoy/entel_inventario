<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TurretType extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'turret_types';

    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }
}
