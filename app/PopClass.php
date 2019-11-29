<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PopClass extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function pop_class_type() 
    {
        return $this->belongsTo(PopClassType::class);
    }
}
