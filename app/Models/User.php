<?php

namespace App\Models;

use App\Permissions\HasPermissionsTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasPermissionsTrait;

    protected $connection = 'mysql_entel_corp';
    protected $table = 'users';

    /**
     * Find the user instance for the given username.
     *
     * @param  string  $username
     * @return \App\User
     */
    public function findForPassport($username)
    {
        return $this->where('username', $username)->first();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'apellido', 'username', 'email', 'password', 'api_token', 'estado', 'sexo',
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
    public function user_connections()
    {
        return $this->hasMany(UserConnection::class);
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
    public function permissions() {

        return $this->belongsToMany(Permission::class, 'entel_g_redes_inventario.permission_user')->withTimestamps();

    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function roles() {

        return $this->belongsToMany(Role::class, 'entel_g_redes_inventario.role_user')->withTimestamps();

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
    public function logs()
    {
        return $this->hasMany(Log::class);
    }

}
