<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OperationResponsable extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.operation_responsables'; 
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pops()
    {
        return $this->hasMany(Pop::class);
    }
}
