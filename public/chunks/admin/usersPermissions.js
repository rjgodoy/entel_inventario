(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/usersPermissions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalPermissions: function ModalPermissions() {
      return __webpack_require__.e(/*! import() | chunks/admin/modals/modalInfoCircle */ "chunks/admin/modals/modalInfoCircle").then(__webpack_require__.bind(null, /*! ./modals/ModalPermissions */ "./resources/js/components/admin/modals/ModalPermissions.vue"));
    }
  },
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
      selectedUser: null,
      userRole: null,
      roleId: null,
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light',
      isModalPermissionsActive: false
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      var params = {
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

      axios.get("/api/roles").then(function (response) {
        _this2.roles = response.data.roles;
      });
    },
    updateUserRole: function updateUserRole(user_id, role_id) {
      var params = {
        'role_id': role_id
      };
      axios.put("/api/users/".concat(user_id, "?role_id=").concat(role_id)).then(function (response) {
        console.log(response); // this.roles = response.data.data
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    this.getUserRequests();
  },
  data: function data() {
    return {
      selectedRole: 0,
      requests: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10,
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light'
    };
  },
  methods: {
    getUserRequests: function getUserRequests() {
      var _this = this;

      axios.get("/api/userRequests").then(function (response) {
        console.log(response.data);
        _this.requests = response.data.requests;
      });
    },
    confirm: function confirm(user) {
      var _this2 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea dar acceso al nuevo usuario?',
        onConfirm: function onConfirm() {
          var params = {
            'user': user,
            'admin_id': _this2.user.id
          };
          axios.post('/api/newUserAccepted', params).then(function (response) {
            console.log(response.data);

            _this2.$buefy.toast.open({
              message: response.data.message,
              type: 'is-success'
            });

            _this2.getUserRequests();
          });
        }
      });
    },
    rejected: function rejected(user) {
      var _this3 = this;

      this.$buefy.dialog.confirm({
        title: 'Rechazar solicitud',
        message: 'Está seguro que desea rechazar la solicitud de acceso a inventario?',
        confirmText: 'Rechazar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: function onConfirm() {
          var params = {
            'user': user,
            'admin_id': _this3.user.id
          };
          axios.post('api/newUserRejected', params).then(function (response) {
            console.log(response.data);

            _this3.$buefy.toast.open({
              message: response.data.message,
              type: 'is-warning'
            });

            _this3.getUserRequests();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRoles_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRoles.vue */ "./resources/js/components/admin/AdminRoles.vue");
/* harmony import */ var _AdminUserRequests_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUserRequests.vue */ "./resources/js/components/admin/AdminUserRequests.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AdminRoles: _AdminRoles_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AdminUserRequests: _AdminUserRequests_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  computed: {
    currentTabComponent: function currentTabComponent() {
      return this.currentTab;
    }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light',
      currentTab: 'AdminRoles'
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        "div",
        { staticClass: "box" },
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
          _c(
            "b-table",
            {
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
              }
            },
            [
              _c("b-table-column", {
                attrs: {
                  field: "id",
                  label: "ID",
                  width: "40",
                  searchable: "",
                  sortable: "",
                  numeric: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "b-tooltip",
                          {
                            attrs: { label: column.label, "append-to-body": "" }
                          },
                          [
                            _c("div", { staticClass: "is-size-6" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.id))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: {
                  field: "name",
                  label: "First Name",
                  searchable: "",
                  sortable: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "b-tooltip",
                          {
                            attrs: { label: column.label, "append-to-body": "" }
                          },
                          [
                            _c("div", { staticClass: "is-size-6" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.name))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: {
                  field: "apellido",
                  label: "Last Name",
                  searchable: "",
                  sortable: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "b-tooltip",
                          {
                            attrs: { label: column.label, "append-to-body": "" }
                          },
                          [
                            _c("div", { staticClass: "is-size-6" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.apellido))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: {
                  field: "nombre_cargo_especifico",
                  label: "Cargo",
                  searchable: "",
                  sortable: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "b-tooltip",
                          {
                            attrs: { label: column.label, "append-to-body": "" }
                          },
                          [
                            _c("div", { staticClass: "is-size-6" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.nombre_cargo_especifico))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: { field: "role", label: "Role", centered: "" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "b-tooltip",
                          {
                            attrs: { label: column.label, "append-to-body": "" }
                          },
                          [
                            _c("div", { staticClass: "is-size-6" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "b-select",
                          {
                            attrs: {
                              placeholder: props.row.roles.length
                                ? props.row.roles[0].name
                                : "Sin rol asignado"
                            },
                            on: {
                              input: function($event) {
                                return _vm.updateUserRole(
                                  props.row.id,
                                  _vm.roleId
                                )
                              }
                            },
                            model: {
                              value: _vm.roleId,
                              callback: function($$v) {
                                _vm.roleId = $$v
                              },
                              expression: "roleId"
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
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isModalPermissionsActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isModalPermissionsActive = $event
            }
          }
        },
        [
          _c("modal-permissions", {
            attrs: {
              thisUser: _vm.user,
              user: _vm.selectedUser,
              role: _vm.userRole
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743& ***!
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
  return _c("section", { staticClass: "section container" }, [
    _c(
      "div",
      { staticClass: "box" },
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
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-table",
          {
            attrs: {
              data: _vm.requests,
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
            }
          },
          [
            _c("b-table-column", {
              attrs: { field: "id", label: "ID", width: "40", numeric: "" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(ref) {
                    var column = ref.column
                    return [
                      _c(
                        "b-tooltip",
                        {
                          attrs: { label: column.label, "append-to-body": "" }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(column.label))
                          ])
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.id))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-table-column", {
              attrs: { field: "name", label: "Nombre" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(ref) {
                    var column = ref.column
                    return [
                      _c(
                        "b-tooltip",
                        {
                          attrs: { label: column.label, "append-to-body": "" }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(column.label))
                          ])
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.name))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-table-column", {
              attrs: { field: "apellido", label: "Apellido" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(ref) {
                    var column = ref.column
                    return [
                      _c(
                        "b-tooltip",
                        {
                          attrs: { label: column.label, "append-to-body": "" }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(column.label))
                          ])
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.apellido))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-table-column", {
              attrs: { field: "username", label: "Username" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(ref) {
                    var column = ref.column
                    return [
                      _c(
                        "b-tooltip",
                        {
                          attrs: { label: column.label, "append-to-body": "" }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(column.label))
                          ])
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.username))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-table-column", {
              attrs: { field: "email", label: "Email" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(ref) {
                    var column = ref.column
                    return [
                      _c(
                        "b-tooltip",
                        {
                          attrs: { label: column.label, "append-to-body": "" }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(column.label))
                          ])
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.email))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-table-column", [
              _c("p", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-success",
                    on: {
                      click: function($event) {
                        return _vm.confirm(_vm.props.row)
                      }
                    }
                  },
                  [_vm._v("Aceptar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "button is-danger",
                    on: {
                      click: function($event) {
                        return _vm.rejected(_vm.props.row)
                      }
                    }
                  },
                  [_vm._v("Rechazar")]
                )
              ])
            ]),
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
                    _c("p", [_vm._v("No hay solicitudes.")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                      _vm.currentTab === "AdminRoles"
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        _vm.currentTab = "AdminRoles"
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.currentTab === "AdminRoles"
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Roles de Usuario\n                            "
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
                      _vm.currentTab === "AdminUserRequests"
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        _vm.currentTab = "AdminUserRequests"
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.currentTab === "AdminUserRequests"
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Solicitudes de Nuevos Usuarios\n                            "
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
      _c(_vm.currentTabComponent, {
        tag: "component",
        attrs: {
          user: _vm.user,
          bodyBackground: _vm.bodyBackground,
          boxBackground: _vm.boxBackground,
          primaryText: _vm.primaryText,
          secondaryText: _vm.secondaryText
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminRoles.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/AdminRoles.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRoles.vue?vue&type=template&id=361be24e& */ "./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e&");
/* harmony import */ var _AdminRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminRoles.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminRoles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRoles.vue?vue&type=template&id=361be24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRoles.vue?vue&type=template&id=361be24e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRoles_vue_vue_type_template_id_361be24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/AdminUserRequests.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/AdminUserRequests.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminUserRequests.vue?vue&type=template&id=2a723743& */ "./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743&");
/* harmony import */ var _AdminUserRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUserRequests.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminUserRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminUserRequests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUserRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUserRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUserRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUserRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUserRequests.vue?vue&type=template&id=2a723743& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUserRequests.vue?vue&type=template&id=2a723743&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUserRequests_vue_vue_type_template_id_2a723743___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/AdminUsers.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/AdminUsers.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=template&id=35b11eb8& */ "./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8&");
/* harmony import */ var _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=template&id=35b11eb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminUsers.vue?vue&type=template&id=35b11eb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_35b11eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);