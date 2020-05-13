(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Mantenciones: function Mantenciones() {
      return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./Mantenciones */ "./resources/js/components/documents/Mantenciones.vue"));
    },
    Procedimientos: function Procedimientos() {
      return __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! ./Procedimientos */ "./resources/js/components/documents/Procedimientos.vue"));
    },
    Manuales: function Manuales() {
      return __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ./Manuales */ "./resources/js/components/documents/Manuales.vue"));
    },
    Fotos: function Fotos() {
      return __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! ./Fotos */ "./resources/js/components/documents/Fotos.vue"));
    },
    Construccion: function Construccion() {
      return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./Construccion */ "./resources/js/components/documents/Construccion.vue"));
    },
    ObrasCiviles: function ObrasCiviles() {
      return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! ./ObrasCiviles */ "./resources/js/components/documents/ObrasCiviles.vue"));
    },
    Cam: function Cam() {
      return __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! ./Cam */ "./resources/js/components/documents/Cam.vue"));
    },
    GestionAmbiental: function GestionAmbiental() {
      return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./GestionAmbiental */ "./resources/js/components/documents/GestionAmbiental.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      tabs: [{
        "title": "Mantenciones",
        "component": "mantenciones",
        "icon": "file",
        "icon_type": "fas"
      }, {
        "title": "Procedimientos",
        "component": "procedimientos",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "Manuales",
        "component": "manuales",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "Fotos",
        "component": "fotos",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "Construcción",
        "component": "construccion",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "Obras Civiles",
        "component": "obras-civiles",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "CAM",
        "component": "cam",
        "icon": "file-invoice",
        "icon_type": "fas"
      }, {
        "title": "Gestión Ambiental",
        "component": "gestion-ambiental",
        "icon": "file-invoice",
        "icon_type": "fas"
      }],
      currentTab: 'fotos'
    };
  },
  computed: {
    currentTabComponent: function currentTabComponent() {
      return this.currentTab;
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c("section", { staticClass: "section" }, [
        _c("div", {}, [
          _c(
            "div",
            {
              staticClass: "tile is-ancestor",
              staticStyle: { margin: "-40px 0 -40px 0" }
            },
            _vm._l(_vm.tabs, function(tab) {
              return _c("div", { key: tab.id, staticClass: "tile is-parent" }, [
                _c(
                  "a",
                  {
                    key: tab.component,
                    staticClass: "tile is-child box",
                    class:
                      _vm.currentTab === tab.component ? "is-link is-bold" : "",
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
                        staticClass:
                          "is-size-6 has-text-weight-semibold has-text-centered"
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(tab.title) +
                            "\n                        "
                        )
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
            attrs: { user: _vm.user }
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

/***/ "./resources/js/components/documents/Documents.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=0aba2186& */ "./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/documents/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=0aba2186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);