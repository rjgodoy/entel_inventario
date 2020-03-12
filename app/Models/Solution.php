<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function solution_type() 
    {
        return $this->belongsTo(SolutionType::class);
    }
}
