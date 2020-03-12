<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PsgTpSource extends Model
{
    protected $connection = 'mysql_psg';
    protected $table = 'CONSOLIDADO_INVENTARIO';
}
