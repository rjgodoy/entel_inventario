<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilesRepositorio extends Model
{
    protected $connection = 'mysql_repostorio';
	protected $table = 'archivos';
}
