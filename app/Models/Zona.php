<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.zonas'; 

    public function crm() 
    {
        return $this->belongsTo(Crm::class);
    }

    public function pops() 
    {
        return $this->hasMany(Pop::class);
    }

    public function comunas() 
    {
        return $this->hasMany(Comuna::class);
    }

    public function responsable() 
    {
        return $this->belongsTo(User::class);
    }

    public function temporary_storages() 
    {
        return $this->hasMany(User::class);
    }

    public function g_generators() 
    {
        return $this->hasMany(GeneratorsPlatformGenerator::class, 'zone_id');
    }

}
