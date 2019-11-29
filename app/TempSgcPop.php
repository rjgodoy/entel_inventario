<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TempSgcPop extends Model
{
	protected $connection = 'mysql_entel_pops';
	protected $guarded = [];
	
    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    public function sgc_requests() 
    {
        return $this->belongsTo(SgcRequest::class, 'nuevassolicitud_id', 'id');
    }
}
