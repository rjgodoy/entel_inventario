<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function groups()
    {
        return $this->hasMany(Group::class);
    }

    public function states()
    {
        return $this->hasMany(State::class);
    }

    public function transitions()
    {
        return $this->hasMany(Transition::class);
    }
}
