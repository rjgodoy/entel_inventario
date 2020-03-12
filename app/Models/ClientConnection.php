<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientConnection extends Model
{
    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function electric_company()
    {
        return $this->belongsTo(ElectricCompany::class);
    }

    public function client_connection_state() 
    {
        return $this->belongsTo(ClientConnectionState::class);
    }
}
