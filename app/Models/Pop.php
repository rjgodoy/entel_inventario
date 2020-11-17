<?php

namespace App\Models;

use App\Models\Autonomy;
use App\Models\EnergySystem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pop extends Model
{
    use SoftDeletes;
    
    protected $connection = 'mysql_entel_pops';
    protected $table = 'entel_pops.pops'; 
    
    protected $guarded = [];

    ##################### RELACIONES CON entel_pops #####################

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function autonomies() 
    {
        return $this->hasMany(Autonomy::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function battery_bank_autonomies() 
    {
        return $this->hasMany(BatteryBankAutonomy::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_autonomy() 
    {
        return $this->hasOne(Autonomy::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_battery_bank_autonomy() 
    {
        return $this->hasOne(BatteryBankAutonomy::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function comuna() 
    {
        return $this->belongsTo(Comuna::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function client_companies() 
    {
        return $this->hasMany(ClientCompany::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function junctions() 
    {
        return $this->hasMany(Junction::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function comsites() 
    {
        return $this->hasMany(Comsite::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function files() 
    {
        return $this->hasMany(File::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function electric_lines() 
    {
        return $this->hasMany(ElectricLine::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function entel_vips() 
    {
        return $this->hasMany(EntelVip::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_entel_vip() 
    {
        return $this->hasOne(EntelVip::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function generator_sets() 
    {
        return $this->hasMany(GeneratorSet::class)->withTrashed();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function logs()
    {
        return $this->hasMany(Log::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function layout() 
    {
        return $this->hasOne(PopLayout::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function energy_system()
    {
        return $this->belongsTo(EnergySystem::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function energy_responsable()
    {
        return $this->belongsTo(EnergyResponsable::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function net_type() 
    {
        return $this->belongsTo(NetType::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function offices() 
    {
        return $this->hasMany(CrmOffice::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_office() 
    {
        return $this->hasOne(CrmOffice::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function pop_type() 
    {
        return $this->belongsTo(PopType::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function power_rectifiers() 
    {
        return $this->hasMany(PowerRectifier::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function protected_zones()
    {
        return $this->belongsToMany(ProtectedZone::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function rcas() 
    {
        return $this->hasMany(Rca::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function rooms() 
    {
        return $this->hasMany(Room::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function sites() 
    {
        return $this->hasMany(Site::class)->withTrashed();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function temporary_storage() 
    {
        return $this->hasMany(TemporaryStorage::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function current_temporary_storage() 
    {
        return $this->hasOne(TemporaryStorage::class)->latest();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function vertical_structures() 
    {
        return $this->hasMany(VerticalStructure::class);
    }

}
