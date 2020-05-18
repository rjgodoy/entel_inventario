(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileImage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalUpload: function ModalUpload() {
      return __webpack_require__.e(/*! import() */ 76).then(__webpack_require__.bind(null, /*! ./modals/ModalUpload */ "./resources/js/components/pops/documents/modals/ModalUpload.vue"));
    },
    ModalNewFolder: function ModalNewFolder() {
      return __webpack_require__.e(/*! import() */ 75).then(__webpack_require__.bind(null, /*! ./modals/ModalNewFolder */ "./resources/js/components/pops/documents/modals/ModalNewFolder.vue"));
    }
  },
  props: ['user', 'pop', 'popCritical', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      folders: [],
      files: [],
      activeTab: 0,
      showCam: true,
      multiline: true,
      isLoading: false,
      load: 0,
      canCreateFolder: false,
      canDeleteFolder: false,
      canUploadFile: false,
      canDeleteFile: false,
      edit: false,
      isUploadModalActive: false,
      isNewFolderModalActive: false,
      currentFolderView: {
        id: null,
        parent_id: null
      },
      parentViewId: null,
      bread: ''
    };
  },
  mounted: function mounted() {
    this.getFolders();
    this.getFiles();
  },
  computed: {
    folderTab: {
      get: function get() {
        return this.baseTabs[this.activeTab];
      },
      set: function set(val) {
        this.bread = '';
        this.currentFolderView.id = null;
        this.getFolders();
        this.getFiles();
      }
    },
    baseTabs: function baseTabs() {
      return [{
        id: 1,
        label: 'Informes',
        content: 'Informes: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 2,
        label: 'Documentos',
        content: 'Documentos: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 3,
        label: 'Fotos',
        content: 'Fotos: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 4,
        label: 'Construcción',
        content: 'Construcción: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 5,
        label: 'Obras Civiles',
        content: 'Obras Civiles: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 6,
        label: 'CAM',
        content: 'CAM: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 7,
        label: 'Levantamientos Ingeniería',
        content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 8,
        label: 'Gestión Ambiental',
        content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
        displayed: true
      }];
    },
    tabs: function tabs() {
      var tabs = _toConsumableArray(this.baseTabs);

      return tabs;
    },
    noFiles: function noFiles() {
      return !this.folders.length && !this.files.length;
    }
  },
  watch: {
    isNewFolderModalActive: function isNewFolderModalActive(val) {
      val == false && this.getFolders();
    }
  },
  methods: {
    selected: function selected(folder) {
      this.setBreadcrum(folder.name);
      this.parentViewId = this.currentFolderView.id;
      this.currentFolderView = folder;
      this.getFolders();
      this.getFiles();
    },
    getFolders: function getFolders() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_name': this.folderTab.label,
        'folder_id': this.currentFolderView.id
      };
      axios.get("/api/folders/".concat(this.pop.id), {
        params: params
      }).then(function (response) {
        _this.folders = !_this.currentFolderView.id && response.data.folders[0] ? response.data.folders[0].subfolders : response.data.folders;
        _this.canCreateFolder = response.data.can.create;
        _this.canDeleteFolder = response.data.can["delete"];
      });
      axios.get('/api/currentFolder', {
        params: params
      }).then(function (response) {
        _this.currentFolderView = response.data.folder;
      });
    },
    confirmDeleteFolder: function confirmDeleteFolder(folder) {
      var _this2 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar esta carpeta?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          var params = {
            'api_token': _this2.user.api_token,
            'user_id': _this2.user.id,
            'pop_id': _this2.pop.id
          };
          axios["delete"]("/api/folders/".concat(folder.id), {
            params: params
          }).then(function (response) {
            console.log(response);

            _this2.getFolders();

            _this2.$eventBus.$emit('folder-deleted');
          });
        }
      });
    },
    setBreadcrum: function setBreadcrum(name) {
      if (this.bread == '') {
        this.bread = name;
      } else {
        this.bread = this.bread + ' / ' + name;
      }
    },
    backOne: function backOne() {
      var split = this.bread.split('/');
      var deep = split.pop();
      this.bread = '';

      for (var i = 0; i < split.length; i++) {
        this.bread = this.bread == '' ? split[i] : this.bread + '/' + split[i];
      }

      this.currentFolderView.id = this.currentFolderView.parent_id;
      this.getFolders();
      this.getFiles();
    },
    // File Management
    getFiles: function getFiles() {
      var _this3 = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_name': this.folderTab.label,
        'folder_id': this.currentFolderView.id
      };
      axios.get("/api/files/".concat(this.pop.id), {
        params: params
      }).then(function (response) {
        // console.log(response.data)
        _this3.files = response.data.files;
        _this3.canUploadFile = response.data.can.upload;
        _this3.canDeleteFile = response.data.can["delete"];
      });
    },
    faFile: function faFile(ext) {
      var icon = ext == 'pdf' ? 'file-pdf' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file';
      var type = ext == 'pdf' ? 'has-text-info' : ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'has-text-warning' : ext == 'xls' || ext == 'xlsx' ? 'has-text-success' : 'has-text-primary';
      return {
        'icon': icon,
        'type': type
      };
    },
    readFile: function readFile(file) {
      var _this4 = this;

      this.isLoading = true;
      var params = {
        'api_token': this.user.api_token,
        'dirname': file.dirname,
        'basename': file.basename,
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
        link.download = file.basename;
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
    confirmDeleteFile: function confirmDeleteFile(file) {
      var _this5 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/files/".concat(file.id, "?api_token=").concat(_this5.user.api_token)).then(function (response) {
            console.log(response);

            _this5.getFiles();

            _this5.$eventBus.$emit('file-deleted');
          });
        }
      });
    } // toggle(row) {
    //     this.$refs.table.toggleDetails(row)
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff& ***!
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
    "section",
    {},
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "box" },
            [
              _c(
                "b-tabs",
                {
                  staticStyle: { "margin-bottom": "0px" },
                  attrs: { multiline: _vm.multiline, position: "is-centered" },
                  on: {
                    change: function($event) {
                      _vm.folderTab = _vm.activeTab
                    }
                  },
                  model: {
                    value: _vm.activeTab,
                    callback: function($$v) {
                      _vm.activeTab = $$v
                    },
                    expression: "activeTab"
                  }
                },
                [
                  _vm._l(_vm.tabs, function(tab, index) {
                    return [
                      tab.displayed
                        ? _c("b-tab-item", {
                            key: index,
                            attrs: { label: tab.label }
                          })
                        : _vm._e()
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "columns",
                  staticStyle: {
                    "padding-bottom": "20px",
                    "padding-left": "24px"
                  }
                },
                [
                  _c("div", { staticClass: "column has-text-left" }, [
                    _c("span", [
                      _vm.bread
                        ? _c(
                            "a",
                            { on: { click: _vm.backOne } },
                            [
                              _c("font-awesome-icon", {
                                staticClass: "is-link",
                                staticStyle: { "margin-bottom": "-4px" },
                                attrs: {
                                  icon: ["fas", "angle-left"],
                                  size: "2x"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "is-size-6",
                          staticStyle: { "margin-bottom": "25px" }
                        },
                        [_vm._v(" " + _vm._s(_vm.bread))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column has-text-right" }, [
                    _vm.canUploadFile
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
                            [_vm._v("Upload")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.canUploadFile
                      ? _c("span", {}, [
                          _c(
                            "button",
                            {
                              staticClass: "button",
                              on: {
                                click: function($event) {
                                  _vm.isNewFolderModalActive = true
                                }
                              }
                            },
                            [_vm._v("+ Folder")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.canUploadFile
                      ? _c("span", {}, [
                          _c(
                            "button",
                            {
                              staticClass: "button",
                              class: _vm.edit && "is-link",
                              on: {
                                click: function($event) {
                                  _vm.edit = !_vm.edit
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          )
                        ])
                      : _vm._e()
                  ])
                ]
              ),
              _vm._v(" "),
              !_vm.edit
                ? _c(
                    "div",
                    { staticClass: "columns is-multiline" },
                    [
                      _vm._l(_vm.folders, function(folder) {
                        return _c(
                          "div",
                          {
                            key: folder.id,
                            staticClass: "column is-2 tile is-parent"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "box tile is-child",
                                staticStyle: { position: "relative" },
                                on: {
                                  click: function($event) {
                                    return _vm.selected(folder)
                                  }
                                }
                              },
                              [
                                _c("font-awesome-icon", {
                                  staticClass: "has-text-smart",
                                  staticStyle: { "padding-bottom": "5px" },
                                  attrs: {
                                    icon: ["fas", "folder-open"],
                                    size: "3x"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "is-size-6 has-text-weight-bold"
                                  },
                                  [_vm._v(_vm._s(folder.name))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.files, function(file) {
                        return _c(
                          "div",
                          {
                            key: file.id,
                            staticClass: "column is-2 tile is-parent"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "box tile is-child",
                                staticStyle: { position: "relative" },
                                attrs: { target: "_blank" },
                                on: {
                                  click: function($event) {
                                    _vm.readFile(file)
                                    _vm.load = file.id
                                  }
                                }
                              },
                              [
                                _c("font-awesome-icon", {
                                  class: _vm.faFile(file.extension).type,
                                  staticStyle: { "padding-bottom": "5px" },
                                  attrs: {
                                    icon: [
                                      "fas",
                                      _vm.faFile(file.extension).icon
                                    ],
                                    size: "3x"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "is-size-7" }, [
                                  _vm._v(_vm._s(file.basename))
                                ]),
                                _vm._v(" "),
                                _vm.load == file.id
                                  ? _c("b-loading", {
                                      attrs: {
                                        "is-full-page": false,
                                        active: _vm.isLoading,
                                        "can-cancel": true
                                      },
                                      on: {
                                        "update:active": function($event) {
                                          _vm.isLoading = $event
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.edit
                ? _c(
                    "div",
                    { staticClass: "columns is-multiline" },
                    [
                      _vm._l(_vm.folders, function(folder) {
                        return _c(
                          "div",
                          {
                            key: folder.id,
                            staticClass: "column is-2 tile is-parent"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "box tile is-child",
                                staticStyle: { position: "relative" }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "is-pulled-right has-text-danger",
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDeleteFolder(folder)
                                      }
                                    }
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { "padding-bottom": "5px" },
                                      attrs: {
                                        icon: ["far", "trash-alt"],
                                        size: "2x"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("font-awesome-icon", {
                                  staticClass: "has-text-smart",
                                  staticStyle: { "padding-bottom": "5px" },
                                  attrs: {
                                    icon: ["fas", "folder-open"],
                                    size: "3x"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "is-size-6 has-text-weight-bold"
                                  },
                                  [_vm._v(_vm._s(folder.name))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.files, function(file) {
                        return _c(
                          "div",
                          {
                            key: file.id,
                            staticClass: "column is-2 tile is-parent"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "box tile is-child columns",
                                staticStyle: { position: "relative" }
                              },
                              [
                                _c(
                                  "a",
                                  { staticClass: " has-text-danger" },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { "padding-bottom": "1px" },
                                      attrs: {
                                        icon: ["far", "trash-alt"],
                                        size: "2x"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("font-awesome-icon", {
                                  class: _vm.faFile(file.extension).type,
                                  staticStyle: { "padding-bottom": "5px" },
                                  attrs: {
                                    icon: [
                                      "fas",
                                      _vm.faFile(file.extension).icon
                                    ],
                                    size: "3x"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "is-size-7" }, [
                                  _vm._v(_vm._s(file.basename))
                                ]),
                                _vm._v(" "),
                                _vm.load == file.id
                                  ? _c("b-loading", {
                                      attrs: {
                                        "is-full-page": false,
                                        active: _vm.isLoading,
                                        "can-cancel": true
                                      },
                                      on: {
                                        "update:active": function($event) {
                                          _vm.isLoading = $event
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.noFiles
                ? _c("section", { staticClass: "section container" }, [
                    _c("div", { staticClass: "has-text-weight-normal" }, [
                      _vm._v("No hay archivos en esta sección.")
                    ])
                  ])
                : _vm._e()
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
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
        [
          _c("modal-upload", {
            attrs: {
              folder_id: _vm.currentFolderView.id,
              folderTab: _vm.folderTab,
              pop: _vm.pop,
              user: _vm.user
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isNewFolderModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isNewFolderModalActive = $event
            }
          }
        },
        [
          _c("modal-new-folder", {
            attrs: {
              folder_id: _vm.currentFolderView.id,
              folderTab: _vm.folderTab,
              pop: _vm.pop,
              user: _vm.user
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c(
        "div",
        {
          staticClass:
            "column has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Documentos")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/documents/Documents.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pops/documents/Documents.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=501643ff& */ "./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/documents/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=501643ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/documents/Documents.vue?vue&type=template&id=501643ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_501643ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);