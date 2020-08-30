(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/newSolarPanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pop', 'user'],
  data: function data() {
    return {
      unit_capacity: null,
      quantity: null
    };
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-card", staticStyle: { width: "800px" } },
    [
      _c("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "modal-card-body" }, [
          _c("div", { staticClass: "columns is-multiline" }, [
            _c(
              "div",
              { staticClass: "column is-6" },
              [
                _c(
                  "b-field",
                  { attrs: { label: "Capacidad unitaria paneles FV" } },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "unit_capacity_group",
                        placeholder: "Capacidad unitaria paneles FV",
                        required: ""
                      },
                      model: {
                        value: _vm.unit_capacity_group,
                        callback: function($$v) {
                          _vm.unit_capacity_group = $$v
                        },
                        expression: "unit_capacity_group"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-6" },
              [
                _c(
                  "b-field",
                  { attrs: { label: "Cantidad paneles FV" } },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "quantity_group",
                        placeholder: "Cantidad paneles FV",
                        required: ""
                      },
                      model: {
                        value: _vm.quantity_group,
                        callback: function($$v) {
                          _vm.quantity_group = $$v
                        },
                        expression: "quantity_group"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("footer", { staticClass: "modal-card-foot" }, [
          _c(
            "button",
            {
              staticClass: "button",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.$parent.close()
                }
              }
            },
            [_vm._v("Close")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "button is-link" }, [_vm._v("Registrar")])
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
    return _c("header", { staticClass: "modal-card-head" }, [
      _c("p", { staticClass: "modal-card-title" }, [
        _vm._v("Registrar Paneles Solares")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNewSolarPanel.vue?vue&type=template&id=056cce63& */ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63&");
/* harmony import */ var _ModalNewSolarPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNewSolarPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalNewSolarPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewSolarPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewSolarPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewSolarPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewSolarPanel.vue?vue&type=template&id=056cce63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewSolarPanel.vue?vue&type=template&id=056cce63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewSolarPanel_vue_vue_type_template_id_056cce63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);