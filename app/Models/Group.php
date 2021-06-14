<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public function actions()
    {
        return $this->hasMany(Action::class);
    }
}
