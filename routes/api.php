<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Dashboard ######################################################################
// CRMs
Route::apiResource('crms','Api\CrmController');

// Zonas
Route::get('zonasCrm/{crm_id}', [
	'as' => 'zona.zonasCrm',
	'uses' => 'Api\ZonaController@zonasCrm'
]);

// Map
Route::get('dashboardMap','Api\DashboardApiController@dashboardMap');
Route::get('dashboardMapCrm/{crm_id}', [
	'as' => 'dashboard.dashboardMapCrm',
	'uses' => 'Api\DashboardApiController@dashboardMapCrm'
]);
Route::get('dashboardMapZona/{zona_id}', [
	'as' => 'dashboard.dashboardMapZona',
	'uses' => 'Api\DashboardApiController@dashboardMapZona'
]);
Route::get('dashboardMapPop/{pop_id}', [
	'as' => 'dashboard.dashboardMapPop',
	'uses' => 'Api\DashboardApiController@dashboardMapPop'
]);
 // Pop Data
Route::get('popData', 'Api\DashboardApiController@popData');
Route::get('popDataCrm/{crm_id}', [
	'as' => 'dashboard.popDataCrm',
	'uses' => 'Api\DashboardApiController@popDataCrm'
]);
Route::get('popDataZona/{zona_id}', [
	'as' => 'dashboard.popDataZona',
	'uses' => 'Api\DashboardApiController@popDataZona'
]);

// Technology
Route::get('technologyData', 'Api\DashboardApiController@technologyData');
Route::get('technologyDataCrm/{crm_id}', [
	'as' => 'dashboard.technologyDataCrm',
	'uses' => 'Api\DashboardApiController@technologyDataCrm'
]);
Route::get('technologyDataZona/{zona_id}', [
	'as' => 'dashboard.technologyDataZona',
	'uses' => 'Api\DashboardApiController@technologyDataZona'
]);

// Services
Route::get('serviceData', 'Api\DashboardApiController@serviceData');
Route::get('serviceDataCrm/{crm_id}', [
	'as' => 'dashboard.serviceData',
	'uses' => 'Api\DashboardApiController@serviceDataCrm'
]);
Route::get('serviceDataZona/{zona_id}', [
	'as' => 'dashboard.serviceDataZona',
	'uses' => 'Api\DashboardApiController@serviceDataZona'
]);

// Pop
Route::apiResource('pops','Api\PopController');
Route::get('searchPops/{text}', [
	'as' => 'pops.search',
	'uses' => 'Api\PopController@search'
]);

// Comsite
Route::apiResource('comsites','Api\ComsiteController');
Route::get('searchComsites/{text}', [
	'as' => 'comsites.search',
	'uses' => 'Api\ComsiteController@search'
]);