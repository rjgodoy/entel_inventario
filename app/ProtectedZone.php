<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProtectedZone extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function sites()
    {
        return $this->belongsToMany(Site::class)->withTimestamps();
    }
}
