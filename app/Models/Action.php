<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
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

    public function request_actions()
    {
        return $this->hasMany(RequestAction::class);
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }
}
