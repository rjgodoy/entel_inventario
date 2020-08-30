(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/files"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user'],
  data: function data() {
    return {
      files: [],
      file: {},
      dropFiles: [],
      filename: null,
      isEmpty: false
    };
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.getInfoFiles();
  },
  methods: {
    getInfoFiles: function getInfoFiles() {
      var _this = this;

      var params = {
        'folder_id': 28177
      };
      axios.get("/api/getFiles", {
        params: params
      }).then(function (response) {
        console.log(response.data);
        _this.files = response.data.files;
      });
    },
    submit: function submit() {
      // this.dropFiles.forEach(element => this.submitForm(element))
      this.submitForm(this.file);
    },
    submitForm: function submitForm(file) {
      var _this2 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        params: {
          'folder_id': 28177,
          'user_id': this.user.id,
          'filename': this.filename
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        axios.post("/api/files", formData, config).then(function (response) {
          console.log(response.data);

          _this2.$eventBus.$emit('reload-files');

          _this2.getInfoFiles();

          _this2.filename = '';
        });
      } catch (e) {
        console.log(e);
      }
    },
    deleteDropFile: function deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    confirmDeleteFile: function confirmDeleteFile(file) {
      var _this3 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/files/".concat(file.id)).then(function (response) {
            console.log(response);

            _this3.getInfoFiles();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "section container" }, [
    _c("section", { staticClass: "box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "columns", staticStyle: { "margin-top": "20px" } },
        [
          _c("div", { staticClass: "column" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column" },
            [
              _c(
                "b-field",
                { attrs: { label: "Nombre archivo" } },
                [
                  _c("b-input", {
                    attrs: { width: "50", required: "" },
                    model: {
                      value: _vm.filename,
                      callback: function($$v) {
                        _vm.filename = $$v
                      },
                      expression: "filename"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-upload",
                {
                  model: {
                    value: _vm.file,
                    callback: function($$v) {
                      _vm.file = $$v
                    },
                    expression: "file"
                  }
                },
                [
                  _c(
                    "a",
                    { staticClass: "button is-primary is-fullwidth" },
                    [
                      _c("b-icon", { attrs: { icon: "upload", pack: "fas" } }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.file.name || "Click para subir"))
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "is-link",
                  attrs: { disabled: !_vm.filename || !_vm.file.name },
                  on: { click: _vm.submit }
                },
                [_vm._v("Subir")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column" })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section" },
        [
          _c(
            "b-table",
            {
              attrs: {
                data: _vm.isEmpty ? [] : _vm.files,
                bordered: false,
                striped: false,
                narrowed: false,
                hoverable: false,
                loading: false,
                focusable: false,
                "mobile-cards": false
              }
            },
            [
              _c("b-table-column", {
                attrs: { field: "filename", label: "First Name" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "is-size-6",
                            attrs: { "append-to-body": "" }
                          },
                          [_vm._v(_vm._s(column.label))]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.filename))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: { field: "basename", label: "Last Name" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "is-size-6",
                            attrs: { "append-to-body": "" }
                          },
                          [_vm._v(_vm._s(column.label))]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.basename))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-table-column", {
                attrs: { label: "Eliminar" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(ref) {
                      var column = ref.column
                      return [
                        _c(
                          "div",
                          {
                            staticClass: "is-size-6",
                            attrs: { "append-to-body": "" }
                          },
                          [_vm._v(_vm._s(column.label))]
                        )
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "b-button",
                          {
                            staticClass: "has-text-danger",
                            on: {
                              click: function($event) {
                                return _vm.confirmDeleteFile(props.row)
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
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "has-text-centered" }, [
      _c("p", { staticClass: "is-size-4 has-text-weight-bold" }, [
        _vm._v("Subir Archivo de Información")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminFiles.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/AdminFiles.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminFiles.vue?vue&type=template&id=fb1464da& */ "./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da&");
/* harmony import */ var _AdminFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminFiles.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminFiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminFiles.vue?vue&type=template&id=fb1464da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminFiles.vue?vue&type=template&id=fb1464da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminFiles_vue_vue_type_template_id_fb1464da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);