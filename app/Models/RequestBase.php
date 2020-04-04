<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestBase extends Model
{
    protected $guarded = [];
	
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function request_data()
    {
        return $this->hasMany(RequestData::class);
    }

    public function request_notes()
    {
        return $this->hasMany(RequestNote::class);
    }

    public function request_files()
    {
        return $this->hasMany(RequestFile::class);
    }

    public function request_actions()
    {
        return $this->hasMany(RequestAction::class);
    }

    public function request_state()
    {
        return $this->belongsTo(RequestState::class);
    }
}
