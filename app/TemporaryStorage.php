<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemporaryStorage extends Model
{
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
}
