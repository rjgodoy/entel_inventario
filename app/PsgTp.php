<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PsgTp extends Model
{
    protected $connection = 'mysql';
    protected $guarded = [];

    public function site() 
    {
        return $this->belongsTo(Site::class);
    }

    public function psg_tp_state() 
    {
        return $this->belongsTo(PsgTpState::class);
    }

    public function addData($tp_id, $site_id, $psg_tp_state_id, $description, $user, $created_at, $updated_at) {

        $this->create([
            'tp_id' => $tp_id,
            'site_id' => $site_id,
            'psg_tp_state_id' => $psg_tp_state_id,
            'description' => $description,
            'user' => $user,
            'created_at' => $created_at,
            'updated_at' => $updated_at,
        ]);
    }
}
