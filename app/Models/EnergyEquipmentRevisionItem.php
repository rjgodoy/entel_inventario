<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyEquipmentRevisionItem extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.energy_equipment_revision_items';
    
    protected $guarded = [];

    public function type() 
    {
        return $this->belongsTo(EnergyEquipmentRevisionType::class);
    }

    public function statuses()
    {
        return $this->hasMany(EnergyEquipmentRevisionStatus::class);
    }
}
