(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
var RadialChart = function RadialChart() {
  return {
    // The component to load (should be a Promise)
    component: Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../RadialChart.vue */ "./resources/js/components/RadialChart.vue")),
    // A component to use while the async component is loading
    // loading: LoadingComponent,
    // A component to use if the load fails
    // error: ErrorComponent,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'chart': RadialChart
  },
  props: ['selectedCrm', 'selectedZona', 'core', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'last_updated'],
  data: function data() {
    return {
      technologyData: [],
      buttonLoading: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getTechnologyData();
  },
  watch: {
    selectedCrm: function selectedCrm(newValue, oldValue) {
      this.getTechnologyData();
    },
    selectedZona: function selectedZona(newValue, oldValue) {
      this.getTechnologyData();
    },
    core: function core(newValue, oldValue) {
      this.getTechnologyData();
    }
  },
  computed: {
    total2G1900: function total2G1900() {
      var counter = 0;
      this.technologyData.forEach(function (element) {
        return counter = counter + element.tec2g1900;
      });
      return counter;
    },
    total3G900: function total3G900() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec3g900;
      });
      return counter;
    },
    total3G1900: function total3G1900() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec3g1900;
      });
      return counter;
    },
    total3G3500: function total3G3500() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec3g3500;
      });
      return counter;
    },
    total4G700: function total4G700() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec4g700;
      });
      return counter;
    },
    total4G1900: function total4G1900() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec4g1900;
      });
      return counter;
    },
    total4G2600: function total4G2600() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec4g2600;
      });
      return counter;
    },
    total4G3500: function total4G3500() {
      var counter = 0;
      this.technologyData.forEach(function (item) {
        counter = counter + item.tec4g3500;
      });
      return counter;
    },
    totalTechnologies: function totalTechnologies() {
      return this.total2G1900 + this.total3G900 + this.total3G1900 + this.total3G3500 + this.total4G700 + this.total4G1900 + this.total4G2600 + this.total4G3500;
    }
  },
  methods: {
    getTechnologyData: function getTechnologyData() {
      var _this = this;

      if (!this.selectedCrm) {
        axios.get("/api/technologyData?core=".concat(this.core)).then(function (response) {
          _this.technologyData = response.data.data; // this.totalTechnologies()
        });
      } else if (!this.selectedZona) {
        axios.get("/api/technologyDataCrm?crm_id=".concat(this.selectedCrm.id, "&core=").concat(this.core)).then(function (response) {
          _this.technologyData = response.data.data; // this.totalTechnologies()
        });
      } else {
        axios.get("/api/technologyDataZona?zona_id=".concat(this.selectedZona.id, "&core=").concat(this.core)).then(function (response) {
          _this.technologyData = response.data.data; // this.totalTechnologies()
        });
      }
    },
    downloadTechnologies: function downloadTechnologies() {
      var _this2 = this;

      this.buttonLoading = 1;
      axios.get("/pop/export?core=".concat(this.core, "&crm_id=").concat(this.selectedCrm ? this.selectedCrm.id : 0, "&zona_id=").concat(this.selectedZona ? this.selectedZona.id : 0), {
        responseType: 'blob'
      }).then(function (response) {
        console.log(response.data);
        var blob = new Blob([response.data], {
          type: 'application/xls'
        }); // const objectUrl = window.URL.createObjectURL(blob)

        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'test.xlsx';
        link.click();
        _this2.buttonLoading = 0;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tile is-parent is-vertical" },
    [
      _c(
        "article",
        {
          staticClass: "tile is-child box",
          class: _vm.boxBackground,
          staticStyle: { "overflow-y": "scroll" }
        },
        [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass:
                  "column is-size-5 has-text-weight-semibold has-text-left",
                class: _vm.primaryText
              },
              [_vm._v("Tecnologías")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "column is-size-4 has-text-weight-semibold has-text-right",
                class: _vm.primaryText
              },
              [_vm._v(_vm._s(_vm._f("numeral")(this.totalTechnologies, "0,0")))]
            )
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table is-fullwidth", class: _vm.boxBackground },
            [
              _c("thead", [
                _c("tr", { staticClass: "is-size-7" }, [
                  _c("th", { class: _vm.secondaryText }, [
                    _vm._v(
                      _vm._s(
                        _vm.selectedCrm == null
                          ? "CRM"
                          : _vm.selectedZona == null
                          ? "Zona"
                          : "Comuna"
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "2G" } }, [
                        _vm._v("2G 1900")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "3G 900" } }, [
                        _vm._v("3G 900")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "3G 1900" } }, [
                        _vm._v("3G 1900")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "3G 3500" } }, [
                        _vm._v("3G 3500")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "4G 700" } }, [
                        _vm._v("4G 700")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "4G 1900" } }, [
                        _vm._v("4G 1900")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "4G 2600" } }, [
                        _vm._v("4G 2600")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "4G 3500" } }, [
                        _vm._v("4G 3500")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "has-text-right", class: _vm.secondaryText },
                    [
                      _c("abbr", { attrs: { title: "Total" } }, [
                        _vm._v("Total")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(this.technologyData, function(crm) {
                    return _c("tr", { staticClass: "is-size-7" }, [
                      _c("td", {}, [
                        _c(
                          "a",
                          {
                            staticClass: "has-text-weight-bold",
                            class: _vm.secondaryText,
                            attrs: { href: "", title: "CRM Norte" }
                          },
                          [_vm._v(_vm._s(crm.nombre))]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec2g1900, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [_vm._v(_vm._s(_vm._f("numeral")(crm.tec3g900, "0,0")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec3g1900, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec3g3500, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [_vm._v(_vm._s(_vm._f("numeral")(crm.tec4g700, "0,0")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec4g1900, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec4g2600, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("numeral")(crm.tec4g3500, "0,0"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "has-text-right has-text-weight-bold",
                          class: _vm.primaryText
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("numeral")(
                                crm.tec2g1900 +
                                  crm.tec3g900 +
                                  crm.tec3g1900 +
                                  crm.tec3g3500 +
                                  crm.tec4g700 +
                                  crm.tec4g1900 +
                                  crm.tec4g2600 +
                                  crm.tec4g3500,
                                "0,0"
                              )
                            )
                          )
                        ]
                      )
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", { staticClass: "is-size-7 has-text-weight-bold" }, [
                    _c("td", [
                      _c(
                        "a",
                        {
                          class: _vm.secondaryText,
                          attrs: { href: "", title: "Total" }
                        },
                        [_vm._v("Total")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total2G1900, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total3G900, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total3G1900, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total3G3500, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total4G700, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total4G1900, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total4G2600, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(_vm._f("numeral")(this.total4G3500, "0,0"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "has-text-right", class: _vm.primaryText },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("numeral")(this.totalTechnologies, "0,0")
                          )
                        )
                      ]
                    )
                  ])
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column" },
              [
                _c(
                  "b-field",
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          loading: _vm.buttonLoading ? true : false,
                          type: "is-link",
                          size: "is-small"
                        },
                        on: { click: _vm.downloadTechnologies }
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: "download" }
                        }),
                        _vm._v(
                          " \n                          Listado de Tecnologías\n                    "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tooltip",
                      {
                        attrs: { label: "Tooltip Text", position: "is-right" }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "button is-small is-link",
                            attrs: {
                              href: "/technologies",
                              type: "button",
                              "data-tooltip": ""
                            }
                          },
                          [
                            _c("font-awesome-icon", { attrs: { icon: "bars" } })
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column is-right" }, [
              _c(
                "div",
                {
                  staticClass: "is-size-7 has-text-right",
                  class: _vm.secondaryText,
                  staticStyle: { "margin-top": "10px" }
                },
                [_vm._v("Ultima actualización: " + _vm._s(_vm.last_updated))]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("chart", { attrs: { chartData: _vm.technologyData } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/TechnologiesData.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/dashboard/TechnologiesData.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TechnologiesData.vue?vue&type=template&id=7c88fa8c& */ "./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c&");
/* harmony import */ var _TechnologiesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TechnologiesData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TechnologiesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/TechnologiesData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TechnologiesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TechnologiesData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TechnologiesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TechnologiesData.vue?vue&type=template&id=7c88fa8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TechnologiesData.vue?vue&type=template&id=7c88fa8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TechnologiesData_vue_vue_type_template_id_7c88fa8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);