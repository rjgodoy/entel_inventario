(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/modals/projection"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _ProjectionChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectionChart */ "./resources/js/components/capacity/modals/ProjectionChart.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrashAlt"]);

var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProjectionChart: _ProjectionChart__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ['data', 'user'],
  data: function data() {
    return {
      loaded: false,
      // data,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5
    };
  },
  watch: {
    data: function data(newValue) {// console.log(newValue)
      // this.fillData()
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['chartData'],
  data: function data() {
    return {
      chart: '',
      data: {
        x: 'x',
        columns: [],
        types: {
          'Empalme': 'step',
          'Generador': 'step',
          'Planta Rectificadora': 'step',
          'Batería': 'step',
          'Distribución': 'step',
          'Clima': 'step',
          'Espacio': 'step'
        } // groups: [
        //     ['Empalme', 'Generador', 'Planta Rectificadora', 'Batería', 'Distribución', 'Clima', 'Espacio']
        // ],
        // colors: {
        //     'Empalme': 'rgba(102, 183, 220, 1)',
        //     'Generador': 'rgba(104, 148, 220, 1)',
        //     'Planta Rectificadora': 'rgba(104, 113, 220, 1)',
        //     'Batería': 'rgba(118, 103, 220, 1)',
        //     'Distribución': 'rgba(163, 103, 220, 1)',
        //     'Clima': 'rgba(199, 103, 220, 1)',
        //     'Espacio': 'rgba(220, 103, 206, 1)'
        // }

      },
      axis: {
        x: {
          label: {// text: 'X Label',
            // position: 'outer-center'
            // inner-right : default
            // inner-center
            // inner-left
            // outer-right
            // outer-center
            // outer-left
          },
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        },
        y: {
          tick: {
            format: d3__WEBPACK_IMPORTED_MODULE_1__["format"](".0%")
          }
        }
      },
      grid: {
        x: {
          show: true,
          lines: [{
            value: moment().format('YYYY-MM') + '-01',
            text: 'Proyección' // class: 'projection',
            // position: 'start'

          }]
        },
        y: {// show: true,
          // lines: [
          // { value: 50, text: 'Mitad' },
          // ]
        }
      },
      tooltip: {
        format: {
          title: function title(d) {
            return 'Disponibilidad ' + moment(d).format('MMMM YYYY');
          },
          value: d3__WEBPACK_IMPORTED_MODULE_1__["format"]('.1%')
        }
      },
      regions: [{
        start: moment().format('YYYY-MM') + '-01',
        end: this.chartData[0].projected_at // class: 'projection' 

      }],
      zoom: {
        enabled: true
      },
      subchart: {
        show: true
      },
      color: {
        pattern: ['#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
      }
    };
  },
  mounted: function mounted() {
    this.graph();
  },
  methods: {
    graph: function graph() {
      var dates = ['x'];
      var junctionData = ['Empalme'];
      var generatorData = ['Generador'];
      var rectifierData = ['Planta Rectificadora'];
      var batteryData = ['Batería'];
      var distributionData = ['Distribución'];
      var climateData = ['Clima'];
      var spaceData = ['Espacio'];
      this.chartData.forEach(function (element) {
        dates.push(element.projected_at);
      });
      this.chartData.forEach(function (element) {
        junctionData.push(element.junction);
      });
      this.chartData.forEach(function (element) {
        generatorData.push(element.generator);
      });
      this.chartData.forEach(function (element) {
        rectifierData.push(element.rectifier);
      });
      this.chartData.forEach(function (element) {
        batteryData.push(element.battery);
      });
      this.chartData.forEach(function (element) {
        distributionData.push(element.distribution);
      });
      this.chartData.forEach(function (element) {
        climateData.push(element.climate);
      });
      this.chartData.forEach(function (element) {
        spaceData.push(element.space);
      });
      this.data.columns.push(dates);
      this.data.columns.push(junctionData);
      this.data.columns.push(generatorData);
      this.data.columns.push(rectifierData);
      this.data.columns.push(batteryData);
      this.data.columns.push(distributionData);
      this.data.columns.push(climateData);
      this.data.columns.push(spaceData);
      var chart = c3__WEBPACK_IMPORTED_MODULE_0___default.a.generate({
        data: this.data,
        axis: this.axis,
        grid: this.grid,
        tooltip: this.tooltip,
        regions: this.regions,
        zoom: this.zoom,
        subchart: this.subchart,
        color: this.color
      });
      this.chart = chart;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./../../../../../node_modules/c3/c3.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/c3/c3.min.css"), "");

// module
exports.push([module.i, "\n/* .c3-region.projection {\n    fill: green;\n} */\n\n/* .c3-xgrid-line.projection line {\n    stroke: blue;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          { staticClass: "box" },
          [
            _c(
              "div",
              {
                staticClass: "has-text-centered has-text-dark is-size-5",
                staticStyle: { "padding-bottom": "20px" }
              },
              [_vm._v("Disponibilidad de Potencia")]
            ),
            _vm._v(" "),
            _c("ProjectionChart", { attrs: { chartData: _vm.data } })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "box" },
          [
            _c(
              "b-field",
              { attrs: { grouped: "", "group-multiline": "" } },
              [
                _c(
                  "b-select",
                  {
                    model: {
                      value: _vm.defaultSortDirection,
                      callback: function($$v) {
                        _vm.defaultSortDirection = $$v
                      },
                      expression: "defaultSortDirection"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "asc" } }, [
                      _vm._v("Default sort direction: ASC")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "desc" } }, [
                      _vm._v("Default sort direction: DESC")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-select",
                  {
                    attrs: { disabled: !_vm.isPaginated },
                    model: {
                      value: _vm.perPage,
                      callback: function($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "5" } }, [
                      _vm._v("5 per page")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "10" } }, [
                      _vm._v("10 per page")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "15" } }, [
                      _vm._v("15 per page")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "20" } }, [
                      _vm._v("20 per page")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      attrs: { disabled: !_vm.isPaginated },
                      on: {
                        click: function($event) {
                          _vm.currentPage = 2
                        }
                      }
                    },
                    [_vm._v("Set page to 2")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "control is-flex" },
                  [
                    _c(
                      "b-switch",
                      {
                        model: {
                          value: _vm.isPaginated,
                          callback: function($$v) {
                            _vm.isPaginated = $$v
                          },
                          expression: "isPaginated"
                        }
                      },
                      [_vm._v("Paginated")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "control is-flex" },
                  [
                    _c(
                      "b-switch",
                      {
                        attrs: { disabled: !_vm.isPaginated },
                        model: {
                          value: _vm.isPaginationSimple,
                          callback: function($$v) {
                            _vm.isPaginationSimple = $$v
                          },
                          expression: "isPaginationSimple"
                        }
                      },
                      [_vm._v("Simple pagination")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-select",
                  {
                    attrs: { disabled: !_vm.isPaginated },
                    model: {
                      value: _vm.paginationPosition,
                      callback: function($$v) {
                        _vm.paginationPosition = $$v
                      },
                      expression: "paginationPosition"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "bottom" } }, [
                      _vm._v("bottom pagination")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "top" } }, [
                      _vm._v("top pagination")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "both" } }, [_vm._v("both")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-select",
                  {
                    model: {
                      value: _vm.sortIcon,
                      callback: function($$v) {
                        _vm.sortIcon = $$v
                      },
                      expression: "sortIcon"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "arrow-up" } }, [
                      _vm._v("Arrow sort icon")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "menu-up" } }, [
                      _vm._v("Caret sort icon")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "chevron-up" } }, [
                      _vm._v("Chevron sort icon ")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-select",
                  {
                    model: {
                      value: _vm.sortIconSize,
                      callback: function($$v) {
                        _vm.sortIconSize = $$v
                      },
                      expression: "sortIconSize"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "is-small" } }, [
                      _vm._v("Small sort icon")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Regular sort icon")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "is-medium" } }, [
                      _vm._v("Medium sort icon")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "is-large" } }, [
                      _vm._v("Large sort icon")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    attrs: {
                      label: "Nueva proyección",
                      position: "is-right",
                      type: "is-dark"
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "button",
                        on: {
                          click: function($event) {
                            return _vm.alert("new")
                          }
                        }
                      },
                      [
                        _c("font-awesome-icon", {
                          staticClass: "has-text-link",
                          attrs: { icon: ["fas", "plus"] }
                        })
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-table", {
              attrs: {
                data: _vm.data,
                paginated: _vm.isPaginated,
                "per-page": _vm.perPage,
                "current-page": _vm.currentPage,
                "pagination-simple": _vm.isPaginationSimple,
                "pagination-position": _vm.paginationPosition,
                "default-sort-direction": _vm.defaultSortDirection,
                "sort-icon": _vm.sortIcon,
                "sort-icon-size": _vm.sortIconSize,
                "default-sort": "id",
                "aria-next-label": "Next page",
                "aria-previous-label": "Previous page",
                "aria-page-label": "Page",
                "aria-current-label": "Current page"
              },
              on: {
                "update:currentPage": function($event) {
                  _vm.currentPage = $event
                },
                "update:current-page": function($event) {
                  _vm.currentPage = $event
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "id",
                            label: "ID",
                            width: "40",
                            sortable: "",
                            numeric: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.id) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "junction",
                            label: "Empalme",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.junction) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "generator",
                            label: "Generador",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.generator) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "rectifier",
                            label: "Rectificador",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.rectifier) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "battery",
                            label: "Batterías",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.battery) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "distribution",
                            label: "Distribución",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.distribution) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "climate",
                            label: "Clima",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.climate) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "space",
                            label: "Espacio",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.space) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "date",
                            label: "Fecha",
                            sortable: "",
                            centered: ""
                          }
                        },
                        [
                          _c("span", { staticClass: "tag is-success" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  new Date(
                                    props.row.year,
                                    props.row.month,
                                    1
                                  ).toLocaleDateString()
                                ) +
                                "\n                            "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-table-column", [
                        _c(
                          "button",
                          { staticClass: "button has-text-danger is-small" },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: ["far", "trash-alt"] }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ])
  ])
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
        [_vm._v("Proyección")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "chart" }, [
      _c("div", { attrs: { id: "chart" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/modals/Projection.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Projection.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projection.vue?vue&type=template&id=3ee54fae& */ "./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae&");
/* harmony import */ var _Projection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projection.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/modals/Projection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Projection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projection.vue?vue&type=template&id=3ee54fae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/Projection.vue?vue&type=template&id=3ee54fae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projection_vue_vue_type_template_id_3ee54fae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/capacity/modals/ProjectionChart.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/capacity/modals/ProjectionChart.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true& */ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true&");
/* harmony import */ var _ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectionChart.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& */ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9410a800",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/modals/ProjectionChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectionChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=style&index=0&id=9410a800&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_style_index_0_id_9410a800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);