(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/dashboard/popsData"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
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
  props: ['selectedCrm', 'selectedZona', 'core', 'primaryText', 'secondaryText', 'last_updated'],
  data: function data() {
    return {
      popsData: [],
      buttonLoading: 0,
      isLoading: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getData();
    this.isLoading = true;
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
    totalOpto: function totalOpto() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.opto;
      });
      return counter;
    },
    totalRadio: function totalRadio() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.radio;
      });
      return counter;
    },
    totalRepetidor: function totalRepetidor() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.repetidor;
      });
      return counter;
    },
    totalIndoor: function totalIndoor() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.indoor;
      });
      return counter;
    },
    totalOutdoor: function totalOutdoor() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.outdoor;
      });
      return counter;
    },
    totalPoleSite: function totalPoleSite() {
      var counter = 0;
      this.popsData.forEach(function (element) {
        return counter = counter + element.pole_site;
      });
      return counter;
    },
    totalPops: function totalPops() {
      return this.totalOpto + this.totalRadio + this.totalRepetidor + this.totalIndoor + this.totalOutdoor + this.totalPoleSite;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      // Si no hay un CRM seleccionado
      if (!this.selectedCrm) {
        axios.get("/api/popData?core=".concat(this.core)).then(function (response) {
          _this.popsData = response.data.pop;
          _this.isLoading = false; // this.$eventBus.$emit('graphData', this.popsData)
        });
      } //Si hay un CRM seleccionado, pero no hay zona seleccionada
      else if (!this.selectedZona) {
        axios.get("/api/popDataCrm?crm_id=".concat(this.selectedCrm.id, "&core=").concat(this.core)).then(function (response) {
          _this.popsData = response.data.pop;
          _this.isLoading = false; // this.$eventBus.$emit('graphData', this.popsData)
        });
      } // Si hay una zona seleccionada
      else {
        axios.get("/api/popDataZona?zona_id=".concat(this.selectedZona.id, "&core=").concat(this.core)).then(function (response) {
          _this.popsData = response.data.pop;
          _this.isLoading = false; // this.$eventBus.$emit('graphData', this.popsData)
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          {
            staticClass:
              "column is-size-5 has-text-weight-semibold has-text-left",
            class: _vm.primaryText
          },
          [_vm._v("POP")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "column is-size-4 has-text-weight-semibold has-text-right",
            class: _vm.primaryText
          },
          [_vm._v(_vm._s(_vm._f("numeral")(this.totalPops, "0,0")))]
        )
      ]),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table is-fullwidth",
          staticStyle: { "background-color": "rgba(0,0,0,0)" }
        },
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
                  _c("abbr", { attrs: { title: "Opto Estación" } }, [
                    _vm._v("Opto Estación")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [
                  _c("abbr", { attrs: { title: "Radio Estación" } }, [
                    _vm._v("Radio Estación")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [
                  _c("abbr", { attrs: { title: "Repetidor" } }, [
                    _vm._v("Repetidor")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [_c("abbr", { attrs: { title: "Indoor" } }, [_vm._v("Indoor")])]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [
                  _c("abbr", { attrs: { title: "Outdoor" } }, [
                    _vm._v("Outdoor")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [
                  _c("abbr", { attrs: { title: "Pole Site" } }, [
                    _vm._v("Pole Site")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "has-text-right", class: _vm.secondaryText },
                [_c("abbr", { attrs: { title: "Total" } }, [_vm._v("Total")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.popsData, function(item) {
                return _c("tr", { key: item.id, staticClass: "is-size-7" }, [
                  _c("td", [
                    _c(
                      "a",
                      {
                        staticClass: "has-text-weight-bold",
                        class: _vm.secondaryText,
                        attrs: { href: "", title: "CRM Norte" }
                      },
                      [_vm._v(_vm._s(item.nombre))]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.opto, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.radio, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.repetidor, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.indoor, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.outdoor, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.pole_site, "0,0")))]
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
                            item.opto +
                              item.radio +
                              item.repetidor +
                              item.indoor +
                              item.outdoor +
                              item.pole_site,
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
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalOpto, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalRadio, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [
                    _vm._v(
                      _vm._s(_vm._f("numeral")(this.totalRepetidor, "0,0"))
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalIndoor, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalOutdoor, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalPoleSite, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(this.totalPops, "0,0")))]
                )
              ])
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-right" }, [
          _c(
            "div",
            {
              staticClass: "is-size-7 has-text-right",
              class: _vm.secondaryText,
              staticStyle: { "margin-top": "10px" }
            },
            [
              _vm._v(
                "\n                Ultima actualización: " +
                  _vm._s(_vm.last_updated) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("b-loading", {
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/PopsData.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/dashboard/PopsData.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopsData.vue?vue&type=template&id=31b5635c& */ "./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c&");
/* harmony import */ var _PopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopsData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/PopsData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopsData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PopsData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopsData.vue?vue&type=template&id=31b5635c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PopsData.vue?vue&type=template&id=31b5635c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopsData_vue_vue_type_template_id_31b5635c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);