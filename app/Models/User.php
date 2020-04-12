<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Permissions\HasPermissionsTrait;

class User extends Authenticatable
{
    protected $connection = 'mysql_entel_corp';
    protected $table = 'entel_corp.users';

    use Notifiable;
    use HasPermissionsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function zonas() 
    {
        return $this->hasMany(Zona::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function request_basics()
    {
        return $this->belongsToMany(RequestBasic::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function request_notes()
    {
        return $this->hasMany(RequestNote::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function request_files()
    {
        return $this->hasMany(RequestFile::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function request_stakeholders()
    {
        return $this->belongsToMany(RequestStakeholder::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function processes()
    {
        return $this->belongsToMany(Process::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function areas()
    {
        return $this->belongsToMany(Area::class)->withTimestamps();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function authorizeRoles($roles)
    {
        abort_unless($this->hasAnyRole($roles), 401);
        return true;
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function hasAnyRole($roles)
    {
        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role)) {
                    return true;
                }
            }
        } else {
            if ($this->hasRole($roles)) {
                return true; 
            }   
        }
        return false;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function hasRole($role)
    {
        if ($this->roles()->where('name', $role)->first()) {
            return true;
        }
        return false;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function isAdmin() {
        return $this->roles()->where('name', 'admin')->exists();
    }

}
