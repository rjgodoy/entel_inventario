<?php

namespace App\Policies;

use App\Models\Comsite;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ComsitePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any comsites.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the comsite.
     *
     * @param  \App\User  $user
     * @param  \App\Comsite  $comsite
     * @return mixed
     */
    public function view(User $user, Comsite $comsite)
    {
        //
    }

    /**
     * Determine whether the user can create comsites.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // return $user->roles->first()->name === 'admin';
        return true;
    }

    /**
     * Determine whether the user can update the comsite.
     *
     * @param  \App\User  $user
     * @param  \App\Comsite  $comsite
     * @return mixed
     */
    public function update(User $user, Comsite $comsite)
    {
        // return $user->roles->first()->name === 'admin';
        return true;
    }

    /**
     * Determine whether the user can delete the comsite.
     *
     * @param  \App\User  $user
     * @param  \App\Comsite  $comsite
     * @return mixed
     */
    public function delete(User $user, Comsite $comsite)
    {
        return $user->roles->first()->name === 'admin';
    }

    /**
     * Determine whether the user can restore the comsite.
     *
     * @param  \App\User  $user
     * @param  \App\Comsite  $comsite
     * @return mixed
     */
    public function restore(User $user, Comsite $comsite)
    {
        return $user->roles->first()->name === 'admin';
    }

    /**
     * Determine whether the user can permanently delete the comsite.
     *
     * @param  \App\User  $user
     * @param  \App\Comsite  $comsite
     * @return mixed
     */
    public function forceDelete(User $user, Comsite $comsite)
    {
        return $user->roles->first()->name === 'admin';
    }
}
