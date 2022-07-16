


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

// APIs iOS
Route::get('all_pops_ios', 'Api\PopController@alliOS');         // All Pops data v1
Route::get('all_pops_ios_v2', 'Api\PopController@alliOSv2');    // All Pops data v2
Route::get('pop_info_ios', 'Api\PopController@popInfoIos');     // Pop detail data
Route::get('all_sites_ios_v2', 'Api\SiteController@allSitesiOSv2');    // All Sites data

// APIs Android
Route::get('all_pops_android', 'Api\PopController@allAndroid');

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('loginapp', 'AuthController@loginapp');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::post('/registerRequest', 'Api\AdminController@registerRequest');

Route::middleware('auth:api')->group(function () {
    // Route::get('dashboard', 'LoginController@index');

    ### SGC-TICKETERA-OFFICETRACK ############################
    Route::get('sgcRequest', 'Api\SgcFilesController@index');
    Route::get('ticketRequest', 'Api\SgcFilesController@getTickets');
    Route::get('ticketFiles', 'Api\SgcFilesController@getFilesTicket');
    Route::get('foldersOfficeTrackRepositorio', 'Api\SgcFilesController@getFoldersOfficeTrack');
    Route::get('getSubFolderRepositorio', 'Api\SgcFilesController@getSubFolderRepositorio');
    Route::get('getFilesSubFolderRepositorio', 'Api\SgcFilesController@getFilesSubFolderRepositorio');
    Route::get('sgcFiles', 'Api\SgcFilesController@getFilesSgc');
   
    Route::get('getFoldersSgcPop','Api\SgcFilesController@getFoldersSgcPop');
    Route::get('filesSgcTicketPop','Api\SgcFilesController@getFilesSgcTicketPop');
    Route::get('getFoldersOfficeTrackPopZone','Api\SgcFilesController@getFoldersOfficeTrackPopZone');



    ######################################################

    ### CAPACITY PLANNING ######################################################################
    Route::group(['middleware' => 'role:developer,admin,engineer,engineer-admin,super-viewer'], function () {
        Route::apiResource('rooms', 'Api\RoomController');
        Route::apiResource('roomCapacities', 'Api\RoomCapacityController');

        Route::get('capacityProjection', 'Api\RoomController@projection');

        Route::post('createRoomDistribution/{room_id}', 'Api\RoomController@createRoomDistribution');
        Route::post('createRoomSurface/{room_id}', 'Api\RoomController@createRoomSurface');
    });
    ##############################################################################################

    ### ADMIN ######################################################################
    Route::group(['middleware' => 'role:developer,admin,monitoring-analyst'], function () {
        Route::apiResource('users', 'Api\UserController');
        Route::apiResource('comunas', 'Api\ComunaController');
        Route::apiResource('popTypes', 'Api\PopTypeController');
        Route::apiResource('netTypes', 'Api\NetTypeController');
        Route::apiResource('psgTp', 'Api\PsgTpController');

        Route::get('userRequests', 'Api\UserController@userRequests');
        Route::apiResource('roles', 'Api\RoleController');
        Route::get('tabs', 'Api\AdminController@tabs');
        Route::get('classificationTypes', 'Api\SiteController@classificationTypes');
        Route::get('attentionPriorityTypes', 'Api\SiteController@attentionPriorityTypes');
        Route::get('stateTypes', 'Api\SiteController@stateTypes');

        Route::post('newUserAccepted', 'Api\UserController@newUserAccepted');
        Route::post('newUserRejected', 'Api\UserController@newUserRejected');

    });
    ##############################################################################################

    Route::apiResource('menus', 'Api\MenuController');
    Route::apiResource('permissions', 'Api\PermissionController');

    ### DASHBOARD ######################################################################
    // POP DATA
    Route::apiResource('dashboard', 'Api\DashboardApiController');
    Route::apiResource('crms', 'Api\CrmController');
    Route::apiResource('zonas', 'Api\ZonaController');

    Route::get('lastUpdate', 'Api\DashboardApiController@lastData');
    Route::get('counters', 'Api\DashboardApiController@counters');

    Route::get('zonasCrm/{crm_id}', 'Api\ZonaController@zonasCrm');

    // Map
    Route::get('dashboardMap', 'Api\DashboardApiController@dashboardMap');

    // Pop Data box
    Route::get('popData', 'Api\DashboardApiController@popData');
    Route::get('popDataCrm', 'Api\DashboardApiController@popDataCrm');
    Route::get('popDataZona', 'Api\DashboardApiController@popDataZona');

    // Sites Data box
    Route::get('sitesData', 'Api\DashboardApiController@sitesData');
    Route::get('sitesDataCrm', 'Api\DashboardApiController@sitesDataCrm');
    Route::get('sitesDataZona', 'Api\DashboardApiController@sitesDataZona');

    // Technology box
    Route::get('technologyData', 'Api\DashboardApiController@technologyData');
    Route::get('technologyDataCrm', 'Api\DashboardApiController@technologyDataCrm');
    Route::get('technologyDataZona', 'Api\DashboardApiController@technologyDataZona');

    // Services box
    Route::get('serviceData/{core}', 'Api\DashboardApiController@serviceData');
    Route::get('serviceDataCrm/{crm_id}/{core}', 'Api\DashboardApiController@serviceDataCrm');
    Route::get('serviceDataZona/{zona_id}/{core}', 'Api\DashboardApiController@serviceDataZona');

    // Infra box
    Route::get('infraData/{core}', 'Api\DashboardApiController@infraData');
    Route::get('infraDataCrm/{crm_id}/{core}', 'Api\DashboardApiController@infraDataCrm');
    Route::get('infraDataZona/{zona_id}/{core}', 'Api\DashboardApiController@infraDataZona');

    // Search
    Route::get('searchPops', 'Api\PopController@search');

    // Critic Pop Data box
    Route::get('criticPopList', 'Api\DashboardApiController@criticPopList');
    Route::get('criticPopsMap', 'Api\DashboardApiController@criticPopsMap');

    // Alba Pop Data box
    Route::get('albaPopList', 'Api\DashboardApiController@albaPopList');
    Route::get('albaPopsMap', 'Api\DashboardApiController@albaPopsMap');

    Route::apiResource('autonomies', 'Api\AutonomyController');
    Route::apiResource('batteryBankAutonomies', 'Api\BatteryBankAutonomyController');

    // Electric Lines
    Route::apiResource('electricCompanies', 'Api\ElectricCompanyController');

    Route::apiResource('electricLines', 'Api\ElectricLineController');
    Route::get('electricLinesExport', 'Api\ElectricLineController@export');
    Route::get('electricLineData/{core}', 'Api\ElectricLineController@electricLineData');
    Route::get('electricLineDataCrm/{crm_id}/{core}', 'Api\ElectricLineController@electricLineDataCrm');
    Route::get('electricLineDataZona/{zona_id}/{core}', 'Api\ElectricLineController@electricLineDataZona');

    // Transformers
    Route::apiResource('transformers', 'Api\TransformerController');

    Route::apiResource('energySystems', 'Api\EnergySystemController');
    Route::apiResource('energyResponsables', 'Api\EnergyResponsableController');

    // Clients Connection
    Route::apiResource('junctions', 'Api\JunctionController');
    Route::get('junctionsExport', 'Api\JunctionController@export');
    Route::get('junctionData/{core}', 'Api\JunctionController@junctionData');
    Route::get('junctionDataCrm/{crm_id}/{core}', 'Api\JunctionController@junctionDataCrm');
    Route::get('junctionDataZona/{zona_id}/{core}', 'Api\JunctionController@junctionDataZona');
    Route::apiResource('junctionTypes', 'Api\JunctionTypeController');
    Route::apiResource('junctionConnections', 'Api\JunctionConnectionController');

    Route::get('popJunctions/{pop_id}', 'Api\JunctionController@popJunctions');

    Route::post('junction/efizity', 'Api\JunctionController@syncEfizity');
    Route::put('junctionUpdateTypes/{id}', 'Api\JunctionController@updateTypes');

    // Solar Panels
    Route::apiResource('solarPanels', 'Api\SolarPanelController');

    // Generator Sets
    Route::apiResource('generatorSets', 'Api\GeneratorSetController');
    Route::get('generatorSetsExport', 'Api\GeneratorSetController@export');
    Route::get('generatorSetData', 'Api\GeneratorSetController@generatorSetData');
    Route::get('generatorSetDataCrm', 'Api\GeneratorSetController@generatorSetDataCrm');
    Route::get('generatorSetDataZona', 'Api\GeneratorSetController@generatorSetDataZona');

    Route::get('generatorsPlatform', 'Api\GeneratorSetController@generatorPlatformData');
    Route::get('generatorStatisticChart/{generator_id}', 'Api\GeneratorSetController@generatorStatisticChart');
    Route::get('generatorValues/{generator_id}', 'Api\GeneratorSetController@generatorValues');
    Route::get('generatorLastDay', 'Api\GeneratorSetController@generatorLastDay');
    Route::get('genplaBrands', 'Api\GeneratorSetController@generatorPlatformBrands');
    Route::get('genplaTypes', 'Api\GeneratorSetController@generatorPlatformTypes');
    Route::get('genplaSubZones', 'Api\GeneratorSetController@generatorPlatformSubZones');
    Route::get('getGeneratorMaintenances/{id}', 'Api\GeneratorSetController@getGeneratorMaintenances');
    Route::get('getStatistics/{id}', 'Api\GeneratorSetController@getStatistics');

    Route::post('createGenValData/{generator_id}', 'Api\GeneratorSetController@createGenValData');
    Route::get('gpDataExport', 'Api\GeneratorSetController@gpDataExport');
    Route::get('gpInventoryExport', 'Api\GeneratorSetController@gpInventoryExport');

    Route::get('doPing', 'Api\GeneratorSetController@doPing');
    Route::apiResource('telecomCompanies', 'Api\TelecomCompanyController');
    Route::apiResource('generatorSetTopologyTypes', 'Api\GeneratorSetTopologyTypeController');
    Route::apiResource('generatorSetLevelTypes', 'Api\GeneratorSetLevelTypeController');
    Route::apiResource('generatorSetResponsableAreas', 'Api\GeneratorSetResponsableAreaController');
    Route::apiResource('generatorSetModels', 'Api\GeneratorSetModelController');

    // Power Rectifiers
    Route::apiResource('planes', 'Api\PlaneController');
    Route::get('planeTypes', 'Api\PlaneController@planeTypes');
    Route::get('planeDelegationTypes/{pop_id}', 'Api\PlaneController@planeDelegationTypes');
    Route::put('roomPlaneDelegationType/{room_id}', 'Api\PlaneController@updateRoomPlaneDelegationType');
    Route::get('roomPlanes/{room_id}', 'Api\PlaneController@roomPlanes');

    Route::apiResource('powerRectifiers', 'Api\PowerRectifierController');
    Route::apiResource('powerRectifierTypes', 'Api\PowerRectifierTypeController');
    Route::apiResource('powerRectifierModes', 'Api\PowerRectifierModeController');

    Route::get('powerRectifiersExport', 'Api\PowerRectifierController@export');
    Route::get('powerRectifierData/{core}', 'Api\PowerRectifierController@powerRectifierData');
    Route::get('powerRectifierDataCrm/{crm_id}/{core}', 'Api\PowerRectifierController@powerRectifierDataCrm');
    Route::get('powerRectifierDataZona/{zona_id}/{core}', 'Api\PowerRectifierController@powerRectifierDataZona');
    Route::get('powerRectifiersWithoutRoom/{pop_id}', 'Api\PowerRectifierController@powerRectifiersWithoutRoom');

    Route::get('powerRectifiersSnmp', 'Api\PowerRectifierController@getSnmpInfo');

    Route::apiResource('batteries', 'Api\BatteryController');
    Route::apiResource('batteryBanks', 'Api\BatteryBankController');
    Route::apiResource('batteryBankBrands', 'Api\BatteryBankBrandController');

    // Air Conditioners
    Route::apiResource('airConditioners', 'Api\AirConditionerController');
    Route::get('airConditionersExport', 'Api\AirConditionerController@export');
    Route::get('airConditionerData/{core}', 'Api\AirConditionerController@airConditionerData');
    Route::get('airConditionerDataCrm/{crm_id}/{core}', 'Api\AirConditionerController@airConditionerDataCrm');
    Route::get('airConditionerDataZona/{zona_id}/{core}', 'Api\AirConditionerController@airConditionerDataZona');
    Route::apiResource('airConditionerCapacities', 'Api\AirConditionerCapacityController');

    // Estructuras Verticales
    Route::apiResource('verticalStructures', 'Api\VerticalStructureController');
    Route::get('verticalStructuresExport', 'Api\VerticalStructureController@export');
    Route::get('verticalStructureData/{core}', 'Api\VerticalStructureController@verticalStructureData');
    Route::get('verticalStructureDataCrm/{crm_id}/{core}', 'Api\VerticalStructureController@verticalStructureDataCrm');
    Route::get('verticalStructureDataZona/{zona_id}/{core}', 'Api\VerticalStructureController@verticalStructureDataZona');

    // Infraestructuras
    Route::apiResource('infrastructures', 'Api\InfrastructureController');
    Route::get('infrastructuresExport', 'Api\InfrastructureController@export');
    Route::get('infrastructureData/{core}', 'Api\InfrastructureController@infrastructureData');
    Route::get('infrastructureDataCrm/{crm_id}/{core}', 'Api\InfrastructureController@infrastructureDataCrm');
    Route::get('infrastructureDataZona/{zona_id}/{core}', 'Api\InfrastructureController@infrastructureDataZona');

    Route::apiResource('fireDetections', 'Api\FireDetectionController');
    Route::apiResource('fireDetectionTypes', 'Api\FireDetectionTypeController');
    Route::apiResource('fireExtinctionTypes', 'Api\FireExtinctionTypeController');

    // Sites Stats Chart
    Route::get('siteStats', 'Api\SiteController@stats')->name('site.stats');

    // Exports
    Route::get('pop/export', 'Api\PopController@export');
    ##############################################################################################

    ### MAPS ######################################################################
    Route::get('popInfo/{id}', 'Api\PopController@popInfo')->name('site.stats');
    ##############################################################################################

    ### POPS ######################################################################
    Route::apiResource('pop', 'Api\PopController');

    // Route::get('popsCrm','Api\PopController@popsCrm');
    // Route::get('popsZona','Api\PopController@popsZona');
    Route::get('filterPops', 'Api\PopController@filterPops');
    Route::get('popsMap', 'Api\PopController@popsMap');
    Route::get('filters', 'Api\PopController@filters');
    Route::get('allPops', 'Api\PopController@allPops');
    ##############################################################################################

    ### SITES ######################################################################
    Route::get('allSites', 'Api\SiteController@allSites');
    ##############################################################################################

    ### COMSITE ######################################################################
    Route::apiResource('comsites', 'Api\ComsiteController');

    Route::get('comsiteLastData', 'Api\ComsiteController@lastData');
    ##############################################################################################
    ### GESTION AMBIENTAL ######################################################################
    Route::apiResource('eco', 'Api\EcoController');
    Route::get('ecoZones', 'Api\EcoController@zones');
    Route::get('ecoStorage/{pop_id}', 'Api\EcoController@storage');
    Route::get('rcas', 'Api\EcoController@rcas');
    Route::get('ecoDocs', 'Api\EcoController@ecoDocs');
    Route::get('rcas/{pop_id}', 'Api\EcoController@rcasPop');
    Route::get('storages', 'Api\EcoController@storages');

    Route::post('rcas', 'Api\EcoController@upload');
    Route::post('newStorage', 'Api\EcoController@newStorage');
    ##############################################################################################
    ### POP DETAIL ######################################################################
    Route::apiResource('site', 'Api\SiteController');
    Route::apiResource('dependences', 'Api\DependenceController');
    Route::apiResource('logs', 'Api\LogController');
    Route::apiResource('folders', 'Api\FolderController');
    Route::apiResource('files', 'Api\FileController');
    Route::put('addDrone', 'Api\FileController@addDrone');
    Route::get('popParameters', 'Api\PopController@popParameters');
    Route::get('siteParameters', 'Api\SiteController@siteParameters');
    Route::get('popTechnologies', 'Api\PopController@technologies');
    Route::get('popMenu', 'Api\PopController@popMenu');
    Route::get('viewFile', 'Api\FileController@view');
    Route::get('sideFolders', 'Api\FolderController@sideFolders');
    // Route::get('getFolders', 'Api\FolderController@getFolders');
    Route::get('currentFolder', 'Api\FolderController@currentFolder');
    Route::get('getFiles', 'Api\FileController@getFiles');
    Route::post('createFolder/{id}', 'Api\FolderController@createFolder');
    Route::post('createRootFolder', 'Api\FolderController@createRootFolder');
    Route::get('vipCategories', 'Api\PopController@getVipCategories');
    Route::put('vipEntel/{id}', 'Api\PopController@updateVipEntel');
    Route::get('iframeLayout/{pop_id}', 'Api\PopController@getIframeLayout');
    Route::apiResource('vandalismRecords', 'Api\VandalismRecordController');
    Route::get('coordinatesCaluculation', 'Api\VandalismRecordController@coordinatesCaluculation');
    Route::get('vandalismRecordsExport', 'Api\VandalismRecordController@export');
    ##############################################################################################
    Route::apiResource('energyEquipmentRevisions', 'Api\EnergyEquipmentRevisionController');
    Route::apiResource('energyEquipmentRevisionTypes', 'Api\EnergyEquipmentRevisionTypeController');
    Route::apiResource('energyEquipmentRevisionItems', 'Api\EnergyEquipmentRevisionItemController');
    Route::apiResource('energyEquipmentRevisionStatuses', 'Api\EnergyEquipmentRevisionStatusController');
    Route::get('energyEquipmentRevisionsExport', 'Api\EnergyEquipmentRevisionController@export');
    Route::get('crmEnergyReportsStatus/{id}', 'Api\EnergyEquipmentRevisionController@getStatusOfCrm');
    Route::get('popFavoriteForUser', 'Api\PopController@popFavorite');
    Route::apiResource('popFavorites', 'Api\PopFavoriteController');

});
