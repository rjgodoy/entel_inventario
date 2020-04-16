(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalJunction: function ModalJunction() {
      return __webpack_require__.e(/*! import() */ 67).then(__webpack_require__.bind(null, /*! ./modals/ModalJunction */ "./resources/js/components/pops/layout/modals/ModalJunction.vue"));
    },
    ModalGenerator: function ModalGenerator() {
      return __webpack_require__.e(/*! import() */ 65).then(__webpack_require__.bind(null, /*! ./modals/ModalGenerator */ "./resources/js/components/pops/layout/modals/ModalGenerator.vue"));
    },
    CapacityChart: function CapacityChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./CapacityChart */ "./resources/js/components/pops/layout/CapacityChart.vue"));
    },
    // GrowingChart: () => import('./GrowingChart'),
    SpaceChart: function SpaceChart() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ../infrastructure/SpaceChart */ "./resources/js/components/pops/infrastructure/SpaceChart.vue"));
    }
  },
  props: ['user', 'pop'],
  data: function data() {
    return {
      can: null,
      junctions: [],
      generatorSets: [],
      isJunctionModalActive: false,
      isGeneratorModalActive: false
    };
  },
  mounted: function mounted() {
    this.getJunctions();
    this.getGeneratorSets();
  },
  methods: {
    getJunctions: function getJunctions() {
      var _this = this;

      axios.get("/api/junctions/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this.junctions = response.data.junction;
        _this.can = response.data.can;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getGeneratorSets: function getGeneratorSets() {
      var _this2 = this;

      axios.get("/api/generatorSets/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        _this2.generatorSets = response.data.data; // console.log(this.generatorSets)
      })["catch"](function (error) {
        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "section" }, [
          _c("div", { staticClass: "tile is-ancestor" }, [
            _c("div", { staticClass: "tile is-vertical" }, [
              _c(
                "div",
                { staticClass: "tile" },
                [
                  _c("div", { staticClass: "tile is-parent" }),
                  _vm._v(" "),
                  _vm._l(_vm.junctions, function(junction) {
                    return _c(
                      "div",
                      { staticClass: "tile is-parent" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "tile is-child is-size-5 has-text-weight-semibold",
                            on: {
                              click: function($event) {
                                _vm.isJunctionModalActive = true
                              }
                            }
                          },
                          [
                            _c("b-message", { attrs: { type: "is-success" } }, [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _vm._v("Empalme")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "column is-2 has-text-centered"
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      staticClass: "has-text-success",
                                      attrs: {
                                        icon: ["far", "check-circle"],
                                        size: "2x"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-modal",
                          {
                            attrs: {
                              active: _vm.isJunctionModalActive,
                              "has-modal-card": "",
                              "trap-focus": "",
                              "aria-role": "dialog",
                              "aria-modal": ""
                            },
                            on: {
                              "update:active": function($event) {
                                _vm.isJunctionModalActive = $event
                              }
                            }
                          },
                          [
                            _c("modal-junction", {
                              attrs: { junction: junction, can: _vm.can }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "tile is-parent" })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tile" },
                [
                  _c("div", { staticClass: "tile is-parent" }),
                  _vm._v(" "),
                  _vm._l(_vm.generatorSets, function(generatorSet) {
                    return _c(
                      "div",
                      { staticClass: "tile is-parent" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "tile is-child is-size-5 has-text-weight-semibold",
                            on: {
                              click: function($event) {
                                _vm.isGeneratorModalActive = true
                              }
                            }
                          },
                          [
                            _c("b-message", { attrs: { type: "is-warning" } }, [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _vm._v("Grupo Electrógeno")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "column is-2 has-text-centered"
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      staticClass: "has-text-warning",
                                      attrs: {
                                        icon: ["fas", "exclamation-triangle"],
                                        size: "2x"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-modal",
                          {
                            attrs: {
                              active: _vm.isGeneratorModalActive,
                              "has-modal-card": "",
                              "trap-focus": "",
                              "aria-role": "dialog",
                              "aria-modal": ""
                            },
                            on: {
                              "update:active": function($event) {
                                _vm.isGeneratorModalActive = $event
                              }
                            }
                          },
                          [
                            _c("modal-generator", {
                              attrs: { generatorSet: generatorSet }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "tile is-parent" })
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tile" }, [
                _c("div", { staticClass: "tile is-parent" }),
                _vm._v(" "),
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "tile is-child is-size-5 has-text-weight-semibold"
                    },
                    [
                      _c("b-message", { attrs: { type: "is-success" } }, [
                        _c("div", { staticClass: "columns" }, [
                          _c("div", { staticClass: "column" }, [
                            _vm._v("Tablero")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "column is-2 has-text-centered" },
                            [
                              _c("font-awesome-icon", {
                                staticClass: "has-text-success",
                                attrs: {
                                  icon: ["far", "check-circle"],
                                  size: "2x"
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tile is-parent" })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tile is-parent columns is-multiline" },
                _vm._l(_vm.pop.rooms, function(room) {
                  return _c("div", { staticClass: "column tile is-6" }, [
                    _c("div", { staticClass: "tile box is-bold is-blue" }, [
                      _c("div", { staticClass: "tile is-vertical" }, [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(
                            _vm._s(room.name) +
                              " - " +
                              _vm._s(room.old_name) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "section columns" }, [
                            _c("div", { staticClass: "column is-6" }, [
                              _c(
                                "div",
                                { staticClass: "columns is-multiline" },
                                _vm._l(room.power_rectifiers, function(
                                  power_rectifier
                                ) {
                                  return _c(
                                    "div",
                                    { staticClass: "column is-12" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "tile is-child is-size-5 has-text-weight-semibold"
                                        },
                                        [
                                          _c(
                                            "b-message",
                                            { attrs: { type: "is-success" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "columns" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "column" },
                                                    [
                                                      _vm._v(
                                                        "Planta Nº " +
                                                          _vm._s(
                                                            power_rectifier.id
                                                          )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "column is-2 has-text-centered"
                                                    },
                                                    [
                                                      _c("font-awesome-icon", {
                                                        staticClass:
                                                          "has-text-success",
                                                        attrs: {
                                                          icon: [
                                                            "far",
                                                            "check-circle"
                                                          ],
                                                          size: "2x"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "column" },
                              _vm._l(room.air_conditioners, function(
                                air_conditioner
                              ) {
                                return _c("div", { staticClass: "box" })
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/layout/Layout.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pops/layout/Layout.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6dba5166& */ "./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/layout/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6dba5166& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/layout/Layout.vue?vue&type=template&id=6dba5166&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6dba5166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);