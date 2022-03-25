<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class FilesSgc extends Model
{
    protected $connection = 'mysql_sgc';
	protected $table = 'archivos';
}
