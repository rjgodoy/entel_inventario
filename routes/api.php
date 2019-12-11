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

### DASHBOARD ######################################################################
	// CRMs
		Route::apiResource('crms','Api\CrmController');

	// Zonas
		Route::get('zonasCrm/{crm_id}', [
			'as' => 'zona.zonasCrm',
			'uses' => 'Api\ZonaController@zonasCrm'
		]);

	// Map
		Route::get('dashboardMap','Api\DashboardApiController@dashboardMap');

	// Pop Data box
		Route::get('popData/{core}', 'Api\DashboardApiController@popData');
		Route::get('popDataCrm/{crm_id}/{core}', [
			'as' => 'dashboard.popDataCrm',
			'uses' => 'Api\DashboardApiController@popDataCrm'
		]);
		Route::get('popDataZona/{zona_id}/{core}', [
			'as' => 'dashboard.popDataZona',
			'uses' => 'Api\DashboardApiController@popDataZona'
		]);

	// Technology box
		Route::get('technologyData/{core}', 'Api\DashboardApiController@technologyData');
		Route::get('technologyDataCrm/{crm_id}/{core}', [
			'as' => 'dashboard.technologyDataCrm',
			'uses' => 'Api\DashboardApiController@technologyDataCrm'
		]);
		Route::get('technologyDataZona/{zona_id}/{core}', [
			'as' => 'dashboard.technologyDataZona',
			'uses' => 'Api\DashboardApiController@technologyDataZona'
		]);

	// Services box
		Route::get('serviceData/{core}', 'Api\DashboardApiController@serviceData');
		Route::get('serviceDataCrm/{crm_id}/{core}', [
			'as' => 'dashboard.serviceData',
			'uses' => 'Api\DashboardApiController@serviceDataCrm'
		]);
		Route::get('serviceDataZona/{zona_id}/{core}', [
			'as' => 'dashboard.serviceDataZona',
			'uses' => 'Api\DashboardApiController@serviceDataZona'
		]);

	// Infra box
		Route::get('infraData/{core}', 'Api\DashboardApiController@infraData');
		Route::get('infraDataCrm/{crm_id}/{core}', [
			'as' => 'dashboard.infraData',
			'uses' => 'Api\DashboardApiController@infraDataCrm'
		]);
		Route::get('infraDataZona/{zona_id}/{core}', [
			'as' => 'dashboard.infraDataZona',
			'uses' => 'Api\DashboardApiController@infraDataZona'
		]);

	// Search
		Route::get('searchPops/{text}/{core}', [
			'as' => 'pop.search',
			'uses' => 'Api\PopController@searchPops'
		]);
		Route::get('searchPopsCrm/{text}/{crm_id}/{core}', [
			'as' => 'pop.searchCrm',
			'uses' => 'Api\PopController@searchPopsCrm'
		]);
		Route::get('searchPopsZona/{text}/{zona_id}/{core}', [
			'as' => 'pop.searchZona',
			'uses' => 'Api\PopController@searchPopsZona'
		]);

	

	// Electric Lines
		Route::apiResource('electricLines','Api\ElectricLineController');
		Route::get('electricLineData/{core}', [
			'as' => 'electricLine.data',
			'uses' => 'Api\ElectricLineController@electricLineData'
		]);
		Route::get('electricLineDataCrm/{crm_id}/{core}', [
			'as' => 'electricLineCrm.data',
			'uses' => 'Api\ElectricLineController@electricLineDataCrm'
		]);
		Route::get('electricLineDataZona/{zona_id}/{core}', [
			'as' => 'electricLineZona.data',
			'uses' => 'Api\ElectricLineController@electricLineDataZona'
		]);

	// Transformers
		Route::apiResource('transformers','Api\TransformerController');

	// Connection Clients
		Route::apiResource('connectionClients','Api\ConnectionClientController');

	// Generator Groups
		Route::get('generatorGroupData/{core}', [
			'as' => 'generatorGroup.data',
			'uses' => 'Api\GeneratorGroupController@generatorGroupData'
		]);
		Route::get('generatorGroupDataCrm/{crm_id}/{core}', [
			'as' => 'generatorGroupCrm.data',
			'uses' => 'Api\GeneratorGroupController@generatorGroupDataCrm'
		]);
		Route::get('generatorGroupDataZona/{zona_id}/{core}', [
			'as' => 'generatorGroupZona.data',
			'uses' => 'Api\GeneratorGroupController@generatorGroupDataZona'
		]);

	// Power Rectifiers
		Route::get('powerRectifierData/{core}', [
			'as' => 'powerRectifier.data',
			'uses' => 'Api\PowerRectifierController@powerRectifierData'
		]);
		Route::get('powerRectifierDataCrm/{crm_id}/{core}', [
			'as' => 'powerRectifierCrm.data',
			'uses' => 'Api\PowerRectifierController@powerRectifierDataCrm'
		]);
		Route::get('powerRectifierDataZona/{zona_id}/{core}', [
			'as' => 'powerRectifierZona.data',
			'uses' => 'Api\PowerRectifierController@powerRectifierDataZona'
		]);
##############################################################################################

### POPS ######################################################################

	Route::apiResource('pop','Api\PopController');
	Route::get('popsCrm', [
		'as' => 'pop.indexCrm',
		'uses' => 'Api\PopController@popsCrm'
	]);
	Route::get('popsZona', [
		'as' => 'pop.indexZona',
		'uses' => 'Api\PopController@popsZona'
	]);

	// Filter in POPs module
	Route::get('filterPops', [
		'as' => 'pop.filter',
		'uses' => 'Api\PopController@filterPops'
	]);
	Route::get('filterPopsCrm', [
		'as' => 'pop.filterCrm',
		'uses' => 'Api\PopController@filterPopsCrm'
	]);
	Route::get('filterPopsZona', [
		'as' => 'pop.filterZona',
		'uses' => 'Api\PopController@filterPopsZona'
	]);
##############################################################################################

### COMSITE ######################################################################
	Route::apiResource('comsites','Api\ComsiteController');
	Route::get('searchComsites', [
		'as' => 'comsites.search',
		'uses' => 'Api\ComsiteController@search'
	]);
##############################################################################################

### ADMIN ######################################################################
	Route::apiResource('tempSgcPops','Api\TempSgcPopController');
	Route::get('popsExisting', [
		'as' => 'tempSgcPops.popsExisting',
		'uses' => 'Api\TempSgcPopController@existing'
	]);
	Route::get('popsToAdd', [
		'as' => 'tempSgcPops.popsToAdd',
		'uses' => 'Api\TempSgcPopController@toAdd'
	]);

	Route::get('searchPopsEdicion/{text}/{core}', [
		'as' => 'pop.searchEdicion',
		'uses' => 'Api\PopController@searchPopsEdicion'
	]);

	Route::apiResource('comunas','Api\ComunaController');

##############################################################################################

### POP DETAIL ######################################################################

	Route::apiResource('dependence','Api\DependenceController');

##############################################################################################