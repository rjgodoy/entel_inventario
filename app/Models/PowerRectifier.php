<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PowerRectifier extends Model
{
    protected $connection = 'mysql';
    protected $table = 'power_rectifiers';

    protected $guarded = [];

	public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function power_rectifier_type() 
    {
        return $this->belongsTo(PowerRectifierType::class);
    }

    public function power_rectifier_modules() 
    {
        return $this->hasMany(PowerRectifierModule::class);
    }

    public function room() 
    {
        return $this->belongsTo(Room::class);
    }
}
