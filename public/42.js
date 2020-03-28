(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['pop', // 'rcas',
  'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {// radio_pe_3g: this.pop.pe_3g
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996& ***!
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
  return _c(
    "section",
    { staticClass: "section", staticStyle: { "min-height": "500px" } },
    [
      _c("div", { class: _vm.bodyBackground }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "tile is-ancestor" }, [
            _c("div", { staticClass: "tile is-parent" }, [
              _c("div", { staticClass: "tile is-child box" }, [
                _c(
                  "div",
                  {
                    staticClass: "is-size-5 title has-text-weight-semibold",
                    class: _vm.primaryText
                  },
                  [_vm._v("NEGOCIO FIJO")]
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { padding: "10px" } }, [
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.pe_3g
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.pe_3g ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.pe_3g
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("PE 3G")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.mpls
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.mpls ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.mpls
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("MPLS")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.olt
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.olt ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.olt
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("OLT")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.olt_3play
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.olt_3play ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.olt_3play
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("OLT 3Play")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.core
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.core ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.core
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("CORE")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.bafi
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.bafi ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.bafi
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Banda Ancha Fija Inalámbrica (BAFI)")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tile is-parent" }, [
              _c("div", { staticClass: "tile is-child box" }, [
                _c(
                  "div",
                  {
                    staticClass: "is-size-5 title has-text-weight-semibold",
                    class: _vm.primaryText
                  },
                  [_vm._v("NEGOCIO MOVIL")]
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { padding: "10px" } }, [
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.red_minima_n1
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.red_minima_n1 ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.red_minima_n1
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Red Mínima N1")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.red_minima_n2
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.red_minima_n2 ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.red_minima_n2
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Red Mínima N2")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.vip
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.vip ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.vip
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("VIP")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.localidad_obligatoria
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.localidad_obligatoria ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.localidad_obligatoria
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Localidad Obligatoria")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.ranco
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.ranco ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.ranco
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("RAN Consolidado (RANCO)")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tile is-parent" }, [
              _c("div", { staticClass: "tile is-child box" }, [
                _c(
                  "div",
                  {
                    staticClass: "is-size-5 title has-text-weight-semibold",
                    class: _vm.primaryText
                  },
                  [_vm._v("CARACTERISTICAS INFRAESTRUCTURA")]
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { padding: "10px" } }, [
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.offgrid
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.offgrid ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.offgrid
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Offgrid")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.solar
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.solar ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.solar
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Paneles Solares")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pop.eolica
                          ? "has-text-eco"
                          : "has-text-grey-lighter",
                        attrs: {
                          icon: ["far", "check-circle"],
                          disabled: _vm.pop.eolica ? false : true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pop.eolica
                            ? "has-text-weight-normal"
                            : "has-text-grey-lighter"
                        },
                        [_vm._v("Eólico")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/Characteristics.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pops/Characteristics.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Characteristics.vue?vue&type=template&id=311d2996& */ "./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996&");
/* harmony import */ var _Characteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Characteristics.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Characteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Characteristics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Characteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Characteristics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Characteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Characteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Characteristics.vue?vue&type=template&id=311d2996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Characteristics.vue?vue&type=template&id=311d2996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Characteristics_vue_vue_type_template_id_311d2996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);