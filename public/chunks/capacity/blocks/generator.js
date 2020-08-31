(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/blocks/generator"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalGenerator: function ModalGenerator() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/generator */ "chunks/pop/layout/modals/generator").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalGenerator */ "./resources/js/components/pop/layout/modals/ModalGenerator.vue"));
    }
  },
  props: ['generatorSets', 'can', 'user', 'pop'],
  data: function data() {
    return {
      generatorSetSelected: null,
      isGeneratorModalActive: false
    };
  },
  computed: {
    generatorSetsResponsable: function generatorSetsResponsable() {
      var _this = this;

      var area = 'Sin Información';
      var id = null;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (_this.generatorSets[element].current_generator_responsable) {
            switch (_this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
              case 1:
                id = 1;
                area = _this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 2:
                id = id == 1 ? id : 2;
                arae = id == 1 ? area : _this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 3:
                id = id == 1 || id == 2 ? id : 3;
                area = id == 1 || id == 2 ? area : _this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              default:
                break;
            }
          }
        });
      }

      return {
        'id': id,
        'area': area
      };
    },
    totalGeneratorSetsCapacityA: function totalGeneratorSetsCapacityA() {
      var _this2 = this;

      var sum = 0;
      var res = 0;
      var div = 1;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this2.generatorSets[element].current_generator_set_capacity ? _this2.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this2.generatorSets[element].generator_set_topology_type_id) {
            case 1:
              sum = sum + capacity;
              break;

            case 2:
              sum = sum + capacity;
              res = res + capacity;
              div = div++;
              break;

            case 3:
              sum = _this2.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum - res / div;
    },
    totalGeneratorSetsCapacityB: function totalGeneratorSetsCapacityB() {
      var _this3 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this3.generatorSets[element].current_generator_set_capacity ? _this3.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this3.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this3.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetsCapacity: function totalGeneratorSetsCapacity() {
      var _this4 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this4.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this4.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total;
        });
      }

      return total;
    },
    usedGeneratorSetsCapacityA: function usedGeneratorSetsCapacityA() {
      var _this5 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this5.generatorSets[element].current_generator_set_capacity ? _this5.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this5.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
              sum = sum + usedCapacity;
              break;

            case 3:
              sum = _this5.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum;
    },
    usedGeneratorSetsCapacityB: function usedGeneratorSetsCapacityB() {
      var _this6 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this6.generatorSets[element].current_generator_set_capacity ? _this6.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this6.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this6.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetsUsedCapacity: function totalGeneratorSetsUsedCapacity() {
      var _this7 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this7.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this7.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total;
        });
      }

      return total;
    },
    availableGeneratorSetsCapacityA: function availableGeneratorSetsCapacityA() {
      return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA;
    },
    availableGeneratorSetsCapacityB: function availableGeneratorSetsCapacityB() {
      return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB;
    },
    totalAvailableGeneratorSetsCapacity: function totalAvailableGeneratorSetsCapacity() {
      var _this8 = this;

      var total = 0;

      if (this.generatorSetsResponsable.id == 1) {
        total = this.availableGeneratorSetsCapacityA + this.availableGeneratorSetsCapacityB;
      } else {
        Object.keys(this.generatorSets).forEach(function (element) {
          total = _this8.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? _this8.generatorSets[0].current_generator_set_corp_disponibility.available_capacity : total;
        });
      }

      return total;
    }
  },
  watch: {
    generatorSets: function generatorSets(val) {// console.log(val)
    }
  },
  mounted: function mounted() {// console.log(this.generatorSets)
    // this.getGeneratorSets()
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "tile is-parent" },
    [
      _c("section", { staticClass: "tile box" }, [
        _c("div", { staticClass: "tile is-vertical" }, [
          _c(
            "div",
            {
              staticClass: "is-size-6 has-text-weight-bold",
              staticStyle: { "padding-bottom": "12px" }
            },
            [_vm._v("GRUPOS ELECTROGENOS")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tile is-vertical" }, [
            _c("div", { staticClass: "tile" }, [
              _vm.totalGeneratorSetsCapacityA
                ? _c(
                    "div",
                    { staticClass: "tile is-parent" },
                    [
                      _c(
                        "b-field",
                        {
                          staticClass: "tile",
                          attrs: {
                            label: "CAPACIDAD PLANO A",
                            "label-position": "on-border"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-parent box is-shadowless",
                              staticStyle: { border: "solid 0.05rem black" }
                            },
                            [
                              _c("div", { staticClass: "level tile" }, [
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.totalGeneratorSetsCapacityA,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Total")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.usedGeneratorSetsCapacityA,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Utilizada")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.availableGeneratorSetsCapacityA,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Disponible")]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.totalGeneratorSetsCapacityB
                ? _c(
                    "div",
                    { staticClass: "tile is-parent" },
                    [
                      _c(
                        "b-field",
                        {
                          staticClass: "tile",
                          attrs: {
                            label: "PLANO B",
                            "label-position": "on-border"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-parent box is-shadowless",
                              staticStyle: { border: "solid 0.05rem black" }
                            },
                            [
                              _c("div", { staticClass: "level tile" }, [
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.totalGeneratorSetsCapacityB,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Total")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.usedGeneratorSetsCapacityB,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Utilizada")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "level-item" }, [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-semibold is-size-6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("numeral")(
                                                _vm.availableGeneratorSetsCapacityB,
                                                "0,0.0"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7"
                                        },
                                        [_vm._v("Disponible")]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tile is-parent columns is-multiline" },
              _vm._l(_vm.generatorSets, function(generatorSet) {
                return _c(
                  "div",
                  {
                    key: generatorSet.id,
                    staticClass: "column tile is-parent",
                    class: _vm.generatorSets.length > 1 && "is-6"
                  },
                  [
                    _c("div", { staticClass: "tile " }, [
                      _c(
                        "a",
                        {
                          staticClass: "tile is-parent box",
                          on: {
                            click: function($event) {
                              _vm.isGeneratorModalActive = true
                              _vm.generatorSetSelected = generatorSet
                            }
                          }
                        },
                        [_vm._m(0, true)]
                      )
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ])
      ]),
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
            attrs: {
              generatorSet: _vm.generatorSetSelected,
              can: _vm.can,
              user: _vm.user
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "has-text-weight-semibold is-size-6" }, [
          _vm._v("Grupo Electrógeno")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-2 has-text-centered" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/blocks/GeneratorSets.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/GeneratorSets.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratorSets.vue?vue&type=template&id=612f0cd5& */ "./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5&");
/* harmony import */ var _GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratorSets.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/blocks/GeneratorSets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSets.vue?vue&type=template&id=612f0cd5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/GeneratorSets.vue?vue&type=template&id=612f0cd5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSets_vue_vue_type_template_id_612f0cd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);