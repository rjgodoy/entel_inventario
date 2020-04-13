<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
	protected $connection = 'mysql';
    protected $table = 'logs'; 
    
    protected $guarded = [];

	public function pop()
    {
        return $this->belongsTo(Pop::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function log_type()
    {
        return $this->belongsTo(LogType::class);
    }
}
