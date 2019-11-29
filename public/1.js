(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/MapView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/MapView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['selectedPop', 'selectedCrm', 'selectedZona', 'selectedPops', 'map_attributes', 'darkMode', 'core'],
  data: function data() {
    return {
      popList: null,
      popListCrm: null,
      popListZona: null,
      pops: null,
      map: null,
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
      icon: '../img/markers/entel-pin-32.png',
      google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__["gmapApi"],
      mapStyle: null,
      clusterActive: 1,
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
      }]
    };
  },
  created: function created() {
    if (this.darkMode == 1) {
      this.mapStyle = this.style2;
    } else {
      this.mapStyle = null;
    }
  },
  mounted: function mounted() {
    if (this.clusterActive == 1) {
      this.buttonText = 'Desagrupar';
    } else {
      this.buttonText = 'Agrupar';
    }

    this.getPops();
    this.$refs.map.$mapPromise.then(function (map) {
      var myButton = document.getElementById('myClusterButton');
      myButton.index = 1;
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(myButton);
    });
  },
  watch: {
    selectedPop: function selectedPop(newValue, oldValue) {
      this.pops = [];
      this.getPop();
    },
    selectedCrm: function selectedCrm(newValue, oldValue) {
      this.pops = [];
      this.getPops();
    },
    selectedZona: function selectedZona(newValue, oldValue) {
      this.pops = [];
      this.getPops();
    },
    darkMode: function darkMode(newValue, oldValue) {
      if (newValue == 1) {
        this.mapStyle = this.style2;
      } else {
        this.mapStyle = null;
      }
    },
    core: function core(newValue, oldValue) {
      var temp = this.pops;
      this.pops = [];
      this.getPops();
    },
    selectedPops: function selectedPops(newValue, oldValue) {
      var _this = this;

      if (newValue.length != 0) {
        this.pops = newValue; //Set bounds of the map                    

        this.$refs.map.$mapPromise.then(function (map) {
          var bounds = new google.maps.LatLngBounds(); // Create bounds from pops

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.pops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var m = _step.value;
              // console.log(m)
              bounds.extend({
                lat: parseFloat(m.latitude),
                lng: parseFloat(m.longitude)
              });
            } // Don't zoom in too far on only one marker

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

          if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
            var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
            var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
            bounds.extend(extendPoint1);
            bounds.extend(extendPoint2);
          }

          map.fitBounds(bounds);
        });
      } else {
        this.getPops();
      }
    }
  },
  methods: {
    toggleInfoWindow: function toggleInfoWindow(pop, idx) {
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
          lat: parseFloat(pop.latitude),
          lng: parseFloat(pop.longitude)
        });
      });
    },
    getInfoWindowContent: function getInfoWindowContent(pop) {
      return "\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"media\">\n                            <div class=\"media-content\">\n                                <p class=\"title is-4\">".concat(pop.nombre_pop, "</p>\n                            </div>\n                        </div>\n                        <div class=\"content\">\n                            ").concat(pop.direccion, "\n                            <br>\n                            <a href=\"/pop/").concat(pop.pop_id, "\" class=\"button is-small\">Ver POP</a>\n                        </div>\n                    </div>\n                </div>\n            ");
    },
    getPops: function getPops() {
      var _this2 = this;

      if (this.core == 0) {
        if (this.selectedCrm == null) {
          axios.get("/api/dashboardMap").then(function (response) {
            if (_this2.popList == null) {
              _this2.popList = response.data.data;
            }

            if (_this2.popList != null) {
              _this2.pops = _this2.popList; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                map.panTo({
                  lat: _this2.map_attributes.latitude,
                  lng: _this2.map_attributes.longitude
                });
                map.setZoom(_this2.map_attributes.zoom);
              });
            }
          });
        } else if (this.selectedZona == null) {
          axios.get("/api/dashboardMapCrm/".concat(this.selectedCrm.id)).then(function (response) {
            _this2.popListCrm = response.data.data;

            if (_this2.popListCrm != null) {
              _this2.pops = _this2.popListCrm; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                var bounds = new google.maps.LatLngBounds();
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = _this2.pops[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var m = _step2.value;
                    bounds.extend({
                      lat: parseFloat(m.latitude),
                      lng: parseFloat(m.longitude)
                    });
                  } // Don't zoom in too far on only one pop

                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }

                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                  var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                  var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                  bounds.extend(extendPoint1);
                  bounds.extend(extendPoint2);
                }

                map.fitBounds(bounds);
              });
            }
          });
        } else {
          axios.get("/api/dashboardMapZona/".concat(this.selectedZona.id)).then(function (response) {
            _this2.popListZona = response.data.data;

            if (_this2.popListZona != null) {
              _this2.pops = _this2.popListZona; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                // map.panTo({ lat: this.map_attributes.latitude, lng: this.map_attributes.longitude })
                var bounds = new google.maps.LatLngBounds();
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = _this2.pops[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var m = _step3.value;
                    bounds.extend({
                      lat: parseFloat(m.latitude),
                      lng: parseFloat(m.longitude)
                    });
                  } // Don't zoom in too far on only one pop

                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }

                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                  var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                  var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                  bounds.extend(extendPoint1);
                  bounds.extend(extendPoint2);
                }

                map.fitBounds(bounds);
              });
            }
          });
        }
      } else {
        if (this.selectedCrm == null) {
          axios.get("/api/dashboardMapCore").then(function (response) {
            _this2.popList = response.data.data;

            if (_this2.popList != null) {
              _this2.pops = _this2.popList; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                map.panTo({
                  lat: _this2.map_attributes.latitude,
                  lng: _this2.map_attributes.longitude
                });
                map.setZoom(_this2.map_attributes.zoom);
              });
            }
          });
        } else if (this.selectedZona == null) {
          axios.get("/api/dashboardMapCrmCore/".concat(this.selectedCrm.id)).then(function (response) {
            _this2.popListCrm = response.data.data;

            if (_this2.popListCrm != null) {
              _this2.pops = _this2.popListCrm; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                var bounds = new google.maps.LatLngBounds();
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = _this2.pops[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var m = _step4.value;
                    bounds.extend({
                      lat: parseFloat(m.latitude),
                      lng: parseFloat(m.longitude)
                    });
                  } // Don't zoom in too far on only one pop

                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                      _iterator4["return"]();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }

                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                  var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                  var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                  bounds.extend(extendPoint1);
                  bounds.extend(extendPoint2);
                }

                map.fitBounds(bounds);
              });
            }
          });
        } else {
          axios.get("/api/dashboardMapZonaCore/".concat(this.selectedZona.id)).then(function (response) {
            _this2.popListZona = response.data.data;

            if (_this2.popListZona != null) {
              _this2.pops = _this2.popListZona; //Set bounds of the map

              _this2.$refs.map.$mapPromise.then(function (map) {
                // map.panTo({ lat: this.map_attributes.latitude, lng: this.map_attributes.longitude })
                var bounds = new google.maps.LatLngBounds();
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = _this2.pops[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var m = _step5.value;
                    bounds.extend({
                      lat: parseFloat(m.latitude),
                      lng: parseFloat(m.longitude)
                    });
                  } // Don't zoom in too far on only one pop

                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                      _iterator5["return"]();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }

                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                  var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                  var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                  bounds.extend(extendPoint1);
                  bounds.extend(extendPoint2);
                }

                map.fitBounds(bounds);
              });
            }
          });
        }
      }
    },
    getPop: function getPop() {
      var _this3 = this;

      axios.get("/api/dashboardMapPop/".concat(this.selectedPop.id)).then(function (response) {
        _this3.pops = response.data.data;

        if (_this3.pops != null) {
          _this3.pops = [_this3.selectedPop]; //Set bounds of the map

          _this3.$refs.map.$mapPromise.then(function (map) {
            map.panTo({
              lat: parseFloat(_this3.selectedPop.latitude),
              lng: parseFloat(_this3.selectedPop.longitude)
            });
            map.setZoom(15);
          });
        }
      });
    },
    cluster: function cluster() {
      if (this.clusterActive == 0) {
        this.clusterActive = 1, this.buttonText = 'Desagrupar';
      } else {
        this.clusterActive = 0;
        this.buttonText = 'Agrupar';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "gmap-map",
    {
      ref: "map",
      staticClass: "tile is-child box",
      staticStyle: { height: "100%" },
      attrs: {
        center: _vm.center,
        zoom: this.map_attributes.zoom,
        "map-type-id": "roadmap",
        options: {
          zoomControl: true,
          mapTypeControl: false,
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
      _c("div", { attrs: { id: "myClusterButton" } }, [
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
            on: { click: _vm.cluster }
          },
          [_vm._v("\n            " + _vm._s(_vm.buttonText) + "\n        ")]
        )
      ]),
      _vm._v(" "),
      _vm.clusterActive == 1
        ? _c(
            "gmap-cluster",
            [
              _vm._l(_vm.pops, function(pop, index) {
                return _c("gmap-marker", {
                  key: index,
                  ref: "myMarker",
                  refInFor: true,
                  attrs: {
                    clickable: true,
                    draggable: false,
                    position: {
                      lat: parseFloat(pop.latitude),
                      lng: parseFloat(pop.longitude)
                    },
                    icon: _vm.icon
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
                [
                  _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.infoContent) }
                  })
                ]
              )
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.pops, function(pop, index) {
        return _vm.clusterActive == 0
          ? _c("gmap-marker", {
              key: index,
              ref: "myMarker",
              refInFor: true,
              attrs: {
                clickable: true,
                draggable: false,
                position: {
                  lat: parseFloat(pop.latitude),
                  lng: parseFloat(pop.longitude)
                },
                icon: _vm.icon
              },
              on: {
                click: function($event) {
                  return _vm.toggleInfoWindow(pop, index)
                }
              }
            })
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.clusterActive == 0
        ? _c(
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
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/maps/MapView.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/maps/MapView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapView.vue?vue&type=template&id=d5114458& */ "./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458&");
/* harmony import */ var _MapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapView.vue?vue&type=script&lang=js& */ "./resources/js/components/maps/MapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/maps/MapView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/maps/MapView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/maps/MapView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/MapView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapView.vue?vue&type=template&id=d5114458& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/maps/MapView.vue?vue&type=template&id=d5114458&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapView_vue_vue_type_template_id_d5114458___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);