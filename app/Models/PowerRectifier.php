<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PowerRectifier extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.power_rectifiers';

    protected $guarded = [];

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
    public function power_rectifier_type() 
    {
        return $this->belongsTo(PowerRectifierType::class);
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function power_rectifier_modules() 
    {
        return $this->hasMany(PowerRectifierModule::class);
    }
    
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
    public function plane() 
    {
        return $this->belongsTo(Plane::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function power_rectifier_mode() 
    {
        return $this->belongsTo(PowerRectifierMode::class);
    }
}
