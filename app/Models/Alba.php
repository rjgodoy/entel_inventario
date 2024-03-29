<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Alba extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.albas';

    protected $guarded = [];

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function turret_type()
    {
        return $this->belongsTo(TurretType::class);
    }
}
