<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MimickedType extends Model
{
    public function vertical_structures() 
    {
        return $this->hasMany(VerticalStructure::class);
    }
    
}
