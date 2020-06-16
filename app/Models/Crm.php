<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Crm extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function zonas() 
    {
        return $this->hasMany(Zona::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function office() 
    {
        return $this->belongsTo(CrmOffice::class);
    }
}
