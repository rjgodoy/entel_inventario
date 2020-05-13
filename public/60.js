(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
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
  props: ['popProtectedZones', 'user'],
  data: function data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10,
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {// this.getpopProtectedZones()
    // this.getFiles()
  },
  methods: {// async getFiles() {
    //     axios.get(`/api/eco/1`).then((response) => {
    //         // console.log(response)
    //     })
    // }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tile is-child box" },
    [
      _c("div", { staticClass: "title is-size-4" }, [
        _vm._v("POP en zonas protegidas")
      ]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          data: _vm.popProtectedZones,
          paginated: _vm.isPaginated,
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          "pagination-simple": _vm.isPaginationSimple,
          "pagination-position": _vm.paginationPosition,
          "default-sort-direction": _vm.defaultSortDirection,
          "sort-icon": _vm.sortIcon,
          "sort-icon-size": _vm.sortIconSize,
          "pagination-size": "is-small",
          "default-sort": "user.first_name",
          "aria-next-label": "Next page",
          "aria-previous-label": "Previous page",
          "aria-page-label": "Page",
          "aria-current-label": "Current page"
        },
        on: {
          "update:currentPage": function($event) {
            _vm.currentPage = $event
          },
          "update:current-page": function($event) {
            _vm.currentPage = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "b-table-column",
                  {
                    staticClass: "is-size-6",
                    attrs: {
                      width: "70%",
                      field: "nombre",
                      label: "PoP",
                      sortable: "",
                      searchable: ""
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "header",
                          fn: function(ref) {
                            var column = ref.column
                            return [
                              _c(
                                "b-tooltip",
                                {
                                  staticClass: "is-size-6",
                                  attrs: { label: column.label }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(column.label) +
                                      "\n                    "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "is-size-7",
                        attrs: { to: "/pop/" + props.row.id, target: "_blank" }
                      },
                      [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.nombre))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "is-size-7" }, [
                      _vm._v(_vm._s(props.row.comuna.nombre_comuna))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    staticClass: "is-size-6",
                    attrs: {
                      field: "comuna.zona.nombre_zona",
                      label: "Zona",
                      sortable: "",
                      searchable: ""
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "header",
                          fn: function(ref) {
                            var column = ref.column
                            return [
                              _c(
                                "b-tooltip",
                                {
                                  staticClass: "is-size-6",
                                  attrs: { label: column.label }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(column.label) +
                                      "\n                    "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "is-size-6 has-text-weight-semibold" },
                      [_vm._v(_vm._s(props.row.protected_zones[0].cod_zone))]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "is-size-7" }, [
                      _vm._v(_vm._s(props.row.comuna.zona.nombre_zona))
                    ])
                  ]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/PopProtectedZones.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/eco/PopProtectedZones.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopProtectedZones.vue?vue&type=template&id=6fe0b191& */ "./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191&");
/* harmony import */ var _PopProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopProtectedZones.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/PopProtectedZones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopProtectedZones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/PopProtectedZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopProtectedZones.vue?vue&type=template&id=6fe0b191& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/PopProtectedZones.vue?vue&type=template&id=6fe0b191&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopProtectedZones_vue_vue_type_template_id_6fe0b191___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);