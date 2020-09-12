<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.rooms';

    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function air_conditioners() 
    {
        return $this->hasMany(AirConditioner::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_room_distribution() 
    {
        return $this->hasOne(RoomDistribution::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function room_capacities() 
    {
        return $this->hasMany(RoomCapacity::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_room_capacity() 
    {
        return $this->hasOne(RoomCapacity::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_room_surface() 
    {
        return $this->hasOne(RoomSurface::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_air_conditioner_capacity() 
    {
        return $this->hasOne(AirConditionerCapacity::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function fire_detections() 
    {
        return $this->hasMany(FireDetection::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_fire_detection() 
    {
        return $this->hasOne(FireDetection::class)->latest();
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pop() 
    {
        return $this->belongsTo(Pop::class);
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
    public function planes() 
    {
        return $this->belongsToMany(Plane::class, 'entel_g_redes_inventario.plane_room')->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function projections()
    {
        return $this->hasMany(Projection::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function room_distributions()
    {
        return $this->hasMany(RoomDistribution::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function room_delegations()
    {
        return $this->hasMany(RoomDelegation::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_room_delegation()
    {
        return $this->hasOne(RoomDelegation::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function room_surfaces()
    {
        return $this->hasMany(RoomSurface::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function air_conditioner_capacities()
    {
        return $this->hasMany(AirConditionerCapacity::class);
    }

}
