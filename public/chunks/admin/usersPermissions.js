(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/usersPermissions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminUsers: function AdminUsers() {
      return __webpack_require__.e(/*! import() | chunks/admin/adminUsers */ "chunks/admin/adminUsers").then(__webpack_require__.bind(null, /*! ./AdminUsers */ "./resources/js/components/admin/AdminUsers.vue"));
    },
    AdminUserRequests: function AdminUserRequests() {
      return __webpack_require__.e(/*! import() | chunks/adminUserRequests */ "chunks/adminUserRequests").then(__webpack_require__.bind(null, /*! ./AdminUserRequests */ "./resources/js/components/admin/AdminUserRequests.vue"));
    },
    AdminRoles: function AdminRoles() {
      return __webpack_require__.e(/*! import() | chunks/admin/adminRoles */ "chunks/admin/adminRoles").then(__webpack_require__.bind(null, /*! ./AdminRoles */ "./resources/js/components/admin/AdminRoles.vue"));
    }
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
      currentTab: 'AdminUsers'
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24& ***!
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
                      _vm.currentTab === "AdminUsers"
                        ? "has-background-link"
                        : _vm.boxBackground,
                    on: {
                      click: function($event) {
                        _vm.currentTab = "AdminUsers"
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class:
                          _vm.currentTab === "AdminUsers"
                            ? _vm.selectedSecondaryBoxText
                            : _vm.secondaryText
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                Roles de usuario\n                            "
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
                              "\n                                Solicitudes de registro\n                            "
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
                              "\n                                Roles y permisos\n                            "
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

/***/ "./resources/js/components/admin/RoleUsersTab.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/RoleUsersTab.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleUsersTab.vue?vue&type=template&id=b0104c24& */ "./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24&");
/* harmony import */ var _RoleUsersTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleUsersTab.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleUsersTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/RoleUsersTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleUsersTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleUsersTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/RoleUsersTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleUsersTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleUsersTab.vue?vue&type=template&id=b0104c24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/RoleUsersTab.vue?vue&type=template&id=b0104c24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleUsersTab_vue_vue_type_template_id_b0104c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);