(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _constants_amChartsEntel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/amChartsEntel.js */ "./resources/js/constants/amChartsEntel.js");
//
//
//
//
//
//


 // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// this.darkMode ? 
// am4core.useTheme(am4themes_dark) 
// : 

_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_constants_amChartsEntel_js__WEBPACK_IMPORTED_MODULE_2__["default"]); // am4core.useTheme(am4themes_animated);

_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["disposeAllCharts"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      // chart: null,
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
      var _this = this;

      axios.get("/api/siteStats?api_token=".concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this.chartData = response.data;

        _this.graph();
      });
    },
    graph: function graph() {
      // Create chart instance
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.$refs.chartdiv, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]); // Add data

      this.chartData.data.forEach(function (element) {
        chart.data.push({
          "date": new Date(element.year, element.month - 1, 1),
          "new": element.q_new,
          "deleted": element.q_deleted
        });
      });
      var title = chart.titles.create();
      title.text = "Ingresos y retiros de sitios";
      title.fontSize = 16;
      title.marginBottom = 30;
      title.align = 'left';
      title.fontWeight = 'bold'; // Create axes

      var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["DateAxis"]());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.labels.template.location = 0;
      dateAxis.renderer.minGridDistance = 30;
      dateAxis.renderer.cellStartLocation = 7;
      dateAxis.renderer.cellEndLocation = 23;
      dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
      dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");
      var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]()); // Create series

      function createSeries(field, name) {
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ColumnSeries"]());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.name = name;
        series.tooltipText = "{name}: [b]{valueY}[/]";
        series.strokeWidth = 2;
      }

      createSeries("new", "Nuevos");
      createSeries("deleted", "Eliminados");
      chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYCursor"](); // chart.scrollbarX = new am4core.Scrollbar();
      // // Create axes
      // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
      // dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");
      // dateAxis.renderer.grid.template.location = 0;
      // dateAxis.renderer.labels.template.location = 0.5;
      // dateAxis.renderer.minGridDistance = 30;
      // dateAxis.renderer.cellStartLocation = 10;
      // dateAxis.renderer.cellEndLocation = 20;
      // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.min = 0;
      // valueAxis.title.text = "Cantidad (Q)";
      // valueAxis.fontSize = 12;
      // // Create series
      // function createSeries(field, name) {
      //     let series = chart.series.push(new am4charts.ColumnSeries());
      //     series.dataFields.valueY = field;
      //     series.dataFields.dateX = "date";
      //     series.name = name;
      //     series.columns.template.tooltipText = "[font-size: 12px]{name}: [bold font-size: 12px]{valueY}[/]";
      //     series.strokeWidth = 2;
      //     // series.columns.template.width = am4core.percent(50);
      // }
      // createSeries("new", "Nuevos");
      // createSeries("deleted", "Eliminados");
      // Add legend
      // chart.legend = new am4charts.Legend();
      // this.chart = chart;
    }
  },
  beforeDestroy: function beforeDestroy() {
    // if (this.chart) {
    this.chart.dispose(); // }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366& ***!
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
    "article",
    {
      staticClass: "tile is-child box",
      class: _vm.boxBackground,
      staticStyle: { padding: "10px" }
    },
    [
      _c("div", {
        ref: "chartdiv",
        staticStyle: { height: "200px", width: "100%" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/PretDataChart.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/PretDataChart.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PretDataChart.vue?vue&type=template&id=e3f1f366& */ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&");
/* harmony import */ var _PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PretDataChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/PretDataChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PretDataChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PretDataChart.vue?vue&type=template&id=e3f1f366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/constants/amChartsEntel.js":
/*!*************************************************!*\
  !*** ./resources/js/constants/amChartsEntel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts4_internal_core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/.internal/core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _amcharts_amcharts4_internal_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/.internal/core/utils/Color */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js");
/**
 * A color scheme inspired by {@link https://datavizproject.com/}
 */



var theme = function theme(object) {
  if (Object(_amcharts_amcharts4_internal_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
    object.list = [Object(_amcharts_amcharts4_internal_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#005cff"), Object(_amcharts_amcharts4_internal_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF3E00"), Object(_amcharts_amcharts4_internal_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#10069f"), Object(_amcharts_amcharts4_internal_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#cccccc")];
    object.reuse = false;
    object.stepOptions = {
      lightness: 0.05,
      hue: 0
    };
    object.passOptions = {};
  }
};

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

}]);