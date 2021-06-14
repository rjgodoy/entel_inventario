<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    public function states()
    {
        return $this->belongsToMany(State::class)->withTimestamps();
    }

    public function transitions()
    {
        return $this->belongsToMany(Transition::class)->withTimestamps();
    }

    public function action_type()
    {
        return $this->belongsTo(ActionType::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }
}
