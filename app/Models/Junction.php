<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Junction extends Model
{
    protected $connection = 'mysql'; 
    protected $table = 'entel_g_redes_inventario.junctions'; 

    protected $guarded = [];

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function electric_company()
    {
        return $this->belongsTo(ElectricCompany::class);
    }

    public function junction_type()
    {
        return $this->belongsTo(JunctionType::class);
    }

    public function junction_connection()
    {
        return $this->belongsTo(JunctionConnection::class);
    }

    public function junction_measurements()
    {
        return $this->hasMany(JunctionMeasurement::class);
    }

    public function junction_protections()
    {
        return $this->hasMany(JunctionProtection::class);
    }

    public function latest_measurement()
    {
        return $this->hasOne(JunctionMeasurement::class)->latest();
    }

    public function latest_protection()
    {
        return $this->hasOne(JunctionProtection::class)->latest();
    }


}
