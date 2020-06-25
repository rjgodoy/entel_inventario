(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/documents"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VuePagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      "default": 4
    },
    primaryText: String
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _VuePagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VuePagination.vue */ "./resources/js/components/VuePagination.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileExcel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileImage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalUpload: function ModalUpload() {
      return __webpack_require__.e(/*! import() | chunks/documents/modals/upload */ "chunks/documents/modals/upload").then(__webpack_require__.bind(null, /*! ./modals/ModalUpload */ "./resources/js/components/documents/modals/ModalUpload.vue"));
    },
    ModalNewFolder: function ModalNewFolder() {
      return __webpack_require__.e(/*! import() | chunks/documents/modals/newFolder */ "chunks/documents/modals/newFolder").then(__webpack_require__.bind(null, /*! ./modals/ModalNewFolder */ "./resources/js/components/documents/modals/ModalNewFolder.vue"));
    },
    ModalNewRootFolder: function ModalNewRootFolder() {
      return __webpack_require__.e(/*! import() | chunks/documents/modals/newRootFolder */ "chunks/documents/modals/newRootFolder").then(__webpack_require__.bind(null, /*! ./modals/ModalNewRootFolder */ "./resources/js/components/documents/modals/ModalNewRootFolder.vue"));
    },
    VuePagination: _VuePagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['user'],
  data: function data() {
    return {
      sideFolders: [],
      meta: {
        total: 0,
        per_page: 20,
        from: 1,
        to: 0,
        current_page: 1
      },
      folders: [],
      files: [],
      photos: [],
      activeTab: 0,
      showCam: true,
      multiline: true,
      isLoading: false,
      load: 0,
      canCreateFolder: false,
      canDeleteFolder: false,
      canUploadFile: false,
      canDeleteFile: false,
      canViewProcedimientosTab: false,
      canViewManualesTab: false,
      canCreateManuales: false,
      canCreateProcedimientos: false,
      searchText: '',
      edit: false,
      isUploadModalActive: false,
      isNewFolderModalActive: false,
      isNewRootFolderModalActive: false,
      currentFolderView: {
        id: null,
        parent_id: null
      },
      currentSideFolderView: {
        id: null,
        parent_id: null
      },
      // parentViewId: null,
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
      }
    };
  },
  created: function created() {
    this.$eventBus.$on('reload-files', this.getFiles);
  },
  mounted: function mounted() {
    this.getSideFolders();
  },
  computed: {
    folderTab: {
      get: function get() {
        return this.baseTabs[this.activeTab];
      },
      set: function set(val) {
        console.log(val);
        this.bread = '';
        this.currentFolderView = {
          id: null,
          parent_id: null
        };
        this.currentSideFolderView = {
          id: null,
          parent_id: null
        };
        this.meta.current_page = 1;
        val == 8 || val == 9 ? this.getFolders() : this.getSideFolders();
        this.folders = [];
        this.files = [];
        this.photos = [];
      }
    },
    baseTabs: function baseTabs() {
      return [{
        id: 1,
        label: 'Informes',
        content: 'Informes: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 2,
        label: 'Documentos',
        content: 'Documentos: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 3,
        label: 'Fotos',
        content: 'Fotos: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 4,
        label: 'Construcción',
        content: 'Construcción: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 5,
        label: 'Obras Civiles',
        content: 'Obras Civiles: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 6,
        label: 'CAM',
        content: 'CAM: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 7,
        label: 'Levantamientos Ingeniería',
        content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 8,
        label: 'Gestión Ambiental',
        content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
        displayed: true,
        asideView: true
      }, {
        id: 9,
        label: 'Procedimientos',
        content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
        displayed: this.canViewProcedimientosTab,
        asideView: false
      }, {
        id: 10,
        label: 'Manuales',
        content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
        displayed: this.canViewManualesTab,
        asideView: false
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
    },
    isNewRootFolderModalActive: function isNewRootFolderModalActive(val) {
      val == false && this.getSideFolders();
    }
  },
  methods: {
    selectedSide: function selectedSide(folder) {
      this.currentFolderView = folder; // this.folders.length && this.currentFolderView.parent_id ? this.setBreadcrum(folder.name) : this.bread = ''

      this.getFolders();
      this.getFiles();
      this.currentSideFolderView = folder;
    },
    selected: function selected(folder) {
      // this.parentViewId = this.currentFolderView.id
      this.currentFolderView = folder;
      this.folders.length && this.currentFolderView.parent_id ? this.setBreadcrum(folder.name) : this.bread = '';
      this.getFolders();
      this.getFiles();
    },
    getSideFolders: function getSideFolders() {
      var _this = this;

      // console.log(this.currentFolderView.id)
      var params = {
        'api_token': this.user.api_token,
        'page': this.meta.current_page,
        'folder_name': this.folderTab.label,
        // 'folder_id': this.currentFolderView.id,
        'text': this.searchText
      };
      axios.get("/api/sideFolders", {
        params: params
      }).then(function (response) {
        // console.log(response.data)
        _this.meta = response.data.meta;
        _this.sideFolders = response.data.folders;
        _this.canCreateFolder = response.data.can.create;
        _this.canDeleteFolder = response.data.can["delete"];
        _this.canViewProcedimientosTab = response.data.can.viewProcedimientos;
        _this.canViewManualesTab = response.data.can.viewManuales;
        _this.canCreateProcedimientos = response.data.can.createProcedimientos;
        _this.canCreateManuales = response.data.can.createManuales;
      });
    },
    getFolders: function getFolders() {
      var _this2 = this;

      // console.log(this.currentFolderView.id)
      var params = {
        'api_token': this.user.api_token,
        'folder_name': this.folderTab.label,
        'folder_id': this.currentFolderView.id // 'text': this.searchText,

      };
      axios.get("/api/folders", {
        params: params
      }).then(function (response) {
        _this2.folders = (_this2.activeTab == 8 || _this2.activeTab == 9) && !_this2.currentFolderView.id ? response.data.folders[0].subfolders : response.data.folders;
        _this2.canCreateFolder = response.data.can.create;
        _this2.canDeleteFolder = response.data.can["delete"];
        _this2.canViewProcedimientosTab = response.data.can.viewProcedimientos;
        _this2.canViewManualesTab = response.data.can.viewManuales;
        console.log(_this2.currentFolderView);
      });
    },
    // File Management
    getFiles: function getFiles() {
      var _this3 = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_name': this.folderTab.label,
        'folder_id': this.currentFolderView.id
      };
      this.files = [];
      this.photos = [];
      axios.get("/api/files", {
        params: params
      }).then(function (response) {
        response.data.files.forEach(function (element) {
          if (element.extension != 'jpg' && element.extension != 'png' && element.extension != 'jpeg' && element.extension != 'tiff') {
            _this3.files.push(element);
          } else {
            console.log(element);
            element.image = '/storage/' + element.route;

            _this3.photos.push(element);
          }
        });
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
        'api_token': this.user.api_token,
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
          //     // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(objectUrl);
        }, 100);
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
    confirmDeleteFolder: function confirmDeleteFolder(folder) {
      var _this5 = this;

      // console.log(folder)
      this.$buefy.dialog.confirm({
        message: 'Desea eliminar esta carpeta?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          var params = {
            'api_token': _this5.user.api_token,
            'user_id': _this5.user.id
          };
          axios["delete"]("/api/folders/".concat(folder.id), {
            params: params
          }).then(function (response) {
            // console.log(response)
            _this5.getFolders();
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
      var _this6 = this;

      this.$buefy.dialog.confirm({
        message: 'Desea eliminar este archivo?',
        type: 'is-danger',
        onConfirm: function onConfirm() {
          axios["delete"]("/api/files/".concat(file.id, "?api_token=").concat(_this6.user.api_token)).then(function (response) {
            console.log(response);

            _this6.getFiles();
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
    clearSearch: function clearSearch() {
      this.searchText = ''; // this.popSearch = []
      // this.selectedPop = null
      // this.selectedPops = []
      // this.selectedCrm = null
      // this.selectedZona = null

      this.getSideFolders();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('reload-files');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass: "pagination is-centered is-small",
      attrs: { role: "navigation", "aria-label": "pagination" }
    },
    [
      _c(
        "ul",
        { staticClass: "pagination-list" },
        [
          _vm.pagination.current_page == 1
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-previous",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Previous",
                      disabled: ""
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Previous")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pagination.current_page > 1
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-previous",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Previous"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.changePage(_vm.pagination.current_page - 1)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Previous")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.pagesNumber, function(page) {
            return _c("li", [
              _c(
                "a",
                {
                  staticClass: "pagination-link",
                  class:
                    page == _vm.pagination.current_page
                      ? "is-current"
                      : _vm.primaryText,
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changePage(page)
                    }
                  }
                },
                [_vm._v(_vm._s(page))]
              )
            ])
          }),
          _vm._v(" "),
          _vm.pagination.current_page < _vm.pagination.last_page
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-next",
                    attrs: { href: "javascript:void(0)", "aria-label": "Next" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.changePage(_vm.pagination.current_page + 1)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Next Page")]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pagination.current_page == _vm.pagination.last_page
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-next",
                    attrs: {
                      href: "javascript:void(0)",
                      "aria-label": "Next",
                      disabled: ""
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        class: _vm.primaryText,
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v("Next Page")]
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "section",
      { staticClass: "section box", staticStyle: { padding: "auto 0 auto 0" } },
      [
        _c("div", { staticClass: "level" }, [
          _c(
            "div",
            {
              staticClass: "level-item",
              staticStyle: { "margin-top": "-24px", "margin-bottom": "-48px" }
            },
            [
              _c(
                "b-tabs",
                {
                  attrs: { type: "is-toggle", expanded: "" },
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
                _vm._l(_vm.tabs, function(tab, index) {
                  return tab.displayed
                    ? _c("b-tab-item", {
                        key: index,
                        attrs: { label: tab.label }
                      })
                    : _vm._e()
                }),
                1
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "section", staticStyle: { "padding-top": "0px" } },
      [
        _c("div", { staticClass: "columns tile is-ancestor" }, [
          _vm.baseTabs[_vm.activeTab].asideView
            ? _c("aside", { staticClass: "column is-2 tile is-parent" }, [
                _c("div", { staticClass: "box tile is-child" }, [
                  _c("div", { staticClass: "field" }, [
                    _c(
                      "p",
                      { staticClass: "control has-icons-left has-icons-right" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchText,
                              expression: "searchText"
                            }
                          ],
                          staticClass: "input",
                          attrs: {
                            type: "text",
                            "arial-label": "Buscar",
                            placeholder: "Buscar...",
                            autofocus: ""
                          },
                          domProps: { value: _vm.searchText },
                          on: {
                            keyup: _vm.getSideFolders,
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.searchText = $event.target.value
                              },
                              function($event) {
                                _vm.meta.current_page = 1
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "icon is-small is-left" },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "search" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "icon is-small is-right" }, [
                          _c("button", {
                            staticClass: "delete",
                            on: { click: _vm.clearSearch }
                          })
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "field" }, [
                    _c("table", { staticClass: "table" }, [
                      _c(
                        "tbody",
                        _vm._l(_vm.sideFolders, function(folder) {
                          return _c("tr", { key: folder.id }, [
                            _c(
                              "td",
                              {
                                class:
                                  folder.id == _vm.currentFolderView.id &&
                                  "has-background-link has-text-white"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.selectedSide(folder)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "columns",
                                        class:
                                          folder.id == _vm.currentFolderView.id
                                            ? "has-text-white"
                                            : "has-text-grey-dark"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "column is-2" },
                                          [
                                            _c("font-awesome-icon", {
                                              staticClass: "has-text-smart",
                                              attrs: {
                                                icon: ["fas", "folder-open"],
                                                size: "2x"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        folder.site
                                          ? _c(
                                              "div",
                                              { staticClass: "column" },
                                              [
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold is-size-7"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        folder.site
                                                          ? folder.site.nem_site
                                                          : folder.pop
                                                          ? folder.pop.sites[0]
                                                              .nem_site
                                                          : ""
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-normal is-size-6"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        folder.site
                                                          ? folder.site.nombre
                                                          : folder.pop
                                                          ? folder.pop.sites[0]
                                                              .nombre
                                                          : ""
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !folder.site
                                          ? _c(
                                              "div",
                                              { staticClass: "column" },
                                              [
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-semibold is-size-7"
                                                  },
                                                  [_vm._v(_vm._s(folder.name))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "has-text-weight-normal is-size-6"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(folder.created_at)
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "level" }, [
                      _c(
                        "nav",
                        {
                          staticClass: "level-left pagination",
                          attrs: {
                            role: "navigation",
                            "aria-label": "pagination"
                          }
                        },
                        [
                          _c("vue-pagination", {
                            attrs: { pagination: _vm.meta, offset: 1 },
                            on: {
                              paginate: function($event) {
                                return _vm.getSideFolders()
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "column tile is-parent" }, [
            _c("div", { staticClass: "box tile is-child" }, [
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
                  _vm.folders.length ||
                  _vm.files.length ||
                  !_vm.baseTabs[_vm.activeTab].asideView ||
                  _vm.currentFolderView.id
                    ? _c("div", { staticClass: "column has-text-right" }, [
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
                                [_vm._v("Subir archivos")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.canCreateFolder
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
                                [_vm._v("Nueva Carpeta")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.canCreateFolder
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
                      ])
                    : _vm._e()
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
              _c(
                "div",
                { staticClass: "container" },
                [
                  _c(
                    "b-carousel",
                    {
                      attrs: {
                        autoplay: false,
                        "with-carousel-list": "",
                        indicator: false,
                        overlay: _vm.gallery
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "list",
                          fn: function(props) {
                            return [
                              _c("b-carousel-list", {
                                attrs: {
                                  data: _vm.photos,
                                  config: _vm.al,
                                  refresh: _vm.gallery,
                                  "as-indicator": ""
                                },
                                on: {
                                  switch: function($event) {
                                    return props.switch($event, false)
                                  }
                                },
                                model: {
                                  value: props.active,
                                  callback: function($$v) {
                                    _vm.$set(props, "active", $$v)
                                  },
                                  expression: "props.active"
                                }
                              })
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._l(_vm.photos, function(item, i) {
                        return _c("b-carousel-item", { key: i }, [
                          _c(
                            "figure",
                            {
                              staticClass: "image",
                              on: {
                                click: function($event) {
                                  return _vm.switchGallery(true)
                                }
                              }
                            },
                            [_c("img", { attrs: { src: item.image } })]
                          )
                        ])
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
                          { staticClass: "has-text-centered has-text-white" },
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
              ),
              _vm._v(" "),
              _vm.noFiles
                ? _c("section", { staticClass: "section container" }, [
                    _c("div", { staticClass: "has-text-weight-normal" }, [
                      _vm._v("No hay archivos en esta sección.")
                    ])
                  ])
                : _vm._e()
            ])
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
                folder: _vm.currentFolderView,
                folderTab: _vm.folderTab,
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
                folder: _vm.currentFolderView,
                folderTab: _vm.folderTab,
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
              active: _vm.isNewRootFolderModalActive,
              "has-modal-card": "",
              "trap-focus": "",
              "aria-role": "dialog",
              "aria-modal": ""
            },
            on: {
              "update:active": function($event) {
                _vm.isNewRootFolderModalActive = $event
              }
            }
          },
          [
            _c("modal-new-root-folder", {
              attrs: { folderTab: _vm.folderTab, user: _vm.user }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/VuePagination.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/VuePagination.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuePagination.vue?vue&type=template&id=77006965& */ "./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&");
/* harmony import */ var _VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuePagination.vue?vue&type=script&lang=js& */ "./resources/js/components/VuePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VuePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VuePagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/VuePagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VuePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/VuePagination.vue?vue&type=template&id=77006965& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VuePagination.vue?vue&type=template&id=77006965& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VuePagination.vue?vue&type=template&id=77006965&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePagination_vue_vue_type_template_id_77006965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/documents/Documents.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=0aba2186& */ "./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/documents/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=0aba2186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Documents.vue?vue&type=template&id=0aba2186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_0aba2186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);