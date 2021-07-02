<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyEquipmentRevisionType extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.energy_equipment_revision_types';
    
    protected $guarded = [];

    public function items() 
    {
        return $this->hasMany(EnergyEquipmentRevisionItem::class);
    }
}
