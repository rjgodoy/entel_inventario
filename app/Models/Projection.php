<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projection extends Model
{
	protected $connection = 'mysql';
	protected $table = 'projections';

    public function pop()
    {
        return $this->hasMany(Pop::class);
    }
}
