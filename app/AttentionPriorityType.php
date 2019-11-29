<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttentionPriorityType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function attention_priorities() 
    {
        return $this->hasMany(AttentionPriority::class);
    }
}
