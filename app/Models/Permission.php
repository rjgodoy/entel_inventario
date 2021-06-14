<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $connection = 'mysql';
	protected $table = 'entel_g_redes_inventario.permissions'; 

	/**
     * The attributes that are mass assignable.
     *
     * @var boolean
     */
	public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var boolean
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
