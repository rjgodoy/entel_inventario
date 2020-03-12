<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerticalStructure extends Model
{
    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function vertical_structure_type() 
    {
        return $this->belongsTo(VerticalStructureType::class);
    }
}
