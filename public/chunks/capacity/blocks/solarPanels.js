(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/blocks/solarPanels"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ModalNewSolarPanel: function ModalNewSolarPanel() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/newSolarPanel */ "chunks/pop/layout/modals/newSolarPanel").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalNewSolarPanel */ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue"));
    }
  },
  props: ['junctions', 'can', 'user', 'pop'],
  data: function data() {
    return {
      junctionSelected: null,
      isJunctionModalActive: false,
      isNewSolarPanelModalActive: false
    };
  },
  computed: {
    hasSolarPanels: function () {
      var _hasSolarPanels = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object.keys(this.junctions).forEach(function (element) {
                  return _this.junctions[element].solar_panels.length && true;
                });

              case 2:
                return _context.abrupt("return", false);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function hasSolarPanels() {
        return _hasSolarPanels.apply(this, arguments);
      }

      return hasSolarPanels;
    }(),
    photovoltaicCapacity: function photovoltaicCapacity() {
      var _this2 = this;

      var capacity = 0;
      Object.keys(this.junctions).forEach(function (element) {
        var junction = _this2.junctions[element];

        if (junction.solar_panels.length) {
          Object.keys(junction.solar_panels).forEach(function (element) {
            var panel = junction.solar_panels[element];
            capacity = capacity + panel.unit_capacity * panel.quantity;
          });
        }
      });
      return capacity / 1000;
    }
  },
  watch: {
    junctions: function junctions(val) {}
  },
  mounted: function mounted() {// console.log(this.generatorSets)
    // this.getGeneratorSets()
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "field" }, [
            _c(
              "div",
              { staticClass: "is-pulled-right" },
              [
                _c(
                  "b-tag",
                  {
                    staticClass:
                      "is-default has-text-weight-light has-text-grey is-size-7"
                  },
                  [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            _vm.isNewSolarPanelModalActive = true
                          }
                        }
                      },
                      [_vm._v("Agregar")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "is-size-6 has-text-weight-bold",
                staticStyle: { "padding-bottom": "12px" }
              },
              [_vm._v("PANELES SOLARES")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tile is-vertical is-parent" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile is-parent",
                  attrs: { label: "CAPACIDADES", "label-position": "on-border" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tile box is-shadowless is-paddingless",
                      staticStyle: { border: "solid 0.05rem black" }
                    },
                    [
                      _c("div", { staticClass: "tile" }, [
                        _c("div", { staticClass: "tile is-parent" }, [
                          _c(
                            "div",
                            { staticClass: "has-text-centered tile is-child" },
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
                                        _vm.photovoltaicCapacity,
                                        "0,0.0"
                                      )
                                    ) + "  "
                                  ),
                                  _c("span", { staticClass: "is-size-7" }, [
                                    _vm._v("kW")
                                  ])
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
                        ])
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.hasSolarPanels
                ? _c(
                    "div",
                    { staticClass: "tile is-parent columns is-multiline" },
                    _vm._l(_vm.junctions, function(junction) {
                      return _c(
                        "div",
                        { staticClass: "tile" },
                        _vm._l(junction.solar_panels, function(solarPanel) {
                          return _c(
                            "div",
                            {
                              key: solarPanel.id,
                              staticClass: "tile column is-parent is-4"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "box tile ",
                                  on: {
                                    click: function($event) {
                                      _vm.isJunctionModalActive = true
                                    }
                                  }
                                },
                                [_vm._m(0, true)]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    }),
                    0
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          !_vm.hasSolarPanels
            ? _c("div", { staticClass: "tile columns is-vcentered" }, [
                _c("div", { staticClass: "column" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "has-text-centered has-text-weight-light has-text-grey is-size-7"
                    },
                    [
                      _c("div", { staticClass: "block" }, [
                        _vm._v("NO TIENE PANELES SOLARES")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tag",
                        {
                          staticClass:
                            "is-default has-text-weight-light has-text-grey is-size-7"
                        },
                        [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  _vm.isNewSolarPanelModalActive = true
                                }
                              }
                            },
                            [_vm._v("Agregar")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isNewSolarPanelModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isNewSolarPanelModalActive = $event
            }
          }
        },
        [
          _c("modal-new-solar-panel", {
            attrs: { user: _vm.user, junctions: _vm.junctions }
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
    return _c("div", {}, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-4" }, [
          _c("div", { staticClass: "has-text-weight-semibold is-size-6" }, [
            _vm._v("Paneles Solar")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/blocks/SolarPanels.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/SolarPanels.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolarPanels.vue?vue&type=template&id=35e1c761& */ "./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761&");
/* harmony import */ var _SolarPanels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolarPanels.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SolarPanels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/blocks/SolarPanels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarPanels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarPanels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarPanels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarPanels.vue?vue&type=template&id=35e1c761& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/SolarPanels.vue?vue&type=template&id=35e1c761&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarPanels_vue_vue_type_template_id_35e1c761___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);