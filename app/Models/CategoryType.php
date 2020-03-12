<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function sites() 
    {
        return $this->hasMany(Site::class);
    }
}
