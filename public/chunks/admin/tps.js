(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/admin/tps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  created: function created() {},
  mounted: function mounted() {
    // Se conecta a la base de datos de PSG y extrae la información a la tabla de Inventario
    this.syncData();
  },
  data: function data() {
    return {
      data: [],
      finished: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: true,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      checkboxPosition: 'left',
      checkedRows: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 20,
      loading: true
    };
  },
  methods: {
    syncData: function syncData() {
      var _this = this;

      axios.get("/api/psgTp?api_token=".concat(this.user.api_token, "&page=").concat(this.currentPage)).then(function (response) {
        console.log(response.data);
        _this.data = response.data;
        _this.loading = false;
        var i = 0;
        _this.finished = []; // this.data.forEach((element, index, array) => {
        //     element.psg_tp_state.id == 8 && this.finished.push(element) 
        //     i++
        //     if(i == array.length && this.finished.length) {
        //         console.log(this.finished.length)
        //         this.insertFinisheds()
        //     }
        // })
      });
    },
    insertFinisheds: function insertFinisheds() {
      var _this2 = this;

      // console.log(this.finished)
      var resource = '';
      this.finished.forEach(function (element) {
        switch (element.work_type_id) {
          case 1:
            resource = 'powerRectifiers';
            break;

          case 2:
            resource = 'generatorSets';
            break;

          case 3:
            resource = 'infrastructures';
            break;

          case 4:
            resource = 'airConditioners';
            break;

          case 5:
            resource = 'transformers';
            break;

          case 6:
            resource = 'verticalStructures';
            break;

          case 7:
            resource = 'batteries';
            break;

          default:
            break;
        }

        var params = {
          'api_token': _this2.user.api_token,
          'tp_id': element.tp_id,
          'site_id': element.site_id
        };
        axios.post("/api/".concat(resource), params).then(function (response) {
          console.log(response.data);

          _this2.syncData();
        });
      });
    },
    tagColor: function tagColor(state_id) {
      var color = '';
      var text = '';

      switch (state_id) {
        case 8:
          color = 'is-eco';
          text = 'has-text-white';
          break;
        // case 1:
        // case 2:
        // case 3:
        // case 4:
        // case 5:
        // case 6:
        // case 7:
        // case 9:
        // case 10:
        // case 11:
        // case 12:

        default:
          color = 'is-gray';
          text = 'has-text-dark';
          break;
      }

      return {
        'color': color,
        'text': text
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section container" }, [
    _c(
      "div",
      { staticClass: "box", staticStyle: { position: "relative" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("b-table", {
          attrs: {
            data: _vm.isEmpty ? [] : _vm.data,
            paginated: _vm.isPaginated,
            "per-page": _vm.perPage,
            "current-page": _vm.currentPage,
            "pagination-simple": _vm.isPaginationSimple,
            "pagination-position": _vm.paginationPosition,
            "default-sort-direction": _vm.defaultSortDirection,
            "sort-icon": _vm.sortIcon,
            "sort-icon-size": _vm.sortIconSize,
            "pagination-size": "is-small",
            "default-sort": "FECHA_INGRESO",
            "aria-next-label": "Next page",
            "aria-previous-label": "Previous page",
            "aria-page-label": "Page",
            "aria-current-label": "Current page"
          },
          on: {
            "update:currentPage": function($event) {
              _vm.currentPage = $event
            },
            "update:current-page": function($event) {
              _vm.currentPage = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(props) {
                return [
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        width: "90",
                        field: "tp_id",
                        label: "ID TP",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "is-size-7" }, [
                        _c("div", { staticClass: "is-size-6" }, [
                          _vm._v(_vm._s(props.row.tp_id))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        field: "site.nem_site",
                        label: "Sitio",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "is-size-6 has-text-weight-normal" },
                        [
                          _vm._v(
                            _vm._s(
                              props.row.site ? props.row.site.nem_site : ""
                            ) +
                              " - " +
                              _vm._s(
                                props.row.site ? props.row.site.nombre : ""
                              )
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        field: "title",
                        label: "Título",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        {
                          staticClass: "is-size-6",
                          attrs: {
                            label: props.row.description,
                            type: "is-link",
                            position: "is-right",
                            size: "is-large",
                            multilined: ""
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "is-size-6 has-text-weight-normal" },
                            [_vm._v(_vm._s(props.row.title))]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        field: "created_at",
                        label: "Fecha Ingreso",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "is-size-6 has-text-weight-normal" },
                        [_vm._v(_vm._s(props.row.created_at))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        field: "user",
                        label: "Usuario Creador",
                        sortable: "",
                        searchable: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "is-size-6 has-text-weight-normal" },
                        [_vm._v(_vm._s(props.row.user))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      staticClass: "is-size-6",
                      attrs: {
                        field: "psg_tp_state.state",
                        label: "Estado",
                        sortable: "",
                        searchable: "",
                        centered: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function(ref) {
                              var column = ref.column
                              return [
                                _c(
                                  "b-tooltip",
                                  {
                                    staticClass: "is-size-6",
                                    attrs: { label: column.label }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(column.label) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "b-tag",
                        {
                          staticClass: "is-size-7 has-text-weight-semibold",
                          class: _vm.tagColor(props.row.psg_tp_state.id).text,
                          attrs: {
                            type: _vm.tagColor(props.row.psg_tp_state.id).color
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                props.row.psg_tp_state.state.toUpperCase()
                              ) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("b-loading", {
          attrs: {
            "is-full-page": false,
            active: _vm.loading,
            "can-cancel": true
          },
          on: {
            "update:active": function($event) {
              _vm.loading = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block" }, [
      _c(
        "div",
        { staticClass: "has-text-weight-bold has-text-centered is-size-4" },
        [_vm._v("Trabajos programados - Instalaciones de Equipos")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=template&id=28a28593& */ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony import */ var _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTps.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminTps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminTps.vue?vue&type=template&id=28a28593& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminTps.vue?vue&type=template&id=28a28593&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTps_vue_vue_type_template_id_28a28593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);