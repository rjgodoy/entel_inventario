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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationTriangle"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RoomsTable: function RoomsTable() {
      return __webpack_require__.e(/*! import() | chunks/capacity/roomsTable */ "chunks/capacity/roomsTable").then(__webpack_require__.bind(null, /*! ./RoomsTable */ "./resources/js/components/capacity/RoomsTable.vue"));
    }
  },
  props: ['user'],
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
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
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




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrafficLight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartLine"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileInvoice"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBezierCurve"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalculator"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignInAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortUp"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSuperpowers"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRandom"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBolt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSolarPanel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShieldAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCarBattery"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFire"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMap"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMap"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThumbtack"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Capacity: function Capacity() {
      return __webpack_require__.e(/*! import() | chunks/capacity/capacity */ "chunks/capacity/capacity").then(__webpack_require__.bind(null, /*! ./tabs/Capacity */ "./resources/js/components/capacity/tabs/Capacity.vue"));
    },
    Projection: function Projection() {
      return Promise.all(/*! import() | chunks/capacity/projection */[__webpack_require__.e("vendors~chunks/capacity/projection~chunks/dashboard~chunks/generators~chunks/maps/ecoMap~chunks/maps~439c6c37"), __webpack_require__.e("chunks/capacity/projection")]).then(__webpack_require__.bind(null, /*! ./tabs/Projection */ "./resources/js/components/capacity/tabs/Projection.vue"));
    },
    // Requests: () => import(/* webpackChunkName: "chunks/capacity/requests"*/'./tabs/Requests'),
    Distribution: function Distribution() {
      return __webpack_require__.e(/*! import() | chunks/capacity/distribution */ "chunks/capacity/distribution").then(__webpack_require__.bind(null, /*! ./tabs/Distribution */ "./resources/js/components/capacity/tabs/Distribution.vue"));
    },
    Layout: function Layout() {
      return __webpack_require__.e(/*! import() | chunks/capacity/layout */ "chunks/capacity/layout").then(__webpack_require__.bind(null, /*! ./tabs/Layout */ "./resources/js/components/capacity/tabs/Layout.vue"));
    },
    Documents: function Documents() {
      return __webpack_require__.e(/*! import() | chunks/pop/documents/documents */ "chunks/pop/documents/documents").then(__webpack_require__.bind(null, /*! ../pop/documents/Documents */ "./resources/js/components/pop/documents/Documents.vue"));
    },
    ModalNewRoom: function ModalNewRoom() {
      return __webpack_require__.e(/*! import() | chunks/capacity/modals/new/newRoom */ "chunks/capacity/modals/new/newRoom").then(__webpack_require__.bind(null, /*! ../capacity/modals/new/ModalNewRoom */ "./resources/js/components/capacity/modals/new/ModalNewRoom.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      room: '',
      currentTab: 'capacity',
      tabs: [{
        "title": "Capacity",
        "component": "capacity",
        "icon": "traffic-light",
        "icon_type": "fas"
      }, // {
      //     "title": "Proyección",
      //     "component": "projection",
      //     "icon": "chart-line",
      //     "icon_type": "fas"
      // },
      // {
      //     "title": "Reserva",
      //     "component": "requests",
      //     "icon": "file-invoice",
      //     "icon_type": "fas"
      // },
      {
        "title": "Distribución",
        "component": "distribution",
        "icon": "bezier-curve",
        "icon_type": "fas"
      }, {
        "title": "Layout",
        "component": "layout",
        "icon": "map",
        "icon_type": "far"
      }, {
        "title": "Documentos",
        "component": "documents",
        "icon": "folder-open",
        "icon_type": "far"
      }],
      junctions: Object,
      generatorSets: Object,
      planes: Object,
      planeTypes: Object,
      airConditioners: Object,
      canEditJunctions: false,
      canEditGeneratorSets: false,
      canEditPowerRectifiers: false,
      canEditAirConditioners: false,
      canEditPlaneTypes: false,
      isNewRoomModalActive: false,
      planeTypeId: 0,
      record: false
    };
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
    this.$eventBus.$on('new-generator-set', this.getRoomData);
    this.$eventBus.$on('new-room', this.getRoomData);
    this.$eventBus.$on('air-conditioner-capacity', this.getRoomData);
    this.$eventBus.$on('new-solar-panel', this.getRoomData);
    this.$eventBus.$on('junction-measurements-updated', this.getRoomData);
    this.$eventBus.$on('generator-set-capacities-updated', this.getRoomData);
    this.$eventBus.$on('battery-autonomy', this.getRoomData);
    this.$eventBus.$on('battery-bank-deleted', this.getRoomData);
    this.$eventBus.$on('generator-set-deleted', this.getRoomData);
  },
  mounted: function mounted() {
    this.getRoomData();
  },
  watch: {
    totalCapacityBatteries: function totalCapacityBatteries() {
      this.record ? this.recordCapacities() : this.record = true;
    },
    planeTypeId: function planeTypeId(value) {},
    isEditMode: function isEditMode(val) {
      if (val == false) {
        this.getPlanes(); // this.$eventBus.$emit('room-data')
      }
    }
  },
  computed: {
    canEditSurface: function canEditSurface() {
      return this.canEditPowerRectifiers || this.canEditJunctions || this.canEditAirConditioners;
    },
    canEditDistribution: function canEditDistribution() {
      return this.canEditPowerRectifiers || this.canEditJunctions || this.canEditAirConditioners;
    },
    capacityData: function capacityData() {
      return [{
        "title": "Empalme",
        "total": this.totalJunctionsCapacity,
        "used": this.totalUsedJunctionsCapacity,
        "available": this.totalAvailableJunctionsCapacity,
        "isLoading": this.junctions.length && this.totalJunctionsCapacity == 0 ? true : false,
        "thresholds": this.thresholds.junctions,
        "unit": "kW"
      }, {
        "title": "Grupo Electrógeno",
        "total": this.totalGeneratorSetsCapacity,
        "used": this.totalGeneratorSetsUsedCapacity,
        "available": this.totalAvailableGeneratorSetsCapacity,
        "isLoading": this.totalGeneratorSetsCapacity || !this.generatorSets.length == 0 ? false : true,
        "thresholds": this.thresholds.generatorSets,
        "unit": "kW"
      }, {
        "title": "Plantas Rectificadoras",
        "total": this.totalCapacityRoom,
        "used": this.usedCapacityRoom,
        "available": this.availableCapacityRoom(this.room),
        "isLoading": this.totalCapacityRoom || !this.powerRectifiersInRoom(this.room) ? false : true,
        "thresholds": this.thresholds.powerRectifiers,
        "unit": "kW"
      }, {
        "title": "Baterías",
        "total": this.totalCapacityBatteries(this.room),
        "used": this.usedCapacityBatteries(this.room),
        "available": this.availableCapacityBatteries(this.room),
        "isLoading": this.totalCapacityBatteries(this.room) || !this.batteryBanksInRoom(this.room) ? false : true,
        "thresholds": this.thresholds.batteries,
        "unit": "kW"
      }, {
        "title": "Clima",
        "total": this.totalClimateCapacity,
        "used": this.usedClimateCapacity,
        "available": this.totalAvailableClimateCapacity,
        "isLoading": this.totalClimateCapacity && !this.usedClimateCapacity ? true : false,
        "thresholds": this.thresholds.climate,
        "unit": "kW"
      }, {
        "title": "Distribución",
        "total": this.totalDistributionCapacity,
        "used": this.usedDistributionCapacity,
        "available": this.availableDistributionCapacity,
        "isLoading": this.totalDistributionCapacity && !this.usedDistributionCapacity ? true : false,
        "thresholds": this.thresholds.disponibility,
        "unit": "kW"
      }, {
        "title": "Espacio",
        "total": this.totalSurface,
        "used": this.usedSurface,
        "available": this.availableSurface,
        "isLoading": this.totalSurface && !this.usedSurface ? true : false,
        "thresholds": this.thresholds.surface,
        "unit": "un"
      }];
    },
    pop: function pop() {
      return this.room.pop;
    },
    currentTabComponent: function currentTabComponent() {
      return this.currentTab;
    },
    // ########################################### Junctions
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
    // Total
    totalJunctionsCapacity: function totalJunctionsCapacity() {
      var _this = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (!_this.junctions[element].room_id || _this.junctions[element].room_id && _this.junctions[element].room_id == _this.room.id) {
            sum = sum + (_this.powerA(_this.junctions[element]) + _this.powerB(_this.junctions[element])) * _this.junctions[element].use_factor + _this.photovoltaicCapacity(_this.junctions[element]);
          }
        });
      }

      return sum;
    },
    // Used
    totalUsedJunctionsCapacity: function totalUsedJunctionsCapacity() {
      var _this2 = this;

      var punctualConsumption = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (!_this2.junctions[element].room_id || _this2.junctions[element].room_id && _this2.junctions[element].room_id == _this2.room.id) {
            if (_this2.junctions[element].latest_measurement) {
              punctualConsumption += _this2.junctions[element].latest_measurement.punctual_consumption;
            }
          }
        });
      }

      return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption;
    },
    withoutBatteriesCapacity: function withoutBatteriesCapacity() {
      var _this3 = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (!_this3.junctions[element].room_id || _this3.junctions[element].room_id && _this3.junctions[element].room_id == _this3.room.id) {
            sum = sum + _this3.powerUsedA(_this3.junctions[element]) + _this3.powerUsedB(_this3.junctions[element]) + _this3.averageConsumptionPerPhotovoltaicGroup;
          }
        });
      }

      return sum;
    },
    batteriesRecharge: function batteriesRecharge() {
      var _this4 = this;

      var total = 0;

      if (this.pop) {
        Object.keys(this.pop.rooms).forEach(function (element) {
          var room = _this4.pop.rooms[element];

          if (room.power_rectifiers.length) {
            Object.keys(room.planes).forEach(function (item) {
              var roomPlane = room.planes[item];
              total += _this4.batteryRechargePower(roomPlane);
            });
          }
        });
      }

      return total;
    },
    averageConsumptionPerPhotovoltaicGroup: function averageConsumptionPerPhotovoltaicGroup() {
      return 0;
    },
    // Available
    totalAvailableJunctionsCapacity: function totalAvailableJunctionsCapacity() {
      return this.totalJunctionsCapacity - this.totalUsedJunctionsCapacity;
    },
    // withoutBatteriesDisponibility() {
    //     return this.totalJunctionsCapacity - this.withoutBatteriesCapacity
    // },
    // usagePercent() {
    //     return this.totalJunctionsCapacity != 0 ? this.totalUsedJunctionsCapacity / this.totalJunctionsCapacity : 0
    // },
    // #######################################################
    // ###################################### Generator Sets
    //Total
    totalGeneratorSetsCapacity: function totalGeneratorSetsCapacity() {
      var _this5 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this5.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this5.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total;
        });
      }

      return total;
    },
    totalGeneratorSetsCapacityA: function totalGeneratorSetsCapacityA() {
      var _this6 = this;

      var sum = 0;
      var res = 0;
      var div = 1;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (!_this6.generatorSets[element].room_id || _this6.generatorSets[element].room_id && _this6.generatorSets[element].room_id == _this6.room.id) {
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
          if (!_this7.generatorSets[element].room_id || _this7.generatorSets[element].room_id && _this7.generatorSets[element].room_id == _this7.room.id) {
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
          }
        });
      }

      return sum;
    },
    generatorSetsResponsable: function generatorSetsResponsable() {
      var _this8 = this;

      var area = 'Sin Información';
      var id = null;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (_this8.generatorSets[element].current_generator_responsable) {
            switch (_this8.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
              case 1:
                id = 1;
                area = _this8.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 2:
                id = id == 1 ? id : 2;
                arae = id == 1 ? area : _this8.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 3:
                id = id == 1 || id == 2 ? id : 3;
                area = id == 1 || id == 2 ? area : _this8.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
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
    // Used
    totalGeneratorSetsUsedCapacity: function totalGeneratorSetsUsedCapacity() {
      var _this9 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this9.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this9.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total;
        });
      }

      return total;
    },
    usedGeneratorSetsCapacityA: function usedGeneratorSetsCapacityA() {
      var _this10 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (!_this10.generatorSets[element].room_id || _this10.generatorSets[element].room_id && _this10.generatorSets[element].room_id == _this10.room.id) {
            var usedCapacity = _this10.generatorSets[element].current_generator_set_capacity ? _this10.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

            switch (_this10.generatorSets[element].generator_set_topology_type_id) {
              case 1:
              case 2:
                sum = sum + usedCapacity;
                break;

              case 3:
                sum = _this10.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum;
                break;

              default:
                break;
            }
          }
        });
      }

      return sum;
    },
    usedGeneratorSetsCapacityB: function usedGeneratorSetsCapacityB() {
      var _this11 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (!_this11.generatorSets[element].room_id || _this11.generatorSets[element].room_id && _this11.generatorSets[element].room_id == _this11.room.id) {
            var usedCapacity = _this11.generatorSets[element].current_generator_set_capacity ? _this11.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

            switch (_this11.generatorSets[element].generator_set_topology_type_id) {
              case 1:
              case 2:
              default:
                break;

              case 3:
                sum = _this11.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum;
                break;
            }
          }
        });
      }

      return sum;
    },
    // Available
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
    availableGeneratorSetsCapacityA: function availableGeneratorSetsCapacityA() {
      return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA;
    },
    availableGeneratorSetsCapacityB: function availableGeneratorSetsCapacityB() {
      return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB;
    },
    // #######################################################
    // ###################################### Power Rectifiers
    // Total
    totalCapacityRoom: function totalCapacityRoom() {
      var _this13 = this;

      var realRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this13.planes[element];
        realRoomCapacity += _this13.realPlaneCapacity(plane);
      }); // this.totalPRCapacity = realRoomCapacity

      return realRoomCapacity;
    },
    // Used
    usedCapacityRoom: function usedCapacityRoom() {
      var _this14 = this;

      var usedRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this14.planes[element];
        usedRoomCapacity += _this14.totalPower(plane);
      }); // this.usedPRCapacity = usedRoomCapacity

      return usedRoomCapacity;
    },
    // #######################################################
    // ############################################# Batteries
    popAutonomy: function popAutonomy() {
      return this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0;
    },
    // #######################################################
    // ###################################### Air Conditioners
    totalClimateCapacity: function totalClimateCapacity() {
      return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.total_capacity : 0;
    },
    usedClimateCapacity: function usedClimateCapacity() {
      return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.used_capacity : 0;
    },
    totalAvailableClimateCapacity: function totalAvailableClimateCapacity() {
      return this.totalClimateCapacity - this.usedClimateCapacity;
    },
    // #######################################################
    // ########################################## Distribution
    totalDistributionCapacity: function totalDistributionCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0;
    },
    usedDistributionCapacity: function usedDistributionCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0;
    },
    availableDistributionCapacity: function availableDistributionCapacity() {
      return this.totalDistributionCapacity - this.usedDistributionCapacity;
    },
    // #######################################################
    // ############################################### Surface
    totalSurface: function totalSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0;
    },
    usedSurface: function usedSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0;
    },
    availableSurface: function availableSurface() {
      return this.totalSurface - this.usedSurface;
    },
    // #######################################################
    planeType: function planeType() {
      var _this15 = this;

      var type = 'Sin Información';

      switch (this.planeTypeId) {
        case 1:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 1 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 2:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 2 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 3:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 3 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 4:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 4 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 5:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 5 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 6:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 6 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 7:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 7 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        case 8:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this15.planeTypes[item].id == 8 && type == 'Sin Información' ? _this15.planeTypes[item].type : type;
          });
          break;

        default:
          break;
      }

      return type;
    },
    // detectionType() {
    //     return this.room.fire_detections ? this.room.fire_detections[0].fire_detection_type.type : 'No tiene'
    // },
    // extinctionType() {
    //     return this.room.fire_detections && this.room.fire_detections[0].fire_extinction_type ? this.room.fire_detections[0].fire_extinction_type.type : 'No tiene'
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
    thresholds: function thresholds() {
      return {
        'junctions': {
          'critical': 0.1,
          'warning': 0.2
        },
        'generatorSets': {
          'critical': 0.1,
          'warning': 0.2
        },
        'powerRectifiers': {
          'critical': 0.1,
          'warning': 0.2
        },
        'batteries': {
          'critical': 0.1,
          'warning': 0.2
        },
        'climate': {
          'critical': 0.1,
          'warning': 0.2
        },
        'disponibility': {
          'critical': 0.1,
          'warning': 0.2
        },
        'surface': {
          'critical': 0.1,
          'warning': 0.2
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
    },
    conditionsToRecord: function conditionsToRecord() {
      var reducer = function reducer(accumulator, currentValue) {
        return accumulator + currentValue;
      };

      var currentCapacities = [];

      if (this.room.current_room_capacity) {
        currentCapacities = [Math.round(this.room.current_room_capacity.battery_autonomy, 3), Math.round(this.room.current_room_capacity.junction_total, 3), Math.round(this.room.current_room_capacity.junction_used, 3), Math.round(this.room.current_room_capacity.junction_available, 3), Math.round(this.room.current_room_capacity.generator_set_total, 3), Math.round(this.room.current_room_capacity.generator_set_used, 3), Math.round(this.room.current_room_capacity.generator_set_available, 3), Math.round(this.room.current_room_capacity.power_rectifier_total, 3), Math.round(this.room.current_room_capacity.power_rectifier_used, 3), Math.round(this.room.current_room_capacity.power_rectifier_available, 3), Math.round(this.room.current_room_capacity.battery_total, 3), Math.round(this.room.current_room_capacity.battery_used, 3), Math.round(this.room.current_room_capacity.battery_available, 3), Math.round(this.room.current_room_capacity.distribution_total, 3), Math.round(this.room.current_room_capacity.distribution_used, 3), Math.round(this.room.current_room_capacity.distribution_available, 3), Math.round(this.room.current_room_capacity.climate_total, 3), Math.round(this.room.current_room_capacity.climate_used, 3), Math.round(this.room.current_room_capacity.climate_available, 3), Math.round(this.room.current_room_capacity.surface_total, 3), Math.round(this.room.current_room_capacity.surface_used, 3), Math.round(this.room.current_room_capacity.surface_available, 3)];
      }

      var newCapacities = [Math.round(this.pop.current_battery_bank_autonomy && this.pop.current_battery_bank_autonomy.theoretical, 3), Math.round(this.totalJunctionsCapacity, 3), Math.round(this.totalUsedJunctionsCapacity, 3), Math.round(this.totalAvailableJunctionsCapacity, 3), Math.round(this.totalGeneratorSetsCapacity, 3), Math.round(this.totalGeneratorSetsUsedCapacity, 3), Math.round(this.totalAvailableGeneratorSetsCapacity, 3), Math.round(this.totalCapacityRoom, 3), Math.round(this.usedCapacityRoom, 3), Math.round(this.availableCapacityRoom(this.room), 3), Math.round(this.totalCapacityBatteries(this.room), 3), Math.round(this.usedCapacityBatteries(this.room), 3), Math.round(this.availableCapacityBatteries(this.room), 3), Math.round(this.totalClimateCapacity, 3), Math.round(this.usedClimateCapacity, 3), Math.round(this.totalAvailableClimateCapacity, 3), Math.round(this.totalDistributionCapacity, 3), Math.round(this.usedDistributionCapacity, 3), Math.round(this.availableDistributionCapacity, 3), Math.round(this.totalSurface, 3), Math.round(this.usedSurface, 3), Math.round(this.availableSurface, 3)];
      var sumCurrentCapacities = currentCapacities.length ? currentCapacities.reduce(reducer) : 0;
      var sumNewCapacities = newCapacities.reduce(reducer);
      console.log(this.room.current_room_capacity);

      if (!this.room.current_room_capacity || this.room.current_room_capacity && sumCurrentCapacities != sumNewCapacities) {
        return true;
      }

      return false;
    }
  },
  methods: {
    // Getters
    getRoomData: function getRoomData() {
      var _this17 = this;

      axios.get("/api/rooms/".concat(this.$route.params.id)).then(function (response) {
        // console.log(response.data)
        _this17.room = response.data.room;
        _this17.planeTypeId = _this17.room.current_room_delegation ? _this17.room.current_room_delegation.plane_delegation_type_id : null;

        _this17.getJunctions();

        _this17.getGeneratorSets();

        _this17.getPlanes();

        _this17.getPlaneTypes();

        _this17.getAirConditioners();

        _this17.record ? _this17.recordCapacities() : _this17.record = true;
      });
    },
    getJunctions: function getJunctions() {
      var _this18 = this;

      axios.get("/api/popJunctions/".concat(this.pop.id)).then(function (response) {
        // console.log(response.data)
        _this18.junctions = response.data.junctions;
        _this18.canEditJunctions = response.data.can.update;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getGeneratorSets: function getGeneratorSets() {
      var _this19 = this;

      axios.get("/api/generatorSets/".concat(this.pop.id)).then(function (response) {
        _this19.generatorSets = response.data.generatorSets;
        _this19.canEditGeneratorSets = response.data.can.update;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
      });
    },
    getPlanes: function getPlanes() {
      var _this20 = this;

      axios.get("/api/roomPlanes/".concat(this.room.id, "?plane_delegation_type_id=").concat(this.planeTypeId)).then(function (response) {
        _this20.planes = response.data.planes;
        _this20.canEditPowerRectifiers = response.data.can.update;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getPlaneTypes: function getPlaneTypes() {
      var _this21 = this;

      axios.get("/api/planeTypes").then(function (response) {
        _this21.planeTypes = response.data.planes;
        _this21.canEditPlaneTypes = response.data.can.update;
      });
    },
    getAirConditioners: function getAirConditioners() {
      var _this22 = this;

      axios.get("/api/airConditioners/".concat(this.pop.id)).then(function (response) {
        _this22.airConditioners = response.data.airConditioner;
        _this22.canEditAirConditioners = response.data.can.update;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    recordCapacities: function recordCapacities() {
      if (this.conditionsToRecord) {
        var params = {
          'room_id': this.room.id,
          'battery_autonomy': this.pop.current_battery_bank_autonomy && this.pop.current_battery_bank_autonomy.theoretical,
          'junction_total': this.totalJunctionsCapacity,
          'junction_used': this.totalUsedJunctionsCapacity,
          'junction_available': this.totalAvailableJunctionsCapacity,
          'generator_set_total': this.totalGeneratorSetsCapacity,
          'generator_set_used': this.totalGeneratorSetsUsedCapacity,
          'generator_set_available': this.totalAvailableGeneratorSetsCapacity,
          'power_rectifier_total': this.totalCapacityRoom,
          'power_rectifier_used': this.usedCapacityRoom,
          'power_rectifier_available': this.availableCapacityRoom(this.room),
          'battery_total': this.totalCapacityBatteries(this.room),
          'battery_used': this.usedCapacityBatteries(this.room),
          'battery_available': this.availableCapacityBatteries(this.room),
          'climate_total': this.totalClimateCapacity,
          'climate_used': this.usedClimateCapacity,
          'climate_available': this.totalAvailableClimateCapacity,
          'distribution_total': this.totalDistributionCapacity,
          'distribution_used': this.usedDistributionCapacity,
          'distribution_available': this.availableDistributionCapacity,
          'surface_total': this.totalSurface,
          'surface_used': this.usedSurface,
          'surface_available': this.availableSurface
        };
        axios.post('/api/roomCapacities', params).then(function (response) {// console.log(response.data)
        });
      }
    },
    // ########################################### Junctions
    // Total
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
    photovoltaicCapacity: function photovoltaicCapacity(junction) {
      var capacity = 0;

      if (junction.solar_panels.length) {
        Object.keys(junction.solar_panels).forEach(function (element) {
          var panel = junction.solar_panels[element];
          capacity = capacity + panel.unit_capacity * panel.quantity;
        });
      }

      return capacity / 1000;
    },
    // Used
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
    // #####################################################
    // ###################################### Generator Sets
    // No hay funciones
    // #####################################################
    // #################################### Power Rectifiers
    realPlaneCapacity: function realPlaneCapacity(plane) {
      var currentRedundantModules = plane.current_redundant_modules;
      var currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0;
      return this.installedCapacity(plane) - currentRedundantModulesCapacity;
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
    totalPower: function totalPower(plane) {
      return this.chargeRealPower(plane) + this.batteryRechargePower(plane);
    },
    //Available
    availableCapacityRoom: function availableCapacityRoom(room) {
      var _this23 = this;

      var availableRoomCapacity = 10000000;
      var availableRoomCapacityA = 10000000;
      var availableRoomCapacityB = 10000000;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this23.planes[element];

        if (room.current_room_delegation) {
          switch (room.current_room_delegation.plane_delegation_type_id) {
            case 1:
            case 2:
            case 3:
            case 4:
              availableRoomCapacity = _this23.availablePlaneCapacity(plane);
              break;

            case 5:
            case 6:
              if (availableRoomCapacity > _this23.availablePlaneCapacity(plane)) {
                availableRoomCapacity = _this23.availablePlaneCapacity(plane);
              }

              break;

            case 7:
              if (availableRoomCapacityA > _this23.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                availableRoomCapacityA = _this23.availablePlaneCapacity(plane); // i++
              }

              if (availableRoomCapacityB > _this23.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                availableRoomCapacityB = _this23.availablePlaneCapacity(plane);
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
    },
    availablePlaneCapacity: function availablePlaneCapacity(plane) {
      return this.realPlaneCapacity(plane) - this.totalPower(plane);
    },
    // #####################################################
    // ########################################### Batteries
    // Total
    totalCapacityBatteries: function totalCapacityBatteries(room) {
      var capacity = 0;

      if (room.planes) {
        Object.keys(room.planes).forEach(function (element) {
          var plane = room.planes[element];
          Object.keys(plane.battery_banks).forEach(function (item) {
            capacity += plane.battery_banks[item].capacity;
          });
        });
      }

      var total = capacity * 48 / 1000 / this.popAutonomy; // this.totalBatteryCapacity = total

      return total;
    },
    // Used
    usedCapacityBatteries: function usedCapacityBatteries(room) {
      var _this24 = this;

      var used = 0;

      if (room.planes) {
        Object.keys(room.planes).forEach(function (element) {
          var plane = room.planes[element];
          used += _this24.chargeRealPower(plane);
        });
      } // this.usedBatteryCapacity = used


      return used;
    },
    chargeRealPower: function chargeRealPower(plane) {
      return plane.float_tension * plane.current / 1000;
    },
    // Available
    availableCapacityBatteries: function availableCapacityBatteries(room) {
      var _this25 = this;

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
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
              available = _this25.availableBatteryCapacityPlane(plane);
              break;

            case 5:
            case 6:
            case 20:
            case 21:
            case 22:
              if (available > _this25.availableBatteryCapacityPlane(plane)) {
                available = _this25.availableBatteryCapacityPlane(plane);
              }

              break;

            case 7:
              if (availableA > _this25.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                availableA = _this25.availableBatteryCapacityPlane(plane);
              }

              if (availableB > _this25.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                availableB = _this25.availableBatteryCapacityPlane(plane);
              }

              available = availableA + availableB;
              break;

            case 30:
            default:
              break;
          }
        });

        switch (room.current_room_delegation.plane_delegation_type_id) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
            available = available;
            break;

          case 5:
          case 6:
          case 7:
          case 20:
          case 21:
          case 22:
            available = available * 2;
            break;

          case 30:
          default:
            break;
        }
      }

      var total = available < 10000000 ? available : 0;
      this.availableBatteryCapacity = total;
      return total;
    },
    availableBatteryCapacityPlane: function availableBatteryCapacityPlane(plane) {
      return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane);
    },
    batteryTotalCapacityPlane: function batteryTotalCapacityPlane(plane) {
      var capacity = 0;
      Object.keys(plane.battery_banks).forEach(function (item) {
        capacity += plane.battery_banks[item].capacity;
      });
      return capacity * 48 / 1000 / this.popAutonomy;
    },
    // #####################################################
    // powerRectifierBelongsToPlane(powerRectifier, plane) {
    //     let bool = false
    //     // if (plane.power_rectifiers) {
    //         Object.keys(plane.power_rectifiers).forEach(element => {
    //             let pr = plane.power_rectifiers[element]
    //             bool = pr.id == powerRectifier.id && !bool ? true : bool
    //         })
    //     // }
    //     return bool
    // },
    // nominalCapacity(plane) {
    //     let capacity = 0
    //     Object.keys(plane.power_rectifiers).forEach(element => {
    //         capacity += plane.power_rectifiers[element].capacity
    //     })
    //     return capacity
    // },
    // totalCurrent(plane) {
    //     return plane.current + this.rechargeCurrent(plane)
    // },
    // usePercentPlane(plane) {
    //     return this.totalPower(plane) / this.realPlaneCapacity(plane)
    // },
    hasPlanes: function hasPlanes(room) {
      var _this26 = this;

      var bool = false;

      if (this.planes) {
        Object.keys(this.planes).forEach(function (element) {
          var plane = _this26.planes[element];
          Object.keys(plane.rooms).forEach(function (item) {
            bool = !bool ? plane.rooms[item].id == room.id : bool;
          });
        });
      }

      return bool;
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
    batteryBanksInRoom: function batteryBanksInRoom(room) {
      var batteryBanks = 0;

      if (room.planes) {
        Object.keys(room.planes).forEach(function (element) {
          var plane = room.planes[element];
          batteryBanks += plane.battery_banks.length;
        });
      }

      return batteryBanks;
    },
    hasAirConditioners: function hasAirConditioners(room) {
      var _this27 = this;

      var bool = false;

      if (this.airConditioners) {
        Object.keys(this.airConditioners).forEach(function (element) {
          bool = !bool ? _this27.airConditioners[element].room_id == room.id : bool;
        });
      }

      return bool;
    },
    roomName: function roomName(room_id) {
      var _this28 = this;

      var name = '';

      if (this.pop) {
        Object.keys(this.pop.rooms).forEach(function (element) {
          name = _this28.pop.rooms[element].id == room_id ? _this28.pop.rooms[element].name : name;
        });
      }

      return name;
    }
  },
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
    this.$eventBus.$off('new-generator-set');
    this.$eventBus.$off('new-room');
    this.$eventBus.$off('air-conditioner-capacity');
    this.$eventBus.$off('new-solar-panel');
    this.$eventBus.$off('battery-autonomy');
    this.$eventBus.$off('battery-bank-deleted');
    this.$eventBus.$off('generator-set-deleted');
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
      _c(
        "div",
        { staticClass: "box has-background-black-ter" },
        [
          _c("div", { staticClass: "field" }, [
            _c(
              "div",
              { staticClass: "control has-icons-left has-icons-right" },
              [
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
              ]
            )
          ]),
          _vm._v(" "),
          _c("RoomsTable", {
            attrs: { roomsData: _vm.roomsData, user: _vm.user }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
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
          _c("div", { staticClass: "columns modal-card-title is-vcentered" }, [
            _c(
              "div",
              { staticClass: "column is-2" },
              [
                _vm.previewRoom.id
                  ? _c(
                      "router-link",
                      {
                        staticClass: "button is-default has-text-link",
                        staticStyle: { height: "auto" },
                        attrs: {
                          to: "/capacity/" + _vm.previewRoom.id,
                          type: "button"
                        },
                        nativeOn: {
                          click: function($event) {
                            _vm.record = false
                            _vm.getRoomData()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "columns is-vcentered" }, [
                          _c(
                            "div",
                            {
                              staticClass: "column",
                              staticStyle: {
                                "padding-left": "8px",
                                "padding-right": "5px"
                              }
                            },
                            [
                              _vm._v("\n                             "),
                              _c("br"),
                              _c("font-awesome-icon", {
                                attrs: {
                                  icon: ["fas", "sort-up"],
                                  rotation: "270"
                                }
                              }),
                              _c("br"),
                              _vm._v(" \n                        ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "column",
                              staticStyle: {
                                "padding-left": "5px",
                                "padding-right": "8px"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "has-text-weight-semibold is-size-6"
                                },
                                [_vm._v(_vm._s(_vm.previewRoom.name))]
                              )
                            ]
                          )
                        ])
                      ]
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
                      "router-link",
                      {
                        staticClass: "button has-text-link is-default",
                        staticStyle: { height: "auto" },
                        attrs: {
                          to: "/capacity/" + _vm.nextRoom.id,
                          type: "button"
                        },
                        nativeOn: {
                          click: function($event) {
                            _vm.record = false
                            _vm.getRoomData()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "columns is-vcentered" }, [
                          _c(
                            "div",
                            {
                              staticClass: "column",
                              staticStyle: {
                                "padding-left": "8px",
                                "padding-right": "5px"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "has-text-weight-semibold is-size-6"
                                },
                                [_vm._v(_vm._s(_vm.nextRoom.name))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "column",
                              staticStyle: {
                                "padding-left": "5px",
                                "padding-right": "8px"
                              }
                            },
                            [
                              _vm._v("\n                             "),
                              _c("br"),
                              _c("font-awesome-icon", {
                                attrs: {
                                  icon: ["fas", "sort-up"],
                                  rotation: "90"
                                }
                              }),
                              _c("br"),
                              _vm._v(" \n                        ")
                            ],
                            1
                          )
                        ])
                      ]
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
        _c(
          "div",
          {
            staticClass: "has-background-white",
            staticStyle: { padding: "12px" }
          },
          [
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
                            staticClass: "has-text-weight-semibold is-size-6",
                            staticStyle: { "padding-bottom": "4px" }
                          },
                          [_vm._v(_vm._s(data.title.toUpperCase()))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(
                            "Total: " +
                              _vm._s(_vm._f("numeral")(data.total, "0,0.0")) +
                              " "
                          ),
                          _c("span", { staticClass: "is-size-7" }, [
                            _vm._v(_vm._s(data.unit))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(
                            "Utilizada: " +
                              _vm._s(_vm._f("numeral")(data.used, "0,0.0")) +
                              " "
                          ),
                          _c("span", { staticClass: "is-size-7" }, [
                            _vm._v(_vm._s(data.unit))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(
                            "Disponible: " +
                              _vm._s(
                                _vm._f("numeral")(data.available, "0,0.0")
                              ) +
                              " "
                          ),
                          _c("span", { staticClass: "is-size-7" }, [
                            _vm._v(_vm._s(data.unit))
                          ])
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
                                data.available / data.total <=
                                data.thresholds.critical
                                  ? "is-danger"
                                  : data.available / data.total <=
                                    data.thresholds.warning
                                  ? "is-warning"
                                  : "is-success"
                            }
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
          ]
        )
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
                _c(_vm.currentTabComponent, {
                  tag: "component",
                  attrs: {
                    user: _vm.user,
                    room: _vm.room,
                    pop: _vm.room.pop,
                    junctions: _vm.junctions,
                    generatorSets: _vm.generatorSets,
                    planes: _vm.planes,
                    planeTypes: _vm.planeTypes,
                    airConditioners: _vm.airConditioners,
                    canEditJunctions: _vm.canEditJunctions,
                    canEditGeneratorSets: _vm.canEditGeneratorSets,
                    canEditPowerRectifiers: _vm.canEditPowerRectifiers,
                    canEditAirConditioners: _vm.canEditAirConditioners,
                    canEditSurface: _vm.canEditSurface,
                    canEditDistribution: _vm.canEditDistribution,
                    canEditPlaneTypes: _vm.canEditPlaneTypes,
                    totalJunctionsCapacity: _vm.totalJunctionsCapacity,
                    totalUsedJunctionsCapacity: _vm.totalUsedJunctionsCapacity,
                    totalAvailableJunctionsCapacity:
                      _vm.totalAvailableJunctionsCapacity,
                    totalGeneratorSetsCapacity: _vm.totalGeneratorSetsCapacity,
                    totalGeneratorSetsUsedCapacity:
                      _vm.totalGeneratorSetsUsedCapacity,
                    totalAvailableGeneratorSetsCapacity:
                      _vm.totalAvailableGeneratorSetsCapacity,
                    totalGeneratorSetsCapacityA:
                      _vm.totalGeneratorSetsCapacityA,
                    totalGeneratorSetsCapacityB:
                      _vm.totalGeneratorSetsCapacityB,
                    usedGeneratorSetsCapacityA: _vm.usedGeneratorSetsCapacityA,
                    usedGeneratorSetsCapacityB: _vm.usedGeneratorSetsCapacityB,
                    availableGeneratorSetsCapacityA:
                      _vm.availableGeneratorSetsCapacityA,
                    availableGeneratorSetsCapacityB:
                      _vm.availableGeneratorSetsCapacityB,
                    totalSurface: _vm.totalSurface,
                    usedSurface: _vm.usedSurface,
                    availableSurface: _vm.availableSurface,
                    totalDistributionCapacity: _vm.totalDistributionCapacity,
                    usedDistributionCapacity: _vm.usedDistributionCapacity,
                    availableDistributionCapacity:
                      _vm.availableDistributionCapacity
                  }
                })
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