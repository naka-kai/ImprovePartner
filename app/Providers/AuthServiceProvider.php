<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // 管理者
        Gate::define('isAdmin', function ($user) {
            return ($user->is_admin == 1);
        });

        // メンバー
        Gate::define('isMember', function ($user) {
            return ($user->is_admin == 0);
        });
    }
}
