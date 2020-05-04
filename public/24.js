(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// CapacityChart: () => import('./CapacityChart'),
  },
  props: ['user', 'pop'],
  data: function data() {
    return {
      files: Array,
      isLoading: false,
      load: 0
    };
  },
  computed: {},
  mounted: function mounted() {
    this.getFiles();
  },
  methods: {
    getFiles: function getFiles() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_id': 7
      };
      axios.get("/api/files/".concat(this.pop.id), {
        params: params
      }).then(function (response) {
        console.log(response.data);
        _this.files = response.data.data;
      });
    },
    faFile: function faFile(ext) {
      var icon = ext == 'pdf' ? 'file-pdf' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file';
      var type = ext == 'pdf' ? 'has-text-info' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'has-text-warning' : ext == 'xls' || ext == 'xlsx' ? 'has-text-success' : 'has-text-primary';
      return {
        'icon': icon,
        'type': type
      };
    },
    readFile: function readFile(file) {
      var _this2 = this;

      console.log(file);

      if (file.extension == 'pdf') {
        window.open('./' + file.dirname + '/' + file.basename, '_blank');
      } else {
        this.isLoading = true;
        var params = {
          'api_token': this.user.api_token,
          'dirname': file.dirname,
          'basename': file.basename,
          'mime': file.mime
        }; // console.log(params)

        axios.get('/api/viewFile', {
          params: params,
          responseType: 'arraybuffer'
        }).then(function (response) {
          console.log(response);
          var blob = new Blob([response.data], {
            type: file.mime
          }); // const objectUrl = window.URL.createObjectURL(blob)
          // IE doesn't allow using a blob object directly as link href
          // instead it is necessary to use msSaveOrOpenBlob

          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
          }

          var data = window.URL.createObjectURL(blob);
          var link = document.createElement('a');
          link.href = data;
          link.download = file.basename;
          link.click(); // setTimeout(function () {
          //     // For Firefox it is necessary to delay revoking the ObjectURL
          //     window.URL.revokeObjectURL(data)
          // }, 100)

          _this2.isLoading = false;

          _this2.$buefy.toast.open({
            message: 'El archivo se ha descargado exitosamente.',
            type: 'is-success',
            duration: 5000
          });
        })["catch"](function (error) {
          console.log(error);
          _this2.isLoading = false;

          _this2.$buefy.toast.open({
            message: 'Ha ocurrido un error. Favor contactar al administrador',
            type: 'is-danger',
            duration: 5000
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "box" }, [
      _c(
        "div",
        { staticClass: "columns is-multiline" },
        _vm._l(_vm.files, function(file) {
          return _c(
            "div",
            { key: file.id, staticClass: "column is-2 tile is-parent" },
            [
              _c(
                "a",
                {
                  staticClass: "box tile is-child",
                  staticStyle: { position: "relative" },
                  attrs: { target: "_blank" },
                  on: {
                    click: function($event) {
                      _vm.readFile(file)
                      _vm.load = file.id
                    }
                  }
                },
                [
                  _c("font-awesome-icon", {
                    class: _vm.faFile(file.extension).type,
                    staticStyle: { "padding-bottom": "5px" },
                    attrs: {
                      icon: ["fas", _vm.faFile(file.extension).icon],
                      size: "2x"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "is-size-7" }, [
                    _vm._v(_vm._s(file.basename))
                  ]),
                  _vm._v(" "),
                  _vm.load == file.id
                    ? _c("b-loading", {
                        attrs: {
                          "is-full-page": false,
                          active: _vm.isLoading,
                          "can-cancel": true
                        },
                        on: {
                          "update:active": function($event) {
                            _vm.isLoading = $event
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.files.length == 0
        ? _c("section", { staticClass: "section container" }, [
            _c("div", { staticClass: "has-text-weight-normal" }, [
              _vm._v("No hay archivos en esta sección.")
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field" }, [
      _c(
        "div",
        {
          staticClass:
            "has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Documentos")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/modals/Documents.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Documents.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=67977229& */ "./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/modals/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=67977229& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Documents.vue?vue&type=template&id=67977229&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_67977229___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);