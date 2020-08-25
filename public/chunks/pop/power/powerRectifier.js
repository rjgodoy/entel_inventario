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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['powerRectifier', 'canEdit', 'user'],
  data: function data() {
    return {
      powerRectifierModes: [],
      currentPowerRectifierMode: 'Sin Información',
      newPowerRectifierCapacity: this.powerRectifier.capacity ? this.powerRectifier.capacity : 0,
      powerRectifierModulesCapacity: this.currentPowerRectifierModulesCapacity(),
      powerRectifierModulesQuantity: this.powerRectifier.power_rectifier_modules.length,
      power_rectifier_mode_id: this.powerRectifier.power_rectifier_mode_id,
      isEditMode: false
    };
  },
  mounted: function mounted() {
    this.getPowerRectifierModes();
  },
  computed: {
    totalModulesCapacityMasterA: function totalModulesCapacityMasterA() {
      return this.powerRectifierModulesQuantity * this.powerRectifierModulesCapacity;
    }
  },
  watch: {
    power_rectifier_mode_id: function power_rectifier_mode_id(val) {
      var _this = this;

      this.powerRectifierModes.forEach(function (item) {
        if (item.id == val) {
          _this.currentPowerRectifierMode = item.mode;
        }
      });
    }
  },
  methods: {
    getPowerRectifierModes: function getPowerRectifierModes() {
      var _this2 = this;

      axios.get("/api/powerRectifierModes?api_token=".concat(this.user.api_token)).then(function (response) {
        // console.log(response.data.telecomCompanies)
        _this2.powerRectifierModes = response.data.powerRectifierModes;

        if (response.data.powerRectifierModes) {
          _this2.powerRectifierModes.forEach(function (item) {
            if (item.id == _this2.power_rectifier_mode_id) {
              _this2.currentPowerRectifierMode = item.mode;
            }
          });
        }
      });
    },
    currentPowerRectifierModulesCapacity: function currentPowerRectifierModulesCapacity() {
      var _this3 = this;

      var capacity = 0;

      if (this.powerRectifier.power_rectifier_modules.length) {
        Object.keys(this.powerRectifier.power_rectifier_modules).forEach(function (element) {
          capacity = _this3.powerRectifier.power_rectifier_modules[element].capacity;
          return capacity;
        });
      }

      return capacity;
    },
    saveChanges: function saveChanges() {
      var _this4 = this;

      if (!this.isEditMode && (this.powerRectifier.capacity != this.newPowerRectifierCapacity || this.powerRectifier.power_rectifier_mode_id != this.power_rectifier_mode_id || this.powerRectifier.power_rectifier_modules.length != this.powerRectifierModulesQuantity || this.currentPowerRectifierModulesCapacity() != this.powerRectifierModulesCapacity)) {
        var params = {
          'api_token': this.user.api_token,
          'user_id': this.user.id,
          'capacity': parseFloat(this.newPowerRectifierCapacity),
          'power_rectifier_mode_id': this.power_rectifier_mode_id,
          'power_rectifier_modules_quantity': this.powerRectifierModulesQuantity,
          'power_rectifier_modules_capacities': this.powerRectifierModulesCapacity // 'generator_set_responsable_area_id': this.responsable_area_id,
          // 'generator_set_topology_type_id': this.topology_id,
          // 'generator_set_level_type_id': this.level_id

        }; // console.log(params)

        axios.put("/api/powerRectifiers/".concat(this.powerRectifier.id), params).then(function (response) {
          console.log(response.data);

          _this4.$eventBus.$emit('power-rectifier-updated');
        });
      }
    }
  }
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
                    ? _vm.powerRectifier.power_rectifier_type.type
                    : "Sin información"
                )
              )
            ]),
            _vm._v(" "),
            _vm.powerRectifier.power_rectifier_type.model
              ? _c(
                  "div",
                  {
                    staticClass: "has-text-weight-light is-size-7",
                    staticStyle: { "margin-top": "5px" }
                  },
                  [_vm._v("Modelo")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.powerRectifier.power_rectifier_type.model
              ? _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-6" },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.powerRectifier.power_rectifier_type
                          ? _vm.powerRectifier.power_rectifier_type.model
                          : "Sin información"
                      )
                    )
                  ]
                )
              : _vm._e()
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
          !_vm.isEditMode
            ? _c("div", { staticClass: "has-text-weight-semibold is-size-5" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.currentPowerRectifierMode) +
                    "\n                    "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isEditMode
            ? _c(
                "div",
                [
                  _c(
                    "b-select",
                    {
                      attrs: { placeholder: "Selecciona..." },
                      model: {
                        value: _vm.power_rectifier_mode_id,
                        callback: function($$v) {
                          _vm.power_rectifier_mode_id = $$v
                        },
                        expression: "power_rectifier_mode_id"
                      }
                    },
                    _vm._l(_vm.powerRectifierModes, function(option) {
                      return _c(
                        "option",
                        { key: option.id, domProps: { value: option.id } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(option.mode) +
                              "\n                            "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "field" },
          [
            _c(
              "div",
              {
                staticClass: "has-text-weight-light is-size-7",
                staticStyle: { "margin-top": "5px" }
              },
              [_vm._v("Capacidad total")]
            ),
            _vm._v(" "),
            !_vm.isEditMode
              ? _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-5" },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm._f("numeral")(
                            _vm.newPowerRectifierCapacity,
                            "0,0.0"
                          )
                        ) +
                        " "
                    ),
                    _c("span", { staticClass: "is-size-7" }, [_vm._v("kW")])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isEditMode
              ? _c("b-input", {
                  staticClass: "has-text-weight-bold is-size-5",
                  attrs: { type: "number" },
                  model: {
                    value: _vm.newPowerRectifierCapacity,
                    callback: function($$v) {
                      _vm.newPowerRectifierCapacity = $$v
                    },
                    expression: "newPowerRectifierCapacity"
                  }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "column" },
        [
          _c(
            "b-field",
            { attrs: { label: "MODULOS", "label-position": "on-border" } },
            [
              _c(
                "div",
                {
                  staticClass: " box is-shadowless",
                  staticStyle: { border: "solid 0.1rem #cccccc" }
                },
                [
                  _c("div", { staticClass: "field" }, [
                    _c(
                      "div",
                      { staticClass: "has-text-weight-light is-size-7" },
                      [_vm._v("Nº módulos")]
                    ),
                    _vm._v(" "),
                    !_vm.isEditMode
                      ? _c(
                          "div",
                          { staticClass: "has-text-weight-semibold is-size-5" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.powerRectifierModulesQuantity) +
                                "\n                            "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEditMode
                      ? _c(
                          "div",
                          [
                            _c("b-input", {
                              staticClass: "has-text-weight-bold is-size-5",
                              attrs: { type: "text" },
                              model: {
                                value: _vm.powerRectifierModulesQuantity,
                                callback: function($$v) {
                                  _vm.powerRectifierModulesQuantity = $$v
                                },
                                expression: "powerRectifierModulesQuantity"
                              }
                            }),
                            _vm._v(" "),
                            _c("b-input", {
                              staticClass: "has-text-weight-bold is-size-5",
                              attrs: { type: "text" },
                              model: {
                                value: _vm.powerRectifierModulesCapacity,
                                callback: function($$v) {
                                  _vm.powerRectifierModulesCapacity = $$v
                                },
                                expression: "powerRectifierModulesCapacity"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "field" }, [
                    _c(
                      "div",
                      { staticClass: "has-text-weight-light is-size-7" },
                      [_vm._v("Capacidad Total Módulos")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "has-text-weight-semibold is-size-5" },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm._f("numeral")(
                                _vm.totalModulesCapacityMasterA,
                                "0,0.0"
                              )
                            ) +
                            " "
                        ),
                        _c("span", { staticClass: "is-size-7" }, [_vm._v("kW")])
                      ]
                    )
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
    _vm.canEdit
      ? _c(
          "div",
          { staticClass: "field has-text-centered" },
          [
            _c(
              "b-button",
              {
                attrs: {
                  type: _vm.isEditMode ? "is-info" : "is-link is-outlined",
                  size: "is-small"
                },
                on: {
                  click: function($event) {
                    _vm.isEditMode = !_vm.isEditMode
                    _vm.saveChanges()
                  }
                }
              },
              [
                _c("font-awesome-icon", { attrs: { icon: ["fas", "edit"] } }),
                _vm._v(
                  "\n                  " +
                    _vm._s(
                      _vm.isEditMode
                        ? "Modo Edición"
                        : "Editar parámetros de Grupo"
                    ) +
                    "\n            "
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
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