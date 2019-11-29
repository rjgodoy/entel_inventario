<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryType extends Model
{
    protected $connection = 'mysql_entel_pops';
	
    public function categories() 
    {
        return $this->hasMany(Category::class);
    }
}
