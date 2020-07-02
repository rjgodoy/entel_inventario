(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/power/powerRectifier"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['powerRectifier'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    console.log(this.powerRectifier);
  },
  computed: {
    powerRectfierModules: function powerRectfierModules() {
      return this.powerRectifier.power_rectifier_modules;
    },
    powerPlantAModulesQuantity: function powerPlantAModulesQuantity() {
      return this.powerRectfierModules.length;
    },
    totalModulesCapacityMasterA: function totalModulesCapacityMasterA() {
      var _this = this;

      var totalCapacity = 0;
      Object.keys(this.powerRectfierModules).forEach(function (element) {
        totalCapacity = totalCapacity + _this.powerRectfierModules[element].capacity;
      });
      return totalCapacity;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tile is-child box" }, [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column" }, [
            _c(
              "div",
              {
                staticClass: "has-text-weight-light is-size-7",
                staticStyle: { "margin-top": "5px" }
              },
              [_vm._v("Marca")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
              _vm._v(
                _vm._s(
                  _vm.powerRectifier.power_rectifier_type
                    ? _vm.powerRectifier.power_rectifier_type
                        .power_rectifier_type
                    : "Sin información"
                )
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "has-text-weight-light is-size-7",
                staticStyle: { "margin-top": "5px" }
              },
              [_vm._v("Modelo")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "has-text-weight-semibold is-size-6" }, [
              _vm._v(
                _vm._s(
                  _vm.powerRectifier.power_rectifier_type
                    ? _vm.powerRectifier.power_rectifier_type
                        .power_rectifier_model
                    : "Sin información"
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c(
              "div",
              { staticClass: "column has-text-right" },
              [
                _c("font-awesome-icon", {
                  staticClass: "has-text-grey-lighter",
                  staticStyle: { opacity: "0.5" },
                  attrs: { icon: ["fas", "random"], size: "3x" }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "div",
            {
              staticClass: "has-text-weight-light is-size-7",
              staticStyle: { "margin-top": "5px" }
            },
            [_vm._v("Modo")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
            _vm._v(
              "\n                        " +
                _vm._s(
                  _vm.powerRectifier.power_rectifier_mode
                    ? _vm.powerRectifier.power_rectifier_mode.mode
                    : "Sin información"
                ) +
                "\n                    "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "div",
            {
              staticClass: "has-text-weight-light is-size-7",
              staticStyle: { "margin-top": "5px" }
            },
            [_vm._v("Capacidad total")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
            _vm._v(
              "\n                        " +
                _vm._s(
                  _vm._f("numeral")(
                    _vm.powerRectifier.capacity
                      ? _vm.powerRectifier.capacity
                      : "Sin información",
                    "0,0.0"
                  )
                ) +
                " "
            ),
            _vm.powerRectifier.capacity
              ? _c("span", { staticClass: "is-size-7" }, [_vm._v("kW")])
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
            _vm._v("Nº módulos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
            _vm._v(
              "\n                        " +
                _vm._s(_vm.powerPlantAModulesQuantity) +
                "\n                    "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
            _vm._v("Capacidad Módulos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
            _vm._v(
              "\n                        " +
                _vm._s(
                  _vm._f("numeral")(_vm.totalModulesCapacityMasterA, "0,0.0")
                ) +
                " "
            ),
            _c("span", { staticClass: "is-size-7" }, [_vm._v("kW")])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/power/PowerRectifier.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pop/power/PowerRectifier.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PowerRectifier.vue?vue&type=template&id=23e5df3a& */ "./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a&");
/* harmony import */ var _PowerRectifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PowerRectifier.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PowerRectifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/power/PowerRectifier.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PowerRectifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PowerRectifier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PowerRectifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PowerRectifier.vue?vue&type=template&id=23e5df3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/PowerRectifier.vue?vue&type=template&id=23e5df3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PowerRectifier_vue_vue_type_template_id_23e5df3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);