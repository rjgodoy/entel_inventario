(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EcoMapView: function EcoMapView() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ../maps/EcoMapView */ "./resources/js/components/maps/EcoMapView.vue"));
    },
    Rcas: function Rcas() {
      return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! ./RCAs */ "./resources/js/components/eco/RCAs.vue"));
    },
    TemporalStorages: function TemporalStorages() {
      return __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! ./TemporalStorages */ "./resources/js/components/eco/TemporalStorages.vue"));
    },
    PopProtectedZones: function PopProtectedZones() {
      return __webpack_require__.e(/*! import() */ 60).then(__webpack_require__.bind(null, /*! ./PopProtectedZones */ "./resources/js/components/eco/PopProtectedZones.vue"));
    },
    ProtectedZones: function ProtectedZones() {
      return __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! ./ProtectedZones */ "./resources/js/components/eco/ProtectedZones.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      popProtectedZones: [],
      protectedZones: [],
      storageZones: [],
      map_attributes: {
        latitude: -33.44444275,
        longitude: -70.6561017,
        zoom: 5,
        storageIcon: '../img/markers/storagePin.png',
        protectedZoneIcon: '../img/markers/entelEcoPin.png'
      }
    };
  },
  computed: {
    pops: function pops() {
      var array = [];
      this.popProtectedZones && this.popProtectedZones.forEach(function (element) {
        return array.push(element);
      });
      this.storageZones && this.storageZones.forEach(function (element) {
        return array.push(element);
      });
      return array;
    }
  },
  mounted: function mounted() {
    this.getPopProtectedZones();
    this.getProtectedZones();
    this.getStorageZones();
  },
  methods: {
    getPopProtectedZones: function getPopProtectedZones() {
      var _this = this;

      axios.get("/api/eco?api_token=".concat(this.user.api_token)).then(function (response) {
        _this.popProtectedZones = response.data.environmentalData; // console.log(this.popProtectedZones)
      });
    },
    getProtectedZones: function getProtectedZones() {
      var _this2 = this;

      axios.get("/api/ecoZones?api_token=".concat(this.user.api_token)).then(function (response) {
        _this2.protectedZones = response.data.environmentalData;
        console.log(_this2.protectedZones);
      });
    },
    getStorageZones: function getStorageZones() {
      var _this3 = this;

      axios.get("/api/storages?api_token=".concat(this.user.api_token)).then(function (response) {
        _this3.storageZones = response.data.environmentalData; // console.log(this.storageZones)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section has-background-light" }, [
    _c("div", { staticClass: "tile is-ancestor" }, [
      _c("div", { staticClass: "tile" }, [
        _c(
          "div",
          { staticClass: "tile is-parent is-4" },
          [
            _c("pop-protected-zones", {
              attrs: {
                popProtectedZones: _vm.popProtectedZones,
                user: _vm.user
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-parent" }, [
          _c(
            "div",
            { staticClass: "tile is-child box" },
            [
              _c("eco-map-view", {
                attrs: {
                  user: _vm.user,
                  pops: _vm.pops,
                  map_attributes: _vm.map_attributes
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tile is-parent is-3" },
          [
            _c("protected-zones", {
              attrs: { protectedZones: _vm.protectedZones, user: _vm.user }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tile is-ancestor" }, [
      _c(
        "div",
        { staticClass: "tile is-parent" },
        [_c("rcas", { attrs: { user: _vm.user } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tile is-parent" },
        [
          _c("temporal-storages", {
            attrs: { storageZones: _vm.storageZones, user: _vm.user }
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

/***/ "./resources/js/components/eco/Eco.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/eco/Eco.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eco.vue?vue&type=template&id=100bd810& */ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony import */ var _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eco.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/Eco.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=template&id=100bd810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);