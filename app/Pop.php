<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pop extends Model
{
    protected $connection = 'mysql_entel_pops';

    ##################### RELACIONES CON entel_pops #####################

    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    public function nets() 
    {
        return $this->hasMany(Net::class);
    }

    public function pop_classes() 
    {
        return $this->hasMany(PopClass::class);
    }

    public function rcas() 
    {
        return $this->hasMany(Rca::class);
    }

    public function sites() 
    {
        return $this->hasMany(Site::class);
    }

    ##################### RELACIONES CON entel_inventario #####################
    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }

    public function temporary_storage() 
    {
        return $this->hasMany(TemporaryStorage::class);
    }

    public function documents() 
    {
        return $this->belongsToMany(Document::class);
    }
}
