(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/distribution"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//
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
    GeneratorSet: function GeneratorSet() {
      return __webpack_require__.e(/*! import() | chunks/pop/power/generatorSet */ "chunks/pop/power/generatorSet").then(__webpack_require__.bind(null, /*! ../../../pop/power/GeneratorSet */ "./resources/js/components/pop/power/GeneratorSet.vue"));
    }
  },
  props: ['canEdit', 'sala', 'user'],
  data: function data() {
    return {
      newTotalCapacity: this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0,
      newUsedCapacity: this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0,
      isEditMode: false
    };
  },
  computed: {
    totalCapacity: function totalCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0;
    },
    usedCapacity: function usedCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0;
    },
    availableCapacity: function availableCapacity() {
      return this.newTotalCapacity - this.newUsedCapacity;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    saveChanges: function saveChanges() {
      var _this = this;

      if (!this.isEditMode && this.totalCapacity != this.newTotalCapacity || this.usedCapacity != this.newUsedCapacity) {
        var params = {
          'api_token': this.user.api_token,
          'user_id': this.user.id,
          'total_capacity': parseFloat(this.newTotalCapacity),
          'used_capacity': parseFloat(this.newUsedCapacity)
        }; // console.log(params)

        axios.post("/api/createRoomDistribution/".concat(this.sala.id), params).then(function (response) {
          console.log(response.data);

          _this.$eventBus.$emit('room-distribution');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "modal-card-body",
        staticStyle: { background: "rgba(255,255,255,0)" }
      },
      [
        _c("section", { staticClass: "section is-paddingless" }, [
          _c("div", { staticClass: "box" }, [
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "has-text-centered" },
                  [
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v("Capacidad Total")
                    ]),
                    _vm._v(" "),
                    !_vm.isEditMode
                      ? _c(
                          "div",
                          { staticClass: "has-text-weight-semibold is-size-5" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("numeral")(_vm.newTotalCapacity, 0, 0)
                              ) + " "
                            ),
                            _c("span", { staticClass: "is-size-6" }, [
                              _vm._v("kW")
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEditMode
                      ? _c("b-input", {
                          staticClass: "has-text-weight-bold is-size-5",
                          attrs: { type: "number" },
                          model: {
                            value: _vm.newTotalCapacity,
                            callback: function($$v) {
                              _vm.newTotalCapacity = $$v
                            },
                            expression: "newTotalCapacity"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "has-text-centered" },
                  [
                    _c("div", { staticClass: "is-size-6" }, [
                      _vm._v("Capacidad Usada")
                    ]),
                    _vm._v(" "),
                    !_vm.isEditMode
                      ? _c(
                          "div",
                          { staticClass: "has-text-weight-semibold is-size-5" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("numeral")(_vm.newUsedCapacity, 0, 0)
                              ) + " "
                            ),
                            _c("span", { staticClass: "is-size-6" }, [
                              _vm._v("kW")
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEditMode
                      ? _c("b-input", {
                          staticClass: "has-text-weight-bold is-size-5",
                          attrs: { type: "number" },
                          model: {
                            value: _vm.newUsedCapacity,
                            callback: function($$v) {
                              _vm.newUsedCapacity = $$v
                            },
                            expression: "newUsedCapacity"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("div", { staticClass: "is-size-6" }, [
                    _vm._v("Capacidad Disponible")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-5" },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(
                            _vm._f("numeral")(_vm.availableCapacity, 0, 0)
                          ) +
                          " "
                      ),
                      _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.canEdit
              ? _c(
                  "div",
                  { staticClass: "field has-text-centered" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          type: _vm.isEditMode
                            ? "is-info"
                            : "is-link is-outlined",
                          size: "is-small"
                        },
                        on: {
                          click: function($event) {
                            _vm.isEditMode = !_vm.isEditMode
                            _vm.saveChanges()
                          }
                        }
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fas", "edit"] }
                        }),
                        _vm._v(
                          "\n                          " +
                            _vm._s(
                              _vm.isEditMode
                                ? "Modo Edición"
                                : "Editar Distribución de Sala"
                            ) +
                            "\n                    "
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      {
        staticClass: "modal-card-head has-text-centered",
        staticStyle: { background: "rgba(255,255,255,0)" }
      },
      [
        _c(
          "p",
          {
            staticClass: "modal-card-title has-text-white has-text-weight-bold"
          },
          [_vm._v("DISTRIBUCION")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalDistribution.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalDistribution.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDistribution.vue?vue&type=template&id=17071958& */ "./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958&");
/* harmony import */ var _ModalDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDistribution.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalDistribution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalDistribution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalDistribution.vue?vue&type=template&id=17071958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalDistribution.vue?vue&type=template&id=17071958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalDistribution_vue_vue_type_template_id_17071958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);