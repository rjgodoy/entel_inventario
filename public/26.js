(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
//
//
//
//
//
//
//
//
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText'],
  data: function data() {
    return {
      chart: '',
      chartData: Array,
      data: {
        x: 'x',
        columns: [],
        type: 'bar',
        // groups: [
        //     ['Nuevos', 'Generador', 'Planta Rectificadora', 'Batería', 'Distribución', 'Clima', 'Espacio']
        // ],
        colors: {
          'Nuevos': '#005cff',
          'Eliminados': '#ff3c00' //     'Planta Rectificadora': 'rgba(104, 113, 220, 1)',
          //     'Batería': 'rgba(118, 103, 220, 1)',
          //     'Distribución': 'rgba(163, 103, 220, 1)',
          //     'Clima': 'rgba(199, 103, 220, 1)',
          //     'Espacio': 'rgba(220, 103, 206, 1)'

        }
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      axis: {
        x: {
          color: '#ffffff',
          //         label: {
          //             // text: 'X Label',
          //             // position: 'outer-center'
          //             // inner-right : default
          //             // inner-center
          //             // inner-left
          //             // outer-right
          //             // outer-center
          //             // outer-left
          //         },
          type: 'timeseries',
          tick: {
            format: '%B'
          }
        } //     y : {
        //         tick: {
        //             format: d3.format(".0%")
        //         }
        //     }

      },
      // grid: {
      //     x: {
      //         show: true,
      //         lines: [
      //             { 
      //                 value: moment().format('YYYY-MM') + '-01', 
      //                 text: 'Proyección',
      //                 // class: 'projection',
      //                 // position: 'start'
      //             },
      //         ]
      //     },
      //     y: {
      //         // show: true,
      //         // lines: [
      //             // { value: 50, text: 'Mitad' },
      //         // ]
      //     }
      // },
      tooltip: {
        format: {
          title: function title(d) {
            return 'Disponibilidad ' + moment(d).format('MMMM YYYY');
          } // value: d3.format('.1'),

        }
      }
    };
  },
  mounted: function mounted() {
    this.graphData(); // this.graph()
  },
  watch: {// chartData(val) {
    //     this.graph()
    // }
  },
  methods: {
    graphData: function graphData() {
      var _this = this;

      axios.get("/api/siteStats?api_token=".concat(this.user.api_token)).then(function (response) {
        console.log(response.data);
        _this.chartData = response.data.data;

        _this.graph();
      });
    },
    graph: function graph() {
      var dates = ['x'];
      var news = ['Nuevos'];
      var deleted = ['Eliminados'];
      this.chartData.forEach(function (element) {
        var d = new Date(element.year, element.month - 1, 1);
        dates.push(d);
      });
      this.chartData.forEach(function (element) {
        news.push(element.q_new);
      });
      this.chartData.forEach(function (element) {
        deleted.push(element.q_deleted);
      });
      this.data.columns.push(dates);
      this.data.columns.push(news);
      this.data.columns.push(deleted);
      var chart = c3__WEBPACK_IMPORTED_MODULE_0___default.a.generate({
        data: this.data,
        axis: this.axis,
        // grid: this.grid,
        tooltip: this.tooltip
      });
      this.chart = chart;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./../../../../node_modules/c3/c3.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/c3/c3.min.css"), "");

// module
exports.push([module.i, "\n/* .c3 .c3-axis.c3-axis-x g, */\n.c3 .c3-axis-x path[data-v-e3f1f366],\n.c3 .c3-axis-x line[data-v-e3f1f366] {\n    stroke: white;\n}\n/* .c3 .c3-axis.c3-axis-y g, */\n.c3 .c3-axis-y path[data-v-e3f1f366],\n.c3 .c3-axis-y line[data-v-e3f1f366] {\n    stroke: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "tile is-child box is-bold is-smart",
      class: _vm.boxBackground
    },
    [
      _c("div", {
        staticClass: "has-text-dark",
        staticStyle: { height: "200px", width: "100%" },
        attrs: { id: "chart" }
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
/* harmony import */ var _PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true& */ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true&");
/* harmony import */ var _PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PretDataChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& */ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PretDataChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3f1f366",
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

/***/ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=style&index=0&id=e3f1f366&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_style_index_0_id_e3f1f366_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/PretDataChart.vue?vue&type=template&id=e3f1f366&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PretDataChart_vue_vue_type_template_id_e3f1f366_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);