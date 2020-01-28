<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pop extends Model
{
    protected $connection = 'mysql_entel_pops';

    ##################### RELACIONES CON entel_pops #####################
    public function attention_priorities() 
    {
        return $this->hasMany(AttentionPriority::class);
    }

    public function attentions() 
    {
        return $this->hasMany(Attention::class);
    }

    public function autonomies() 
    {
        return $this->hasMany(Autonomy::class);
    }

    public function categories() 
    {
        return $this->hasMany(Category::class);
    }

    public function classifications() 
    {
        return $this->hasMany(Classification::class);
    }

    public function classification_type() 
    {
        return $this->belongsTo(ClassificationType::class);
    }

    // public function classes() 
    // {
    //     return $this->hasMany(PopClass::class);
    // }

    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    public function coverages() 
    {
        return $this->hasMany(Coverage::class);
    }

    public function critic_pops() 
    {
        return $this->hasMany(CriticPop::class);
    }

    public function derivations() 
    {
        return $this->hasMany(Derivation::class);
    }

    public function nets() 
    {
        return $this->hasMany(Net::class);
    }

    public function pop_classes() 
    {
        return $this->hasMany(PopClass::class);
    }

    public function rcas() 
    {
        return $this->hasMany(Rca::class);
    }

    public function sites() 
    {
        return $this->hasMany(Site::class);
    }

    public function solutions() 
    {
        return $this->hasMany(Solution::class);
    }

    public function states() 
    {
        return $this->hasMany(State::class);
    }

    public function state_type() 
    {
        return $this->belongsTo(StateType::class);
    }

    // public function thresholds() 
    // {
    //     return $this->hasMany(Threshold::class);
    // }

    // public function transports() 
    // {
    //     return $this->hasMany(Transport::class);
    // }


    ##################### RELACIONES CON entel_inventario #####################
    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }
}
