<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActionTarget extends Model
{
    public function action()
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
