<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaneType extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function planes() 
    {
        return $this->hasMany(Plane::class);
    }
}
