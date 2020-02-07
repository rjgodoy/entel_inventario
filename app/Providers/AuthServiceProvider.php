<?php

namespace App\Providers;

use App\Comsite;
use App\ComsitePolicy;

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
        // 'App\Comsite' => 'App\Policies\ComsitePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('sync-comsite', function ($user) {
            return $user->id == 5;
        });

        Gate::define('sync-comsite', 'App\Policies\ComsitePolicy@create');
    }
}
