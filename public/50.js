(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Rcas: function Rcas() {
      return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! ./RCAs */ "./resources/js/components/eco/RCAs.vue"));
    },
    TemporalStorages: function TemporalStorages() {
      return __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! ./TemporalStorages */ "./resources/js/components/eco/TemporalStorages.vue"));
    },
    ProtectedZones: function ProtectedZones() {
      return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./ProtectedZones */ "./resources/js/components/eco/ProtectedZones.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "section is-marginless", class: _vm.bodyBackground },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c("div", { staticClass: "tile" }, [
            _c("div", { staticClass: "tile is-vertical" }, [
              _c(
                "div",
                { staticClass: "tile is-parent" },
                [_c("protected-zones", { attrs: { user: _vm.user } })],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tile is-vertical" }, [
              _c(
                "div",
                { staticClass: "tile is-parent" },
                [_c("temporal-storages", { attrs: { user: _vm.user } })],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tile is-parent" },
                [_c("rcas", { attrs: { user: _vm.user } })],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/Eco.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/eco/Eco.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eco.vue?vue&type=template&id=100bd810& */ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony import */ var _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eco.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/Eco.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=template&id=100bd810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Eco.vue?vue&type=template&id=100bd810&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_100bd810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);