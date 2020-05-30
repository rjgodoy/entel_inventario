(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/eco/documents"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Documents.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Documents.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user'],
  data: function data() {
    return {
      dropFiles: [],
      ecoDocs: Array,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getEcoDocs();
  },
  methods: {
    getEcoDocs: function getEcoDocs() {
      var _this = this;

      axios.get("/api/ecoDocs?api_token=".concat(this.user.api_token)).then(function (response) {
        _this.ecoDocs = response.data;
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.dropFiles.forEach(function (element) {
        return _this2.submitForm(element);
      });
    },
    submitForm: function submitForm(file) {
      var _this3 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        var response = axios.post("/api/ecoDocs?api_token=".concat(this.user.api_token), formData, config).then(function (response) {
          _this3.getEcoDocs();
        });
      } catch (e) {
        console.log(e);
      }
    },
    confirm: function confirm(file) {
      var _this4 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          _this4.deleteFile(file.id);
        }
      });
    },
    deleteFile: function deleteFile(file_id) {
      var _this5 = this;

      axios["delete"]("/api/files/".concat(file_id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        console.log(response);

        _this5.getEcoDocs();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f& ***!
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
  return _c(
    "div",
    { staticClass: "tile is-child box" },
    [
      _c("div", { staticClass: "title is-size-4" }, [
        _vm._v("Otros Documentos")
      ]),
      _vm._v(" "),
      _c(
        "b-table",
        {
          attrs: {
            data: _vm.ecoDocs.files,
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
                        width: "60%",
                        field: "basename",
                        label: "Archivo",
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
                      _c("div", { staticClass: "is-size-6" }, [
                        _vm._v(_vm._s(props.row.basename))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        width: "",
                        field: "site.nem_site",
                        label: "PoP",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "searchable",
                            fn: function(props) {
                              return _c("b-input", {
                                model: {
                                  value: props.filters[props.column.field],
                                  callback: function($$v) {
                                    _vm.$set(
                                      props.filters,
                                      props.column.field,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "props.filters[props.column.field]"
                                }
                              })
                            }
                          },
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
                      _vm._v(" "),
                      _c("div", { staticClass: "is-size-7" }, [
                        _vm._v(_vm._s(props.row.site.nem_site))
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "is-size-7",
                          attrs: {
                            to: "/pop/" + props.row.site.pop.id,
                            target: "_blank"
                          }
                        },
                        [
                          _c("div", { staticClass: "is-size-6" }, [
                            _vm._v(_vm._s(props.row.site.pop.nombre))
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.ecoDocs.can.delete
                    ? _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "id",
                            label: "",
                            width: "10",
                            numeric: ""
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button",
                              on: {
                                click: function($event) {
                                  return _vm.confirm(props.row)
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: ["far", "trash-alt"] }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c("template", { slot: "empty" }, [
            _c("section", { staticClass: "section" }, [
              _c(
                "div",
                { staticClass: "content has-text-grey has-text-centered" },
                [
                  _c(
                    "p",
                    [
                      _c("b-icon", {
                        attrs: { icon: "emoticon-sad", size: "is-large" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", [_vm._v("Nothing here.")])
                ]
              )
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/Documents.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/eco/Documents.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=115abc5f& */ "./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/Documents.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/eco/Documents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=115abc5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/Documents.vue?vue&type=template&id=115abc5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_115abc5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);