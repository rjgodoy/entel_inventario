(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/themes/entel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/entel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ITheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITheme */ "./node_modules/@amcharts/amcharts4/.internal/themes/ITheme.js");
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/Color */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js");
/**
 * A color scheme inspired by {@link https://datavizproject.com/}
 */


var theme = function (object) {
    if (Object(_ITheme__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
        object.list = [
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#005CFF"), // azul
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF3C00"), // rojo oscuro
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF3C00"), // rojo claro
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#f05440") //  rojo más claro
        ];
        object.reuse = false;
        object.stepOptions = {
            lightness: 0.05,
            hue: 0
        };
        object.passOptions = {};
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=dataviz.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/themes/entel.js":
/*!**********************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/entel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_entel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/entel */ "./node_modules/@amcharts/amcharts4/.internal/themes/entel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_entel__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=dataviz.js.map

/***/ }),

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
/* harmony import */ var _amcharts_amcharts4_themes_entel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/entel.js */ "./node_modules/@amcharts/amcharts4/themes/entel.js");
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

_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_entel_js__WEBPACK_IMPORTED_MODULE_2__["default"]); // am4core.useTheme(am4themes_animated);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      chart: null,
      chartData: []
    };
  },
  mounted: function mounted() {
    this.graph();
    this.graphData(); // this.$eventBus.$on('getSitesData', this.graph)
  },
  watch: {
    chartData: function chartData(newValue, oldValue) {
      if (this.chart) {
        this.chart.dispose();
      }

      this.graph();
    }
  },
  methods: {
    graphData: function graphData() {
      var _this = this;

      axios.get("/api/siteStats").then(function (response) {
        console.log(response.data);
        _this.chartData = response.data;
      });
    },
    graph: function graph() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.$refs.chartdiv, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]); // Add data

      chart.data = this.chartData.data; // chart.data = [ 
      //     {
      //         "month": "Julio",
      //         "new": 4,
      //         "eliminated": 2
      //     }, {
      //         "month": "Agosto",
      //         "new": 10,
      //         "eliminated": 5
      //     }, {
      //         "month": "Septiembre",
      //         "new": 3,
      //         "eliminated": 0
      //     }, {
      //         "month": "Octubre",
      //         "new": 5,
      //         "eliminated": 1
      //     }, {
      //         "month": "Noviembre",
      //         "new": 6,
      //         "eliminated": 1
      //     }, {
      //         "month": "Diciembre",
      //         "new": 3,
      //         "eliminated": 4
      //     } 
      // ];

      var title = chart.titles.create();
      title.text = "Ingresos y retiros de sitios";
      title.fontSize = 16;
      title.marginBottom = 30;
      title.align = 'center';
      title.fontWeight = 'bold'; // Create axes

      var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxis"]());
      categoryAxis.dataFields.category = "mes"; // categoryAxis.title.text = "Ingresos y retiros de sitios";
      // categoryAxis.title.fontSize = 16;
      // categoryAxis.title.align = 'left'

      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 5;
      categoryAxis.renderer.cellStartLocation = 0.4;
      categoryAxis.renderer.cellEndLocation = 0.6;
      var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]());
      valueAxis.min = 0;
      valueAxis.title.text = "Cantidad (Q)";
      valueAxis.title.fontSize = 12; // Create series

      function createSeries(field, name, stacked) {
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ColumnSeries"]());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "mes";
        series.name = name;
        series.columns.template.tooltipText = "[font-size: 12px]{name}: [bold font-size: 12px]{valueY}[/]";
        series.stacked = stacked;
        series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["percent"](65);
        series.fontSize = 12;
      }

      createSeries("new", "Nuevos", false); // createSeries("eliminated", "Eliminados", false);
      // Add legend
      // chart.legend = new am4charts.Legend();

      this.chart = chart;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart.dispose();
    } // this.$eventBus.$off('getSitesData')

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
      staticStyle: { width: "100%", height: "auto", "margin-top": "-20px" }
    },
    [_c("div", { ref: "chartdiv", staticStyle: { height: "100%" } })]
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



/***/ })

}]);