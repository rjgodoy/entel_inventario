<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Autonomy extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

}
