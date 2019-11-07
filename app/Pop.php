<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pop extends Model
{
    protected $connection = 'mysql_entel_pops';

    // public function attention_priorities() 
    // {
    //     return $this->hasMany(AttentionPriority::class);
    // }

    public function attentions() 
    {
        return $this->hasMany(Attention::class);
    }

    // public function autonomies() 
    // {
    //     return $this->hasMany(Autonomy::class);
    // }

    // public function businesses() 
    // {
    //     return $this->hasMany(Business::class);
    // }

    // public function categories() 
    // {
    //     return $this->hasMany(Category::class);
    // }

    public function classifications() 
    {
        return $this->hasMany(Classification::class);
    }

    // public function classes() 
    // {
    //     return $this->hasMany(PopClass::class);
    // }

    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    // public function coverages() 
    // {
    //     return $this->hasMany(Coverage::class);
    // }

    // public function dependences() 
    // {
    //     return $this->hasMany(Dependence::class);
    // }

    // public function derivations() 
    // {
    //     return $this->hasMany(Derivation::class);
    // }

    // public function nets() 
    // {
    //     return $this->hasMany(Net::class);
    // }

    // public function pop_classes() 
    // {
    //     return $this->hasMany(PopClass::class);
    // }

    // public function sites() 
    // {
    //     return $this->hasMany(Site::class);
    // }

    // public function states() 
    // {
    //     return $this->hasMany(State::class);
    // }

    // public function tec2_g900_cells() 
    // {
    //     return $this->hasMany(Tec2G900Cell::class);
    // }

    // public function tec2_g1900_cells() 
    // {
    //     return $this->hasMany(Tec2G1900Cell::class);
    // }

    // public function tec3_g900_cells() 
    // {
    //     return $this->hasMany(Tec3G900Cell::class);
    // }

    // public function tec3_g1900_cells() 
    // {
    //     return $this->hasMany(Tec3G900Cell::class);
    // }

    // public function tec4_g700_cells() 
    // {
    //     return $this->hasMany(Tec4G700Cell::class);
    // }

    // public function tec4_g2600_cells() 
    // {
    //     return $this->hasMany(Tec4G2600Cell::class);
    // }

    // public function thresholds() 
    // {
    //     return $this->hasMany(Threshold::class);
    // }

    // public function transports() 
    // {
    //     return $this->hasMany(Transport::class);
    // }
}
