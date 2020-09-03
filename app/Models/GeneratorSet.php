<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GeneratorSet extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql';
    protected $table = 'entel_g_redes_inventario.generator_sets';

    protected $guarded = [];

    public function pop() 
    {
        return $this->belongsTo(Pop::class)->withTrashed();;
    }

    public function current_generator_set_capacity() 
    {
        return $this->hasOne(GeneratorSetCapacity::class)->latest();
    }

    public function current_generator_group() 
    {
        return $this->hasOne(GeneratorGroup::class)->latest();
    }

    public function current_generator_motor() 
    {
        return $this->hasOne(GeneratorMotor::class)->latest();
    }

    public function current_generator_responsable() 
    {
        return $this->hasOne(GeneratorSetResponsable::class)->latest();
    }

    public function current_generator_tank() 
    {
        return $this->hasOne(GeneratorTank::class)->latest();
    }

    public function current_generator_tta() 
    {
        return $this->hasOne(GeneratorTta::class)->latest();
    }

    public function current_maintainer() 
    {
        return $this->hasOne(GeneratorSetMaintainer::class)->latest();
    }

    public function current_generator_set_corp_disponibility() 
    {
        return $this->hasOne(GeneratorSetCorpDisponibility::class)->latest();
    }

    public function generator_set_capacities() 
    {
        return $this->hasMany(GeneratorSetCapacity::class);
    }

    public function generator_set_topology_type() 
    {
        return $this->belongsTo(GeneratorSetTopologyType::class);
    }

    public function generator_set_level_type() 
    {
        return $this->belongsTo(GeneratorSetLevelType::class);
    }

    public function generator_set_type() 
    {
        return $this->belongsTo(GeneratorSetType::class);
    }

    public function generator_groups() 
    {
        return $this->hasMany(GeneratorGroup::class);
    }

    public function generator_motors() 
    {
        return $this->hasMany(GeneratorMotor::class);
    }

    public function generator_set_responsables() 
    {
        return $this->hasMany(GeneratorSetResponsable::class);
    }

    public function generator_tanks() 
    {
        return $this->hasMany(GeneratorTank::class);
    }

    public function generator_ttas() 
    {
        return $this->hasMany(GeneratorTta::class);
    }

    public function generator_set_maintainers() 
    {
        return $this->hasMany(GeneratorSetMaintainer::class);
    }

    public function generator_set_corp_disponibilities() 
    {
        return $this->hasMany(GeneratorSetCorpDisponibility::class);
    }
}
