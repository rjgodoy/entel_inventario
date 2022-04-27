(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/documents/documents"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileImage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVideo"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalUpload: function ModalUpload() {
      return __webpack_require__.e(/*! import() | chunks/pop/documents/modals/upload */ "chunks/pop/documents/modals/upload").then(__webpack_require__.bind(null, /*! ./modals/ModalUpload */ "./resources/js/components/pop/documents/modals/ModalUpload.vue"));
    },
    ModalNewFolder: function ModalNewFolder() {
      return __webpack_require__.e(/*! import() | chunks/pop/documents/modals/newFolder */ "chunks/pop/documents/modals/newFolder").then(__webpack_require__.bind(null, /*! ./modals/ModalNewFolder */ "./resources/js/components/pop/documents/modals/ModalNewFolder.vue"));
    }
  },
  props: ['user', 'pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      folders: [],
      files: [],
      photos: [],
      foldersSgcTicket: [],
      filesSgcTicket: [],
      activeTab: 0,
      currentFolder: null,
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
      bread: '',
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6
          }
        }
      },
      type_files: [{
        'id': 1,
        'nombre': 'Cotizaciones'
      }, {
        'id': 2,
        'nombre': 'Informe Final'
      }, {
        'id': 4,
        'nombre': 'Guia despacho'
      }, {
        'id': 6,
        'nombre': 'LPU'
      }, {
        'id': 7,
        'nombre': 'Mail'
      }, {
        'id': 5,
        'nombre': 'Otros'
      }],
      selectFold: false,
      id_ticket_sgc: null,
      selectFoldFiles: false,
      otherBread: '',
      isFullPage: false,
      newFolderSelect: false,
      folderSelectN: '',
      foldersOffice: [],
      filesRepositorioOffice: [],
      newFolderSelectOffice: false,
      first_fold: '',
      second_fold: '',
      third_fold: ''
    };
  },
  created: function created() {
    this.$eventBus.$on('reload-files', this.getFiles);
  },
  mounted: function mounted() {
    this.setFolderTab();
    this.getFolders();
    this.getFiles();
  },
  computed: {
    folderTab: function folderTab() {
      return this.baseTabs[this.activeTab];
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
      }, {
        id: 9,
        label: 'SGC',
        content: 'Archivos SGC: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 10,
        label: 'Ticketera',
        content: 'Archivos Ticketera: Lorem ipsum dolor sit amet.',
        displayed: true
      }, {
        id: 11,
        label: 'OfficeTrack',
        content: 'Archivos Ticketera: Lorem ipsum dolor sit amet.',
        displayed: true
      }];
    },
    tabs: function tabs() {
      var tabs = _toConsumableArray(this.baseTabs);

      return tabs;
    },
    noFiles: function noFiles() {
      return !this.folders.length && !this.files.length && !this.photos.length;
    }
  },
  watch: {
    isNewFolderModalActive: function isNewFolderModalActive(val) {
      val == false && this.getFolders();
    }
  },
  methods: {
    setFolderTab: function setFolderTab(tabId) {
      this.currentFolder = this.folderTab.id;
      this.bread = '';
      this.currentFolderView.id = null;
      this.getFolders();
      this.getFiles();
    },
    selected: function selected(folder) {
      this.setBreadcrum(folder.name);
      this.parentViewId = this.currentFolderView.id;
      this.currentFolderView = folder;
      this.getFolders();
      this.getFiles();
    },
    getFolders: function getFolders() {
      var _this = this;

      console.log(this.folderTab.id);

      if (this.folderTab.id == 11) {
        this.isLoading = true;
        this.foldersSgcTicket = [];
        this.filesRepositorioOffice = [];
        this.newFolderSelectOffice = true;
        this.newFolderSelect = false;
        this.folderSelectN = this.folderTab.id;
        axios.get("/api/getFoldersOfficeTrackPopZone/?zona_id=".concat(this.pop.zona_id)).then(function (response) {
          _this.foldersOffice = response.data;
          _this.isLoading = false;
        });
      }

      this.otherBread = '';

      if (this.folderTab.id == 9 || this.folderTab.id == 10) {
        this.foldersOffice = [];
        this.newFolderSelect = true;
        this.selectFold = false;
        this.selectFoldFiles = false;
        this.folderSelectN = this.folderTab.id;
        this.newFolderSelectOffice = false;
        this.isLoading = true;
        this.filesRepositorioOffice = [];
        this.foldersOffice = [];
        axios.get("/api/getFoldersSgcPop/?pop_id=".concat(this.pop.id, "&tab_select=").concat(this.folderTab.id)).then(function (response) {
          _this.foldersSgcTicket = response.data;
          _this.isLoading = false;
        });
      } else {
        this.newFolderSelectOffice = false;
        this.newFolderSelect = false;
        this.foldersSgcTicket = [];
        this.foldersOffice = [];
        this.folderSelectN = this.folderTab.id;
        var params = {
          'folder_name': this.folderTab.label,
          'folder_id': this.currentFolderView.id,
          'pop_id': this.pop.id
        };
        axios.get("/api/folders/".concat(this.pop.id), {
          params: params
        }).then(function (response) {
          _this.folders = response.data.folders;
          _this.canCreateFolder = response.data.can.create;
          _this.canDeleteFolder = response.data.can["delete"];
        });
        axios.get('/api/currentFolder', {
          params: params
        }).then(function (response) {
          // console.log(response.data)
          _this.currentFolderView = response.data.folder;
        });
      }
    },
    selectedFolderSgcTicket: function selectedFolderSgcTicket(id) {
      this.selectFold = true;
      this.id_ticket_sgc = id;
      this.otherBread = id;
    },
    selectedFolderSgcTicketFiles: function selectedFolderSgcTicketFiles(type_file) {
      var _this2 = this;

      this.otherBread = this.otherBread + '/' + type_file.nombre;
      axios.get("/api/filesSgcTicketPop?id=".concat(this.id_ticket_sgc, "&tab_select=").concat(this.folderTab.id, "&type_file=").concat(type_file.id)).then(function (response) {
        _this2.filesSgcTicket = response.data;
        _this2.selectFoldFiles = true;
      });
    },
    selectedFolderOffice: function selectedFolderOffice(folder) {
      var _this3 = this;

      this.isLoading = true;

      if (this.first_fold == '') {
        this.first_fold = folder.id;
      }

      if (this.second_fold == '') {
        this.second_fold = folder.id;
      }

      if (this.third_fold == '') {
        this.third_fold = folder.id;
      }

      if (this.otherBread != '') {
        this.otherBread = this.otherBread + '/' + folder.nombre;
      } else {
        this.otherBread = folder.nombre;
      }

      axios.get("/api/getSubFolderRepositorio?subcarpeta_id=".concat(folder.id)).then(function (response) {
        _this3.foldersOffice = response.data;
        _this3.filesRepositorioOffice = [];
        _this3.isLoading = false;
      });

      if (folder.nombre == 'Fotos' || folder.nombre == 'Informes' || folder.nombre == 'Foto' || folder.nombre == 'Informe') {
        this.getFilesOficetrack(folder.id);
      } else {
        this.filesRepositorioOffice = [];
      }
    },
    getFilesOficetrack: function getFilesOficetrack(folder) {
      var _this4 = this;

      this.isLoading = true;
      axios.get("/api/getFilesSubFolderRepositorio?carpeta_id=".concat(folder)).then(function (response) {
        _this4.filesRepositorioOffice = response.data;
      })["finally"](function () {
        _this4.isLoading = false;
      });
    },
    backFold: function backFold() {
      var _this5 = this;

      if (this.newFolderSelectOffice) {
        if (this.third_fold != '') {
          this.third_fold = '';
          axios.get("/api/getSubFolderRepositorio?subcarpeta_id=".concat(this.second_fold)).then(function (response) {
            _this5.foldersOffice = response.data;
            _this5.filesRepositorioOffice = [];
            _this5.isLoading = false;
          });
        } else {
          if (this.second_fold) {
            this.second_fold = '';
            this.getFolders();
          }
        }
      } else {
        if (this.selectFoldFiles) {
          this.otherBread = this.id_ticket_sgc;
          this.selectFoldFiles = false;
          this.filesSgcTicket = [];
        } else {
          if (this.selectFold) {
            this.selectFold = false;
            this.otherBread = '';
          }
        }
      }
    },
    // File Management
    getFiles: function getFiles() {
      var _this6 = this;

      var params = {
        'folder_name': this.folderTab.label,
        'folder_id': this.currentFolderView.id
      };
      this.files = [];
      this.photos = [];
      axios.get("/api/files/".concat(this.pop.id), {
        params: params
      }).then(function (response) {
        // console.log(response.data)
        Object.keys(response.data.files).forEach(function (element) {
          var file = response.data.files[element];

          if (file.extension.toLowerCase() == 'jpg' || file.extension.toLowerCase() == 'png' || file.extension.toLowerCase() == 'jpeg' || file.extension.toLowerCase() == 'tiff') {
            file.image = '/storage/' + file.route;

            _this6.photos.push(file);
          } else {
            _this6.files.push(file);
          }
        }); // console.log(response.data)
        // this.files = response.data.files

        _this6.canUploadFile = response.data.can.upload;
        _this6.canDeleteFile = response.data.can["delete"];
      });
    },
    faFile: function faFile(ext) {
      var icon = 'file';
      var type = 'has-text-primary';

      switch (ext.toLowerCase()) {
        case 'pdf':
          icon = 'file-pdf';
          type = 'has-text-info';
          break;

        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'tiff':
          icon = 'file-image';
          type = 'has-text-warning';
          break;

        case 'xls':
        case 'xlsx':
          icon = 'file-excel';
          type = 'has-text-success';
          break;

        default:
          icon = 'file';
          type = 'has-text-primary';
          break;
      }

      return {
        'icon': icon,
        'type': type
      };
    },
    openFile: function openFile(file) {
      if (file.extension.toLowerCase() == 'pdf' || file.extension.toLowerCase() == 'jpg' || file.extension.toLowerCase() == 'png' || file.extension.toLowerCase() == 'jpeg') {
        window.open('/storage/' + file.route, "_blank");
      } else {
        this.readFile(file);
      }
    },
    readFile: function readFile(file) {
      var _this7 = this;

      this.isLoading = true;
      var params = {
        'route': file.route,
        'mime': file.mime
      }; // console.log(params)

      axios.get('/api/viewFile', {
        params: params,
        responseType: 'arraybuffer'
      }).then(function (response) {
        // console.log(response)
        var blob = new Blob([response.data], {
          type: file.mime
        });
        var objectUrl = window.URL.createObjectURL(blob); // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        var link = document.createElement('a');
        link.href = objectUrl;
        link.open = file.basename;
        link.target = '_self';
        link.click();
        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(objectUrl);
        }, 100);
        _this7.isLoading = false;

        _this7.$buefy.toast.open({
          message: 'El archivo se ha descargado exitosamente.',
          type: 'is-success',
          duration: 5000
        });
      })["catch"](function (error) {
        console.log(error);
        _this7.isLoading = false;

        _this7.$buefy.toast.open({
          message: 'Ha ocurrido un error. Favor contactar al administrador',
          type: 'is-danger',
          duration: 5000
        });
      });
    },
    confirmDeleteFolder: function confirmDeleteFolder(folder) {
      var _this8 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar esta carpeta?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          var params = {
            'user_id': _this8.user.id,
            'pop_id': _this8.pop.id
          };
          axios["delete"]("/api/folders/".concat(folder.id), {
            params: params
          }).then(function (response) {
            // console.log(response)
            _this8.getFolders();

            _this8.$eventBus.$emit('folder-deleted');
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
    confirmDeleteFile: function confirmDeleteFile(file) {
      var _this9 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/files/".concat(file.id)).then(function (response) {
            // console.log(response)
            _this9.getFiles();

            _this9.$eventBus.$emit('file-deleted');
          });
        }
      });
    },
    makeDroneFootage: function makeDroneFootage(file) {
      var _this10 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea agregar este video como una captura de Drone?\n\rEl video aparecerá en la sección "Drone"',
        type: 'is-link',
        onConfirm: function onConfirm() {
          var params = {
            'pop_id': _this10.pop.id,
            'file_id': file.id
          };
          axios.put("/api/addDrone", params).then(function (response) {
            console.log(response);

            _this10.$eventBus.$emit('drone-added');

            _this10.$buefy.toast.open({
              message: 'Video agregado con exito',
              type: 'is-success',
              duration: 2000
            });
          });
        }
      });
    },
    switchGallery: function switchGallery(value) {
      this.gallery = value;

      if (value) {
        return document.documentElement.classList.add('is-clipped');
      } else {
        return document.documentElement.classList.remove('is-clipped');
      }
    },
    isVideo: function isVideo(file) {
      if (file.extension.toLowerCase() == 'mov' || file.extension.toLowerCase() == 'mp4' || file.extension.toLowerCase() == 'm4v' || file.extension.toLowerCase() == 'avi') {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('reload-files');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                    input: function($event) {
                      return _vm.setFolderTab()
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
              !_vm.newFolderSelect && !_vm.newFolderSelectOffice
                ? _c(
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
                        _vm.bread
                          ? _c("span", [
                              _c(
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
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "is-size-6",
                                  staticStyle: { "margin-bottom": "25px" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.bread) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
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
                                [
                                  _vm._v(
                                    "\n                                Subir archivos\n                            "
                                  )
                                ]
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
                                [
                                  _vm._v(
                                    "\n                                Nueva Carpeta\n                            "
                                  )
                                ]
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
                                  class: _vm.edit && "is-danger",
                                  on: {
                                    click: function($event) {
                                      _vm.edit = !_vm.edit
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Editar\n                            "
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.foldersSgcTicket.length != 0 || _vm.newFolderSelectOffice
                ? _c(
                    "div",
                    {
                      staticClass: "columns",
                      staticStyle: {
                        "padding-bottom": "20px",
                        "padding-left": "24px"
                      }
                    },
                    [
                      _vm.otherBread
                        ? _c("span", [
                            _c(
                              "a",
                              { on: { click: _vm.backFold } },
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
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "is-size-6",
                                staticStyle: { "margin-bottom": "25px" }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.otherBread) +
                                    "\n                        "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.newFolderSelect && !_vm.newFolderSelectOffice
                ? _c("div", [
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
                                  staticClass: "column is-3 tile is-parent"
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
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.bread != ""
                                                  ? folder.name
                                                  : folder.site &&
                                                      folder.site.nem_site
                                              ) +
                                              "\n                                "
                                          )
                                        ]
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
                                  staticClass: "column is-3 tile is-parent"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "box tile is-child",
                                      staticStyle: { position: "relative" },
                                      on: {
                                        click: function($event) {
                                          _vm.openFile(file)
                                          _vm.load = file.id
                                        }
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        class: _vm.faFile(file.extension).type,
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(file.basename) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm.load == file.id
                                        ? _c("b-loading", {
                                            attrs: {
                                              active: _vm.isLoading,
                                              "can-cancel": true,
                                              "is-full-page": false
                                            },
                                            on: {
                                              "update:active": function(
                                                $event
                                              ) {
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
                                  staticClass: "column is-3 tile is-parent"
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
                                              return _vm.confirmDeleteFolder(
                                                folder
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("font-awesome-icon", {
                                            staticStyle: {
                                              "padding-bottom": "5px"
                                            },
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
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.bread != ""
                                                  ? folder.name
                                                  : folder.site &&
                                                      folder.site.nem_site
                                              ) +
                                              "\n                                "
                                          )
                                        ]
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
                                  staticClass: "column is-3 tile is-parent"
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
                                              return _vm.confirmDeleteFile(file)
                                            }
                                          }
                                        },
                                        [
                                          _c("font-awesome-icon", {
                                            staticStyle: {
                                              "padding-bottom": "5px"
                                            },
                                            attrs: {
                                              icon: ["far", "trash-alt"],
                                              size: "1x"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.isVideo(file)
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "is-pulled-right has-text-link",
                                              on: {
                                                click: function($event) {
                                                  return _vm.makeDroneFootage(
                                                    file
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("font-awesome-icon", {
                                                staticStyle: {
                                                  "padding-bottom": "5px"
                                                },
                                                attrs: {
                                                  icon: ["fas", "video"],
                                                  size: "1x"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("font-awesome-icon", {
                                        class: _vm.faFile(file.extension).type,
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(file.basename) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm.load == file.id
                                        ? _c("b-loading", {
                                            attrs: {
                                              active: _vm.isLoading,
                                              "can-cancel": true,
                                              "is-full-page": false
                                            },
                                            on: {
                                              "update:active": function(
                                                $event
                                              ) {
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
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.folderSelectN == 9 || _vm.folderSelectN == 10
                ? _c("div", [
                    _c(
                      "div",
                      { ref: "element", staticClass: "columns is-multiline" },
                      [
                        _vm._l(_vm.foldersSgcTicket, function(folder) {
                          return !_vm.selectFold
                            ? _c(
                                "div",
                                {
                                  key: folder.id,
                                  staticClass: "column is-3 tile is-parent"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "box tile is-child",
                                      staticStyle: { position: "relative" },
                                      on: {
                                        click: function($event) {
                                          return _vm.selectedFolderSgcTicket(
                                            folder.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        staticClass: "has-text-smart",
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(folder.id) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.type_files, function(folder) {
                          return _vm.selectFold && !_vm.selectFoldFiles
                            ? _c(
                                "div",
                                {
                                  key: folder.id,
                                  staticClass: "column is-3 tile is-parent"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "box tile is-child",
                                      staticStyle: { position: "relative" },
                                      on: {
                                        click: function($event) {
                                          return _vm.selectedFolderSgcTicketFiles(
                                            folder
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        staticClass: "has-text-smart",
                                        staticStyle: {
                                          "padding-bottom": "5px"
                                        },
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
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(folder.nombre) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.filesSgcTicket, function(file) {
                          return _vm.selectFoldFiles
                            ? _c(
                                "div",
                                {
                                  key: file.id,
                                  staticClass: "column is-3 tile is-parent"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "box tile is-child",
                                      staticStyle: { position: "relative" },
                                      attrs: {
                                        href:
                                          _vm.folderSelectN == 9
                                            ? "http://172.16.100.112/archivosSgc/" +
                                              file.nombre_archivo
                                            : "http://172.16.100.112/archivos/" +
                                              file.nombre_archivo,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        class: file.class,
                                        staticStyle: { "font-size": "2rem" }
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "is-size-7" }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(file.nombre_archivo) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm.load == file.id
                                        ? _c("b-loading", {
                                            attrs: {
                                              active: _vm.isLoading,
                                              "can-cancel": true,
                                              "is-full-page": false
                                            },
                                            on: {
                                              "update:active": function(
                                                $event
                                              ) {
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
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm.foldersSgcTicket.length == 0
                          ? _c(
                              "section",
                              { staticClass: "section container" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "has-text-weight-normal" },
                                  [
                                    _vm._v(
                                      "\n                               " +
                                        _vm._s(
                                          _vm.folderSelectN == 9
                                            ? "No hay SGC asociados a este Pop"
                                            : "No hay Tickets asociados a este Pop"
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.folderSelectN == 11
                ? _c("div", [
                    _c(
                      "div",
                      { ref: "element", staticClass: "columns is-multiline" },
                      [
                        _vm._l(_vm.foldersOffice, function(folder) {
                          return _c(
                            "div",
                            {
                              key: folder.id,
                              staticClass: "column is-3 tile is-parent"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "box tile is-child",
                                  staticStyle: { position: "relative" },
                                  on: {
                                    click: function($event) {
                                      return _vm.selectedFolderOffice(folder)
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
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(folder.nombre) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("b-loading", {
                          attrs: {
                            "is-full-page": true,
                            active: _vm.isLoading,
                            "can-cancel": true
                          },
                          on: {
                            "update:active": function($event) {
                              _vm.isLoading = $event
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.filesRepositorioOffice, function(file) {
                          return _c(
                            "div",
                            {
                              key: file.id,
                              staticClass: "column is-3 tile is-parent"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "box tile is-child",
                                  staticStyle: { position: "relative" },
                                  attrs: {
                                    href:
                                      "http://172.16.100.112/" +
                                      file.directorio +
                                      "/" +
                                      file.nombre,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file",
                                    staticStyle: { "font-size": "2rem" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "is-size-7" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(file.nombre) +
                                        "\n                                "
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.photos.length
                ? _c("div", [
                    _c("hr"),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "container has-background-light" },
                      [
                        _c(
                          "b-carousel",
                          {
                            attrs: {
                              autoplay: false,
                              indicator: false,
                              overlay: _vm.gallery,
                              "icon-pack": "fas",
                              "indicator-custom": "",
                              "with-carousel-list": ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.switchGallery(true)
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "list",
                                  fn: function(props) {
                                    return [
                                      _c(
                                        "b-carousel-list",
                                        _vm._b(
                                          {
                                            attrs: {
                                              data: _vm.photos,
                                              "has-drag": true,
                                              "as-indicator": ""
                                            },
                                            on: {
                                              switch: function($event) {
                                                return props.switch(
                                                  $event,
                                                  false
                                                )
                                              }
                                            },
                                            model: {
                                              value: props.active,
                                              callback: function($$v) {
                                                _vm.$set(props, "active", $$v)
                                              },
                                              expression: "props.active"
                                            }
                                          },
                                          "b-carousel-list",
                                          _vm.al,
                                          false
                                        )
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              578850340
                            )
                          },
                          [
                            _vm._l(_vm.photos, function(item, i) {
                              return _c(
                                "b-carousel-item",
                                { key: i, staticClass: "has-text-centered" },
                                [
                                  _c("figure", { staticClass: "image" }, [
                                    _c("img", {
                                      staticStyle: {
                                        "max-height": "800px",
                                        width: "auto",
                                        display: "block"
                                      },
                                      attrs: { src: item.image }
                                    })
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.gallery
                              ? _c("span", {
                                  staticClass: "modal-close is-large",
                                  on: {
                                    click: function($event) {
                                      return _vm.switchGallery(false)
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._v(" "),
                            _c("template", { slot: "overlay" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "has-text-centered has-text-white"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Hello i'am overlay!\n                                "
                                  )
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.noFiles && !_vm.newFolderSelect
                ? _c("section", { staticClass: "section container" }, [
                    _c("div", { staticClass: "has-text-weight-normal" }, [
                      _vm._v(
                        "\n                        No hay archivos en esta sección.\n                    "
                      )
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
            "aria-modal": "",
            "aria-role": "dialog",
            "has-modal-card": "",
            "trap-focus": ""
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
              foldertab: _vm.folderTab,
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
            "aria-modal": "",
            "aria-role": "dialog",
            "has-modal-card": "",
            "trap-focus": ""
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
              foldertab: _vm.folderTab,
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
        [_vm._v("\n            Documentos\n           \n\n        ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block" }, [
      _c("div", { staticClass: "is-size-5 has-text-weight-semibold" }, [
        _vm._v(
          "\n                            Visor de fotos\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/documents/Documents.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pop/documents/Documents.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=7235ed48& */ "./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/documents/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=7235ed48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/documents/Documents.vue?vue&type=template&id=7235ed48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_7235ed48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);