<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyEquipmentRevision extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.energy_equipment_revisions';
    
    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function statuses() 
    {
        return $this->hasMany(EnergyEquipmentRevisionStatus::class);
    }

    public function images() 
    {
        return $this->hasMany(EnergyEquipmentRevisionImage::class);
    }
}
