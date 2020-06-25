<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'rooms';

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
    public function fire_detections() 
    {
        return $this->hasMany(FireDetection::class);
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

}
