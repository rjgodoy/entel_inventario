(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Documents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Documents.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      isActive: false,
      sitesFolders: this.pop.sites,
      folders: null,
      folders2: null,
      files: null,
      selectedPrimaryBoxText: 'has-text-white',
      selectedSecondaryBoxText: 'has-text-light'
    };
  },
  mounted: function mounted() {// this.getFolders()
    // this.getDocuments()
  },
  // watch: {
  //     currentTab(newValue, oldValue) {
  //         // folders: []
  //         // files: []
  //         // this.getDocuments()
  //     }
  // },
  methods: {
    getDirectories: function getDirectories(site_id) {
      var _this = this;

      axios.get("/api/directories/".concat(site_id)).then(function (response) {
        console.log(response);
        _this.folders = response.data.data;
      });
    },
    getFolders: function getFolders(site_id, path) {
      var _this2 = this;

      axios.get("/api/folders/".concat(site_id, "/").concat(path)).then(function (response) {
        console.log(response.data);
        _this2.folders2 = response.data.data;
        _this2.files = response.data.files;
      });
    },
    getFiles: function getFiles(site_id, path, path2) {
      var _this3 = this;

      axios.get("/api/files/".concat(site_id, "/").concat(path, "/").concat(path2)).then(function (response) {
        console.log(response.data);
        _this3.files = response.data.data;
      });
    },
    faFile: function faFile(ext) {
      var fa = ext == 'pdf' ? 'file-pdf' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file';
      return fa;
    },
    readFile: function readFile(file) {
      var routeData = this.$router.resolve({
        name: '/storage/app/' + file.dirname,
        query: {
          data: file.basename
        }
      });
      console.log(routeData);
      window.open(routeData.href, '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4& ***!
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
  return _c("div", [
    _c("section", { staticClass: "section has-background-white" }, [
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column is-2" },
          [
            _c(
              "b-menu",
              [
                _c(
                  "b-menu-list",
                  { attrs: { label: "Sitios" } },
                  _vm._l(_vm.sitesFolders, function(site) {
                    return _c(
                      "b-menu-item",
                      {
                        key: site.id,
                        attrs: {
                          icon: "settings",
                          active: _vm.isActive,
                          expanded: _vm.isActive
                        },
                        on: {
                          click: function($event) {
                            return _vm.getDirectories(site.id)
                          }
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function(props) {
                                return [
                                  _c("b-icon", {
                                    staticClass: "fa-2x has-text-smart",
                                    attrs: { pack: "fas", icon: "folder-open" }
                                  }),
                                  _vm._v(" "),
                                  _c("span", {}, [
                                    _vm._v(_vm._s(site.nem_site))
                                  ])
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
                        _vm._l(_vm.folders, function(folder) {
                          return _c(
                            "b-menu-item",
                            {
                              key: folder.id,
                              attrs: { icon: "account" },
                              on: {
                                click: function($event) {
                                  return _vm.getFolders(
                                    site.id,
                                    folder.basename
                                  )
                                }
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "label",
                                    fn: function(props) {
                                      return [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(folder.basename) +
                                            "\n                                    "
                                        ),
                                        _c("b-icon", {
                                          staticClass: "is-pulled-right",
                                          attrs: {
                                            icon: props.expanded
                                              ? "folder-open"
                                              : "folder",
                                            type: "fas"
                                          }
                                        })
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
                              _vm._l(_vm.folders2, function(folder2) {
                                return _c("b-menu-item", {
                                  key: folder2.id,
                                  attrs: {
                                    icon: "account",
                                    label: folder2.basename
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.getFiles(
                                        site.id,
                                        folder.basename,
                                        folder2.basename
                                      )
                                    }
                                  }
                                })
                              })
                            ],
                            2
                          )
                        })
                      ],
                      2
                    )
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-menu-list",
                  { attrs: { label: "Actions" } },
                  [_c("b-menu-item", { attrs: { label: "Subir archivo" } })],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "columns is-multiline" },
            _vm._l(_vm.files, function(file) {
              return _c("div", { staticClass: "column is-2" }, [
                _c(
                  "a",
                  {
                    staticClass: "box",
                    attrs: { target: "_blank" },
                    on: {
                      click: function($event) {
                        return _vm.readFile(file)
                      }
                    }
                  },
                  [
                    _c("b-icon", {
                      attrs: {
                        pack: "fad",
                        icon: _vm.faFile(file.extension),
                        size: "is-medium"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "is-size-7" }, [
                      _vm._v(_vm._s(file.basename))
                    ])
                  ],
                  1
                )
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/Documents.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pops/Documents.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=72c5d2d4& */ "./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Documents.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pops/Documents.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=72c5d2d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Documents.vue?vue&type=template&id=72c5d2d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_72c5d2d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);