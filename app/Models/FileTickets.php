<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FileTickets extends Model
{
    protected $connection = 'mysql_ticket';
	protected $table = 'archivos';
} 
