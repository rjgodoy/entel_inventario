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

// Route::middleware('auth:api')->get('/user', function (Request $request) {

	Route::get('menu', 'Api\MainController@menu');


	### DASHBOARD ######################################################################
		// POP DATA
			Route::apiResource('dashboard','Api\DashboardApiController');

			Route::get('lastUpdate', 'Api\DashboardApiController@lastData');
			Route::get('counters', 'Api\DashboardApiController@counters');

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
			Route::get('popData', 'Api\DashboardApiController@popData');
			Route::get('popDataCrm', [
				'as' => 'dashboard.popDataCrm',
				'uses' => 'Api\DashboardApiController@popDataCrm'
			]);
			Route::get('popDataZona', [
				'as' => 'dashboard.popDataZona',
				'uses' => 'Api\DashboardApiController@popDataZona'
			]);

		// Sites Data box
			Route::get('sitesData', 'Api\DashboardApiController@sitesData');
			Route::get('sitesDataCrm', [
				'as' => 'dashboard.sitesDataCrm',
				'uses' => 'Api\DashboardApiController@sitesDataCrm'
			]);
			Route::get('sitesDataZona', [
				'as' => 'dashboard.sitesDataZona',
				'uses' => 'Api\DashboardApiController@sitesDataZona'
			]);

		// Technology box
			Route::get('technologyData', 'Api\DashboardApiController@technologyData');
			Route::get('technologyDataCrm', [
				'as' => 'dashboard.technologyDataCrm',
				'uses' => 'Api\DashboardApiController@technologyDataCrm'
			]);
			Route::get('technologyDataZona', [
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
			Route::get('searchPops', [
				'as' => 'pop.search',
				'uses' => 'Api\PopController@search'
			]);

		// Critic Pop Data box
			Route::get('criticSites', 'Api\DashboardApiController@criticSites');

		// Electric Lines
			Route::apiResource('electricLines','Api\Infraestructura\ElectricLineController');
			Route::get('electricLineData/{core}', [
				'as' => 'electricLine.data',
				'uses' => 'Api\Infraestructura\ElectricLineController@electricLineData'
			]);
			Route::get('electricLineDataCrm/{crm_id}/{core}', [
				'as' => 'electricLineCrm.data',
				'uses' => 'Api\Infraestructura\ElectricLineController@electricLineDataCrm'
			]);
			Route::get('electricLineDataZona/{zona_id}/{core}', [
				'as' => 'electricLineZona.data',
				'uses' => 'Api\Infraestructura\ElectricLineController@electricLineDataZona'
			]);

		// Transformers
			Route::apiResource('transformers','Api\Infraestructura\TransformerController');

		// Clients Connection
			Route::apiResource('clientConnections','Api\ClientConnectionController');

		// Generator Groups
			Route::apiResource('generatorGroups','Api\Infraestructura\GeneratorGroupController');
			Route::get('generatorGroupData/{core}', [
				'as' => 'generatorGroup.data',
				'uses' => 'Api\Infraestructura\GeneratorGroupController@generatorGroupData'
			]);
			Route::get('generatorGroupDataCrm/{crm_id}/{core}', [
				'as' => 'generatorGroupCrm.data',
				'uses' => 'Api\Infraestructura\GeneratorGroupController@generatorGroupDataCrm'
			]);
			Route::get('generatorGroupDataZona/{zona_id}/{core}', [
				'as' => 'generatorGroupZona.data',
				'uses' => 'Api\Infraestructura\GeneratorGroupController@generatorGroupDataZona'
			]);

		// Power Rectifiers
			Route::apiResource('powerRectifiers','Api\Infraestructura\PowerRectifierController');
			Route::get('powerRectifierData/{core}', [
				'as' => 'powerRectifier.data',
				'uses' => 'Api\Infraestructura\PowerRectifierController@powerRectifierData'
			]);
			Route::get('powerRectifierDataCrm/{crm_id}/{core}', [
				'as' => 'powerRectifierCrm.data',
				'uses' => 'Api\Infraestructura\PowerRectifierController@powerRectifierDataCrm'
			]);
			Route::get('powerRectifierDataZona/{zona_id}/{core}', [
				'as' => 'powerRectifierZona.data',
				'uses' => 'Api\Infraestructura\PowerRectifierController@powerRectifierDataZona'
			]);

		// Air Conditioners
			Route::apiResource('airConditioners','Api\Infraestructura\AirConditionerController');
			Route::get('airConditionerData/{core}', [
				'as' => 'airConditioner.data',
				'uses' => 'Api\Infraestructura\AirConditionerController@airConditionerData'
			]);
			Route::get('airConditionerDataCrm/{crm_id}/{core}', [
				'as' => 'airConditionerCrm.data',
				'uses' => 'Api\Infraestructura\AirConditionerController@airConditionerDataCrm'
			]);
			Route::get('airConditionerDataZona/{zona_id}/{core}', [
				'as' => 'airConditionerZona.data',
				'uses' => 'Api\Infraestructura\AirConditionerController@airConditionerDataZona'
			]);

		// Estructuras Verticales
			Route::apiResource('verticalStructures','Api\Infraestructura\VerticalStructureController');
			Route::get('verticalStructureData/{core}', [
				'as' => 'verticalStructure.data',
				'uses' => 'Api\Infraestructura\VerticalStructureController@verticalStructureData'
			]);
			Route::get('verticalStructureDataCrm/{crm_id}/{core}', [
				'as' => 'verticalStructureCrm.data',
				'uses' => 'Api\Infraestructura\VerticalStructureController@verticalStructureDataCrm'
			]);
			Route::get('verticalStructureDataZona/{zona_id}/{core}', [
				'as' => 'verticalStructureZona.data',
				'uses' => 'Api\Infraestructura\VerticalStructureController@verticalStructureDataZona'
			]);

		// Infraestructuras
			Route::apiResource('infrastructures','Api\Infraestructura\InfrastructureController');
			Route::get('infrastructureData/{core}', [
				'as' => 'infrastructure.data',
				'uses' => 'Api\Infraestructura\InfrastructureController@infrastructureData'
			]);
			Route::get('infrastructureDataCrm/{crm_id}/{core}', [
				'as' => 'infrastructureCrm.data',
				'uses' => 'Api\Infraestructura\InfrastructureController@infrastructureDataCrm'
			]);
			Route::get('infrastructureDataZona/{zona_id}/{core}', [
				'as' => 'infrastructureZona.data',
				'uses' => 'Api\Infraestructura\InfrastructureController@infrastructureDataZona'
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

		Route::get('comsiteLastData', 'Api\ComsiteController@lastData');
	##############################################################################################


	### GESTION AMBIENTAL ######################################################################
		Route::apiResource('eco','Api\EcoController');
	##############################################################################################


	### POP DETAIL ######################################################################

		Route::apiResource('dependences','Api\DependenceController');

		Route::get('popTechnologies', 'Api\PopController@technologies');

		Route::get('popMenu', 'Api\PopController@popMenu');

		Route::apiResource('documents', 'Api\DocumentController');

	##############################################################################################


	### ADMIN ######################################################################
		Route::get('adminTabs', 'Api\MainController@adminTabs');

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

		// PSG
		Route::apiResource('psgTp','Api\PsgTpController');


		Route::apiResource('client_connection','Api\ClientConnectionController');
		Route::post('client_connection/efizity','Api\ClientConnectionController@syncEfizity');
	##############################################################################################


    // return $request->user();
// });

