<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pop extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.pops'; 
    
    protected $guarded = [];

    ##################### RELACIONES CON entel_pops #####################

    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    public function junctions() 
    {
        return $this->hasMany(Junction::class);
    }

    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    public function documents() 
    {
        return $this->belongsToMany(Document::class);
    }

    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }

    public function nets() 
    {
        return $this->hasMany(Net::class);
    }

    public function pop_classes() 
    {
        return $this->hasMany(PopClass::class);
    }

    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }

    public function protected_zones()
    {
        return $this->belongsToMany(ProtectedZone::class)->withTimestamps();
    }

    public function rcas() 
    {
        return $this->hasMany(Rca::class);
    }

    public function rooms() 
    {
        return $this->hasMany(Room::class);
    }

    public function sites() 
    {
        return $this->hasMany(Site::class);
    }

    public function temporary_storage() 
    {
        return $this->hasMany(TemporaryStorage::class);
    }

}
