<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerticalStructure extends Model
{
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.vertical_structures'; 

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function vertical_structure_type() 
    {
        return $this->belongsTo(VerticalStructureType::class);
    }

    public function beacons() 
    {
        return $this->hasMany(Beacon::class);
    }
}
