<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
