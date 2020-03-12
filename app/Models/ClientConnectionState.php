<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientConnectionState extends Model
{
    public function client_connections() 
    {
        return $this->hasMany(ClientConnection::class);
    }
}
