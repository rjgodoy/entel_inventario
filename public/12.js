(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['generatorSet'],
  generatorSet: function generatorSet() {
    return {
      generatorSets: Array
    };
  },
  mounted: function mounted() {},
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section is-paddingless" }, [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column is-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "column is-6 tile is-parent" }, [
        _c("div", { staticClass: "tile is-child box" }, [
          _c(
            "div",
            {
              staticClass: "has-text-weight-semibold is-size-6 has-text-info",
              staticStyle: { "padding-bottom": "10px" }
            },
            [_vm._v("TABLERO DE TRANSFERENCIA AUTOMATICA")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Tipo")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "has-text-weight-semibold is-size-5 " },
                [
                  _vm._v(
                    _vm._s(
                      _vm.generatorSet.generator_tta_type
                        ? _vm.generatorSet.generator_tta_type.type
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
                  attrs: { icon: ["fas", "microchip"], size: "3x" }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-3" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "box" }, [
      _c("div", { staticClass: "tile is-ancestor" }, [
        _c("div", { staticClass: "tile is-vertical" }, [
          _c("div", { staticClass: "tile" }, [
            _c("div", { staticClass: "columns tile is-parent" }, [
              _c(
                "div",
                { staticClass: "column has-text-centered" },
                [
                  _c("font-awesome-icon", {
                    staticClass: "has-text-grey",
                    staticStyle: { opacity: "0.5", "padding-top": "10px" },
                    attrs: { icon: ["fas", "charging-station"], size: "4x" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Marca")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-5 " },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.generatorSet.generator_set_type
                          ? _vm.generatorSet.generator_set_type.type
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
                    staticStyle: { "padding-top": "5px" }
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
                        _vm.generatorSet.generator_set_type
                          ? _vm.generatorSet.generator_set_type.model
                          : "Sin información"
                      )
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Horómetro")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-6" },
                  [
                    _vm._v(
                      _vm._s(_vm.generatorSet.horometer == 1 ? "Si" : "No")
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "has-text-weight-light is-size-7",
                    staticStyle: { "padding-top": "5px" }
                  },
                  [_vm._v("Número Serie")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "has-text-weight-semibold is-size-6",
                    class: _vm.generatorSet.serial_number ? "" : "has-text-info"
                  },
                  [
                    _vm._v(
                      "\n                                " +
                        _vm._s(
                          _vm.generatorSet.serial_number
                            ? _vm.generatorSet.serial_number
                            : "Sin información"
                        ) +
                        "\n                            "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column has-text-right" }, [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Mantenedor")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
                  _vm._v(
                    _vm._s(
                      _vm.generatorSet.current_maintainer
                        ? _vm.generatorSet.current_maintainer[0].name
                        : "Sin información"
                    )
                  )
                ])
              ])
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
                      "has-text-weight-semibold is-size-6 has-text-link",
                    staticStyle: { "padding-bottom": "10px" }
                  },
                  [_vm._v("GENERADOR")]
                ),
                _vm._v(" "),
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
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.current_generator_group
                          .generator_group_type
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(
                              _vm.generatorSet.current_generator_group
                                ? _vm.generatorSet.current_generator_group
                                    .generator_group_type.type
                                : "Sin información"
                            ) +
                            "\n                                    "
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
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.current_generator_group
                          .generator_group_type
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(
                              _vm.generatorSet.current_generator_group
                                ? _vm.generatorSet.current_generator_group
                                    .generator_group_type.model
                                : "Sin información"
                            ) +
                            "\n                                    "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column" }, [
                    _c(
                      "div",
                      { staticClass: "has-text-weight-light is-size-7" },
                      [_vm._v("Potencia")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "has-text-weight-semibold is-size-6" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.generatorSet.current_generator_group
                              ? _vm.generatorSet.current_generator_group.power
                              : "Sin información"
                          ) + " "
                        ),
                        _vm.generatorSet.current_generator_group
                          ? _c("span", { staticClass: "is-size-7" }, [
                              _vm._v("kW")
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column has-text-centered" },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "has-text-grey-lighter",
                        staticStyle: { opacity: "0.5" },
                        attrs: { icon: ["fas", "charging-station"], size: "3x" }
                      })
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
                    staticClass:
                      "has-text-weight-semibold is-size-6 has-text-link",
                    staticStyle: { "padding-bottom": "10px" }
                  },
                  [_vm._v("MOTOR")]
                ),
                _vm._v(" "),
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
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.generator_motor_type
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.generatorSet.generator_motor_type
                              ? _vm.generatorSet.generator_motor_type.type
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
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.generator_motor_type
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.generatorSet.generator_motor_type
                              ? _vm.generatorSet.generator_motor_type.model
                              : "Sin información"
                          )
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column has-text-centered" },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "has-text-grey-lighter",
                        staticStyle: { opacity: "0.5" },
                        attrs: { icon: ["fas", "cog"], size: "3x", spin: "" }
                      })
                    ],
                    1
                  )
                ])
              ])
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
                      "has-text-weight-semibold is-size-6 has-text-link",
                    staticStyle: { "padding-bottom": "10px" }
                  },
                  [_vm._v("ESTANQUE")]
                ),
                _vm._v(" "),
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
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.generator_tank_type
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.generatorSet.generator_tank_type
                              ? _vm.generatorSet.generator_tank_type.type
                              : "Sin información"
                          )
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column" }, [
                    _c(
                      "div",
                      { staticClass: "has-text-weight-light is-size-7" },
                      [_vm._v("Capacidad")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "has-text-weight-semibold is-size-6" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.generatorSet.current_generator_tank.capacity
                              ? _vm.generatorSet.current_generator_tank.capacity
                              : "Sin información"
                          ) + " "
                        ),
                        _vm.generatorSet.current_generator_tank
                          ? _c("span", { staticClass: "is-size-7" }, [
                              _vm._v("Lts")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "has-text-weight-light is-size-7",
                        staticStyle: { "margin-top": "5px" }
                      },
                      [_vm._v("Consumo")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "has-text-weight-semibold is-size-6",
                        class: _vm.generatorSet.current_generator_tank
                          .consumption
                          ? ""
                          : "has-text-info"
                      },
                      [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(
                              _vm.generatorSet.current_generator_tank
                                .consumption
                                ? _vm.generatorSet.current_generator_tank
                                    .consumption
                                : "Sin información"
                            ) +
                            " \n                                        "
                        ),
                        _vm.generatorSet.current_generator_tank.consumption
                          ? _c("span", { staticClass: "is-size-7" }, [
                              _vm._v("Lts")
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column has-text-centered" },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "has-text-grey-lighter",
                        staticStyle: { opacity: "0.5" },
                        attrs: { icon: ["fas", "gas-pump"], size: "3x" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tile is-parent" })
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSet.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSet.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratorSet.vue?vue&type=template&id=2593e4eb& */ "./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb&");
/* harmony import */ var _GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratorSet.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/power/GeneratorSet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSet.vue?vue&type=template&id=2593e4eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/power/GeneratorSet.vue?vue&type=template&id=2593e4eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_2593e4eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);