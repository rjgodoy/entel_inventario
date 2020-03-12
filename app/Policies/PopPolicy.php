<?php

namespace App\Policies;

use App\Models\Pop;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PopPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any pops.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the pop.
     *
     * @param  \App\User  $user
     * @param  \App\Pop  $pop
     * @return mixed
     */
    public function view(User $user, Pop $pop)
    {
        //
    }

    /**
     * Determine whether the user can create pops.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the pop.
     *
     * @param  \App\User  $user
     * @param  \App\Pop  $pop
     * @return mixed
     */
    public function update(User $user, Pop $pop)
    {
        //
    }

    /**
     * Determine whether the user can delete the pop.
     *
     * @param  \App\User  $user
     * @param  \App\Pop  $pop
     * @return mixed
     */
    public function delete(User $user, Pop $pop)
    {
        //
    }

    /**
     * Determine whether the user can restore the pop.
     *
     * @param  \App\User  $user
     * @param  \App\Pop  $pop
     * @return mixed
     */
    public function restore(User $user, Pop $pop)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the pop.
     *
     * @param  \App\User  $user
     * @param  \App\Pop  $pop
     * @return mixed
     */
    public function forceDelete(User $user, Pop $pop)
    {
        //
    }
}
