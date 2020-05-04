(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Location.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PopMap: function PopMap() {
      return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ../maps/PopMapView */ "./resources/js/components/maps/PopMapView.vue"));
    }
  },
  props: ['user', 'pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'darkMode'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {
    popClassification: function popClassification() {
      var id = 6;
      var classification;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.classification_type_id && item.classification_type_id < id) {
            id = item.classification_type_id;
            classification = item.classification_type.classification_type;
          }
        });
      }

      return {
        'classification': classification,
        'id': id
      };
    },
    popAttentionPriority: function popAttentionPriority() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.attention_priority_type_id && item.attention_priority_type_id < i) {
            i = item.attention_priority_type_id;
            cat = item.attention_priority_type.attention_priority_type;
          }
        });
      }

      return cat;
    },
    popCategory: function popCategory() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.category_type_id && item.category_type_id < i) {
            i = item.category_type_id;
            cat = item.category_type.category_type;
          }
        });
      }

      return cat;
    },
    popDependences: function popDependences() {
      var dependences = 0;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          dependences = dependences + item.dependences.length;
        });
      }

      return dependences;
    },
    popAttentionType: function popAttentionType() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.attention_type_id && item.attention_type_id < i) {
            i = item.attention_type_id;
            cat = item.attention_type.attention_type;
          }
        });
      }

      return cat;
    },
    heroBackground: function heroBackground() {
      return this.popClassification.id == 1 ? 'is-info' : this.popClassification.id == 2 ? 'is-warning' : this.popClassification.id == 3 ? 'is-primary' : this.popClassification.id == 4 ? 'is-smart' : this.popClassification.id == 5 ? 'is-eco' : 'is-white';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("section", {}, [
    _c("div", { staticClass: "hero is-bold", class: _vm.heroBackground }, [
      _c(
        "div",
        { staticClass: "hero-body", staticStyle: { "padding-top": "" } },
        [
          _c("nav", { staticClass: "level" }, [
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popAttentionPriority))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("PRIORIDAD ATENCION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popDependences))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("DEPENDENCIAS DIRECTAS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popCategory ? _vm.popCategory : "-"))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("CLASIFICACION PLANIFICACION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popAttentionType))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("TIPO ATENCION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(
                    _vm._s(
                      _vm.pop.theoretical_autonomy
                        ? _vm.pop.theoretical_autonomy
                        : "-"
                    ) + " "
                  ),
                  _c("span", { staticClass: "is-size-6" }, [_vm._v("hrs.")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("AUTONOMIA TEORICA")
                ])
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "map-container" },
        [
          _c("pop-map", {
            attrs: {
              user: _vm.user,
              classification: _vm.popClassification,
              popMaster: _vm.pop,
              darkMode: _vm.darkMode
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-8" }, [
            _c("div", { staticClass: "is-size-5 has-text-weight-semibold" }, [
              _vm._v(_vm._s(_vm.pop.direccion))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "is-size-6 has-text-weight-normal" }, [
              _vm._v(
                "Comuna de " +
                  _vm._s(_vm.pop.comuna ? _vm.pop.comuna.nombre_comuna : "")
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "is-size-7 has-text-weight-normal" }, [
              _vm._v(
                "\n                        Zona " +
                  _vm._s(
                    _vm.pop.comuna ? _vm.pop.comuna.zona.nombre_zona : ""
                  ) +
                  " - CRM " +
                  _vm._s(
                    _vm.pop.comuna ? _vm.pop.comuna.zona.crm.nombre_crm : ""
                  ) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "is-size-5 has-text-weight-semibold" },
                  [
                    _vm._v(
                      _vm._s(_vm.pop.latitude) +
                        "\n                                "
                    ),
                    _c(
                      "p",
                      { staticClass: "is-size-6 has-text-weight-light" },
                      [_vm._v("Latitud")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "is-size-5 has-text-weight-semibold" },
                  [
                    _vm._v(
                      _vm._s(_vm.pop.longitude) +
                        "\n                                "
                    ),
                    _c(
                      "p",
                      { staticClass: "is-size-6 has-text-weight-light" },
                      [_vm._v("Longitud")]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/Location.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pops/Location.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location.vue?vue&type=template&id=9512fc72& */ "./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&");
/* harmony import */ var _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Location.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pops/Location.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=template&id=9512fc72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);