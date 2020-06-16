<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CrmOffice extends Model
{
	use SoftDeletes;

	protected $connection = 'mysql_entel_pops';
	protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function crm() 
    {
        return $this->belongsTo(Crm::class);
    }
}
