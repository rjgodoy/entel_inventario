(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/power/junction"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    EditJunctionParameters: function EditJunctionParameters() {
      return __webpack_require__.e(/*! import() | chunks/pop/power/modals/editJunction */ "chunks/pop/power/modals/editJunction").then(__webpack_require__.bind(null, /*! ./modals/EditJunctionParameters */ "./resources/js/components/pop/power/modals/EditJunctionParameters.vue"));
    }
  },
  props: ['can', 'junction', 'user'],
  data: function data() {
    return {
      junctionTypeId: this.junction.junction_type_id,
      junctionTypes: [],
      junctionConnectionId: this.junction.junction_connection_id,
      junctionConnections: [],
      isEditJunctionModalActive: false,
      isEditMode: false,
      clientNumber: this.junction.client_number,
      junctionNumber: this.junction.junction_number,
      useFactor: this.junction.use_factor,
      punctualConsumption: this.junction.latest_measurement ? this.junction.latest_measurement.punctual_consumption : 0
    };
  },
  watch: {
    junction: function junction(val) {
      this.junctionTypeId = val.junction_type_id, this.junctionConnectionId = val.junction_connection_id, this.clientNumber = val.client_number, this.junctionNumber = val.junction_number, this.useFactor = val.use_factor, this.punctualConsumption = val.latest_measurement ? val.latest_measurement.punctual_consumption : 0;
    }
  },
  mounted: function mounted() {
    this.getJunctionTypes();
    this.getJunctionConnections();
  },
  computed: {
    junctionType: function junctionType() {
      var _this = this;

      var type = 'Sin Información';

      switch (this.junctionTypeId) {
        case 1:
          Object.keys(this.junctionTypes).forEach(function (item) {
            type = _this.junctionTypes[item].id == 1 && type == 'Sin Información' ? _this.junctionTypes[item].type : type;
          });
          break;

        case 2:
          Object.keys(this.junctionTypes).forEach(function (item) {
            type = _this.junctionTypes[item].id == 2 && type == 'Sin Información' ? _this.junctionTypes[item].type : type;
          });
          break;

        case 3:
          Object.keys(this.junctionTypes).forEach(function (item) {
            type = _this.junctionTypes[item].id == 3 && type == 'Sin Información' ? _this.junctionTypes[item].type : type;
          });
          break;

        case 4:
          Object.keys(this.junctionTypes).forEach(function (item) {
            type = _this.junctionTypes[item].id == 4 && type == 'Sin Información' ? _this.junctionTypes[item].type : type;
          });
          break;

        default:
          break;
      }

      return type;
    },
    junctionConnection: function junctionConnection() {
      var _this2 = this;

      var connection = 'Sin Información';

      switch (this.junctionConnectionId) {
        case 1:
          Object.keys(this.junctionConnections).forEach(function (item) {
            connection = _this2.junctionConnections[item].id == 1 && connection == 'Sin Información' ? _this2.junctionConnections[item].connection : connection;
          });
          break;

        case 2:
          Object.keys(this.junctionConnections).forEach(function (item) {
            connection = _this2.junctionConnections[item].id == 2 && connection == 'Sin Información' ? _this2.junctionConnections[item].connection : connection;
          });
          break;

        case 3:
          Object.keys(this.junctionConnections).forEach(function (item) {
            connection = _this2.junctionConnections[item].id == 3 && connection == 'Sin Información' ? _this2.junctionConnections[item].connection : connection;
          });
          break;

        case 4:
          Object.keys(this.junctionConnections).forEach(function (item) {
            connection = _this2.junctionConnections[item].id == 4 && connection == 'Sin Información' ? _this2.junctionConnections[item].connection : connection;
          });
          break;

        default:
          break;
      }

      return connection;
    },
    hasAProtections: function hasAProtections() {
      return this.junction.latest_protection && (!!+this.junction.latest_protection.nominal_a || !!+this.junction.latest_protection.regulada_a);
    },
    hasBProtections: function hasBProtections() {
      return this.junction.latest_protection && (!!+this.junction.latest_protection.nominal_b || !!+this.junction.latest_protection.regulada_b);
    },
    hasAMeasurements: function hasAMeasurements() {
      return this.junction.latest_measurement && (this.junction.latest_measurement.r_a_amp_measure || this.junction.latest_measurement.s_a_amp_measure || this.junction.latest_measurement.t_a_amp_measure || this.junction.latest_measurement.r_a_volt_measure || this.junction.latest_measurement.s_a_volt_measure || this.junction.latest_measurement.t_a_volt_measure);
    },
    hasBMeasurements: function hasBMeasurements() {
      return this.junction.latest_measurement && (this.junction.latest_measurement.r_b_amp_measure || this.junction.latest_measurement.s_b_amp_measure || this.junction.latest_measurement.t_b_amp_measure || this.junction.latest_measurement.r_b_volt_measure || this.junction.latest_measurement.s_b_volt_measure || this.junction.latest_measurement.t_b_volt_measure);
    },
    powerA: function powerA() {
      var latestProtectionRA = this.junction.latest_protection ? this.junction.latest_protection.regulada_a : 0;
      var latestMeasureRA_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_volt_measure : 0;

      if (this.junction.junction_type_id == 2) {
        return latestProtectionRA * latestMeasureRA_V / 1000;
      } else {
        return latestProtectionRA * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerB: function powerB() {
      var latestProtectionRB = this.junction.latest_protection ? this.junction.latest_protection.regulada_b : 0;

      if (this.junction.junction_type_id == 2) {
        return latestProtectionRB * 220 / 1000;
      } else {
        return latestProtectionRB * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerUsedA: function powerUsedA() {
      var latestMeasureRA_A = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_amp_measure : 0;
      var latestMeasureSA_A = this.junction.latest_measurement ? this.junction.latest_measurement.s_a_amp_measure : 0;
      var latestMeasureTA_A = this.junction.latest_measurement ? this.junction.latest_measurement.t_a_amp_measure : 0;
      var latestMeasureRA_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_volt_measure : 0;
      var latestMeasureSA_V = this.junction.latest_measurement ? this.junction.latest_measurement.s_a_volt_measure : 0;
      var latestMeasureTA_V = this.junction.latest_measurement ? this.junction.latest_measurement.t_a_volt_measure : 0;

      if (this.junction.junction_type_id == 2) {
        return latestMeasureRA_A * latestMeasureRA_V / 1000;
      } else {
        return (latestMeasureRA_A * latestMeasureRA_V + latestMeasureSA_A * latestMeasureSA_V + latestMeasureTA_A * latestMeasureTA_V) / 1000;
      }
    },
    powerUsedB: function powerUsedB() {
      var latestMeasureRB_A = this.junction.latest_measurement ? this.junction.latest_measurement.r_b_amp_measure : 0;
      var latestMeasureSB_A = this.junction.latest_measurement ? this.junction.latest_measurement.s_b_amp_measure : 0;
      var latestMeasureTB_A = this.junction.latest_measurement ? this.junction.latest_measurement.t_b_amp_measure : 0;
      var latestMeasureRB_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_b_volt_measure : 0;
      var latestMeasureSB_V = this.junction.latest_measurement ? this.junction.latest_measurement.s_b_volt_measure : 0;
      var latestMeasureTB_V = this.junction.latest_measurement ? this.junction.latest_measurement.t_b_volt_measure : 0;

      if (this.junction.junction_type_id == 2) {
        return latestMeasureRB_A * latestMeasureRB_V / 1000;
      } else {
        return (latestMeasureRB_A * latestMeasureRB_V + latestMeasureSB_A * latestMeasureSB_V + latestMeasureTB_A * latestMeasureTB_V) / 1000;
      }
    },
    photovoltaicCapacity: function photovoltaicCapacity() {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      var capacity = 0;

      if (this.junction.latest_solar_panel) {
        var solarPanelGroupQuantity = 6;

        for (var i = 1; i < solarPanelGroupQuantity; i++) {
          capacity = capacity + this.junction.latest_solar_panel['unit_capacity_group_' + i] * this.junction.latest_solar_panel['quantity_group_' + i];
        }
      }

      return capacity;
    },
    averageConsumptionPerPhotovoltaicGroup: function averageConsumptionPerPhotovoltaicGroup() {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      return 0;
    },
    totalCapacity: function totalCapacity() {
      return (this.powerA + this.powerB) * this.useFactor + this.photovoltaicCapacity;
    },
    withoutBatteriesCapacity: function withoutBatteriesCapacity() {
      return this.powerUsedA + this.powerUsedB + this.averageConsumptionPerPhotovoltaicGroup;
    },
    withoutBatteriesDisponibility: function withoutBatteriesDisponibility() {
      return this.totalCapacity - this.withoutBatteriesCapacity;
    },
    batteriesRecharge: function batteriesRecharge() {
      // FALTA MEDICIONES DE PLANTA
      return 75;
    },
    totalUsedCapacity: function totalUsedCapacity() {
      return this.withoutBatteriesCapacity + this.batteriesRecharge + this.punctualConsumption;
    },
    totalDisponibility: {
      get: function get() {
        return this.totalCapacity - this.totalUsedCapacity;
      },
      set: function set() {
        this.emitToParent();
      }
    },
    usagePercent: function usagePercent() {
      return this.totalCapacity != 0 ? this.totalUsedCapacity / this.totalCapacity : 0;
    }
  },
  methods: {
    emitToParent: function emitToParent(event) {
      this.$emit('childToParent', this.totalDisponibility);
    },
    getJunctionTypes: function getJunctionTypes() {
      var _this3 = this;

      axios.get("/api/junctionTypes?api_token=".concat(this.user.api_token)).then(function (response) {
        _this3.junctionTypes = response.data.junctionTypes;
      });
    },
    getJunctionConnections: function getJunctionConnections() {
      var _this4 = this;

      axios.get("/api/junctionConnections?api_token=".concat(this.user.api_token)).then(function (response) {
        _this4.junctionConnections = response.data.junctions;
      });
    },
    saveChanges: function saveChanges() {
      if (!this.isEditMode) {
        var params = {
          'api_token': this.user.api_token,
          'user_id': this.user.id,
          'client_number': this.clientNumber,
          'junction_number': this.junctionNumber,
          'junction_type_id': this.junctionTypeId,
          'junction_connection_id': this.junctionConnectionId,
          'use_factor': parseFloat(this.useFactor)
        };
        axios.put("/api/junctionUpdateTypes/".concat(this.junction.id), params).then(function (response) {
          console.log(response.data);
        });
      } else {
        console.log('change what you want!');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772& ***!
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
    _c("div", { staticClass: "columns tile is-ancestor is-multiline" }, [
      _c("div", { staticClass: "column tile is-parent" }, [
        _c(
          "div",
          { staticClass: "tile is-child box" },
          [
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column is-4" }, [
                _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-4" },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.junction.electric_company
                          ? _vm.junction.electric_company.name
                          : "Sin información"
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Distribuidora")
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "is-divider",
                  staticStyle: { "margin-top": "16px", "margin-bottom": "8px" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Número Cliente")]
                  ),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "has-text-weight-bold is-size-5" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.junction.client_number
                                  ? _vm.junction.client_number
                                  : "Sin información"
                              )
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditMode
                    ? _c(
                        "div",
                        [
                          _c("b-input", {
                            staticClass: "has-text-weight-bold is-size-5",
                            model: {
                              value: _vm.clientNumber,
                              callback: function($$v) {
                                _vm.clientNumber = $$v
                              },
                              expression: "clientNumber"
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
                    [_vm._v("Número Empalme")]
                  ),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "has-text-weight-bold is-size-5",
                            class: _vm.junction.junction_number ? "" : ""
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.junction.junction_number
                                    ? _vm.junction.junction_number
                                    : "Sin información"
                                ) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditMode
                    ? _c(
                        "div",
                        [
                          _c("b-input", {
                            staticClass: "has-text-weight-bold is-size-5",
                            model: {
                              value: _vm.junctionNumber,
                              callback: function($$v) {
                                _vm.junctionNumber = $$v
                              },
                              expression: "junctionNumber"
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
                    [_vm._v("Tipo Empalme")]
                  ),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "has-text-weight-bold is-size-5" },
                          [_vm._v(_vm._s(_vm.junctionType))]
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
                              attrs: { placeholder: "Select a name" },
                              model: {
                                value: _vm.junctionTypeId,
                                callback: function($$v) {
                                  _vm.junctionTypeId = $$v
                                },
                                expression: "junctionTypeId"
                              }
                            },
                            _vm._l(_vm.junctionTypes, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.id,
                                  domProps: { value: option.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(option.type) +
                                      "\n                                    "
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
                _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Tipo Conexión")]
                  ),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "has-text-weight-bold is-size-5" },
                          [_vm._v(_vm._s(_vm.junctionConnection))]
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
                              attrs: { placeholder: "Select a name" },
                              model: {
                                value: _vm.junctionConnectionId,
                                callback: function($$v) {
                                  _vm.junctionConnectionId = $$v
                                },
                                expression: "junctionConnectionId"
                              }
                            },
                            _vm._l(_vm.junctionConnections, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.id,
                                  domProps: { value: option.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(option.connection) +
                                      "\n                                    "
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
                _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Factor de Uso")]
                  ),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "has-text-weight-bold is-size-5" },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.useFactor) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditMode
                    ? _c(
                        "div",
                        [
                          _c("b-input", {
                            staticClass: "has-text-weight-bold is-size-5",
                            model: {
                              value: _vm.useFactor,
                              callback: function($$v) {
                                _vm.useFactor = $$v
                              },
                              expression: "useFactor"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "title has-text-centered is-size-5 has-text-weight-semibold"
                      },
                      [_vm._v("Tablero Empalme")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "is-divider",
                      staticStyle: { "margin-bottom": "24px" },
                      attrs: { "data-content": "Protecciones" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "tile is-ancestor" }, [
                      _vm.hasAProtections
                        ? _c(
                            "div",
                            { staticClass: "tile is-parent" },
                            [
                              _c(
                                "b-field",
                                {
                                  staticClass: "tile",
                                  attrs: {
                                    label: "PROTECCIONES A",
                                    "label-position": "on-border"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tile box is-shadowless is-paddingless",
                                      staticStyle: {
                                        border: "solid 0.1rem #cccccc"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "tile" }, [
                                        _c(
                                          "div",
                                          { staticClass: "tile level" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-parent level-item"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tile is-child has-text-centered"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [_vm._v("Nominal A")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "has-text-weight-semibold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                                " +
                                                            _vm._s(
                                                              _vm.junction
                                                                .latest_protection
                                                                .nominal_a
                                                            ) +
                                                            "\n                                                                "
                                                        ),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "is-size-6"
                                                          },
                                                          [_vm._v("A")]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-parent level-item"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tile is-child has-text-centered"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [_vm._v("Regulada A")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "has-text-weight-semibold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                                " +
                                                            _vm._s(
                                                              _vm.junction
                                                                .latest_protection
                                                                .regulada_a
                                                            ) +
                                                            "\n                                                                "
                                                        ),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "is-size-6"
                                                          },
                                                          [_vm._v("A")]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
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
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasBProtections
                        ? _c(
                            "div",
                            { staticClass: "tile is-parent" },
                            [
                              _c(
                                "b-field",
                                {
                                  staticClass: "tile",
                                  attrs: {
                                    label: "PROTECCIONES B",
                                    "label-position": "on-border"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "tile box is-shadowless",
                                      staticStyle: {
                                        border: "solid 0.1rem #cccccc"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "tile" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "tile is-parent level-item"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Nominal B")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_protection
                                                            .nominal_b
                                                        ) +
                                                        "\n                                                            "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "tile is-parent level-item"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Regulada B")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_protection
                                                            .regulada_b
                                                        ) +
                                                        "\n                                                            "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
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
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.hasAProtections && !_vm.hasBProtections
                        ? _c(
                            "div",
                            { staticClass: "tile columns is-vcentered" },
                            [_vm._m(0)]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "is-divider",
                      staticStyle: { "margin-bottom": "24px" },
                      attrs: { "data-content": "Mediciones" }
                    }),
                    _vm._v(" "),
                    _vm.hasAMeasurements
                      ? _c(
                          "b-field",
                          {
                            staticClass: "tile",
                            attrs: {
                              label: "MEDICIONES A",
                              "label-position": "on-border"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "tile box is-shadowless",
                                staticStyle: { border: "solid 0.1rem #cccccc" }
                              },
                              [
                                _c("div", { staticClass: "tile is-vertical" }, [
                                  _vm.junction.latest_measurement &&
                                  _vm.junction.latest_measurement
                                    .r_a_amp_measure
                                    ? _c("div", { staticClass: "tile level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición R (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .r_a_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición S (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .s_a_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición T (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .t_a_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.junction.latest_measurement &&
                                  _vm.junction.latest_measurement
                                    .r_a_volt_measure
                                    ? _c("div", { staticClass: "tile level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición R (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .r_a_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición S (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .s_a_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición T (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .t_a_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ])
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.hasBMeasurements
                      ? _c(
                          "b-field",
                          {
                            staticClass: "tile",
                            attrs: {
                              label: "MEDICIONES B",
                              "label-position": "on-border"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "tile box is-shadowless",
                                staticStyle: { border: "solid 0.1rem #cccccc" }
                              },
                              [
                                _c("div", { staticClass: "tile is-vertical" }, [
                                  _vm.junction.latest_measurement &&
                                  _vm.junction.latest_measurement
                                    .r_b_amp_measure
                                    ? _c("div", { staticClass: "tile level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición R (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .r_b_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición S (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .s_b_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición T (A)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .t_b_amp_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("A")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.junction.latest_measurement &&
                                  _vm.junction.latest_measurement
                                    .r_b_volt_measure
                                    ? _c("div", { staticClass: "tile level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición R (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .r_b_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición S (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .s_b_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tile level-item" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tile is-child has-text-centered"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "is-size-7" },
                                                  [_vm._v("Medición T (V)")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.junction
                                                            .latest_measurement
                                                            .t_b_volt_measure
                                                        ) +
                                                        "\n                                                        "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [_vm._v("V")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ])
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.hasAMeasurements && !_vm.hasBMeasurements
                      ? _c(
                          "div",
                          { staticClass: "tile columns is-vcentered" },
                          [_vm._m(1)]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.can.update & _vm.isEditMode
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "button is-size-7 is-small is-fullwidth",
                            staticStyle: {
                              "padding-top": "0px",
                              "padding-bottom": "0px"
                            },
                            on: {
                              click: function($event) {
                                _vm.isEditJunctionModalActive = true
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Editar parámetros\n                            "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          active: _vm.isEditJunctionModalActive,
                          "has-modal-card": "",
                          "trap-focus": "",
                          "aria-role": "dialog",
                          "aria-modal": ""
                        },
                        on: {
                          "update:active": function($event) {
                            _vm.isEditJunctionModalActive = $event
                          }
                        }
                      },
                      [
                        _c("edit-junction-parameters", {
                          attrs: { junction: _vm.junction, user: _vm.user }
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
            _c("div", {
              staticClass: "is-divider",
              attrs: { "data-content": "Capacidades" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-item" }, [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("div", { staticClass: "is-size-6" }, [
                    _vm._v("Capacidad total")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-4" },
                    [
                      _vm._v(
                        _vm._s(_vm._f("numeral")(_vm.totalCapacity, 0, 0)) +
                          " \n                                "
                      ),
                      _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("div", { staticClass: "is-size-6" }, [
                    _vm._v("Capacidad utilizada")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-4" },
                    [
                      _vm._v(
                        _vm._s(_vm._f("numeral")(_vm.totalUsedCapacity, 0, 0)) +
                          " \n                                "
                      ),
                      _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("div", { staticClass: "is-size-6" }, [
                    _vm._v("Capacidad disponible")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-4" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm._f("numeral")(_vm.totalDisponibility, 0, 0)
                        ) + " \n                                "
                      ),
                      _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-progress",
              {
                attrs: {
                  value: _vm.usagePercent * 100,
                  size: "is-large",
                  type: "is-success",
                  "show-value": ""
                }
              },
              [
                _vm._v("\n                    Capacidad utilizada: "),
                _c("span", { staticClass: "has-text-success" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm._f("numeral")(_vm.usagePercent, "0.[00]%")) +
                      "\n                    "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm.can.update
              ? _c(
                  "div",
                  { staticClass: "field has-text-centered" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          type: _vm.isEditMode
                            ? "is-info"
                            : "is-link is-outlined",
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
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fas", "edit"] }
                        }),
                        _vm._v(
                          "\n                          " +
                            _vm._s(
                              _vm.isEditMode
                                ? "Modo Edición"
                                : "Editar parámetros de Empalme"
                            ) +
                            "\n                    "
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
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
          _vm._v(
            "\n                                            NO TIENE PROTECCIONES REGISTRADAS\n                                        "
          )
        ]
      )
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
          _vm._v(
            "\n                                        NO TIENE MEDICIONES REGISTRADAS\n                                    "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/power/Junction.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pop/power/Junction.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Junction.vue?vue&type=template&id=e7380772& */ "./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772&");
/* harmony import */ var _Junction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Junction.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Junction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/power/Junction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Junction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Junction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/Junction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Junction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Junction.vue?vue&type=template&id=e7380772& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/Junction.vue?vue&type=template&id=e7380772&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Junction_vue_vue_type_template_id_e7380772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);