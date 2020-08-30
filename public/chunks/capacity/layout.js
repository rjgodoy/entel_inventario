(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");


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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRandom"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMicrochip"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChargingStation"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGasPump"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"]); // import LeaderLine from 'leader-line'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Junctions: function Junctions() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/junction */ "chunks/capacity/blocks/junction").then(__webpack_require__.bind(null, /*! ../capacity/blocks/Junctions */ "./resources/js/components/capacity/blocks/Junctions.vue"));
    },
    GeneratorSets: function GeneratorSets() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/generator */ "chunks/capacity/blocks/generator").then(__webpack_require__.bind(null, /*! ../capacity/blocks/GeneratorSets */ "./resources/js/components/capacity/blocks/GeneratorSets.vue"));
    },
    SolarPanels: function SolarPanels() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/solarPanels */ "chunks/capacity/blocks/solarPanels").then(__webpack_require__.bind(null, /*! ../capacity/blocks/SolarPanels */ "./resources/js/components/capacity/blocks/SolarPanels.vue"));
    },
    MiniRooms: function MiniRooms() {
      return __webpack_require__.e(/*! import() | chunks/capacity/blocks/room */ "chunks/capacity/blocks/room").then(__webpack_require__.bind(null, /*! ../capacity/blocks/Rooms */ "./resources/js/components/capacity/blocks/Rooms.vue"));
    }
  },
  props: ['user', 'room'],
  data: function data() {
    return {
      junctions: Object,
      generatorSets: Object,
      canEditJunctions: null,
      canEditGeneratorGroups: null,
      isEditMode: false,
      newTheoreticalAutonomy: this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0
    };
  },
  computed: {
    pop: function pop() {
      return this.room && this.room.pop;
    },
    salas: function salas() {
      return this.pop && this.pop.rooms ? this.pop.rooms : '';
    }
  },
  watch: {
    room: function room(val) {
      this.getJunctions();
      this.getGeneratorSets();
      this.newTheoreticalAutonomy = this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0;
    }
  },
  created: function created() {
    this.$eventBus.$on('junction-measurements-updated', this.getJunctions);
    this.$eventBus.$on('generator-set-capacities-updated', this.getGeneratorSets);
  },
  mounted: function mounted() {
    this.getJunctions();
    this.getGeneratorSets();
  },
  methods: {
    getJunctions: function () {
      var _getJunctions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.pop) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios.get("/api/popJunctions/".concat(this.pop.id)).then(function (response) {
                  _this.junctions = response.data.junctions;
                  _this.canEditJunctions = response.data.can;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Empalmes: ' + error);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getJunctions() {
        return _getJunctions.apply(this, arguments);
      }

      return getJunctions;
    }(),
    getGeneratorSets: function () {
      var _getGeneratorSets = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.pop) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return axios.get("/api/generatorSets/".concat(this.pop.id)).then(function (response) {
                  _this2.generatorSets = response.data.generatorSets;
                  _this2.canEditGeneratorGroups = response.data.can;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGeneratorSets() {
        return _getGeneratorSets.apply(this, arguments);
      }

      return getGeneratorSets;
    }(),
    updateAutonomy: function updateAutonomy() {
      if (!this.isEditMode && this.pop && this.pop.current_autonomy && this.newTheoreticalAutonomy != this.pop.current_autonomy.theoretical) {
        var params = {
          'pop_id': this.pop.id,
          'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
        };
        axios.post("/api/autonomies", params).then(function (response) {
          console.log(response.data);
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('junction-measurements-updated');
    this.$eventBus.$off('generator-set-capacities-updated');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                { staticClass: "tile box is-child" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "is-pulled-right",
                      attrs: { size: "is-small" },
                      on: {
                        click: function($event) {
                          _vm.isEditMode = !_vm.isEditMode
                          _vm.updateAutonomy()
                        }
                      }
                    },
                    [_vm._v("Editar autonomía del POP")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "is-size-6" }, [
                    _vm._v("Autonomía del POP")
                  ]),
                  _vm._v(" "),
                  !_vm.isEditMode
                    ? _c(
                        "div",
                        { staticClass: "is-size-5 has-text-weight-semibold" },
                        [
                          _vm._v(_vm._s(_vm.newTheoreticalAutonomy) + " "),
                          _c("span", { staticClass: "is-size-6" }, [
                            _vm._v("hrs")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditMode
                    ? _c("b-input", {
                        attrs: { size: "is-small" },
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
                    user: _vm.user
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
                        can: _vm.canEditGeneratorGroups,
                        user: _vm.user
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tile is-2" },
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
              { staticClass: "tile" },
              [
                _c("MiniRooms", {
                  attrs: {
                    pop: _vm.pop,
                    room: _vm.room,
                    salas: _vm.salas,
                    user: _vm.user
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/Layout.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/capacity/Layout.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=26d4db44& */ "./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=26d4db44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/Layout.vue?vue&type=template&id=26d4db44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_26d4db44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);