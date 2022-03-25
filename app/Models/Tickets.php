<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    protected $connection = 'mysql_ticket';
	protected $table = 'tickets';

	public function ScopeSearch($query)
    {
        if (request()->code) {
            $query->where('id', '=', request()->code);
        }

    }
} 
