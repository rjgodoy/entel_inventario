(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRandom"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMicrochip"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChargingStation"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGasPump"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationTriangle"]); // import LeaderLine from 'leader-line'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Junctions: function Junctions() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/junction */ "chunks/capacity/blocks/junction").then(__webpack_require__.bind(null, /*! ../blocks/Junctions */ "./resources/js/components/capacity/blocks/Junctions.vue"));
    },
    GeneratorSets: function GeneratorSets() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/generator */ "chunks/capacity/blocks/generator").then(__webpack_require__.bind(null, /*! ../blocks/GeneratorSets */ "./resources/js/components/capacity/blocks/GeneratorSets.vue"));
    },
    SolarPanels: function SolarPanels() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/solarPanels */ "chunks/capacity/blocks/solarPanels").then(__webpack_require__.bind(null, /*! ../blocks/SolarPanels */ "./resources/js/components/capacity/blocks/SolarPanels.vue"));
    },
    Equipment: function Equipment() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/equipment */ "chunks/capacity/blocks/equipment").then(__webpack_require__.bind(null, /*! ../blocks/Equipment */ "./resources/js/components/capacity/blocks/Equipment.vue"));
    }
  },
  props: ['user', 'room', 'junctions', 'generatorSets', 'planes', 'planeTypes', 'airConditioners', 'canEditJunctions', 'canEditGeneratorSets', 'canEditPowerRectifiers', 'canEditAirConditioners', 'canEditSurface', 'canEditDistribution', 'totalJunctionsCapacity', 'totalUsedJunctionsCapacity', 'totalAvailableJunctionsCapacity', 'totalGeneratorSetsCapacity', 'totalGeneratorSetsUsedCapacity', 'totalAvailableGeneratorSetsCapacity', 'totalGeneratorSetsCapacityA', 'totalGeneratorSetsCapacityB', 'usedGeneratorSetsCapacityA', 'usedGeneratorSetsCapacityB', 'availableGeneratorSetsCapacityA', 'availableGeneratorSetsCapacityB', 'totalSurface', 'usedSurface', 'availableSurface', 'totalDistributionCapacity', 'usedDistributionCapacity', 'availableDistributionCapacity'],
  data: function data() {
    return {
      isEditMode: false,
      newTheoreticalAutonomy: this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
    };
  },
  computed: {
    pop: function pop() {
      return this.room && this.room.pop;
    }
  },
  watch: {
    room: function room(val) {
      this.newTheoreticalAutonomy = this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0;
    }
  },
  methods: {
    updateAutonomy: function updateAutonomy() {
      var _this = this;

      if (!this.isEditMode && this.pop && this.pop.current_battery_bank_autonomy && this.newTheoreticalAutonomy != this.pop.current_battery_bank_autonomy.theoretical) {
        var params = {
          'pop_id': this.pop.id,
          'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
        };
        axios.post("/api/batteryBankAutonomies", params).then(function (response) {
          _this.$eventBus.$emit('battery-autonomy'); // console.log(response.data)

        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e& ***!
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
  return _c("section", {}, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "tile is-ancestor",
        staticStyle: { "padding-top": "24px" }
      },
      [
        _c("div", { staticClass: "tile is-vertical" }, [
          _c("div", { staticClass: "tile" }, [
            _c("div", { staticClass: "tile is-parent is-4" }, [
              _c(
                "div",
                { staticClass: "tile box is-child has-background" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "is-box-background is-transparent-light",
                      staticStyle: { "margin-top": "-20px" }
                    },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "is-pulled-right",
                        attrs: { icon: ["fas", "car-battery"], size: "10x" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm.canEditJunctions
                      ? _c("div", { staticClass: "column" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button is-small is-pulled-right",
                              class: _vm.isEditMode
                                ? "is-success"
                                : "is-default",
                              on: {
                                click: function($event) {
                                  _vm.isEditMode = !_vm.isEditMode
                                  _vm.updateAutonomy()
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: {
                                  icon: _vm.isEditMode
                                    ? ["fas", "check"]
                                    : ["fas", "pencil-alt"]
                                }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c(
                        "div",
                        { staticClass: "is-size-4 has-text-weight-semibold" },
                        [
                          _vm._v(_vm._s(_vm.newTheoreticalAutonomy) + " "),
                          _c("span", { staticClass: "is-size-5" }, [
                            _vm._v("hrs")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditMode
                    ? _c("b-input", {
                        model: {
                          value: _vm.newTheoreticalAutonomy,
                          callback: function($$v) {
                            _vm.newTheoreticalAutonomy = $$v
                          },
                          expression: "newTheoreticalAutonomy"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tile" }, [
            _c(
              "div",
              { staticClass: "tile is-4" },
              [
                _c("Junctions", {
                  attrs: {
                    pop: _vm.pop,
                    junctions: _vm.junctions,
                    can: _vm.canEditJunctions,
                    user: _vm.user,
                    totalJunctionsCapacity: _vm.totalJunctionsCapacity,
                    totalUsedJunctionsCapacity: _vm.totalUsedJunctionsCapacity,
                    totalAvailableJunctionsCapacity:
                      _vm.totalAvailableJunctionsCapacity
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.generatorSets.length
              ? _c(
                  "div",
                  { staticClass: "tile" },
                  [
                    _c("GeneratorSets", {
                      attrs: {
                        pop: _vm.pop,
                        generatorSets: _vm.generatorSets,
                        can: _vm.canEditGeneratorSets,
                        user: _vm.user,
                        totalGeneratorSetsCapacity:
                          _vm.totalGeneratorSetsCapacity,
                        totalGeneratorSetsUsedCapacity:
                          _vm.totalGeneratorSetsUsedCapacity,
                        totalAvailableGeneratorSetsCapacity:
                          _vm.totalAvailableGeneratorSetsCapacity,
                        totalGeneratorSetsCapacityA:
                          _vm.totalGeneratorSetsCapacityA,
                        totalGeneratorSetsCapacityB:
                          _vm.totalGeneratorSetsCapacityB,
                        usedGeneratorSetsCapacityA:
                          _vm.usedGeneratorSetsCapacityA,
                        usedGeneratorSetsCapacityB:
                          _vm.usedGeneratorSetsCapacityB,
                        availableGeneratorSetsCapacityA:
                          _vm.availableGeneratorSetsCapacityA,
                        availableGeneratorSetsCapacityB:
                          _vm.availableGeneratorSetsCapacityB
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tile is-3" },
              [
                _c("SolarPanels", {
                  attrs: {
                    pop: _vm.pop,
                    junctions: _vm.junctions,
                    can: _vm.canEditJunctions,
                    user: _vm.user
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tile" }, [
            _c(
              "div",
              { staticClass: "tile is-parent" },
              [
                _c("Equipment", {
                  attrs: {
                    pop: _vm.pop,
                    room: _vm.room,
                    user: _vm.user,
                    planes: _vm.planes,
                    planeTypes: _vm.planeTypes,
                    airConditioners: _vm.airConditioners,
                    canEditPowerRectifiers: _vm.canEditPowerRectifiers,
                    canEditAirConditioners: _vm.canEditAirConditioners,
                    canEditSurface: _vm.canEditSurface,
                    canEditDistribution: _vm.canEditDistribution,
                    totalSurface: _vm.totalSurface,
                    usedSurface: _vm.usedSurface,
                    availableSurface: _vm.availableSurface,
                    totalDistributionCapacity: _vm.totalDistributionCapacity,
                    usedDistributionCapacity: _vm.usedDistributionCapacity,
                    availableDistributionCapacity:
                      _vm.availableDistributionCapacity
                  }
                })
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c(
        "div",
        {
          staticClass:
            "has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Layout")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-10" }, [
      _c("div", { staticClass: "is-size-6 has-text-weight-bold" }, [
        _vm._v("AUTONOMIA DE BATERÍAS DEL POP")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/tabs/Layout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Layout.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=b418821e& */ "./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/tabs/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=b418821e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/tabs/Layout.vue?vue&type=template&id=b418821e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_b418821e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);