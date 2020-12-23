<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneratorsPlatformMaintanceRecord extends Model
{
	protected $connection = 'mysql_generators';
    protected $table = 'maintance_records';

    const CREATED_AT = 'created';
    const UPDATED_AT = 'updated';

    public function g_maintance() 
    {
        return $this->belongsTo(GeneratorsPlatformMaintance::class, 'maintance_id');
    }

    public function g_maintance_status() 
    {
        return $this->belongsTo(GeneratorsPlatformMaintanceStatus::class, 'maintance_statuses_id');
    }
}
