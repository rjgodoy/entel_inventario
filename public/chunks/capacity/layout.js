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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMicrochip"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChargingStation"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGasPump"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"]); // import LeaderLine from 'leader-line'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MiniGeneratorSets: function MiniGeneratorSets() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/blocks/generator */ "chunks/pop/layout/blocks/generator").then(__webpack_require__.bind(null, /*! ../capacity/blocks/GeneratorSets */ "./resources/js/components/capacity/blocks/GeneratorSets.vue"));
    },
    MiniRooms: function MiniRooms() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/blocks/generator */ "chunks/pop/layout/blocks/generator").then(__webpack_require__.bind(null, /*! ../capacity/blocks/Rooms */ "./resources/js/components/capacity/blocks/Rooms.vue"));
    },
    ModalJunction: function ModalJunction() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/junction */ "chunks/pop/layout/modals/junction").then(__webpack_require__.bind(null, /*! ../pop/layout/modals/ModalJunction */ "./resources/js/components/pop/layout/modals/ModalJunction.vue"));
    },
    ModalPowerRectifier: function ModalPowerRectifier() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/powerRectifier */ "chunks/pop/layout/modals/powerRectifier").then(__webpack_require__.bind(null, /*! ../pop/layout/modals/ModalPowerRectifier */ "./resources/js/components/pop/layout/modals/ModalPowerRectifier.vue"));
    },
    ModalAirConditioner: function ModalAirConditioner() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/airConditioner */ "chunks/pop/layout/modals/airConditioner").then(__webpack_require__.bind(null, /*! ../pop/layout/modals/ModalAirConditioner */ "./resources/js/components/pop/layout/modals/ModalAirConditioner.vue"));
    },
    CapacityChart: function CapacityChart() {
      return Promise.all(/*! import() | chunks/pop/layout/capacityChart */[__webpack_require__.e("vendors~canvg~chunks/capacity/capacity~chunks/capacity/layout~chunks/capacity/modals/capacity~chunks~5206684a"), __webpack_require__.e("vendors~chunks/capacity/capacity~chunks/capacity/modals/capacity~chunks/pop/infrastructure/SpaceChar~ff23a29a"), __webpack_require__.e("chunks/pop/layout/capacityChart")]).then(__webpack_require__.bind(null, /*! ./CapacityChart */ "./resources/js/components/capacity/CapacityChart.vue"));
    } // GrowingChart: () => import(/* webpackChunkName: "chunks/pop/layout/growingChart"*/'./GrowingChart'),

  },
  props: ['user', 'room'],
  data: function data() {
    return {
      junctions: [],
      generatorSets: Array,
      // powerRectifiers: Array,
      // airConditioners: Array,
      junctionSelected: '',
      generatorSetSelected: null,
      // powerRectifierSelected: null,
      // airConditionerSelected: null,
      canEditJunctions: null,
      canEditGeneratorGroups: null,
      // canEditPowerRectifiers: null,
      // canEditAirConditioners: null,
      isJunctionModalActive: false,
      isGeneratorModalActive: false // isPowerRectifierModalActive: false,
      // isAirConditionerModalActive: false,

    };
  },
  computed: {
    pop: function pop() {
      return this.room ? this.room.pop : null;
    },
    salas: function salas() {
      return this.pop && this.pop.rooms ? this.pop.rooms : '';
    } // totalCapacityA() {
    //     let sum; let res; let div; 
    //     switch(this.generatorSet.generator_set_topology_type_id) {
    //         case 1:
    //             sum = c9 + 
    //             break
    //         case 1:
    //             break
    //         case 1:
    //             break
    //         case 1:
    //             break
    //     }
    //     SUMIFS(C8;C9;"A+B";C10;"A") + 
    //     SUMIFS(C17;C18;"A+B";C19;"A") + 
    //     SUMIFS(C26;C27;"A+B";C28;"A") + 
    //     SUMIFS(C35;C36;"A+B";C37;"A") + 
    //     SUMIF(C9;"ÚNICO";C8) + 
    //     SUMIF(C18;"ÚNICO";C17) + 
    //     SUMIF(C27;"ÚNICO";C26) + 
    //     SUMIF(C36;"ÚNICO";C35) + 
    //     SUMIF(C9;"N+1";C8) + 
    //     SUMIF(C18;"N+1";C17) + 
    //     SUMIF(C27;"N+1";C26) + 
    //     SUMIF(C36;"N+1";C35
    //     ) - (
    //     SUMIF(C9;"N+1";C8) + 
    //     SUMIF(C18;"N+1";C17) + 
    //     SUMIF(C27;"N+1";C26) + 
    //     SUMIF(C36;"N+1";C35)
    //     )/
    //     IF( 
    //         COUNTIF(C9;"N+1")+
    //         COUNTIF(C18;"N+1")+
    //         COUNTIF(C27;"N+1")+
    //         COUNTIF(C36;"N+1")=0;1;
    //     (COUNTIF(C9;"N+1")+
    //         COUNTIF(C18;"N+1")+
    //         COUNTIF(C27;"N+1")+
    //         COUNTIF(C36;"N+1"))
    //     )
    // }

  },
  watch: {
    room: function room(val) {
      // console.log(this.pop)
      // console.log(this.salas)
      this.getJunctions();
      this.getGeneratorSets();
    }
  },
  created: function created() {
    this.$eventBus.$on('junction-measurements-updated', this.getJunctions);
    this.$eventBus.$on('generator-set-capacities-updated', this.getGeneratorSets);
  },
  mounted: function mounted() {
    this.getJunctions();
    this.getGeneratorSets(); // this.getPowerRectifiers()
    // this.getAirConditioners()
    // let leader = new LeaderLine(
    //     document.getElementById('alpha'),
    //     document.getElementById('beta')
    // );
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
                return axios.get("/api/popJunctions/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
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
                return axios.get("/api/generatorSets/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
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
    }() // getPowerRectifiers() {
    //     axios.get(`/api/powerRectifiers/${this.pop.id}?api_token=${this.user.api_token}`)
    //     .then((response) => {
    //         // console.log(response.data)
    //         this.powerRectifiers = response.data.powerRectifiers
    //         this.canEditPowerRectifiers = response.data.can
    //     })
    //     .catch((error) => {
    //         console.log('Error al traer los datos de Empalmes: ' + error);
    //     });
    // },
    // getAirConditioners() {
    //     axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
    //     .then((response) => {
    //         // console.log(response.data)
    //         this.airConditioners = response.data.airConditioner
    //         this.canEditAirConditioners = response.data.can
    //     })
    //     .catch((error) => {
    //         console.log('Error al traer los datos de Empalmes: ' + error);
    //     });
    // },

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
  return _c(
    "div",
    {},
    [
      _c("section", {}, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "section" }, [
              _c("div", { staticClass: "tile is-ancestor" }, [
                _c(
                  "div",
                  { staticClass: "tile is-vertical" },
                  [
                    _c(
                      "div",
                      { staticClass: "tile" },
                      [
                        _c("div", { staticClass: "tile is-parent" }),
                        _vm._v(" "),
                        _vm._l(_vm.junctions, function(junction) {
                          return _c(
                            "div",
                            { key: junction.id, staticClass: "tile is-parent" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "tile is-child is-size-5 has-text-weight-normal",
                                  on: {
                                    click: function($event) {
                                      _vm.isJunctionModalActive = true
                                      _vm.junctionSelected = junction
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "b-message",
                                    {
                                      staticClass: "box is-paddingless",
                                      attrs: { type: "is-success" }
                                    },
                                    [
                                      _c("div", { staticClass: "columns" }, [
                                        _c("div", { staticClass: "column" }, [
                                          _vm._v("Empalme")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "column is-2 has-text-centered"
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              staticClass: "has-text-success",
                                              attrs: {
                                                icon: ["far", "check-circle"],
                                                size: "2x"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "tile is-parent" })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("MiniGeneratorSets", {
                      attrs: {
                        pop: _vm.pop,
                        generatorSets: _vm.generatorSets,
                        can: _vm.canEditGeneratorGroups,
                        user: _vm.user
                      }
                    }),
                    _vm._v(" "),
                    _c("MiniRooms", {
                      attrs: {
                        pop: _vm.pop,
                        room: _vm.room,
                        salas: _vm.salas,
                        can: _vm.canEditGeneratorGroups,
                        user: _vm.user
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
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
              can: _vm.canEditJunctions,
              user: _vm.user
            }
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