<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AttentionPriority extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function attention_priority_type() 
    {
        return $this->belongsTo(AttentionPriorityType::class);
    }
}
