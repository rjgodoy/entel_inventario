<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OTTmpTaskLog extends Model
{
    protected $connection = 'mysql_officetrack';
	protected $table = 'officetrack.tmp_Task_Log';

	public function site() 
    {
        return $this->belongsTo(Site::class, 'CustomerNumber', 'nem_site');
    }

    public function generator() 
    {
        return $this->belongsTo(GeneratorsPlatformGenerator::class, 'CustomerNumber', 'mobile_code');
    }
}
