<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */

    private $http;

    function __construct() {
        $this->http = (env('APP_ENV')=='local')?'http':'https';
    }

    public function register()
    {
        
        URL::forceScheme($this->http);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        URL::forceScheme($this->http);
    }
}
