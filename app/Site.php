<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function site_type() 
    {
        return $this->belongsTo(SiteType::class);
    }

    public function classification_type() 
    {
        return $this->belongsTo(ClassificationType::class);
    }

    public function classifications() 
    {
        return $this->hasMany(Classification::class);
    }

    public function technologies() 
    {
        return $this->hasMany(Technology::class);
    }
}
