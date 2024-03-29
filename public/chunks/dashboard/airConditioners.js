(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/dashboard/airConditioners"],{

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
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'selectedCrm', 'selectedZona', // 'csrf',
  'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'core'],
  data: function data() {
    return {
      crmSelected: this.selectedCrm,
      zonaSelected: this.selectedZona,
      airConditionerData: null,
      total: 0,
      buttonLoading: '',
      isLoading: false
    };
  },
  created: function created() {
    this.getAirConditionerData();
  },
  computed: {
    middleFileName: function middleFileName() {
      return this.selectedZona ? "Zona ".concat(this.selectedZona.nombre_zona, " - ") : this.selectedCrm ? "CRM ".concat(this.selectedCrm.nombre_crm, " - ") : '';
    }
  },
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
          _this.airConditionerData = response.data.airConditioner;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      } else if (this.zonaSelected == null) {
        axios.get("/api/airConditionerDataCrm/".concat(this.crmSelected.id, "/").concat(this.core)).then(function (response) {
          _this.airConditionerData = response.data.airConditioner;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      } else {
        axios.get("/api/airConditionerDataZona/".concat(this.zonaSelected.id, "/").concat(this.core)).then(function (response) {
          console.log(response);
          _this.airConditionerData = response.data.airConditioner;

          _this.totalAirConditioners();
        })["catch"](function () {
          console.log('handle server error from here');
        });
      }
    },
    // formSubmit(e) {
    //     // Activate loading button
    //     this.buttonLoading = 'is-loading'
    //     e.preventDefault()
    //     axios({
    //         url: '/pop/export',
    //         method: 'POST',
    //         responseType: 'blob',
    //         // headers: {
    //         //     'Content-Type': 'text/html; charset=utf-8',
    //         //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //         // }
    //     })
    //     .then((response) => {
    //         const url = window.URL.createObjectURL(new Blob([response.data]))
    //         const link = document.createElement('a')
    //         link.href = url
    //         link.setAttribute('download', 'listado_pops.xlsx')
    //         document.body.appendChild(link)
    //         link.click()
    //         // Deativate loading button
    //         this.buttonLoading = ''
    //     })
    //     .catch((error) => {
    //         console.log('Error: ' + error);
    //     });
    // }
    downloadAirConditioners: function downloadAirConditioners() {
      var _this2 = this;

      this.isLoading = true;
      var params = {
        'core': this.core,
        'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
        'zona_id': this.selectedZona ? this.selectedZona.id : 0
      };
      axios.get('/api/airConditionersExport', {
        params: params,
        responseType: 'arraybuffer'
      }).then(function (response) {
        console.log(response.data);
        var blob = new Blob([response.data], {
          type: 'application/xlsx'
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
        link.download = "Listado Aires Acondicionados - ".concat(_this2.middleFileName).concat(moment().format('YYYY-MM-DD hh:mm:ss'), ".xlsx");
        link.click(); // setTimeout(function () {
        //     // For Firefox it is necessary to delay revoking the ObjectURL
        //     window.URL.revokeObjectURL(data)
        // }, 100)

        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: 'La planilla se ha descargado exitosamente.',
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
  return _c("div", { staticClass: "column is-4" }, [
    _c("article", { staticClass: "tile is-child box is-bold has-background" }, [
      _c(
        "div",
        { staticClass: "is-box-background is-transparent-light" },
        [
          _c("font-awesome-icon", {
            staticClass: "is-pulled-right",
            attrs: { icon: ["fas", "wind"], size: "10x" }
          })
        ],
        1
      ),
      _vm._v(" "),
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
        "div",
        { staticClass: "columns is-multiline" },
        _vm._l(this.airConditionerData, function(item) {
          return _c(
            "div",
            {
              key: item.id,
              staticClass: "column is-6",
              class: _vm.primaryText
            },
            [
              _c("div", { staticClass: "is-size-4 has-text-weight-normal" }, [
                _vm._v(
                  _vm._s(_vm._f("numeral")(item.q_air_conditioners, "0,0"))
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-size-7" }, [
                _vm._v(_vm._s(item.nombre))
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "tile is-child box is-bold is-white",
          staticStyle: { position: "relative", border: "solid 1px #eee" },
          on: { click: _vm.downloadAirConditioners }
        },
        [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column is-1 has-text-centered" },
              [
                _c("font-awesome-icon", {
                  staticClass: "has-text-eco",
                  attrs: { icon: ["fas", "download"] }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
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
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column" }, [
      _c(
        "div",
        {
          staticClass: "is-size-4 has-text-weight-bold",
          staticStyle: { "margin-top": "2px" }
        },
        [
          _c("p", { staticClass: "is-size-6 has-text-weight-semibold" }, [
            _vm._v("Descargar listado de Aires Acondicionados")
          ])
        ]
      )
    ])
  }
]
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