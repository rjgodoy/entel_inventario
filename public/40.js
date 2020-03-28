(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: [],
  data: function data() {
    return {
      protectedZones: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 20,
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getProtectedZones(); // this.getFiles()
  },
  methods: {
    getProtectedZones: function getProtectedZones() {
      var _this = this;

      axios.get("/api/eco").then(function (response) {
        // console.log(response.data.data)
        _this.protectedZones = response.data.data;
      });
    } // async getFiles() {
    //     axios.get(`/api/eco/1`).then((response) => {
    //         // console.log(response)
    //     })
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "section is-marginless", class: _vm.bodyBackground },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c("div", { staticClass: "tile" }, [
            _c("div", { staticClass: "tile is-vertical" }, [
              _c("div", { staticClass: "tile is-parent" }, [
                _c(
                  "div",
                  { staticClass: "tile is-child box" },
                  [
                    _c("div", { staticClass: "title is-size-4" }, [
                      _vm._v("POP en zonas protegidas")
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { grouped: "", "group-multiline": "" } },
                      [
                        _c(
                          "b-select",
                          {
                            model: {
                              value: _vm.defaultSortDirection,
                              callback: function($$v) {
                                _vm.defaultSortDirection = $$v
                              },
                              expression: "defaultSortDirection"
                            }
                          },
                          [
                            _c("option", { attrs: { value: "asc" } }, [
                              _vm._v("Default sort direction: ASC")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "desc" } }, [
                              _vm._v("Default sort direction: DESC")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-select",
                          {
                            attrs: { disabled: !_vm.isPaginated },
                            model: {
                              value: _vm.perPage,
                              callback: function($$v) {
                                _vm.perPage = $$v
                              },
                              expression: "perPage"
                            }
                          },
                          [
                            _c("option", { attrs: { value: "5" } }, [
                              _vm._v("5 per page")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "10" } }, [
                              _vm._v("10 per page")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "15" } }, [
                              _vm._v("15 per page")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("20 per page")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "control is-flex" },
                          [
                            _c(
                              "b-switch",
                              {
                                attrs: { disabled: !_vm.isPaginated },
                                model: {
                                  value: _vm.isPaginationSimple,
                                  callback: function($$v) {
                                    _vm.isPaginationSimple = $$v
                                  },
                                  expression: "isPaginationSimple"
                                }
                              },
                              [_vm._v("Simple pagination")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-table", {
                      attrs: {
                        data: _vm.protectedZones,
                        paginated: _vm.isPaginated,
                        "per-page": _vm.perPage,
                        "current-page": _vm.currentPage,
                        "pagination-simple": _vm.isPaginationSimple,
                        "pagination-position": _vm.paginationPosition,
                        "default-sort-direction": _vm.defaultSortDirection,
                        "sort-icon": _vm.sortIcon,
                        "sort-icon-size": _vm.sortIconSize,
                        "pagination-size": "is-small",
                        "default-sort": "user.first_name",
                        "aria-next-label": "Next page",
                        "aria-previous-label": "Previous page",
                        "aria-page-label": "Page",
                        "aria-current-label": "Current page"
                      },
                      on: {
                        "update:currentPage": function($event) {
                          _vm.currentPage = $event
                        },
                        "update:current-page": function($event) {
                          _vm.currentPage = $event
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "b-table-column",
                                {
                                  staticClass: "is-size-6",
                                  attrs: {
                                    field: "id",
                                    label: "Nemónico",
                                    width: "40",
                                    sortable: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "header",
                                        fn: function(ref) {
                                          var column = ref.column
                                          return [
                                            _c(
                                              "b-tooltip",
                                              {
                                                staticClass: "is-size-6",
                                                attrs: { label: column.label }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(column.label) +
                                                    "\n                                            "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _vm._l(props.row.sites, function(site) {
                                    return _c(
                                      "router-link",
                                      {
                                        key: props.row.id,
                                        staticClass: "is-size-7",
                                        attrs: {
                                          to: "/pop/" + props.row.id,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(site.nem_site) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  staticClass: "is-size-6",
                                  attrs: {
                                    field: "user.first_name",
                                    label: "Nombre POP",
                                    sortable: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "header",
                                        fn: function(ref) {
                                          var column = ref.column
                                          return [
                                            _c(
                                              "b-tooltip",
                                              {
                                                staticClass: "is-size-6",
                                                attrs: { label: column.label }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(column.label) +
                                                    "\n                                            "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(props.row.nombre) +
                                      "\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  staticClass: "is-size-6",
                                  attrs: {
                                    field: "user.last_name",
                                    label: "Zona",
                                    sortable: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "header",
                                        fn: function(ref) {
                                          var column = ref.column
                                          return [
                                            _c(
                                              "b-tooltip",
                                              {
                                                staticClass: "is-size-6",
                                                attrs: { label: column.label }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(column.label) +
                                                    "\n                                            "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        props.row.protected_zones[0].cod_zone
                                      ) +
                                      "\n                                        " +
                                      _vm._s(
                                        props.row.comuna.zona.nombre_zona
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tile is-vertical" }, [
      _c("div", { staticClass: "tile is-parent" }, [
        _c("div", { staticClass: "tile is-child box" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v("Zonas de acopio temporal")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tile is-parent" }, [
        _c("div", { staticClass: "tile is-child box" }, [
          _c("div", { staticClass: "title" }, [_vm._v("RCA")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/Eco.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/eco/Eco.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eco.vue?vue&type=template&id=100bd810& */ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony import */ var _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eco.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/Eco.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=template&id=100bd810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);