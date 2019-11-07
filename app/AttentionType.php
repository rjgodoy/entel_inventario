<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttentionType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function attentions() 
    {
        return $this->hasMany(Attention::class);
    }
}
