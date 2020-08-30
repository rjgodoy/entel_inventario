(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/tps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Table: function Table() {
      return __webpack_require__.e(/*! import() | chunks/admin/adminTpsTable */ "chunks/admin/adminTpsTable").then(__webpack_require__.bind(null, /*! ./AdminTpsTable */ "./resources/js/components/admin/AdminTpsTable.vue"));
    }
  },
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  mounted: function mounted() {
    this.syncData();
  },
  data: function data() {
    return {
      data: [],
      dataHistory: [],
      tab: 0,
      loading: true,
      loadingHistory: true
    };
  },
  watch: {
    tab: function tab(val) {
      this.syncData();
    }
  },
  methods: {
    syncData: function syncData() {
      var _this = this;

      if (+this.tab) {
        axios.get("/api/psgTp?page=".concat(this.currentPage, "&history=1")).then(function (response) {
          console.log(response.data);
          _this.dataHistory = response.data;
          _this.loadingHistory = false;
        });
      } else {
        axios.get("/api/psgTp?page=".concat(this.currentPage, "&history=0")).then(function (response) {
          console.log(response.data);
          _this.data = response.data;
          _this.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      { staticClass: "box", staticStyle: { position: "relative" } },
      [
        _c(
          "b-tabs",
          {
            staticClass: "block",
            attrs: { type: "is-boxed", size: "is-medium" },
            model: {
              value: _vm.tab,
              callback: function($$v) {
                _vm.tab = $$v
              },
              expression: "tab"
            }
          },
          [
            _c("b-tab-item", { attrs: { label: "Programados" } }),
            _vm._v(" "),
            _c("b-tab-item", { attrs: { label: "Ejecutados" } })
          ],
          1
        ),
        _vm._v(" "),
        _vm.tab == 0
          ? _c(
              "div",
              [
                _c("Table", {
                  attrs: {
                    title: "Trabajos programados - Instalaciones de Equipos",
                    data: _vm.data,
                    loading: _vm.loading,
                    tab: _vm.tab
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.tab == 1
          ? _c(
              "div",
              [
                _c("Table", {
                  attrs: {
                    title: "Trabajos ejecutados",
                    data: _vm.dataHistory,
                    loading: _vm.loadingHistory,
                    tab: _vm.tab
                  }
                })
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=template&id=28a28593& */ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony import */ var _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminTps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=template&id=28a28593& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);