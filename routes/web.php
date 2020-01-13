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

Route::middleware(['auth'])->group(function () {

	Route::get('/', function () {
	    return redirect('/dashboard');
	});
	Route::get('/home', function () {
	    return redirect('/dashboard');
	});

	Route::resource('/dashboard', 'HomeController');
	Route::get('/pop/export', 'PopController@export')->name('pops.export');

	Route::resource('/pop', 'PopController');
	Route::resource('/comsite', 'ComsiteController');

	Route::resource('/admin', 'AdminController');
	
});