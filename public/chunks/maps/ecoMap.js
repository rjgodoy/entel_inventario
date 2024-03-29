(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/maps/ecoMap"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

 // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'pops', 'map_attributes'],
  data: function data() {
    return {
      selectedPopMap: null,
      map: null,
      zoom: this.map_attributes.zoom,
      center: {
        lat: this.map_attributes.latitude,
        lng: this.map_attributes.longitude
      },
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      // clusterActive: 1,
      buttonText: '',
      style1: [{
        "featureType": "water",
        "stylers": [{
          "saturation": 43
        }, {
          "lightness": -11
        }, {
          "hue": "#0088ff"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "hue": "#ff0000"
        }, {
          "saturation": -100
        }, {
          "lightness": 99
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#808080"
        }, {
          "lightness": 54
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ece2d9"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ccdca1"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#767676"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#b8cb93"
        }]
      }, {
        "featureType": "poi.park",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.sports_complex",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.medical",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "simplified"
        }]
      }],
      style2: [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
          "invert_lightness": true
        }, {
          "saturation": 10
        }, {
          "lightness": 30
        }, {
          "gamma": 0.5
        }, {
          "hue": "#435158"
        }]
      }],
      style3: [{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fffffa"
        }]
      }, {
        "featureType": "water",
        "stylers": [{
          "lightness": 50
        }]
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "lightness": 40
        }]
      }],
      style4: [{
        "stylers": [{
          "hue": "#18a689"
        }, {
          "visibility": "on"
        }, {
          "invert_lightness": true
        }, {
          "saturation": 40
        }, {
          "lightness": 10
        }]
      }],
      style5: [{
        featureType: "landscape",
        stylers: [{
          saturation: -100
        }, {
          lightness: 65
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "poi",
        stylers: [{
          saturation: -100
        }, {
          lightness: 51
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "road.highway",
        stylers: [{
          saturation: -100
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "road.arterial",
        stylers: [{
          saturation: -100
        }, {
          lightness: 30
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "road.local",
        stylers: [{
          saturation: -100
        }, {
          lightness: 40
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "transit",
        stylers: [{
          saturation: -100
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "administrative.province",
        stylers: [{
          visibility: "off"
        }]
        /**/

      }, {
        featureType: "administrative.locality",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "administrative.neighborhood",
        stylers: [{
          visibility: "on"
        }]
        /**/

      }, {
        featureType: "water",
        elementType: "labels",
        stylers: [{
          visibility: "on"
        }, {
          lightness: -25
        }, {
          saturation: -100
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          hue: "#ffff00"
        }, {
          lightness: -25
        }, {
          saturation: -97
        }]
      }],
      style6: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }],
      style7: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8ec3b9"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1a3646"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#64779e"
        }]
      }, {
        "featureType": "administrative.neighborhood",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#334e87"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#283d6a"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6f9ba5"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3C7680"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#304a7d"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2c6675"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#255763"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#b0d5ce"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#283d6a"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3a4762"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#0e1626"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#4e6d70"
        }]
      }],
      style8: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }],
      style9: [{
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }]
    };
  },
  computed: {
    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__["gmapApi"],
    mapStyle: function mapStyle() {
      return this.darkMode ? this.style8 : this.style9;
    }
  },
  created: function created() {},
  mounted: function mounted() {// if (this.clusterActive == 1) {
    //     this.buttonText = 'Desagrupar'
    // } else {
    //     this.buttonText = 'Agrupar'
    // }
    // this.$refs.map.$mapPromise.then((map) => {
    //     var myButton = document.getElementById('myClusterButton');
    //     myButton.index = 1;
    //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(myButton)
    // })
  },
  watch: {
    pops: function pops(newValue, oldValue) {
      newValue.length == 1 ? this.setPop() : this.setPops();
    }
  },
  methods: {
    toggleInfoWindow: function toggleInfoWindow(pop, idx) {
      var _this = this;

      this.infoWindowPos = {
        lat: parseFloat(pop.latitude),
        lng: parseFloat(pop.longitude)
      };
      axios.get("/api/popInfo?pop_id=".concat(pop.id)).then(function (response) {
        console.log(response.data);
        _this.infoContent = _this.getInfoWindowContent(response.data);
      }); // this.infoContent = this.getInfoPop(pop);
      //check if its the same pop that was selected if yes toggle

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } //if different pop set infowindow to open and reset current pop index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }

      this.$refs.map.$mapPromise.then(function (map) {
        map.panTo({
          lat: parseFloat(pop.latitude),
          lng: parseFloat(pop.longitude)
        });
      });
    },
    getInfoWindowContent: function getInfoWindowContent(pop) {
      var class_id = 6;
      var class_type;

      if (pop.sites) {
        pop.sites.forEach(function (item) {
          if (item.classification_type_id && item.classification_type_id < class_id) {
            class_id = item.classification_type_id;
            class_type = item.classification_type.classification_type;
          }
        });
      }

      return "\n                <div class=\"card\">\n                    <!--div class=\"card-image\">\n                        <figure class=\"image is-4by3\">\n                            <img src=\"https://bulma.io/images/placeholders/640x480.png\" alt=\"Placeholder image\">\n                        </figure>\n                    </div-->\n                    <div class=\"card-content\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <span class=\"tag ".concat(class_id == 1 ? 'is-danger' : class_id == 2 ? 'is-warning' : class_id == 3 ? 'is-blue' : 'is-link', " is-large has-text-weight-bold\" data-tooltip=\"Categor\xEDa\">\n                                    ").concat(class_type, "\n                                </span>\n                            </div>\n                            <div class=\"media-content\">\n                                <p class=\"has-text-weight-bold is-size-4\">").concat(pop.nombre, "</p>\n                                <p class=\"has-text-weight-normal is-size-6\">").concat(pop.direccion ? pop.direccion : 'Sin dirección registrada', ", ").concat(pop.comuna.nombre_comuna, "</p>\n                                <p class=\"has-text-weight-light is-size-6\">Zona ").concat(pop.zona.nombre_zona, ", CRM ").concat(pop.zona.crm.nombre_crm, "</p>\n                            </div>\n                        </div>\n\n                        <div class=\"content\">\n                            <a href=\"/pop/").concat(pop.id, "\" target=\"_blank\" class=\"button is-outlined is-link is-small\">\n                                <font-awesome-icon icon=\"info-circle\"/>\n                                &nbsp;Ver detalles\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            ");
    },
    icon: function icon(pop) {
      if (pop.protected_zones) {
        return {
          url: this.map_attributes.protectedZoneIcon,
          // scaledSize: new google.maps.Size(30, 54),
          // origin: new google.maps.Point(0,0),
          // anchor: new google.maps.Point(15,54)
          scaledSize: new google.maps.Size(25, 25),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(12, 25)
        };
      } else if (pop.temporary_storage) {
        return {
          url: this.map_attributes.storageIcon,
          scaledSize: new google.maps.Size(26.6, 25),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(13.3, 25)
        };
      }
    },
    setPops: function setPops() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$refs.map.$mapPromise.then(function (map) {
                  var bounds = new google.maps.LatLngBounds();

                  var _iterator = _createForOfIteratorHelper(_this2.pops),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var m = _step.value;
                      bounds.extend({
                        lat: parseFloat(m.latitude),
                        lng: parseFloat(m.longitude)
                      });
                    } // Don't zoom in too far on only one pop

                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                    var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                    var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                    bounds.extend(extendPoint1);
                    bounds.extend(extendPoint2);
                  }

                  map.fitBounds(bounds);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setPop: function setPop() {
      var _this3 = this;

      this.$refs.map.$mapPromise.then(function (map) {
        map.panTo({
          lat: parseFloat(_this3.pops[0].latitude),
          lng: parseFloat(_this3.pops[0].longitude)
        });
        map.setZoom(17);
      });
    } // cluster() {
    //     if (this.clusterActive == 0) {
    //         this.clusterActive = 1,
    //         this.buttonText = 'Desagrupar'
    //     } else {
    //         this.clusterActive = 0
    //         this.buttonText = 'Agrupar'
    //     }
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "GmapMap",
    {
      ref: "map",
      staticClass: "map",
      staticStyle: { height: "100%", "padding-bottom": "-14px" },
      attrs: {
        center: _vm.center,
        zoom: _vm.zoom,
        "map-type-id": "terrain",
        options: {
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
          styles: _vm.mapStyle
        }
      }
    },
    [
      _vm._l(_vm.pops, function(pop, index) {
        return _c("GmapMarker", {
          key: index,
          ref: "myMarker",
          refInFor: true,
          attrs: {
            clickable: true,
            draggable: false,
            position:
              _vm.google &&
              new _vm.google.maps.LatLng({
                lat: parseFloat(pop.latitude),
                lng: parseFloat(pop.longitude)
              }),
            icon: _vm.icon(pop)
          },
          on: {
            click: function($event) {
              return _vm.toggleInfoWindow(pop, index)
            }
          }
        })
      }),
      _vm._v(" "),
      _c(
        "gmap-info-window",
        {
          attrs: {
            options: _vm.infoOptions,
            position: _vm.infoWindowPos,
            opened: _vm.infoWinOpen,
            content: "Hello"
          },
          on: {
            closeclick: function($event) {
              _vm.infoWinOpen = false
            }
          }
        },
        [_c("div", { domProps: { innerHTML: _vm._s(_vm.infoContent) } })]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/maps/EcoMapView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/maps/EcoMapView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcoMapView.vue?vue&type=template&id=f6473726&scoped=true& */ "./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true&");
/* harmony import */ var _EcoMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcoMapView.vue?vue&type=script&lang=js& */ "./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcoMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f6473726",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/maps/EcoMapView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcoMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EcoMapView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/EcoMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcoMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EcoMapView.vue?vue&type=template&id=f6473726&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/EcoMapView.vue?vue&type=template&id=f6473726&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcoMapView_vue_vue_type_template_id_f6473726_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);