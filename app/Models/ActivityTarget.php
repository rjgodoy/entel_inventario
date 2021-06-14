<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityTarget extends Model
{
    public function activity()
    {
        return $this->belongsTo(Action::class);
    }

    public function target()
    {
        return $this->belongsTo(Target::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
