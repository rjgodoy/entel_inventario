(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
      return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./PopsData */ "./resources/js/components/dashboard/PopsData.vue"));
    },
    DataChart: function DataChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, /*! ./PopDataChart */ "./resources/js/components/dashboard/PopDataChart.vue"));
    },
    SitesData: function SitesData() {
      return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./SitesData */ "./resources/js/components/dashboard/SitesData.vue"));
    },
    TechnologiesData: function TechnologiesData() {
      return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./TechnologiesData */ "./resources/js/components/dashboard/TechnologiesData.vue"));
    },
    CriticsData: function CriticsData() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./CriticPopsData */ "./resources/js/components/dashboard/CriticPopsData.vue"));
    },
    AlbaData: function AlbaData() {
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./AlbaPopsData */ "./resources/js/components/dashboard/AlbaPopsData.vue"));
    },
    // ###### Map ###########
    // PopsMap,
    MapView: function MapView() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../maps/MapView */ "./resources/js/components/maps/MapView.vue"));
    },
    // MapView,
    // ###### Charts ########
    PretDataChart: function PretDataChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./PretDataChart */ "./resources/js/components/dashboard/PretDataChart.vue"));
    },
    // RadialChart,
    // RedCoreChart,
    // ###### Equipment #####
    ElectricLinesData: function ElectricLinesData() {
      return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./ElectricLinesData */ "./resources/js/components/dashboard/ElectricLinesData.vue"));
    },
    GeneratorSetsData: function GeneratorSetsData() {
      return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./GeneratorSetsData */ "./resources/js/components/dashboard/GeneratorSetsData.vue"));
    },
    PowerRectifiersData: function PowerRectifiersData() {
      return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./PowerRectifiersData */ "./resources/js/components/dashboard/PowerRectifiersData.vue"));
    },
    AirConditionersData: function AirConditionersData() {
      return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./AirConditionersData */ "./resources/js/components/dashboard/AirConditionersData.vue"));
    },
    VerticalStructuresData: function VerticalStructuresData() {
      return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./VerticalStructuresData */ "./resources/js/components/dashboard/VerticalStructuresData.vue"));
    },
    InfrastructuresData: function InfrastructuresData() {
      return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./InfrastructuresData */ "./resources/js/components/dashboard/InfrastructuresData.vue"));
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
      // selectedPop: null,
      selectedSite: null,
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
    selectedPop: function selectedPop(newValue) {
      this.pops = [newValue];
    },
    selectedCrm: function selectedCrm(newValue) {
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
    selectedZona: function selectedZona(newValue) {
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
    selectedPop: function selectedPop() {
      return this.selectedSite ? this.selectedSite.pop : null;
    },
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
                          ? "is-bold is-link"
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
                                  ? "is-bold is-link"
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
                                        props.option ? props.option.nombre : ""
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
                                          ? props.option.pop.comuna
                                              .nombre_comuna
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
                                          ? "Zona " +
                                              props.option.pop.comuna.zona
                                                .nombre_zona
                                          : ""
                                      ) +
                                      " - " +
                                      _vm._s(
                                        props.option
                                          ? "CRM " +
                                              props.option.pop.comuna.zona.crm
                                                .nombre_crm
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
                                                .classification_type
                                            : ""
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", {}, [
                                props.option.pop.alba_project == 1
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
                                              props.option.pop.alba_project == 1
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
                                          return _vm.selectPop(props.option.pop)
                                        }
                                      },
                                      model: {
                                        value: _vm.selectedSite,
                                        callback: function($$v) {
                                          _vm.selectedSite = $$v
                                        },
                                        expression: "selectedSite"
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
                                          to: "/pop/" + props.option.pop.id,
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
                              ? "is-bold is-link"
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
                            { staticStyle: { "padding-top": "10px" } },
                            [
                              _c("b-icon", {
                                staticClass: "fa-2x",
                                class:
                                  _vm.currentTab === "pops"
                                    ? "has-text-smart"
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
                              ? "is-bold is-link"
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
                            { staticStyle: { "padding-top": "10px" } },
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
                              ? "is-bold is-link"
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
                              ? "is-bold is-link"
                              : _vm.boxBackground,
                          on: { click: _vm.viewCriticPops }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { "padding-top": "10px" } },
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
                              ? "is-bold is-link"
                              : _vm.boxBackground,
                          on: { click: _vm.viewAlbaPops }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { "padding-top": "10px" } },
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
                            "tile is-child box is-bold is-dark has-text-white",
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
        _c("p", { staticClass: "is-size-6 has-text-weight-semibold" }, [
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