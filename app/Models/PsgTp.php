<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PsgTp extends Model
{
    use SoftDeletes;
    
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

}
