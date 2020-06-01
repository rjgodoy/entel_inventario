(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/modals/editParameter"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pop', 'site', 'user', 'parameter'],
  data: function data() {
    return {
      value: null,
      isFetching: false,
      text: '',
      page: 1,
      totalPages: 1,
      parameters: []
    };
  },
  computed: {
    itemName: function itemName() {
      return this.site ? 'site' : 'pop';
    },
    itemValue: function itemValue() {
      return this.site ? this.site : this.pop;
    },
    parameterName: function parameterName() {
      var arr = this.parameter.split("_");
      var str = '';

      for (var i = 0; i < arr.length - 1; i++) {
        str = str == '' ? arr[i] : str + '_' + arr[i];
      }

      return str;
    }
  },
  mounted: function mounted() {
    console.log(this.parameterName);
    this.getParameters();
  },
  methods: {
    getParameters: function getParameters() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'parameter': this.parameter
      };
      axios.get("/api/".concat(this.itemName, "Parameters"), {
        params: params
      }).then(function (response) {
        // console.log(response.data)
        _this.parameters = response.data.data;
      });
    },
    updateParameter: function updateParameter() {
      var _this2 = this;

      var params = {
        'api_token': this.user.api_token,
        'parameter': this.parameter,
        'value': this.value,
        'user_id': this.user.id
      };
      axios.put("/api/".concat(this.itemName, "/").concat(this.itemValue.id), params).then(function (response) {
        console.log(response);

        _this2.$buefy.toast.open({
          message: 'Parámetro actualizado exitosamente.',
          type: 'is-success',
          duration: 3000
        });
      });
      this.$parent.close();
      this.$eventBus.$emit('parameter-updated');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802& ***!
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
  return _c(
    "div",
    { staticClass: "modal-card", staticStyle: { width: "500px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [
        _c(
          "div",
          {
            staticClass: "container",
            staticStyle: { width: "50%", "margin-top": "30px" }
          },
          [
            _c("p", { staticClass: "content" }, [
              _c("b", [_vm._v("Selected:")]),
              _vm._v(" " + _vm._s(_vm.value))
            ]),
            _vm._v(" "),
            _c(
              "b-select",
              {
                attrs: { placeholder: "Select a name" },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              },
              _vm._l(_vm.parameters, function(option) {
                return _c(
                  "option",
                  { key: option.id, domProps: { value: option.id } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          option[_vm.parameterName]
                            ? option[_vm.parameterName]
                            : option.type
                        ) +
                        "\n                "
                    )
                  ]
                )
              }),
              0
            )
          ],
          1
        )
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
          [_vm._v("Cerrar")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button is-link", on: { click: _vm.updateParameter } },
          [_vm._v("Actualizar")]
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
        _vm._v("Editar Parámetro")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/modals/EditParameter.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pop/modals/EditParameter.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditParameter.vue?vue&type=template&id=b5d93802& */ "./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802&");
/* harmony import */ var _EditParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditParameter.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/modals/EditParameter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditParameter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/modals/EditParameter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditParameter.vue?vue&type=template&id=b5d93802& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/modals/EditParameter.vue?vue&type=template&id=b5d93802&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditParameter_vue_vue_type_template_id_b5d93802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);