<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // ElectricLine::class => ElectricLinePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
        // Passport::routes(function($router) {
        //     $router->forAccessTokens();
        // });

        // Passport::tokensExpireIn(now()->addDays(15));
 
        // Passport::refreshTokensExpireIn(now()->addDays(30));
        
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));

        Passport::personalAccessClientId(config('services.passport.personal_client_id'));
    }
}
