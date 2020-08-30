(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/eco/rcas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileImage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalUpload: function ModalUpload() {
      return Promise.all(/*! import() | chunks/eco/modals/upload */[__webpack_require__.e("vendors~chunks/admin/pops~chunks/dashboard~chunks/eco/modals/newStorage~chunks/eco/modals/upload"), __webpack_require__.e("chunks/eco/modals/upload")]).then(__webpack_require__.bind(null, /*! ./modals/ModalUpload */ "./resources/js/components/eco/modals/ModalUpload.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      dropFiles: [],
      rcas: Array,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10,
      edit: false,
      isUploadModalActive: false
    };
  },
  computed: {
    canUpload: function canUpload() {
      return this.rcas.can && this.rcas.can.upload;
    },
    canDelete: function canDelete() {
      return this.rcas.can && this.rcas.can["delete"];
    }
  },
  created: function created() {
    this.$eventBus.$on('reload-rcas', this.getRCAs);
  },
  mounted: function mounted() {
    this.getRCAs();
  },
  methods: {
    getRCAs: function getRCAs() {
      var _this = this;

      axios.get("/api/rcas").then(function (response) {
        console.log(response.data);
        _this.rcas = response.data;
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.dropFiles.forEach(function (element) {
        return _this2.submitForm(element);
      });
    },
    submitForm: function submitForm(file) {
      var _this3 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', file); // send upload request

      try {
        var response = axios.post("/api/rcas", formData, config).then(function (response) {
          _this3.getRCAs();
        });
      } catch (e) {
        console.log(e);
      }
    },
    faFile: function faFile(ext) {
      var icon = ext == 'pdf' ? 'file-pdf' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file';
      var type = ext == 'pdf' ? 'has-text-info' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'has-text-warning' : ext == 'xls' || ext == 'xlsx' ? 'has-text-success' : 'has-text-primary';
      return {
        'icon': icon,
        'type': type
      };
    },
    openFile: function openFile(file) {
      if (file.extension == 'pdf' || file.extension == 'jpg' || file.extension == 'png' || file.extension == 'jpeg') {
        window.open('/storage/' + file.route, "_blank");
      } else {
        this.readFile(file);
      }
    },
    readFile: function readFile(file) {
      var _this4 = this;

      this.isLoading = true;
      var params = {
        'route': file.route,
        'mime': file.mime
      }; // console.log(params)

      axios.get('/api/viewFile', {
        params: params,
        responseType: 'arraybuffer'
      }).then(function (response) {
        console.log(response);
        var blob = new Blob([response.data], {
          type: file.mime
        }); // const objectUrl = window.URL.createObjectURL(blob)
        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        var data = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = data;
        link.target = "_self";
        link.open = file.basename;
        link.click(); // setTimeout(function () {
        //     // For Firefox it is necessary to delay revoking the ObjectURL
        //     window.URL.revokeObjectURL(data)
        // }, 100)

        _this4.isLoading = false;

        _this4.$buefy.toast.open({
          message: 'El archivo se ha descargado exitosamente.',
          type: 'is-success',
          duration: 5000
        });
      })["catch"](function (error) {
        console.log(error);
        _this4.isLoading = false;

        _this4.$buefy.toast.open({
          message: 'Ha ocurrido un error. Favor contactar al administrador',
          type: 'is-danger',
          duration: 5000
        });
      });
    },
    confirmDelete: function confirmDelete(file) {
      var _this5 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/files/".concat(file.id)).then(function (response) {
            console.log(response);

            _this5.getRCAs();
          });
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('reload-rcas');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "tile is-child box" },
    [
      _c("div", { staticClass: "is-pulled-right" }, [
        _vm.canUpload
          ? _c("span", {}, [
              _c(
                "button",
                {
                  staticClass: "button",
                  on: {
                    click: function($event) {
                      _vm.isUploadModalActive = true
                    }
                  }
                },
                [_vm._v("Subir archivos")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.canDelete
          ? _c("span", {}, [
              _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.edit && "is-danger",
                  on: {
                    click: function($event) {
                      _vm.edit = !_vm.edit
                    }
                  }
                },
                [_vm._v("Editar")]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title is-size-4" }, [_vm._v("RCAs")]),
      _vm._v(" "),
      _c(
        "b-table",
        {
          attrs: {
            data: _vm.rcas.files,
            paginated: _vm.isPaginated,
            "per-page": _vm.perPage,
            "current-page": _vm.currentPage,
            "pagination-simple": _vm.isPaginationSimple,
            "pagination-position": _vm.paginationPosition,
            "default-sort-direction": _vm.defaultSortDirection,
            "sort-icon": _vm.sortIcon,
            "sort-icon-size": _vm.sortIconSize,
            "pagination-size": "is-small",
            "default-sort": "user.first_name",
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
          }
        },
        [
          _c("b-table-column", {
            staticClass: "is-size-6",
            attrs: {
              width: "60%",
              field: "basename",
              label: "Archivo",
              sortable: "",
              searchable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "searchable",
                fn: function(props) {
                  return [
                    _c("b-input", {
                      attrs: {
                        placeholder: "Search...",
                        icon: "magnify",
                        size: "is-small"
                      },
                      model: {
                        value: props.filters[props.column.field],
                        callback: function($$v) {
                          _vm.$set(props.filters, props.column.field, $$v)
                        },
                        expression: "props.filters[props.column.field]"
                      }
                    })
                  ]
                }
              },
              {
                key: "header",
                fn: function(ref) {
                  var column = ref.column
                  return [
                    _c(
                      "b-tooltip",
                      {
                        staticClass: "is-size-6",
                        attrs: { label: column.label, "append-to-body": "" }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(column.label) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c("a", { staticClass: "columns" }, [
                      _c(
                        "div",
                        { staticClass: "column is-1" },
                        [
                          _c("font-awesome-icon", {
                            class: _vm.faFile(props.row.extension).type,
                            attrs: {
                              icon: [
                                "fas",
                                _vm.faFile(props.row.extension).icon
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "column" }, [
                        _c(
                          "div",
                          {
                            staticClass: "is-size-6",
                            on: {
                              click: function($event) {
                                return _vm.openFile(props.row)
                              }
                            }
                          },
                          [_vm._v(_vm._s(props.row.basename))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "is-size-7 has-text-dark" }, [
                          _vm._v(_vm._s(props.row.size / 1000) + " kb")
                        ])
                      ])
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-table-column", {
            staticClass: "is-size-6",
            attrs: {
              width: "",
              field: "site.nem_site",
              label: "PoP",
              sortable: "",
              searchable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "searchable",
                fn: function(props) {
                  return [
                    _c("b-input", {
                      attrs: {
                        placeholder: "Search...",
                        icon: "magnify",
                        size: "is-small"
                      },
                      model: {
                        value: props.filters[props.column.field],
                        callback: function($$v) {
                          _vm.$set(props.filters, props.column.field, $$v)
                        },
                        expression: "props.filters[props.column.field]"
                      }
                    })
                  ]
                }
              },
              {
                key: "header",
                fn: function(ref) {
                  var column = ref.column
                  return [
                    _c(
                      "b-tooltip",
                      {
                        staticClass: "is-size-6",
                        attrs: { label: column.label, "append-to-body": "" }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(column.label) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "default",
                fn: function(props) {
                  return [
                    props.row.site || props.row.pop
                      ? _c(
                          "div",
                          { staticClass: "has-text-right" },
                          [
                            _c("div", { staticClass: "is-size-7" }, [
                              _vm._v(
                                _vm._s(
                                  props.row.site
                                    ? props.row.site.nem_site
                                    : props.row.pop
                                    ? props.row.pop.sites[0].nem_site
                                    : ""
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "is-size-7",
                                attrs: {
                                  to:
                                    "/pop/" +
                                    (props.row.site
                                      ? props.row.site.pop_id
                                      : props.row.pop
                                      ? props.row.pop.id
                                      : ""),
                                  target: "_blank"
                                }
                              },
                              [
                                _c("div", { staticClass: "is-size-6" }, [
                                  _vm._v(
                                    _vm._s(
                                      props.row.site
                                        ? props.row.site.pop.nombre
                                        : props.row.pop
                                        ? props.row.pop.sites[0].nombre
                                        : ""
                                    )
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !props.row.site && !props.row.pop
                      ? _c("div", { staticClass: "has-text-right is-size-6" }, [
                          _vm._v("RCA GENERAL")
                        ])
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm.canDelete && _vm.edit
            ? _c(
                "b-table-column",
                { attrs: { field: "id", label: "", width: "10", numeric: "" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-small",
                      on: {
                        click: function($event) {
                          return _vm.confirmDelete(_vm.props.row)
                        }
                      }
                    },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "is-size-7 has-text-danger",
                        attrs: { icon: ["far", "trash-alt"] }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("template", { slot: "empty" }, [
            _c("section", { staticClass: "section" }, [
              _c(
                "div",
                { staticClass: "content has-text-grey has-text-centered" },
                [
                  _c(
                    "p",
                    [
                      _c("b-icon", {
                        attrs: { icon: "emoticon-sad", size: "is-large" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", [_vm._v("No hay archivos.")])
                ]
              )
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _vm.rcas.can && _vm.rcas.can.upload
        ? _c(
            "b-modal",
            {
              attrs: {
                active: _vm.isUploadModalActive,
                "has-modal-card": "",
                "trap-focus": "",
                "aria-role": "dialog",
                "aria-modal": ""
              },
              on: {
                "update:active": function($event) {
                  _vm.isUploadModalActive = $event
                }
              }
            },
            [_c("modal-upload", { attrs: { user: _vm.user } })],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RCAs.vue?vue&type=template&id=661cfecc& */ "./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&");
/* harmony import */ var _RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RCAs.vue?vue&type=script&lang=js& */ "./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/eco/RCAs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RCAs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RCAs.vue?vue&type=template&id=661cfecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/eco/RCAs.vue?vue&type=template&id=661cfecc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RCAs_vue_vue_type_template_id_661cfecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);