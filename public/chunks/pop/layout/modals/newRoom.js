(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/newRoom"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pop', 'user'],
  data: function data() {
    return {
      name: '',
      alias: ''
    };
  },
  computed: {
    toSave: function toSave() {
      return this.name.length;
    }
  },
  methods: {
    newRoom: function newRoom() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'pop_id': this.pop.id,
        'name': this.name,
        'alias': this.alias
      };
      axios.post("/api/rooms", params).then(function (response) {
        console.log(response.data);

        _this.$eventBus.$emit('new-room');

        _this.$parent.close();
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column" },
            [
              _c(
                "b-field",
                { attrs: { label: "Nombre" } },
                [
                  _c("b-input", {
                    attrs: { placeholder: "Nombre de sala", required: "" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
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
                { attrs: { label: "Alias" } },
                [
                  _c("b-input", {
                    attrs: { placeholder: "Alias de la sala (opcional)" },
                    model: {
                      value: _vm.alias,
                      callback: function($$v) {
                        _vm.alias = $$v
                      },
                      expression: "alias"
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
            attrs: { disabled: !_vm.toSave },
            on: {
              click: function($event) {
                return _vm.newRoom()
              }
            }
          },
          [_vm._v("Guardar")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "modal-card-head" }, [
      _c("p", { staticClass: "modal-card-title" }, [_vm._v("Nueva Sala")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewRoom.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNewRoom.vue?vue&type=template&id=58e6b70a& */ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a&");
/* harmony import */ var _ModalNewRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNewRoom.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalNewRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalNewRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalNewRoom.vue?vue&type=template&id=58e6b70a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalNewRoom.vue?vue&type=template&id=58e6b70a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalNewRoom_vue_vue_type_template_id_58e6b70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);