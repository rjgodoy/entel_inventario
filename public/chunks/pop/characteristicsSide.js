(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/characteristicsSide"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'pop', 'popClassification', 'bafi', 'isEditMode', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {};
  },
  computed: {
    pe_3g: function pe_3g() {
      // console.log(!!+this.pop.pe_3g)
      return !!+this.pop.pe_3g;
    },
    mpls: function mpls() {
      return !!+this.pop.mpls;
    },
    olt: function olt() {
      return !!+this.pop.olt;
    },
    olt_3play: function olt_3play() {
      return !!+this.pop.olt_3play;
    },
    vip: function vip() {
      return !!+this.pop.vip;
    },
    vip_entel: function vip_entel() {
      return this.pop.current_entel_vip ? true : false;
    },
    localidad_obligatoria: function localidad_obligatoria() {
      return !!+this.pop.localidad_obligatoria;
    },
    ranco: function ranco() {
      return !!+this.pop.ranco;
    },
    offgrid: function offgrid() {
      return !!+this.pop.offgrid;
    },
    solar: function solar() {
      return !!+this.pop.solar;
    },
    eolica: function eolica() {
      return !!+this.pop.eolica;
    }
  },
  mounted: function mounted() {// console.log(this.pop.current_entel_vip.isEmpty())
  },
  watch: {
    pop: function pop(val) {// console.log(val)
      // console.log(this.pe_3g)
    }
  },
  methods: {
    updateParameter: function updateParameter(param, val) {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'parameter': param,
        'value': !val,
        'user_id': this.user.id
      };
      axios.put("/api/pop/".concat(this.pop.id), params).then(function (response) {
        // console.log(response.data)
        _this.$buefy.toast.open({
          message: 'Parámetro actualizado exitosamente.',
          type: 'is-success',
          duration: 2000
        });

        _this.$eventBus.$emit('parameter-updated');
      });
    },
    updateVipEntel: function updateVipEntel() {
      var _this2 = this;

      var params = {
        'api_token': this.user.api_token,
        'value': !this.vip_entel,
        'user_id': this.user.id
      };
      axios.put("/api/vipEntel/".concat(this.pop.id), params).then(function (response) {
        // console.log(response.data)
        _this2.$buefy.toast.open({
          message: 'Parámetro actualizado exitosamente.',
          type: 'is-success',
          duration: 2000
        });

        _this2.$eventBus.$emit('parameter-updated');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54& ***!
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
  return _c("section", {}, [
    _c("div", { staticClass: "columns tile is-ancestor" }, [
      _c(
        "div",
        {
          staticClass: "column tile is-parent is-vertical",
          staticStyle: { padding: "0px 24px 24px 24px" }
        },
        [
          _c(
            "div",
            {
              staticClass: "has-text-weight-bold is-size-5 has-text-left tile",
              staticStyle: { "padding-bottom": "24px" }
            },
            [_vm._v("CARACTERISTICAS NEGOCIO")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tile is-child" }, [
            _c("div", { staticStyle: { padding: "10px" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "is-size-5 title has-text-weight-semibold has-text-grey-dark"
                },
                [_vm._v("Negocio Fijo")]
              ),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.pe_3g
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.pe_3g
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.pe_3g
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.pe_3g
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("PE 3G")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.pe_3g },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("pe_3g", _vm.pe_3g)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("PE 3G")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.mpls
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.mpls
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.mpls
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.mpls
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("MPLS")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.mpls },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("mpls", _vm.mpls)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("MPLS")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.olt ? "has-text-eco" : "has-text-grey-light",
                        attrs: {
                          icon: _vm.olt
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.olt
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.olt
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("OLT")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.olt },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("olt", _vm.olt)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("OLT")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.olt_3play
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.olt_3play
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.olt_3play
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.olt_3play
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("OLT 3Play")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.olt_3play },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter(
                                "olt_3play",
                                _vm.olt_3play
                              )
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("OLT 3Play")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("font-awesome-icon", {
                    class:
                      _vm.popClassification.id == 1
                        ? "has-text-eco"
                        : "has-text-grey-light",
                    attrs: {
                      icon:
                        _vm.popClassification.id == 1
                          ? ["fas", "check-circle"]
                          : ["far", "times-circle"],
                      disabled: _vm.popClassification.id == 1 ? false : true
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "is-size-6",
                      class:
                        _vm.popClassification.id == 1
                          ? "has-text-weight-bold"
                          : "has-text-grey-light has-text-weight-light"
                    },
                    [_vm._v("CORE")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("font-awesome-icon", {
                    class: _vm.bafi ? "has-text-eco" : "has-text-grey-light",
                    attrs: {
                      icon: _vm.bafi
                        ? ["fas", "check-circle"]
                        : ["far", "times-circle"],
                      disabled: _vm.bafi ? false : true
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "is-size-6",
                      class: _vm.bafi
                        ? "has-text-weight-bold"
                        : "has-text-grey-light has-text-weight-light"
                    },
                    [_vm._v("Banda Ancha Fija Inalámbrica (BAFI)")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tile is-child" }, [
            _c("div", { staticStyle: { padding: "10px" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "is-size-5 title has-text-weight-semibold has-text-grey-dark"
                },
                [_vm._v("Negocio Movil")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("font-awesome-icon", {
                    class: _vm.pop.red_minima_n1
                      ? "has-text-eco"
                      : "has-text-grey-light",
                    attrs: {
                      icon: _vm.pop.red_minima_n1
                        ? ["fas", "check-circle"]
                        : ["far", "times-circle"],
                      disabled: !_vm.pop.red_minima_n1
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "is-size-6",
                      class: _vm.pop.red_minima_n1
                        ? "has-text-weight-bold"
                        : "has-text-grey-light has-text-weight-light"
                    },
                    [_vm._v("Red Mínima N1")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("font-awesome-icon", {
                    class: _vm.pop.red_minima_n2
                      ? "has-text-eco"
                      : "has-text-grey-light",
                    attrs: {
                      icon: _vm.pop.red_minima_n2
                        ? ["fas", "check-circle"]
                        : ["far", "times-circle"],
                      disabled: !_vm.pop.red_minima_n2
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "is-size-6",
                      class: _vm.pop.red_minima_n2
                        ? "has-text-weight-bold"
                        : "has-text-grey-light has-text-weight-light"
                    },
                    [_vm._v("Red Mínima N2")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.vip ? "has-text-eco" : "has-text-grey-light",
                        attrs: {
                          icon: _vm.vip
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.vip
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.vip
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("VIP")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.vip },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("vip", _vm.vip)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("VIP")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.vip & !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.vip_entel
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.vip_entel
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.vip_entel
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.vip_entel
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("VIP Entel")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.vip & _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.vip_entel },
                          on: {
                            input: function($event) {
                              return _vm.updateVipEntel()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("VIP Entel")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.localidad_obligatoria
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.localidad_obligatoria
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.localidad_obligatoria
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.localidad_obligatoria
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("Localidad Obligatoria")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.localidad_obligatoria },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter(
                                "localidad_obligatoria",
                                _vm.localidad_obligatoria
                              )
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("Localidad Obligatoria")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.ranco
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.ranco
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.ranco
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.ranco
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("RAN Consolidado (RANCO)")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.ranco },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("ranco", _vm.ranco)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("RAN Consolidado (RANCO)")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "tile is-child" }, [
            _c(
              "div",
              {
                staticClass:
                  "is-size-5 title has-text-weight-semibold has-text-grey-dark"
              },
              [_vm._v("CARACTERISTICAS INFRAESTRUCTURA")]
            ),
            _vm._v(" "),
            _c("div", { staticStyle: { padding: "10px" } }, [
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.offgrid
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.offgrid
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.offgrid
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.offgrid
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("Offgrid")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.offgrid },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("offgrid", _vm.offgrid)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("Offgrid")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.solar
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.solar
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.solar
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.solar
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("Paneles Solares")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.solar },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("solar", _vm.solar)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("Paneles Solares")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("font-awesome-icon", {
                        class: _vm.eolica
                          ? "has-text-eco"
                          : "has-text-grey-light",
                        attrs: {
                          icon: _vm.eolica
                            ? ["fas", "check-circle"]
                            : ["far", "times-circle"],
                          disabled: !_vm.eolica
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "is-size-6",
                          class: _vm.eolica
                            ? "has-text-weight-bold"
                            : "has-text-grey-light has-text-weight-light"
                        },
                        [_vm._v("Eólico")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { value: _vm.eolica },
                          on: {
                            input: function($event) {
                              return _vm.updateParameter("eolica", _vm.eolica)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v("Eólico")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
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

/***/ "./resources/js/components/pop/CharacteristicsSide.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pop/CharacteristicsSide.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacteristicsSide.vue?vue&type=template&id=049e3c54& */ "./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54&");
/* harmony import */ var _CharacteristicsSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacteristicsSide.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CharacteristicsSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/CharacteristicsSide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CharacteristicsSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CharacteristicsSide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CharacteristicsSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CharacteristicsSide.vue?vue&type=template&id=049e3c54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/CharacteristicsSide.vue?vue&type=template&id=049e3c54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CharacteristicsSide_vue_vue_type_template_id_049e3c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);