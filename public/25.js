(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'pop-data-add': _AdminPopDataAdd_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'pop-data-edit': _AdminPopDataEdit_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'pop-data-sync': _AdminPopDataSync_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
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



/***/ })

}]);