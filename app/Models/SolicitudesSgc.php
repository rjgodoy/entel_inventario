<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SolicitudesSgc extends Model
{
    protected $connection = 'mysql_sgc';
    protected $table      = 'nuevassolicitudes';

    public function ScopeSearch($query)
    {
        if (request()->code) {
            $query->where('id', '=', request()->code);
        }

    }
}
