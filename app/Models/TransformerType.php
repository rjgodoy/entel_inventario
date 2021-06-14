<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransformerType extends Model
{

    public function transformers()
    {
        return $this->hasMany(Transformer::class);
    }
    
}
