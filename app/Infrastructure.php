<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Infrastructure extends Model
{
    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function infrastructure_type() 
    {
        return $this->belongsTo(InfrastructureType::class);
    }
    
}
