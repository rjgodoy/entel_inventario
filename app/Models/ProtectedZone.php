<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProtectedZone extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.protected_zones';

    public function pops()
    {
        return $this->belongsToMany(Pop::class)->withTimestamps();
    }
}
