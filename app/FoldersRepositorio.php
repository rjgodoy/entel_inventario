<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FoldersRepositorio extends Model
{
    protected $connection = 'mysql_repostorio';
	protected $table = 'carpetas';
}
