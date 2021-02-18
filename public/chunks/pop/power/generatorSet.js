(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/power/generatorSet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['canEditGeneratorSets', 'generatorSet', 'user'],
  data: function data() {
    return {
      maintainers: [],
      responsableAreas: [],
      topologyTypes: [],
      levelTypes: [],
      generatorSetTypes: [],
      currentMaintainerName: 'Sin Información',
      currentResponsableArea: 'Sin Información',
      currentTopologyType: 'Sin Información',
      currentLevelType: 'Sin Información',
      currentGeneratorSetType: 'Sin Información',
      currentGeneratorSetModel: 'Sin Información',
      rooms: this.generatorSet.pop && this.generatorSet.pop.rooms,
      generatorRoom: this.generatorSet.room_id,
      isOnlyRoom: this.generatorSet.room_id ? true : false,
      maintainer_id: this.generatorSet.current_maintainer ? this.generatorSet.current_maintainer.telecom_company_id : null,
      responsable_area_id: this.generatorSet.current_generator_responsable ? this.generatorSet.current_generator_responsable.generator_set_responsable_area_id : null,
      topology_id: this.generatorSet.generator_set_topology_type_id,
      level_id: this.generatorSet.generator_set_level_type_id,
      generator_set_type_id: this.generatorSet.generator_set_type_id,
      newPrimeCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.prime_capacity : 0,
      newUsedCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.used_capacity : 0,
      isEditMode: false,
      generatorSetHorometer: null
    };
  },
  mounted: function mounted() {
    this.getMaintainers();
    this.getResponsableAreas();
    this.getTopologyTypes();
    this.getLevelTypes();
    this.getGeneratorSetTypes();
    this.getGeneratorSetDataOnline();
  },
  computed: {
    currentGeneratorGroup: function currentGeneratorGroup() {
      return this.generatorSet.current_generator_group;
    },
    currentGeneratorTank: function currentGeneratorTank() {
      return this.generatorSet.current_generator_tank;
    },
    currentGeneratorResponsableAreaId: function currentGeneratorResponsableAreaId() {
      return this.generatorSet.current_generator_responsable ? this.generatorSet.current_generator_responsable.generator_set_responsable_area_id : null;
    },
    primeCapacity: function primeCapacity() {
      return this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.prime_capacity : 0;
    },
    capacity: function capacity() {
      return this.newPrimeCapacity * 0.8;
    },
    usedCapacity: function usedCapacity() {
      return this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.used_capacity : 0;
    },
    availableCapacity: function availableCapacity() {
      return this.capacity - this.newUsedCapacity;
    }
  },
  watch: {
    generatorSet: function generatorSet(val) {// if (this.generatorSet.pop && this.generatorSet.pop.rooms) {
      //     // console.log(this.generatorSet.pop.rooms[0].current_room_capacity)
      //     this.rooms = this.generatorSet.pop.rooms
      // }
    },
    maintainer_id: function maintainer_id(val) {
      var _this = this;

      this.maintainers.forEach(function (item) {
        if (item.id == val) {
          _this.currentMaintainerName = item.name;
        }
      });
    },
    responsable_area_id: function responsable_area_id(val) {
      var _this2 = this;

      this.responsableAreas.forEach(function (item) {
        if (item.id == val) {
          _this2.currentResponsableArea = item.area;
        }
      });
    },
    topology_id: function topology_id(val) {
      var _this3 = this;

      this.topologyTypes.forEach(function (item) {
        if (item.id == val) {
          _this3.currentTopologyType = item.type;
        }
      });
    },
    level_id: function level_id(val) {
      var _this4 = this;

      this.levelTypes.forEach(function (item) {
        if (item.id == val) {
          _this4.currentLevelType = item.type;
        }
      });
    },
    generator_set_type_id: function generator_set_type_id(val) {
      var _this5 = this;

      this.generatorSetTypes.forEach(function (item) {
        if (item.id == val) {
          _this5.currentGeneratorSetType = item.type;
          _this5.currentGeneratorSetModel = item.model;
        }
      });
    }
  },
  methods: {
    getMaintainers: function getMaintainers() {
      var _this6 = this;

      axios.get("/api/telecomCompanies").then(function (response) {
        // console.log(response.data.telecomCompanies)
        _this6.maintainers = response.data.telecomCompanies;

        if (response.data.telecomCompanies) {
          _this6.maintainers.forEach(function (item) {
            if (item.id == _this6.maintainer_id) {
              _this6.currentMaintainerName = item.name;
            }
          });
        }
      });
    },
    getResponsableAreas: function getResponsableAreas() {
      var _this7 = this;

      axios.get("/api/generatorSetResponsableAreas").then(function (response) {
        // console.log(response.data.responsableAreas)
        _this7.responsableAreas = response.data.responsableAreas;

        if (response.data.responsableAreas) {
          _this7.responsableAreas.forEach(function (item) {
            if (item.id == _this7.responsable_area_id) {
              _this7.currentResponsableArea = item.area;
            }
          });
        }
      });
    },
    getTopologyTypes: function getTopologyTypes() {
      var _this8 = this;

      axios.get("/api/generatorSetTopologyTypes").then(function (response) {
        // console.log(response.data.telecomCompanies)
        _this8.topologyTypes = response.data.topologyTypes;

        if (response.data.topologyTypes) {
          _this8.topologyTypes.forEach(function (item) {
            if (item.id == _this8.topology_id) {
              _this8.currentTopologyType = item.type;
            }
          });
        }
      });
    },
    getLevelTypes: function getLevelTypes() {
      var _this9 = this;

      axios.get("/api/generatorSetLevelTypes").then(function (response) {
        // console.log(response.data.telecomCompanies)
        _this9.levelTypes = response.data.levelTypes;

        if (response.data.levelTypes) {
          _this9.levelTypes.forEach(function (item) {
            if (item.id == _this9.level_id) {
              _this9.currentLevelType = item.type;
            }
          });
        }
      });
    },
    getGeneratorSetTypes: function getGeneratorSetTypes() {
      var _this10 = this;

      axios.get("/api/generatorSetTypes").then(function (response) {
        // console.log(response.data.telecomCompanies)
        _this10.generatorSetTypes = response.data.generatorSetTypes;

        if (response.data.generatorSetTypes) {
          _this10.generatorSetTypes.forEach(function (item) {
            if (item.id == _this10.generator_set_type_id) {
              _this10.currentGeneratorSetType = item.type;
            }
          });
        }
      });
    },
    // async getGeneratorSetDataOnline() {
    //     let params = {
    //         'pop_id': this.generatorSet.pop_id
    //     }
    //     await axios.get(`/api/generatorSetDataCapacity`, { params: params })
    //     .then(response => {
    //         console.log(response.data)
    //         this.generatorSetDataCapacity = response.data
    //     })
    // },
    saveChanges: function saveChanges() {
      var _this11 = this;

      // console.log(this.currentGeneratorResponsableAreaId)
      if (!this.isEditMode && (this.primeCapacity != this.newPrimeCapacity || this.usedCapacity != this.newUsedCapacity || this.generatorSet.current_maintainer && this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id || this.generatorSet.generator_set_topology_type_id != this.topology_id || this.generatorSet.generator_set_level_type_id != this.level_id || this.generatorSet.generator_set_type_id != this.generator_set_type_id || this.currentGeneratorResponsableAreaId != this.responsable_area_id) || this.generatorRoom != this.generatorSet.room_id) {
        // console.log(this.currentGeneratorResponsableAreaId)
        var params = {
          'user_id': parseFloat(this.user.id),
          'generator_set_id': parseFloat(this.generatorSet.id),
          'prime_capacity': parseFloat(this.newPrimeCapacity),
          'used_capacity': parseFloat(this.newUsedCapacity),
          'maintainer_id': parseFloat(this.maintainer_id),
          'generator_set_responsable_area_id': parseFloat(this.responsable_area_id),
          'generator_set_topology_type_id': parseFloat(this.topology_id),
          'generator_set_level_type_id': parseFloat(this.level_id),
          'generator_set_type_id': parseFloat(this.generator_set_type_id),
          'is_only_room': this.isOnlyRoom,
          'room_id': this.generatorRoom
        }; // console.log(params)

        axios.put("/api/generatorSets/".concat(this.generatorSet.id), params).then(function (response) {
          _this11.$eventBus.$emit('generator-set-capacities-updated');
        });
      }
    },
    deleteGeneratorSet: function deleteGeneratorSet() {
      var _this12 = this;

      console.log(this.generatorSet);
      this.$buefy.dialog.confirm({
        message: "Confirma la eliminaci\xF3n del Grupo Electr\xF3geno de la sala?",
        type: 'is-link',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/generatorSets/".concat(_this12.generatorSet.id)).then(function (response) {
            // console.log(response.data)
            _this12.$eventBus.$emit('generator-set-deleted');

            _this12.$eventBus.$emit('room-data');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section", staticStyle: { "padding-top": "0px" } },
    [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-3" }),
        _vm._v(" "),
        _c("div", { staticClass: "column is-6 tile is-parent" }, [
          _c("div", { staticClass: "tile is-child box" }, [
            _c(
              "div",
              {
                staticClass: "has-text-weight-semibold is-size-6 has-text-link",
                staticStyle: { "padding-bottom": "10px" }
              },
              [_vm._v("TABLERO DE TRANSFERENCIA AUTOMATICA")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Tipo")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-5 " },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.generatorSet.generator_tta_type
                          ? _vm.generatorSet.generator_tta_type.type
                          : "Sin información"
                      )
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column has-text-right" },
                [
                  _c("font-awesome-icon", {
                    staticClass: "has-text-grey-lighter",
                    staticStyle: { opacity: "0.5" },
                    attrs: { icon: ["fas", "microchip"], size: "3x" }
                  })
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column is-3" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _c("div", { staticClass: "columns tile is-parent" }, [
          _c(
            "div",
            { staticClass: "column has-text-centered" },
            [
              _c("font-awesome-icon", {
                staticClass: "has-text-grey",
                staticStyle: { opacity: "0.5", "padding-top": "10px" },
                attrs: { icon: ["fas", "charging-station"], size: "4x" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            !_vm.isEditMode
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Marca")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-5" },
                    [_vm._v(_vm._s(_vm.currentGeneratorSetType))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "has-text-weight-light is-size-7",
                      staticStyle: { "padding-top": "8px" }
                    },
                    [_vm._v("Modelo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-6" },
                    [_vm._v(_vm._s(_vm.currentGeneratorSetModel))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isEditMode
              ? _c(
                  "div",
                  [
                    _c(
                      "b-select",
                      {
                        attrs: { placeholder: "Selecciona..." },
                        model: {
                          value: _vm.generator_set_type_id,
                          callback: function($$v) {
                            _vm.generator_set_type_id = $$v
                          },
                          expression: "generator_set_type_id"
                        }
                      },
                      _vm._l(_vm.generatorSetTypes, function(option) {
                        return _c(
                          "option",
                          { key: option.id, domProps: { value: option.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.type) +
                                " - " +
                                _vm._s(option.model) +
                                "\n                        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "has-text-weight-light is-size-7",
                staticStyle: { "padding-top": "8px" }
              },
              [_vm._v("Número Serie")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "has-text-weight-semibold is-size-6",
                class: _vm.generatorSet.serial_number ? "" : "has-text-info"
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.generatorSet.serial_number
                        ? _vm.generatorSet.serial_number
                        : "Sin información"
                    ) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "field" }, [
              _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Topología")
              ]),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-5" },
                    [_vm._v(_vm._s(_vm.currentTopologyType))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { placeholder: "Selecciona..." },
                          model: {
                            value: _vm.topology_id,
                            callback: function($$v) {
                              _vm.topology_id = $$v
                            },
                            expression: "topology_id"
                          }
                        },
                        _vm._l(_vm.topologyTypes, function(option) {
                          return _c(
                            "option",
                            { key: option.id, domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(option.type) +
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
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Plano")
              ]),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-5" },
                    [_vm._v(_vm._s(_vm.currentLevelType))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { placeholder: "Selecciona..." },
                          model: {
                            value: _vm.level_id,
                            callback: function($$v) {
                              _vm.level_id = $$v
                            },
                            expression: "level_id"
                          }
                        },
                        _vm._l(_vm.levelTypes, function(option) {
                          return _c(
                            "option",
                            { key: option.id, domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(option.type) +
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
                : _vm._e()
            ]),
            _vm._v(" "),
            !_vm.isEditMode
              ? _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Propio de Sala")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "has-text-weight-bold is-size-6",
                      class: _vm.generatorSet.room_id && "has-text-success"
                    },
                    [_vm._v(_vm._s(_vm.generatorSet.room_id ? "SI" : "NO"))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isEditMode
              ? _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "has-text-weight-light is-size-7" },
                    [_vm._v("Propio de la sala")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("b-switch", {
                        model: {
                          value: _vm.isOnlyRoom,
                          callback: function($$v) {
                            _vm.isOnlyRoom = $$v
                          },
                          expression: "isOnlyRoom"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.isOnlyRoom
                    ? _c(
                        "div",
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "Select a name" },
                              model: {
                                value: _vm.generatorRoom,
                                callback: function($$v) {
                                  _vm.generatorRoom = $$v
                                },
                                expression: "generatorRoom"
                              }
                            },
                            _vm._l(_vm.rooms, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.id,
                                  domProps: { value: option.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(option.name) +
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
                    : _vm._e()
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column has-text-right" }, [
            _c("div", { staticClass: "block" }, [
              _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Mantenedor")
              ]),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c("div", { staticClass: "has-text-weight-bold is-size-5" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.currentMaintainerName) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    { staticClass: "is-pulled-right" },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { placeholder: "Selecciona..." },
                          model: {
                            value: _vm.maintainer_id,
                            callback: function($$v) {
                              _vm.maintainer_id = $$v
                            },
                            expression: "maintainer_id"
                          }
                        },
                        _vm._l(_vm.maintainers, function(option) {
                          return _c(
                            "option",
                            { key: option.id, domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(option.name) +
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
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "block",
                style: _vm.isEditMode ? "padding-top: 24px;" : ""
              },
              [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Responsable")
                ]),
                _vm._v(" "),
                !_vm.isEditMode
                  ? _c(
                      "div",
                      { staticClass: "has-text-weight-bold is-size-5" },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.currentResponsableArea) +
                            "\n                    "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isEditMode
                  ? _c(
                      "div",
                      { staticClass: "is-pulled-right" },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: { placeholder: "Selecciona..." },
                            model: {
                              value: _vm.responsable_area_id,
                              callback: function($$v) {
                                _vm.responsable_area_id = $$v
                              },
                              expression: "responsable_area_id"
                            }
                          },
                          _vm._l(_vm.responsableAreas, function(option) {
                            return _c(
                              "option",
                              {
                                key: option.id,
                                domProps: { value: option.id }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(option.area) +
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
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "block",
                style: _vm.isEditMode ? "padding-top: 24px;" : ""
              },
              [
                _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                  _vm._v("Horómetro")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "has-text-weight-semibold is-size-6" },
                  [
                    _vm._v(
                      _vm._s(_vm.generatorSet.horometer == 1 ? "Si" : "No")
                    )
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "is-divider",
          attrs: { "data-content": "EQUIPAMIENTO" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c("div", { staticClass: "tile" }, [
            _c("div", { staticClass: "tile is-parent columns" }, [
              _c("div", { staticClass: "tile column" }, [
                _c("div", { staticClass: "tile is-child box" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "has-text-weight-semibold is-size-6 has-text-link",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [_vm._v("GENERADOR")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Potencia")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-weight-semibold is-size-6" },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.currentGeneratorGroup.power
                                ? _vm.currentGeneratorGroup.power
                                : "Sin información"
                            ) + " "
                          ),
                          _vm.currentGeneratorGroup.power
                            ? _c("span", { staticClass: "is-size-7" }, [
                                _vm._v("kW")
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile column" }, [
                _c("div", { staticClass: "tile is-child box" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "has-text-weight-semibold is-size-6 has-text-link",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [_vm._v("MOTOR")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Marca")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-semibold is-size-6",
                          class: _vm.generatorSet.generator_motor_type
                            ? ""
                            : "has-text-info"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.generatorSet.generator_motor_type
                                ? _vm.generatorSet.generator_motor_type.type
                                : "Sin información"
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-light is-size-7",
                          staticStyle: { "margin-top": "5px" }
                        },
                        [_vm._v("Modelo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-semibold is-size-6",
                          class: _vm.generatorSet.generator_motor_type
                            ? ""
                            : "has-text-info"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.generatorSet.generator_motor_type
                                ? _vm.generatorSet.generator_motor_type.model
                                : "Sin información"
                            )
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tile column" }, [
                _c("div", { staticClass: "tile is-child box" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "has-text-weight-semibold is-size-6 has-text-link",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [_vm._v("ESTANQUE")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Marca")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-semibold is-size-6",
                          class: _vm.generatorSet.generator_tank_type
                            ? ""
                            : "has-text-info"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.generatorSet.generator_tank_type
                                ? _vm.generatorSet.generator_tank_type.type
                                : "Sin información"
                            )
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "div",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Capacidad")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-weight-semibold is-size-6" },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.currentGeneratorTank
                                ? _vm.currentGeneratorTank.capacity
                                : "Sin información"
                            ) + " "
                          ),
                          _vm.currentGeneratorTank
                            ? _c("span", { staticClass: "is-size-7" }, [
                                _vm._v("Lts")
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-light is-size-7",
                          staticStyle: { "margin-top": "5px" }
                        },
                        [_vm._v("Consumo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "has-text-weight-semibold is-size-6",
                          class:
                            _vm.currentGeneratorTank &&
                            _vm.currentGeneratorTank.consumption
                              ? ""
                              : "has-text-info"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(
                                _vm.currentGeneratorTank
                                  ? _vm.currentGeneratorTank.consumption
                                  : "Sin información"
                              ) +
                              " \n                                        "
                          ),
                          _vm.currentGeneratorTank
                            ? _c("span", { staticClass: "is-size-7" }, [
                                _vm._v("Lts")
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "is-divider",
          attrs: { "data-content": "CAPACIDADES" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "level" }, [
          _c("div", { staticClass: "level-item" }, [
            _c(
              "div",
              { staticClass: "has-text-centered" },
              [
                _c("div", { staticClass: "is-size-6" }, [
                  _vm._v("Capacidad Prime")
                ]),
                _vm._v(" "),
                !_vm.isEditMode
                  ? _c(
                      "div",
                      { staticClass: "has-text-weight-semibold is-size-5" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("numeral")(_vm.newPrimeCapacity, 0, 0)
                          ) + " "
                        ),
                        _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isEditMode
                  ? _c("b-input", {
                      staticClass: "has-text-weight-bold is-size-5",
                      attrs: { type: "number" },
                      model: {
                        value: _vm.newPrimeCapacity,
                        callback: function($$v) {
                          _vm.newPrimeCapacity = $$v
                        },
                        expression: "newPrimeCapacity"
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
              _c("div", { staticClass: "is-size-6" }, [_vm._v("Capacidad")]),
              _vm._v(" "),
              _c("div", { staticClass: "has-text-weight-semibold is-size-4" }, [
                _vm._v(
                  _vm._s(_vm._f("numeral")(_vm.capacity, "0,0.0")) +
                    " \n                        "
                ),
                _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [
            _c("div", { staticClass: "has-text-centered" }, [
              _c("div", { staticClass: "is-size-6" }, [
                _vm._v("Capacidad disponible")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "has-text-weight-semibold is-size-4" }, [
                _vm._v(
                  _vm._s(_vm._f("numeral")(_vm.availableCapacity, "0,0.0")) +
                    " \n                        "
                ),
                _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [
            _c(
              "div",
              { staticClass: "has-text-centered" },
              [
                _c("div", { staticClass: "is-size-6" }, [
                  _vm._v("Capacidad utilizada")
                ]),
                _vm._v(" "),
                !_vm.isEditMode
                  ? _c(
                      "div",
                      { staticClass: "has-text-weight-semibold is-size-5" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm._f("numeral")(_vm.newUsedCapacity, "0,0.0")
                          ) + " "
                        ),
                        _c("span", { staticClass: "is-size-6" }, [_vm._v("kW")])
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
          ])
        ]),
        _vm._v(" "),
        _vm.canEditGeneratorSets
          ? _c(
              "div",
              { staticClass: "field has-text-centered" },
              [
                _c(
                  "b-button",
                  {
                    attrs: {
                      type: _vm.isEditMode ? "is-info" : "is-link is-outlined",
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
                      "\n                  " +
                        _vm._s(
                          _vm.isEditMode
                            ? "Modo Edición"
                            : "Editar parámetros de Grupo"
                        ) +
                        "\n            "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.isEditMode
                  ? _c(
                      "b-button",
                      {
                        staticClass: "is-pulled-right",
                        attrs: { type: "is-danger", size: "is-small" },
                        on: {
                          click: function($event) {
                            return _vm.deleteGeneratorSet()
                          }
                        }
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fas", "trash"] }
                        }),
                        _vm._v("\n                   Eliminar\n            ")
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "is-divider",
        staticStyle: { "padding-bottom": "0px" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/power/GeneratorSet.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pop/power/GeneratorSet.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratorSet.vue?vue&type=template&id=05a56e82& */ "./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82&");
/* harmony import */ var _GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratorSet.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/power/GeneratorSet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorSet.vue?vue&type=template&id=05a56e82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/power/GeneratorSet.vue?vue&type=template&id=05a56e82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorSet_vue_vue_type_template_id_05a56e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);