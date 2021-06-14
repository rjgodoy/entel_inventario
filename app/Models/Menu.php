<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function submenus() 
    {
        return $this->hasMany(Submenu::class)->where('active', 1);
    }
}
