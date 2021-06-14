<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AessCell extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql_entel_pops';
    protected $guarded = [];
}
