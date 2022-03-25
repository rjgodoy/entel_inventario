<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FilesRepositorio extends Model
{
    protected $connection = 'mysql_repositorio';
	protected $table = 'archivos';
} 
