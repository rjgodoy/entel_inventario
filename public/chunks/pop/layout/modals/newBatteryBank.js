(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/newBatteryBank"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['plane', 'user'],
  data: function data() {
    return {
      batteryBankBrands: Array,
      battery_bank_brand_id: null,
      capacity: null
    };
  },
  mounted: function mounted() {
    this.getBatteryBankBrands();
  },
  methods: {
    getBatteryBankBrands: function getBatteryBankBrands() {
      var _this = this;

      axios.get("/api/batteryBankBrands").then(function (response) {
        _this.batteryBankBrands = response.data.batteryBankBrands;
      });
    },
    newBatteryBank: function newBatteryBank() {
      var _this2 = this;

      var params = {
        'plane_id': this.plane.id,
        'battery_bank_brand_id': this.battery_bank_brand_id,
        'capacity': parseFloat(this.capacity)
      };
      axios.post("/api/batteryBanks", params).then(function (response) {
        console.log(response.data); // this.getPopPowerRectifiersWithoutRoom()

        _this2.$eventBus.$emit('new-battery-bank');

        _this2.$parent.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal-card" }, [
    _c("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [
      _c("header", { staticClass: "modal-card-head" }, [
        _c("p", { staticClass: "modal-card-title" }, [
          _vm._v("Registrar Banco Baterías " + _vm._s(_vm.plane.id))
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [
        _c("div", { staticClass: "field columns" }, [
          _c(
            "div",
            { staticClass: "column is-5" },
            [
              _c(
                "b-field",
                { attrs: { label: "Modelo" } },
                [
                  _c(
                    "b-select",
                    {
                      attrs: { placeholder: "Modelo" },
                      model: {
                        value: _vm.battery_bank_brand_id,
                        callback: function($$v) {
                          _vm.battery_bank_brand_id = $$v
                        },
                        expression: "battery_bank_brand_id"
                      }
                    },
                    _vm._l(_vm.batteryBankBrands, function(option) {
                      return _c(
                        "option",
                        { key: option.id, domProps: { value: option.id } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(option.brand) +
                              " " +
                              _vm._s(option.model) +
                              "\n                            "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column is-5" },
            [
              _c(
                "b-field",
                { attrs: { label: "Capacidad" } },
                [
                  _c("b-input", {
                    attrs: { placeholder: "Capacidad" },
                    model: {
                      value: _vm.capacity,
                      callback: function($$v) {
                        _vm.capacity = $$v
                      },
                      expression: "capacity"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
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
          [_vm._v("Close")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button is-link",
            on: {
              click: function($event) {
                return _vm.newBatteryBank()
              }
            }
          },
          [_vm._v("Registrar")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNewBatteryBank.vue?vue&type=template&id=7da7b079& */ "./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079&");
/* harmony import */ var _ModalNewBatteryBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNewBatteryBank.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalNewBatteryBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewBatteryBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewBatteryBank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewBatteryBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewBatteryBank.vue?vue&type=template&id=7da7b079& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewBatteryBank.vue?vue&type=template&id=7da7b079&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewBatteryBank_vue_vue_type_template_id_7da7b079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);