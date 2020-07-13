(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/blocks/room"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Room: function Room() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/room */ "chunks/pop/layout/room").then(__webpack_require__.bind(null, /*! ../../pop/layout/Room */ "./resources/js/components/pop/layout/Room.vue"));
    }
  },
  props: ['room', 'salas', 'user', 'pop'],
  data: function data() {
    return {
      totalCapacity: 0,
      usedCapacity: 0,
      totalPowerRectifiersCapacity: 0,
      usedPowerRectifiersCapacity: 0,
      availablePowerRectifiersCapacity: 0,
      totalBatteryCapacity: 0,
      usedBatteryCapacity: 0,
      availableBatteryCapacity: 0,
      totalSurface: 0,
      usedSurface: 0,
      isEditMode: false
    };
  },
  computed: {
    orderedRooms: function orderedRooms() {
      return _.orderBy(this.salas, 'order');
    },
    availableCapacity: function availableCapacity() {
      return this.totalCapacity - this.usedCapacity;
    },
    availableSurface: function availableSurface() {
      return this.totalSurface - this.usedSurface;
    }
  },
  watch: {
    room: function room(val) {
      this.totalCapacity = 0;
      this.usedCapacity = 0;
      this.totalSurface = 0;
      this.usedSurface = 0;
      this.totalPowerRectifiersCapacity = 0;
      this.usedPowerRectifiersCapacity = 0;
      this.availablePowerRectifiersCapacity = 0;
      this.totalBatteryCapacity = 0, this.usedBatteryCapacity = 0, this.availableBatteryCapacity = 0;
    }
  },
  mounted: function mounted() {// this.getAirConditioners()
    // this.getPowerRectifiers()
  },
  methods: {
    roomsDistribution: function roomsDistribution(value) {
      this.totalCapacity += value.totalCapacity;
      this.usedCapacity += value.usedCapacity;
    },
    roomsSurface: function roomsSurface(value) {
      this.totalSurface += value.totalSurface;
      this.usedSurface += value.usedSurface;
    },
    powerRectifiersTotalCapacity: function powerRectifiersTotalCapacity(value) {
      this.totalPowerRectifiersCapacity += value.totalPRCapacity;
      this.usedPowerRectifiersCapacity += value.usedPRCapacity;
      this.availablePowerRectifiersCapacity += value.availablePRCapacity;
    },
    batteryTotalCapacity: function batteryTotalCapacity(value) {
      this.totalBatteryCapacity += value.totalBatteryCapacity;
      this.usedBatteryCapacity += value.usedBatteryCapacity;
      this.availableBatteryCapacity += value.availableBatteryCapacity;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { padding: "24px" } },
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
            }
          }
        },
        [_vm._v("Editar Salas")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "columns tile is-ancestor" }, [
        _c("div", { staticClass: "column tile is-parent" }, [
          _c(
            "div",
            { staticClass: "columns is-multiline tile" },
            _vm._l(_vm.orderedRooms, function(sala) {
              return _c(
                "div",
                { key: sala.id, staticClass: "column tile is-parent is-6" },
                [
                  _c("Room", {
                    attrs: {
                      sala: sala,
                      room: _vm.room,
                      pop: _vm.pop,
                      user: _vm.user,
                      isEditMode: _vm.isEditMode
                    },
                    on: {
                      "room-distribution": _vm.roomsDistribution,
                      "room-surface": _vm.roomsSurface,
                      "power-rectifier-data": _vm.powerRectifiersTotalCapacity,
                      "battery-data": _vm.batteryTotalCapacity
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/blocks/Rooms.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Rooms.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rooms.vue?vue&type=template&id=da678dee& */ "./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee&");
/* harmony import */ var _Rooms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rooms.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rooms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/blocks/Rooms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rooms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Rooms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rooms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Rooms.vue?vue&type=template&id=da678dee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/blocks/Rooms.vue?vue&type=template&id=da678dee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Rooms_vue_vue_type_template_id_da678dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);