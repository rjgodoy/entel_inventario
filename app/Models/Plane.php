<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plane extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.planes';

    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function rooms() 
    {
        return $this->belongsToMany(Room::class, 'entel_g_redes_inventario.plane_room')->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function plane_redundant_modules() 
    {
        return $this->hasMany(PlaneRedundantModule::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_redundant_modules() 
    {
        return $this->hasOne(PlaneRedundantModule::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function plane_type() 
    {
        return $this->belongsTo(PlaneType::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function battery_banks() 
    {
        return $this->hasMany(BatteryBank::class);
    }

    
}
