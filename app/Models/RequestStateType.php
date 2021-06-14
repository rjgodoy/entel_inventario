<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestStateType extends Model
{
    public function request_states()
    {
        return $this->hasMany(RequestState::class);
    }
}
