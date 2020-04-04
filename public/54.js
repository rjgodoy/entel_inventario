(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'darkMode'],
  data: function data() {
    return {
      generatorSets: Array
    };
  },
  mounted: function mounted() {
    this.getGeneratorGroups();
  },
  computed: {},
  methods: {
    getGeneratorGroups: function getGeneratorGroups() {
      var _this = this;

      axios.get("/api/generatorSets/".concat(this.pop.id)).then(function (response) {
        _this.generatorSets = response.data.data; // console.log(this.generatorSets)
      })["catch"](function (error) {
        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0& ***!
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
  return _vm.generatorSets.length
    ? _c(
        "section",
        {
          staticClass: "section",
          staticStyle: { "padding-top": "0px", "padding-bottom": "48px" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "columns tile is-ancestor is-multiline" },
            _vm._l(_vm.generatorSets, function(data) {
              return _c("div", { staticClass: "column is-6 tile is-parent" }, [
                _c("div", { staticClass: "tile is-child box" }, [
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Marca")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-weight-semibold is-size-5 " },
                        [
                          _vm._v(
                            _vm._s(
                              data.generator_set_type
                                ? data.generator_set_type.generator_set_type
                                : "Sin información"
                            )
                          )
                        ]
                      ),
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
                      _c(
                        "div",
                        { staticClass: "has-text-weight-semibold is-size-6" },
                        [
                          _vm._v(
                            _vm._s(
                              data.generator_set_type
                                ? data.generator_set_type.generator_set_model
                                : "Sin información"
                            )
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column has-text-right" },
                      [
                        _c("font-awesome-icon", {
                          staticClass: "has-text-grey-lighter",
                          staticStyle: { opacity: "0.5" },
                          attrs: {
                            icon: ["fas", "charging-station"],
                            size: "3x"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column is-4" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Potencia")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-weight-normal is-size-6" },
                        [
                          _vm._v(
                            _vm._s(
                              data.power ? data.power : "Sin información"
                            ) + " "
                          ),
                          data.power
                            ? _c("span", { staticClass: "is-size-7" }, [
                                _vm._v("kW")
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column" })
                  ])
                ])
              ])
            }),
            0
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field" }, [
      _c(
        "div",
        {
          staticClass:
            "has-text-weight-semibold has-text-dark is-size-4 has-text-left"
        },
        [_vm._v("Grupos Electrógenos")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSets.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSets.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratorSets.vue?vue&type=template&id=ded74cd0& */ "./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0&");
/* harmony import */ var _GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratorSets.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/power/GeneratorSets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSets.vue?vue&type=template&id=ded74cd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSets.vue?vue&type=template&id=ded74cd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_ded74cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);