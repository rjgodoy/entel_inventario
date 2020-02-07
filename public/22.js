(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      electricLines: [],
      transformers: [],
      clientConnections: [],
      generatorGroups: [],
      powerRectifiers: []
    };
  },
  mounted: function mounted() {
    this.getElectricLines();
    this.getConnectionClients();
    this.getGeneratorGroups();
    this.getPowerRectifiers();
  },
  methods: {
    // APIs
    getElectricLines: function getElectricLines() {
      var _this = this;

      axios.get("/api/electricLines/".concat(this.pop.id)).then(function (response) {
        _this.electricLines = response.data.data;
        console.log(_this.electricLines);
      })["catch"](function (error) {
        console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
      });
    },
    getConnectionClients: function getConnectionClients() {
      var _this2 = this;

      axios.get("/api/clientConnections/".concat(this.pop.id)).then(function (response) {
        _this2.clientConnections = response.data.data;
        console.log(_this2.clientConnections);
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getGeneratorGroups: function getGeneratorGroups() {
      var _this3 = this;

      axios.get("/api/generatorGroups/".concat(this.pop.id)).then(function (response) {
        _this3.generatorGroups = response.data.data;
        console.log(_this3.generatorGroups);
      })["catch"](function (error) {
        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
      });
    },
    getPowerRectifiers: function getPowerRectifiers() {
      var _this4 = this;

      axios.get("/api/powerRectifiers/".concat(this.pop.id)).then(function (response) {
        _this4.powerRectifiers = response.data.data;
        console.log(_this4.powerRectifiers);
      })["catch"](function (error) {
        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "section columns",
      staticStyle: { "min-height": "500px", margin: "auto -48px auto -48px" }
    },
    [
      _c("div", { staticClass: "column is-two-thirds has-background-white" }, [
        _vm.electricLines.length
          ? _c("section", { staticClass: "section has-background-white" }, [
              _c("div", { staticStyle: { margin: "-24px auto -40px auto" } }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.electricLines.length > 4 ? "" : "container" },
                  [
                    _c(
                      "div",
                      { staticClass: "tile is-ancestor" },
                      _vm._l(_vm.electricLines, function(data) {
                        return _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-child box",
                              staticStyle: {
                                "max-width": "450px",
                                position: "center"
                              }
                            },
                            [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Tipo")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-5"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.electric_line_type
                                            ? data.electric_line_type
                                                .electric_line_type
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Tipo fase")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.phase_type
                                            ? data.phase_type.phase_type
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
                                      staticClass:
                                        "is-right has-text-grey-lighter",
                                      attrs: {
                                        icon: ["fas", "bolt"],
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
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Voltaje")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("numeral")(data.volt, "0,0")
                                        ) + " "
                                      ),
                                      data.volt
                                        ? _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("V")]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Distancia")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("numeral")(
                                            data.distance,
                                            "0,0"
                                          )
                                        ) + " "
                                      ),
                                      data.distance
                                        ? _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("m")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    { staticClass: "tile is-ancestor" },
                                    _vm._l(data.transformers, function(
                                      transformer
                                    ) {
                                      return _c(
                                        "div",
                                        { staticClass: "tile is-parent" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "tile is-child box has-background-white-ter"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "title is-size-5 has-text-weight-semibold"
                                                },
                                                [_vm._v("Transformador")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "columns" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "column" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-7"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Tensión primaria"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-6"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              transformer.primary_tension
                                                                ? transformer.primary_tension
                                                                : "Sin información"
                                                            ) +
                                                              "\n                                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-7",
                                                          staticStyle: {
                                                            "margin-top": "5px"
                                                          }
                                                        },
                                                        [_vm._v("Tipo fase")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-6"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              transformer.phase_type
                                                                ? transformer
                                                                    .phase_type
                                                                    .phase_type
                                                                : "Sin información"
                                                            ) +
                                                              "\n                                                            "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "column" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-7"
                                                        },
                                                        [_vm._v("Potencia")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "has-text-weight-normal is-size-6"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              transformer.power
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.clientConnections.length
          ? _c("section", { staticClass: "section has-background-white" }, [
              _c("div", { staticStyle: { margin: "-24px auto -40px auto" } }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: _vm.clientConnections.length > 4 ? "" : "container"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "tile is-ancestor" },
                      _vm._l(_vm.clientConnections, function(data) {
                        return _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-child box",
                              staticStyle: {
                                "max-width": "450px",
                                position: "center"
                              }
                            },
                            [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Número Cliente")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-5 "
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.client_number
                                            ? data.client_number
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Sitio")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.nem_site
                                            ? data.nem_site
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
                                      staticClass:
                                        "is-right has-text-grey-lighter",
                                      attrs: {
                                        icon: ["fas", "plug"],
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
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Distribuidora")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-5"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.electric_company
                                            ? data.electric_company.name
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "column is-6" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Credenciales de acceso")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.access_credentials
                                            ? data.access_credentials
                                            : "Sin credenciales"
                                        )
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "column is-2 has-text-right" },
                                  [
                                    _c(
                                      "b-tooltip",
                                      {
                                        attrs: {
                                          label:
                                            data.client_connection_state
                                              .description,
                                          position: "is-right"
                                        }
                                      },
                                      [
                                        _c("font-awesome-icon", {
                                          class:
                                            data.client_connection_state_id == 1
                                              ? "has-text-success"
                                              : "has-text-danger",
                                          attrs: {
                                            icon:
                                              data.client_connection_state_id ==
                                              1
                                                ? "link"
                                                : "unlink"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.generatorGroups.length
          ? _c("section", { staticClass: "section has-background-white" }, [
              _c("div", { staticStyle: { margin: "-24px auto -40px auto" } }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.generatorGroups.length > 4 ? "" : "container" },
                  [
                    _c(
                      "div",
                      { staticClass: "tile is-ancestor" },
                      _vm._l(_vm.generatorGroups, function(data) {
                        return _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-child box",
                              staticStyle: {
                                "max-width": "450px",
                                position: "center"
                              }
                            },
                            [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Marca")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-5 "
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.generator_group_type
                                            ? data.generator_group_type
                                                .generator_group_type
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Modelo")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.generator_group_type
                                            ? data.generator_group_type
                                                .generator_group_model
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
                                      staticClass:
                                        "is-right has-text-grey-lighter",
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
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Potencia")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.power
                                            ? data.power
                                            : "Sin información"
                                        ) + " "
                                      ),
                                      data.power
                                        ? _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "column" })
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.powerRectifiers.length
          ? _c("section", { staticClass: "section has-background-white" }, [
              _c("div", { staticStyle: { margin: "-24px auto -40px auto" } }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.powerRectifiers.length > 4 ? "" : "container" },
                  [
                    _c(
                      "div",
                      { staticClass: "tile is-ancestor" },
                      _vm._l(_vm.powerRectifiers, function(data) {
                        return _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "div",
                            {
                              staticClass: "tile is-child box",
                              staticStyle: {
                                "max-width": "450px",
                                position: "center"
                              }
                            },
                            [
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Marca")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-5 "
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.power_rectifier_type
                                            ? data.power_rectifier_type
                                                .power_rectifier_type
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Modelo")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-semibold is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.power_rectifier_type
                                            ? data.power_rectifier_type
                                                .power_rectifier_model
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
                                      staticClass:
                                        "is-right has-text-grey-lighter",
                                      attrs: {
                                        icon: ["fas", "random"],
                                        size: "3x"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "columns" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Voltaje")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.volt
                                            ? data.volt
                                            : "Sin información"
                                        ) + " "
                                      ),
                                      data.volt
                                        ? _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("V")]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7",
                                      staticStyle: { "margin-top": "5px" }
                                    },
                                    [_vm._v("Capacidad máxima")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.max_capacity
                                            ? data.max_capacity
                                            : "Sin información"
                                        ) + " "
                                      ),
                                      data.max_capacity
                                        ? _c(
                                            "span",
                                            { staticClass: "is-size-7" },
                                            [_vm._v("kW")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-light is-size-7"
                                    },
                                    [_vm._v("Nº módulos")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-weight-normal is-size-6"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          data.modules
                                            ? data.modules
                                            : "Sin información"
                                        )
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.electricLines.length +
          _vm.transformers.length +
          _vm.clientConnections.length +
          _vm.generatorGroups.length +
          _vm.powerRectifiers.length ==
        0
          ? _c("section", { staticClass: "section" }, [_vm._m(4)])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._m(5)
    ]
  )
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
        [_vm._v("Líneas Eléctricas")]
      )
    ])
  },
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
        [_vm._v("Empalmes")]
      )
    ])
  },
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
  },
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
        [_vm._v("Plantas Rectificadoras")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "box" }, [
        _vm._v(
          "\n                    No hay datos de energía.\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column has-background-dark is-bold" }, [
      _c("div")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/PopPower.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pops/PopPower.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopPower.vue?vue&type=template&id=2fc5bbc6& */ "./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6&");
/* harmony import */ var _PopPower_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopPower.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopPower_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/PopPower.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopPower_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopPower.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/PopPower.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopPower_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopPower.vue?vue&type=template&id=2fc5bbc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/PopPower.vue?vue&type=template&id=2fc5bbc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopPower_vue_vue_type_template_id_2fc5bbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);