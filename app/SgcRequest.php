<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SgcRequest extends Model
{
    protected $connection = 'mysql_sgc';
    protected $table = 'nuevassolicitudes';
    protected $guarded = [];

    public function temp_sgc_pop() 
    {
        return $this->hasMany(TempSgcPop::class);
    }
}
