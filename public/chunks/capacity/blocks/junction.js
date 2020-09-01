(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/blocks/junction"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalJunction: function ModalJunction() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/junction */ "chunks/pop/layout/modals/junction").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalJunction */ "./resources/js/components/pop/layout/modals/ModalJunction.vue"));
    },
    ModalNewJunction: function ModalNewJunction() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/newJunction */ "chunks/pop/layout/modals/newJunction").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalNewJunction */ "./resources/js/components/pop/layout/modals/ModalNewJunction.vue"));
    }
  },
  props: ['junctions', 'can', 'user', 'pop'],
  data: function data() {
    return {
      junctionSelected: null,
      isJunctionModalActive: false,
      isNewJunctionModalActive: false
    };
  },
  computed: {
    responsable: function responsable() {
      var area = 'Sin Información';
      var id = null; // if (this.generatorSets.length) {
      //     Object.keys(this.generatorSets).forEach(element => {
      //         if(this.generatorSets[element].current_generator_responsable) {
      //             switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
      //                 case 1:
      //                     id = 1
      //                     area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 case 2:
      //                     id = id == 1 ? id : 2
      //                     arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 case 3:
      //                     id = id == 1 || id == 2 ? id : 3
      //                     area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
      //                     break
      //                 default:
      //                     break
      //             }
      //         }
      //     })
      // }

      return {
        'id': id,
        'area': area
      };
    },
    averageConsumptionPerPhotovoltaicGroup: function averageConsumptionPerPhotovoltaicGroup() {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      return 0;
    },
    totalCapacity: function totalCapacity() {
      var _this = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + (_this.powerA(_this.junctions[element]) + _this.powerB(_this.junctions[element])) * _this.junctions[element].use_factor + _this.photovoltaicCapacity(_this.junctions[element]);
        });
      }

      return sum;
    },
    withoutBatteriesCapacity: function withoutBatteriesCapacity() {
      var _this2 = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + _this2.powerUsedA(_this2.junctions[element]) + _this2.powerUsedB(_this2.junctions[element]) + _this2.averageConsumptionPerPhotovoltaicGroup;
        });
      }

      return sum;
    },
    withoutBatteriesDisponibility: function withoutBatteriesDisponibility() {
      return this.totalCapacity - this.withoutBatteriesCapacity;
    },
    batteriesRecharge: function batteriesRecharge() {
      var _this3 = this;

      var total = 0;

      if (this.pop.rooms && this.pop.rooms.length) {
        Object.keys(this.pop.rooms).forEach(function (element) {
          var room = _this3.pop.rooms[element];

          if (room.power_rectifiers.length) {
            Object.keys(room.planes).forEach(function (item) {
              var roomPlane = room.planes[item];
              total += _this3.batteryRechargePower(roomPlane);
            });
          }
        });
      }

      return total;
    },
    totalUsedCapacity: function totalUsedCapacity() {
      var _this4 = this;

      var punctualConsumption = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (_this4.junctions[element].latest_measurement) {
            punctualConsumption += _this4.junctions[element].latest_measurement.punctual_consumption;
          }
        });
      }

      return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption;
    },
    totalDisponibility: function totalDisponibility() {
      return this.totalCapacity - this.totalUsedCapacity;
    },
    usagePercent: function usagePercent() {
      return this.totalCapacity != 0 ? this.totalUsedCapacity / this.totalCapacity : 0;
    }
  },
  watch: {
    junctions: function junctions(val) {
      var _this5 = this;

      if (val.length) {
        Object.keys(val).forEach(function (junction) {
          if (_this5.junctionSelected && _this5.junctionSelected.id == val[junction].id) {
            _this5.junctionSelected = val[junction];
          }
        });
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {// console.log(this.generatorSets)
    // this.getGeneratorSets()
  },
  methods: {
    powerA: function powerA(junction) {
      var latestProtectionRA = junction.latest_protection ? junction.latest_protection.regulada_a : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRA * latestMeasureRA_V / 1000;
      } else {
        return latestProtectionRA * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerB: function powerB(junction) {
      var latestProtectionRB = junction.latest_protection ? junction.latest_protection.regulada_b : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRB * 220 / 1000;
      } else {
        return latestProtectionRB * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerUsedA: function powerUsedA(junction) {
      var latestMeasureRA_A = junction.latest_measurement ? junction.latest_measurement.r_a_amp_measure : 0;
      var latestMeasureSA_A = junction.latest_measurement ? junction.latest_measurement.s_a_amp_measure : 0;
      var latestMeasureTA_A = junction.latest_measurement ? junction.latest_measurement.t_a_amp_measure : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;
      var latestMeasureSA_V = junction.latest_measurement ? junction.latest_measurement.s_a_volt_measure : 0;
      var latestMeasureTA_V = junction.latest_measurement ? junction.latest_measurement.t_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRA_A * latestMeasureRA_V / 1000;
      } else {
        return (latestMeasureRA_A * latestMeasureRA_V + latestMeasureSA_A * latestMeasureSA_V + latestMeasureTA_A * latestMeasureTA_V) / 1000;
      }
    },
    powerUsedB: function powerUsedB(junction) {
      var latestMeasureRB_A = junction.latest_measurement ? junction.latest_measurement.r_b_amp_measure : 0;
      var latestMeasureSB_A = junction.latest_measurement ? junction.latest_measurement.s_b_amp_measure : 0;
      var latestMeasureTB_A = junction.latest_measurement ? junction.latest_measurement.t_b_amp_measure : 0;
      var latestMeasureRB_V = junction.latest_measurement ? junction.latest_measurement.r_b_volt_measure : 0;
      var latestMeasureSB_V = junction.latest_measurement ? junction.latest_measurement.s_b_volt_measure : 0;
      var latestMeasureTB_V = junction.latest_measurement ? junction.latest_measurement.t_b_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRB_A * latestMeasureRB_V / 1000;
      } else {
        return (latestMeasureRB_A * latestMeasureRB_V + latestMeasureSB_A * latestMeasureSB_V + latestMeasureTB_A * latestMeasureTB_V) / 1000;
      }
    },
    photovoltaicCapacity: function photovoltaicCapacity(junction) {
      var capacity = 0;

      if (junction.solar_panels.length) {
        Object.keys(junction.solar_panels).forEach(function (element) {
          var panel = junction.solar_panels[element];
          capacity = capacity + panel.unit_capacity * panel.quantity;
        });
      }

      return capacity / 1000;
    },
    batteryRechargePower: function batteryRechargePower(plane) {
      return this.rechargeCurrent(plane) * plane.float_tension / 1000;
    },
    rechargeCurrent: function rechargeCurrent(plane) {
      var current = 0;
      Object.keys(plane.battery_banks).forEach(function (item) {
        current += plane.battery_banks[item].capacity;
      });
      return plane.recharge_factor * current;
    }
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "columns" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      _vm.isNewJunctionModalActive = true
                    }
                  }
                },
                [
                  _c(
                    "b-tag",
                    {
                      staticClass:
                        "is-pulled-right is-link has-text-weight-light is-size-7"
                    },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fas", "plus"] }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm.junctions.length
            ? _c("div", { staticClass: "tile is-vertical" }, [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "div",
                    { staticClass: "tile is-parent" },
                    [
                      _c(
                        "b-field",
                        {
                          staticClass: "tile",
                          attrs: {
                            label: "CAPACIDADES",
                            "label-position": "on-border"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "tile box is-shadowless is-paddingless",
                              staticStyle: { border: "solid 0.05rem black" }
                            },
                            [
                              _c("div", { staticClass: "tile" }, [
                                _c("div", { staticClass: "tile is-parent" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-centered tile is-child"
                                    },
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
                                                _vm.totalCapacity,
                                                "0,0.0"
                                              )
                                            ) + "  "
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
                                _c("div", { staticClass: "tile is-parent" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-centered tile is-child"
                                    },
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
                                                _vm.totalUsedCapacity,
                                                "0,0.0"
                                              )
                                            ) + "  "
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
                                        [_vm._v("Utilizado")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "tile is-parent" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-centered tile is-child"
                                    },
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
                                                _vm.totalDisponibility,
                                                "0,0.0"
                                              )
                                            ) + "  "
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "div",
                    { staticClass: "columns tile" },
                    _vm._l(_vm.junctions, function(junction) {
                      return _c(
                        "div",
                        {
                          key: junction.id,
                          staticClass: "column tile is-parent is-6"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "box tile is-dark is-bold has-text-warning",
                              on: {
                                click: function($event) {
                                  _vm.isJunctionModalActive = true
                                  _vm.junctionSelected = junction
                                }
                              }
                            },
                            [_vm._m(1, true)]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        !_vm.junctions.length
          ? _c("div", { staticClass: "tile columns is-vcentered" }, [_vm._m(2)])
          : _vm._e()
      ]),
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
            attrs: {
              junction: _vm.junctionSelected,
              can: _vm.can,
              user: _vm.user
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isNewJunctionModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isNewJunctionModalActive = $event
            }
          }
        },
        [_c("modal-new-junction", { attrs: { user: _vm.user, pop: _vm.pop } })],
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
    return _c("div", { staticClass: "column" }, [
      _c("div", { staticClass: "is-size-6 has-text-weight-bold" }, [
        _vm._v("EMPALMES")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "has-text-weight-semibold is-size-6" }, [
          _vm._v("Empalme")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column" }, [
      _c(
        "div",
        {
          staticClass:
            "has-text-centered has-text-weight-light has-text-grey is-size-7"
        },
        [
          _c("div", { staticClass: "block" }, [
            _vm._v("NO TIENE EMPALMES REGISTRADOS")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/blocks/Junctions.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Junctions.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Junctions.vue?vue&type=template&id=129d51b0& */ "./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0&");
/* harmony import */ var _Junctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Junctions.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Junctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/blocks/Junctions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Junctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Junctions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Junctions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Junctions.vue?vue&type=template&id=129d51b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Junctions.vue?vue&type=template&id=129d51b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junctions_vue_vue_type_template_id_129d51b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);