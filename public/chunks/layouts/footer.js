(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/layouts/footer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ModalInfo: function ModalInfo() {
      return __webpack_require__.e(/*! import() | chunks/layouts/modals/info */ "chunks/layouts/modals/info").then(__webpack_require__.bind(null, /*! ./modals/Info */ "./resources/js/components/layouts/modals/Info.vue"));
    }
  },
  props: ['user' // isHoverable: {
  //     type: Boolean,
  //     default: false
  // }
  ],
  data: function data() {
    return {
      isModalInfoActive: false
    };
  },
  computed: {},
  created: function created() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "hero is-black-ter" }, [
        _c("div", { staticClass: "hero-body" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "columns" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "column is-3" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "block" }, [
                  _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
                    _vm._v("Documentos de ayuda")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "has-text-weight-normal is-size-6",
                      staticStyle: { "padding-top": "8px" },
                      on: {
                        click: function($event) {
                          _vm.isModalInfoActive = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Ver documentos \n                            "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "block" }, [
                  _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
                    _vm._v("Contacto")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "field",
                      staticStyle: { "padding-top": "8px" }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "has-text-weight-normal is-size-6",
                          attrs: {
                            href: "mailto:proyectosinfraestructura@entel.cl"
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fas", "envelope"] }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(" proyectosinfraestructura@entel.cl")
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isModalInfoActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isModalInfoActive = $event
            }
          }
        },
        [_c("ModalInfo", { attrs: { user: _vm.user } })],
        1
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "has-background-dark is-marginless" }),
      _vm._v(" "),
      _vm._m(3)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("div", { staticClass: "block" }, [
        _c("img", {
          staticClass: "img-container",
          staticStyle: { width: "100px" },
          attrs: {
            alt: "image",
            src: "/img/iconografia/entel-logo-negativo.png"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "block" }, [
        _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
          _vm._v("Inventario Infraestructura")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block" }, [
      _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
        _vm._v("Fuentes de Información")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "has-text-weight-normal is-size-6",
          staticStyle: { "padding-top": "8px" }
        },
        [_vm._v("Ver fuentes de información ->")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("div", { staticClass: "block" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      {
        staticClass: "has-background-black-bis",
        staticStyle: { "padding-top": "0.5rem", "padding-bottom": "0rem" }
      },
      [
        _c("div", { staticClass: "has-text-centered" }, [
          _c(
            "a",
            { attrs: { href: "http://www.anidalatam.com", target: "blank" } },
            [
              _c("img", {
                staticClass: "img-container",
                staticStyle: { width: "100px" },
                attrs: { alt: "image", src: "/img/logos/logo_anida.png" }
              })
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=a242bae8& */ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=a242bae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);