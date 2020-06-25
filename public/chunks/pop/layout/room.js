(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/room"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['room', 'sala', 'can', 'user', 'pop'],
  data: function data() {
    return {
      powerRectifiers: Array,
      airConditioners: Array,
      powerRectifierSelected: null,
      airConditionerSelected: null,
      canEditPowerRectifiers: null,
      canEditAirConditioners: null,
      isPowerRectifierModalActive: false,
      isAirConditionerModalActive: false
    };
  },
  mounted: function mounted() {
    this.getAirConditioners();
    this.getPowerRectifiers();
    this.$emit('room-distribution', this.capacity);
  },
  computed: {
    totalCapacity: function totalCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0;
    },
    usedCapacity: function usedCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0;
    },
    availableCapacity: function availableCapacity() {
      return this.totalCapacity - this.usedCapacity;
    },
    capacity: function capacity() {
      return {
        'totalCapacity': this.totalCapacity,
        'usedCapacity': this.usedCapacity,
        'availableCapacity': this.availableCapacity
      };
    },
    detectionType: function detectionType() {
      return this.sala.fire_detections ? this.sala.fire_detections[0].fire_detection_type.type : 'No tiene';
    },
    extintionType: function extintionType() {
      return this.sala.fire_detections && this.sala.fire_detections[0].fire_extintion_type ? this.sala.fire_detections[0].fire_extintion_type.type : 'No tiene';
    }
  },
  watch: {
    room: function room(val) {//     // console.log(val)
    } // maintainer_id(val) {
    //     this.maintainers.forEach(item => {
    //         if(item.id == val) {
    //             this.currentMaintainerName = item.name
    //         }
    //     }) 
    // },
    // responsable_area_id(val) {
    //     this.responsableAreas.forEach(item => {
    //         if(item.id == val) {
    //             this.currentResponsableArea = item.area
    //         }
    //     }) 
    // },
    // topology_id(val) {
    //     this.topologyTypes.forEach(item => {
    //         if(item.id == val) {
    //             this.currentTopologyType = item.type
    //         }
    //     }) 
    // },
    // level_id(val) {
    //     this.levelTypes.forEach(item => {
    //         if(item.id == val) {
    //             this.currentLevelType = item.type
    //         }
    //     }) 
    // }

  },
  methods: {
    getPowerRectifiers: function getPowerRectifiers() {
      var _this = this;

      axios.get("/api/powerRectifiers/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this.powerRectifiers = response.data.powerRectifiers;
        _this.canEditPowerRectifiers = response.data.can;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getAirConditioners: function getAirConditioners() {
      var _this2 = this;

      axios.get("/api/airConditioners/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this2.airConditioners = response.data.airConditioner;
        _this2.canEditAirConditioners = response.data.can;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    // getMaintainers() {
    //     axios.get(`/api/telecomCompanies?api_token=${this.user.api_token}`).then(response => {
    //         // console.log(response.data.telecomCompanies)
    //         this.maintainers = response.data.telecomCompanies
    //         if(response.data.telecomCompanies) {
    //             this.maintainers.forEach(item => {
    //                 if(item.id == this.maintainer_id) {
    //                     this.currentMaintainerName = item.name
    //                 }
    //             }) 
    //         }
    //     })
    // },
    // getResponsableAreas() {
    //     axios.get(`/api/generatorSetResponsableAreas?api_token=${this.user.api_token}`).then(response => {
    //         // console.log(response.data.responsableAreas)
    //         this.responsableAreas = response.data.responsableAreas
    //         if(response.data.responsableAreas) {
    //             this.responsableAreas.forEach(item => {
    //                 if(item.id == this.responsable_area_id) {
    //                     this.currentResponsableArea = item.area
    //                 }
    //             })
    //         } 
    //     })
    // },
    // getTopologyTypes() {
    //     axios.get(`/api/generatorSetTopologyTypes?api_token=${this.user.api_token}`).then(response => {
    //         // console.log(response.data.telecomCompanies)
    //         this.topologyTypes = response.data.topologyTypes
    //         if(response.data.topologyTypes) {
    //             this.topologyTypes.forEach(item => {
    //                 if(item.id == this.topology_id) {
    //                     this.currentTopologyType = item.type
    //                 }
    //             }) 
    //         }
    //     })
    // },
    // getLevelTypes() {
    //     axios.get(`/api/generatorSetLevelTypes?api_token=${this.user.api_token}`).then(response => {
    //         // console.log(response.data.telecomCompanies)
    //         this.levelTypes = response.data.levelTypes
    //         if(response.data.levelTypes) {
    //             this.levelTypes.forEach(item => {
    //                 if(item.id == this.level_id) {
    //                     this.currentLevelType = item.type
    //                 }
    //             }) 
    //         }
    //     })
    // },
    // saveChanges() {
    //     if (!this.isEditMode && 
    //         this.primeCapacity != this.newPrimeCapacity || 
    //         this.usedCapacity != this.newUsedCapacity || 
    //         this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id ||
    //         this.generatorSet.generator_set_topology_type_id != this.topology_id ||
    //         this.generatorSet.generator_set_level_type_id != this.level_id ||
    //         (this.currentGeneratorResponsableAreaId != this.responsable_area_id)) {
    //         let params = {
    //             'api_token': this.user.api_token,
    //             'user_id': this.user.id,
    //             'generator_set_id': this.generatorSet.id,
    //             'prime_capacity': this.newPrimeCapacity,
    //             'used_capacity': this.newUsedCapacity,
    //             'maintainer_id': this.maintainer_id,
    //             'generator_set_responsable_area_id': this.responsable_area_id,
    //             'generator_set_topology_type_id': this.topology_id,
    //             'generator_set_level_type_id': this.level_id
    //         }
    //         console.log(params)
    //         axios.put(`/api/generatorSets/${this.generatorSet.id}`, params).then(response => {
    //             console.log(response.data)
    //             this.$eventBus.$emit('generator-set-capacities-updated');
    //         })
    //     }
    // } 
    reload: function reload() {
      console.log('reloaded');
      this.$eventBus.$emit('change-room');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "tile box",
      class:
        _vm.room.id && _vm.sala.id != _vm.room.id
          ? "is-shadowless has-background-white-bis"
          : ""
    },
    [
      _c(
        "div",
        { staticClass: "tile is-vertical" },
        [
          _c(
            "router-link",
            {
              staticClass: "is-size-5 has-text-weight-normal",
              class:
                _vm.room.id && _vm.sala.id != _vm.room.id
                  ? "has-text-grey-light"
                  : "",
              attrs: { to: "/capacity/" + _vm.sala.id },
              nativeOn: {
                click: function($event) {
                  return _vm.reload($event)
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.sala.name) +
                  " - " +
                  _vm._s(_vm.sala.old_name) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _vm.sala.current_room_distribution
            ? _c("div", { staticClass: "box" }, [
                _c("div", [_vm._v("DISTRIBUCION")]),
                _vm._v(" "),
                _c("div", [
                  _c("div", [
                    _vm._v("Capacidad Total: " + _vm._s(_vm.totalCapacity))
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Capacidad Usada: " + _vm._s(_vm.usedCapacity))
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "Capacidad Disponible: " + _vm._s(_vm.availableCapacity)
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.sala.current_room_distribution
            ? _c("div", { staticClass: "box" }, [
                _c("div", [_vm._v("INCENDIO")]),
                _vm._v(" "),
                _c("div", [
                  _c("div", [
                    _vm._v("Tipo Detección: " + _vm._s(_vm.detectionType))
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Tipo Extinción: " + _vm._s(_vm.extintionType))
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "section columns" }, [
            _c("div", { staticClass: "column is-6" }, [
              _c(
                "div",
                { staticClass: "columns is-multiline" },
                _vm._l(_vm.powerRectifiers, function(powerRectifier) {
                  return powerRectifier.room_id == _vm.sala.id
                    ? _c(
                        "div",
                        { key: powerRectifier.id, staticClass: "column is-12" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "tile is-child is-size-5 has-text-weight-normal",
                              on: {
                                click: function($event) {
                                  _vm.isPowerRectifierModalActive = true
                                  _vm.powerRectifierSelected = powerRectifier
                                }
                              }
                            },
                            [
                              _c(
                                "b-message",
                                {
                                  staticClass: "box is-paddingless",
                                  attrs: { type: "is-success" }
                                },
                                [
                                  _c("div", { staticClass: "columns" }, [
                                    _c("div", { staticClass: "column" }, [
                                      _vm._v(
                                        "Planta Nº " + _vm._s(powerRectifier.id)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "column is-2 has-text-centered"
                                      },
                                      [
                                        _c("font-awesome-icon", {
                                          staticClass: "has-text-success",
                                          attrs: {
                                            icon: ["far", "check-circle"],
                                            size: "2x"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "columns is-multiline" },
                _vm._l(_vm.airConditioners, function(airConditioner) {
                  return airConditioner.room_id == _vm.sala.id
                    ? _c(
                        "div",
                        { key: airConditioner.id, staticClass: "column is-12" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "tile is-child is-size-5 has-text-weight-semibold",
                              on: {
                                click: function($event) {
                                  _vm.isAirConditionerModalActive = true
                                  _vm.airConditionerSelected = airConditioner
                                }
                              }
                            },
                            [
                              _c(
                                "b-message",
                                {
                                  staticClass: "box is-paddingless",
                                  attrs: { type: "is-success" }
                                },
                                [
                                  _c("div", { staticClass: "columns" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "column has-text-weight-normal has-text-dark is-size-6"
                                      },
                                      [_vm._v("Aire Acondicionado")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "column is-2 has-text-centered"
                                      },
                                      [
                                        _c("font-awesome-icon", {
                                          staticClass: "has-text-success",
                                          attrs: {
                                            icon: ["far", "check-circle"],
                                            size: "2x"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                }),
                0
              )
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.vue?vue&type=template&id=63d174f2& */ "./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&");
/* harmony import */ var _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/Room.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=template&id=63d174f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);