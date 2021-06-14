<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submenu extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function menu() 
    {
        return $this->belongsTo(Menu::class);
    }
}
