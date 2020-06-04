<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pop extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.pops'; 
    
    protected $guarded = [];

    ##################### RELACIONES CON entel_pops #####################

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function junctions() 
    {
        return $this->hasMany(Junction::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function documents() 
    {
        return $this->belongsToMany(Document::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function logs()
    {
        return $this->hasMany(Log::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function net_type() 
    {
        return $this->belongsTo(NetType::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pop_type() 
    {
        return $this->belongsTo(PopType::class);
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
    public function protected_zones()
    {
        return $this->belongsToMany(ProtectedZone::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function rcas() 
    {
        return $this->hasMany(Rca::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function rooms() 
    {
        return $this->hasMany(Room::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function sites() 
    {
        return $this->hasMany(Site::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function temporary_storage() 
    {
        return $this->hasMany(TemporaryStorage::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function vertical_structures() 
    {
        return $this->hasMany(VerticalStructure::class);
    }

}
