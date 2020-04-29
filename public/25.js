(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminPops: function AdminPops() {
      return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ./AdminPops */ "./resources/js/components/admin/AdminPops.vue"));
    },
    AdminTps: function AdminTps() {
      return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./AdminTps */ "./resources/js/components/admin/AdminTps.vue"));
    },
    AdminApprove: function AdminApprove() {
      return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./AdminApprove */ "./resources/js/components/admin/AdminApprove.vue"));
    },
    AdminMassive: function AdminMassive() {
      return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./AdminMassive */ "./resources/js/components/admin/AdminMassive.vue"));
    },
    AdminPermissions: function AdminPermissions() {
      return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./AdminPermissions */ "./resources/js/components/admin/AdminPermissions.vue"));
    }
  },
  props: ['user'],
  created: function created() {
    this.getTabs();
    this.styleMode();
  },
  mounted: function mounted() {},
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
      currentTab: 'pops'
    };
  },
  methods: {
    // Style mode
    styleMode: function styleMode() {
      if (this.darkMode == 1) {
        // dark mode
        this.bodyBackground = 'has-background-black-ter';
        this.boxBackground = 'has-background-dark';
        this.primaryText = 'has-text-white';
        this.secondaryText = 'has-text-grey-light';
        this.searchBodyBackground = 'has-background-dark';
      } else {
        // light mode
        this.bodyBackground = 'has-background-light';
        this.boxBackground = 'has-background-white';
        this.primaryText = 'has-text-dark';
        this.secondaryText = 'has-text-grey';
        this.searchBodyBackground = 'has-background-white';
      }
    },
    changeStyle: function changeStyle() {
      this.darkMode = this.darkMode == 0 ? 1 : 0;
      this.styleMode();
    },
    getTabs: function getTabs() {
      var _this = this;

      axios.get("/api/tabs?api_token=".concat(this.user.api_token)).then(function (response) {
        _this.tabs = response.data.data;
      });
    }
  },
  computed: {
    currentTabComponent: function currentTabComponent() {
      return 'admin-' + this.currentTab;
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
      _c("section", { staticClass: "section", class: _vm.bodyBackground }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "tile is-ancestor",
              staticStyle: { margin: "-40px 0 -40px 0" }
            },
            _vm._l(_vm.tabs, function(tab) {
              return _c("div", { staticClass: "tile is-parent" }, [
                _c(
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
                          { staticClass: "is-size-6 has-text-weight-semibold" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(tab.title) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { "margin-top": "10px" } }, [
                          _c(
                            "div",
                            { staticClass: "is-size-7 has-text-weight-light" },
                            [_vm._v(_vm._s(tab.description))]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "keep-alive",
        [
          _c(_vm.currentTabComponent, {
            tag: "admin-content",
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