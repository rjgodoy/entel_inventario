(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/maps/popMapView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__);


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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'classification', 'popMaster', 'darkMode'],
  data: function data() {
    return {
      pops: [],
      dependences: [],
      map: null,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      zoom: 17,
      icon_dependence: '../img/markers/pop-32.png',
      markers: [],
      dependencesActive: 0,
      // buttonName: 'Dependencias',
      depLines: [],
      arrayPath: [],
      // flightPath: null,
      style8: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }],
      style9: [{
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }]
    };
  },
  computed: {
    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__["gmapApi"],
    mapStyle: function mapStyle() {
      return this.darkMode == 1 ? this.style8 : this.style9;
    },
    center: function center() {
      return {
        lat: parseFloat(this.popMaster.latitude),
        lng: parseFloat(this.popMaster.longitude)
      };
    },
    icon_pop: function icon_pop() {
      var googleP = this.google;
      return {
        url: '../img/markers/entelPin_red-white.png',
        scaledSize: googleP && new googleP.maps.Size(30, 54),
        origin: googleP && new googleP.maps.Point(0, 0),
        anchor: googleP && new googleP.maps.Point(15, 54)
      };
    },
    buttonName: {
      get: function get() {
        return this.dependencesActive ? 'POP' : 'Dependencias';
      },
      set: function set(newValue) {// this.dependences.forEach(element => this.flightPath.setMap(null))
      }
    }
  },
  mounted: function mounted() {
    this.setMap();
    this.getDependences();
  },
  watch: {
    popMaster: function popMaster(val) {
      this.setMap();
      this.getDependences();
    }
  },
  methods: {
    setMap: function setMap() {
      var _this = this;

      this.pops = [this.popMaster];
      this.$refs.map.$mapPromise.then(function (map) {
        map.panTo({
          lat: parseFloat(_this.popMaster.latitude),
          lng: parseFloat(_this.popMaster.longitude)
        });
        _this.pops.length == 1 && map.setZoom(_this.zoom);
      });
    },
    toggleInfoWindow: function toggleInfoWindow(pop, idx) {
      var _this2 = this;

      this.infoWindowPos = {
        lat: parseFloat(pop.latitude),
        lng: parseFloat(pop.longitude)
      };
      this.infoContent = this.getInfoWindowContent(pop); //check if its the same pop that was selected if yes toggle

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } //if different pop set infowindow to open and reset current pop index
      else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }

      this.$refs.map.$mapPromise.then(function (map) {
        map.panTo({
          lat: parseFloat(_this2.popMaster.latitude),
          lng: parseFloat(_this2.popMaster.longitude)
        });
      });
    },
    getInfoWindowContent: function getInfoWindowContent(pop) {
      var thisPop = this.siteDependence(pop.id);
      console.log(thisPop);
      return "\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <span class=\"tag ".concat(thisPop.classification_type_id == 1 ? 'is-danger' : thisPop.classification_type_id == 2 ? 'is-warning' : thisPop.classification_type_id_type_id == 3 ? 'is-blue' : 'is-link', " is-large has-text-weight-bold\" data-tooltip=\"Categor\xEDa\">\n                                    ").concat(thisPop.classification_type.classification_type, "\n                                </span>\n                            </div>\n                            <div class=\"media-content\">\n                                <p class=\"has-text-weight-semibold is-size-6 has-text-info\">").concat(thisPop.nem_site, "</p>\n                                <p class=\"has-text-weight-bold is-size-4\">").concat(thisPop.nombre, "</p>\n                                <p class=\"has-text-weight-normal is-size-6\">").concat(pop.direccion ? pop.direccion : 'Sin dirección registrada', ", ").concat(pop.comuna.nombre_comuna, "</p>\n                                <p class=\"has-text-weight-light is-size-6\">Zona ").concat(pop.comuna.zona.nombre_zona, ", CRM ").concat(pop.comuna.zona.crm.nombre_crm, "</p>\n                            </div>\n                        </div>\n\n                        <div class=\"content\">\n                            <a href=\"/pop/").concat(pop.id, "\" target=\"_blank\" class=\"button is-outlined is-link is-small\">\n                                <font-awesome-icon icon=\"info-circle\"/>\n                                &nbsp;Ver detalles\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            ");
    },
    getDependences: function () {
      var _getDependences = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/dependences/".concat(this.popMaster.id)).then(function (response) {
                  _this3.dependences = response.data.data;

                  if (_this3.dependences.length) {
                    _this3.dependences.forEach(function (m) {
                      if (m.dependence) {
                        // console.log(m.dependence.nem_site)
                        var dependenceLine = [{
                          lat: parseFloat(_this3.popMaster.latitude),
                          lng: parseFloat(_this3.popMaster.longitude)
                        }, {
                          lat: parseFloat(m.dependence.pop.latitude),
                          lng: parseFloat(m.dependence.pop.longitude)
                        }];

                        _this3.depLines.push(dependenceLine);
                      }
                    });

                    _this3.setDependencesButton();
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDependences() {
        return _getDependences.apply(this, arguments);
      }

      return getDependences;
    }(),
    panDependences: function panDependences(google) {
      var _this4 = this;

      if (this.dependencesActive) {
        this.removeLines();
        this.setMap();
        this.dependencesActive = 0;
      } else {
        this.dependences.forEach(function (element) {
          return element && _this4.pops.push(element.dependence.pop);
        });
        this.$refs.map.$mapPromise.then(function (map) {
          _this4.depLines.forEach(function (element) {
            var flightPath = new google.maps.Polyline({
              path: element,
              geodesic: true,
              strokeColor: '#FF8001',
              strokeOpacity: 1.0,
              strokeWeight: 0.5
            });
            flightPath.setMap(map);

            _this4.arrayPath.push(flightPath);
          });

          map.setZoom(14);
        });
        this.dependencesActive = 1;
      }
    },
    siteDependence: function siteDependence(pop_id) {
      var dep;
      this.dependences.forEach(function (element) {
        if (element.dependence.pop_id == pop_id) {
          dep = element.dependence;
        }
      });
      return dep;
    },
    removeLines: function removeLines() {
      this.arrayPath.forEach(function (element) {
        return element.setMap(null);
      });
    },
    setDependencesButton: function setDependencesButton() {
      var _this5 = this;

      this.$refs.map.$mapPromise.then(function (map) {
        var myButton = _this5.$refs.myDependencesButton;
        myButton.index = 1;

        map.controls[_this5.google.maps.ControlPosition.TOP_LEFT].push(myButton);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "GmapMap",
    {
      ref: "map",
      staticClass: "map",
      staticStyle: {
        "min-height": "800px",
        "/*min-height": "576px",
        "*/ height": "100%"
      },
      attrs: {
        center: _vm.center,
        zoom: _vm.zoom,
        "map-type-id": "terrain",
        options: {
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
          gestureHandling: "cooperative",
          styles: _vm.mapStyle
        }
      }
    },
    [
      _c("div", { ref: "myDependencesButton" }, [
        _c(
          "button",
          {
            staticClass: "button is-link",
            staticStyle: {
              border: "2px solid #fff",
              borderRadius: "3px",
              boxShadow: "0 1px 5px rgba(0,0,0,.15)",
              marginTop: "10px",
              marginLeft: "10px",
              textAlign: "center"
            },
            on: {
              click: function($event) {
                return _vm.panDependences(_vm.google)
              }
            }
          },
          [_vm._v("\n            " + _vm._s(_vm.buttonName) + "\n        ")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.pops, function(pop, index) {
        return _c("GmapMarker", {
          key: index,
          ref: "myMarker",
          refInFor: true,
          attrs: {
            clickable: true,
            draggable: false,
            position:
              _vm.google &&
              new _vm.google.maps.LatLng({
                lat: parseFloat(pop.latitude),
                lng: parseFloat(pop.longitude)
              }),
            icon:
              pop.id == _vm.popMaster.id ? _vm.icon_pop : _vm.icon_dependence
          },
          on: {
            click: function($event) {
              pop.id == _vm.popMaster.id
                ? null
                : _vm.toggleInfoWindow(pop, index)
            }
          }
        })
      }),
      _vm._v(" "),
      _c(
        "gmap-info-window",
        {
          attrs: {
            options: _vm.infoOptions,
            position: _vm.infoWindowPos,
            opened: _vm.infoWinOpen,
            content: "Hello"
          },
          on: {
            closeclick: function($event) {
              _vm.infoWinOpen = false
            }
          }
        },
        [_c("div", { domProps: { innerHTML: _vm._s(_vm.infoContent) } })]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopMapView.vue?vue&type=template&id=6f3a01ad& */ "./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&");
/* harmony import */ var _PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopMapView.vue?vue&type=script&lang=js& */ "./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/maps/PopMapView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopMapView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopMapView.vue?vue&type=template&id=6f3a01ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);