(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/eco/modals/upload"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: [// 'pop',
  'folderTab', 'folder_id', 'user'],
  data: function data() {
    return {
      dropFiles: [],
      pops: [],
      selected: null,
      isFetching: false,
      text: '',
      page: 1,
      totalPages: 1,
      isWithoutPop: false
    };
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      var _this = this;

      // console.log(this.folderTab)
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
        params: {
          'pop_id': this.selected ? this.selected.id : null,
          'folder_name': 'Gestión Ambiental',
          'folder_id': !this.selected ? 28172 : null,
          'user_id': this.user.id
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        axios.post("/api/files", formData, config).then(function (response) {
          console.log(response.data);

          _this2.$eventBus.$emit('reload-rcas');
        });
      } catch (e) {
        console.log(e);
      }

      this.$parent.close();
    },
    getAsyncData: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function (name) {
      var _this3 = this;

      // String update
      if (this.text !== name) {
        this.text = name;
        this.pops = [];
        this.page = 1;
        this.totalPages = 1;
      } // String cleared


      if (!name.length) {
        this.pops = [];
        this.page = 1;
        this.totalPages = 1;
        return;
      } // Reached last page


      if (this.page > this.totalPages) {
        return;
      }

      this.isFetching = true;
      axios.get("/api/allPops?text=".concat(name, "&page=").concat(this.page)).then(function (response) {
        console.log(response.data.meta.last_page);
        response.data.pops.forEach(function (item) {
          return _this3.pops.push(item);
        });
        _this3.page++;
        _this3.totalPages = response.data.meta.last_page;
      })["catch"](function (error) {
        throw error;
      })["finally"](function () {
        _this3.isFetching = false;
      });
    }, 50),
    getMoreAsyncData: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      this.getAsyncData(this.text);
    }, 10)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal-card",
      staticStyle: { height: "700px", width: "auto" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "modal-card-body" },
        [
          _c(
            "div",
            { staticClass: "block" },
            [
              _c(
                "b-tooltip",
                {
                  staticClass: "is-pulled-right",
                  attrs: {
                    label:
                      "Busca el pop al cual pertenece la RCA. En caso de no tener POP, selecciona 'Sin POP'.",
                    position: "is-left",
                    type: "is-link",
                    size: "is-medium",
                    multilined: ""
                  }
                },
                [
                  _c("font-awesome-icon", {
                    staticClass: "has-text-link",
                    attrs: { icon: ["fas", "info-circle"] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-checkbox",
                {
                  attrs: { type: "is-link" },
                  model: {
                    value: _vm.isWithoutPop,
                    callback: function($$v) {
                      _vm.isWithoutPop = $$v
                    },
                    expression: "isWithoutPop"
                  }
                },
                [_vm._v("\n                Sin POP\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.isWithoutPop
            ? _c(
                "div",
                { staticClass: "container", staticStyle: { width: "100%" } },
                [
                  _c(
                    "b-autocomplete",
                    {
                      attrs: {
                        autofocus: "",
                        data: _vm.pops,
                        "icon-pack": "fas",
                        icon: "search",
                        placeholder:
                          "Buscar por nemónico, nombre o direccion del sitio...",
                        "keep-first": true,
                        "open-on-focus": _vm.text ? true : false,
                        loading: _vm.isFetching,
                        "check-infinite-scroll": true
                      },
                      on: {
                        typing: _vm.getAsyncData,
                        select: function(option) {
                          return (_vm.selected = option)
                        },
                        "infinite-scroll": _vm.getMoreAsyncData
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass: "field",
                                    staticStyle: { padding: "4px" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-6 has-text-weight-semibold"
                                      },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              props.option
                                                ? props.option.nombre
                                                : ""
                                            ) +
                                            "\n                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal"
                                      },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              props.option
                                                ? props.option.comuna
                                                    .nombre_comuna
                                                : ""
                                            ) +
                                            " - " +
                                            _vm._s(
                                              props.option
                                                ? "Zona " +
                                                    props.option.comuna.zona
                                                      .nombre_zona
                                                : ""
                                            ) +
                                            " - " +
                                            _vm._s(
                                              props.option
                                                ? "CRM " +
                                                    props.option.comuna.zona.crm
                                                      .nombre_crm
                                                : ""
                                            ) +
                                            "\n                        "
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
                        1467354034
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("template", { slot: "footer" }, [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.page > _vm.totalPages,
                                expression: "page > totalPages"
                              }
                            ],
                            staticClass: "has-text-grey"
                          },
                          [_vm._v(" No hay mas PoPs que mostrar. ")]
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-field",
            { staticStyle: { "padding-top": "24px" } },
            [
              _c(
                "b-upload",
                {
                  attrs: {
                    disabled: _vm.isWithoutPop || _vm.selected ? false : true,
                    multiple: "",
                    "drag-drop": ""
                  },
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
                        _vm._v(
                          "Puedes hacer click o arrastrar tus archivos aquí"
                        )
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "box is-shadowless is-link",
              staticStyle: {
                padding: "8px",
                "margin-top": "24px",
                border: "solid 0.5px black"
              }
            },
            [
              _c("div", { staticClass: "field has-background" }, [
                !_vm.isWithoutPop
                  ? _c(
                      "div",
                      [
                        _c(
                          "div",
                          { staticClass: "is-size-6 has-text-weight-normal" },
                          [
                            _vm._v("POP destino: "),
                            !_vm.selected
                              ? _c("span", { staticClass: "has-text-grey" }, [
                                  _vm._v("Selecciona un Pop de la lista")
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _vm.selected
                          ? _c(
                              "b-notification",
                              {
                                attrs: {
                                  "aria-close-label": "Close notification"
                                },
                                on: {
                                  close: function($event) {
                                    _vm.selected = null
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "is-size-6 has-text-weight-semibold"
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.selected
                                            ? _vm.selected.nombre
                                            : ""
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "is-size-7 has-text-weight-normal"
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.selected
                                            ? _vm.selected.comuna
                                                .nombre_comuna +
                                                " - Zona " +
                                                _vm.selected.comuna.zona
                                                  .nombre_zona +
                                                " - CRM " +
                                                _vm.selected.comuna.zona.crm
                                                  .nombre_crm
                                            : ""
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isWithoutPop
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "is-size-6 has-text-centered has-text-weight-normal"
                      },
                      [_vm._v("RCA GENERAL")]
                    )
                  : _vm._e()
              ])
            ]
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
          [_vm._v("Cerrar")]
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
        _vm._v("Subir RCA")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/modals/ModalUpload.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/eco/modals/ModalUpload.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalUpload.vue?vue&type=template&id=2f35bf8e& */ "./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e&");
/* harmony import */ var _ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/modals/ModalUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalUpload.vue?vue&type=template&id=2f35bf8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/modals/ModalUpload.vue?vue&type=template&id=2f35bf8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalUpload_vue_vue_type_template_id_2f35bf8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);