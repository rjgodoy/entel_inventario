(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Files */ "./resources/js/components/documents/Files.vue"));
    }
  },
  props: ['user'],
  data: function data() {
    return {
      folders: [],
      foldersView: [],
      files: [],
      folder_name: 'Fotos',
      canUploadFile: false,
      canDeleteFile: false,
      canCreateFolder: false,
      canDeleteFolder: false,
      searchtext: '',
      folder_id: null
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    this.getFolders();
  },
  methods: {
    textFromChild: function textFromChild(text) {
      this.searchtext = text;
      this.getFolders();
    },
    folderFromChild: function folderFromChild(id) {
      this.folder_id = id; // console.log(this.folder_id)

      this.getFoldersView();
      this.getFiles();
    },
    getFolders: function getFolders() {
      var _this = this;

      var params = {
        'api_token': this.user.api_token,
        'name': this.folder_name,
        'text': this.searchtext
      };
      axios.get("/api/folders", {
        params: params
      }).then(function (response) {
        // console.log(response)
        _this.folders = response.data.folders;
        _this.canCreateFolder = response.data.can.create;
        _this.canDeleteFolder = response.data.can["delete"];
      });
    },
    getFoldersView: function getFoldersView() {
      var _this2 = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_id': this.folder_id
      };
      axios.get("/api/getFolders", {
        params: params
      }).then(function (response) {
        // console.log(response)
        _this2.foldersView = response.data.folders;
        _this2.canCreateFolder = response.data.can.create;
        _this2.canDeleteFolder = response.data.can["delete"];
      });
    },
    getFiles: function getFiles() {
      var _this3 = this;

      var params = {
        'api_token': this.user.api_token,
        'folder_id': this.folder_id
      };
      axios.get("/api/getFiles", {
        params: params
      }).then(function (response) {
        console.log(response.data);
        _this3.files = response.data.files;
        _this3.canUploadFile = response.data.can.upload;
        _this3.canDeleteFile = response.data.can["delete"];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86& ***!
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
    [
      _c("Files", {
        attrs: {
          files: _vm.files,
          folders: _vm.folders,
          foldersView: _vm.foldersView,
          folder_name: _vm.folder_name,
          user: _vm.user,
          canCreateFolder: _vm.canCreateFolder,
          canDeleteFolder: _vm.canDeleteFolder
        },
        on: {
          textChildToParent: _vm.textFromChild,
          folderIdChildToParent: _vm.folderFromChild
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/documents/Fotos.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/documents/Fotos.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fotos.vue?vue&type=template&id=b5250b86& */ "./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86&");
/* harmony import */ var _Fotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fotos.vue?vue&type=script&lang=js& */ "./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/documents/Fotos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Fotos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Fotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Fotos.vue?vue&type=template&id=b5250b86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/documents/Fotos.vue?vue&type=template&id=b5250b86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fotos_vue_vue_type_template_id_b5250b86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);