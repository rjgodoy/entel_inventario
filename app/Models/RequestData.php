<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestData extends Model
{
    public function request_base()
    {
        return $this->belongsTo(RequestBase::class);
    }
}
