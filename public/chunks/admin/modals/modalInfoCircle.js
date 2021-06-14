(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/modals/modalInfoCircle"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: [],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
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
          [_vm._v("Cerrar")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "modal-card-head has-text-centered" }, [
      _c("p", { staticClass: "modal-card-title has-text-weight-bold" }, [
        _vm._v("Carga Información Efizity")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "modal-card-body" }, [
      _c("div", { staticClass: "is-size-5" }, [
        _vm._v("Paso 1: Entrar con credenciales a "),
        _c(
          "a",
          { attrs: { href: "http://entel.efizity.com", target: "_black" } },
          [_vm._v("entel.efizity.com")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-centered" }, [
        _c("img", { attrs: { width: "500", src: "/img/infoAdmin/info_1.png" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "is-size-5" }, [
        _vm._v(
          'Paso 2: Entrar en "Consumos", seleccionar el período de tiempo y xportar en planilla excel (Exportar a XLS).'
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-centered" }, [
        _c("img", { attrs: { width: "700", src: "/img/infoAdmin/info_2.png" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "is-size-5" }, [
        _vm._v("Paso 3: Arrastrar la planilla descargada al box de carga.")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-centered" }, [
        _c("img", { attrs: { width: "400", src: "/img/infoAdmin/info_3.png" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-centered" }, [
        _c("img", { attrs: { width: "400", src: "/img/infoAdmin/info_4.png" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/modals/ModalInfoBox.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/modals/ModalInfoBox.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalInfoBox.vue?vue&type=template&id=8364b004& */ "./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004&");
/* harmony import */ var _ModalInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalInfoBox.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/modals/ModalInfoBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalInfoBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalInfoBox.vue?vue&type=template&id=8364b004& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/modals/ModalInfoBox.vue?vue&type=template&id=8364b004&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalInfoBox_vue_vue_type_template_id_8364b004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);