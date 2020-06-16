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

Route::post('registerRequest', 'Api\AdminController@registerRequest');

Route::middleware('auth:api')->group(function () {

	// Route::get('/user', function (Request $request) {
	// 	return $request->user();
	// });

	// Route::prefix('auth')->group(function () {

	//     Route::post('register', 'AuthController@register');
	//     Route::post('login', 'AuthController@login');
	//     Route::get('refresh', 'AuthController@refresh');

	//     Route::group(['middleware' => 'auth:api'], function(){

	//         Route::get('user', 'AuthController@user');
	//         Route::post('logout', 'AuthController@logout');

	//         // Users
		    // Route::apiResource('users', 'Api\UserController');

	// 	});
	// });


        Route::get('menu', 'Api\MainController@menu');
        
        Route::get('userRequestAlerts','Api\MainController@userRequestAlerts');


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
				Route::get('criticPopList', 'Api\DashboardApiController@criticPopList');
				Route::get('criticPopsMap', 'Api\DashboardApiController@criticPopsMap');

			// Alba Pop Data box
				Route::get('albaPopList', 'Api\DashboardApiController@albaPopList');
				Route::get('albaPopsMap', 'Api\DashboardApiController@albaPopsMap');

			// Electric Lines
				Route::apiResource('electricLines','Api\Infraestructura\ElectricLineController');
				Route::get('electricLinesExport', 'Api\Infraestructura\ElectricLineController@export');
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
				Route::apiResource('junctions','Api\JunctionController');
				Route::put('junctionUpdateTypes/{id}','Api\JunctionController@updateTypes');
				Route::get('junctionTypes','Api\JunctionController@junctionTypes');
				Route::get('junctionConnections','Api\JunctionController@junctionConnections');
				Route::get('popJunctions/{pop_id}','Api\JunctionController@popJunctions');
				Route::post('junction/efizity','Api\JunctionController@syncEfizity');

			// Generator Sets
				Route::apiResource('generatorSets','Api\Infraestructura\GeneratorSetController');
				Route::get('generatorSetsExport', 'Api\Infraestructura\GeneratorSetController@export');
				Route::get('generatorSetData', 'Api\Infraestructura\GeneratorSetController@generatorSetData');
				Route::get('generatorSetDataCrm', 'Api\Infraestructura\GeneratorSetController@generatorSetDataCrm');
				Route::get('generatorSetDataZona', 'Api\Infraestructura\GeneratorSetController@generatorSetDataZona');

			// Power Rectifiers
				Route::apiResource('powerRectifiers','Api\Infraestructura\PowerRectifierController');
				Route::get('powerRectifiersExport', 'Api\Infraestructura\PowerRectifierController@export');
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
				Route::get('airConditionersExport', 'Api\Infraestructura\AirConditionerController@export');
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
				Route::get('verticalStructuresExport', 'Api\Infraestructura\VerticalStructureController@export');
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
				Route::get('infrastructuresExport', 'Api\Infraestructura\InfrastructureController@export');
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

			// Sites Stats Chart
				Route::get('siteStats', 'Api\SiteController@stats')->name('site.stats');

			// Exports
				Route::get('pop/export', 'Api\PopController@export');
		##############################################################################################


		### MAPS ######################################################################
			// Pop info window
				Route::get('popInfo', 'Api\PopController@popInfo')->name('site.stats');
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
			Route::get('filterPops', 'Api\PopController@filterPops');
			Route::get('popsMap', 'Api\PopController@popsMap');
			Route::get('filters', 'Api\PopController@filters');

			Route::get('allPops', 'Api\PopController@allPops');

			// Exports
			// Route::get('pop/exportFilter', 'Api\PopController@exportFilter');
		##############################################################################################


		### CAPACITY PLANNING ######################################################################

			Route::group(['middleware' => 'role:developer,admin,engineer,engineer-admin,super-viewer'], function() {

				Route::apiResource('rooms','Api\RoomController');
				Route::get('capacityProjection','Api\RoomController@projection');

			});
			
		##############################################################################################


		### COMSITE ######################################################################
			Route::apiResource('comsites','Api\ComsiteController');

			Route::get('comsiteLastData', 'Api\ComsiteController@lastData');
		##############################################################################################


		### GESTION AMBIENTAL ######################################################################
			Route::apiResource('eco','Api\EcoController');
			Route::get('ecoZones','Api\EcoController@zones');
			Route::get('ecoStorage/{pop_id}','Api\EcoController@storage');
			Route::get('rcas','Api\EcoController@rcas');
			Route::get('ecoDocs','Api\EcoController@ecoDocs');
			Route::get('rcas/{pop_id}','Api\EcoController@rcasPop');
			Route::post('rcas','Api\EcoController@upload');
			Route::get('storages','Api\EcoController@storages');
			Route::post('newStorage','Api\EcoController@newStorage');
		##############################################################################################


		### POP DETAIL ######################################################################
			Route::apiResource('site','Api\SiteController');
			Route::apiResource('dependences','Api\DependenceController');

			Route::get('popParameters', 'Api\PopController@popParameters');
			Route::get('siteParameters', 'Api\SiteController@siteParameters');

			Route::get('popTechnologies', 'Api\PopController@technologies');

			Route::get('popMenu', 'Api\PopController@popMenu');
			Route::put('vipEntel/{id}', 'Api\PopController@updateVipEntel');

            Route::apiResource('folders', 'Api\FolderController');
			Route::apiResource('files', 'Api\FileController');
            Route::get('viewFile', 'Api\FileController@view');
            Route::get('sideFolders', 'Api\FolderController@sideFolders');
            // Route::get('getFolders', 'Api\FolderController@getFolders');
            Route::get('currentFolder', 'Api\FolderController@currentFolder');
            Route::get('getFiles', 'Api\FileController@getFiles');
            Route::post('createFolder/{id}', 'Api\FolderController@createFolder');
            Route::post('createRootFolder', 'Api\FolderController@createRootFolder');
			

			Route::apiResource('logs','Api\LogController');
		##############################################################################################


		### ADMIN ######################################################################
		Route::group(['middleware' => 'role:developer,admin'], function() {
            Route::apiResource('users','Api\UserController');
            Route::get('userRequests','Api\UserController@userRequests');
            Route::post('newUserAccepted','Api\UserController@newUserAccepted');
            Route::post('newUserRejected','Api\UserController@newUserRejected');


            Route::get('roles','Api\MainController@roles');
			Route::get('tabs', 'Api\AdminController@tabs');

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
			Route::apiResource('popTypes','Api\PopTypeController');
			Route::apiResource('netTypes','Api\NetTypeController');

			Route::get('classificationTypes','Api\SiteController@classificationTypes');
			Route::get('attentionPriorityTypes','Api\SiteController@attentionPriorityTypes');

			// PSG
			Route::apiResource('psgTp','Api\PsgTpController');


			// Route::apiResource('junction','Api\JunctionController');
			
		});
		##############################################################################################

});
