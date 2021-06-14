<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RiskType extends Model
{
	protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.risk_types'; 
    
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pops()
    {
        return $this->belongsToMany(Pop::class)->withTimestamps();
    }
}
