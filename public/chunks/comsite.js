(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/comsite"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePagination: function VuePagination() {
      return __webpack_require__.e(/*! import() | chunks/helpers/vuePagination */ "chunks/helpers/vuePagination").then(__webpack_require__.bind(null, /*! ../../helpers/VuePagination */ "./resources/js/components/helpers/VuePagination.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      darkMode: 0,
      bodyBackground: '',
      boxBackground: '',
      primaryText: '',
      secondaryText: '',
      searchBodyBackground: '',
      last_updated: '',
      comsiteData: {
        can: Array,
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      },
      searchText: '' // buttonLoading: 0,

    };
  },
  created: function created() {
    this.styleMode();
  },
  mounted: function mounted() {
    this.lastUpdated();
    this.getComsiteData();
  },
  methods: {
    getComsiteData: function getComsiteData() {
      var _this = this;

      axios.get("/api/comsites?page=".concat(this.comsiteData.current_page, "&text=").concat(this.searchText)).then(function (response) {
        _this.comsiteData = response.data;
        console.log(response.data);
      });
    },
    // syncComsite() {
    //     // e.preventDefault()
    //     this.buttonLoading = 1
    //     // let currentObj = this
    //     axios.post(`/api/comsites`)
    //     .then((response) => {
    //         // console.log(this.$route.params)
    //         // console.log(response)
    //         // document.location.href = "/comsite/create"
    //         // currentObj.output = response.data
    //         this.buttonLoading = 0
    //         this.getComsiteData()
    //         this.lastUpdated()
    //     })
    // },
    // Style mode
    styleMode: function styleMode() {
      if (this.darkMode == 1) {
        // dark mode
        this.bodyBackground = 'has-background-black-ter';
        this.boxBackground = 'has-background-dark';
        this.primaryText = 'has-text-white';
        this.secondaryText = 'has-text-grey-light';
        this.searchBodyBackground = 'has-background-dark';
      } else {
        // light mode
        this.bodyBackground = 'has-background-light';
        this.boxBackground = 'has-background-white';
        this.primaryText = 'has-text-dark';
        this.secondaryText = 'has-text-grey';
        this.searchBodyBackground = 'has-background-white';
      }
    },
    changeStyle: function changeStyle() {
      if (this.darkMode == 0) {
        this.darkMode = 1;
        this.styleMode();
      } else {
        this.darkMode = 0;
        this.styleMode();
      }
    },
    clearSearch: function clearSearch() {
      this.searchText = ''; // this.popSearch = []
      // this.selectedPop = null
      // this.selectedPops = []
      // this.selectedCrm = null
      // this.selectedZona = null

      this.getComsiteData();
    },
    lastUpdated: function lastUpdated() {
      var _this2 = this;

      axios.get("/api/comsiteLastData").then(function (response) {
        _this2.last_updated = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "section is-marginless", class: _vm.bodyBackground },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "box", class: _vm.boxBackground }, [
          _c("div", { staticClass: "field" }, [
            _c("p", { staticClass: "control has-icons-left has-icons-right" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchText,
                    expression: "searchText"
                  }
                ],
                staticClass: "input is-rounded",
                class: _vm.bodyBackground + " " + _vm.primaryText,
                attrs: {
                  type: "text",
                  "arial-label": "Buscar",
                  placeholder: "Buscar...",
                  autofocus: ""
                },
                domProps: { value: _vm.searchText },
                on: {
                  keyup: _vm.getComsiteData,
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchText = $event.target.value
                    },
                    function($event) {
                      _vm.comsiteData.current_page = 1
                    }
                  ]
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "icon is-small is-left" },
                [_c("font-awesome-icon", { attrs: { icon: "search" } })],
                1
              ),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-small is-right" }, [
                _c("button", {
                  staticClass: "delete",
                  on: { click: _vm.clearSearch }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table is-fullwidth", class: _vm.boxBackground },
            [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [
                      _c("abbr", { attrs: { title: "id" } }, [
                        _vm._v("# Contrato")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [_c("abbr", { attrs: { title: "id" } }, [_vm._v("POP")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [
                      _c("abbr", { attrs: { title: "id" } }, [
                        _vm._v("Operador")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [
                      _c("abbr", { attrs: { title: "id" } }, [
                        _vm._v("Fechas Contratos")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [
                      _c("abbr", { attrs: { title: "id" } }, [
                        _vm._v("Propietario")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "is-size-7 has-text-weight-semibold",
                      class: _vm.secondaryText
                    },
                    [
                      _c("abbr", { attrs: { title: "id" } }, [
                        _vm._v("Rol Propiedad")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("th", {
                    staticClass:
                      "is-size-7 has-text-weight-semibold has-text-centered"
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.comsiteData.data, function(data) {
                  return _c(
                    "tr",
                    { staticClass: "is-size-7 has-text-weight-light" },
                    [
                      _c(
                        "td",
                        {
                          staticClass: "has-text-weight-light",
                          class: _vm.primaryText
                        },
                        [_vm._v(_vm._s(data.id))]
                      ),
                      _vm._v(" "),
                      _c("td", {}, [
                        _c(
                          "div",
                          {
                            staticClass: "is-size-7 has-text-weight-normal",
                            class: _vm.primaryText
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(data.pop ? data.pop.nombre : "") +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "is-size-7 has-text-weight-normal",
                            class: _vm.secondaryText
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(data.pop ? data.pop.comuna.nombre : "") +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "is-size-7 has-text-weight-normal",
                            class: _vm.secondaryText
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  data.pop
                                    ? "Zona: " + data.pop.zona.nombre
                                    : ""
                                ) +
                                " - " +
                                _vm._s(
                                  data.pop
                                    ? "CRM: " + data.pop.zona.crm.nombre
                                    : ""
                                ) +
                                "\n                            "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "has-text-weight-light has-text-centered",
                          class: _vm.primaryText
                        },
                        [_vm._v(_vm._s(data.operador))]
                      ),
                      _vm._v(" "),
                      _c("td", {}, [
                        _c(
                          "div",
                          {
                            staticClass: "has-text-weight-light",
                            class: _vm.primaryText
                          },
                          [
                            _vm._v(
                              "\n                                Inicio: " +
                                _vm._s(data.started_at) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "has-text-weight-light",
                            class: _vm.primaryText
                          },
                          [
                            _vm._v(
                              "\n                                Término: " +
                                _vm._s(data.ended_at) +
                                "\n                            "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", {}, [
                        _c(
                          "div",
                          {
                            staticClass: "has-text-weight-light",
                            class: _vm.primaryText
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(data.propietario) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "has-text-weight-light",
                            class: _vm.secondaryText
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  data.fono_propietario ||
                                    data.celular_propietario
                                    ? "Contacto: "
                                    : ""
                                ) +
                                "\n                                " +
                                _vm._s(
                                  data.fono_propietario &&
                                    data.celular_propietario
                                    ? data.fono_propietario +
                                        " - " +
                                        data.celular_propietario
                                    : data.fono_propietario
                                    ? data.fono_propietario
                                    : data.celular_propietario
                                ) +
                                "\n                            "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "has-text-weight-light has-text-centered",
                          class: _vm.primaryText
                        },
                        [_vm._v(_vm._s(data.rol_propiedad))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "has-text-weight-light has-text-centered",
                          class: _vm.primaryText
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button is-small is-link tooltip",
                              attrs: {
                                href: "/comsites/download",
                                type: "button",
                                "data-tooltip": "Tooltip Text"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "bars" }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "level" }, [
            _c(
              "nav",
              {
                staticClass: "level-left pagination",
                attrs: { role: "navigation", "aria-label": "pagination" }
              },
              [
                _c("vue-pagination", {
                  attrs: {
                    pagination: _vm.comsiteData,
                    offset: 4,
                    primaryText: _vm.primaryText
                  },
                  on: {
                    paginate: function($event) {
                      return _vm.getComsiteData()
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "level-right has-text-right" }, [
              _c(
                "div",
                { staticClass: "is-size-7 ", class: _vm.secondaryText },
                [
                  _vm._v(
                    "Fecha ultima actualización: " +
                      _vm._s(_vm.last_updated.formatted)
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reports/comsite/Comsite.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/reports/comsite/Comsite.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comsite.vue?vue&type=template&id=30c777d4& */ "./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4&");
/* harmony import */ var _Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comsite.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/comsite/Comsite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comsite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/comsite/Comsite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comsite.vue?vue&type=template&id=30c777d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/comsite/Comsite.vue?vue&type=template&id=30c777d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_30c777d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);