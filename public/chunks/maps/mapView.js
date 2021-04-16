(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/maps/mapView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_markerclusterer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/markerclusterer */ "./node_modules/@google/markerclusterer/dist/markerclusterer.esm.js");
/* harmony import */ var _constants_gmaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/gmaps */ "./resources/js/constants/gmaps.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  props: ['pops'],
  data: function data() {
    return {
      mapAttributes: {
        latitude: -33.4446550,
        longitude: -70.6561690,
        zoom: 3
      },
      popData: null
    };
  },
  computed: {
    locations: function locations() {
      var array = [];

      var _iterator = _createForOfIteratorHelper(this.pops),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var m = _step.value;
          var position = {
            'id': m.id,
            'position': {
              'lat': parseFloat(m.latitude),
              'lng': parseFloat(m.longitude)
            }
          };
          array.push(position);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
      return array;
    }
  },
  watch: {
    pops: function pops(value) {
      this.loadMap();
    }
  },
  mounted: function mounted() {// 
  },
  methods: {
    loadMap: function loadMap() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var google, map, markerClickHandler, markers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_constants_gmaps__WEBPACK_IMPORTED_MODULE_2__["default"])();

              case 3:
                google = _context.sent;
                map = new google.maps.Map(document.getElementById('map'), {
                  center: {
                    lat: parseFloat(_this.mapAttributes.latitude),
                    lng: parseFloat(_this.mapAttributes.longitude)
                  },
                  zoom: _this.mapAttributes.zoom
                });

                markerClickHandler = function markerClickHandler(marker) {
                  map.setZoom(13);
                  map.setCenter(marker.getPosition());
                  axios.get("/api/popInfo/".concat(marker.id)).then(function (response) {
                    _this.popData = response.data;
                    var class_id = 6;
                    var class_type;
                    _this.popData.sites && _this.popData.sites.forEach(function (item) {
                      if (item.classification_type_id && item.classification_type_id < class_id) {
                        class_id = item.classification_type_id;
                        class_type = item.classification_type.classification_type;
                      }
                    });
                    var comuna = _this.popData.comuna ? _this.popData.comuna.nombre_comuna : '';
                    var zona = _this.popData.zona ? _this.popData.zona.nombre_zona : '';
                    var crm = _this.popData.zona ? _this.popData.zona.crm.nombre_crm : '';
                    var infowindow = new google.maps.InfoWindow({
                      content: "\n                                <div class=\"card\">\n                                    <div class=\"card-content\">\n                                        <div class=\"media\">\n                                            <div class=\"media-left\">\n                                                <span class=\"tag ".concat(class_id == 1 ? 'is-danger' : class_id == 2 ? 'is-warning' : class_id == 3 ? 'is-blue' : 'is-link', " is-large has-text-weight-bold\" data-tooltip=\"Categor\xEDa\">\n                                                    ").concat(class_type, "\n                                                </span>\n                                            </div>\n                                            <div class=\"media-content\">\n                                                <p class=\"has-text-weight-bold is-size-4\">").concat(_this.popData.nombre, "</p>\n                                                <p class=\"has-text-weight-normal is-size-6\">").concat(_this.popData.direccion ? _this.popData.direccion : 'Sin dirección registrada', ", ").concat(comuna, "</p>\n                                                <p class=\"has-text-weight-light is-size-6\">Zona ").concat(zona, ", CRM ").concat(crm, "</p>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"content\">\n                                            <a href=\"/pop/").concat(_this.popData.id, "\" target=\"_blank\" class=\"button is-outlined is-link is-small\">\n                                                <font-awesome-icon icon=\"info-circle\"/>\n                                                &nbsp;Ver detalles\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>")
                    });
                    infowindow.open(map, marker);
                  });
                };

                markers = _this.locations.map(function (location) {
                  var marker = new google.maps.Marker(_objectSpread(_objectSpread({}, location), {}, {
                    map: map
                  }));

                  if (_this.locations.length > 1) {
                    marker.addListener('click', function () {
                      return markerClickHandler(marker);
                    });
                  } else {
                    markerClickHandler(marker);
                  }

                  return marker;
                });
                new _google_markerclusterer__WEBPACK_IMPORTED_MODULE_1__["default"](map, markers, {
                  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticStyle: { height: "95%", "padding-bottom": "0px" },
    attrs: { id: "map" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/maps/PopsToolMapView.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/maps/PopsToolMapView.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopsToolMapView.vue?vue&type=template&id=2231b57a& */ "./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a&");
/* harmony import */ var _PopsToolMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopsToolMapView.vue?vue&type=script&lang=js& */ "./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopsToolMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/maps/PopsToolMapView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsToolMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopsToolMapView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopsToolMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsToolMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopsToolMapView.vue?vue&type=template&id=2231b57a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopsToolMapView.vue?vue&type=template&id=2231b57a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsToolMapView_vue_vue_type_template_id_2231b57a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);