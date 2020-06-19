(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/eco"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Eco.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/Eco.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileImage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      rcas: [],
      dropFiles: [],
      temporaryStorages: [],
      temporaryStoragesData: [],
      isLoading: false
    };
  },
  computed: {
    isTempStorage: function isTempStorage() {
      var _this = this;

      var bool = false;

      if (this.temporaryStorages.environmentalData && this.temporaryStorages.environmentalData.pop) {
        this.temporaryStorages.environmentalData.forEach(function (element) {
          if (bool == false) {
            bool = element.pop.id == _this.pop.id ? true : false;
          }

          _this.temporaryStoragesData.push(element);
        });
      }

      return bool;
    },
    hasRcas: function hasRcas() {
      return this.rcas.environmentalData && this.rcas.environmentalData.length ? true : false;
    }
  },
  mounted: function mounted() {
    this.getRCAs();
    this.getTempStorage();
  },
  methods: {
    getRCAs: function getRCAs() {
      var _this2 = this;

      axios.get("/api/rcas/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        console.log(response.data);
        _this2.rcas = response.data;
      });
    },
    getTempStorage: function getTempStorage() {
      var _this3 = this;

      axios.get("/api/ecoStorage/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this3.temporaryStorages = response.data;
      });
    },
    submit: function submit() {
      var _this4 = this;

      this.dropFiles.forEach(function (element) {
        return _this4.submitForm(element);
      });
    },
    submitForm: function submitForm(file) {
      var _this5 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        params: {
          'api_token': this.user.api_token,
          'pop_id': this.pop.id
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        var response = axios.post('/api/rcas', formData, config).then(function (response) {
          // console.log(response.data)
          _this5.getRCAs();
        });
      } catch (e) {
        console.log(e);
      }
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
      var _this6 = this;

      this.isLoading = true;
      var params = {
        'api_token': this.user.api_token,
        'route': file.route,
        'mime': file.mime,
        'basename': file.basename,
        'dirname': file.dirname
      }; // console.log(params)

      axios.get('/api/viewFile', {
        params: params,
        responseType: 'arraybuffer'
      }).then(function (response) {
        // console.log(response)
        var blob = new Blob([response.data], {
          type: file.mime
        });
        var objectUrl = URL.createObjectURL(blob); // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        var link = document.createElement('a');
        link.href = objectUrl;
        link.open = file.basename; // link.target = "_blank";

        link.click();
        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          URL.revokeObjectURL(objectUrl);
        }, 100);
        _this6.isLoading = false;

        _this6.$buefy.toast.open({
          message: 'El archivo se ha descargado exitosamente.',
          type: 'is-success',
          duration: 5000
        });
      })["catch"](function (error) {
        console.log(error);
        _this6.isLoading = false;

        _this6.$buefy.toast.open({
          message: 'Ha ocurrido un error. Favor contactar al administrador',
          type: 'is-danger',
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "eco" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "tile is-ancestor" }, [
      _c("div", { staticClass: "tile is-vertical" }, [
        _c("div", { staticClass: "tile is-parent" }, [
          _c("div", { staticClass: "box tile is-child" }, [
            _c("div", { staticClass: "field" }, [
              _c(
                "div",
                {
                  staticClass:
                    "title is-size-4 has-text-weight-semibold has-text-centered"
                },
                [_vm._v("Zona protegida")]
              ),
              _vm._v(" "),
              _vm.pop.protected_zones.length
                ? _c(
                    "div",
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._l(_vm.pop.protected_zones, function(pz) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "title is-size-5 has-text-weight-semibold has-text-centered",
                            staticStyle: { "padding-top": "12px" }
                          },
                          [
                            _vm._v(
                              "Zona " +
                                _vm._s(pz.cod_zone) +
                                "\n                                "
                            ),
                            _c(
                              "div",
                              {
                                staticClass: "is-size-5 has-text-weight-light"
                              },
                              [_vm._v(_vm._s(pz.name))]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.pop.protected_zones.length
                ? _c(
                    "div",
                    {
                      staticClass:
                        "is-size-6 has-text-weight-light has-text-centered"
                    },
                    [
                      _vm._v("Este PoP "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "has-text-weight-semibold has-text-positive"
                        },
                        [_vm._v("NO")]
                      ),
                      _vm._v(" se encuentra dentro de una zona protegida.")
                    ]
                  )
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-parent" }, [
          _c("div", { staticClass: "box tile is-child" }, [
            _c("div", { staticClass: "field" }, [
              _c(
                "div",
                {
                  staticClass:
                    "title is-size-4 has-text-weight-semibold has-text-centered"
                },
                [_vm._v("Zona Acopio Temporal")]
              ),
              _vm._v(" "),
              _vm.isTempStorage
                ? _c(
                    "div",
                    {
                      staticClass:
                        "is-size-6 has-text-weight-light has-text-centered"
                    },
                    [
                      _vm._v("Este PoP es "),
                      _c(
                        "span",
                        {
                          staticClass: "has-text-weight-semibold has-text-smart"
                        },
                        [_vm._v("Zona de Acopio Temporal")]
                      ),
                      _vm._v(".")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isTempStorage & _vm.temporaryStoragesData.length
                ? _c(
                    "div",
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "is-size-6 has-text-weight-light has-text-centered"
                        },
                        [
                          _vm._v(
                            "Este PoP tiene asociada las siguientes zonas de acopio temporal:"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.temporaryStoragesData, function(ts) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "title is-size-5 has-text-weight-semibold has-text-centered",
                            staticStyle: { "padding-top": "12px" }
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "/pop/" + ts.pop.id + "#eco",
                                  target: "_blank"
                                }
                              },
                              [_vm._v(_vm._s(ts.pop.nombre))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "is-size-5 has-text-weight-light"
                              },
                              [_vm._v(_vm._s(ts.pop.direccion))]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.temporaryStoragesData.length
                ? _c(
                    "div",
                    {
                      staticClass:
                        "is-size-6 has-text-weight-light has-text-centered"
                    },
                    [
                      _vm._v("Este PoP "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "has-text-weight-semibold has-text-positive"
                        },
                        [_vm._v("NO")]
                      ),
                      _vm._v(" tiene asignada Zona de Acopio Temporal.")
                    ]
                  )
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tile is-parent" }, [
        _c(
          "div",
          { staticClass: "box tile is-child" },
          [
            _c("div", { staticClass: "field" }, [
              _c(
                "div",
                {
                  staticClass:
                    "title is-size-4 has-text-weight-semibold has-text-centered"
                },
                [_vm._v("Resolucion de Calificación Ambiental")]
              ),
              _vm._v(" "),
              _vm.hasRcas
                ? _c(
                    "div",
                    [
                      _c(
                        "b-table",
                        {
                          attrs: { data: _vm.rcas.environmentalData },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "b-table-column",
                                      {
                                        attrs: {
                                          field: "basename",
                                          label: "Nombre archivo"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "has-text-dark",
                                            on: {
                                              click: function($event) {
                                                return _vm.readFile(props.row)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-1"
                                                  },
                                                  [
                                                    _c("font-awesome-icon", {
                                                      class: _vm.faFile(
                                                        props.row.extension
                                                      ).type,
                                                      attrs: {
                                                        icon: [
                                                          "fas",
                                                          _vm.faFile(
                                                            props.row.extension
                                                          ).icon
                                                        ]
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "column" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-6"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.row.basename
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            1317482038
                          )
                        },
                        [
                          _vm._v(" "),
                          _c("template", { slot: "empty" }, [
                            _c("section", { staticClass: "section" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "content has-text-grey has-text-centered"
                                },
                                [
                                  _c(
                                    "p",
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "emoticon-sad",
                                          size: "is-large"
                                        }
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
                : _vm._e(),
              _vm._v(" "),
              !_vm.hasRcas
                ? _c(
                    "div",
                    {
                      staticClass:
                        "is-size-6 has-text-weight-light has-text-centered"
                    },
                    [
                      _vm._v("Este PoP "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "has-text-weight-semibold has-text-positive"
                        },
                        [_vm._v("NO")]
                      ),
                      _vm._v(
                        " tiene Resolucion de Calificación Ambiental (R.C.A.)."
                      )
                    ]
                  )
                : _vm._e()
            ]),
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
                          _c(
                            "div",
                            { staticClass: "content has-text-centered" },
                            [
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
                                _vm._v(
                                  "Drop your files here or click to upload"
                                )
                              ])
                            ]
                          )
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
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        {
          staticClass:
            "column has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Gestión Ambiental")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "is-size-6 has-text-weight-light has-text-centered" },
      [
        _vm._v("Este PoP "),
        _c("span", { staticClass: "has-text-weight-semibold has-text-eco" }, [
          _vm._v("SI")
        ]),
        _vm._v(" se encuentra dentro de una zona protegida")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/Eco.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/pop/Eco.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eco.vue?vue&type=template&id=65837eb8& */ "./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8&");
/* harmony import */ var _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eco.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/Eco.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/Eco.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pop/Eco.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Eco.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Eco.vue?vue&type=template&id=65837eb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Eco.vue?vue&type=template&id=65837eb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Eco_vue_vue_type_template_id_65837eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);