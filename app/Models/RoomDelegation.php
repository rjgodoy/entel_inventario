<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomDelegation extends Model
{
	protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.room_delegations';

    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function plane_delegation_type()
    {
        return $this->belongsTo(PlaneDelegationType::class);
    }
}
