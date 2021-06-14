<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projection extends Model
{
	protected $connection = 'mysql';
	protected $table = 'projections';

    public function room()
    {
        return $this->hasMany(Room::class);
    }
}
