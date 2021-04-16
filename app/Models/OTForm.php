<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OTForm extends Model
{
    protected $connection = 'mysql_officetrack';
	protected $table = 'officetrack.Form';

	public function site() 
    {
        return $this->belongsTo(Site::class, 'FormCustomerNumber', 'nem_site');
    }

    public function generator() 
    {
        return $this->belongsTo(GeneratorsPlatformGenerator::class, 'FormCustomerNumber', 'mobile_code');
    }
}
