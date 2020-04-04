<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestState extends Model
{
    public function activities()
    {
        return $this->belongsToMany(Activity::class);
    }

    public function state_type()
    {
        return $this->belongsTo(StateType::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function request_bases()
    {
        return $this->hasMany(RequestBase::class);
    }

    public function transitions()
    {
        return $this->hasMany(Transition::class);
    }
}
