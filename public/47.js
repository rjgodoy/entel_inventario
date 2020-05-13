(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'selectedCrm', 'selectedZona', 'core', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'last_updated'],
  data: function data() {
    return {
      sitesData: [],
      buttonLoading: 0
    };
  },
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {},
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
    totalFijo: function totalFijo() {
      var counter = 0;
      this.sitesData.forEach(function (element) {
        return counter = counter + element.fijo;
      });
      return counter;
    },
    totalMovil: function totalMovil() {
      var counter = 0;
      this.sitesData.forEach(function (element) {
        return counter = counter + element.movil;
      });
      return counter;
    },
    totalSwitch: function totalSwitch() {
      var counter = 0;
      this.sitesData.forEach(function (element) {
        return counter = counter + element["switch"];
      });
      return counter;
    },
    totalPhone: function totalPhone() {
      var counter = 0;
      this.sitesData.forEach(function (element) {
        return counter = counter + element.phone;
      });
      return counter;
    },
    totalSites: function totalSites() {
      return this.totalFijo + this.totalMovil + this.totalSwitch + this.totalPhone;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      // Si no hay un CRM seleccionado
      if (!this.selectedCrm) {
        axios.get("/api/sitesData?api_token=".concat(this.user.api_token, "&core=").concat(this.core)).then(function (response) {
          _this.sitesData = response.data.data; // this.$eventBus.$emit('getSitesData', this.sitesData)
        })["finally"](function () {// this.$eventBus.$emit('getSitesData', this.sitesData)
        });
      } //Si hay un CRM seleccionado, pero no hay zona seleccionada
      else if (!this.selectedZona) {
          axios.get("/api/sitesDataCrm?api_token=".concat(this.user.api_token, "&crm_id=").concat(this.selectedCrm.id, "&core=").concat(this.core)).then(function (response) {
            _this.sitesData = response.data.data; // this.$eventBus.$emit('getSitesData', this.sitesData)
          })["finally"](function () {// this.$eventBus.$emit('getSitesData', this.sitesData)
          });
        } // Si hay una zona seleccionada
        else {
            axios.get("/api/sitesDataZona?api_token=".concat(this.user.api_token, "&zona_id=").concat(this.selectedZona.id, "&core=").concat(this.core)).then(function (response) {
              _this.sitesData = response.data.data; // this.$eventBus.$emit('getSitesData', this.sitesData)
            })["finally"](function () {// this.$eventBus.$emit('getSitesData', this.sitesData)
            });
          }
    } // downloadSites() {
    //     this.buttonLoading = 1
    //     axios.get(`/pop/export?api_token=${this.user.api_token}&core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
    //         responseType: 'blob',
    //     })
    //     .then((response) => {
    //         console.log(response.data)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        [_vm._v("Sitios")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column is-size-4 has-text-weight-semibold has-text-right",
          class: _vm.primaryText
        },
        [_vm._v(_vm._s(_vm._f("numeral")(this.totalSites, "0,0")))]
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
              [_c("abbr", { attrs: { title: "Fijo" } }, [_vm._v("Fijo")])]
            ),
            _vm._v(" "),
            _c(
              "th",
              { staticClass: "has-text-right", class: _vm.secondaryText },
              [_c("abbr", { attrs: { title: "Móvil" } }, [_vm._v("Móvil")])]
            ),
            _vm._v(" "),
            _c(
              "th",
              { staticClass: "has-text-right", class: _vm.secondaryText },
              [_c("abbr", { attrs: { title: "Switch" } }, [_vm._v("Switch")])]
            ),
            _vm._v(" "),
            _c(
              "th",
              { staticClass: "has-text-right", class: _vm.secondaryText },
              [_c("abbr", { attrs: { title: "Phone" } }, [_vm._v("Phone")])]
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
            _vm._l(_vm.sitesData, function(item) {
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
                  [_vm._v(_vm._s(_vm._f("numeral")(item.fijo, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(item.movil, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(item.switch, "0,0")))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "has-text-right", class: _vm.primaryText },
                  [_vm._v(_vm._s(_vm._f("numeral")(item.phone, "0,0")))]
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
                          item.fijo + item.movil + item.switch + item.phone,
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
                [_vm._v(_vm._s(_vm._f("numeral")(this.totalFijo, "0,0")))]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-right", class: _vm.primaryText },
                [_vm._v(_vm._s(_vm._f("numeral")(this.totalMovil, "0,0")))]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-right", class: _vm.primaryText },
                [_vm._v(_vm._s(_vm._f("numeral")(this.totalSwitch, "0,0")))]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-right", class: _vm.primaryText },
                [_vm._v(_vm._s(_vm._f("numeral")(this.totalPhone, "0,0")))]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "has-text-right", class: _vm.primaryText },
                [_vm._v(_vm._s(_vm._f("numeral")(this.totalSites, "0,0")))]
              )
            ])
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/SitesData.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/SitesData.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SitesData.vue?vue&type=template&id=3c843e80& */ "./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80&");
/* harmony import */ var _SitesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitesData.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SitesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SitesData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SitesData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SitesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SitesData.vue?vue&type=template&id=3c843e80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SitesData.vue?vue&type=template&id=3c843e80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SitesData_vue_vue_type_template_id_3c843e80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);