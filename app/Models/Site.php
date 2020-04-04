<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $connection = 'mysql_entel_pops';
    protected $guarded = [];

    public function attention_priority_type() 
    {
        return $this->belongsTo(AttentionPriorityType::class);
    }

    public function attention_type() 
    {
        return $this->belongsTo(AttentionType::class);
    }

    public function category_type() 
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

    public function state() 
    {
        return $this->belongsTo(State::class);
    }

    public function technologies() 
    {
        return $this->hasMany(Technology::class);
    }

    public function transport_type() 
    {
        return $this->belongsTo(TransportType::class);
    }

}
