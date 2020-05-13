(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VuePagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      "default": 4
    },
    primaryText: String
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'vue-pagination': _VuePagination_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['user', 'selectedCrm', 'selectedZona', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'core'],
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
  methods: {
    popClassification: function popClassification(pop) {
      // console.log(pop)
      var i = 6;
      var cat;

      if (pop.sites) {
        pop.sites.forEach(function (item) {
          if (item.classification_type_id && item.classification_type_id < i) {
            i = item.classification_type_id;
            cat = item.classification_type.classification_type;
          }
        }, this);
      }

      return [i, cat];
    },
    getData: function getData() {
      var _this = this;

      axios.get("/api/albaPopList?api_token=".concat(this.user.api_token, "&core=").concat(this.core, "&crm_id=").concat(this.selectedCrm ? this.selectedCrm.id : 0, "&zona_id=").concat(this.selectedZona ? this.selectedZona.id : 0, "&page=").concat(this.data.current_page)).then(function (response) {
        // console.log(response.data)
        _this.data = response.data; // if(true) {
        //     this.$emit('clicked', this.data)
        // }
      });
    } // downloadPops() {
    //     this.buttonLoading = 1
    //     axios.get(`/pop/export?core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
    //         responseType: 'blob',
    //     })
    //     .then((response) => {
    //         // console.log(response.data)
    //         const blob = new Blob([response.data], { type: 'application/xls' })
    //         // const objectUrl = window.URL.createObjectURL(blob)
    //         let link = document.createElement('a')
    //         link.href = window.URL.createObjectURL(blob)
    //         link.download = 'test.xlsx'
    //         link.click()
    //         this.buttonLoading = 0
    //     })
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass: "pagination is-centered is-small",
      attrs: { role: "navigation", "aria-label": "pagination" }
    },
    [
      _c(
        "ul",
        { staticClass: "pagination-list" },
        [
          _vm.pagination.current_page == 1
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-previous",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Previous",
                      disabled: ""
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Previous")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pagination.current_page > 1
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-previous",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Previous"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.changePage(_vm.pagination.current_page - 1)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Previous")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.pagesNumber, function(page) {
            return _c("li", [
              _c(
                "a",
                {
                  staticClass: "pagination-link",
                  class:
                    page == _vm.pagination.current_page
                      ? "is-current"
                      : _vm.primaryText,
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changePage(page)
                    }
                  }
                },
                [_vm._v(_vm._s(page))]
              )
            ])
          }),
          _vm._v(" "),
          _vm.pagination.current_page < _vm.pagination.last_page
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-next",
                    attrs: { href: "javascript:void(0)", "aria-label": "Next" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.changePage(_vm.pagination.current_page + 1)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Next Page")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pagination.current_page == _vm.pagination.last_page
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-next",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Next",
                      disabled: ""
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Next Page")]
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c& ***!
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
  return _c("div", [
    _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        {
          staticClass:
            "column is-size-5 has-text-weight-semibold has-text-left",
          class: _vm.primaryText
        },
        [_vm._v("Proyecto Alba")]
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
                _c("abbr", { attrs: { title: "Nombre y dirección del POP" } }, [
                  _vm._v("Nombre / Dirección")
                ])
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
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.data.data, function(item) {
            return _c("tr", { key: item.id, staticClass: "is-size-7" }, [
              _c(
                "td",
                { staticClass: "has-text-left", class: _vm.primaryText },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/pop/" + item.id, target: "_blank" } },
                    [_vm._v(_vm._s(item.sites[0].nem_site))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-left", class: _vm.primaryText },
                [
                  _c("div", [_vm._v(_vm._s(item.nombre))]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(item.direccion))])
                ]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-centered", class: _vm.primaryText },
                [
                  _c(
                    "b-tag",
                    {
                      attrs: {
                        type:
                          _vm.popClassification(item)[0] == 1
                            ? "is-info"
                            : _vm.popClassification(item)[0] == 2
                            ? "is-warning"
                            : _vm.popClassification(item)[0] == 3
                            ? "is-smart"
                            : _vm.popClassification(item)[0] == 4
                            ? "is-success"
                            : "is-link"
                      }
                    },
                    [_vm._v(_vm._s(_vm.popClassification(item)[1]))]
                  )
                ],
                1
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/VuePagination.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/VuePagination.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuePagination.vue?vue&type=template&id=77006965& */ "./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&");
/* harmony import */ var _VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuePagination.vue?vue&type=script&lang=js& */ "./resources/js/components/VuePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VuePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VuePagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/VuePagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VuePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/VuePagination.vue?vue&type=template&id=77006965& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VuePagination.vue?vue&type=template&id=77006965& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/AlbaPopsData.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/dashboard/AlbaPopsData.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbaPopsData.vue?vue&type=template&id=68fc261c& */ "./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c&");
/* harmony import */ var _AlbaPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbaPopsData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlbaPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AlbaPopsData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbaPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlbaPopsData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbaPopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlbaPopsData.vue?vue&type=template&id=68fc261c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AlbaPopsData.vue?vue&type=template&id=68fc261c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbaPopsData_vue_vue_type_template_id_68fc261c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);