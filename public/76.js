(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

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
/* harmony import */ var _ProjectionChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectionChart */ "./resources/js/components/capacity/modals/ProjectionChart.vue");


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
var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _ProjectionChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['data'],
  data: function data() {
    return {
      loaded: false,
      // chartData: [],
      // options: {
      //     responsive: true,
      //     // title: {
      //     //     display: false,
      //     //     text: 'Disponibilidad de Potencia',
      //     // },
      //     tooltips: {
      //         position: 'average',
      //         mode: 'index',
      //         intersect: false,
      //     },
      //     scales: {
      //         xAxes: [{
      //             gridLines: {
      //                 display: true
      //             },
      //             type: 'time',
      //             time: {
      //                 unit: 'month'
      //             },
      //             displayFormats: {
      //                 month: 'MMM'
      //             },
      //         }],
      //         yAxes: [{
      //             gridLines: {
      //                 display: true
      //             },
      //             ticks: {
      //                 min: 0,
      //                 max: 100,
      //                 stepSize: 20
      //             }
      //         }]
      //     },
      //     annotation: {
      //         annotations: [{
      //             type: 'line',
      //             // drawTime: 'afterDatasetsDraw',
      //             mode: 'vertical',
      //             scaleID: 'x-axis-0',
      //             value: new Date(),
      //             // endValue: new Date(this.data[0].year, this.data[0].month, 1),
      //             // borderColor: 'rgb(75, 192, 192)',
      //             borderWidth: 3,
      //             label: {
      //                 enabled: true,
      //                 content: 'Proyección',
      //                 position: "top",
      //                 xPadding: 10,
      //                 yPadding: 10,
      //                 xAdjust: -64,
      //                 yAdjust: 32,
      //             }
      //         },{
      //             type: 'line',
      //             // drawTime: 'afterDatasetsDraw',
      //             mode: 'vertical',
      //             scaleID: 'x-axis-0',
      //             value: new Date(),
      //             // endValue: new Date(this.data[0].year, this.data[0].month, 1),
      //             // borderColor: 'rgb(75, 192, 192)',
      //             borderWidth: 2,
      //             label: {
      //                 enabled: true,
      //                 content: 'Histórico',
      //                 position: "top",
      //                 xPadding: 10,
      //                 yPadding: 10,
      //                 xAdjust: 64,
      //                 yAdjust: 32,
      //             }
      //         }]
      //     } 
      // },
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
  methods: {// fillData () {
    //     this.loaded = false
    //     var labels = []; var junction = []; var generator = []; var rectifier = [];
    //     var battery = []; var distribution = []; var climate = []; var space = [];
    //     this.data.forEach(element => {
    //         var i = 0;
    //         labels.push(new Date(element.year, element.month, 1))
    //         i++
    //     })
    //     this.data.forEach(element => junction.push( numeral(element.junction * 100).format('0.0') ))
    //     this.data.forEach(element => generator.push( numeral(element.generator * 100).format('0.0') ))
    //     this.data.forEach(element => rectifier.push( numeral(element.rectifier * 100).format('0.0') ))
    //     this.data.forEach(element => battery.push( numeral(element.battery * 100).format('0.0') ))
    //     this.data.forEach(element => distribution.push( numeral(element.distribution * 100).format('0.0') ))
    //     this.data.forEach(element => climate.push( numeral(element.climate * 100).format('0.0') ))
    //     this.data.forEach(element => space.push( numeral(element.space * 100).format('0.0') ))
    //     this.chartData = {
    //         labels: labels,
    //         datasets: [
    //             {
    //                 label: 'Empalme',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(102, 183, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(102, 183, 220, 0.2)",
    //                 strokeColor: "rgba(102, 183, 220, 1)",
    //                 pointColor: "rgba(102, 183, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(102, 183, 220, 1)",
    //                 backgroundColor: "rgba(102, 183, 220, 1)",
    //                 data: junction
    //             },
    //             {
    //                 label: 'Generador',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(104, 148, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(104, 148, 220, 0.2)",
    //                 strokeColor: "rgba(104, 148, 220, 1)",
    //                 pointColor: "rgba(104, 148, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(104, 148, 220, 1)",
    //                 backgroundColor: "rgba(104, 148, 220, 1)",
    //                 data: generator
    //             },
    //             {
    //                 label: 'Planta',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(104, 113, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(104, 113, 220, 0.2)",
    //                 strokeColor: "rgba(104, 113, 220, 1)",
    //                 pointColor: "rgba(104, 113, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(104, 113, 220, 1)",
    //                 backgroundColor: "rgba(104, 113, 220, 1)",
    //                 data: rectifier
    //             },
    //             {
    //                 label: 'Baterías',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(118, 103, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(118, 103, 220, 0.2)",
    //                 strokeColor: "rgba(118, 103, 220, 1)",
    //                 pointColor: "rgba(118, 103, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(118, 103, 220, 1)",
    //                 backgroundColor: "rgba(118, 103, 220, 1)",
    //                 data: battery
    //             },
    //             {
    //                 label: 'Distribución',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(163, 103, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(163, 103, 220, 0.2)",
    //                 strokeColor: "rgba(163, 103, 220, 1)",
    //                 pointColor: "rgba(163, 103, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(163, 103, 220, 1)",
    //                 backgroundColor: "rgba(163, 103, 220, 1)",
    //                 data: distribution
    //             },
    //             {
    //                 label: 'Clima',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(199, 103, 220, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(199, 103, 220, 0.2)",
    //                 strokeColor: "rgba(199, 103, 220, 1)",
    //                 pointColor: "rgba(199, 103, 220, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(199, 103, 220, 1)",
    //                 backgroundColor: "rgba(199, 103, 220, 1)",
    //                 data: climate
    //             },
    //             {
    //                 label: 'Espacio',
    //                 steppedLine: 'before',
    //                 borderColor: 'rgba(220, 103, 206, 0.8)',
    //                 fill: false,
    //                 fillColor: "rgba(220, 103, 206, 0.2)",
    //                 strokeColor: "rgba(220, 103, 206, 1)",
    //                 pointColor: "rgba(220, 103, 206, 1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(220, 103, 206, 1)",
    //                 backgroundColor: "rgba(220, 103, 206, 1)",
    //                 data: space
    //             }
    //         ]
    //     }
    //     this.loaded = true
    // }
  }
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
/* harmony import */ var vue_d3_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-d3-charts */ "./node_modules/vue-d3-charts/dist/vue-d3-charts.esm.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    D3LineChart: vue_d3_charts__WEBPACK_IMPORTED_MODULE_0__["D3LineChart"]
  },
  props: ['chart_data'],
  data: function data() {
    return {
      chart_config: {
        values: ['junction', 'generator', 'rectifier', 'battery', 'distribution', 'climate', 'space'],
        date: {
          key: 'projected_at',
          inputFormat: '%Y-%m-%d',
          outputFormat: '%Y-%m'
        },
        tooltip: {
          labels: ['Empalme', 'Grupo Electrógeno', 'Planta Rectificadora', 'Batería', 'Distribución', 'Espacio']
        },
        axis: {
          yFormat: '.1s',
          yTicks: 6,
          yTitle: 'Lorem ipsum',
          xTicks: 5
        },
        color: {
          scheme: ['#41B882', '#222f3e'],
          current: "#1f77b4"
        },
        curve: 'curveStep',
        transition: {
          ease: 'easeBounceOut',
          duration: 1000
        }
      }
    };
  },
  watch: {// chart_data(val) {
    //     console.log(val)
    // }
  },
  mounted: function mounted() {
    console.log(this.chart_data);
  },
  beforeDestroy: function beforeDestroy() {}
});

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
        _c("LineChart", { attrs: { chart_data: _vm.data } })
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
                _c("option", { attrs: { value: "5" } }, [_vm._v("5 per page")]),
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
                        "\n                    " +
                          _vm._s(props.row.id) +
                          "\n                "
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
                        "\n                    " +
                          _vm._s(props.row.junction) +
                          "\n                "
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
                        "\n                    " +
                          _vm._s(props.row.generator) +
                          "\n                "
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
                        "\n                    " +
                          _vm._s(props.row.rectifier) +
                          "\n                "
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
                        "\n                    " +
                          _vm._s(props.row.battery) +
                          "\n                "
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
                        "\n                    " +
                          _vm._s(props.row.distribution) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      attrs: { field: "climate", label: "Clima", sortable: "" }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(props.row.climate) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    {
                      attrs: { field: "space", label: "Espacio", sortable: "" }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(props.row.space) +
                          "\n                "
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
                          "\n                        " +
                            _vm._s(
                              new Date(
                                props.row.year,
                                props.row.month,
                                1
                              ).toLocaleDateString()
                            ) +
                            "\n                    "
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field" }, [
      _c(
        "div",
        {
          staticClass:
            "has-text-weight-semibold has-text-dark is-size-3 has-text-left"
        },
        [_vm._v("Proyección")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("D3LineChart", {
    attrs: { config: _vm.chart_config, datum: _vm.chart_data }
  })
}
var staticRenderFns = []
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
/* harmony import */ var _ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectionChart.vue?vue&type=template&id=9410a800& */ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&");
/* harmony import */ var _ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectionChart.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectionChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectionChart.vue?vue&type=template&id=9410a800& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/modals/ProjectionChart.vue?vue&type=template&id=9410a800&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectionChart_vue_vue_type_template_id_9410a800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);