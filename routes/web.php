<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/', function () {
    return redirect('/dashboard');
});
Route::get('/home', function () {
    return redirect('/dashboard');
});

Route::resource('/dashboard', 'HomeController');
Route::resource('/pop', 'PopController');
Route::resource('/comsite', 'ComsiteController');
