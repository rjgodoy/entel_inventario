(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuePagination_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VuePagination.vue */ "./resources/js/components/VuePagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'vue-pagination': _VuePagination_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['selectedCrm', 'selectedZona', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'core'],
  data: function data() {
    return {
      data: {
        total: 0,
        per_page: 12,
        from: 1,
        to: 0,
        current_page: 1
      },
      buttonLoading: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getData();
  },
  watch: {
    selectedCrm: function selectedCrm(newValue, oldValue) {
      this.getData();
    },
    selectedZona: function selectedZona(newValue, oldValue) {
      this.getData();
    },
    core: function core(newValue, oldValue) {
      this.getData();
    }
  },
  computed: {
    popClassification: function popClassification(site) {
      var i = 6;
      var cat;

      if (site.pop) {
        site.forEach(function (item) {
          if (item.classification_type_id && item.classification_type_id < i) {
            i = item.classification_type_id;
            cat = item.classification_type.classification_type;
          }
        }, this);
      }

      return cat;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      // Si no hay un CRM seleccionado
      // if (!this.selectedCrm) {                             
      axios.get("/api/criticSites?core=".concat(this.core, "&crm_id=").concat(this.selectedCrm ? this.selectedCrm.id : 0, "&zona_id=").concat(this.selectedZona ? this.selectedZona.id : 0, "&page=").concat(this.data.current_page)).then(function (response) {
        console.log(response.data);
        _this.data = response.data; // if(true) {
        //     this.$emit('clicked', this.data)
        // }
      }); // } 
      // //Si hay un CRM seleccionado, pero no hay zona seleccionada
      // else if (!this.selectedZona){
      //     console.log(this.selectedCrm.id)
      //     axios.get(`/api/criticPopsCrm?crm_id=${this.selectedCrm.id}&core=${this.core}&page=${this.data.current_page}`)
      //     .then((response) => {
      //         this.data = response.data;
      //     })
      // } 
      // // Si hay una zona seleccionada
      // else {
      //     axios.get(`/api/criticPopsZona?zona_id=${this.selectedZona.id}&core=${this.core}&page=${this.data.current_page}`)
      //     .then((response) => {
      //         this.data = response.data;
      //     })
      // }
    },
    downloadPops: function downloadPops() {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tile is-parent" }, [
    _c(
      "article",
      { staticClass: "tile is-child box", class: _vm.boxBackground },
      [
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            {
              staticClass:
                "column is-size-5 has-text-weight-semibold has-text-left",
              class: _vm.primaryText
            },
            [_vm._v("POP Críticos")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "column is-size-4 has-text-weight-semibold has-text-right",
              class: _vm.primaryText
            },
            [_vm._v(_vm._s(_vm._f("numeral")(_vm.data.total, "0,0")))]
          )
        ]),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table is-fullwidth", class: _vm.boxBackground },
          [
            _c("thead", [
              _c("tr", { staticClass: "is-size-7" }, [
                _c(
                  "th",
                  { staticClass: "has-text-left", class: _vm.secondaryText },
                  [
                    _c("abbr", { attrs: { title: "Nemónico" } }, [
                      _vm._v("Nemónico")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-left", class: _vm.secondaryText },
                  [
                    _c(
                      "abbr",
                      { attrs: { title: "Nombre y dirección del POP" } },
                      [_vm._v("Nombre / Dirección")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-left", class: _vm.secondaryText },
                  [
                    _c("abbr", { attrs: { title: "Categoría" } }, [
                      _vm._v("Categoría")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-left", class: _vm.secondaryText },
                  [
                    _c("abbr", { attrs: { title: "Código Planificación" } }, [
                      _vm._v("Cod. Planificación")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data.data, function(item) {
                return _c("tr", { staticClass: "is-size-7" }, [
                  _c(
                    "td",
                    { staticClass: "has-text-left", class: _vm.primaryText },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/pop/" + item.site.pop.id,
                            target: "_blank"
                          }
                        },
                        [_vm._v(_vm._s(item.site.nem_site))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-left", class: _vm.primaryText },
                    [
                      _c("div", [_vm._v(_vm._s(item.site.pop.nombre))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(item.site.pop.direccion))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "has-text-centered",
                      class: _vm.primaryText
                    },
                    [
                      _c(
                        "b-tag",
                        {
                          attrs: {
                            type:
                              item.site.classification_type_id == 1
                                ? "is-info"
                                : item.site.classification_type_id == 2
                                ? "is-warning"
                                : item.site.classification_type_id == 3
                                ? "is-smart"
                                : item.site.classification_type_id == 4
                                ? "is-success"
                                : "is-link"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              item.site.classification_type.classification_type
                            )
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-left", class: _vm.primaryText },
                    [_vm._v(_vm._s(item.site.cod_planificacion))]
                  )
                ])
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "nav",
          {
            staticClass: "pagination",
            attrs: { role: "navigation", "aria-label": "pagination" }
          },
          [
            _c("vue-pagination", {
              attrs: {
                pagination: _vm.data,
                offset: 4,
                primaryText: _vm.primaryText
              },
              on: {
                paginate: function($event) {
                  return _vm.getData()
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "field has-addons" }, [
          _c(
            "p",
            { staticClass: "control" },
            [
              _c(
                "b-button",
                {
                  attrs: {
                    loading: _vm.buttonLoading ? true : false,
                    type: "is-link",
                    size: "is-small"
                  },
                  on: { click: _vm.downloadPops }
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: "download" } }),
                  _vm._v(
                    " \n                      Listado de POPs\n                "
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "control" },
            [
              _c(
                "b-tooltip",
                { attrs: { label: "Tooltip Text", position: "is-right" } },
                [
                  _c(
                    "a",
                    {
                      staticClass: "button is-small is-link",
                      attrs: {
                        href: "/pop",
                        type: "button",
                        "data-tooltip": ""
                      }
                    },
                    [_c("font-awesome-icon", { attrs: { icon: "bars" } })],
                    1
                  )
                ]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/CriticPopsData.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/dashboard/CriticPopsData.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CriticPopsData.vue?vue&type=template&id=5a0f1266& */ "./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266&");
/* harmony import */ var _CriticPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CriticPopsData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CriticPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/CriticPopsData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriticPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CriticPopsData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriticPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CriticPopsData.vue?vue&type=template&id=5a0f1266& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/CriticPopsData.vue?vue&type=template&id=5a0f1266&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CriticPopsData_vue_vue_type_template_id_5a0f1266___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);