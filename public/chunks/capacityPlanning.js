(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacityPlanning"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePagination: function VuePagination() {
      return __webpack_require__.e(/*! import() | chunks/helpers/vuePagination */ "chunks/helpers/vuePagination").then(__webpack_require__.bind(null, /*! ../helpers/VuePagination */ "./resources/js/components/helpers/VuePagination.vue"));
    },
    RoomLights: function RoomLights() {
      return __webpack_require__.e(/*! import() | chunks/capacity/roomLights */ "chunks/capacity/roomLights").then(__webpack_require__.bind(null, /*! ./RoomLights */ "./resources/js/components/capacity/RoomLights.vue"));
    },
    ModalRoom: function ModalRoom() {
      return __webpack_require__.e(/*! import() | chunks/capacity/modals/modalRoom */ "chunks/capacity/modals/modalRoom").then(__webpack_require__.bind(null, /*! ./modals/ModalRoom */ "./resources/js/components/capacity/modals/ModalRoom.vue"));
    } // RoomsTable: () => import(/* webpackChunkName: "chunks/capacity/roomsTable"*/'./RoomsTable')

  },
  props: ['user', 'user_permissions'],
  data: function data() {
    return {
      crms: Array,
      roomsData: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      },
      searchText: '',
      currentCrm: 0
    };
  },
  watch: {
    currentCrm: function currentCrm(newValue) {
      this.getRoomsData();
    }
  },
  mounted: function mounted() {
    this.getCrms();
    this.getRoomsData();
  },
  methods: {
    getCrms: function getCrms() {
      var _this = this;

      axios.get("/api/crms").then(function (response) {
        _this.crms = response.data.crms;
      });
    },
    orderedRooms: function orderedRooms(pop) {
      return _.orderBy(pop.rooms, 'order');
    },
    getRoomsData: function getRoomsData() {
      var _this2 = this;

      var params = {
        'page': this.roomsData.current_page,
        'crm_id': this.currentCrm,
        'text': this.searchText != '' ? this.searchText : 0
      };
      axios.get('/api/rooms', {
        params: params
      }).then(function (response) {
        _this2.roomsData = response.data;
      });
    },
    clearSearch: function clearSearch() {
      this.searchText = '';
      this.getRoomsData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");


var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrafficLight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartLine"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileInvoice"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBezierCurve"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalculator"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFolderOpen"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Capacity: function Capacity() {
      return Promise.all(/*! import() | chunks/capacity/capacity */[__webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/capacity/modals/projection~c~cfd7d504"), __webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/capacity/modals/projection~c~88966b2f"), __webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/pop/infrastructure/SpaceChar~ff23a29a"), __webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity"), __webpack_require__.e("chunks/capacity/capacity~chunks/capacity/modals/capacity"), __webpack_require__.e("chunks/capacity/capacity")]).then(__webpack_require__.bind(null, /*! ./Capacity */ "./resources/js/components/capacity/Capacity.vue"));
    },
    Projection: function Projection() {
      return Promise.all(/*! import() | chunks/capacity/projection */[__webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/capacity/modals/projection~c~cfd7d504"), __webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/capacity/modals/projection~c~88966b2f"), __webpack_require__.e("chunks/capacity/projection")]).then(__webpack_require__.bind(null, /*! ./Projection */ "./resources/js/components/capacity/Projection.vue"));
    },
    // Requests: () => import(/* webpackChunkName: "chunks/capacity/requests"*/'./Requests'),
    // Calculator: () => import(/* webpackChunkName: "chunks/capacity/calculator"*/'./Calculator'),
    Layout: function Layout() {
      return __webpack_require__.e(/*! import() | chunks/capacity/layout */ "chunks/capacity/layout").then(__webpack_require__.bind(null, /*! ./Layout */ "./resources/js/components/capacity/Layout.vue"));
    },
    Documents: function Documents() {
      return __webpack_require__.e(/*! import() | chunks/pop/documents/documents */ "chunks/pop/documents/documents").then(__webpack_require__.bind(null, /*! ../pop/documents/Documents */ "./resources/js/components/pop/documents/Documents.vue"));
    },
    ModalNewRoom: function ModalNewRoom() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/newRoom */ "chunks/pop/layout/modals/newRoom").then(__webpack_require__.bind(null, /*! ../pop/layout/modals/ModalNewRoom */ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      room: '',
      currentTab: 'layout',
      tabs: [{
        "title": "Capacity",
        "component": "capacity",
        "icon": "traffic-light",
        "icon_type": "fas"
      }, {
        "title": "Proyección",
        "component": "projection",
        "icon": "chart-line",
        "icon_type": "fas"
      }, // {
      //     "title": "Reserva",
      //     "component": "requests",
      //     "icon": "file-invoice",
      //     "icon_type": "fas"
      // },
      {
        "title": "Layout",
        "component": "layout",
        "icon": "bezier-curve",
        "icon_type": "fas"
      }, // {
      //     "title": "Calculador",
      //     "component": "calculator",
      //     "icon": "calculator",
      //     "icon_type": "fas"
      // },
      {
        "title": "Documentos",
        "component": "documents",
        "icon": "folder-open",
        "icon_type": "far"
      }],
      junctions: Object,
      generatorSets: Object,
      planes: Array,
      powerRectifiers: Array,
      airConditioners: Array,
      planeSelected: null,
      powerRectifierSelected: null,
      airConditionerSelected: null,
      canEditPowerRectifiers: null,
      canEditAirConditioners: null,
      isPowerRectifierModalActive: false,
      isAirConditionerModalActive: false,
      isDistributionModalActive: false,
      isSurfaceModalActive: false,
      isNewRoomModalActive: false,
      totalPRCapacity: 0,
      usedPRCapacity: 0,
      availablePRCapacity: 0,
      totalBatteryCapacity: 0,
      usedBatteryCapacity: 0,
      availableBatteryCapacity: 0,
      planeTypeId: 0,
      planeTypes: []
    };
  },
  computed: {
    capacityData: function capacityData() {
      return [{
        "title": "Empalme",
        "total": this.totalJunctionsCapacity,
        "used": this.totalUsedJunctionsCapacity,
        "available": this.totalAvailableJunctionsCapacity,
        "isLoading": this.junctions.length && this.totalJunctionsCapacity == 0 ? true : false,
        "thresholds": this.thresholds.junctions
      }, {
        "title": "Grupo Electrógeno",
        "total": this.totalGeneratorSetsCapacity,
        "used": this.totalGeneratorSetsUsedCapacity,
        "available": this.totalAvailableGeneratorSetsCapacity,
        "isLoading": this.totalGeneratorSetsCapacity || !this.generatorSets.length == 0 ? false : true,
        "thresholds": this.thresholds.generatorSets
      }, {
        "title": "Plantas Rectificadoras",
        "total": this.totalCapacityRoom,
        "used": this.usedCapacityRoom,
        "available": this.availableCapacityRoom(this.room),
        "isLoading": this.totalCapacityRoom || !this.powerRectifiersInRoom(this.room) ? false : true,
        "thresholds": this.thresholds.powerRectifiers
      }, {
        "title": "Baterías",
        "total": this.totalCapacityBatteries(this.room),
        "used": this.usedCapacityBatteries(this.room),
        "available": this.availableCapacityBatteries(this.room),
        "isLoading": this.totalCapacityBatteries(this.room) || !this.batteryBanksInRoom(this.room) ? false : true,
        "thresholds": this.thresholds.batteries
      }, {
        "title": "Clima",
        "total": this.totalJunctionsCapacity,
        "used": this.totalUsedJunctionsCapacity,
        "available": this.totalAvailableJunctionsCapacity,
        "isLoading": this.junctions.length && this.totalJunctionsCapacity == 0 ? true : false,
        "thresholds": this.thresholds.climate
      }, {
        "title": "Distribución",
        "total": this.totalDistributionCapacity,
        "used": this.usedDistributionCapacity,
        "available": this.availableDistributionCapacity,
        "isLoading": this.totalDistributionCapacity && !this.usedDistributionCapacity ? true : false,
        "thresholds": this.thresholds.disponibility
      }, {
        "title": "Espacio",
        "total": this.totalSurface,
        "used": this.usedSurface,
        "available": this.availableSurface,
        "isLoading": this.totalSurface && !this.usedSurface ? true : false,
        "thresholds": this.thresholds.surface
      }];
    },
    pop: function pop() {
      return this.room.pop;
    },
    currentTabComponent: function currentTabComponent() {
      return this.currentTab;
    },
    // Junctions
    responsable: function responsable() {
      var area = 'Sin Información';
      var id = null; // if (this.generatorSets.length) {
      //     Object.keys(this.generatorSets).forEach(element => {
      //         if(this.generatorSets[element].current_generator_responsable) {
      //             switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
      //                 case 1:
      //                     id = 1
      //                     area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 case 2:
      //                     id = id == 1 ? id : 2
      //                     arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 case 3:
      //                     id = id == 1 || id == 2 ? id : 3
      //                     area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 default:
      //                     break
      //             }
      //         }
      //     })
      // }

      return {
        'id': id,
        'area': area
      };
    },
    averageConsumptionPerPhotovoltaicGroup: function averageConsumptionPerPhotovoltaicGroup() {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      return 0;
    },
    totalJunctionsCapacity: function totalJunctionsCapacity() {
      var _this = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + (_this.powerA(_this.junctions[element]) + _this.powerB(_this.junctions[element])) * _this.junctions[element].use_factor + _this.photovoltaicCapacity(_this.junctions[element]);
        });
      }

      return sum;
    },
    withoutBatteriesCapacity: function withoutBatteriesCapacity() {
      var _this2 = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + _this2.powerUsedA(_this2.junctions[element]) + _this2.powerUsedB(_this2.junctions[element]) + _this2.averageConsumptionPerPhotovoltaicGroup;
        });
      }

      return sum;
    },
    withoutBatteriesDisponibility: function withoutBatteriesDisponibility() {
      return this.totalJunctionsCapacity - this.withoutBatteriesCapacity;
    },
    batteriesRecharge: function batteriesRecharge() {
      var _this3 = this;

      var total = 0;

      if (this.pop) {
        Object.keys(this.pop.rooms).forEach(function (element) {
          var room = _this3.pop.rooms[element];

          if (room.power_rectifiers.length) {
            Object.keys(room.planes).forEach(function (item) {
              var roomPlane = room.planes[item];
              total += _this3.batteryRechargePower(roomPlane);
            });
          }
        });
      }

      return total;
    },
    totalUsedJunctionsCapacity: function totalUsedJunctionsCapacity() {
      var _this4 = this;

      var punctualConsumption = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (_this4.junctions[element].latest_measurement) {
            punctualConsumption += _this4.junctions[element].latest_measurement.punctual_consumption;
          }
        });
      }

      return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption;
    },
    totalAvailableJunctionsCapacity: function totalAvailableJunctionsCapacity() {
      return this.totalJunctionsCapacity - this.totalUsedJunctionsCapacity;
    },
    usagePercent: function usagePercent() {
      return this.totalJunctionsCapacity != 0 ? this.totalUsedJunctionsCapacity / this.totalJunctionsCapacity : 0;
    },
    // Generator Sets
    generatorSetsResponsable: function generatorSetsResponsable() {
      var _this5 = this;

      var area = 'Sin Información';
      var id = null;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (_this5.generatorSets[element].current_generator_responsable) {
            switch (_this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
              case 1:
                id = 1;
                area = _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 2:
                id = id == 1 ? id : 2;
                arae = id == 1 ? area : _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 3:
                id = id == 1 || id == 2 ? id : 3;
                area = id == 1 || id == 2 ? area : _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              default:
                break;
            }
          }
        });
      }

      return {
        'id': id,
        'area': area
      };
    },
    totalGeneratorSetsCapacityA: function totalGeneratorSetsCapacityA() {
      var _this6 = this;

      var sum = 0;
      var res = 0;
      var div = 1;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this6.generatorSets[element].current_generator_set_capacity ? _this6.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this6.generatorSets[element].generator_set_topology_type_id) {
            case 1:
              sum = sum + capacity;
              break;

            case 2:
              sum = sum + capacity;
              res = res + capacity;
              div = div++;
              break;

            case 3:
              sum = _this6.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum - res / div;
    },
    totalGeneratorSetsCapacityB: function totalGeneratorSetsCapacityB() {
      var _this7 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this7.generatorSets[element].current_generator_set_capacity ? _this7.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this7.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this7.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetsCapacity: function totalGeneratorSetsCapacity() {
      var _this8 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this8.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this8.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total;
        });
      }

      return total;
    },
    usedGeneratorSetsCapacityA: function usedGeneratorSetsCapacityA() {
      var _this9 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this9.generatorSets[element].current_generator_set_capacity ? _this9.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this9.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
              sum = sum + usedCapacity;
              break;

            case 3:
              sum = _this9.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum;
    },
    usedGeneratorSetsCapacityB: function usedGeneratorSetsCapacityB() {
      var _this10 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this10.generatorSets[element].current_generator_set_capacity ? _this10.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this10.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this10.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetsUsedCapacity: function totalGeneratorSetsUsedCapacity() {
      var _this11 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this11.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this11.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total;
        });
      }

      return total;
    },
    availableGeneratorSetsCapacityA: function availableGeneratorSetsCapacityA() {
      return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA;
    },
    availableGeneratorSetsCapacityB: function availableGeneratorSetsCapacityB() {
      return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB;
    },
    totalAvailableGeneratorSetsCapacity: function totalAvailableGeneratorSetsCapacity() {
      var _this12 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.availableGeneratorSetsCapacityA + this.availableGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this12.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this12.generatorSets[0].current_generator_set_corp_disponibility.available_capacity : total;
        });
      }

      return total;
    },
    // Power Rectifiers
    planeType: function planeType() {
      var _this13 = this;

      var type = 'Sin Información';

      switch (this.planeTypeId) {
        case 1:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 1 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 2:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 2 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 3:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 3 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 4:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 4 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 5:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 5 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 6:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 6 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 7:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 7 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        case 8:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this13.planeTypes[item].id == 8 && type == 'Sin Información' ? _this13.planeTypes[item].type : type;
          });
          break;

        default:
          break;
      }

      return type;
    },
    totalCapacityRoom: function totalCapacityRoom() {
      var _this14 = this;

      var realRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this14.planes[element];
        realRoomCapacity += _this14.realPlaneCapacity(plane);
      });
      this.totalPRCapacity = realRoomCapacity;
      return realRoomCapacity;
    },
    usedCapacityRoom: function usedCapacityRoom() {
      var _this15 = this;

      var usedRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this15.planes[element];
        usedRoomCapacity += _this15.totalPower(plane);
      });
      this.usedPRCapacity = usedRoomCapacity;
      return usedRoomCapacity;
    },
    // Distribution
    totalDistributionCapacity: function totalDistributionCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0;
    },
    usedDistributionCapacity: function usedDistributionCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0;
    },
    availableDistributionCapacity: function availableDistributionCapacity() {
      return this.totalDistributionCapacity - this.usedDistributionCapacity;
    },
    // Surface
    totalSurface: function totalSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0;
    },
    usedSurface: function usedSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0;
    },
    availableSurface: function availableSurface() {
      return this.totalSurface - this.usedSurface;
    },
    // detectionType() {
    //     return this.room.fire_detections ? this.room.fire_detections[0].fire_detection_type.type : 'No tiene'
    // },
    // extinctionType() {
    //     return this.room.fire_detections && this.room.fire_detections[0].fire_extinction_type ? this.room.fire_detections[0].fire_extinction_type.type : 'No tiene'
    // },
    // canEditDistribution() {
    //     return this.canEditAirConditioners && this.canEditPowerRectifiers
    // },
    // canEditSurface() {
    //     return this.canEditAirConditioners && this.canEditPowerRectifiers
    // },
    // powerRectifierData() {
    //     return {
    //         'totalPRCapacity': this.totalPRCapacity,
    //         'usedPRCapacity': this.usedPRCapacity,
    //         'availablePRCapacity': this.availablePRCapacity
    //     }
    // },
    // batteryData() {
    //     return {
    //         'totalBatteryCapacity': this.totalBatteryCapacity,
    //         'usedBatteryCapacity': this.usedBatteryCapacity,
    //         'availableBatteryCapacity': this.availableBatteryCapacity
    //     }
    // },
    popAutonomy: function popAutonomy() {
      return this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0;
    },
    thresholds: function thresholds() {
      return {
        'junctions': {
          'critical': 5,
          'warning': 15
        },
        'generatorSets': {
          'critical': 5,
          'warning': 15
        },
        'powerRectifiers': {
          'critical': 5,
          'warning': 15
        },
        'batteries': {
          'critical': 5,
          'warning': 15
        },
        'climate': {
          'critical': 5,
          'warning': 15
        },
        'disponibility': {
          'critical': 5,
          'warning': 15
        },
        'surface': {
          'critical': 5,
          'warning': 15
        }
      };
    },
    popRooms: function popRooms() {
      var _this16 = this;

      var rooms = [];

      if (this.pop) {
        Object.keys(this.pop.rooms).forEach(function (element) {
          rooms.push(_this16.pop.rooms[element].id);
          rooms.sort(function (a, b) {
            if (a > b) {
              return 1;
            }

            if (a < b) {
              return -1;
            } // a must be equal to b


            return 0;
          });
        });
      }

      return rooms;
    },
    previewRoom: function previewRoom() {
      var id = 0;
      var name = '';

      if (this.popRooms) {
        var res = this.popRooms.indexOf(this.room.id);

        if (res - 1 >= 0) {
          id = this.popRooms[res - 1];
          name = this.roomName(id);
        }
      }

      return {
        'id': id,
        'name': name
      };
    },
    nextRoom: function nextRoom() {
      var id = 0;
      var name = '';

      if (this.popRooms) {
        var res = this.popRooms.indexOf(this.room.id);

        if (res + 1 <= this.popRooms.length - 1) {
          id = this.popRooms[res + 1];
          name = this.roomName(id);
        }
      }

      return {
        'id': id,
        'name': name
      };
    }
  },
  watch: {
    planeTypeId: function planeTypeId(value) {},
    isEditMode: function isEditMode(val) {
      if (val == false) {
        this.getPlanes(); // this.$eventBus.$emit('room-data')
      }
    }
  },
  created: function created() {
    this.$eventBus.$on('room-data', this.getRoomData);
    this.$eventBus.$on('room-distribution', this.getRoomData);
    this.$eventBus.$on('room-surface', this.getRoomData);
    this.$eventBus.$on('room-security', this.getRoomData);
    this.$eventBus.$on('change-room', this.getRoomData);
    this.$eventBus.$on('new-power-rectifier', this.getRoomData);
    this.$eventBus.$on('new-junction', this.getRoomData);
    this.$eventBus.$on('power-rectifier-updated', this.getRoomData);
    this.$eventBus.$on('new-plane-updated', this.getRoomData);
    this.$eventBus.$on('new-battery-bank', this.getRoomData);
    this.$eventBus.$on('new-room', this.getRoomData);
  },
  mounted: function mounted() {
    this.getRoomData();
  },
  methods: (_methods = {
    getRoomData: function getRoomData() {
      var _this17 = this;

      axios.get("/api/rooms/".concat(this.$route.params.id)).then(function (response) {
        _this17.room = response.data.room;
        _this17.planeTypeId = _this17.room.current_room_delegation ? _this17.room.current_room_delegation.plane_delegation_type_id : null;

        _this17.getJunctions();

        _this17.getGeneratorSets();

        _this17.getPlaneTypes();

        _this17.getAirConditioners();

        _this17.getPlanes();
      });
    },
    // Junctions
    getJunctions: function () {
      var _getJunctions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this18 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/popJunctions/".concat(this.pop.id)).then(function (response) {
                  _this18.junctions = response.data.junctions;
                  _this18.canEditJunctions = response.data.can;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Empalmes: ' + error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getJunctions() {
        return _getJunctions.apply(this, arguments);
      }

      return getJunctions;
    }(),
    powerA: function powerA(junction) {
      var latestProtectionRA = junction.latest_protection ? junction.latest_protection.regulada_a : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRA * latestMeasureRA_V / 1000;
      } else {
        return latestProtectionRA * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerB: function powerB(junction) {
      var latestProtectionRB = junction.latest_protection ? junction.latest_protection.regulada_b : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRB * 220 / 1000;
      } else {
        return latestProtectionRB * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerUsedA: function powerUsedA(junction) {
      var latestMeasureRA_A = junction.latest_measurement ? junction.latest_measurement.r_a_amp_measure : 0;
      var latestMeasureSA_A = junction.latest_measurement ? junction.latest_measurement.s_a_amp_measure : 0;
      var latestMeasureTA_A = junction.latest_measurement ? junction.latest_measurement.t_a_amp_measure : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;
      var latestMeasureSA_V = junction.latest_measurement ? junction.latest_measurement.s_a_volt_measure : 0;
      var latestMeasureTA_V = junction.latest_measurement ? junction.latest_measurement.t_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRA_A * latestMeasureRA_V / 1000;
      } else {
        return (latestMeasureRA_A * latestMeasureRA_V + latestMeasureSA_A * latestMeasureSA_V + latestMeasureTA_A * latestMeasureTA_V) / 1000;
      }
    },
    powerUsedB: function powerUsedB(junction) {
      var latestMeasureRB_A = junction.latest_measurement ? junction.latest_measurement.r_b_amp_measure : 0;
      var latestMeasureSB_A = junction.latest_measurement ? junction.latest_measurement.s_b_amp_measure : 0;
      var latestMeasureTB_A = junction.latest_measurement ? junction.latest_measurement.t_b_amp_measure : 0;
      var latestMeasureRB_V = junction.latest_measurement ? junction.latest_measurement.r_b_volt_measure : 0;
      var latestMeasureSB_V = junction.latest_measurement ? junction.latest_measurement.s_b_volt_measure : 0;
      var latestMeasureTB_V = junction.latest_measurement ? junction.latest_measurement.t_b_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRB_A * latestMeasureRB_V / 1000;
      } else {
        return (latestMeasureRB_A * latestMeasureRB_V + latestMeasureSB_A * latestMeasureSB_V + latestMeasureTB_A * latestMeasureTB_V) / 1000;
      }
    },
    photovoltaicCapacity: function photovoltaicCapacity(junction) {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      var capacity = 0;

      if (junction.latest_solar_panel) {
        var solarPanelGroupQuantity = 6;

        for (var i = 1; i < solarPanelGroupQuantity; i++) {
          capacity = capacity + junction.latest_solar_panel['unit_capacity_group_' + i] * junction.latest_solar_panel['quantity_group_' + i];
        }
      }

      return capacity;
    },
    batteryRechargePower: function batteryRechargePower(plane) {
      return this.rechargeCurrent(plane) * plane.float_tension / 1000;
    },
    rechargeCurrent: function rechargeCurrent(plane) {
      var current = 0;
      Object.keys(plane.battery_banks).forEach(function (item) {
        current += plane.battery_banks[item].capacity;
      });
      return plane.recharge_factor * current;
    },
    powerRectifiersInRoom: function powerRectifiersInRoom(room) {
      var powerRectifiersInRoom = 0;

      if (room.planes) {
        Object.keys(room.planes).forEach(function (element) {
          var plane = room.planes[element];
          powerRectifiersInRoom += plane.power_rectifiers.length;
        });
      }

      return powerRectifiersInRoom;
    },
    // Generator Sets
    getGeneratorSets: function () {
      var _getGeneratorSets = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this19 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/generatorSets/".concat(this.pop.id)).then(function (response) {
                  _this19.generatorSets = response.data.generatorSets;
                  _this19.canEditGeneratorGroups = response.data.can;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGeneratorSets() {
        return _getGeneratorSets.apply(this, arguments);
      }

      return getGeneratorSets;
    }(),
    // Power Rectifiers
    getPlaneTypes: function getPlaneTypes() {
      var _this20 = this;

      axios.get("/api/planeTypes").then(function (response) {
        _this20.planeTypes = response.data.planes;
      });
    },
    hasPlanes: function hasPlanes(room) {
      var _this21 = this;

      var bool = false;

      if (this.planes) {
        Object.keys(this.planes).forEach(function (element) {
          var plane = _this21.planes[element];
          Object.keys(plane.rooms).forEach(function (item) {
            bool = !bool ? plane.rooms[item].id == room.id : bool;
          });
        });
      }

      return bool;
    },
    powerRectifierBelongsToPlane: function powerRectifierBelongsToPlane(powerRectifier, plane) {
      var bool = false; // if (plane.power_rectifiers) {

      Object.keys(plane.power_rectifiers).forEach(function (element) {
        var pr = plane.power_rectifiers[element];
        bool = pr.id == powerRectifier.id && !bool ? true : bool;
      }); // }

      return bool;
    },
    hasAirConditioners: function hasAirConditioners(room) {
      var _this22 = this;

      var bool = false;

      if (this.airConditioners) {
        Object.keys(this.airConditioners).forEach(function (element) {
          bool = !bool ? _this22.airConditioners[element].room_id == room.id : bool;
        });
      }

      return bool;
    },
    getPlanes: function getPlanes() {
      var _this23 = this;

      axios.get("/api/roomPlanes/".concat(this.room.id, "?plane_delegation_type_id=").concat(this.planeTypeId)).then(function (response) {
        _this23.planes = response.data.planes;
        _this23.canEditPowerRectifiers = response.data.can ? response.data.can : false;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getAirConditioners: function getAirConditioners() {
      var _this24 = this;

      axios.get("/api/airConditioners/".concat(this.pop.id)).then(function (response) {
        // console.log(response.data)
        _this24.airConditioners = response.data.airConditioner;
        _this24.canEditAirConditioners = response.data.can;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    nominalCapacity: function nominalCapacity(plane) {
      var capacity = 0;
      Object.keys(plane.power_rectifiers).forEach(function (element) {
        capacity += plane.power_rectifiers[element].capacity;
      });
      return capacity;
    },
    installedCapacity: function installedCapacity(plane) {
      var capacity = 0;
      Object.keys(plane.power_rectifiers).forEach(function (element) {
        var pr = plane.power_rectifiers[element];
        Object.keys(pr.power_rectifier_modules).forEach(function (item) {
          capacity += pr.power_rectifier_modules[item].capacity;
        });
      });
      return capacity;
    },
    chargeRealPower: function chargeRealPower(plane) {
      return plane.float_tension * plane.current / 1000;
    }
  }, _defineProperty(_methods, "rechargeCurrent", function rechargeCurrent(plane) {
    var current = 0;
    Object.keys(plane.battery_banks).forEach(function (item) {
      current += plane.battery_banks[item].capacity;
    });
    return plane.recharge_factor * current;
  }), _defineProperty(_methods, "batteryRechargePower", function batteryRechargePower(plane) {
    return this.rechargeCurrent(plane) * plane.float_tension / 1000;
  }), _defineProperty(_methods, "totalCurrent", function totalCurrent(plane) {
    return plane.current + this.rechargeCurrent(plane);
  }), _defineProperty(_methods, "totalPower", function totalPower(plane) {
    return this.chargeRealPower(plane) + this.batteryRechargePower(plane);
  }), _defineProperty(_methods, "realPlaneCapacity", function realPlaneCapacity(plane) {
    var currentRedundantModules = plane.current_redundant_modules;
    var currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0;
    return this.installedCapacity(plane) - currentRedundantModulesCapacity;
  }), _defineProperty(_methods, "availablePlaneCapacity", function availablePlaneCapacity(plane) {
    return this.realPlaneCapacity(plane) - this.totalPower(plane);
  }), _defineProperty(_methods, "usePercentPlane", function usePercentPlane(plane) {
    return this.totalPower(plane) / this.realPlaneCapacity(plane);
  }), _defineProperty(_methods, "batteryTotalCapacityPlane", function batteryTotalCapacityPlane(plane) {
    var capacity = 0;
    Object.keys(plane.battery_banks).forEach(function (item) {
      capacity += plane.battery_banks[item].capacity;
    });
    return capacity * 48 / 1000 / this.popAutonomy;
  }), _defineProperty(_methods, "availableBatteryCapacityPlane", function availableBatteryCapacityPlane(plane) {
    return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane);
  }), _defineProperty(_methods, "availableCapacityRoom", function availableCapacityRoom(room) {
    var _this25 = this;

    var availableRoomCapacity = 10000000;
    var availableRoomCapacityA = 10000000;
    var availableRoomCapacityB = 10000000;
    Object.keys(this.planes).forEach(function (element) {
      var plane = _this25.planes[element];

      if (room.current_room_delegation) {
        switch (room.current_room_delegation.plane_delegation_type_id) {
          case 1:
          case 2:
          case 3:
          case 4:
            availableRoomCapacity = _this25.availablePlaneCapacity(plane);
            break;

          case 5:
          case 6:
            if (availableRoomCapacity > _this25.availablePlaneCapacity(plane)) {
              availableRoomCapacity = _this25.availablePlaneCapacity(plane);
            }

            break;

          case 7:
            if (availableRoomCapacityA > _this25.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
              availableRoomCapacityA = _this25.availablePlaneCapacity(plane); // i++
            }

            if (availableRoomCapacityB > _this25.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
              availableRoomCapacityB = _this25.availablePlaneCapacity(plane);
            }

            availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB;
            break;

          case 8:
          default:
            break;
        }
      }
    });
    availableRoomCapacity = availableRoomCapacity < 10000000 ? availableRoomCapacity : 0;
    this.availablePRCapacity = availableRoomCapacity;
    return availableRoomCapacity;
  }), _defineProperty(_methods, "batteryBanksInRoom", function batteryBanksInRoom(room) {
    var batteryBanks = 0;

    if (room.planes) {
      Object.keys(room.planes).forEach(function (element) {
        var plane = room.planes[element];
        batteryBanks += plane.battery_banks.length;
      });
    }

    return batteryBanks;
  }), _defineProperty(_methods, "totalCapacityBatteries", function totalCapacityBatteries(room) {
    var capacity = 0;

    if (room.planes) {
      Object.keys(room.planes).forEach(function (element) {
        var plane = room.planes[element];
        Object.keys(plane.battery_banks).forEach(function (item) {
          capacity += plane.battery_banks[item].capacity;
        });
      });
    }

    var total = capacity * 48 / 1000 / this.popAutonomy;
    this.totalBatteryCapacity = total;
    return total;
  }), _defineProperty(_methods, "usedCapacityBatteries", function usedCapacityBatteries(room) {
    var _this26 = this;

    var used = 0;

    if (room.planes) {
      Object.keys(room.planes).forEach(function (element) {
        var plane = room.planes[element];
        used += _this26.chargeRealPower(plane);
      });
    }

    this.usedBatteryCapacity = used;
    return used;
  }), _defineProperty(_methods, "availableCapacityBatteries", function availableCapacityBatteries(room) {
    var _this27 = this;

    var original = 10000000;
    var available = original;
    var availableA = original;
    var availableB = original;

    if (room.planes && room.current_room_delegation) {
      // Object.keys(room.planes).forEach(element => {
      //     let plane = room.planes[element]
      //     if(available > this.availableBatteryCapacityPlane(plane)) {
      //         available = this.availableBatteryCapacityPlane(plane)
      //     }
      // })
      Object.keys(room.planes).forEach(function (item) {
        var plane = room.planes[item];

        switch (room.current_room_delegation.plane_delegation_type_id) {
          case 1:
          case 2:
          case 3:
          case 4:
            available = _this27.availableBatteryCapacityPlane(plane);
            break;

          case 5:
          case 6:
            if (available > _this27.availableBatteryCapacityPlane(plane)) {
              available = _this27.availableBatteryCapacityPlane(plane);
            }

            break;

          case 7:
            if (availableA > _this27.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
              availableA = _this27.availableBatteryCapacityPlane(plane);
            }

            if (availableB > _this27.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
              availableB = _this27.availableBatteryCapacityPlane(plane);
            }

            available = availableA + availableB;
            break;

          case 8:
          default:
            break;
        }
      });

      switch (room.current_room_delegation.plane_delegation_type_id) {
        case 1:
        case 2:
        case 3:
        case 4:
          available = available;
          break;

        case 5:
        case 6:
        case 7:
          available = available * 2;
          break;

        case 8:
        default:
          break;
      }
    }

    var total = available < 10000000 ? available : 0;
    this.availableBatteryCapacity = total;
    return total;
  }), _defineProperty(_methods, "roomName", function roomName(room_id) {
    var _this28 = this;

    var name = '';

    if (this.pop) {
      Object.keys(this.pop.rooms).forEach(function (element) {
        name = _this28.pop.rooms[element].id == room_id ? _this28.pop.rooms[element].name : name;
      });
    }

    return name;
  }), _methods),
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('room-data');
    this.$eventBus.$off('room-distribution');
    this.$eventBus.$off('room-surface');
    this.$eventBus.$off('room-security');
    this.$eventBus.$off('change-room');
    this.$eventBus.$off('new-power-rectifier');
    this.$eventBus.$off('new-junction');
    this.$eventBus.$off('power-rectifier-updated');
    this.$eventBus.$off('new-plane-updated');
    this.$eventBus.$off('new-battery-bank');
    this.$eventBus.$off('new-room');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section has-background-dark" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "columns" },
        _vm._l(_vm.crms, function(crm) {
          return _c(
            "div",
            {
              key: crm.id,
              staticClass: "column tile is-parent",
              on: {
                click: function($event) {
                  _vm.currentCrm = _vm.currentCrm === crm.id ? 0 : crm.id
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "tile is-child box has-text-centered has-text-white",
                  class:
                    _vm.currentCrm === crm.id
                      ? "is-bold is-link"
                      : "has-background-black-ter"
                },
                [
                  _c("div", {
                    staticClass: "is-size-4 has-text-weight-semibold",
                    domProps: { textContent: _vm._s(crm.sigla_crm) }
                  }),
                  _vm._v(" "),
                  _c("div", { staticStyle: { "padding-top": "5px" } }, [
                    _c(
                      "div",
                      { staticClass: "is-size-7 has-text-weight-normal" },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(crm.nombre_crm) +
                            "\n                        "
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "box has-background-black-ter" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control has-icons-left has-icons-right" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchText,
                  expression: "searchText"
                }
              ],
              staticClass:
                "input is-rounded has-background-black-ter has-text-light",
              attrs: {
                type: "text",
                "arial-label": "Buscar",
                placeholder: "Buscar...",
                autofocus: ""
              },
              domProps: { value: _vm.searchText },
              on: {
                keyup: _vm.getRoomsData,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchText = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "icon is-small is-left" },
              [_c("font-awesome-icon", { attrs: { icon: "search" } })],
              1
            ),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-small is-right" }, [
              _c("button", {
                staticClass: "delete",
                on: { click: _vm.clearSearch }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "table",
            {
              staticClass:
                "table is-fullwidth has-background-black-ter has-text-white"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.roomsData.data, function(pop) {
                  return _c("tr", { key: pop.id }, [
                    _c("td", {}, [
                      _c("div", {}, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "is-size-5 has-text-weight-bold has-text-white",
                            attrs: { target: "_blank", href: "/pop/" + pop.id }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(pop ? pop.nombre : "") +
                                "\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-normal" },
                          [
                            _vm._v(
                              "\n                                        Comuna de " +
                                _vm._s(pop ? pop.comuna.nombre_comuna : "") +
                                "\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "is-size-7 has-text-weight-light" },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  pop
                                    ? "Zona: " + pop.comuna.zona.nombre_zona
                                    : ""
                                ) +
                                " - " +
                                _vm._s(
                                  pop
                                    ? "CRM: " + pop.comuna.zona.crm.nombre_crm
                                    : ""
                                ) +
                                "\n                                    "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {},
                      _vm._l(_vm.orderedRooms(pop), function(room) {
                        return _c(
                          "div",
                          { key: room.id, staticClass: "field" },
                          [
                            _c("div", { staticClass: "columns is-vcentered" }, [
                              _c(
                                "div",
                                { staticClass: "column is-4" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        " has-text-weight-bold has-text-white",
                                      attrs: {
                                        to: "/capacity/" + room.id,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "is-size-5" }, [
                                        _vm._v(_vm._s(room.name))
                                      ]),
                                      _vm._v(" "),
                                      room.old_name
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "has-text-weight-light is-size-6"
                                            },
                                            [_vm._v(_vm._s(room.old_name))]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "column" },
                                [
                                  _c("RoomLights", {
                                    attrs: { room: room, user: _vm.user }
                                  })
                                ],
                                1
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "nav",
            {
              staticClass: "pagination",
              attrs: { role: "navigation", "aria-label": "pagination" }
            },
            [
              _c("vue-pagination", {
                attrs: { pagination: _vm.roomsData, offset: 4 },
                on: {
                  paginate: function($event) {
                    return _vm.getRoomsData()
                  }
                }
              })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c(
          "th",
          {
            staticClass: "is-size-6 has-text-weight-semibold has-text-white",
            attrs: { width: "25%" }
          },
          [_c("abbr", { attrs: { title: "id" } }, [_vm._v("POP")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "is-size-6 has-text-weight-semibold has-text-white",
            attrs: { width: "75%" }
          },
          [
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column is-6" }, [
                _c("abbr", { attrs: { title: "Sala" } }, [_vm._v("SALA")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column has-text-centered" }, [
                _c("abbr", { attrs: { title: "Estado / Disponibilidad" } }, [
                  _vm._v("Estado / Disponibilidad")
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "header",
        {
          staticClass: "modal-card-head has-background-white has-text-centered"
        },
        [
          _c("div", { staticClass: "columns modal-card-title" }, [
            _c(
              "div",
              { staticClass: "column is-2" },
              [
                _vm.previewRoom.id
                  ? _c(
                      "b-tag",
                      { attrs: { type: "is-link", size: "is-small" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: "/capacity/" + _vm.previewRoom.id },
                            nativeOn: {
                              click: function($event) {
                                return _vm.getRoomData()
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "has-text-weight-semibold is-size-6 has-text-white"
                              },
                              [_vm._v(_vm._s(_vm.previewRoom.name))]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "has-text-weight-semibold" }, [
                _vm._v(
                  _vm._s(_vm.pop ? _vm.pop.nombre : "") +
                    " - " +
                    _vm._s(_vm.room.name) +
                    ": " +
                    _vm._s(_vm.room.old_name)
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "has-text-centered",
                  staticStyle: { "padding-top": "16px" }
                },
                [
                  _vm.canEditPowerRectifiers
                    ? _c(
                        "b-button",
                        {
                          attrs: { size: "is-small" },
                          on: {
                            click: function($event) {
                              _vm.isNewRoomModalActive = true
                            }
                          }
                        },
                        [_vm._v("Agregar nueva sala al POP")]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-2" },
              [
                _vm.nextRoom.id
                  ? _c(
                      "b-tag",
                      { attrs: { type: "is-link", size: "is-small" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: "/capacity/" + _vm.nextRoom.id },
                            nativeOn: {
                              click: function($event) {
                                return _vm.getRoomData()
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "has-text-weight-semibold is-size-6 has-text-white"
                              },
                              [_vm._v(_vm._s(_vm.nextRoom.name))]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "section is-paddingless" }, [
        _c("div", { staticClass: "box" }, [
          _c(
            "div",
            { staticClass: "level" },
            _vm._l(_vm.capacityData, function(data) {
              return _c(
                "div",
                {
                  staticClass: "level-item",
                  staticStyle: { position: "relative" }
                },
                [
                  _c("div", {}, [
                    _c("div", { staticClass: "is-size-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-semibold",
                          staticStyle: { "padding-bottom": "4px" }
                        },
                        [_vm._v(_vm._s(data.title))]
                      ),
                      _vm._v(" "),
                      _c("div", {}, [
                        _vm._v(
                          "Total: " +
                            _vm._s(_vm._f("numeral")(data.total, "0,0.0"))
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", {}, [
                        _vm._v(
                          "Utilizada: " +
                            _vm._s(_vm._f("numeral")(data.used, "0,0.0"))
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", {}, [
                        _vm._v(
                          "Disponible: " +
                            _vm._s(_vm._f("numeral")(data.available, "0,0.0"))
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "block",
                        staticStyle: { "padding-top": "8px" }
                      },
                      [
                        _c("b-progress", {
                          attrs: {
                            value: (data.available * 100) / data.total,
                            "show-value": "",
                            format: "percent",
                            size: "is-small",
                            type:
                              data.available <= data.thresholds.critical
                                ? "is-danger"
                                : data.available <= data.thresholds.warning
                                ? "is-warning"
                                : "is-success"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-loading", {
                    attrs: {
                      "is-full-page": false,
                      active: data.isLoading,
                      "can-cancel": true
                    },
                    on: {
                      "update:active": function($event) {
                        return _vm.$set(data, "isLoading", $event)
                      }
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "modal-card-body hero is-light",
          staticStyle: { "padding-top": "0" }
        },
        [
          _c("div", { staticClass: "columns section" }, [
            _c("div", { staticClass: "column is-1" }, [
              _c(
                "div",
                { staticClass: "columns is-multiline" },
                _vm._l(_vm.tabs, function(tab) {
                  return _c(
                    "div",
                    {
                      key: tab.component,
                      staticClass: "column is-12",
                      class:
                        _vm.currentTab === tab.component &&
                        (_vm.currentTab == "eco"
                          ? "has-background-eco"
                          : "is-bold is-link"),
                      on: {
                        click: function($event) {
                          _vm.currentTab = tab.component
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "tile is-child box has-text-centered",
                          class:
                            _vm.currentTab === tab.component
                              ? "is-bold is-link"
                              : ""
                        },
                        [
                          _c("font-awesome-icon", {
                            class:
                              _vm.currentTab === tab.component
                                ? "has-text-white"
                                : "has-text-grey",
                            attrs: {
                              icon: [tab.icon_type, tab.icon],
                              size: "2x"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticStyle: { "padding-top": "5px" } }, [
                            _c(
                              "div",
                              {
                                staticClass: "is-size-7 has-text-weight-normal"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(tab.title) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column",
                staticStyle: { "padding-left": "48px" }
              },
              [
                _c(
                  "keep-alive",
                  [
                    _c(_vm.currentTabComponent, {
                      tag: "component",
                      attrs: {
                        user: _vm.user,
                        room: _vm.room,
                        pop: _vm.room.pop
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isNewRoomModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isNewRoomModalActive = $event
            }
          }
        },
        [_c("modal-new-room", { attrs: { pop: _vm.pop, user: _vm.user } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/CapacityPlanning.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/capacity/CapacityPlanning.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CapacityPlanning.vue?vue&type=template&id=e14f455e& */ "./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e&");
/* harmony import */ var _CapacityPlanning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CapacityPlanning.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CapacityPlanning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/CapacityPlanning.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CapacityPlanning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CapacityPlanning.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CapacityPlanning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CapacityPlanning.vue?vue&type=template&id=e14f455e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/CapacityPlanning.vue?vue&type=template&id=e14f455e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CapacityPlanning_vue_vue_type_template_id_e14f455e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/capacity/RoomDetail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/capacity/RoomDetail.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomDetail.vue?vue&type=template&id=18ee4326& */ "./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326&");
/* harmony import */ var _RoomDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/RoomDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomDetail.vue?vue&type=template&id=18ee4326& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomDetail.vue?vue&type=template&id=18ee4326&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDetail_vue_vue_type_template_id_18ee4326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);