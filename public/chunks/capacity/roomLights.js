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
      junctionsTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_available : 0,
      generatorSetTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_available : 0,
      powerRectifiersAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_available : 0,
      batteriesAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_available : 0,
      distributionAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_available : 0,
      totalAvailableClimateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_available : 0,
      totalAvailableSurface: this.room.current_room_capacity ? this.room.current_room_capacity.surface_available : 0
    };
  },
  watch: {
    room: function room(val) {
      this.junctionsTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.junction_available : 0;
      this.generatorSetTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_available : 0;
      this.powerRectifiersAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_available : 0;
      this.batteriesAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.battery_available : 0;
      this.distributionAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_available : 0;
      this.totalAvailableClimateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_available : 0;
      this.totalAvailableSurface = val.current_room_capacity ? val.current_room_capacity.surface_available : 0;
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
              {},
              [
                _c("font-awesome-icon", {
                  class:
                    _vm.totalAvailableEnergyCapacity <= 5 ||
                    _vm.totalAvailableClimateCapacity <= 5
                      ? "has-text-info"
                      : (_vm.totalAvailableEnergyCapacity > 5 &&
                          _vm.totalAvailableEnergyCapacity <= 10) ||
                        (_vm.totalAvailableClimateCapacity > 5 &&
                          _vm.totalAvailableClimateCapacity <= 10)
                      ? "has-text-warning"
                      : "has-text-success",
                  attrs: { icon: "circle", size: "2x" }
                }),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    attrs: {
                      label: "Tener en cuenta capacidad de espacio.",
                      size: "is-small",
                      type: "is-light",
                      position: "is-right",
                      multilined: ""
                    }
                  },
                  [
                    _vm.totalAvailableSurface <= 10 && _vm.totalCapacity > 10
                      ? _c("font-awesome-icon", {
                          staticClass: "has-text-warning",
                          attrs: { icon: "exclamation-triangle", size: "1x" }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            ),
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
                _c(
                  "div",
                  {},
                  [
                    _c("font-awesome-icon", {
                      class:
                        _vm.totalAvailableEnergyCapacity <= 5
                          ? "has-text-info"
                          : _vm.totalAvailableEnergyCapacity > 5 &&
                            _vm.totalAvailableEnergyCapacity <= 10
                          ? "has-text-warning"
                          : "has-text-success",
                      attrs: { icon: "circle", size: "2x" }
                    }),
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
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.canViewClimate
              ? _c("div", { staticClass: "level-item" }, [
                  _c(
                    "div",
                    {},
                    [
                      _c("font-awesome-icon", {
                        class:
                          _vm.totalAvailableClimateCapacity <= 5
                            ? "has-text-info"
                            : _vm.totalAvailableClimateCapacity > 5 &&
                              _vm.totalAvailableClimateCapacity <= 10
                            ? "has-text-warning"
                            : "has-text-success",
                        attrs: { icon: "circle", size: "2x" }
                      }),
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
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "level-item" }, [
              _c(
                "div",
                {},
                [
                  _c("font-awesome-icon", {
                    class:
                      _vm.totalAvailableSurface <= 5
                        ? "has-text-info"
                        : _vm.totalAvailableSurface > 5 &&
                          _vm.totalAvailableSurface <= 10
                        ? "has-text-warning"
                        : "has-text-success",
                    attrs: { icon: "circle", size: "2x" }
                  }),
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
                                _vm.totalAvailableSurface,
                                "0,0.0"
                              )
                            )
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
                ],
                1
              )
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