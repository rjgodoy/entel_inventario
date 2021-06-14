<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transition extends Model
{
    public function actions()
    {
        return $this->belongsToMany(Action::class);
    }

    public function activities()
    {
        return $this->belongsToMany(Activity::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function current_state()
    {
        return $this->belongsTo(State::class, 'current_state_id');
    }

    public function next_state()
    {
        return $this->belongsTo(State::class, 'next_state_id');
    }

    public function request_actions()
    {
        return $this->hasMany(RequestAction::class);
    }
}
