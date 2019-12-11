<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConnectionClient extends Model
{
    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function connection_client_state() 
    {
        return $this->belongsTo(ConnectionClientState::class);
    }

}
