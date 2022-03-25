<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FoldersRepositorio extends Model
{
    protected $connection = 'mysql_repositorio';
	protected $table = 'carpetas';

	public function ScopeSearch($query)
    {
        if (request()->folder_name) {
            $query->where('nombre', 'like',"%".request()->folder_name."%" );
        }

    }
}

