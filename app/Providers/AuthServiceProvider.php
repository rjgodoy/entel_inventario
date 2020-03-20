<?php

namespace App\Providers;

// use App\Models\Comsite;
// use App\Policies\ComsitePolicy;
use App\Models\ElectricLine;
use App\Policies\ElectricLinePolicy;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // Comsite::class => ComsitePolicy::class,
        ElectricLine::class => ElectricLinePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Gate::define('sync-comsite', function ($user) {
        //     return $user->isAdmin;
        // });

        // Gate::define('create-comsite', 'App\Policies\ComsitePolicy@create');

        // Gate::define('create-electric-line', 'App\Policies\ElectricLinePolicy@create');
        Gate::define('update-electric-line', 'App\Policies\ElectricLinePolicy@update');
        // Gate::define('delete-electric-line', 'App\Policies\ElectricLinePolicy@delete');

    }
}
