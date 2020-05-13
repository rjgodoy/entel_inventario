(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPopDataAdd_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPopDataAdd.vue */ "./resources/js/components/admin/AdminPopDataAdd.vue");
/* harmony import */ var _AdminPopDataEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPopDataEdit.vue */ "./resources/js/components/admin/AdminPopDataEdit.vue");
/* harmony import */ var _AdminPopDataSync_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminPopDataSync.vue */ "./resources/js/components/admin/AdminPopDataSync.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'pop-data-add': _AdminPopDataAdd_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'pop-data-edit': _AdminPopDataEdit_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'pop-data-sync': _AdminPopDataSync_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return {
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light',
      popActiveView: 2
    };
  },
  methods: {
    changeView: function changeView(view) {
      if (this.popActiveView != view) {
        this.popActiveView = view;
      } else {
        this.popActiveView = 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _VuePagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VuePagination.vue */ "./resources/js/components/VuePagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSyncAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBackspace"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'vue-pagination': _VuePagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    this.getPopsExisting();
    this.getPopsToAdd();
  },
  data: function data() {
    return {
      popsExisting: {
        total: 0,
        per_page: 10,
        from: 1,
        to: 0,
        current_page: 1
      },
      popsToAdd: {
        total: 0,
        per_page: 10,
        from: 1,
        to: 0,
        current_page: 1
      },
      selectedPops: []
    };
  },
  methods: {
    getPopsExisting: function getPopsExisting() {
      var _this = this;

      axios.get("api/popsExisting?api_token=".concat(this.user.api_token, "&page=").concat(this.popsExisting.current_page)).then(function (response) {
        // console.log(response)
        _this.popsExisting = response.data; // console.log(this.popsExisting.data.length)
        // this.totalPops = this.pops.total
      })["catch"](function () {
        console.log('handle server error from here');
      });
    },
    getPopsToAdd: function getPopsToAdd() {
      var _this2 = this;

      axios.get("api/popsToAdd?api_token=".concat(this.user.api_token, "&page=").concat(this.popsToAdd.current_page)).then(function (response) {
        // console.log(response)
        _this2.popsToAdd = response.data; // console.log(this.popsToAdd.data.length)
        // this.totalPops = this.pops.total
      })["catch"](function () {
        console.log('handle server error from here');
      });
    },
    addPop: function addPop(pop) {
      if (this.selectedPops.includes(pop)) {
        console.log('fail'); //     var index = this.selectedPops.indexOf(pop);
        //     if (index > -1) {
        //       this.selectedPops.splice(index, 1);
        //     }
      } else {
        pop.selected = true;
        this.selectedPops.push(pop); // console.log(this.selectedPops)
      }
    },
    removeSelectedPop: function removeSelectedPop(item) {
      item.selected = false;

      for (var i = 0; i < this.selectedPops.length; i++) {
        if (this.selectedPops[i] === item) {
          this.selectedPops.splice(i, 1);
        }
      }
    },
    confirm: function (_confirm) {
      function confirm(_x) {
        return _confirm.apply(this, arguments);
      }

      confirm.toString = function () {
        return _confirm.toString();
      };

      return confirm;
    }(function (pop) {
      // Ask
      var bool = confirm("Seguro desea actualizar la(s) solicitud(es)?"); // Confirmation

      if (bool) {
        // Update sgc data
        this.updateSgcRequest(pop); // Delete POP from Table
        // this.deletePopExisting(pop)
        // Update call

        this.getPopsExisting();
      } else {// alert("cancelo la solicitud");
      }
    }),
    updateSgcRequest: function updateSgcRequest(pop) {
      axios.put("api/tempSgcPops/".concat(pop.pop_id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        console.log(response.data); // this.deletePopExisting(pop)
        // Alert Confirmation

        alert("La solicitud se actualizó correctamente");
      })["catch"](function () {
        console.log('handle server error from here');
      }); // console.log(pop)
    } // deletePopExisting(pop) {
    //     console.log(pop.id)
    //     axios.delete(`api/tempSgcPops/${pop.id}`)
    //         .then((response) => {
    //             // console.log(response.data)
    //             // Alert Confirmation
    //             alert("La solicitud se actualizó correctamente");
    //         })
    //         .catch(() => {
    //             console.log('handle server error from here');
    //         });
    //     // console.log(pop)
    // },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e& ***!
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
  return _c(
    "div",
    {},
    [
      _c("div", { staticClass: "section shadow-inset" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "tile is-ancestor",
              staticStyle: { margin: "-40px 0 -40px 0" }
            },
            [
              _c("div", { staticClass: "tile is-parent" }, [
                _c(
                  "a",
                  {
                    staticClass: "tile is-child box",
                    class:
                      _vm.popActiveView == 1
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        return _vm.changeView(1)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.popActiveView == 1
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Ingreso\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile is-parent" }, [
                _c(
                  "a",
                  {
                    staticClass: "tile is-child box",
                    class:
                      _vm.popActiveView == 2
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        return _vm.changeView(2)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.popActiveView == 2
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Edición\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile is-parent" }, [
                _c(
                  "a",
                  {
                    staticClass: "tile is-child box",
                    class:
                      _vm.popActiveView == 3
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        return _vm.changeView(3)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.popActiveView == 3
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Sincronización con SGC\n                            "
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
        ])
      ]),
      _vm._v(" "),
      _vm.popActiveView == 1
        ? _c("pop-data-add", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.popActiveView == 2
        ? _c("pop-data-edit", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.popActiveView == 3
        ? _c("pop-data-sync", {
            attrs: {
              user: _vm.user,
              bodyBackground: _vm.bodyBackground,
              boxBackground: _vm.boxBackground,
              primaryText: _vm.primaryText,
              secondaryText: _vm.secondaryText
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "section",
      { staticClass: "section is-marginless", class: _vm.bodyBackground },
      [
        _c("div", { staticClass: "box" }, [
          _c("div", { staticClass: "tile is-ancestor" }, [
            _c("div", { staticClass: "tile is-parent is-vertical" }, [
              _c("div", { staticClass: "tile" }, [
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child is-4",
                      class: _vm.boxBackground
                    },
                    [
                      _c("p", { staticClass: "title is-size-5" }, [
                        _vm._v("SGC")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle" }, [
                        _vm._v("What is up?")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tile is-child", class: _vm.boxBackground },
                    [
                      _c("p", { staticClass: "title is-size-5" }, [
                        _vm._v("Inventario")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle" }, [
                        _vm._v("What is up?")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile" }, [
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child is-4 box",
                      class: _vm.boxBackground
                    },
                    [
                      _c(
                        "table",
                        {
                          staticClass: "table is-fullwidth",
                          class: _vm.boxBackground
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Id" } }, [
                                    _vm._v("Id")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Pop" } }, [
                                    _vm._v("POP")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("th", {
                                staticClass:
                                  "is-size-7 has-text-weight-semibold has-text-centered"
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.popsToAdd.data, function(pop) {
                              return _c(
                                "tr",
                                {
                                  key: pop.id,
                                  staticClass: "is-size-7 has-text-weight-light"
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "has-text-weight-light",
                                      class: _vm.primaryText
                                    },
                                    [_vm._v(_vm._s(pop.id))]
                                  ),
                                  _vm._v(" "),
                                  _c("td", {}, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-semibold",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nem_movil : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.primaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nombre : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.direccion : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(pop ? pop.nombre_comuna : "")
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "has-text-weight-light has-text-centered",
                                      class: _vm.primaryText
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "button is-link is-outlined is-small has-tooltip-right",
                                          attrs: { "data-tooltip": "Agregar" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addPop(pop)
                                            }
                                          }
                                        },
                                        [
                                          _c("font-awesome-icon", {
                                            attrs: { icon: "arrow-right" }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "nav",
                        {
                          staticClass: "pagination",
                          attrs: {
                            role: "navigation",
                            "aria-label": "pagination"
                          }
                        },
                        [
                          _c("vue-pagination", {
                            attrs: {
                              pagination: _vm.popsToAdd,
                              offset: 4,
                              primaryText: _vm.primaryText
                            },
                            on: {
                              paginate: function($event) {
                                return _vm.getPopsToAdd()
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child box",
                      class: _vm.boxBackground
                    },
                    [
                      _c(
                        "table",
                        {
                          staticClass: "table is-fullwidth",
                          class: _vm.boxBackground
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Id" } }, [
                                    _vm._v("Id")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Pop" } }, [
                                    _vm._v("POP")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("th", {
                                staticClass:
                                  "is-size-7 has-text-weight-semibold has-text-centered"
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.selectedPops, function(pop) {
                              return _c(
                                "tr",
                                {
                                  key: pop.id,
                                  staticClass: "is-size-7 has-text-weight-light"
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "has-text-weight-light",
                                      class: _vm.primaryText
                                    },
                                    [_vm._v(_vm._s(pop.id))]
                                  ),
                                  _vm._v(" "),
                                  _c("td", {}, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-semibold",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nem_movil : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.primaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nombre : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.direccion : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(pop ? pop.nombre_comuna : "")
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "has-text-weight-light has-text-centered",
                                      class: _vm.primaryText
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "button is-danger is-outlined is-small has-tooltip-right",
                                          attrs: { "data-tooltip": "Quitar" },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeSelectedPop(pop)
                                            }
                                          }
                                        },
                                        [
                                          _c("font-awesome-icon", {
                                            attrs: { icon: "backspace" }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "section is-marginless", class: _vm.bodyBackground },
      [
        _c("div", { staticClass: "box" }, [
          _c("div", { staticClass: "tile is-ancestor" }, [
            _c("div", { staticClass: "tile is-parent is-vertical" }, [
              _c("div", { staticClass: "tile" }, [
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child is-4",
                      class: _vm.boxBackground
                    },
                    [
                      _c("p", { staticClass: "title" }, [
                        _vm._v("POPs existentes")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle" }, [
                        _vm._v("What is up?")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile" }, [
                _c("div", { staticClass: "tile is-parent" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-child is-4 box",
                      class: _vm.boxBackground
                    },
                    [
                      _c(
                        "table",
                        {
                          staticClass: "table is-fullwidth",
                          class: _vm.boxBackground
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Id" } }, [
                                    _vm._v("Id")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold",
                                  class: _vm.secondaryText
                                },
                                [
                                  _c("abbr", { attrs: { title: "Pop" } }, [
                                    _vm._v("POP")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("th", {
                                staticClass:
                                  "is-size-7 has-text-weight-semibold has-text-centered"
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.popsExisting.data, function(pop) {
                              return _c(
                                "tr",
                                {
                                  key: pop.id,
                                  staticClass: "is-size-7 has-text-weight-light"
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "has-text-weight-light",
                                      class: _vm.primaryText
                                    },
                                    [_vm._v(_vm._s(pop.id))]
                                  ),
                                  _vm._v(" "),
                                  _c("td", {}, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-semibold",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nem_movil : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.primaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.nombre : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [_vm._v(_vm._s(pop ? pop.direccion : ""))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                        class: _vm.secondaryText
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(pop ? pop.nombre_comuna : "")
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "has-text-weight-light has-text-centered",
                                      class: _vm.primaryText
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "button is-link is-outlined is-small has-tooltip-right",
                                          attrs: { "data-tooltip": "Agregar" },
                                          on: {
                                            click: function($event) {
                                              return _vm.confirm(pop)
                                            }
                                          }
                                        },
                                        [
                                          _c("font-awesome-icon", {
                                            attrs: { icon: "sync-alt" }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "nav",
                        {
                          staticClass: "pagination",
                          attrs: {
                            role: "navigation",
                            "aria-label": "pagination"
                          }
                        },
                        [
                          _c("vue-pagination", {
                            attrs: {
                              pagination: _vm.popsExisting,
                              offset: 4,
                              primaryText: _vm.primaryText
                            },
                            on: {
                              paginate: function($event) {
                                return _vm.getPopsExisting()
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminApprove.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/AdminApprove.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminApprove.vue?vue&type=template&id=810e6b2e& */ "./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e&");
/* harmony import */ var _AdminApprove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminApprove.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminApprove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminApprove.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApprove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminApprove.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminApprove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApprove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminApprove.vue?vue&type=template&id=810e6b2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminApprove.vue?vue&type=template&id=810e6b2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApprove_vue_vue_type_template_id_810e6b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/AdminPopDataSync.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/AdminPopDataSync.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPopDataSync.vue?vue&type=template&id=c004f11c& */ "./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c&");
/* harmony import */ var _AdminPopDataSync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPopDataSync.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPopDataSync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminPopDataSync.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPopDataSync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPopDataSync.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPopDataSync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPopDataSync.vue?vue&type=template&id=c004f11c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPopDataSync.vue?vue&type=template&id=c004f11c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPopDataSync_vue_vue_type_template_id_c004f11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);