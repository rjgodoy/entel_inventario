<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestAction extends Model
{
    protected $guarded = [];

    public function request_base()
    {
        return $this->belongsTo(RequestBase::class);
    }

    public function action()
    {
        return $this->belongsTo(Action::class);
    }

    public function transition()
    {
        return $this->belongsTo(Transition::class);
    }
}
