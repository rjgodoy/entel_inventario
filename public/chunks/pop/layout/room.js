(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/pop/layout/room"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ModalPowerRectifier: function ModalPowerRectifier() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/powerRectifier */ "chunks/pop/layout/modals/powerRectifier").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalPowerRectifier */ "./resources/js/components/pop/layout/modals/ModalPowerRectifier.vue"));
    },
    ModalAirConditioner: function ModalAirConditioner() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/airConditioner */ "chunks/pop/layout/modals/airConditioner").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalAirConditioner */ "./resources/js/components/pop/layout/modals/ModalAirConditioner.vue"));
    },
    ModalDistribution: function ModalDistribution() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/distribution */ "chunks/pop/layout/modals/distribution").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalDistribution */ "./resources/js/components/pop/layout/modals/ModalDistribution.vue"));
    },
    ModalSurface: function ModalSurface() {
      return __webpack_require__.e(/*! import() | chunks/pop/layout/modals/surface */ "chunks/pop/layout/modals/surface").then(__webpack_require__.bind(null, /*! ../../pop/layout/modals/ModalSurface */ "./resources/js/components/pop/layout/modals/ModalSurface.vue"));
    }
  },
  props: ['room', 'sala', 'user', 'pop', 'isEditMode'],
  data: function data() {
    return {
      planes: Array,
      powerRectifiers: Array,
      airConditioners: Array,
      planeSelected: null,
      powerRectifierSelected: null,
      airConditionerSelected: null,
      canEditPowerRectifiers: null,
      canEditAirConditioners: null,
      isPowerRectifierModalActive: false,
      isAirConditionerModalActive: false,
      isDistributionModalActive: false,
      isSurfaceModalActive: false,
      totalPRCapacity: 0,
      usedPRCapacity: 0,
      availablePRCapacity: 0,
      totalBatteryCapacity: 0,
      usedBatteryCapacity: 0,
      availableBatteryCapacity: 0,
      planeTypeId: this.sala.current_room_delegation ? this.sala.current_room_delegation.plane_delegation_type_id : null,
      planeTypes: []
    };
  },
  mounted: function mounted() {
    this.getPlaneTypes();
    this.getAirConditioners(); // this.getPowerRectifiers()

    this.getPlanes();
    this.$emit('room-distribution', this.distribution);
    this.$emit('room-surface', this.surface);
    this.$emit('power-rectifier-data', this.powerRectifierData);
    this.$emit('battery-data', this.batteryData);
  },
  computed: {
    planeType: function planeType() {
      var _this = this;

      var type = 'Sin Información';

      switch (this.planeTypeId) {
        case 1:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 1 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 2:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 2 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 3:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 3 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 4:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 4 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 5:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 5 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 6:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 6 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 7:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 7 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        case 8:
          Object.keys(this.planeTypes).forEach(function (item) {
            type = _this.planeTypes[item].id == 8 && type == 'Sin Información' ? _this.planeTypes[item].type : type;
          });
          break;

        default:
          break;
      }

      return type;
    },
    isRoomSelected: function isRoomSelected() {
      return this.room.id && this.sala.id != this.room.id;
    },
    totalCapacity: function totalCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0;
    },
    usedCapacity: function usedCapacity() {
      return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0;
    },
    availableCapacity: function availableCapacity() {
      return this.totalCapacity - this.usedCapacity;
    },
    distribution: function distribution() {
      return {
        'totalCapacity': this.totalCapacity,
        'usedCapacity': this.usedCapacity
      };
    },
    surface: function surface() {
      return {
        'totalSurface': this.totalSurface,
        'usedSurface': this.usedSurface
      };
    },
    detectionType: function detectionType() {
      return this.sala.fire_detections ? this.sala.fire_detections[0].fire_detection_type.type : 'No tiene';
    },
    extintionType: function extintionType() {
      return this.sala.fire_detections && this.sala.fire_detections[0].fire_extintion_type ? this.sala.fire_detections[0].fire_extintion_type.type : 'No tiene';
    },
    canEditDistribution: function canEditDistribution() {
      return this.canEditAirConditioners && this.canEditPowerRectifiers;
    },
    canEditSurface: function canEditSurface() {
      return this.canEditAirConditioners && this.canEditPowerRectifiers;
    },
    totalSurface: function totalSurface() {
      return this.sala.current_room_surface ? this.sala.current_room_surface.total_surface : 0;
    },
    usedSurface: function usedSurface() {
      return this.sala.current_room_surface ? this.sala.current_room_surface.used_surface : 0;
    },
    availableSurface: function availableSurface() {
      return this.totalSurface - this.usedSurface;
    },
    powerRectifierData: function powerRectifierData() {
      return {
        'totalPRCapacity': this.totalPRCapacity,
        'usedPRCapacity': this.usedPRCapacity,
        'availablePRCapacity': this.availablePRCapacity
      };
    },
    batteryData: function batteryData() {
      return {
        'totalBatteryCapacity': this.totalBatteryCapacity,
        'usedBatteryCapacity': this.usedBatteryCapacity,
        'availableBatteryCapacity': this.availableBatteryCapacity
      };
    },
    popAutonomy: function popAutonomy() {
      return this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0;
    }
  },
  watch: {
    room: function room(val) {
      this.$emit('room-distribution', this.distribution);
      this.$emit('room-surface', this.surface);
      this.$emit('power-rectifier-data', this.powerRectifierData);
      this.$emit('battery-data', this.batteryData);
    },
    powerRectifierData: function powerRectifierData(value) {
      this.$emit('power-rectifier-data', value);
    },
    batteryData: function batteryData(value) {
      this.$emit('battery-data', value);
    },
    planeTypeId: function planeTypeId(value) {},
    isEditMode: function isEditMode(val) {
      if (val == false) {
        this.getPlanes();
        this.$eventBus.$emit('room-data');
      }
    }
  },
  methods: {
    isCurrentSala: function isCurrentSala(sala) {
      return sala.id == this.room.id;
    },
    powerRectifiersInRoom: function powerRectifiersInRoom(sala) {
      var powerRectifiersInRoom = 0;
      Object.keys(sala.planes).forEach(function (element) {
        var plane = sala.planes[element];
        powerRectifiersInRoom += plane.power_rectifiers.length;
      }); // console.log(powerRectifiersInRoom)

      return powerRectifiersInRoom;
    },
    getPlaneTypes: function getPlaneTypes() {
      var _this2 = this;

      axios.get("/api/planeTypes?api_token=".concat(this.user.api_token)).then(function (response) {
        _this2.planeTypes = response.data.planes;
      });
    },
    hasPlanes: function hasPlanes(sala) {
      var _this3 = this;

      var bool = false;

      if (this.planes) {
        Object.keys(this.planes).forEach(function (element) {
          var plane = _this3.planes[element];
          Object.keys(plane.rooms).forEach(function (item) {
            bool = !bool ? plane.rooms[item].id == sala.id : bool;
          });
        });
      }

      return bool;
    },
    powerRectifierBelongsToPlane: function powerRectifierBelongsToPlane(powerRectifier, plane) {
      var bool = false; // if (plane.power_rectifiers) {

      Object.keys(plane.power_rectifiers).forEach(function (element) {
        var pr = plane.power_rectifiers[element];
        bool = pr.id == powerRectifier.id && !bool ? true : bool;
      }); // }

      return bool;
    },
    hasAirConditioners: function hasAirConditioners(sala) {
      var _this4 = this;

      var bool = false;

      if (this.airConditioners) {
        Object.keys(this.airConditioners).forEach(function (element) {
          bool = !bool ? _this4.airConditioners[element].room_id == sala.id : bool;
        });
      }

      return bool;
    },
    getPlanes: function getPlanes() {
      var _this5 = this;

      axios.get("/api/roomPlanes/".concat(this.sala.id, "?api_token=").concat(this.user.api_token, "&plane_delegation_type_id=").concat(this.planeTypeId)).then(function (response) {
        _this5.planes = response.data.planes;
        _this5.canEditPowerRectifiers = response.data.can ? response.data.can : false;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    getAirConditioners: function getAirConditioners() {
      var _this6 = this;

      axios.get("/api/airConditioners/".concat(this.pop.id, "?api_token=").concat(this.user.api_token)).then(function (response) {
        // console.log(response.data)
        _this6.airConditioners = response.data.airConditioner;
        _this6.canEditAirConditioners = response.data.can;
      })["catch"](function (error) {
        console.log('Error al traer los datos de Empalmes: ' + error);
      });
    },
    // Power Rectifiers
    nominalCapacity: function nominalCapacity(plane) {
      var capacity = 0;
      Object.keys(plane.power_rectifiers).forEach(function (element) {
        capacity += plane.power_rectifiers[element].capacity;
      });
      return capacity;
    },
    installedCapacity: function installedCapacity(plane) {
      var capacity = 0;
      Object.keys(plane.power_rectifiers).forEach(function (element) {
        var pr = plane.power_rectifiers[element];
        Object.keys(pr.power_rectifier_modules).forEach(function (item) {
          capacity += pr.power_rectifier_modules[item].capacity;
        });
      });
      return capacity;
    },
    chargeRealPower: function chargeRealPower(plane) {
      return plane.float_tension * plane.current / 1000;
    },
    rechargeCurrent: function rechargeCurrent(plane) {
      var current = 0;
      Object.keys(plane.battery_banks).forEach(function (item) {
        current += plane.battery_banks[item].capacity;
      });
      return plane.recharge_factor * current;
    },
    batteryRechargePower: function batteryRechargePower(plane) {
      return this.rechargeCurrent(plane) * plane.float_tension / 1000;
    },
    totalCurrent: function totalCurrent(plane) {
      return plane.current + this.rechargeCurrent(plane);
    },
    totalPower: function totalPower(plane) {
      return this.chargeRealPower(plane) + this.batteryRechargePower(plane);
    },
    realPlaneCapacity: function realPlaneCapacity(plane) {
      var currentRedundantModules = plane.current_redundant_modules;
      var currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0;
      return this.installedCapacity(plane) - currentRedundantModulesCapacity;
    },
    availablePlaneCapacity: function availablePlaneCapacity(plane) {
      return this.realPlaneCapacity(plane) - this.totalPower(plane);
    },
    usePercentPlane: function usePercentPlane(plane) {
      return this.totalPower(plane) / this.realPlaneCapacity(plane);
    },
    batteryTotalCapacityPlane: function batteryTotalCapacityPlane(plane) {
      var capacity = 0;
      Object.keys(plane.battery_banks).forEach(function (item) {
        capacity += plane.battery_banks[item].capacity;
      });
      return capacity * 48 / 1000 / this.popAutonomy;
    },
    availableBatteryCapacityPlane: function availableBatteryCapacityPlane(plane) {
      return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane);
    },
    totalCapacityRoom: function totalCapacityRoom(sala) {
      var _this7 = this;

      var realRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this7.planes[element];
        realRoomCapacity += _this7.realPlaneCapacity(plane);
      });
      this.totalPRCapacity = realRoomCapacity;
      return realRoomCapacity;
    },
    usedCapacityRoom: function usedCapacityRoom(sala) {
      var _this8 = this;

      var usedRoomCapacity = 0;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this8.planes[element];
        usedRoomCapacity += _this8.totalPower(plane);
      });
      this.usedPRCapacity = usedRoomCapacity;
      return usedRoomCapacity;
    },
    availableCapacityRoom: function availableCapacityRoom(sala) {
      var _this9 = this;

      var availableRoomCapacity = 10000000;
      var availableRoomCapacityA = 10000000;
      var availableRoomCapacityB = 10000000;
      Object.keys(this.planes).forEach(function (element) {
        var plane = _this9.planes[element];

        if (sala.current_room_delegation) {
          switch (sala.current_room_delegation.plane_delegation_type_id) {
            case 1:
            case 2:
            case 3:
            case 4:
              availableRoomCapacity = _this9.availablePlaneCapacity(plane);
              break;

            case 5:
            case 6:
              if (availableRoomCapacity > _this9.availablePlaneCapacity(plane)) {
                availableRoomCapacity = _this9.availablePlaneCapacity(plane);
              }

              break;

            case 7:
              if (availableRoomCapacityA > _this9.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                availableRoomCapacityA = _this9.availablePlaneCapacity(plane); // i++
              }

              if (availableRoomCapacityB > _this9.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                availableRoomCapacityB = _this9.availablePlaneCapacity(plane);
              }

              availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB;
              break;

            case 8:
            default:
              break;
          }
        }
      });
      availableRoomCapacity = availableRoomCapacity < 10000000 ? availableRoomCapacity : 0;
      this.availablePRCapacity = availableRoomCapacity;
      return availableRoomCapacity;
    },
    // Batteries
    totalCapacityBatteries: function totalCapacityBatteries(sala) {
      var capacity = 0;
      Object.keys(sala.planes).forEach(function (element) {
        var plane = sala.planes[element];
        Object.keys(plane.battery_banks).forEach(function (item) {
          capacity += plane.battery_banks[item].capacity;
        });
      });
      var total = capacity * 48 / 1000 / this.popAutonomy;
      this.totalBatteryCapacity = total;
      return total;
    },
    usedCapacityBatteries: function usedCapacityBatteries(sala) {
      var _this10 = this;

      var used = 0;
      Object.keys(sala.planes).forEach(function (element) {
        var plane = sala.planes[element];
        used += _this10.chargeRealPower(plane);
      });
      this.usedBatteryCapacity = used;
      return used;
    },
    availableCapacityBatteries: function availableCapacityBatteries(sala) {
      var _this11 = this;

      var available = 10000000;
      Object.keys(sala.planes).forEach(function (element) {
        var plane = sala.planes[element];

        if (available > _this11.availableBatteryCapacityPlane(plane)) {
          available = _this11.availableBatteryCapacityPlane(plane);
        }
      });
      var total = available * 2;
      this.availableBatteryCapacity = total;
      return total;
    },
    updatePlaneType: function updatePlaneType(sala) {
      var params = {
        'api_token': this.user.api_token,
        'user_id': this.user.id,
        'plane_type_id': this.planeTypeId
      };
      axios.put("/api/roomPlaneType/".concat(this.sala.id), params).then(function (response) {
        console.log(response.data);
      }); // this.$parent.close()
      // this.$eventBus.$emit('junction-measurements-updated');
    },
    reload: function reload() {
      console.log('reloaded');
      this.$eventBus.$emit('change-room');
    }
  },
  beforeDestroy: function beforeDestroy() {// this.$emit('room-distribution');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      staticClass: "tile is-child box",
      class: _vm.isRoomSelected
        ? "is-shadowless has-background-white-bis shadow-dark"
        : "",
      style: _vm.isRoomSelected ? "" : "border: solid 0.5px black;"
    },
    [
      _c("div", { staticClass: "tile is-vertical" }, [
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("div", { staticClass: "is-pulled-right" }, [
              _c("div", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Tipo Alimentación")
              ]),
              _vm._v(" "),
              !_vm.isEditMode
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "has-text-weight-bold is-size-5" },
                      [_vm._v(_vm._s(_vm.planeType))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isEditMode
                ? _c(
                    "div",
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { placeholder: "Select a name" },
                          on: {
                            input: function($event) {
                              return _vm.updatePlaneType(_vm.sala)
                            }
                          },
                          model: {
                            value: _vm.planeTypeId,
                            callback: function($$v) {
                              _vm.planeTypeId = $$v
                            },
                            expression: "planeTypeId"
                          }
                        },
                        _vm._l(_vm.planeTypes, function(option) {
                          return _c(
                            "option",
                            { key: option.id, domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(option.type) +
                                  "\n                        "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "is-size-5",
                class:
                  _vm.room.id && _vm.sala.id != _vm.room.id
                    ? "has-text-grey-light has-text-weight-light"
                    : "has-text-weight-bold",
                attrs: { to: "/capacity/" + _vm.sala.id },
                nativeOn: {
                  click: function($event) {
                    return _vm.reload($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.sala.name) +
                    " - " +
                    _vm._s(_vm.sala.old_name) +
                    "\n            "
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c(
            "div",
            { staticClass: "tile is-parent" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile",
                  attrs: {
                    label: "PLANTAS RECTIFICADORAS",
                    "label-position": "on-border",
                    "custom-class": !_vm.isCurrentSala(_vm.sala)
                      ? "has-text-grey-light"
                      : ""
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tile box is-shadowless",
                      staticStyle: { border: "solid 0.1rem #cccccc" }
                    },
                    [
                      _c("div", { staticClass: "tile is-vertical" }, [
                        _c(
                          "div",
                          {
                            staticClass: "tile is-parent columns is-multiline"
                          },
                          _vm._l(_vm.planes, function(plane) {
                            return _c(
                              "div",
                              {
                                key: plane.id,
                                staticClass: "tile is-parent column is-6"
                              },
                              [
                                _c(
                                  "b-field",
                                  {
                                    staticClass: "tile",
                                    attrs: {
                                      label: "PLANO " + plane.plane_type.type,
                                      "label-position": "on-border",
                                      "custom-class": !_vm.isCurrentSala(
                                        _vm.sala
                                      )
                                        ? "has-text-grey-light"
                                        : ""
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "tile is-parent box is-shadowless",
                                        staticStyle: {
                                          border: "solid 0.05rem black"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tile is-vertical" },
                                          [
                                            _vm.sala.power_rectifiers.length
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tile is-parent"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "columns is-multiline tile"
                                                      },
                                                      _vm._l(
                                                        _vm.sala
                                                          .power_rectifiers,
                                                        function(
                                                          powerRectifier
                                                        ) {
                                                          return _vm.powerRectifierBelongsToPlane(
                                                            powerRectifier,
                                                            plane
                                                          )
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  key:
                                                                    powerRectifier.id,
                                                                  staticClass:
                                                                    "tile is-child column is-6"
                                                                },
                                                                [
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "box",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          _vm.isPowerRectifierModalActive = true
                                                                          _vm.powerRectifierSelected = powerRectifier
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "field"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "has-text-weight-bold is-size-7"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "PLANTA"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "has-text-weight-bold is-size-6"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Nº " +
                                                                                  _vm._s(
                                                                                    powerRectifier.id
                                                                                  )
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e()
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tile is-parent" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "box tile is-child"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Capacidad nominal: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.nominalCapacity(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Capacidad instalada: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.installedCapacity(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Potencia real de carga: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.chargeRealPower(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Corriente recarga: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.rechargeCurrent(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Potencia recarga baterías: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.batteryRechargePower(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Corriente total carga + baterías: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.totalCurrent(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Potencia total carga + baterías: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.totalPower(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Capacidad real: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.realPlaneCapacity(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Capacidad disponible: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.availablePlaneCapacity(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Porcentaje Uso: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.usePercentPlane(
                                                                  plane
                                                                ) * 100,
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Capacidad baterias: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.batteryTotalCapacityPlane(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Utilizado baterias: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.chargeRealPower(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "is-size-7"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Disponible baterias: " +
                                                            _vm._s(
                                                              _vm._f("numeral")(
                                                                _vm.availableBatteryCapacityPlane(
                                                                  plane
                                                                ),
                                                                "0,0.0"
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "tile is-parent" },
                          [
                            _c(
                              "b-field",
                              {
                                staticClass: "tile",
                                attrs: {
                                  label: "CAPACIDAD SALA",
                                  "label-position": "on-border",
                                  "custom-class": !_vm.isCurrentSala(_vm.sala)
                                    ? "has-text-grey-light"
                                    : ""
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "tile is-parent box is-shadowless",
                                    staticStyle: {
                                      border: "solid 0.05rem black"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "tile is-vertical" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad total sala: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.totalCapacityRoom(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad usada sala: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.usedCapacityRoom(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad disponible sala: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.availableCapacityRoom(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad total baterías: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.totalCapacityBatteries(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad total baterías: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.usedCapacityBatteries(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "is-size-7" },
                                          [
                                            _vm._v(
                                              "Capacidad total baterías: " +
                                                _vm._s(
                                                  _vm._f("numeral")(
                                                    _vm.availableCapacityBatteries(
                                                      _vm.sala
                                                    ),
                                                    "0,0.0"
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.hasPlanes(_vm.sala)
                        ? _c(
                            "div",
                            { staticClass: "tile columns is-vcentered" },
                            [
                              _c("div", { staticClass: "column" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    NO TIENE PLANTAS RECTIFICADORAS\n                                "
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c(
            "div",
            { staticClass: "tile is-parent" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile",
                  attrs: {
                    label: "CLIMATIZACION",
                    "label-position": "on-border",
                    "custom-class": !_vm.isCurrentSala(_vm.sala)
                      ? "has-text-grey-light"
                      : ""
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tile is-parent box is-shadowless",
                      staticStyle: { border: "solid 0.1rem #cccccc" }
                    },
                    [
                      _c("div", { staticClass: "tile is-vertical" }, [
                        _vm.hasAirConditioners(_vm.sala)
                          ? _c("div", { staticClass: "tile is-parent" }, [
                              _c(
                                "div",
                                { staticClass: "columns is-multiline tile" },
                                _vm._l(_vm.airConditioners, function(
                                  airConditioner
                                ) {
                                  return airConditioner.room_id == _vm.sala.id
                                    ? _c(
                                        "div",
                                        {
                                          key: airConditioner.id,
                                          staticClass:
                                            "tile is-child column is-3"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "box",
                                              on: {
                                                click: function($event) {
                                                  _vm.isAirConditionerModalActive = true
                                                  _vm.airConditionerSelected = airConditioner
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "field" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-7"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "AIRE ACONDICIONADO"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Nº " +
                                                          _vm._s(
                                                            airConditioner.id
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                }),
                                0
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.hasAirConditioners(_vm.sala)
                          ? _c(
                              "div",
                              { staticClass: "tile columns is-vcentered" },
                              [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        NO TIENE EQUIPOS DE CLIMA\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      ])
                    ]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tile is-ancestor" }, [
          _c(
            "div",
            { staticClass: "tile is-parent is-8" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile",
                  attrs: {
                    label: "ESPACIO",
                    "label-position": "on-border",
                    "custom-class": !_vm.isCurrentSala(_vm.sala)
                      ? "has-text-grey-light"
                      : ""
                  }
                },
                [
                  !_vm.canEditSurface
                    ? _c(
                        "div",
                        {
                          staticClass: "tile box is-shadowless",
                          staticStyle: { border: "solid 0.1rem #cccccc" }
                        },
                        [
                          _vm.sala.current_room_surface
                            ? _c(
                                "div",
                                { staticClass: "tile is-parent is-vertical" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tile box is-child has-text-centered"
                                    },
                                    [
                                      _c("div", { staticClass: "field" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-bold is-size-6"
                                          },
                                          [_vm._v("SUPERFICIE")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.totalSurface) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Total")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.usedSurface) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Usada")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.availableSurface
                                                    ) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Disponible")]
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.sala.current_room_surface
                            ? _c(
                                "div",
                                { staticClass: "tile columns is-vcentered" },
                                [
                                  _c("div", { staticClass: "column" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    NO TIENE DATOS DE ESPACIO\n                                "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.canEditSurface
                    ? _c(
                        "a",
                        {
                          staticClass: "tile box is-shadowless",
                          staticStyle: { border: "solid 0.1rem #cccccc" },
                          on: {
                            click: function($event) {
                              _vm.isSurfaceModalActive = true
                            }
                          }
                        },
                        [
                          _vm.sala.current_room_surface
                            ? _c(
                                "div",
                                { staticClass: "tile is-parent is-vertical" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tile box is-child has-text-centered"
                                    },
                                    [
                                      _c("div", { staticClass: "field" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-bold is-size-6"
                                          },
                                          [_vm._v("SUPERFICIE")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "level" }, [
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.totalSurface) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Total")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.usedSurface) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Usada")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "level-item" },
                                          [
                                            _c("div", {}, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-bold is-size-6"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.availableSurface
                                                    ) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "has-text-weight-normal is-size-7"
                                                },
                                                [_vm._v("Disponible")]
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.sala.current_room_surface
                            ? _c(
                                "div",
                                { staticClass: "tile columns is-vcentered" },
                                [
                                  _c("div", { staticClass: "column" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    NO TIENE DATOS DE ESPACIO\n                                "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tile is-parent" },
            [
              _c(
                "b-field",
                {
                  staticClass: "tile",
                  attrs: {
                    label: "SEGURIDAD",
                    "label-position": "on-border",
                    "custom-class": !_vm.isCurrentSala(_vm.sala)
                      ? "has-text-grey-light"
                      : ""
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tile box is-shadowless",
                      staticStyle: { border: "solid 0.1rem #cccccc" }
                    },
                    [
                      _vm.sala.fire_detections.length
                        ? _c(
                            "div",
                            { staticClass: "tile is-parent is-vertical" },
                            [
                              _c(
                                "b-field",
                                {
                                  staticClass: "tile",
                                  attrs: {
                                    label: "INCENDIO",
                                    "label-position": "on-border",
                                    "custom-class": !_vm.isCurrentSala(_vm.sala)
                                      ? "has-text-grey-light"
                                      : ""
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tile box is-child is-shadowless",
                                      staticStyle: {
                                        border: "solid 0.1rem #cccccc"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "field" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-bold is-size-6"
                                          },
                                          [_vm._v(_vm._s(_vm.detectionType))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-normal is-size-7"
                                          },
                                          [_vm._v("Detección")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "field" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-bold is-size-6"
                                          },
                                          [_vm._v(_vm._s(_vm.extintionType))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "has-text-weight-normal is-size-7"
                                          },
                                          [_vm._v("Extinción")]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.sala.fire_detections.length
                        ? _c(
                            "div",
                            { staticClass: "tile columns is-vcentered" },
                            [
                              _c("div", { staticClass: "column" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "has-text-centered has-text-weight-light has-text-grey is-size-7"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    NO TIENE EQUIPOS DE SEGURIDAD\n                                "
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.sala.current_room_distribution
          ? _c("div", { staticClass: "tile is-ancestor" }, [
              _c(
                "div",
                { staticClass: "tile is-parent" },
                [
                  _c(
                    "b-field",
                    {
                      staticClass: "tile",
                      attrs: {
                        label: "DISTRIBUCION",
                        "label-position": "on-border",
                        "custom-class": !_vm.isCurrentSala(_vm.sala)
                          ? "has-text-grey-light"
                          : ""
                      }
                    },
                    [
                      !_vm.canEditDistribution
                        ? _c(
                            "div",
                            {
                              staticClass: "tile box is-shadowless",
                              staticStyle: { border: "solid 0.1rem #cccccc" }
                            },
                            [
                              true
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "tile is-parent is-vertical"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "tile box is-child has-text-right"
                                        },
                                        [
                                          _c("div", { staticClass: "level" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.totalCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Capacidad Total")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.usedCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Capacidad Usada")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.availableCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Capacidad Disponible"
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                : undefined
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.canEditDistribution
                        ? _c(
                            "a",
                            {
                              staticClass: "tile box is-shadowless",
                              staticStyle: { border: "solid 0.1rem #cccccc" },
                              on: {
                                click: function($event) {
                                  _vm.isDistributionModalActive = true
                                }
                              }
                            },
                            [
                              true
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "tile is-parent is-vertical"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "tile box is-child has-text-right"
                                        },
                                        [
                                          _c("div", { staticClass: "level" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.totalCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Capacidad Total")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.usedCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [_vm._v("Capacidad Usada")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "level-item has-text-centered"
                                              },
                                              [
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-bold is-size-6"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.availableCapacity
                                                        ) + " "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "is-size-7"
                                                        },
                                                        [_vm._v("kW")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "has-text-weight-normal is-size-7"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Capacidad Disponible"
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                : undefined
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isPowerRectifierModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isPowerRectifierModalActive = $event
            }
          }
        },
        [
          _c("modal-power-rectifier", {
            attrs: {
              powerRectifier: _vm.powerRectifierSelected,
              can: _vm.canEditPowerRectifiers,
              user: _vm.user
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isDistributionModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isDistributionModalActive = $event
            }
          }
        },
        [
          _c("modal-distribution", {
            attrs: {
              sala: _vm.sala,
              user: _vm.user,
              canEdit: _vm.canEditDistribution
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.isSurfaceModalActive,
            "has-modal-card": "",
            "trap-focus": "",
            "aria-role": "dialog",
            "aria-modal": ""
          },
          on: {
            "update:active": function($event) {
              _vm.isSurfaceModalActive = $event
            }
          }
        },
        [
          _c("modal-surface", {
            attrs: {
              sala: _vm.sala,
              user: _vm.user,
              canEdit: _vm.canEditSurface
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.vue?vue&type=template&id=63d174f2& */ "./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&");
/* harmony import */ var _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room.vue?vue&type=script&lang=js& */ "./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pop/layout/Room.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=template&id=63d174f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pop/layout/Room.vue?vue&type=template&id=63d174f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_63d174f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);