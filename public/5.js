(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['selectedCrm', 'selectedZona', // 'csrf',
  'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'core'],
  data: function data() {
    return {
      crmSelected: this.selectedCrm,
      zonaSelected: this.selectedZona,
      airConditionerData: null,
      total: 0,
      buttonLoading: ''
    };
  },
  created: function created() {
    this.getAirConditionerData();
  },
  mounted: function mounted() {},
  watch: {
    selectedCrm: function selectedCrm(newValue, oldValue) {
      this.crmSelected = newValue;
      this.zonaSelected = null;
      this.getAirConditionerData();
    },
    selectedZona: function selectedZona(newValue, oldValue) {
      this.zonaSelected = newValue;
      this.getAirConditionerData();
    },
    core: function core(newValue, oldValue) {
      this.getAirConditionerData();
    }
  },
  methods: {
    totalAirConditioners: function totalAirConditioners() {
      this.total = 0;
      this.airConditionerData.forEach(this.counter);
    },
    counter: function counter(item, index) {
      this.total = this.total + item.q_air_conditioners;
    },
    getAirConditionerData: function getAirConditionerData() {
      var _this = this;

      if (this.crmSelected == null) {
        axios.get("/api/airConditionerData/".concat(this.core)).then(function (response) {
          _this.airConditionerData = response.data.data;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      } else if (this.zonaSelected == null) {
        axios.get("/api/airConditionerDataCrm/".concat(this.crmSelected.id, "/").concat(this.core)).then(function (response) {
          _this.airConditionerData = response.data.data;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      } else {
        axios.get("/api/airConditionerDataZona/".concat(this.zonaSelected.id, "/").concat(this.core)).then(function (response) {
          console.log(response);
          _this.airConditionerData = response.data.data;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      }
    },
    formSubmit: function formSubmit(e) {
      var _this2 = this;

      // Activate loading button
      this.buttonLoading = 'is-loading';
      e.preventDefault();
      axios({
        url: '/pop/export',
        method: 'POST',
        responseType: 'blob' // headers: {
        //     'Content-Type': 'text/html; charset=utf-8',
        //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        // }

      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'listado_pops.xlsx');
        document.body.appendChild(link);
        link.click(); // Deativate loading button

        _this2.buttonLoading = '';
      })["catch"](function (error) {
        console.log('Error: ' + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            [_vm._v("Aires Acondicionados")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "column is-size-4 has-text-weight-semibold has-text-right",
              class: _vm.primaryText
            },
            [_vm._v(_vm._s(_vm._f("numeral")(this.total, "0,0")))]
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
                      _vm.crmSelected == null
                        ? "CRM"
                        : _vm.zonaSelected == null
                        ? "Zona"
                        : "Comuna"
                    )
                  )
                ]),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-right", class: _vm.secondaryText },
                  [_c("abbr", { attrs: { title: "Fija" } }, [_vm._v("POPs")])]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-right", class: _vm.secondaryText },
                  [_c("abbr", { attrs: { title: "Movil" } }, [_vm._v("Info")])]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "has-text-right", class: _vm.secondaryText },
                  [
                    _c("abbr", { attrs: { title: "Otros" } }, [
                      _vm._v("Lineas")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(this.airConditionerData, function(item) {
                return _c("tr", { staticClass: "is-size-7" }, [
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
                    [_vm._v(_vm._s(_vm._f("numeral")(item.q_pops, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [_vm._v(_vm._s(_vm._f("numeral")(item.q_info, "0,0")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "has-text-right", class: _vm.primaryText },
                    [
                      _vm._v(
                        _vm._s(
                          _vm._f("numeral")(item.q_air_conditioners, "0,0")
                        )
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _c("form", { on: { submit: _vm.formSubmit } }, [
          _c("div", { staticClass: "field has-addons" }, [
            _c("p", { staticClass: "control" }, [
              _c(
                "button",
                {
                  staticClass: "button is-small is-link",
                  class: _vm.buttonLoading,
                  attrs: { type: "submit" }
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: "download" } }),
                  _vm._v(
                    " \n                          Listado de POPs\n                    "
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "control" }, [
              _c(
                "a",
                {
                  staticClass: "button is-small is-link tooltip",
                  attrs: {
                    href: "/pop",
                    type: "button",
                    "data-tooltip": "Tooltip Text"
                  }
                },
                [_c("font-awesome-icon", { attrs: { icon: "bars" } })],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/AirConditionersData.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/AirConditionersData.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirConditionersData.vue?vue&type=template&id=42cd9dc9& */ "./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9&");
/* harmony import */ var _AirConditionersData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AirConditionersData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AirConditionersData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AirConditionersData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirConditionersData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AirConditionersData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirConditionersData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AirConditionersData.vue?vue&type=template&id=42cd9dc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AirConditionersData.vue?vue&type=template&id=42cd9dc9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AirConditionersData_vue_vue_type_template_id_42cd9dc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);