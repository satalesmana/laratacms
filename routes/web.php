<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/', 'WebclientController')->only(['index']);
Route::post('/send_messages','WebclientController@sendMail');
Route::resource('/testimoni','TestimonialsController')->only(['index']);
Route::resource('/component',"ContentComponentController")->only(['index']);

Auth::routes();
Route::group(['middleware' => 'auth'], function () {
   // Route::post('logout', 'AuthController@logout');
    Route::get('auth/me', 'AuthController@me');
    Route::resource('/adminpanel','AdminpanelController')->only(['index']);
    Route::get('/adminpanel/{any}', 'AdminpanelController@index')->where('any', '.*');
});



//Route::get('/login', 'Auth\LoginController@login')->name('home');
