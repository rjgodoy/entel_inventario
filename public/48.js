(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
  components: {},
  props: ['user', 'pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      comsites: []
    };
  },
  mounted: function mounted() {
    this.getComsite();
  },
  methods: {
    // APIs
    getComsite: function getComsite() {
      var _this = this;

      axios.get("/api/comsites/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        _this.comsites = response.data.data;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Comsite: ' + error);
      });
    },
    dateMoment: function dateMoment(dateToFormat) {
      var date = moment(dateToFormat).format('MMMM D YYYY');
      moment.locale('es');
      return date;
    },
    dateFromNow: function dateFromNow(start) {
      var date = moment(start, "YYYY-MM-DD").fromNow();
      moment.locale('es');
      return date;
    },
    percentDate: function percentDate(start, end) {
      var s = moment(start, 'YYYY-MM-DD');
      var e = moment(end, 'YYYY-MM-DD');
      var totalTime = e.diff(s, 'hours', true);
      var dateFromStart = moment().diff(s, 'hours', true);
      var percent = dateFromStart * 100 / totalTime;
      return -percent;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "section",
    {
      staticClass: "section container",
      staticStyle: { "min-height": "500px" }
    },
    [
      _vm._l(_vm.comsites, function(data) {
        return _vm.comsites
          ? _c(
              "div",
              {
                staticClass: "box has-backgroung-success has-text-weight-light"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "has-text-weight-semibold is-size-4 has-text-centered"
                  },
                  [_vm._v("Contrato #" + _vm._s(data.id))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column" }, [
                    _c("div", [_vm._v(_vm._s(data.operador))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(data.propietario))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(data.celular_propietario) +
                          " / " +
                          _vm._s(data.telefono_propietario)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(
                          data.rol_propiedad
                            ? data.rol_propiedad
                            : "Sin daots de ROL"
                        )
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                data.started_at != "1969-12-31"
                  ? _c("div", { staticClass: "columns" }, [
                      _c(
                        "div",
                        { staticClass: "column has-text-right is-one-fifth" },
                        [
                          _c("div", [
                            _vm._v(_vm._s(_vm.dateMoment(data.started_at)))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "has-text-weight-normal is-size-7" },
                            [_vm._v("Fecha inicio")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "column is-three-fifths" },
                        [
                          _c("b-progress", {
                            attrs: {
                              type: "is-link",
                              value: _vm.percentDate(
                                data.started_at,
                                data.ended_at
                              ),
                              "show-value": "",
                              format: "percent",
                              size: "is-medium"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "column has-text-left" }, [
                        _c("div", [
                          _vm._v(_vm._s(_vm.dateMoment(data.ended_at)))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "has-text-weight-normal is-size-7" },
                          [_vm._v("Fecha término")]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                data.started_at != "1969-12-31"
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "has-text-centered has-text-weight-normal is-size-6",
                        staticStyle: { "margin-top": "-20px" }
                      },
                      [_vm._v(_vm._s(_vm.dateFromNow(data.started_at)))]
                    )
                  : _vm._e()
              ]
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.comsites.length == 0
        ? _c("div", { staticClass: "box" }, [
            _c("div", {}, [
              _vm._v(
                "\n            No hay contratos en Comsite asociados a este POP.\n        "
              )
            ])
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-one-fifth" }, [
      _c("div", { staticClass: "has-text-weight-normal" }, [
        _vm._v("Operador")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-weight-normal" }, [
        _vm._v("Propietario")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-weight-normal" }, [
        _vm._v("Celular/Telefono propietario")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "has-text-weight-normal" }, [
        _vm._v("ROL propiedad")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/Comsite.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pops/Comsite.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comsite.vue?vue&type=template&id=60dc64b4& */ "./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4&");
/* harmony import */ var _Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comsite.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Comsite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comsite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Comsite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comsite.vue?vue&type=template&id=60dc64b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Comsite.vue?vue&type=template&id=60dc64b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comsite_vue_vue_type_template_id_60dc64b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);