(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import LoadingComponent from '../helpers/LoadingComponent'
// import ErrorComponent from '../helpers/ErrorComponent'
// const PopsMap = () => ({
//     // The component to load (should be a Promise)
//     component: import('../maps/PopsMap.vue'),
//     // A component to use while the async component is loading
//     loading: import('../helpers/LoadingComponent'),
//     // A component to use if the load fails
//     error: import('../helpers/ErrorComponent'),
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 200,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })
// const MapView = () => ({
//     // The component to load (should be a Promise)
//     component: import('../maps/MapView.vue'),
//     // A component to use while the async component is loading
//     loading: import('../helpers/LoadingComponent'),
//     // A component to use if the load fails
//     error: import('../helpers/ErrorComponent'),
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 200,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })
// const RadialChart = () => ({
//     // The component to load (should be a Promise)
//     component: import('../RadialChart.vue'),
//     // A component to use while the async component is loading
//     // loading: LoadingComponent,
//     // A component to use if the load fails
//     // error: ErrorComponent,
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 200,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })
// const RedCoreChart = () => ({
//     // The component to load (should be a Promise)
//     component: import('./RedCoreChart.vue'),
//     // A component to use while the async component is loading
//     // loading: LoadingComponent,
//     // A component to use if the load fails
//     // error: ErrorComponent,
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 200,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // ###### Info ##########
    PopsData: function PopsData() {
      return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./PopsData */ "./resources/js/components/dashboard/PopsData.vue"));
    },
    DataChart: function DataChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ./PopDataChart */ "./resources/js/components/dashboard/PopDataChart.vue"));
    },
    SitesData: function SitesData() {
      return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./SitesData */ "./resources/js/components/dashboard/SitesData.vue"));
    },
    TechnologiesData: function TechnologiesData() {
      return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./TechnologiesData */ "./resources/js/components/dashboard/TechnologiesData.vue"));
    },
    CriticsData: function CriticsData() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./CriticPopsData */ "./resources/js/components/dashboard/CriticPopsData.vue"));
    },
    AlbaData: function AlbaData() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./AlbaPopsData */ "./resources/js/components/dashboard/AlbaPopsData.vue"));
    },
    // ###### Map ###########
    // PopsMap,
    MapView: function MapView() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../maps/MapView */ "./resources/js/components/maps/MapView.vue"));
    },
    // MapView,
    // ###### Charts ########
    PretDataChart: function PretDataChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ./PretDataChart */ "./resources/js/components/dashboard/PretDataChart.vue"));
    },
    // RadialChart,
    // RedCoreChart,
    // ###### Equipment #####
    ElectricLinesData: function ElectricLinesData() {
      return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./ElectricLinesData */ "./resources/js/components/dashboard/ElectricLinesData.vue"));
    },
    GeneratorSetsData: function GeneratorSetsData() {
      return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./GeneratorSetsData */ "./resources/js/components/dashboard/GeneratorSetsData.vue"));
    },
    PowerRectifiersData: function PowerRectifiersData() {
      return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./PowerRectifiersData */ "./resources/js/components/dashboard/PowerRectifiersData.vue"));
    },
    AirConditionersData: function AirConditionersData() {
      return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./AirConditionersData */ "./resources/js/components/dashboard/AirConditionersData.vue"));
    },
    VerticalStructuresData: function VerticalStructuresData() {
      return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./VerticalStructuresData */ "./resources/js/components/dashboard/VerticalStructuresData.vue"));
    },
    InfrastructuresData: function InfrastructuresData() {
      return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./InfrastructuresData */ "./resources/js/components/dashboard/InfrastructuresData.vue"));
    }
  },
  props: ['user', 'message', 'last_data_counters', 'crms', 'darkMode'],
  created: function created() {
    this.styleMode(); // this.$eventBus.$on('password-changed', function() {
    //     console.log('Se cambió la contraseña!!')
    //     this.$buefy.toast.open({
    //         message: 'Tu password se ha actualizado exitosamente.',
    //         type: 'is-success',
    //         duration: 5000
    //     })
    // });
    // this.$eventCounters.$on('pops', function(total) {
    // console.log('El total es ' + total)
    // this.popsQuantity = total
    // })
  },
  mounted: function mounted() {
    // console.log(this.last_data_counters)
    // this.getCrms()
    this.getCounters(); // this.lastUpdate()
    // this.syncCounter()

    this.loadMessage();
    this.getPops();
  },
  data: function data() {
    return {
      core: 0,
      pops: [],
      zonas: [],
      isFetching: false,
      selected: null,
      page: 1,
      totalPages: 1,
      searchText: '',
      popSearch: [],
      active: 0,
      counter: 0,
      map_attributes: {
        latitude: -33.44444275,
        longitude: -70.6561017,
        zoom: 5
      },
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: '',
      innerBackground: '',
      bodyBackgroundEnergy: '',
      bodyBackgroundClimate: '',
      bodyBackgroundInfrastructure: '',
      boxBackgroundEnergy: '',
      boxBackgroundClimate: '',
      boxBackgroundInfrastructure: '',
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light',
      selectedPop: null,
      selectedCrm: null,
      selectedZona: null,
      criticPopsSwitch: 0,
      albaPopsSwitch: 0,
      popsQuantity: 0,
      sitesQuantity: 0,
      technologiesQuantity: 0,
      criticsQuantity: 0,
      albaQuantity: 0,
      isLoading: false,
      // lastUpdateData: [],
      // lastDataCounter: [],
      currentTab: 'pops'
    };
  },
  watch: {
    selectedPop: function selectedPop(newValue, oldValue) {
      this.pops = [newValue];
    },
    selectedCrm: function selectedCrm(newValue, oldValue) {
      this.selectedZona = null;

      if (this.currentTab == 'critics') {
        this.viewCriticPops();
      } else if (this.currentTab == 'alba') {
        this.viewAlbaPops();
      } else if (newValue) {
        this.getPops();
        this.zonas = newValue.zonas;
      } else {
        this.getPops();
      }

      this.getCounters();
    },
    selectedZona: function selectedZona(newValue, oldValue) {
      if (this.currentTab == 'critics') {
        this.viewCriticPops();
      } else if (this.currentTab == 'alba') {
        this.viewAlbaPops();
      } else {
        this.getPops();
      }

      this.getCounters();
    },
    core: function core(newValue, oldValue) {
      if (this.currentTab == 'critics') {
        this.viewCriticPops();
      } else if (this.currentTab == 'alba') {
        this.viewAlbaPops();
      } else {
        this.getPops();
      }

      this.getCounters();
    },
    darkMode: function darkMode(newValue, oldValue) {
      this.styleMode();
    },
    currentTab: function currentTab(newValue, oldValue) {
      if (newValue == 'critics') {
        this.viewCriticPops();
      } else if (this.currentTab == 'alba') {
        this.viewAlbaPops();
      } else if ((oldValue == 'critics' || oldValue == 'alba') && (newValue == 'pops' || newValue == 'sites' || newValue == 'technologies')) {
        this.getPops();
      }
    }
  },
  computed: {
    currentTabComponent: function currentTabComponent() {
      return this.currentTab + '-data';
    },
    currentLastUpdateData: function currentLastUpdateData() {
      if (this.currentTab != 'critics' || this.currentTab != 'alba') {
        return this.last_data_counters['last_updated_' + this.currentTab];
      } else {
        return;
      }
    },
    textSwitchCore: function textSwitchCore() {
      return this.core ? 'has-text-link' : '';
    }
  },
  methods: {
    searchFormat: function searchFormat(pop) {
      this.selectedPop = this.selected;
      return this.searchText;
    },
    getPops: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      var _this = this;

      var crm_id = this.selectedCrm ? this.selectedCrm.id : 0;
      var zona_id = this.selectedZona ? this.selectedZona.id : 0;
      axios.get("/api/dashboardMap?api_token=".concat(this.user.api_token, "&core=").concat(this.core, "&crm_id=").concat(crm_id, "&zona_id=").concat(zona_id)).then(function (response) {
        try {
          _this.pops = response.data;
        } catch (ex) {
          console.log(ex);
        }
      });
    }, 200),
    viewCriticPops: function () {
      var _viewCriticPops = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var crm_id, zona_id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.currentTab = 'critics';
                crm_id = this.selectedCrm ? this.selectedCrm.id : 0;
                zona_id = this.selectedZona ? this.selectedZona.id : 0;
                axios.get("/api/criticPopsMap?api_token=".concat(this.user.api_token, "&core=").concat(this.core, "&crm_id=").concat(crm_id, "&zona_id=").concat(zona_id)).then(function (response) {
                  // console.log(response.data)
                  _this2.pops = response.data.data;
                });
                this.criticPopsSwitch = this.criticPopsSwitch == 0 ? 1 : 0;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function viewCriticPops() {
        return _viewCriticPops.apply(this, arguments);
      }

      return viewCriticPops;
    }(),
    viewAlbaPops: function () {
      var _viewAlbaPops = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        var crm_id, zona_id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.currentTab = 'alba';
                crm_id = this.selectedCrm ? this.selectedCrm.id : 0;
                zona_id = this.selectedZona ? this.selectedZona.id : 0;
                axios.get("/api/albaPopsMap?api_token=".concat(this.user.api_token, "&core=").concat(this.core, "&crm_id=").concat(crm_id, "&zona_id=").concat(zona_id)).then(function (response) {
                  // console.log(response.data)
                  _this3.pops = response.data.data;
                });
                this.albaPopsSwitch = this.albaPopsSwitch == 0 ? 1 : 0;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function viewAlbaPops() {
        return _viewAlbaPops.apply(this, arguments);
      }

      return viewAlbaPops;
    }(),
    // CONTERS
    getCounters: function () {
      var _getCounters = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this4 = this;

        var crm_id, zona_id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                crm_id = this.selectedCrm ? this.selectedCrm.id : 0;
                zona_id = this.selectedZona ? this.selectedZona.id : 0;
                axios.get("/api/dashboard?api_token=".concat(this.user.api_token, "&core=").concat(this.core, "&crm_id=").concat(crm_id, "&zona_id=").concat(zona_id)).then(function (response) {
                  _this4.popsQuantity = response.data.pops;
                  _this4.sitesQuantity = response.data.sites;
                  _this4.technologiesQuantity = response.data.technologies;
                  _this4.criticsQuantity = response.data.critics;
                  _this4.albaQuantity = response.data.alba_project;
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCounters() {
        return _getCounters.apply(this, arguments);
      }

      return getCounters;
    }(),
    // Triggers
    selectPop: function selectPop(pop) {
      this.pops = [pop];
    },
    selectCrm: function selectCrm(crm) {
      // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
      // si había una zona seleccionada, la variable selectedZona será null.
      this.selectedCrm = this.selectedCrm != crm ? crm : null;
    },
    selectZona: function selectZona(zona) {
      this.selectedZona = this.selectedZona != zona ? zona : null;
    },
    getAsyncData: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (text) {
      var _this5 = this;

      // String update
      if (this.searchText !== text) {
        this.searchText = text;
        this.popSearch = [];
        this.page = 1;
        this.totalPages = 1;
      } // String cleared


      if (!text.length) {
        this.popSearch = [];
        this.page = 1;
        this.totalPages = 1;
        return;
      } // Reached last page


      if (this.page > this.totalPages) {
        return;
      }

      this.isFetching = true;
      axios.get("/api/searchPops?api_token=".concat(this.user.api_token, "&text=").concat(text, "&crm_id=").concat(this.selectedCrm ? this.selectedCrm.id : 0, "&zona_id=").concat(this.selectedZona ? this.selectedZona.id : 0, "&core=").concat(this.core, "&page=").concat(this.page)).then(function (response) {
        response.data.data.forEach(function (item) {
          return _this5.popSearch.push(item);
        });
        _this5.page++;
        _this5.totalPages = response.data.last_page;
        _this5.counter = response.data.total;
      })["catch"](function (error) {
        throw error;
      })["finally"](function () {
        _this5.isFetching = false;
      });
    }, 50),
    getMoreAsyncData: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      this.getAsyncData(this.searchText);
    }, 10),
    clearSearch: function clearSearch() {
      this.popSearch = [];
      this.searchText = '';
      this.selectedPop = null;
    },
    // Style mode
    styleMode: function styleMode() {
      if (this.darkMode == 1) {
        // dark mode
        this.bodyBackground = 'has-background-black-ter';
        this.boxBackground = 'has-background-dark';
        this.primaryText = 'has-text-white';
        this.secondaryText = 'has-text-grey-light';
        this.searchBodyBackground = 'has-background-dark';
        this.innerBackground = 'has-background-dark-ter shadow-inset-dark', this.bodyBackgroundEnergy = 'has-background-black-ter', this.bodyBackgroundClimate = 'has-background-black-ter', this.bodyBackgroundInfrastructure = 'has-background-black-ter', this.boxBackgroundEnergy = 'has-background-light', this.boxBackgroundClimate = 'has-background-light', this.boxBackgroundInfrastructure = 'has-background-light';
      } else {
        // light mode
        this.bodyBackground = 'has-background-light';
        this.boxBackground = 'has-background-white';
        this.primaryText = 'has-text-dark';
        this.secondaryText = 'has-text-grey';
        this.searchBodyBackground = 'has-background-white';
        this.innerBackground = 'has-background-white shadow-inset', this.bodyBackgroundEnergy = 'has-background-white', this.bodyBackgroundClimate = 'has-background-white', this.bodyBackgroundInfrastructure = 'has-background-white', this.boxBackgroundEnergy = 'has-background-light', this.boxBackgroundClimate = 'has-background-light', this.boxBackgroundInfrastructure = 'has-background-light';
      }
    },
    // SWITCHES
    switchCore: function () {
      var _switchCore = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.core = this.core == 0 ? 1 : 0;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function switchCore() {
        return _switchCore.apply(this, arguments);
      }

      return switchCore;
    }(),
    changeStyle: function changeStyle() {
      this.darkMode = this.darkMode == 0 ? 1 : 0;
    },
    loadMessage: function loadMessage() {
      if (this.message) {
        this.$buefy.toast.open({
          message: this.message,
          type: 'is-success',
          duration: 5000
        });
      }
    },
    downloadPops: function downloadPops() {
      var _this6 = this;

      this.isLoading = true;
      var params = {
        'api_token': this.user.api_token,
        'core': this.core,
        'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
        'zona_id': this.selectedZona ? this.selectedZona.id : 0
      };
      axios.get('/api/pop/export', {
        params: params,
        responseType: 'arraybuffer'
      }).then(function (response) {
        console.log(response.data);
        var blob = new Blob([response.data], {
          type: 'application/xlsx'
        }); // const objectUrl = window.URL.createObjectURL(blob)
        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        var data = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = data;
        link.download = 'listado_pops.xlsx';
        link.click(); // setTimeout(function () {
        //     // For Firefox it is necessary to delay revoking the ObjectURL
        //     window.URL.revokeObjectURL(data)
        // }, 100)

        _this6.isLoading = false;

        _this6.$buefy.toast.open({
          message: 'La planilla se ha descargado exitosamente.',
          type: 'is-success',
          duration: 5000
        });
      })["catch"](function (error) {
        console.log(error);
        _this6.isLoading = false;

        _this6.$buefy.toast.open({
          message: 'Ha ocurrido un error. Favor contactar al administrador',
          type: 'is-danger',
          duration: 5000
        });
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('graphData');
    this.$eventCounters.$off('pops');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box.minim[data-v-376ddb84] {\n  height: 425px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "section",
      { staticClass: "section is-marginless", class: _vm.bodyBackground },
      [
        _c(
          "div",
          {
            staticClass: "container",
            staticStyle: { "margin-top": "-32px", "margin-bottom": "20px" }
          },
          [
            _c("b-field", [
              _c("div", { staticClass: "columns" }, [
                _c("div", { staticClass: "column" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "column has-text-centered" },
                  [
                    _c(
                      "b-switch",
                      {
                        staticClass: "is-size-6 has-text-weight-semibold",
                        class: _vm.textSwitchCore,
                        attrs: {
                          type: "is-link",
                          size: "is-medium",
                          outlined: true
                        },
                        on: { input: _vm.switchCore }
                      },
                      [
                        _vm._v(
                          "\n                            POP CORE\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "column" })
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tile is-ancestor" },
              _vm._l(_vm.crms, function(crm) {
                return _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "a",
                    {
                      staticClass: "tile is-child box",
                      class:
                        _vm.selectedCrm == crm
                          ? "has-background-link"
                          : _vm.boxBackground,
                      on: {
                        click: function($event) {
                          return _vm.selectCrm(crm)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          class:
                            _vm.selectedCrm == crm
                              ? _vm.selectedSecondaryBoxText
                              : _vm.secondaryText
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "is-size-6 has-text-weight-semibold"
                            },
                            [
                              _vm._v(
                                "\n                                CRM " +
                                  _vm._s(crm.nombre_crm) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticStyle: { "margin-top": "10px" } }, [
                            _c("div", {
                              staticClass: "is-size-7 has-text-weight-light",
                              domProps: { textContent: _vm._s("Subgerente") }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "is-size-7 has-text-weight-semibold"
                              },
                              [_vm._v(_vm._s(crm.subgerente_crm))]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.selectedCrm != null
          ? _c(
              "div",
              {
                class: _vm.innerBackground + " " + _vm.bodyBackground,
                staticStyle: { margin: "0 -24px 0 -24px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "container",
                    staticStyle: { margin: "-20px auto 10px auto" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "tile is-ancestor" },
                      _vm._l(_vm.zonas, function(zona) {
                        return _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "a",
                            {
                              staticClass: "tile is-child box",
                              class:
                                _vm.selectedZona == zona
                                  ? "has-background-link"
                                  : _vm.boxBackground,
                              on: {
                                click: function($event) {
                                  return _vm.selectZona(zona)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  class:
                                    _vm.selectedZona == zona
                                      ? _vm.selectedSecondaryBoxText
                                      : _vm.secondaryText
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "is-size-6 has-text-weight-semibold"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Zona " +
                                          _vm._s(zona.nombre_zona) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticStyle: { "margin-top": "10px" } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "is-size-7 has-text-weight-light"
                                        },
                                        [_vm._v("Coordinador")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "is-size-7 has-text-weight-semibold"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(zona.responsable.nombre) +
                                              " " +
                                              _vm._s(zona.responsable.apellido)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "container",
            staticStyle: { width: "50%", "margin-top": "30px" }
          },
          [
            _c(
              "b-autocomplete",
              {
                attrs: {
                  autofocus: "",
                  size: "is-default",
                  data: _vm.popSearch,
                  rounded: "",
                  "icon-pack": "fas",
                  icon: "search",
                  placeholder:
                    "Buscar por nemónico, nombre o direccion del sitio...",
                  "keep-first": true,
                  "open-on-focus": _vm.searchText ? true : false,
                  "custom-formatter": _vm.searchFormat,
                  loading: _vm.isFetching,
                  "check-infinite-scroll": true
                },
                on: {
                  typing: _vm.getAsyncData,
                  select: function(option) {
                    return (_vm.selected = option)
                  },
                  "infinite-scroll": _vm.getMoreAsyncData
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "columns",
                            staticStyle: { padding: "10px" }
                          },
                          [
                            _c("div", { staticClass: "column is-5" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(props.option.nem_site) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-semibold",
                                  class: _vm.primaryText
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        props.option
                                          ? props.option.nombre_sitio
                                          : ""
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-normal",
                                  class: _vm.secondaryText
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        props.option
                                          ? props.option.nombre_comuna
                                          : ""
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-normal",
                                  class: _vm.secondaryText
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        props.option
                                          ? "Zona " + props.option.nombre_zona
                                          : ""
                                      ) +
                                      " - " +
                                      _vm._s(
                                        props.option
                                          ? "CRM " + props.option.nombre_crm
                                          : ""
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "column is-2" }, [
                              _c("div", { staticClass: "tags has-addons" }, [
                                _c("span", { staticClass: "tag is-dark" }, [
                                  _vm._v("categoría")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "tag has-text-weight-bold",
                                    class:
                                      props.option.classification_type_id == 1
                                        ? "is-danger"
                                        : props.option.classification_type_id ==
                                          2
                                        ? "is-warning"
                                        : props.option.classification_type_id ==
                                          3
                                        ? "is-link"
                                        : "is-info"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          props.option
                                            ? props.option.classification_type
                                            : ""
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", {}, [
                                props.option.alba_project == 1
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "tag is-light is-info has-text-weight-bold is-size-7"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              props.option.alba_project == 1
                                                ? "alba"
                                                : ""
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "column is-3" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "column has-text-right" },
                              [
                                _c("div", {}, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "button is-small is-default is-fullwidth",
                                      on: {
                                        click: function($event) {
                                          return _vm.selectPop(props.option)
                                        }
                                      },
                                      model: {
                                        value: _vm.selectedPop,
                                        callback: function($$v) {
                                          _vm.selectedPop = $$v
                                        },
                                        expression: "selectedPop"
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        attrs: { icon: "map-marked-alt" }
                                      }),
                                      _vm._v(
                                        " Ver en mapa\n                                "
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {},
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "button is-small is-link is-fullwidth",
                                        attrs: {
                                          to: "/pop/" + props.option.id,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _c("font-awesome-icon", {
                                          attrs: { icon: "info-circle" }
                                        }),
                                        _vm._v(
                                          " Ver detalles\n                                "
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              },
              [
                _c("template", { slot: "header" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "is-size-7 has-text-weight-semibold has-text-link"
                    },
                    [
                      _vm._v(" " + _vm._s(_vm.counter) + " "),
                      _c("span", { staticClass: "has-text-weight-normal" }, [
                        _vm._v("Sitios")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._v(" "),
                _c("template", { slot: "footer" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.page > _vm.totalPages,
                          expression: "page > totalPages"
                        }
                      ],
                      staticClass: "has-text-grey"
                    },
                    [_vm._v(" No hay más sitios. ")]
                  )
                ])
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: _vm.bodyBackground,
            staticStyle: { margin: "20px 0 -30px 0" }
          },
          [
            _c("div", {}, [
              _c("div", { staticClass: "tile is-ancestor" }, [
                _c("div", { staticClass: "tile is-vertical" }, [
                  _c("div", { staticClass: "tile" }, [
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-child box",
                          class:
                            _vm.currentTab === "pops"
                              ? "has-background-link"
                              : _vm.boxBackground,
                          on: {
                            click: function($event) {
                              _vm.currentTab = "pops"
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-left": "5px"
                              }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "fa-2x",
                                class:
                                  _vm.currentTab === "pops"
                                    ? "has-text-smart-light"
                                    : "has-text-smart",
                                attrs: { pack: "fas", icon: "map-marker-alt" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "is-size-4 has-text-weight-bold",
                              class:
                                _vm.currentTab === "pops"
                                  ? "has-text-white"
                                  : _vm.primaryText,
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(_vm.popsQuantity, "0,0")
                                ) + "\n                                        "
                              ),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-normal",
                                  class:
                                    _vm.currentTab === "pops"
                                      ? "has-text-white"
                                      : _vm.secondaryText
                                },
                                [_vm._v("POP")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-child box",
                          class:
                            _vm.currentTab === "sites"
                              ? "has-background-link"
                              : _vm.boxBackground,
                          on: {
                            click: function($event) {
                              _vm.currentTab = "sites"
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-left": "5px"
                              }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "fa-2x",
                                class:
                                  _vm.currentTab === "sites"
                                    ? "has-text-eco"
                                    : "has-text-eco",
                                attrs: { pack: "fas", icon: "server" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "is-size-4 has-text-weight-bold",
                              class:
                                _vm.currentTab === "sites"
                                  ? "has-text-white"
                                  : _vm.primaryText,
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(_vm.sitesQuantity, "0,0")
                                ) + "\n                                        "
                              ),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-normal",
                                  class:
                                    _vm.currentTab === "sites"
                                      ? "has-text-white"
                                      : _vm.secondaryText
                                },
                                [_vm._v("Sitios")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-child box",
                          class:
                            _vm.currentTab === "technologies"
                              ? "has-background-link"
                              : _vm.boxBackground,
                          on: {
                            click: function($event) {
                              _vm.currentTab = "technologies"
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-left": "5px"
                              }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "fa-2x",
                                class:
                                  _vm.currentTab === "technologies"
                                    ? "has-text-positive"
                                    : "has-text-positive",
                                attrs: { pack: "fas", icon: "signal" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "is-size-4 has-text-weight-bold",
                              class:
                                _vm.currentTab === "technologies"
                                  ? "has-text-white"
                                  : _vm.primaryText,
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(
                                    _vm.technologiesQuantity,
                                    "0,0"
                                  )
                                ) + "\n                                        "
                              ),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-normal",
                                  class:
                                    _vm.currentTab === "technologies"
                                      ? "has-text-white"
                                      : _vm.secondaryText
                                },
                                [_vm._v("Tecnologías")]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tile" }, [
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-child box",
                          class:
                            _vm.currentTab === "critics"
                              ? "has-background-link"
                              : _vm.boxBackground,
                          on: { click: _vm.viewCriticPops }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-left": "5px"
                              }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "has-text-yellow fa-2x",
                                attrs: {
                                  pack: "fas",
                                  icon: "exclamation-triangle"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "is-size-4 has-text-weight-bold",
                              class:
                                _vm.currentTab === "critics"
                                  ? "has-text-white"
                                  : _vm.primaryText,
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(_vm.criticsQuantity, "0,0")
                                ) + "\n                                        "
                              ),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-normal",
                                  class:
                                    _vm.currentTab === "critics"
                                      ? "has-text-white"
                                      : _vm.secondaryText
                                },
                                [_vm._v("POP Críticos")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-child box",
                          class:
                            _vm.currentTab === "alba"
                              ? "has-background-link"
                              : _vm.boxBackground,
                          on: { click: _vm.viewAlbaPops }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-left": "5px"
                              }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "has-text-smart fa-2x",
                                attrs: {
                                  pack: "fas",
                                  icon: "file-invoice-dollar"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "is-size-4 has-text-weight-bold",
                              class:
                                _vm.currentTab === "alba"
                                  ? "has-text-white"
                                  : _vm.primaryText,
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(_vm.albaQuantity, "0,0")
                                ) + "\n                                        "
                              ),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-normal",
                                  class:
                                    _vm.currentTab === "alba"
                                      ? "has-text-white"
                                      : _vm.secondaryText
                                },
                                [_vm._v("Proyecto Alba")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "tile is-child box has-background-dark has-text-white",
                          staticStyle: { position: "relative" },
                          on: { click: _vm.downloadPops }
                        },
                        [
                          _c("b-icon", {
                            staticClass: "has-text-eco fa-2x",
                            staticStyle: {
                              "padding-top": "20px",
                              "padding-left": "5px"
                            },
                            attrs: { pack: "fas", icon: "download" }
                          }),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _c("b-loading", {
                            attrs: {
                              "is-full-page": false,
                              active: _vm.isLoading,
                              "can-cancel": true
                            },
                            on: {
                              "update:active": function($event) {
                                _vm.isLoading = $event
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tile" }, [
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c("div", { staticClass: "tile is-child box" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "is-size-5 has-text-weight-semibold title"
                          },
                          [_vm._v("Nuevos POP")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "is-size-3 has-text-centered" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.last_data_counters &&
                                  _vm.last_data_counters.pop_news_month
                              ) + "\n                                        "
                            ),
                            _c(
                              "p",
                              {
                                staticClass: "is-size-6 has-text-weight-light"
                              },
                              [_vm._v("POP nuevos ingresados este mes")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "field",
                            staticStyle: { "margin-top": "20px" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "is-size-7 has-text-weight-light"
                              },
                              [_vm._v("Utimo POP ingresado:")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "is-size-6",
                                attrs: {
                                  to:
                                    "/pop/" +
                                    _vm.last_data_counters.last_site.pop.id,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      _vm.last_data_counters.last_site.nem_site
                                    ) +
                                    " - " +
                                    _vm._s(
                                      _vm.last_data_counters.last_site.nombre
                                    ) +
                                    "\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "is-size-7" }, [
                              _c("p", [
                                _vm._v(
                                  _vm._s(
                                    _vm.last_data_counters.last_site.pop.comuna
                                      .zona.nombre_zona
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "has-text-weight-light" },
                                [
                                  _vm._v(
                                    "CRM " +
                                      _vm._s(
                                        _vm.last_data_counters.last_site.pop
                                          .comuna.zona.crm.nombre_crm
                                      )
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "has-text-right is-size-7 has-text-weight-light",
                            staticStyle: { "padding-top": "10px" }
                          },
                          [
                            _vm._v(
                              "Fecha actualización: " +
                                _vm._s(_vm.last_data_counters.last_updated_pops)
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-parent" }, [
                      _c("div", { staticClass: "tile is-child box" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "is-size-5 has-text-weight-semibold title"
                          },
                          [_vm._v("Nuevos Sitios")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "is-size-3 has-text-centered" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.last_data_counters &&
                                  _vm.last_data_counters.sites_news_month
                              ) + "\n                                        "
                            ),
                            _c(
                              "p",
                              {
                                staticClass: "is-size-6 has-text-weight-light"
                              },
                              [_vm._v("Sitios nuevos ingresados este mes")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "field",
                            staticStyle: { "margin-top": "20px" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "is-size-7 has-text-weight-light"
                              },
                              [_vm._v("Utimo Sitio ingresado:")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "is-size-6",
                                attrs: {
                                  to:
                                    "/pop/" +
                                    _vm.last_data_counters.last_site.pop.id,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      _vm.last_data_counters.last_site.nem_site
                                    ) +
                                    " - " +
                                    _vm._s(
                                      _vm.last_data_counters.last_site.nombre
                                    ) +
                                    "\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "is-size-7" }, [
                              _c("p", [
                                _vm._v(
                                  _vm._s(
                                    _vm.last_data_counters.last_site.pop.comuna
                                      .zona.nombre_zona
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "has-text-weight-light" },
                                [
                                  _vm._v(
                                    "CRM " +
                                      _vm._s(
                                        _vm.last_data_counters.last_site.pop
                                          .comuna.zona.crm.nombre_crm
                                      )
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "has-text-right is-size-7 has-text-weight-light",
                            staticStyle: { "padding-top": "10px" }
                          },
                          [
                            _vm._v(
                              "Fecha actualización: " +
                                _vm._s(
                                  _vm.last_data_counters.last_updated_sites
                                )
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tile is-parent is-vertical" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child box",
                      class: _vm.boxBackground
                    },
                    [
                      _c("map-view", {
                        attrs: {
                          user: _vm.user,
                          pops: _vm.pops,
                          map_attributes: _vm.map_attributes,
                          darkMode: _vm.darkMode
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tile" }, [
                  _c("div", { staticClass: "tile is-parent is-vertical" }, [
                    _c(
                      "article",
                      {
                        staticClass: "tile is-child box",
                        class: _vm.boxBackground
                      },
                      [
                        _c(
                          "keep-alive",
                          [
                            _c(_vm.currentTabComponent, {
                              tag: "component",
                              attrs: {
                                user: _vm.user,
                                bodyBackground: _vm.bodyBackground,
                                boxBackground: _vm.boxBackground,
                                primaryText: _vm.primaryText,
                                secondaryText: _vm.secondaryText,
                                selectedCrm: this.selectedCrm,
                                selectedZona: this.selectedZona,
                                core: _vm.core,
                                last_updated: _vm.currentLastUpdateData
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    this.currentTab !== "critics" && this.currentTab !== "alba"
                      ? _c(
                          "article",
                          [
                            _c(
                              "keep-alive",
                              [
                                _c("pret-data-chart", {
                                  attrs: {
                                    user: _vm.user,
                                    bodyBackground: _vm.bodyBackground,
                                    boxBackground: _vm.boxBackground,
                                    primaryText: _vm.primaryText,
                                    secondaryText: _vm.secondaryText
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "section", class: _vm.bodyBackground }, [
      _c(
        "div",
        { staticClass: "columns is-multiline" },
        [
          _c("electric-lines-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          }),
          _vm._v(" "),
          _c("generator-sets-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          }),
          _vm._v(" "),
          _c("power-rectifiers-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          }),
          _vm._v(" "),
          _c("air-conditioners-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          }),
          _vm._v(" "),
          _c("vertical-structures-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          }),
          _vm._v(" "),
          _c("infrastructures-data", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText,
              selectedCrm: this.selectedCrm,
              selectedZona: this.selectedZona,
              core: _vm.core
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "is-size-4 has-text-weight-bold",
        staticStyle: { "margin-top": "10px" }
      },
      [
        _c("p", { staticClass: "is-size-6 has-text-weight-normal" }, [
          _vm._v("Descargar listado de POP")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "376ddb84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=style&index=0&id=376ddb84&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_376ddb84_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);