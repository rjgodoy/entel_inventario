<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConnectionClientState extends Model
{
    public function connection_clients() 
    {
        return $this->hasMany(ConnectionClient::class);
    }
}
