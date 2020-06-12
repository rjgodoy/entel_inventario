(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/infrastructure/SpaceChart"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
//
//
//
//
//
//

 // import am4themes_entel from "../../../constants/amChartsEntel.js";
// import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";

 // this.darkMode ? 
// am4core.useTheme(am4themes_dark) 
// : 
// am4core.useTheme(am4themes_entel)

_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      chart: null,
      chartData: []
    };
  },
  mounted: function mounted() {
    this.graphData(); // this.$eventBus.$on('getSitesData', this.graph)
  },
  // watch: {
  //     chartData(newValue, oldValue) {
  //         // if (this.chart) {
  //         //     this.chart.dispose()
  //         // }
  //         this.graph()
  //     }
  // },
  methods: {
    graphData: function graphData() {
      // axios.get(`/api/siteStats`).then((response) => {
      // console.log(response.data)
      // this.chartData = response.data
      this.graph(); // })
    },
    graph: function graph() {
      // Chart
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.$refs.chartdiv, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);
      chart.hiddenState.properties.opacity = 0;
      chart.colors.step = 2; // X axis

      var xAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxis"]());
      xAxis.dataFields.category = "x";
      xAxis.renderer.grid.template.location = 0;
      xAxis.renderer.minGridDistance = 10;
      xAxis.renderer.labels.template.disabled = true;
      xAxis.data = [{
        x: "1"
      }, {
        x: "2"
      }, {
        x: "3"
      }, {
        x: "4"
      }, {
        x: "5"
      }, {
        x: "6"
      }, {
        x: "7"
      }, {
        x: "8"
      }, {
        x: "9"
      }, {
        x: "10"
      }]; // Y axis

      var yAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxis"]());
      yAxis.renderer.labels.template.disabled = true;
      yAxis.renderer.grid.template.location = 0;
      yAxis.renderer.minGridDistance = 10;
      yAxis.dataFields.category = "y";
      yAxis.data = [{
        y: "1"
      }, {
        y: "2"
      }, {
        y: "3"
      }, {
        y: "4"
      }, {
        y: "5"
      }, {
        y: "6"
      }, {
        y: "7"
      }, {
        y: "8"
      }, {
        y: "9"
      }, {
        y: "10"
      }]; // Legend

      chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["Legend"](); // Create series

      function createSeries(name) {
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ColumnSeries"]());
        series.dataFields.categoryX = "x";
        series.dataFields.categoryY = "y";
        series.sequencedInterpolation = true;
        series.defaultState.transitionDuration = 3000;
        series.name = name; // Set up column appearance

        var column = series.columns.template;
        column.strokeWidth = 1;
        column.strokeOpacity = 1;
        column.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#ffffff");
        column.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["percent"](100);
        column.height = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["percent"](100); //column.column.cornerRadius(6, 6, 6, 6);

        return series;
      }

      var series1 = createSeries("Plantas CC");
      series1.data = [{
        x: "1",
        y: "1"
      }, {
        x: "1",
        y: "2"
      }, {
        x: "1",
        y: "3"
      }, {
        x: "1",
        y: "4"
      }, {
        x: "1",
        y: "5"
      }, {
        x: "1",
        y: "6"
      }, {
        x: "1",
        y: "7"
      }, {
        x: "1",
        y: "8"
      }, {
        x: "1",
        y: "9"
      }, {
        x: "1",
        y: "10"
      }, {
        x: "2",
        y: "1"
      }, {
        x: "2",
        y: "2"
      }, {
        x: "2",
        y: "3"
      }, {
        x: "2",
        y: "4"
      }, {
        x: "2",
        y: "5"
      }, {
        x: "2",
        y: "6"
      }, {
        x: "2",
        y: "7"
      }, {
        x: "2",
        y: "8"
      }, {
        x: "2",
        y: "9"
      }, {
        x: "2",
        y: "10"
      }, {
        x: "3",
        y: "1"
      }, {
        x: "3",
        y: "2"
      }, {
        x: "3",
        y: "3"
      }];
      var series2 = createSeries("Clima");
      series2.data = [{
        x: "3",
        y: "4"
      }, {
        x: "3",
        y: "5"
      }, {
        x: "3",
        y: "6"
      }, {
        x: "3",
        y: "7"
      }, {
        x: "3",
        y: "8"
      }, {
        x: "3",
        y: "9"
      }, {
        x: "3",
        y: "10"
      }, {
        x: "4",
        y: "1"
      }, {
        x: "4",
        y: "2"
      }, {
        x: "4",
        y: "3"
      }, {
        x: "4",
        y: "4"
      }, {
        x: "4",
        y: "5"
      }, {
        x: "4",
        y: "6"
      }, {
        x: "4",
        y: "7"
      }, {
        x: "4",
        y: "8"
      }, {
        x: "4",
        y: "9"
      }, {
        x: "4",
        y: "10"
      }, {
        x: "5",
        y: "1"
      }, {
        x: "5",
        y: "2"
      }, {
        x: "5",
        y: "3"
      }, {
        x: "5",
        y: "4"
      }, {
        x: "5",
        y: "5"
      }, {
        x: "5",
        y: "6"
      }];
      this.chart = chart;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    ref: "chartdiv",
    staticStyle: { height: "100px", width: "100%" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/infrastructure/SpaceChart.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pop/infrastructure/SpaceChart.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceChart.vue?vue&type=template&id=1d4ae1ea& */ "./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea&");
/* harmony import */ var _SpaceChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceChart.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpaceChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/infrastructure/SpaceChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceChart.vue?vue&type=template&id=1d4ae1ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/infrastructure/SpaceChart.vue?vue&type=template&id=1d4ae1ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceChart_vue_vue_type_template_id_1d4ae1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);