<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnergyEquipmentRevisionImage extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.energy_equipment_revision_images';
    
    public function revision() 
    {
        return $this->belongsTo(EnergyEquipmentRevision::class);
    }
}
