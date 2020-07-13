<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaneDelegationType extends Model
{
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
     * @var boolean
     */
	public function planes()
    {
        return $this->belongsToMany(Plane::class)->withTimestamps();
    }
}
