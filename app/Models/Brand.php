<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $connection = 'mysql';
    protected $guarded = [];
	
    public function equipment_type() 
    {
        return $this->belongsTo(EquipmentType::class);
    }

    public function models() 
    {
        return $this->hasMany(Model::class);
    }
}
