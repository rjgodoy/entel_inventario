(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'classification', 'popMaster', 'darkMode'],
  data: function data() {
    return {
      pops: null,
      dependences: [],
      map: null,
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
      zoom: 17,
      // icon_pop: '../img/markers/entelPin_red-white.png',
      icon_dependence: '../img/markers/pop-32.png',
      // mapStyle: null,
      markers: [],
      dependencesActive: 0,
      buttonName: 'Dependencias',
      dependencesLines: null,
      flightPath: null,
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
    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__["gmapApi"],
    mapStyle: function mapStyle() {
      return this.darkMode == 1 ? this.style8 : this.style9;
    },
    center: function center() {
      return {
        lat: parseFloat(this.popMaster.latitude),
        lng: parseFloat(this.popMaster.longitude)
      };
    },
    icon_pop: function icon_pop() {
      return {
        url: '../img/markers/entelPin_red-white.png',
        scaledSize: google && new google.maps.Size(30, 54),
        origin: google && new google.maps.Point(0, 0),
        anchor: google && new google.maps.Point(15, 54)
      };
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.pops = [this.popMaster]; // this.initializeMap()

    this.dependencesButton();
  },
  watch: {
    popMaster: function popMaster(newValue, oldValue) {
      this.pops = [newValue];
    },
    pops: function pops(newValue, oldValue) {
      this.initializeMap();
    }
  },
  methods: {
    initializeMap: function initializeMap() {
      var _this = this;

      this.$refs.map.$mapPromise.then(function (map) {
        // map.panTo({ lat: parseFloat(this.popMaster.latitude), lng: parseFloat(this.popMaster.longitude) })
        _this.pops.length == 1 ? map.setZoom(_this.zoom) : null;
        _this.pops.length == 1 ? null : _this.flightPath.setMap(null);
      });
    },
    toggleInfoWindow: function toggleInfoWindow(pop, idx) {
      var _this2 = this;

      this.infoWindowPos = {
        lat: parseFloat(pop.latitude),
        lng: parseFloat(pop.longitude)
      };
      this.infoContent = this.getInfoWindowContent(pop); //check if its the same pop that was selected if yes toggle

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } //if different pop set infowindow to open and reset current pop index
      else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }

      this.$refs.map.$mapPromise.then(function (map) {
        map.panTo({
          lat: parseFloat(_this2.popMaster.latitude),
          lng: parseFloat(_this2.popMaster.longitude)
        });
      });
    },
    getInfoWindowContent: function getInfoWindowContent(pop) {
      console.log(pop);
      return "\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <span class=\"tag ".concat(this.classification == 'A' ? 'is-danger' : this.classification == 'B' ? 'is-warning' : this.classification_type_id == 'C' ? 'is-blue' : 'is-link', " is-large has-text-weight-bold\" data-tooltip=\"Categor\xEDa\">\n                                    ").concat(this.classification, "\n                                </span>\n                            </div>\n                            <div class=\"media-content\">\n                                <p class=\"has-text-weight-bold is-size-4\">").concat(pop.nombre, "</p>\n                                <p class=\"has-text-weight-normal is-size-6\">").concat(pop.direccion ? pop.direccion : 'Sin dirección registrada', ", ").concat(pop.comuna.nombre_comuna, "</p>\n                                <p class=\"has-text-weight-light is-size-6\">Zona ").concat(pop.comuna.zona.nombre_zona, ", CRM ").concat(pop.comuna.zona.crm.nombre_crm, "</p>\n                            </div>\n                        </div>\n\n                        <div class=\"content\">\n                            <a href=\"/pop/").concat(pop.id, "\" class=\"button is-outlined is-primary is-small\">\n                                <font-awesome-icon icon=\"info-circle\"/>\n                                &nbsp;Ver detalles\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            ");
    },
    getDependences: function getDependences() {
      var _this3 = this;

      if (!this.dependencesActive) {
        this.dependencesActive = 1;
        this.buttonName = 'POP';
        axios.get("/api/dependences/".concat(this.popMaster.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
          _this3.dependences = response.data.data;

          if (_this3.dependences.length) {
            _this3.dependences.forEach(function (element) {
              return element && _this3.pops.push(element.dependence.pop);
            }); //Set bounds of the map


            _this3.$refs.map.$mapPromise.then(function (map) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = _this3.dependences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var m = _step.value;
                  _this3.dependencesLines = [{
                    lat: parseFloat(_this3.popMaster.latitude),
                    lng: parseFloat(_this3.popMaster.longitude)
                  }, {
                    lat: parseFloat(m.dependence.pop.latitude),
                    lng: parseFloat(m.dependence.pop.longitude)
                  }];
                  _this3.flightPath = google && new google.maps.Polyline({
                    path: _this3.dependencesLines,
                    geodesic: true,
                    strokeColor: '#FF8001',
                    strokeOpacity: 1.0,
                    strokeWeight: 0.5
                  });

                  _this3.flightPath.setMap(map);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              map.setZoom(14);
            });
          }
        });
      } else {
        this.buttonName = 'Dependencias';
        this.pops = [this.popMaster];
        this.dependencesActive = 0;
      }
    },
    dependencesButton: function dependencesButton() {
      var _this4 = this;

      this.buttonName = this.dependencesActive ? 'POP' : 'Dependencias';
      this.$refs.map.$mapPromise.then(function (map) {
        var myButton = document.getElementById('myDependencesButton');
        myButton.index = 1;

        map.controls[_this4.google.maps.ControlPosition.TOP_LEFT].push(myButton);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Location.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maps_PopMapView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maps/PopMapView */ "./resources/js/components/maps/PopMapView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const PopMap = () => ({
//     // The component to load (should be a Promise)
//     component: import('../maps/PopMapView'),
//     // A component to use while the async component is loading
//     // loading: LoadingComponent,
//     // A component to use if the load fails
//     // error: ErrorComponent,
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 500,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })


var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PopMap: _maps_PopMapView__WEBPACK_IMPORTED_MODULE_0__["default"] // PopMap: () => import('../maps/PopMapView'),

  },
  props: ['user', 'pop', 'bodyBackground', 'boxBackground', 'primaryText', 'secondaryText', 'darkMode'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {
    popClassification: function popClassification() {
      var id = 6;
      var classification;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.classification_type_id && item.classification_type_id < id) {
            id = item.classification_type_id;
            classification = item.classification_type.classification_type;
          }
        });
      }

      return {
        'classification': classification,
        'id': id
      };
    },
    popAttentionPriority: function popAttentionPriority() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.attention_priority_type_id && item.attention_priority_type_id < i) {
            i = item.attention_priority_type_id;
            cat = item.attention_priority_type.attention_priority_type;
          }
        });
      }

      return cat;
    },
    popCategory: function popCategory() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.category_type_id && item.category_type_id < i) {
            i = item.category_type_id;
            cat = item.category_type.category_type;
          }
        });
      }

      return cat;
    },
    popDependences: function popDependences() {
      var dependences = 0;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          dependences = dependences + item.dependences.length;
        });
      }

      return dependences;
    },
    popAttentionType: function popAttentionType() {
      var i = 10;
      var cat;

      if (this.pop.sites) {
        this.pop.sites.forEach(function (item) {
          if (item.attention_type_id && item.attention_type_id < i) {
            i = item.attention_type_id;
            cat = item.attention_type.attention_type;
          }
        });
      }

      return cat;
    },
    heroBackground: function heroBackground() {
      return this.popClassification.id == 1 ? 'is-info' : this.popClassification.id == 2 ? 'is-warning' : this.popClassification.id == 3 ? 'is-primary' : this.popClassification.id == 4 ? 'is-smart' : this.popClassification.id == 5 ? 'is-eco' : 'is-white';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true& ***!
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
      staticStyle: { "min-height": "500px", height: "100%" },
      attrs: {
        center: _vm.center,
        zoom: _vm.zoom,
        "map-type-id": "roadmap",
        options: {
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
          gestureHandling: "cooperative",
          styles: _vm.mapStyle
        }
      }
    },
    [
      _c("div", { attrs: { id: "myDependencesButton" } }, [
        _c(
          "button",
          {
            staticClass: "button is-default",
            staticStyle: {
              border: "2px solid #fff",
              borderRadius: "3px",
              boxShadow: "0 1px 5px rgba(0,0,0,.15)",
              marginTop: "10px",
              marginLeft: "10px",
              textAlign: "center"
            },
            on: { click: _vm.getDependences }
          },
          [_vm._v("\n            " + _vm._s(_vm.buttonName) + "\n        ")]
        )
      ]),
      _vm._v(" "),
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
            icon:
              pop.id == _vm.popMaster.id ? _vm.icon_pop : _vm.icon_dependence
          },
          on: {
            click: function($event) {
              pop.id == _vm.popMaster.id
                ? null
                : _vm.toggleInfoWindow(pop, index)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("section", {}, [
    _c("div", { staticClass: "hero is-bold", class: _vm.heroBackground }, [
      _c(
        "div",
        { staticClass: "hero-body", staticStyle: { "padding-top": "" } },
        [
          _c("nav", { staticClass: "level" }, [
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popAttentionPriority))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("PRIORIDAD ATENCION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popDependences))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("DEPENDENCIAS DIRECTAS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popCategory ? _vm.popCategory : "-"))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("CLASIFICACION PLANIFICACION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(_vm._s(_vm.popAttentionType))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("TIPO ATENCION")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-item has-text-centered" }, [
              _c("div", [
                _c("p", { staticClass: "is-size-5 has-text-weight-semibold" }, [
                  _vm._v(
                    _vm._s(
                      _vm.pop.theoretical_autonomy
                        ? _vm.pop.theoretical_autonomy
                        : "-"
                    ) + " "
                  ),
                  _c("span", { staticClass: "is-size-6" }, [_vm._v("hrs.")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "is-size-7 has-text-weight-semibold" }, [
                  _vm._v("AUTONOMIA TEORICA")
                ])
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "map-container" },
        [
          _c("pop-map", {
            attrs: {
              user: _vm.user,
              classification: _vm.popClassification,
              popMaster: _vm.pop,
              darkMode: _vm.darkMode
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-8" }, [
            _c("div", { staticClass: "is-size-5 has-text-weight-semibold" }, [
              _vm._v(_vm._s(_vm.pop.direccion))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "is-size-6 has-text-weight-normal" }, [
              _vm._v(
                "Comuna de " +
                  _vm._s(_vm.pop.comuna ? _vm.pop.comuna.nombre_comuna : "")
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "is-size-7 has-text-weight-normal" }, [
              _vm._v(
                "\n                        Zona " +
                  _vm._s(
                    _vm.pop.comuna ? _vm.pop.comuna.zona.nombre_zona : ""
                  ) +
                  " - CRM " +
                  _vm._s(
                    _vm.pop.comuna ? _vm.pop.comuna.zona.crm.nombre_crm : ""
                  ) +
                  "\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "is-size-5 has-text-weight-semibold" },
                  [
                    _vm._v(
                      _vm._s(_vm.pop.latitude) +
                        "\n                                "
                    ),
                    _c(
                      "p",
                      { staticClass: "is-size-6 has-text-weight-light" },
                      [_vm._v("Latitud")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-item" }, [
                _c(
                  "div",
                  { staticClass: "is-size-5 has-text-weight-semibold" },
                  [
                    _vm._v(
                      _vm._s(_vm.pop.longitude) +
                        "\n                                "
                    ),
                    _c(
                      "p",
                      { staticClass: "is-size-6 has-text-weight-light" },
                      [_vm._v("Longitud")]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true& */ "./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true&");
/* harmony import */ var _PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopMapView.vue?vue&type=script&lang=js& */ "./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f3a01ad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/maps/PopMapView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopMapView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/PopMapView.vue?vue&type=template&id=6f3a01ad&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopMapView_vue_vue_type_template_id_6f3a01ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pops/Location.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pops/Location.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location.vue?vue&type=template&id=9512fc72& */ "./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&");
/* harmony import */ var _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.vue?vue&type=script&lang=js& */ "./resources/js/components/pops/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pops/Location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pops/Location.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pops/Location.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Location.vue?vue&type=template&id=9512fc72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pops/Location.vue?vue&type=template&id=9512fc72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_9512fc72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);