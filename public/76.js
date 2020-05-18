(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['pop', 'folderTab', 'folder_id', 'user'],
  data: function data() {
    return {
      dropFiles: []
    };
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      var _this = this;

      console.log(this.folderTab);
      this.dropFiles.forEach(function (element) {
        return _this.submitForm(element);
      });
    },
    submitForm: function submitForm(file) {
      var _this2 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        params: {}
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        var response = axios.post("/api/files?api_token=".concat(this.user.api_token), formData, config).then(function (response) {
          _this2.getFiles();
        });
      } catch (e) {
        console.log(e);
      }

      this.$parent.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-card", staticStyle: { width: "auto" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "modal-card-body" },
        [
          _c(
            "b-field",
            [
              _c(
                "b-upload",
                {
                  attrs: { multiple: "", "drag-drop": "" },
                  on: { input: _vm.submit },
                  model: {
                    value: _vm.dropFiles,
                    callback: function($$v) {
                      _vm.dropFiles = $$v
                    },
                    expression: "dropFiles"
                  }
                },
                [
                  _c("section", { staticClass: "section" }, [
                    _c("div", { staticClass: "content has-text-centered" }, [
                      _c(
                        "p",
                        [
                          _c("b-icon", {
                            attrs: {
                              icon: "upload",
                              pack: "fas",
                              size: "is-large"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Drop your files here or click to upload")
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(
            "\n\n        " +
              _vm._s("pop: " + _vm.pop.id) +
              "\n        " +
              _vm._s("folderTab: " + _vm.folderTab.label) +
              "\n        " +
              _vm._s("folder_id: " + _vm.folder_id) +
              "\n\n    "
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footer", { staticClass: "modal-card-foot" }, [
        _c(
          "button",
          {
            staticClass: "button",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$parent.close()
              }
            }
          },
          [_vm._v("Close")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "modal-card-head has-text-centered" }, [
      _c("p", { staticClass: "modal-card-title has-text-weight-bold" }, [
        _vm._v("Subir Archivo")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/documents/modals/ModalUpload.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pops/documents/modals/ModalUpload.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalUpload.vue?vue&type=template&id=892e6824& */ "./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824&");
/* harmony import */ var _ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/documents/modals/ModalUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalUpload.vue?vue&type=template&id=892e6824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/modals/ModalUpload.vue?vue&type=template&id=892e6824&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_892e6824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);