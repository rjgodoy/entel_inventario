(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/roomLights"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
// library.add(faCircle, faSearch);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'room'],
  data: function data() {
    return {
      totalJunctionsTotalCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_total : 0,
      totalGeneratorSetTotalCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_total : 0,
      totalPowerRectifiersCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_total : 0,
      totalBatteriesCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_total : 0,
      totalDistributionCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_total : 0,
      totalClmateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_total : 0,
      totaSurfaceCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.surface_total : 0,
      junctionsTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_available : 0,
      generatorSetTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_available : 0,
      powerRectifiersAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_available : 0,
      batteriesAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_available : 0,
      distributionAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_available : 0,
      totalAvailableClimateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_available : 0,
      totalAvailableSurfaceCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.surface_available : 0,
      energy_treshold_danger: 0.1,
      energy_treshold_warning: 0.2,
      climate_treshold_danger: 0.1,
      climate_treshold_warning: 0.2,
      surface_treshold_danger: 0.1,
      surface_treshold_warning: 0.2
    };
  },
  watch: {
    room: function room(val) {
      this.totalJunctionsTotalCapacity = val.current_room_capacity ? val.current_room_capacity.junction_total : 0;
      this.totalGeneratorSetTotalCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_total : 0;
      this.totalPowerRectifiersCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_total : 0;
      this.totalBatteriesCapacity = val.current_room_capacity ? val.current_room_capacity.battery_total : 0;
      this.totalDistributionCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_total : 0;
      this.totalClmateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_total : 0;
      this.totaSurfaceCapacity = val.current_room_capacity ? val.current_room_capacity.surface_total : 0;
      this.junctionsTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.junction_available : 0;
      this.generatorSetTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_available : 0;
      this.powerRectifiersAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_available : 0;
      this.batteriesAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.battery_available : 0;
      this.distributionAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_available : 0;
      this.totalAvailableClimateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_available : 0;
      this.totalAvailableSurfaceCapacity = val.current_room_capacity ? val.current_room_capacity.surface_available : 0;
    }
  },
  computed: {
    totalCapacity: function totalCapacity() {
      var total = Math.min(this.totalAvailableEnergyCapacity, this.totalAvailableClimateCapacity);

      if (total >= 0) {
        return total;
      }

      return 0;
    },
    totalAvailableEnergyCapacity: function totalAvailableEnergyCapacity() {
      var total = Math.min(this.junctionsTotalAvailableCapacity, this.generatorSetTotalAvailableCapacity, this.powerRectifiersAvailableCapacity, this.batteriesAvailableCapacity, this.distributionAvailableCapacity);

      if (total > 0) {
        return total;
      }

      return 0;
    },
    totalCapacityEnergyPercentage: function totalCapacityEnergyPercentage() {
      var color = 'info';
      var total_energy = Math.min(this.totalJunctionsTotalCapacity > 0 ? this.junctionsTotalAvailableCapacity / this.totalJunctionsTotalCapacity : null, this.totalGeneratorSetTotalCapacity > 0 ? this.generatorSetTotalAvailableCapacity / this.totalGeneratorSetTotalCapacity : null, this.totalPowerRectifiersCapacity > 0 ? this.powerRectifiersAvailableCapacity / this.totalPowerRectifiersCapacity : null, this.totalBatteriesCapacity > 0 ? this.batteriesAvailableCapacity / this.totalBatteriesCapacity : null, this.totalDistributionCapacity > 0 ? this.distributionAvailableCapacity / this.totalDistributionCapacity : null);

      if (total_energy) {
        if (total_energy <= this.energy_treshold_danger) {
          color = 'info';
        } else if (total_energy <= this.energy_treshold_warning) {
          color = 'warning';
        } else if (total_energy > this.energy_treshold_warning) {
          color = 'success';
        }
      }

      return {
        'percentage': total_energy,
        'color': color
      };
    },
    totalCapacityClimatePercentage: function totalCapacityClimatePercentage() {
      var color = 'info';
      var total_climate = this.totalClmateCapacity > 0 ? this.totalAvailableClimateCapacity / this.totalClmateCapacity : 0;

      if (total_climate) {
        if (total_climate <= this.climate_treshold_danger) {
          color = 'info';
        } else if (total_climate <= this.climate_treshold_warning) {
          color = 'warning';
        } else if (total_climate > this.climate_treshold_warning) {
          color = 'success';
        }
      }

      return {
        'percentage': total_climate,
        'color': color
      };
    },
    totalCapacitySurfacePercentage: function totalCapacitySurfacePercentage() {
      var color = 'info';
      var total_surface = this.totaSurfaceCapacity ? this.totalAvailableSurfaceCapacity / this.totaSurfaceCapacity : 0;

      if (total_surface) {
        if (total_surface <= this.surface_treshold_danger) {
          color = 'info';
        } else if (total_surface <= this.surface_treshold_warning) {
          color = 'warning';
        } else if (total_surface > this.surface_treshold_warning) {
          color = 'success';
        }
      }

      return {
        'percentage': total_surface,
        'color': color
      };
    },
    totalCapacityPercentage: function totalCapacityPercentage() {
      var color = 'info';
      var total_energy = this.totalCapacityEnergyPercentage.percentage;
      var total_climate = this.totalCapacityClimatePercentage.percentage;

      if (total_energy && total_climate) {
        if (total_energy <= this.energy_treshold_danger || total_climate <= this.climate_treshold_danger) {
          color = 'info';
        } else if (total_energy <= this.energy_treshold_warning || total_climate <= this.climate_treshold_warning) {
          color = 'warning';
        } else if (total_energy > this.energy_treshold_warning || total_energy > this.energy_treshold_warning) {
          color = 'success';
        }
      }

      return {
        'energy_percentage': total_energy,
        'climate_percentage': total_climate,
        'color': color
      };
    },
    canViewClimate: function canViewClimate() {
      return this.user.roles[0].slug == 'engineer-admin' || this.user.roles[0].slug == 'admin' || this.user.roles[0].slug == 'developer' || this.user.roles[0].slug == 'super-viewer' ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-3 has-text-centered" }, [
      _c(
        "div",
        {
          staticClass: "has-text-centered is-size-7 has-text-weight-bold",
          staticStyle: { padding: "4px" }
        },
        [_vm._v("GENERAL")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            padding: "8px",
            border: "1px solid #aaa",
            "border-radius": "15px",
            position: "relative"
          }
        },
        [
          _c("div", { staticStyle: { padding: "4px" } }, [
            _c(
              "div",
              { staticClass: "pb-1" },
              [
                _c("font-awesome-icon", {
                  class: "has-text-" + _vm.totalCapacityPercentage.color,
                  attrs: { icon: "circle", size: "2x" }
                }),
                _vm._v(" "),
                _vm.totalCapacitySurfacePercentage.percentage <=
                  _vm.surface_treshold_warning &&
                _vm.totalCapacityPercentage.energy_percentage >
                  _vm.energy_treshold_warning
                  ? _c(
                      "b-tooltip",
                      {
                        staticClass: "pl-1",
                        attrs: {
                          label: "Tener en cuenta capacidad de espacio.",
                          size: "is-small",
                          type: "is-light",
                          position: "is-right",
                          multilined: ""
                        }
                      },
                      [
                        _c("font-awesome-icon", {
                          staticClass: "has-text-warning",
                          attrs: { icon: "exclamation-triangle", size: "1x" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "is-size-7 has-text-weight-semibold" }, [
              _vm._v(
                _vm._s(
                  _vm._f("numeral")(
                    _vm.totalCapacityPercentage.energy_percentage,
                    "0,0.0%"
                  )
                )
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "has-text-centered has-text-white" }, [
              _c("div", { staticClass: " is-size-5 has-text-weight-bold" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm._f("numeral")(_vm.totalCapacity, "0,0.0")) +
                    "\n                        "
                ),
                _c("span", { staticClass: "is-size-6 has-text-weight-light" }, [
                  _vm._v("kW")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Disponibles")
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column has-text-centered" }, [
      _c(
        "div",
        {
          staticClass: "level has-text-centered is-size-7 has-text-weight-bold",
          staticStyle: { margin: "0", padding: "4px" }
        },
        [
          _c("div", { staticClass: "level-item" }, [_vm._v("ENERGIA")]),
          _vm._v(" "),
          _vm.canViewClimate
            ? _c("div", { staticClass: "level-item" }, [_vm._v("CLIMA")])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [_vm._v("ESPACIO")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            padding: "8px",
            border: "1px solid #aaa",
            "border-radius": "15px"
          }
        },
        [
          _c("div", { staticClass: "level", staticStyle: { padding: "4px" } }, [
            _c(
              "div",
              {
                staticClass: "level-item",
                staticStyle: { position: "relative" }
              },
              [
                _c("div", {}, [
                  _c(
                    "div",
                    { staticClass: "pb-1" },
                    [
                      _c("font-awesome-icon", {
                        class:
                          "has-text-" + _vm.totalCapacityEnergyPercentage.color,
                        attrs: { icon: "circle", size: "2x" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "is-size-7 has-text-weight-semibold" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm._f("numeral")(
                            _vm.totalCapacityEnergyPercentage.percentage,
                            "0,0.0%"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-centered has-text-white" },
                    [
                      _c(
                        "div",
                        { staticClass: " is-size-5 has-text-weight-bold" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm._f("numeral")(
                                  _vm.canViewClimate
                                    ? _vm.totalAvailableEnergyCapacity
                                    : Math.min(
                                        _vm.totalAvailableEnergyCapacity,
                                        _vm.totalAvailableClimateCapacity
                                      ),
                                  "0,0.0"
                                )
                              ) +
                              "\n                                "
                          ),
                          _c(
                            "span",
                            { staticClass: "is-size-6 has-text-weight-light" },
                            [_vm._v("kW")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Disponibles")]
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm.canViewClimate
              ? _c("div", { staticClass: "level-item" }, [
                  _c("div", {}, [
                    _c(
                      "div",
                      { staticClass: "pb-1" },
                      [
                        _c("font-awesome-icon", {
                          class:
                            "has-text-" +
                            _vm.totalCapacityClimatePercentage.color,
                          attrs: { icon: "circle", size: "2x" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "is-size-7 has-text-weight-semibold" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("numeral")(
                              _vm.totalCapacityClimatePercentage.percentage,
                              "0,0.0%"
                            )
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "has-text-centered has-text-white" },
                      [
                        _c(
                          "div",
                          { staticClass: " is-size-5 has-text-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("numeral")(
                                  _vm.totalAvailableClimateCapacity,
                                  "0,0.0"
                                )
                              ) + "\n                            "
                            ),
                            _c(
                              "span",
                              {
                                staticClass: "is-size-6 has-text-weight-light"
                              },
                              [_vm._v("kW")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "has-text-weight-light is-size-7" },
                          [_vm._v("Disponibles")]
                        )
                      ]
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "level-item" }, [
              _c("div", {}, [
                _c(
                  "div",
                  { staticClass: "pb-1" },
                  [
                    _c("font-awesome-icon", {
                      class:
                        "has-text-" + _vm.totalCapacitySurfacePercentage.color,
                      attrs: { icon: "circle", size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "is-size-7 has-text-weight-semibold" },
                  [
                    _vm._v(
                      _vm._s(
                        _vm._f("numeral")(
                          _vm.totalCapacitySurfacePercentage.percentage,
                          "0,0.0%"
                        )
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered has-text-white" }, [
                  _c(
                    "div",
                    { staticClass: " is-size-5 has-text-weight-bold" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm._f("numeral")(
                            _vm.totalAvailableSurfaceCapacity,
                            "0,0.0"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "has-text-weight-light is-size-7" }, [
                    _vm._v("Disponibles")
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomLights.vue?vue&type=template&id=4b4fd2f2& */ "./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&");
/* harmony import */ var _RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomLights.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/RoomLights.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomLights.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomLights.vue?vue&type=template&id=4b4fd2f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);