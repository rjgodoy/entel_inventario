(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Log.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Log.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
var bulmaQuickview = __webpack_require__(/*! ../../../../node_modules/bulma-quickview/src/js/index */ "./node_modules/bulma-quickview/src/js/index.js")["default"];

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'pop'],
  data: function data() {
    return {
      logs: Array,
      quickviews: Object
    };
  },
  mounted: function mounted() {
    this.quickviews = bulmaQuickview.attach();
    this.getLogs();
  },
  watch: {
    user: function user(newValue) {// console.log('changed user')
    },
    pop: function pop(newValue) {// console.log('changed pop')
    }
  },
  methods: {
    getLogs: function getLogs() {
      var _this = this;

      axios.get("/api/logs/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        _this.logs = response.data.data;
      });
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      attrs: { id: "quickviewDefault" }
    },
    [
      _c("header", { staticClass: "quickview-header" }, [
        _c("p", { staticClass: "title" }, [
          _vm._v("Log " + _vm._s(_vm.pop.id))
        ]),
        _vm._v(" "),
        _c("span", {
          staticClass: "delete",
          attrs: { "data-dismiss": "quickview" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "quickview-body" }, [
        _c("div", { staticClass: "quickview-block section" }, [
          _c(
            "div",
            { staticClass: "timeline is-centered" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.logs, function(log) {
                return _c(
                  "div",
                  {
                    staticClass: "timeline-item",
                    class: log.log_type.background
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-marker is-warning is-image is-32x32"
                      },
                      [_c("img", { attrs: { src: "/" + log.user.avatar } })]
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
                          [_vm._v(_vm._s(log.created_at))]
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
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4)
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
    return _c("header", { staticClass: "timeline-header" }, [
      _c("span", { staticClass: "tag is-medium is-primary" }, [_vm._v("Start")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-item is-primary" }, [
      _c("div", { staticClass: "timeline-marker is-primary" }),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("January 2016")]),
        _vm._v(" "),
        _c("p", [_vm._v("Timeline content - Can include any HTML element")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "timeline-header" }, [
      _c("span", { staticClass: "tag is-primary" }, [_vm._v("2017")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-item is-danger" }, [
      _c("div", { staticClass: "timeline-marker is-danger is-icon" }, [
        _c("i", { staticClass: "fa fa-flag" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("March 2017")]),
        _vm._v(" "),
        _c("p", [_vm._v("Timeline content - Can include any HTML element")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "timeline-header" }, [
      _c("span", { staticClass: "tag is-medium is-primary" }, [_vm._v("End")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pops/Log.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/pops/Log.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.vue?vue&type=template&id=02132da2& */ "./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2&");
/* harmony import */ var _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Log.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Log.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pops/Log.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=template&id=02132da2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Log.vue?vue&type=template&id=02132da2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_02132da2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);