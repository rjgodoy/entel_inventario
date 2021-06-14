<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PopResume extends Model
{
    protected $connection = 'mysql_entel_pops'; 
    protected $table = 'entel_pops.pop_resumes'; 

    protected $guarded = [];

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }
}
