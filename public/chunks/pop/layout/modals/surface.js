(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/modals/surface"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['canEdit', 'sala', 'user'],
  data: function data() {
    return {
      fireDetectionTypes: [],
      fireExtinctionTypes: [],
      isEditMode: false,
      addNew: false,
      fire_detection_type_id: this.sala.current_fire_detection ? this.sala.current_fire_detection.fire_detection_type_id : null,
      fire_extinction_type_id: this.sala.current_fire_detection ? this.sala.current_fire_detection.fire_extinction_type_id : null
    };
  },
  computed: {
    fireDetection: function fireDetection() {
      return this.sala.current_fire_detection;
    },
    detectionType: function detectionType() {
      return this.fireDetection && this.fireDetection.fire_detection_type ? this.fireDetection.fire_detection_type.type : 'No tiene';
    },
    extinctionType: function extinctionType() {
      return this.fireDetection && this.fireDetection.fire_extinction_type ? this.fireDetection.fire_extinction_type.type : 'No tiene';
    }
  },
  mounted: function mounted() {
    this.getDistributionTypes();
    this.getExtinctionTypes();
  },
  methods: {
    getDistributionTypes: function getDistributionTypes() {
      var _this = this;

      axios.get("/api/fireDetectionTypes?api_token=".concat(this.user.api_token)).then(function (response) {
        console.log(response.data.fireDetectionTypes);
        _this.fireDetectionTypes = response.data.fireDetectionTypes; // if(response.data.fireDetectionTypes) {
        //     this.fireDetectionTypes.forEach(item => {
        //         if(item.id == this.fire_detection_type_id) {
        //             this.detectionType = item.type
        //         }
        //     }) 
        // }
      });
    },
    getExtinctionTypes: function getExtinctionTypes() {
      var _this2 = this;

      axios.get("/api/fireExtinctionTypes?api_token=".concat(this.user.api_token)).then(function (response) {
        _this2.fireExtinctionTypes = response.data.fireExtinctionTypes; // if(response.data.fireExtinctionTypes) {
        //     this.fireExtinctionTypes.forEach(item => {
        //         if(item.id == this.fire_extinction_type_id) {
        //             this.extinctionType = item.type
        //         }
        //     })
        // } 
      });
    },
    saveChanges: function saveChanges() {
      var _this3 = this;

      if (!this.isEditMode && (!this.fireDetection || this.fireDetection && this.fireDetection.fire_detection_type_id != this.fire_detection_type_id || this.fireDetection && this.fireDetection.fire_extinction_type_id != this.fire_extinction_type_id)) {
        var params = {
          'api_token': this.user.api_token,
          'user_id': this.user.id,
          'fire_detection_type_id': this.fire_detection_type_id,
          'fire_extinction_type_id': this.fire_extinction_type_id,
          'room_id': this.sala.id
        };
        axios.post("/api/fireDetections", params).then(function (response) {
          console.log(response.data);

          _this3.$eventBus.$emit('room-security');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['canEdit', 'sala', 'user'],
  data: function data() {
    return {
      newTotalSurface: this.sala.current_room_surface ? this.sala.current_room_surface.total_surface : 0,
      newUsedSurface: this.sala.current_room_surface ? this.sala.current_room_surface.used_surface : 0,
      isEditMode: false
    };
  },
  computed: {
    totalSurface: function totalSurface() {
      return this.sala.current_room_surface ? this.sala.current_room_surface.total_surface : 0;
    },
    usedSurface: function usedSurface() {
      return this.sala.current_room_surface ? this.sala.current_room_surface.used_surface : 0;
    },
    availableSurface: function availableSurface() {
      return this.newTotalSurface - this.newUsedSurface;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    saveChanges: function saveChanges() {
      var _this = this;

      if (!this.isEditMode && this.totalSurface != this.newTotalSurface || this.usedSurface != this.newUsedSurface) {
        var params = {
          'api_token': this.user.api_token,
          'user_id': this.user.id,
          'total_surface': parseFloat(this.newTotalSurface),
          'used_surface': parseFloat(this.newUsedSurface)
        }; // console.log(params)

        axios.post("/api/createRoomSurface/".concat(this.sala.id), params).then(function (response) {
          console.log(response.data);

          _this.$eventBus.$emit('room-surface');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            { staticClass: "box" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile",
                  attrs: {
                    label: "EQUIPOS SEGURIDAD",
                    "label-position": "on-border"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tile box is-shadowless",
                      staticStyle: { border: "solid 0.1rem #cccccc" }
                    },
                    [
                      _vm.sala.current_fire_detection
                        ? _c(
                            "div",
                            { staticClass: "tile is-parent is-vertical" },
                            [
                              _c(
                                "b-field",
                                {
                                  staticClass: "tile",
                                  attrs: {
                                    label: "INCENDIO",
                                    "label-position": "on-border"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tile box is-child is-shadowless",
                                      staticStyle: {
                                        border: "solid 0.1rem #cccccc"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            !_vm.isEditMode
                                              ? _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.detectionType
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Detección")]
                                                  )
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.isEditMode
                                              ? _c(
                                                  "div",
                                                  {},
                                                  [
                                                    _c(
                                                      "b-select",
                                                      {
                                                        attrs: {
                                                          placeholder:
                                                            "Selecciona..."
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.fire_detection_type_id,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fire_detection_type_id = $$v
                                                          },
                                                          expression:
                                                            "fire_detection_type_id"
                                                        }
                                                      },
                                                      _vm._l(
                                                        _vm.fireDetectionTypes,
                                                        function(option) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              key: option.id,
                                                              domProps: {
                                                                value: option.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    option.type
                                                                  ) +
                                                                  "\n                                                    "
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
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
                                          { staticClass: "level-item" },
                                          [
                                            !_vm.isEditMode
                                              ? _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.extinctionType
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Extinción")]
                                                  )
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.isEditMode
                                              ? _c(
                                                  "div",
                                                  {},
                                                  [
                                                    _c(
                                                      "b-select",
                                                      {
                                                        attrs: {
                                                          placeholder:
                                                            "Selecciona..."
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.fire_extinction_type_id,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fire_extinction_type_id = $$v
                                                          },
                                                          expression:
                                                            "fire_extinction_type_id"
                                                        }
                                                      },
                                                      _vm._l(
                                                        _vm.fireExtinctionTypes,
                                                        function(option) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              key: option.id,
                                                              domProps: {
                                                                value: option.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    option.type
                                                                  ) +
                                                                  "\n                                                    "
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.sala.current_fire_detection
                        ? _c(
                            "div",
                            { staticClass: "tile columns is-vcentered" },
                            [
                              _c("div", { staticClass: "column" }, [
                                !_vm.isEditMode
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    NO TIENE EQUIPOS DE SEGURIDAD\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "has-text-centered" },
                                  [
                                    _vm.isEditMode
                                      ? _c(
                                          "b-button",
                                          {
                                            staticClass:
                                              "has-text-weight-light",
                                            attrs: {
                                              type: "is-link",
                                              size: "is-small"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.addNew = !_vm.addNew
                                              }
                                            }
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              attrs: { icon: ["fas", "edit"] }
                                            }),
                                            _vm._v(
                                              "\n                                        Agregar datos\n                                    "
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.isEditMode && _vm.addNew
                                  ? _c(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [
                                        _c("div", { staticClass: "block" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "has-text-weight-light is-size-7"
                                            },
                                            [_vm._v("Detección")]
                                          ),
                                          _vm._v(" "),
                                          !_vm.isEditMode
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-5"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.detectionType
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.isEditMode
                                            ? _c(
                                                "div",
                                                {},
                                                [
                                                  _c(
                                                    "b-select",
                                                    {
                                                      attrs: {
                                                        placeholder:
                                                          "Selecciona..."
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.fire_detection_type_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.fire_detection_type_id = $$v
                                                        },
                                                        expression:
                                                          "fire_detection_type_id"
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.fireDetectionTypes,
                                                      function(option) {
                                                        return _c(
                                                          "option",
                                                          {
                                                            key: option.id,
                                                            domProps: {
                                                              value: option.id
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  option.type
                                                                ) +
                                                                "\n                                                "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                                            style: _vm.isEditMode
                                              ? "padding-top: 24px;"
                                              : ""
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "has-text-weight-light is-size-7"
                                              },
                                              [_vm._v("Extinción")]
                                            ),
                                            _vm._v(" "),
                                            !_vm.isEditMode
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-bold is-size-5"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.extinctionType
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.isEditMode
                                              ? _c(
                                                  "div",
                                                  {},
                                                  [
                                                    _c(
                                                      "b-select",
                                                      {
                                                        attrs: {
                                                          placeholder:
                                                            "Selecciona..."
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.fire_extinction_type_id,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fire_extinction_type_id = $$v
                                                          },
                                                          expression:
                                                            "fire_extinction_type_id"
                                                        }
                                                      },
                                                      _vm._l(
                                                        _vm.fireExtinctionTypes,
                                                        function(option) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              key: option.id,
                                                              domProps: {
                                                                value: option.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    " +
                                                                  _vm._s(
                                                                    option.type
                                                                  ) +
                                                                  "\n                                                "
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              ),
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
                                  : "Editar Seguridad de Sala"
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
            ],
            1
          )
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
          [_vm._v("SUPERFICIE")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d& ***!
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
                      _vm._v("Superficie Total")
                    ]),
                    _vm._v(" "),
                    !_vm.isEditMode
                      ? _c(
                          "div",
                          { staticClass: "has-text-weight-semibold is-size-5" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("numeral")(_vm.newTotalSurface, 0, 0)
                              ) + " "
                            ),
                            _c("span", { staticClass: "is-size-6" }, [
                              _vm._v("m2")
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
                            value: _vm.newTotalSurface,
                            callback: function($$v) {
                              _vm.newTotalSurface = $$v
                            },
                            expression: "newTotalSurface"
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
                      _vm._v("Superficie Usada")
                    ]),
                    _vm._v(" "),
                    !_vm.isEditMode
                      ? _c(
                          "div",
                          { staticClass: "has-text-weight-semibold is-size-5" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("numeral")(_vm.newUsedSurface, 0, 0)
                              ) + " "
                            ),
                            _c("span", { staticClass: "is-size-6" }, [
                              _vm._v("m2")
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
                            value: _vm.newUsedSurface,
                            callback: function($$v) {
                              _vm.newUsedSurface = $$v
                            },
                            expression: "newUsedSurface"
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
                    _vm._v("Superficie Disponible")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-weight-semibold is-size-5" },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(
                            _vm._f("numeral")(_vm.availableSurface, 0, 0)
                          ) +
                          " "
                      ),
                      _c("span", { staticClass: "is-size-6" }, [_vm._v("m2")])
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
                                : "Editar Superficie de Sala"
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
          [_vm._v("SUPERFICIE")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSecurity.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSecurity.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSecurity.vue?vue&type=template&id=03628be0& */ "./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0&");
/* harmony import */ var _ModalSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalSecurity.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalSecurity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalSecurity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalSecurity.vue?vue&type=template&id=03628be0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSecurity.vue?vue&type=template&id=03628be0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSecurity_vue_vue_type_template_id_03628be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSurface.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSurface.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSurface.vue?vue&type=template&id=3f5a698d& */ "./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d&");
/* harmony import */ var _ModalSurface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalSurface.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalSurface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/modals/ModalSurface.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSurface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalSurface.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSurface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalSurface.vue?vue&type=template&id=3f5a698d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/modals/ModalSurface.vue?vue&type=template&id=3f5a698d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalSurface_vue_vue_type_template_id_3f5a698d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);