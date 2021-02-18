(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Admin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Admin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminPops: function AdminPops() {
      return Promise.all(/*! import() | chunks/admin/pops */[__webpack_require__.e("vendors~chunks/admin/pops~chunks/dashboard~chunks/eco/modals/newStorage~chunks/eco/modals/upload"), __webpack_require__.e("chunks/admin/pops")]).then(__webpack_require__.bind(null, /*! ./AdminPops */ "./resources/js/components/admin/AdminPops.vue"));
    },
    AdminTps: function AdminTps() {
      return __webpack_require__.e(/*! import() | chunks/admin/tps */ "chunks/admin/tps").then(__webpack_require__.bind(null, /*! ./AdminTps */ "./resources/js/components/admin/AdminTps.vue"));
    },
    // AdminApprove: () => import(/* webpackChunkName: "chunks/admin/approve"*/"./AdminApprove"),
    AdminMassive: function AdminMassive() {
      return __webpack_require__.e(/*! import() | chunks/admin/massive */ "chunks/admin/massive").then(__webpack_require__.bind(null, /*! ./AdminMassive */ "./resources/js/components/admin/AdminMassive.vue"));
    },
    AdminUsers: function AdminUsers() {
      return __webpack_require__.e(/*! import() | chunks/admin/usersPermissions */ "chunks/admin/usersPermissions").then(__webpack_require__.bind(null, /*! ./AdminUsers */ "./resources/js/components/admin/AdminUsers.vue"));
    },
    AdminFiles: function AdminFiles() {
      return Promise.all(/*! import() | chunks/admin/files */[__webpack_require__.e("vendors~chunks/admin/files~chunks/capacityPlanning~chunks/dashboard/modalDownload~chunks/documents~c~d94cc1ca"), __webpack_require__.e("chunks/admin/files")]).then(__webpack_require__.bind(null, /*! ./AdminFiles */ "./resources/js/components/admin/AdminFiles.vue"));
    }
  },
  props: ['user'],
  created: function created() {// this.styleMode()
  },
  mounted: function mounted() {
    this.getTabs();
  },
  data: function data() {
    return {
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: '',
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light',
      tabs: null,
      canCreatePop: false,
      canUpdateEfizity: false,
      canEditPermissions: false,
      canUploadFiles: false,
      currentTab: this.$route.hash != '' ? this.$route.hash.split('#')[1] : 'pops'
    };
  },
  computed: {
    hasPermissions: function hasPermissions() {
      var bool = false;

      switch (this.currentTab) {
        case 'pops':
          bool = this.canCreatePop;
          break;

        case 'tps':
          bool = true;
          break;

        case 'massive':
          bool = this.canUpdateEfizity;
          break;

        case 'users':
          bool = this.canEditPermissions;
          break;

        case 'files':
          bool = this.canUploadFiles;
          break;

        default:
          bool = false;
      }

      return bool;
    },
    currentTabComponent: function currentTabComponent() {
      return 'admin-' + this.currentTab;
    }
  },
  methods: {
    canClick: function canClick(tab) {
      var bool = false;

      switch (tab) {
        case 'pops':
          bool = this.canCreatePop;
          break;

        case 'tps':
          bool = true;
          break;

        case 'massive':
          bool = this.canUpdateEfizity;
          break;

        case 'users':
          bool = this.canEditPermissions;
          break;

        case 'files':
          bool = this.canUploadFiles;
          break;

        default:
          bool = false;
      }

      return bool;
    },
    // Style mode
    // styleMode(){
    //     if (this.darkMode == 1) {
    //         // dark mode
    //         this.bodyBackground = 'has-background-black-ter'
    //         this.boxBackground = 'has-background-dark'
    //         this.primaryText = 'has-text-white'
    //         this.secondaryText = 'has-text-grey-light'
    //         this.searchBodyBackground = 'has-background-dark'
    //     } else {
    //         // light mode
    //         this.bodyBackground = 'has-background-light'
    //         this.boxBackground = 'has-background-white'
    //         this.primaryText = 'has-text-dark'
    //         this.secondaryText = 'has-text-grey'
    //         this.searchBodyBackground = 'has-background-white'
    //     }
    // },
    getTabs: function getTabs() {
      var _this = this;

      axios.get("/api/tabs").then(function (response) {
        console.log(response);

        if (response.data.can.viewAdmin) {
          _this.tabs = response.data.admin;
        }

        _this.canCreatePop = response.data.can.createPop;
        _this.canUpdateEfizity = response.data.can.updateEfizity;
        _this.canEditPermissions = response.data.can.editPermissions;
        _this.canUploadFiles = response.data.can.uploadFiles;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c(
        "section",
        { staticStyle: { "padding-top": "24px", "padding-bottom": "12px" } },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "tile is-ancestor" },
              _vm._l(_vm.tabs, function(tab) {
                return _c(
                  "div",
                  { key: tab.id, staticClass: "tile is-parent" },
                  [
                    _vm.canClick(tab.component)
                      ? _c(
                          "a",
                          {
                            key: tab.component,
                            staticClass: "tile is-child box",
                            class:
                              _vm.currentTab === tab.component
                                ? "has-background-link"
                                : _vm.boxBackground,
                            on: {
                              click: function($event) {
                                _vm.currentTab = tab.component
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                class:
                                  _vm.currentTab === tab.component
                                    ? _vm.selectedSecondaryBoxText
                                    : _vm.secondaryText
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "is-size-6 has-text-weight-semibold"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tab.title) +
                                        "\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticStyle: { "padding-top": "10px" } },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-light"
                                      },
                                      [_vm._v(_vm._s(tab.description))]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.canClick(tab.component)
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "tile is-child box has-background-light"
                          },
                          [
                            _c("div", { staticClass: "has-text-grey-light" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "is-size-6 has-text-weight-semibold"
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(tab.title) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { "padding-top": "10px" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "is-size-7 has-text-weight-light"
                                    },
                                    [_vm._v(_vm._s(tab.description))]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ]
                )
              }),
              0
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "keep-alive",
        [
          _vm.hasPermissions
            ? _c(_vm.currentTabComponent, {
                tag: "admin-content",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Admin.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/admin/Admin.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=6ef557f4& */ "./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Admin.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/Admin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=6ef557f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Admin.vue?vue&type=template&id=6ef557f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_6ef557f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);