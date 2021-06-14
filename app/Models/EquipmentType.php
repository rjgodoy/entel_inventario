<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipmentType extends Model
{
    protected $connection = 'mysql';
	
    public function brands() 
    {
        return $this->hasMany(Brand::class);
    }

}
