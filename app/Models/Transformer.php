<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transformer extends Model
{
    protected $guarded = [];
    
    public function electric_line()
    {
        return $this->belongsTo(ElectricLine::class);
    }

    public function phase_type() 
    {
        return $this->belongsTo(PhaseType::class);
    }

    public function transformer_type()
    {
        return $this->belongsTo(TransformerType::class);
    }
}
