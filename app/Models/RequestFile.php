<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestFile extends Model
{
    public function request_base()
    {
        return $this->belongsTo(RequestBase::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
