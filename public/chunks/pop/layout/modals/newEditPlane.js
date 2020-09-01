(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/newEditPlane"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
//
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
      float_tension: this.plane.float_tension,
      current: this.plane.current,
      recharge_factor: this.plane.recharge_factor
    };
  },
  computed: {
    toSave: function toSave() {
      return this.float_tension != this.plane.float_tension || this.current != this.plane.current || this.recharge_factor != this.plane.recharge_factor ? true : false;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    updatePlane: function updatePlane() {
      var _this = this;

      if (this.toSave) {
        var params = {
          'api_token': this.user.api_token,
          'float_tension': this.float_tension,
          'current': this.current,
          'recharge_factor': this.recharge_factor
        };
        axios.put("/api/planes/".concat(plane.id), params).then(function (response) {
          console.log(response.data);

          _this.$eventBus.$emit('new-plane-updated');
        });
      }
    } // confirmDelete(powerRectifier) {
    //     this.$buefy.dialog.confirm({
    //         message: 'Desea eliminar la planta rectificadora del POP?',
    //         type: 'is-danger',
    //         onConfirm: () => {
    //             axios.delete(`/api/powerRectifiers/${powerRectifier.id}?api_token=${this.user.api_token}`)
    //             .then(response => {
    //                 this.getPopPowerRectifiersWithoutRoom()
    //             })
    //         }
    //     })
    // },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _vm._v("Editar Plano " + _vm._s(_vm.plane.id))
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column" },
            [
              _c(
                "b-field",
                { attrs: { label: "Capacidad" } },
                [
                  _c("b-input", {
                    attrs: {
                      type: "float_tension",
                      value: _vm.float_tension,
                      placeholder: "Capacidad",
                      required: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column" },
            [
              _c(
                "b-field",
                { attrs: { label: "Cantidad" } },
                [
                  _c("b-input", {
                    attrs: {
                      type: "quantity_group_1",
                      value: _vm.current,
                      placeholder: "Cantidad",
                      required: ""
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column" },
            [
              _c(
                "b-field",
                { attrs: { label: "Capacidad" } },
                [
                  _c("b-input", {
                    attrs: {
                      type: "float_tension",
                      value: _vm.recharge_factor,
                      placeholder: "Capacidad",
                      required: ""
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
            attrs: { disabled: _vm.toSave ? true : false }
          },
          [_vm._v("Guardar")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalEditPlane.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalEditPlane.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditPlane.vue?vue&type=template&id=69529a5c& */ "./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c&");
/* harmony import */ var _ModalEditPlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditPlane.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalEditPlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalEditPlane.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditPlane.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPlane_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditPlane.vue?vue&type=template&id=69529a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalEditPlane.vue?vue&type=template&id=69529a5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditPlane_vue_vue_type_template_id_69529a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);