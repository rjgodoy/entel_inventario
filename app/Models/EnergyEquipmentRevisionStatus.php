<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyEquipmentRevisionStatus extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.energy_equipment_revision_statuses';
    
    protected $guarded = [];

    public function revision() 
    {
        return $this->belongsTo(EnergyEquipmentRevision::class);
    }

    public function item() 
    {
        return $this->belongsTo(EnergyEquipmentRevisionItem::class);
    }

    public function validator() 
    {
        return $this->belongsTo(User::class);
    }
}
