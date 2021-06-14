<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BrandModel extends Model
{
    protected $connection = 'mysql';
    protected $guarded = [];
	
    public function brand() 
    {
        return $this->belongsTo(Brand::class);
    }

}
