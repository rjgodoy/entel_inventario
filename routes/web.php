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

Auth::routes();

Route::get('/outside/bridge/{username}/{password}', 'Auth\LoginController@showLoginFormOutside')->name('bridge');

Route::middleware(['auth'])->group(function () {

    // Route::get('/separate_folders', 'Api\FolderController@separateFolders');

    Route::get('/api_pops', 'HomeController@apiPops');
    Route::get('/test', 'HomeController@test');

	Route::get('/', function () {
	    return redirect('/dashboard');
	});

	Route::get('/home', function () {
	    return redirect('/dashboard');
	});

	Route::get('/{any?}', 'HomeController@index')->where('any', '.*');
	
});