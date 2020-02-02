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
    return view('home');
});

// Route::post('/login', 'Auth\LoginController@login');

Auth::routes();

Route::middleware(['auth'])->group(function () {

	Route::get('/', function () {
	    return redirect('/dashboard');
	});

	Route::get('/home', function () {
	    return redirect('/dashboard');
	});

	Route::get('/js/popper.js.map', function () {
	    return redirect('/dashboard');
	});

	Route::get('/{any}', 'HomeController@index')->where('any', '.*');
	

	// Route::resource('/dashboard', 'HomeController');
	// Route::get('/pop/export', 'PopController@export')->name('pops.export');

	// Route::resource('/pop', 'PopController');
	// Route::resource('/comsite', 'ComsiteController');

	// Route::resource('/admin', 'AdminController');

	
});