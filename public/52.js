(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user'],
  data: function data() {
    return {
      dropFiles: [],
      rcas: Array,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getRCAs();
  },
  methods: {
    getRCAs: function getRCAs() {
      var _this = this;

      axios.get("/api/rcas?api_token=".concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this.rcas = response.data;
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
        var response = axios.post("/api/rcas?api_token=".concat(this.user.api_token), formData, config).then(function (response) {
          _this3.getRCAs();
        });
      } catch (e) {
        console.log(e);
      }
    },
    deleteDropFile: function deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "title is-size-4" }, [_vm._v("RCAs")]),
      _vm._v(" "),
      _c(
        "b-table",
        {
          attrs: {
            data: _vm.rcas.environmentalData,
            bordered: _vm.isBordered,
            striped: _vm.isStriped,
            narrowed: _vm.isNarrowed,
            hoverable: _vm.isHoverable,
            loading: _vm.isLoading,
            focusable: _vm.isFocusable,
            "mobile-cards": _vm.hasMobileCards
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(props) {
                return [
                  _c(
                    "b-table-column",
                    { attrs: { field: "basename", label: "First Name" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(props.row.basename) +
                          "\n            "
                      )
                    ]
                  )
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
      ),
      _vm._v(" "),
      (_vm.rcas.can
      ? _vm.rcas.can.upload
      : null)
        ? _c(
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
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RCAs.vue?vue&type=template&id=661cfecc& */ "./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&");
/* harmony import */ var _RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RCAs.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/RCAs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RCAs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RCAs.vue?vue&type=template&id=661cfecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);