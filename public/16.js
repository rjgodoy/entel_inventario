(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
  props: ['bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'darkMode', 'chartData'],
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    this.graph(); // this.$eventBus.$on('getSitesData', this.graph)
  },
  beforeDestroy: function beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart.dispose();
    } // this.$eventBus.$off('getSitesData')

  },
  watch: {
    chartData: function chartData(newValue, oldValue) {
      this.graph();
    }
  },
  methods: {
    graph: function graph() {
      // data.forEach(element => console.log(element))

      /* Create chart instance */
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.$refs.chartdiv, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["RadarChart"]);
      /**
       * The XYChart for transit schema
       */
      // Create chart instance

      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.$refs.chartdiv, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);
      chart.padding(0, 0, 0, 0); // Title

      var title = chart.tooltipContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["Label"]);
      title.text = "Hong Kong Metro Map";
      title.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#00254b");
      title.fontSize = 25; //title.width = am4core.percent(100);
      //title.textAlign = "middle";

      title.x = 10;
      title.y = 10;

      function createAxis(list) {
        var axis = list.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.disabled = true;
        axis.renderer.baseGrid.disabled = true;
      } // Create axes


      createAxis(chart.xAxes);
      createAxis(chart.yAxes);

      function createLine(name, color, data) {
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["StepLineSeries"]());
        series.data = data;
        series.name = name; // Set up binding to data

        series.dataFields.valueX = "x";
        series.dataFields.valueY = "y"; // Set up appearance

        series.stroke = color;
        series.strokeWidth = 4;
        series.connect = false; //series.tensionX = 0.5;
        //series.tensionY = 0.5;
        // Set up dash

        series.propertyFields.strokeDasharray = "dash"; // Add bullets (stations)

        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CircleBullet"]());
        bullet.circle.radius = 6;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#fff");
        bullet.circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#000");
        bullet.circle.strokeWidth = 2;
        bullet.circle.tooltipText = "{station}";
      }

      function createConnector(data) {
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["LineSeries"]());
        series.data = data;
        series.hiddenInLegend = true; // Set up binding to data

        series.dataFields.valueX = "x";
        series.dataFields.valueY = "y"; // Set up appearance

        series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#999");
        series.strokeWidth = 12;
        series.connect = false; // Add bullets (stations)

        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CircleBullet"]());
        bullet.circle.radius = 6;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#fff");
        bullet.circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#000");
        bullet.circle.strokeWidth = 2;
        bullet.zIndex = -10;
      }

      createLine("Airport Express", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#008489"), [{
        station: "Asia-World Expo",
        x: 14,
        y: 50
      }, {
        station: "Airport",
        x: 12,
        y: 43
      }, {
        station: "Tsing Yi",
        x: 25.5,
        y: 56.5
      }, {
        station: "Kowloon",
        x: 31,
        y: 39
      }, {
        station: "Hong Kong",
        x: 43,
        y: 28
      }]);
      createLine("Disneyland Resort Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#ed6ea7"), [{
        station: "Sunny Bay",
        x: 22.5,
        y: 46.5
      }, {
        station: "Disneyland Resort",
        x: 24,
        y: 42
      }]);
      createLine("East Rail Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#63b9e9"), [{
        station: "Lok Ma Chau",
        x: 30,
        y: 88
      }, {
        station: "Sheung Shui",
        x: 38,
        y: 91
      }, {// break
      }, {
        station: "Lo Wu",
        x: 33,
        y: 91
      }, {
        station: "Sheung Shui",
        x: 38,
        y: 91
      }, {
        station: "Fanling",
        x: 43,
        y: 91
      }, {
        station: "Tai Wo",
        x: 48,
        y: 91
      }, {
        station: "Tai Po Market",
        x: 53,
        y: 91
      }, {
        station: "University",
        x: 59,
        y: 91
      }, {
        station: "Fo Tan",
        x: 61,
        y: 83
      }, {
        station: "Sha Tin",
        x: 61,
        y: 77
      }, {
        station: "Tai Wai",
        x: 61,
        y: 71
      }, {
        station: "Kowloon Tong",
        x: 61,
        y: 62
      }, {
        station: "Mong Kok East",
        x: 61,
        y: 52
      }, {
        station: "Hung Hom",
        x: 61,
        y: 37
      }, {// break
      }, {
        station: "University",
        x: 59,
        y: 91,
        dash: "3,3"
      }, {
        station: "Racecourse",
        x: 63,
        y: 83
      }, {
        station: "Sha Tin",
        x: 61,
        y: 77
      }]);
      createLine("Island Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#0075bf"), [{
        station: "Kennedy Town",
        x: 21,
        y: 22
      }, {
        station: "HKU",
        x: 27,
        y: 22
      }, {
        station: "Sai Ying Pun",
        x: 32,
        y: 22
      }, {
        station: "Sheung Wan",
        x: 38,
        y: 22
      }, {
        station: "Central",
        x: 42,
        y: 22
      }, {
        station: "Admiralty",
        x: 48,
        y: 22
      }, {
        station: "Wan Chai",
        x: 53,
        y: 22
      }, {
        station: "Causeway Bay",
        x: 58,
        y: 22
      }, {
        station: "Tin Hau",
        x: 63,
        y: 22
      }, {
        station: "Fortress Hill",
        x: 69,
        y: 22
      }, {
        station: "North Point",
        x: 74,
        y: 22
      }, {
        station: "Quarry Bay",
        x: 79,
        y: 22
      }, {
        station: "Tai Koo",
        x: 85,
        y: 22
      }, {
        station: "Sai Wan Ho",
        x: 90,
        y: 22
      }, {
        station: "Shau Key Wan",
        x: 95,
        y: 19
      }, {
        station: "Heng Fa Chuen",
        x: 97,
        y: 11
      }, {
        station: "Chai Wan",
        x: 97,
        y: 5
      }]);
      createLine("Kwun Tong Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#009e3d"), [{
        station: "Whampoa",
        x: 65,
        y: 38
      }, {
        station: "Ho Man Tin",
        x: 63,
        y: 41
      }, {
        station: "Yau Ma Tei",
        x: 52,
        y: 48
      }, {
        station: "Mong Kok",
        x: 52,
        y: 53
      }, {
        station: "Prince Edward",
        x: 52,
        y: 58
      }, {
        station: "Shek Kip Mei",
        x: 54,
        y: 62
      }, {
        station: "Kowloon Tong",
        x: 61,
        y: 62
      }, {
        station: "Lok Fu",
        x: 65,
        y: 62
      }, {
        station: "Wong Tai Sin",
        x: 69,
        y: 62
      }, {
        station: "Diamond Hill",
        x: 74,
        y: 62
      }, {
        station: "Kowloon Bay",
        x: 79,
        y: 62
      }, {
        station: "Shek Kip Mei",
        x: 82,
        y: 61
      }, {
        station: "Ngau Tau Kok",
        x: 83,
        y: 57
      }, {
        station: "Kwun Tong",
        x: 83,
        y: 52
      }, {
        station: "Lam Tin",
        x: 83,
        y: 46
      }, {
        station: "Yau Tong",
        x: 85,
        y: 42
      }, {
        station: "Tiu Keng Leng",
        x: 90,
        y: 42
      }]);
      createLine("Ma On Shan Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#97401d"), [{
        station: "Tai Wai",
        x: 63,
        y: 71
      }, {
        station: "Che Kung Temple",
        x: 69,
        y: 77
      }, {
        station: "Sha Tin Wai",
        x: 69,
        y: 83
      }, {
        station: "City One",
        x: 71,
        y: 91
      }, {
        station: "Shek Mun",
        x: 77,
        y: 91
      }, {
        station: "Tai Shui Hang",
        x: 82,
        y: 91
      }, {
        station: "Heng On",
        x: 87,
        y: 91
      }, {
        station: "Ma On Shan",
        x: 92,
        y: 91
      }, {
        station: "Wu Kai Sha",
        x: 97,
        y: 91
      }]);
      createLine("South Island Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#cdce00"), [{
        station: "South Horizons",
        x: 30,
        y: 7
      }, {
        station: "Lei Tung",
        x: 37,
        y: 7
      }, {
        station: "Wong Chuk Hang",
        x: 45,
        y: 12
      }, {
        station: "Ocean Park",
        x: 51,
        y: 15
      }, {
        station: "Admiralty",
        x: 48,
        y: 20
      }]);
      createLine("Tseung Kwan O Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#823f91"), [{
        station: "Tuen Mun",
        x: 6,
        y: 73
      }, {
        station: "Siu Hong",
        x: 6,
        y: 81
      }, {
        station: "Tin Shui Wai",
        x: 8,
        y: 91
      }, {
        station: "Long Ping",
        x: 10,
        y: 87
      }, {
        station: "Yuen Long",
        x: 10,
        y: 81
      }, {
        station: "Kam Sheung Road",
        x: 10,
        y: 75
      }, {
        station: "Tsuen Wan West",
        x: 12,
        y: 69
      }, {
        station: "Mei Foo",
        x: 35,
        y: 64
      }, {
        station: "Nam Cheong",
        x: 35,
        y: 56
      }, {
        station: "Austin",
        x: 45,
        y: 39
      }, {
        station: "East Tsim Sha Tsui",
        x: 54,
        y: 34
      }, {
        station: "Hung Hom",
        x: 59,
        y: 37
      }]);
      createLine("Tsuen Wan Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#e30613"), [{
        station: "Tsuen Wan",
        x: 12,
        y: 62
      }, {
        station: "Tai Wo Hau",
        x: 17,
        y: 62
      }, {
        station: "Kwai Hing",
        x: 22,
        y: 62
      }, {
        station: "Kwai Fong",
        x: 26,
        y: 62
      }, {
        station: "Lai King",
        x: 31,
        y: 62
      }, {
        station: "Mei Foo",
        x: 35,
        y: 62
      }, {
        station: "Lai Chi Kok",
        x: 39,
        y: 62
      }, {
        station: "Cheung Sha Wan",
        x: 44,
        y: 62
      }, {
        station: "Sham Shui Po",
        x: 48,
        y: 62
      }, {
        station: "Prince Edward",
        x: 50,
        y: 58
      }, {
        station: "Mong Kok",
        x: 50,
        y: 53
      }, {
        station: "Yau Ma Tei",
        x: 50,
        y: 48
      }, {
        station: "Jordan",
        x: 50,
        y: 43
      }, {
        station: "Tsim Sha Tsui",
        x: 50,
        y: 38
      }, {
        station: "Admiralty",
        x: 48,
        y: 24
      }, {
        station: "Central",
        x: 42,
        y: 24
      }]);
      createLine("Tung Chung Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#f49432"), [{
        station: "Tung Chung",
        x: 14,
        y: 38
      }, {
        station: "Sunny Bay",
        x: 21,
        y: 48
      }, {
        station: "Tsing Yi",
        x: 24,
        y: 58
      }, {
        station: "Lai King",
        x: 31,
        y: 60
      }, {
        station: "Nam Cheong",
        x: 33,
        y: 56
      }, {
        station: "Olympic",
        x: 33,
        y: 46
      }, {
        station: "Kowloon",
        x: 33,
        y: 39
      }, {
        station: "Hong Kong",
        x: 43,
        y: 30
      }]);
      createLine("West Rail Line", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#823f91"), [{
        station: "North Point",
        x: 74,
        y: 24
      }, {
        station: "Quarry Bay",
        x: 79,
        y: 24
      }, {
        station: "Yau Tong",
        x: 85,
        y: 40
      }, {
        station: "Tiu Keng Leng",
        x: 90,
        y: 40
      }, {
        station: "Tseung Kwan O",
        x: 95,
        y: 40
      }, {
        station: "Hang Hau",
        x: 97,
        y: 50
      }, {
        station: "Po Lam",
        x: 97,
        y: 58
      }, {// break
      }, {
        // back to "Tseung Kwan O" position
        x: 95,
        y: 40
      }, {
        station: "LOHAS Park",
        x: 97,
        y: 35
      }]); // Mei Foo

      createConnector([{
        x: 35,
        y: 64
      }, {
        x: 35,
        y: 62
      }]); // Lai King

      createConnector([{
        x: 31,
        y: 62
      }, {
        x: 31,
        y: 60
      }]); // Sunny Bay

      createConnector([{
        x: 22.5,
        y: 46.5
      }, {
        x: 21,
        y: 48
      }]); // Tsing Yi

      createConnector([{
        x: 25.5,
        y: 56.5
      }, {
        x: 24,
        y: 58
      }]); // Nam Cheong

      createConnector([{
        x: 35,
        y: 56
      }, {
        x: 33,
        y: 56
      }]); // Kowloon

      createConnector([{
        x: 31,
        y: 39
      }, {
        x: 33,
        y: 39
      }]); // Hong Kong

      createConnector([{
        x: 43,
        y: 28
      }, {
        x: 43,
        y: 30
      }]); // Central

      createConnector([{
        x: 42,
        y: 22
      }, {
        x: 42,
        y: 24
      }]); // Admiralty

      createConnector([{
        x: 48,
        y: 24
      }, {
        x: 48,
        y: 20
      }]); // North Point

      createConnector([{
        x: 74,
        y: 22
      }, {
        x: 74,
        y: 24
      }]); // Quarry Bay

      createConnector([{
        x: 79,
        y: 22
      }, {
        x: 79,
        y: 24
      }]); // Prince Edward

      createConnector([{
        x: 52,
        y: 58
      }, {
        x: 50,
        y: 58
      }]); // Mong Kok

      createConnector([{
        x: 52,
        y: 53
      }, {
        x: 50,
        y: 53
      }]); // Yau Ma Tei

      createConnector([{
        x: 52,
        y: 48
      }, {
        x: 50,
        y: 48
      }]); // Hung Hom

      createConnector([{
        x: 61,
        y: 37
      }, {
        x: 59,
        y: 37
      }]); // Tai Wai

      createConnector([{
        x: 61,
        y: 71
      }, {
        x: 63,
        y: 71
      }]); // Yau Tong

      createConnector([{
        x: 85,
        y: 42
      }, {
        x: 85,
        y: 40
      }]); // Tiu Keng Leng

      createConnector([{
        x: 90,
        y: 42
      }, {
        x: 90,
        y: 40
      }]);
      chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["Legend"]();
      chart.legend.position = "right";
      /**
      * The map for background
      */

      var bg = chart.plotContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["Image"]);
      bg.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["percent"](100);
      bg.height = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["percent"](100);
      bg.href = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/hk.png";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      staticClass: "tile is-child box is-paddingless",
      class: _vm.boxBackground,
      staticStyle: { width: "100%", height: "auto" }
    },
    [_c("div", { ref: "chartdiv", staticStyle: { height: "400px" } })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/RedCoreChart.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/dashboard/RedCoreChart.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedCoreChart.vue?vue&type=template&id=8ce4cd98& */ "./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98&");
/* harmony import */ var _RedCoreChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedCoreChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RedCoreChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/RedCoreChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedCoreChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RedCoreChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedCoreChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RedCoreChart.vue?vue&type=template&id=8ce4cd98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/RedCoreChart.vue?vue&type=template&id=8ce4cd98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedCoreChart_vue_vue_type_template_id_8ce4cd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);