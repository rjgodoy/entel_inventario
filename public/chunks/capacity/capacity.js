(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/capacity"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"]);

var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RoomLights: function RoomLights() {
      return __webpack_require__.e(/*! import() | chunks/capacity/roomLights */ "chunks/capacity/roomLights").then(__webpack_require__.bind(null, /*! ../RoomLights */ "./resources/js/components/capacity/RoomLights.vue"));
    },
    GaugeChart: function GaugeChart() {
      return Promise.all(/*! import() | chunks/capacity/gaugeChart */[__webpack_require__.e("vendors~chunks/capacity/gaugeChart~chunks/capacity/projection~chunks/dashboard~chunks/helpers~chunks~efdab41a"), __webpack_require__.e("vendors~chunks/capacity/gaugeChart~chunks/capacity/projection~chunks/dashboard/pretDataChart"), __webpack_require__.e("chunks/capacity/gaugeChart")]).then(__webpack_require__.bind(null, /*! ../GaugeChart */ "./resources/js/components/capacity/GaugeChart.vue"));
    }
  },
  props: ['totalEnergy', 'totalClimate', 'totalSurface', 'availableEnergy', 'availableClimate', 'availableSurface', 'user', 'room'],
  data: function data() {
    return {
      totalE: null,
      totalC: null,
      totalS: null,
      availableE: null,
      availableC: null,
      availableS: null
    };
  },
  computed: {
    canViewClimate: function canViewClimate() {
      return this.user.roles[0].slug == 'engineer-admin' || this.user.roles[0].slug == 'admin' || this.user.roles[0].slug == 'developer' || this.user.roles[0].slug == 'super-viewer' || this.user_permissions.find(function (element) {
        return element.slug == 'edit-air-conditioner';
      }) ? true : false;
    }
  },
  watch: {
    totalEnergy: function totalEnergy(val) {
      // console.log(val)
      this.totalE = val;
    },
    totalClimate: function totalClimate(val) {
      // console.log(val)
      this.totalC = val;
    },
    totalSurface: function totalSurface(val) {
      // console.log(val)
      this.totalS = val;
    },
    availableEnergy: function availableEnergy(val) {
      // console.log(val)
      this.availableE = val;
    },
    availableClimate: function availableClimate(val) {
      // console.log(val)
      this.availableC = val;
    },
    availableSurface: function availableSurface(val) {
      // console.log(val)
      this.availableS = val;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column is-6" }, [
        _c(
          "div",
          { staticClass: "box is-dark is-bold" },
          [
            _c("RoomLights", { attrs: { room: _vm.room, user: _vm.user } }),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _c("GaugeChart", {
                      attrs: {
                        totalEnergy: _vm.totalEnergy,
                        totalClimate: _vm.totalClimate,
                        totalSurface: _vm.totalSurface,
                        availableEnergy: _vm.availableEnergy,
                        availableClimate: _vm.availableClimate,
                        availableSurface: _vm.availableSurface
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        {
          staticClass:
            "column has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Dashobard")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/tabs/Capacity.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Capacity.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Capacity.vue?vue&type=template&id=379c7e7e& */ "./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e&");
/* harmony import */ var _Capacity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Capacity.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Capacity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/tabs/Capacity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Capacity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Capacity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Capacity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Capacity.vue?vue&type=template&id=379c7e7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Capacity.vue?vue&type=template&id=379c7e7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capacity_vue_vue_type_template_id_379c7e7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);