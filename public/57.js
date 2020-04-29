(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Documents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Documents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['user', 'pop', 'popCritical', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      files: Array,
      activeTab: 0,
      showCam: true,
      multiline: true,
      isLoading: false,
      load: 0 // data: [
      //     {
      //         name: 'Board Games',
      //         sold: 131,
      //         available: 301,
      //         items: [
      //             {
      //                 name: 'Monopoly',
      //                 sold: 57,
      //                 available: 100
      //             },
      //             {
      //                 name: 'Scrabble',
      //                 sold: 23,
      //                 available: 84
      //             },
      //             {
      //                 name: 'Chess',
      //                 sold: 37,
      //                 available: 61
      //             },
      //             {
      //                 name: 'Battleships',
      //                 sold: 14,
      //                 available: 56
      //             }
      //         ]
      //     },
      //     {
      //         name: 'Jigsaws & Puzzles',
      //         sold: 88,
      //         available: 167,
      //         items: [
      //             {
      //                 name: 'World Map',
      //                 sold: 31,
      //                 available: 38
      //             },
      //             {
      //                 name: 'London',
      //                 sold: 23,
      //                 available: 29
      //             },
      //             {
      //                 name: 'Sharks',
      //                 sold: 20,
      //                 available: 44
      //             },
      //             {
      //                 name: 'Disney',
      //                 sold: 14,
      //                 available: 56
      //             }
      //         ]
      //     },
      //     {
      //         name: 'Books',
      //         sold: 434,
      //         available: 721,
      //         items: [
      //             {
      //                 name: 'Hamlet',
      //                 sold: 101,
      //                 available: 187
      //             },
      //             {
      //                 name: 'The Lord Of The Rings',
      //                 sold: 85,
      //                 available: 156
      //             },
      //             {
      //                 name: 'To Kill a Mockingbird',
      //                 sold: 78,
      //                 available: 131
      //             },
      //             {
      //                 name: 'Catch-22',
      //                 sold: 73,
      //                 available: 98
      //             },
      //             {
      //                 name: 'Frankenstein',
      //                 sold: 51,
      //                 available: 81
      //             },
      //             {
      //                 name: 'Alice\'s Adventures In Wonderland',
      //                 sold: 46,
      //                 available: 68
      //             }
      //         ]
      //     }
      // ],
      // columnsVisible: {
      //     name: { title: 'Name', display: true },
      //     sold: { title: 'Stock Sold', display: true },
      //     available: { title: 'Stock Available', display: true },
      //     cleared: { title: 'Stock Cleared', display: true },
      // },
      // showDetailIcon: true

    };
  },
  mounted: function mounted() {
    this.getFiles();
  },
  computed: {
    folder: {
      get: function get() {
        return this.baseTabs[this.activeTab];
      },
      set: function set(newValue) {
        this.getFiles();
      }
    },
    showCriticTab: function showCriticTab() {
      return this.popCritical;
    },
    baseTabs: function baseTabs() {
      return [{
        id: 1,
        label: 'Informes',
        content: 'Informes: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 2,
        label: 'Documentos',
        content: 'Documentos: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 3,
        label: 'Fotos',
        content: 'Fotos: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 4,
        label: 'Construcción',
        content: 'Construcción: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 5,
        label: 'Obras Civiles',
        content: 'Obras Civiles: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 6,
        label: 'CAM',
        content: 'CAM: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 7,
        label: 'Levantamientos Ingeniería',
        content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
        displayed: this.showCriticTab
      }, {
        id: 8,
        label: 'Gestión Ambiental',
        content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
        displayed: true
      }];
    },
    tabs: function tabs() {
      var tabs = _toConsumableArray(this.baseTabs); // if (this.showCriticTab) {
      //     tabs.splice(tabs.length - 1, 0, this.criticTab);
      // }


      return tabs;
    } // criticTab() {
    //     return {
    //         id: 7,
    //         label: 'Levantamientos Ingeniería',
    //         content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
    //         displayed: true,
    //     }
    // }

  },
  methods: {
    getFiles: function getFiles() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_id': this.folder.id
      };
      axios.get("/api/files/".concat(this.pop.id), {
        params: params
      }).then(function (response) {
        // console.log(response.data)
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
    } // toggle(row) {
    //     this.$refs.table.toggleDetails(row)
    // }

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
    _c(
      "section",
      { staticClass: "section has-background-white" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "b-tabs",
          {
            attrs: { multiline: _vm.multiline, position: "is-centered" },
            on: {
              change: function($event) {
                _vm.folder = _vm.activeTab
              }
            },
            model: {
              value: _vm.activeTab,
              callback: function($$v) {
                _vm.activeTab = $$v
              },
              expression: "activeTab"
            }
          },
          [
            _vm._l(_vm.tabs, function(tab, index) {
              return [
                tab.displayed
                  ? _c("b-tab-item", {
                      key: index,
                      attrs: { label: tab.label }
                    })
                  : _vm._e()
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "columns is-multiline" },
          _vm._l(_vm.files, function(file) {
            return _c("div", { staticClass: "column is-2 tile is-parent" }, [
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
            ])
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
      ],
      1
    )
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
            "has-text-weight-semibold has-text-dark is-size-4 has-text-left"
        },
        [_vm._v("Documentos")]
      )
    ])
  }
]
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