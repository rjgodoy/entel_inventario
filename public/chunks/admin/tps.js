(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/tps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    // Se conecta a la base de datos de PSG y extrae la información a la tabla de Inventario
    this.syncData();
  },
  data: function data() {
    return {
      data: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: true,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      checkboxPosition: 'left',
      checkedRows: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 20
    };
  },
  methods: {
    syncData: function syncData() {
      var _this = this;

      axios.get("/api/psgTp?api_token=".concat(this.user.api_token, "&page=").concat(this.currentPage)).then(function (response) {
        console.log(response);
        _this.data = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section" }, [
    _c(
      "div",
      { staticClass: "box" },
      [
        _c("b-field", { attrs: { grouped: "", "group-multiline": "" } }, [
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isBordered,
                    callback: function($$v) {
                      _vm.isBordered = $$v
                    },
                    expression: "isBordered"
                  }
                },
                [_vm._v("Bordered")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isStriped,
                    callback: function($$v) {
                      _vm.isStriped = $$v
                    },
                    expression: "isStriped"
                  }
                },
                [_vm._v("Striped")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isNarrowed,
                    callback: function($$v) {
                      _vm.isNarrowed = $$v
                    },
                    expression: "isNarrowed"
                  }
                },
                [_vm._v("Narrowed")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isHoverable,
                    callback: function($$v) {
                      _vm.isHoverable = $$v
                    },
                    expression: "isHoverable"
                  }
                },
                [_vm._v("Hoverable")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isFocusable,
                    callback: function($$v) {
                      _vm.isFocusable = $$v
                    },
                    expression: "isFocusable"
                  }
                },
                [_vm._v("Focusable")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isLoading,
                    callback: function($$v) {
                      _vm.isLoading = $$v
                    },
                    expression: "isLoading"
                  }
                },
                [_vm._v("Loading state")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isEmpty,
                    callback: function($$v) {
                      _vm.isEmpty = $$v
                    },
                    expression: "isEmpty"
                  }
                },
                [_vm._v("Empty")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "b-table",
          {
            attrs: {
              data: _vm.isEmpty ? [] : _vm.data,
              paginated: _vm.isPaginated,
              "per-page": _vm.perPage,
              "current-page": _vm.currentPage,
              "pagination-simple": _vm.isPaginationSimple,
              "pagination-position": _vm.paginationPosition,
              "default-sort-direction": _vm.defaultSortDirection,
              "sort-icon": _vm.sortIcon,
              "sort-icon-size": _vm.sortIconSize,
              "default-sort": "FECHA_INGRESO",
              "aria-next-label": "Next page",
              "aria-previous-label": "Previous page",
              "aria-page-label": "Page",
              "aria-current-label": "Current page",
              bordered: _vm.isBordered,
              striped: _vm.isStriped,
              narrowed: _vm.isNarrowed,
              hoverable: _vm.isHoverable,
              loading: _vm.isLoading,
              focusable: _vm.isFocusable,
              "checked-rows": _vm.checkedRows,
              "is-row-checkable": function(row) {
                return row.id !== 3
              },
              checkable: "",
              "checkbox-position": _vm.checkboxPosition
            },
            on: {
              "update:currentPage": function($event) {
                _vm.currentPage = $event
              },
              "update:current-page": function($event) {
                _vm.currentPage = $event
              },
              "update:checkedRows": function($event) {
                _vm.checkedRows = $event
              },
              "update:checked-rows": function($event) {
                _vm.checkedRows = $event
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
                        attrs: {
                          field: "tp_id",
                          label: "ID TP",
                          width: "40",
                          numeric: ""
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(props.row.tp_id) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-table-column",
                      {
                        attrs: {
                          field: "site.nem_site",
                          label: "Sitio",
                          sortable: ""
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              props.row.site ? props.row.site.nem_site : ""
                            ) +
                            " - " +
                            _vm._s(
                              props.row.site ? props.row.site.nombre : ""
                            ) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-table-column",
                      { attrs: { field: "description", label: "Descripción" } },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(props.row.description) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-table-column",
                      {
                        attrs: {
                          field: "created_at",
                          label: "Fecha Ingreso",
                          sortable: ""
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(props.row.created_at) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-table-column",
                      {
                        attrs: {
                          field: "user",
                          label: "Usuario Creador",
                          centered: "",
                          sortable: ""
                        }
                      },
                      [
                        _c("span", { staticClass: "tag is-success" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(props.row.user) +
                              "\n                    "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-table-column",
                      {
                        attrs: {
                          field: "psg_tp_state.state",
                          label: "Estado",
                          centered: "",
                          sortable: ""
                        }
                      },
                      [
                        _c("span", { staticClass: "tag is-success" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(props.row.psg_tp_state.state) +
                              "\n                    "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("b-table-column", { attrs: { label: "Acciones" } }, [
                      _c("span")
                    ])
                  ]
                }
              }
            ])
          },
          [
            _vm._v(" "),
            _c("template", { slot: "empty" }, [
              _c("section", { staticClass: "section" }, [
                _c(
                  "div",
                  { staticClass: "content has-text-grey has-text-centered" },
                  [
                    _c(
                      "p",
                      [
                        _c("b-icon", {
                          attrs: { icon: "emoticon-sad", size: "is-large" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v("Nothing here.")])
                  ]
                )
              ])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=template&id=28a28593& */ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony import */ var _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminTps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=template&id=28a28593& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);