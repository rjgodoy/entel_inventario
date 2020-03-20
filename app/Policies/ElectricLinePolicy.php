<?php

namespace App\Policies;

use App\Models\ElectricLine;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ElectricLinePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any electric lines.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the electric line.
     *
     * @param  \App\Models\User  $user
     * @param  \App\ElectricLine  $electricLine
     * @return mixed
     */
    public function view(User $user, ElectricLine $electricLine)
    {
        //
    }

    /**
     * Determine whether the user can create electric lines.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // return $user->roles->first()->name === 'admin';
    }

    /**
     * Determine whether the user can update the electric line.
     *
     * @param  \App\Models\User  $user
     * @param  \App\ElectricLine  $electricLine
     * @return mixed
     */
    public function update(User $user, ElectricLine $electricLine)
    {
        // return $user->isAdmin();
        // return $user->roles->first()->name === 'admin';
        return true;
    }

    /**
     * Determine whether the user can delete the electric line.
     *
     * @param  \App\Models\User  $user
     * @param  \App\ElectricLine  $electricLine
     * @return mixed
     */
    public function delete(User $user, ElectricLine $electricLine)
    {
        // return $user->roles->first()->name === 'admin';
    }

    /**
     * Determine whether the user can restore the electric line.
     *
     * @param  \App\Models\User  $user
     * @param  \App\ElectricLine  $electricLine
     * @return mixed
     */
    public function restore(User $user, ElectricLine $electricLine)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the electric line.
     *
     * @param  \App\Models\User  $user
     * @param  \App\ElectricLine  $electricLine
     * @return mixed
     */
    public function forceDelete(User $user, ElectricLine $electricLine)
    {
        //
    }
}
