(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return {
      file: [] // buttonLoading: 0,
      // filename: 'No hay archivo...',
      // csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')

    };
  },
  methods: {
    onFileChange: function onFileChange(file) {
      this.file = file;
    },
    submit: function submit(e) {
      // this.buttonLoading = 1
      e.preventDefault();
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('file', this.file[0]); // console.log(this.file)

      axios.post("/api/client_connection/efizity", formData, config).then(function (response) {
        console.log(response.data); // this.$buefy.toast.open({
        //     message: response.data.success,
        //     type: 'is-success',
        //     duration: 5000
        // })
        // this.buttonLoading = 0
      })["catch"](function (error) {
        console.log('error: ' + error); // this.$buefy.toast.open({
        //     message: error,
        //     type: 'is-danger',
        //     duration: 5000
        // })
        // this.buttonLoading = 0
      });
    } // submit() {
    //     this.buttonLoading = 1
    //     console.log(this.file)
    //     axios.post(`/api/client_connection/efizity?file=${this.file}`)
    //     .then((response) => {
    //         console.log(response)
    //         // const blob = new Blob([response.data], { type: 'application/xls' })
    //         // const objectUrl = window.URL.createObjectURL(blob)
    //         // let link = document.createElement('a')
    //         // link.href = window.URL.createObjectURL(blob)
    //         // link.download = 'test.xlsx'
    //         // link.click()
    //         this.buttonLoading = 0
    //     })
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100& ***!
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
  return _c("div", { staticClass: "section" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "tile is-ancestor" }, [
        _c("div", { staticClass: "tile is-parent" }, [
          _c(
            "div",
            { staticClass: "tile is-child box", class: _vm.boxBackground },
            [
              _c(
                "div",
                { class: _vm.secondaryText },
                [
                  _c(
                    "div",
                    { staticClass: "is-size-6 has-text-weight-semibold" },
                    [
                      _vm._v(
                        "\n                            Efizzity\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { staticClass: "file" },
                    [
                      _c(
                        "b-upload",
                        {
                          on: { input: _vm.onFileChange },
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
                            { staticClass: "button is-primary" },
                            [
                              _c("b-icon", { attrs: { icon: "upload" } }),
                              _vm._v(" "),
                              _c("span", [_vm._v("Click to upload")])
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.file
                        ? _c("span", { staticClass: "file-name" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.file.name) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "is-link" }, on: { click: _vm.submit } },
                    [
                      _c("font-awesome-icon", { attrs: { icon: "sync-alt" } }),
                      _vm._v(
                        " \n                              Sync Efizity\n                        "
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminMassive.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/AdminMassive.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminMassive.vue?vue&type=template&id=512ca100& */ "./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100&");
/* harmony import */ var _AdminMassive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminMassive.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminMassive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminMassive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMassive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMassive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminMassive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMassive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMassive.vue?vue&type=template&id=512ca100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminMassive.vue?vue&type=template&id=512ca100&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMassive_vue_vue_type_template_id_512ca100___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);