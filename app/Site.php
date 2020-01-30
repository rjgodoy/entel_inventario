<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $connection = 'mysql_entel_pops';

    public function attention_priority_type() 
    {
        return $this->belongsTo(AttentionPriorityType::class);
    }

    public function attention_types() 
    {
        return $this->belongsTo(AttentionType::class);
    }

    public function category_types() 
    {
        return $this->belongsTo(CategoryType::class);
    }

    public function classification_type() 
    {
        return $this->belongsTo(ClassificationType::class);
    }

    public function coverage_type() 
    {
        return $this->belongsTo(CoverageType::class);
    }

    public function critic_sites() 
    {
        return $this->hasMany(CriticSite::class);
    }

    public function dependences() 
    {
        return $this->hasMany(Dependence::class);
    }

    public function derivation_type() 
    {
        return $this->belongsTo(DerivationType::class);
    }

    public function pop() 
    {
        return $this->belongsTo(Pop::class);
    }

    public function site_type() 
    {
        return $this->belongsTo(SiteType::class);
    }

    public function solution_type() 
    {
        return $this->belongsTo(SolutionType::class);
    }

    public function state_type() 
    {
        return $this->belongsTo(StateType::class);
    }

    public function technologies() 
    {
        return $this->hasMany(Technology::class);
    }

    public function transport_types() 
    {
        return $this->belongsTo(TransportType::class);
    }

    public function protected_zones()
    {
        return $this->belongsToMany(ProtectedZone::class)->withTimestamps();
    }

}
