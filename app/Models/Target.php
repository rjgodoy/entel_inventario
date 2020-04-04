<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public function actions()
    {
        return $this->hasMany(Action::class);
    }
}
