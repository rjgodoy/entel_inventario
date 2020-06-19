(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/eco/protectedZones"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['protectedZones', 'user'],
  data: function data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 15,
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {// this.getProtectedZones()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc& ***!
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
    { staticClass: "box" },
    [
      _c("div", { staticClass: "title is-size-4" }, [
        _vm._v("Zonas protegidas")
      ]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          data: _vm.protectedZones,
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
                      width: "30%",
                      field: "cod_zone",
                      label: "Cod Zona",
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
                    _c("p", { staticClass: "is-size-7" }, [
                      _vm._v(_vm._s(props.row.cod_zone))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    staticClass: "is-size-6",
                    attrs: {
                      field: "name",
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
                      [_vm._v(_vm._s(props.row.name))]
                    )
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

/***/ "./resources/js/components/eco/ProtectedZones.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/eco/ProtectedZones.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtectedZones.vue?vue&type=template&id=09bb80bc& */ "./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc&");
/* harmony import */ var _ProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProtectedZones.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/ProtectedZones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProtectedZones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/ProtectedZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProtectedZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProtectedZones.vue?vue&type=template&id=09bb80bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/ProtectedZones.vue?vue&type=template&id=09bb80bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProtectedZones_vue_vue_type_template_id_09bb80bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);