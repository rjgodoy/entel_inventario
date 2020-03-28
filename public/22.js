(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    this.getPops();
  },
  data: function data() {
    return {
      users: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 20,
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light'
    };
  },
  methods: {
    getPops: function getPops() {
      var _this = this;

      axios.get('/api/users').then(function (response) {
        console.log(response.data);
        _this.users = response.data.users;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0& ***!
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
  return _c(
    "section",
    { staticClass: "section container" },
    [
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
              _c("option", { attrs: { value: "5" } }, [_vm._v("5 per page")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "10" } }, [_vm._v("10 per page")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "15" } }, [_vm._v("15 per page")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20 per page")])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c(
              "button",
              {
                staticClass: "button",
                attrs: { disabled: !_vm.isPaginated },
                on: {
                  click: function($event) {
                    _vm.currentPage = 2
                  }
                }
              },
              [_vm._v("Set page to 2")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "control is-flex" },
            [
              _c(
                "b-switch",
                {
                  model: {
                    value: _vm.isPaginated,
                    callback: function($$v) {
                      _vm.isPaginated = $$v
                    },
                    expression: "isPaginated"
                  }
                },
                [_vm._v("Paginated")]
              )
            ],
            1
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
          ),
          _vm._v(" "),
          _c(
            "b-select",
            {
              attrs: { disabled: !_vm.isPaginated },
              model: {
                value: _vm.paginationPosition,
                callback: function($$v) {
                  _vm.paginationPosition = $$v
                },
                expression: "paginationPosition"
              }
            },
            [
              _c("option", { attrs: { value: "bottom" } }, [
                _vm._v("bottom pagination")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "top" } }, [
                _vm._v("top pagination")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "both" } }, [_vm._v("both")])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-select",
            {
              model: {
                value: _vm.sortIcon,
                callback: function($$v) {
                  _vm.sortIcon = $$v
                },
                expression: "sortIcon"
              }
            },
            [
              _c("option", { attrs: { value: "arrow-up" } }, [
                _vm._v("Arrow sort icon")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "menu-up" } }, [
                _vm._v("Caret sort icon")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "chevron-up" } }, [
                _vm._v("Chevron sort icon ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-select",
            {
              model: {
                value: _vm.sortIconSize,
                callback: function($$v) {
                  _vm.sortIconSize = $$v
                },
                expression: "sortIconSize"
              }
            },
            [
              _c("option", { attrs: { value: "is-small" } }, [
                _vm._v("Small sort icon")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Regular sort icon")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "is-medium" } }, [
                _vm._v("Medium sort icon")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "is-large" } }, [
                _vm._v("Large sort icon")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          data: _vm.users,
          paginated: _vm.isPaginated,
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          "pagination-simple": _vm.isPaginationSimple,
          "pagination-position": _vm.paginationPosition,
          "default-sort-direction": _vm.defaultSortDirection,
          "sort-icon": _vm.sortIcon,
          "sort-icon-size": _vm.sortIconSize,
          striped: "",
          hoverable: "",
          "default-sort": "apellido",
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
                    attrs: {
                      field: "name",
                      label: "First Name",
                      searchable: "",
                      sortable: ""
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(props.row.name) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: {
                      field: "apellido",
                      label: "Last Name",
                      searchable: "",
                      sortable: ""
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(props.row.apellido) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: {
                      field: "nombre_cargo_especifico",
                      label: "Cargo",
                      searchable: "",
                      sortable: ""
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(props.row.nombre_cargo_especifico) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: {
                      field: "role",
                      label: "Role",
                      sortable: "",
                      centered: ""
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "tag",
                        class: props.row.roles.length ? "is-success" : "is-info"
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              props.row.roles.length
                                ? props.row.roles[0].name
                                : "No tiene rol"
                            ) +
                            "\n                        "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("b-table-column", { attrs: { label: "Gender" } }, [
                  _c(
                    "span",
                    [
                      _c("b-icon", {
                        attrs: {
                          pack: "fas",
                          icon: props.row.gender === "Male" ? "mars" : "venus"
                        }
                      }),
                      _vm._v(
                        "\n                        " +
                          _vm._s(props.row.gender) +
                          "\n                    "
                      )
                    ],
                    1
                  )
                ])
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminPermissions.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/AdminPermissions.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPermissions.vue?vue&type=template&id=3a93b3c0& */ "./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0&");
/* harmony import */ var _AdminPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPermissions.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminPermissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPermissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPermissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPermissions.vue?vue&type=template&id=3a93b3c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPermissions.vue?vue&type=template&id=3a93b3c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPermissions_vue_vue_type_template_id_3a93b3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);