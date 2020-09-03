<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ElectricLine extends Model
{
    public function pop()
    {
        return $this->belongsTo(Pop::class)->withTrashed();
    }

    public function electric_line_type() 
    {
        return $this->belongsTo(ElectricLineType::class);
    }

    public function phase_type() 
    {
        return $this->belongsTo(PhaseType::class);
    }

    public function junctions()
    {
        return $this->hasMany(Junction::class);
    }

    public function transformers()
    {
        return $this->hasMany(Transformer::class);
    }
}
