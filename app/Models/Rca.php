<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rca extends Model
{
	use SoftDeletes;
    
    protected $connection = 'mysql';
    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }
    
}
