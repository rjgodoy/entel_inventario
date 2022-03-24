<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Infrastructure extends Model
{
    protected $connection = 'mysql'; 
    protected $table = 'entel_g_redes_inventario.infrastructures';

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function infrastructure_type() 
    {
        return $this->belongsTo(InfrastructureType::class);
    }
    
}
