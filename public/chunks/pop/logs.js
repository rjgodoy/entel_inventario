(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/logs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Log.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/Log.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



var bulmaQuickview = __webpack_require__(/*! ../../../../node_modules/bulma-quickview/src/js/index */ "./node_modules/bulma-quickview/src/js/index.js")["default"];

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'pop'],
  data: function data() {
    return {
      logs: Array,
      quickviews: Object,
      logY: null
    };
  },
  computed: {
    createdDate: function createdDate() {
      return moment(this.pop.created_at).format('MMMM DD, YYYY');
    }
  },
  created: function created() {
    this.$eventBus.$on('folder-created', this.getLogs);
    this.$eventBus.$on('folder-deleted', this.getLogs);
    this.$eventBus.$on('parameter-updated', this.getLogs);
  },
  mounted: function mounted() {
    moment.locale('es');
    this.quickviews = bulmaQuickview.attach();
    this.getLogs();
  },
  watch: {
    pop: function pop() {
      this.getLogs();
    }
  },
  methods: {
    getLogs: function getLogs() {
      var _this = this;

      axios.get("/api/logs/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this.logs = response.data.data;
      });
    },
    logCreation: function logCreation(logDate) {
      return moment(logDate).format('MMMM DD, YYYY');
    },
    logYear: function logYear(log) {
      this.logY = moment(log.created_at).format('YYYY');
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('folder-created');
    this.$eventBus.$off('folder-deleted');
    this.$eventBus.$off('parameter-updated');
  }
});

/***/ }),

/***/ "./node_modules/bulma-quickview/src/js/defaultOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/bulma-quickview/src/js/defaultOptions.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultOptions = {
};

/* harmony default export */ __webpack_exports__["default"] = (defaultOptions);


/***/ }),

/***/ "./node_modules/bulma-quickview/src/js/events.js":
/*!*******************************************************!*\
  !*** ./node_modules/bulma-quickview/src/js/events.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
class EventEmitter {
  constructor(listeners = []) {
    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  listenerCount(eventName) {
    if (!this._listeners.has(eventName)) {
      return 0;
    }

    const eventListeners = this._listeners.get(eventName);
    return eventListeners.length;
  }

  removeListeners(eventName = null, middleware = false) {
    if (eventName !== null) {
      if (Array.isArray(eventName)) {
        name.forEach(e => this.removeListeners(e, middleware));
      } else {
        this._listeners.delete(eventName);

        if (middleware) {
          this.removeMiddleware(eventName);
        }
      }
    } else {
      this._listeners = new Map();
    }
  }

  middleware(eventName, fn) {
    if (Array.isArray(eventName)) {
      name.forEach(e => this.middleware(e, fn));
    } else {
      if (!Array.isArray(this._middlewares.get(eventName))) {
        this._middlewares.set(eventName, []);
      }

      (this._middlewares.get(eventName)).push(fn);
    }
  }

  removeMiddleware(eventName = null) {
    if (eventName !== null) {
      if (Array.isArray(eventName)) {
        name.forEach(e => this.removeMiddleware(e));
      } else {
        this._middlewares.delete(eventName);
      }
    } else {
      this._middlewares = new Map();
    }
  }

  on(name, callback, once = false) {
    if (Array.isArray(name)) {
      name.forEach(e => this.on(e, callback));
    } else {
      name = name.toString();
      const split = name.split(/,|, | /);

      if (split.length > 1) {
        split.forEach(e => this.on(e, callback));
      } else {
        if (!Array.isArray(this._listeners.get(name))) {
          this._listeners.set(name, []);
        }

        (this._listeners.get(name)).push({once: once, callback: callback});
      }
    }
  }

  once(name, callback) {
    this.on(name, callback, true);
  }

  emit(name, data, silent = false) {
    name = name.toString();
    let listeners = this._listeners.get(name);
    let middlewares = null;
    let doneCount = 0;
    let execute = silent;

    if (Array.isArray(listeners)) {
      listeners.forEach((listener, index) => {
        // Start Middleware checks unless we're doing a silent emit
        if (!silent) {
          middlewares = this._middlewares.get(name);
          // Check and execute Middleware
          if (Array.isArray(middlewares)) {
            middlewares.forEach(middleware => {
              middleware(data, (newData = null) => {
                if (newData !== null) {
                  data = newData;
                }
                doneCount++;
              }, name);
            });

            if (doneCount >= middlewares.length) {
              execute = true;
            }
          } else {
            execute = true;
          }
        }

        // If Middleware checks have been passed, execute
        if (execute) {
          if (listener.once) {
            listeners[index] = null;
          }
          listener.callback(data);
        }
      });

      // Dirty way of removing used Events
      while (listeners.indexOf(null) !== -1) {
        listeners.splice(listeners.indexOf(null), 1);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/bulma-quickview/src/js/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bulma-quickview/src/js/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bulmaQuickview; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./node_modules/bulma-quickview/src/js/events.js");
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultOptions */ "./node_modules/bulma-quickview/src/js/defaultOptions.js");



const onQuickviewShowClick = Symbol('onQuickviewShowClick');
const onQuickviewDismissClick = Symbol('onQuickviewDismissClick');

class bulmaQuickview extends _events__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(selector, options = {}) {
    super();

    this.element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    this.options = {
      ..._defaultOptions__WEBPACK_IMPORTED_MODULE_1__["default"],
      ...options
    };

    this[onQuickviewShowClick] = this[onQuickviewShowClick].bind(this);
    this[onQuickviewDismissClick] = this[onQuickviewDismissClick].bind(this);

    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = '[data-show="quickview"]', options = {}) {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaQuickview(element, options));
      }, 100);
    });
    return instances;
  }

  /**
   * Initiate plugin
   * @method init
   * @return {void}
   */
  init() {
    this.quickview = document.getElementById(this.element.dataset['target']);
    this.dismissElements = document.querySelectorAll('[data-dismiss="quickview"]');

    this._bindEvents();

    this.emit('quickview:ready', {
      element: this.element,
      quickview: this.quickview
    });
  }

  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    this._clickEvents.forEach(event => {
      this.element.addEventListener(event, this[onQuickviewShowClick], false);
    });

    [].forEach.call(this.dismissElements, dismissElement => {
      this._clickEvents.forEach(event => {
        dismissElement.addEventListener(event, this[onQuickviewDismissClick], false);
      });
    });
  }

  [onQuickviewShowClick](e) {
    this.quickview.classList.add('is-active');

    this.emit('quickview:show', {
      element: this.element,
      quickview: this.quickview
    });
  }

  [onQuickviewDismissClick](e) {
    this.quickview.classList.remove('is-active');

    this.emit('quickview:hide', {
      element: this.element,
      quickview: this.quickview
    });
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "quickview has-text-dark",
      staticStyle: { background: "rgba(255,255,255,0.87)" },
      attrs: { id: "quickviewDefault" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "quickview-body" }, [
        _c("div", { staticClass: "quickview-block section" }, [
          _c(
            "div",
            { staticClass: "timeline is-centered" },
            [
              _c("header", { staticClass: "timeline-header" }, [
                _c("span", { staticClass: "tag is-medium is-smart" }, [
                  _c("div", { staticClass: "has-text-weight-bold" }, [
                    _vm._v("Creación: " + _vm._s(_vm.createdDate))
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.logs.length
                ? _c("div", { staticClass: "timeline-item is-positive" }, [
                    _c("div", { staticClass: "timeline-marker is-positive" }),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.logs, function(log) {
                return _c(
                  "div",
                  {
                    key: log.id,
                    staticClass: "timeline-item",
                    class: log.log_type.background
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "timeline-marker is-icon",
                        class: log.log_type.background
                      },
                      [
                        _c("font-awesome-icon", {
                          attrs: {
                            icon: [log.log_type.icon_type, log.log_type.icon]
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "timeline-content" }, [
                      _c("div", {}, [
                        _c(
                          "p",
                          {
                            staticClass: "heading",
                            staticStyle: { "padding-top": "10px" }
                          },
                          [_vm._v(_vm._s(_vm.logCreation(log.created_at)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "is-size-6",
                            staticStyle: { "padding-top": "5px" }
                          },
                          [_vm._v(_vm._s(log.description))]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "is-size-7" }, [
                          _vm._v(
                            _vm._s(log.user.name) +
                              " " +
                              _vm._s(log.user.apellido)
                          )
                        ])
                      ])
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _vm.logs.length
                ? _c("header", { staticClass: "timeline-header" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "tag is-medium is-smart has-text-weight-bold"
                      },
                      [_vm._v("No hay mas registros en este PoP")]
                    )
                  ])
                : _vm._e()
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "quickview-footer" })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "quickview-header" }, [
      _c("p", { staticClass: "title has-text-weight-bold" }, [
        _vm._v("Log de registros")
      ]),
      _vm._v(" "),
      _c("span", {
        staticClass: "delete",
        attrs: { "data-dismiss": "quickview" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-content" }, [
      _c("p", { staticClass: "heading" }, [_vm._v("Actualmente,")]),
      _vm._v(" "),
      _c("p", [_vm._v("No existen registros en este PoP")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/Log.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/pop/Log.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.vue?vue&type=template&id=284eee2a& */ "./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a&");
/* harmony import */ var _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/Log.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/Log.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pop/Log.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=template&id=284eee2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/Log.vue?vue&type=template&id=284eee2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_284eee2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);