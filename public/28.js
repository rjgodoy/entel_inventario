(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    this.getUsers();
    this.getRoles();
  },
  data: function data() {
    return {
      selectedRole: 0,
      roles: [],
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
    getUsers: function getUsers() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'role_id': this.selectedRole
      };
      axios.get('/api/users', {
        params: params
      }).then(function (response) {
        console.log(response.data);
        _this.users = response.data.users;
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      axios.get("/api/roles?api_token=".concat(this.user.api_token)).then(function (response) {
        _this2.roles = response.data.data;
      });
    },
    updateUserRole: function updateUserRole(user_id, role_id) {
      console.log(role_id); // var params = {
      //     'role_id': role_id
      // }
      // axios.put(`/api/users/${user_id}`, { params: params })
      // .then(response => {
      //     this.roles = response.data.data
      // })
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
          _c(
            "b-select",
            {
              on: {
                input: function($event) {
                  return _vm.getUsers()
                }
              },
              model: {
                value: _vm.selectedRole,
                callback: function($$v) {
                  _vm.selectedRole = $$v
                },
                expression: "selectedRole"
              }
            },
            [
              _c("option", { domProps: { value: 0 } }, [_vm._v("Todos")]),
              _vm._v(" "),
              _vm._l(_vm.roles, function(role) {
                return _c(
                  "option",
                  { key: role.id, domProps: { value: role.id } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(role.name) +
                        "\n                "
                    )
                  ]
                )
              })
            ],
            2
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
                      field: "id",
                      label: "ID",
                      width: "40",
                      searchable: "",
                      sortable: "",
                      numeric: ""
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
                                { attrs: { label: column.label } },
                                [
                                  _c("div", { staticClass: "is-size-6" }, [
                                    _vm._v(_vm._s(column.label))
                                  ])
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
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v(_vm._s(props.row.id))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: {
                      field: "name",
                      label: "First Name",
                      searchable: "",
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
                                { attrs: { label: column.label } },
                                [
                                  _c("div", { staticClass: "is-size-6" }, [
                                    _vm._v(_vm._s(column.label))
                                  ])
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
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v(_vm._s(props.row.name))
                    ])
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
                                { attrs: { label: column.label } },
                                [
                                  _c("div", { staticClass: "is-size-6" }, [
                                    _vm._v(_vm._s(column.label))
                                  ])
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
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v(_vm._s(props.row.apellido))
                    ])
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
                                { attrs: { label: column.label } },
                                [
                                  _c("div", { staticClass: "is-size-6" }, [
                                    _vm._v(_vm._s(column.label))
                                  ])
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
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v(_vm._s(props.row.nombre_cargo_especifico))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: { field: "role", label: "Role", centered: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "header",
                          fn: function(ref) {
                            var column = ref.column
                            return [
                              _c(
                                "b-tooltip",
                                { attrs: { label: column.label } },
                                [
                                  _c("div", { staticClass: "is-size-6" }, [
                                    _vm._v(_vm._s(column.label))
                                  ])
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
                    _c(
                      "b-select",
                      {
                        attrs: {
                          placeholder: props.row.roles.length
                            ? props.row.roles[0].name
                            : "Sin rol asignado"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.updateUserRole(props.row.id)
                          }
                        }
                      },
                      _vm._l(_vm.roles, function(role) {
                        return _c(
                          "option",
                          { key: role.id, domProps: { value: role.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(role.name) +
                                "\n                        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
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