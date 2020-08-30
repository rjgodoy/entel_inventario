(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/capacity/roomLights"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
// library.add(faCircle, faSearch);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ['user', 'room'],
  data: function data() {
    return {
      junctions: Object,
      generatorSets: Object,
      roomPlanes: Array
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getRoomPlanes();
    this.getJunctions();
    this.getGeneratorSets();
  },
  watch: {
    currentCrm: function currentCrm(newValue) {
      this.getRoomsData();
    }
  },
  computed: {
    totalCapacity: function totalCapacity() {
      // return this.junctionsTotalAvailableCapacity
      // return this.generatorSetTotalAvailableCapacity
      // return this.powerRectifiersAvailableCapacity
      // return this.batteriesAvailableCapacity
      // return this.distributionAvailableCapacity
      var total = Math.min(this.totalAvailableEnergyCapacity, this.totalAvailableClimateCapacity);

      if (total >= 0) {
        return total;
      }

      return 0;
    },
    totalAvailableEnergyCapacity: function totalAvailableEnergyCapacity() {
      var total = Math.min(this.junctionsTotalAvailableCapacity, this.generatorSetTotalAvailableCapacity, this.powerRectifiersAvailableCapacity, this.batteriesAvailableCapacity, this.distributionAvailableCapacity);

      if (total > 0) {
        return total;
      }

      return 0;
    },
    totalAvailableClimateCapacity: function totalAvailableClimateCapacity() {
      var total = Math.min(20, 25);

      if (total >= 0) {
        return total;
      }

      return 0;
    },
    canViewClimate: function canViewClimate() {
      return this.user.roles[0].slug == 'engineer-admin' || this.user.roles[0].slug == 'admin' || this.user.roles[0].slug == 'developer' || this.user.roles[0].slug == 'super-viewer' ? true : false;
    },
    // ✅#################### Junctions
    jnctionsTotalCapacity: function jnctionsTotalCapacity() {
      var _this = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + (_this.powerA(_this.junctions[element]) + _this.powerB(_this.junctions[element])) * _this.junctions[element].use_factor + _this.photovoltaicCapacity(_this.junctions[element]);
        });
      }

      return sum;
    },
    averageConsumptionPerPhotovoltaicGroup: function averageConsumptionPerPhotovoltaicGroup() {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      return 0;
    },
    withoutBatteriesDisponibility: function withoutBatteriesDisponibility() {
      return this.jnctionsTotalCapacity - this.withoutBatteriesCapacity;
    },
    batteriesRecharge: function batteriesRecharge() {
      var _this2 = this;

      var total = 0;
      Object.keys(this.room.pop.rooms).forEach(function (element) {
        var popRoom = _this2.room.pop.rooms[element];

        if (popRoom.power_rectifiers.length) {
          Object.keys(popRoom.planes).forEach(function (item) {
            var roomPlane = popRoom.planes[item];
            total += _this2.batteryRechargePower(roomPlane);
          });
        }
      });
      return total;
    },
    withoutBatteriesCapacity: function withoutBatteriesCapacity() {
      var _this3 = this;

      var sum = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          sum = sum + _this3.powerUsedA(_this3.junctions[element]) + _this3.powerUsedB(_this3.junctions[element]) + _this3.averageConsumptionPerPhotovoltaicGroup;
        });
      }

      return sum;
    },
    junctionsUsedCapacity: function junctionsUsedCapacity() {
      var _this4 = this;

      var punctualConsumption = 0;

      if (this.junctions.length) {
        Object.keys(this.junctions).forEach(function (element) {
          if (_this4.junctions[element].latest_measurement) {
            punctualConsumption += _this4.junctions[element].latest_measurement.punctual_consumption;
          }
        });
      }

      return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption;
    },
    junctionsTotalAvailableCapacity: function junctionsTotalAvailableCapacity() {
      return this.jnctionsTotalCapacity - this.junctionsUsedCapacity;
    },
    // ✅#################### Generator Sets
    generatorSetResponsable: function generatorSetResponsable() {
      var _this5 = this;

      var area = 'Sin Información';
      var id = null;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          if (_this5.generatorSets[element].current_generator_responsable) {
            switch (_this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
              case 1:
                id = 1;
                area = _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 2:
                id = id == 1 ? id : 2;
                arae = id == 1 ? area : _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              case 3:
                id = id == 1 || id == 2 ? id : 3;
                area = id == 1 || id == 2 ? area : _this5.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area;
                break;

              default:
                break;
            }
          }
        });
      }

      return {
        'id': id,
        'area': area
      };
    },
    totalGeneratorSetCapacityA: function totalGeneratorSetCapacityA() {
      var _this6 = this;

      var sum = 0;
      var res = 0;
      var div = 1;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this6.generatorSets[element].current_generator_set_capacity ? _this6.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this6.generatorSets[element].generator_set_topology_type_id) {
            case 1:
              sum = sum + capacity;
              break;

            case 2:
              sum = sum + capacity;
              res = res + capacity;
              div = div++;
              break;

            case 3:
              sum = _this6.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum - res / div;
    },
    totalGeneratorSetCapacityB: function totalGeneratorSetCapacityB() {
      var _this7 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var primeCapacity = _this7.generatorSets[element].current_generator_set_capacity ? _this7.generatorSets[element].current_generator_set_capacity.prime_capacity : 0;
          var capacity = primeCapacity * 0.8;

          switch (_this7.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this7.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetCapacity: function totalGeneratorSetCapacity() {
      return this.generatorSetResponsable.id == 1 ? this.totalGeneratorSetCapacityA + this.totalGeneratorSetCapacityB : 123;
    },
    generatorSetUsedCapacityA: function generatorSetUsedCapacityA() {
      var _this8 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this8.generatorSets[element].current_generator_set_capacity ? _this8.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this8.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
              sum = sum + usedCapacity;
              break;

            case 3:
              sum = _this8.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum;
              break;

            default:
              break;
          }
        });
      }

      return sum;
    },
    generatorSetUsedCapacityB: function generatorSetUsedCapacityB() {
      var _this9 = this;

      var sum = 0;

      if (this.generatorSets.length) {
        Object.keys(this.generatorSets).forEach(function (element) {
          var usedCapacity = _this9.generatorSets[element].current_generator_set_capacity ? _this9.generatorSets[element].current_generator_set_capacity.used_capacity : 0;

          switch (_this9.generatorSets[element].generator_set_topology_type_id) {
            case 1:
            case 2:
            default:
              break;

            case 3:
              sum = _this9.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum;
              break;
          }
        });
      }

      return sum;
    },
    totalGeneratorSetUsedCapacity: function totalGeneratorSetUsedCapacity() {
      return this.generatorSetResponsable.id == 1 ? this.generatorSetUsedCapacityA + this.generatorSetUsedCapacityB : 456;
    },
    generatorSetAvailableCapacityA: function generatorSetAvailableCapacityA() {
      return this.totalGeneratorSetCapacityA - this.generatorSetUsedCapacityA;
    },
    generatorSetAvailableCapacityB: function generatorSetAvailableCapacityB() {
      return this.totalGeneratorSetCapacityB - this.generatorSetUsedCapacityB;
    },
    generatorSetTotalAvailableCapacity: function generatorSetTotalAvailableCapacity() {
      return this.generatorSetResponsable.id == 1 ? this.generatorSetAvailableCapacityA + this.generatorSetAvailableCapacityB : 789;
    },
    // ✅#################### Power Rectifiers
    powerRectifiersTotalCapacity: function powerRectifiersTotalCapacity() {
      var _this10 = this;

      var realRoomCapacity = 0; // if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type) {
      //     let plane_types = this.room.current_room_delegation.plane_delegation_type.plane_types
      //     Object.keys(plane_types).forEach(element => {
      //         let planes = plane_types[element].planes

      Object.keys(this.roomPlanes).forEach(function (item) {
        var plane = _this10.roomPlanes[item];
        realRoomCapacity += _this10.realPlaneCapacity(plane);
      }); //     })
      // }

      return realRoomCapacity;
    },
    powerRectifiersUsedCapacity: function powerRectifiersUsedCapacity() {
      var _this11 = this;

      var usedRoomCapacity = 0; // if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type) {
      //     let plane_types = this.room.current_room_delegation.plane_delegation_type.plane_types
      //     Object.keys(plane_types).forEach(element => {
      //         let planes = plane_types[element].planes

      Object.keys(this.roomPlanes).forEach(function (item) {
        var plane = _this11.roomPlanes[item];
        usedRoomCapacity += _this11.totalPower(plane);
      }); // })
      // }

      return usedRoomCapacity;
    },
    powerRectifiersAvailableCapacity: function powerRectifiersAvailableCapacity() {
      var _this12 = this;

      var original = 10000000;
      var availableRoomCapacity = original;
      var availableRoomCapacityA = original;
      var availableRoomCapacityB = original;

      if (this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type_id) {
        Object.keys(this.roomPlanes).forEach(function (item) {
          var plane = _this12.roomPlanes[item];

          switch (_this12.room.current_room_delegation.plane_delegation_type_id) {
            case 1:
            case 2:
            case 3:
            case 4:
              availableRoomCapacity = _this12.availablePlaneCapacity(plane);
              break;

            case 5:
            case 6:
              if (availableRoomCapacity > _this12.availablePlaneCapacity(plane)) {
                availableRoomCapacity = _this12.availablePlaneCapacity(plane);
              }

              break;

            case 7:
              if (availableRoomCapacityA > _this12.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                availableRoomCapacityA = _this12.availablePlaneCapacity(plane);
                console.log(availableRoomCapacityA);
              }

              if (availableRoomCapacityB > _this12.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                availableRoomCapacityB = _this12.availablePlaneCapacity(plane);
                console.log(availableRoomCapacityB);
              } // console.log(availableRoomCapacityA)


              availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB;
              break;

            case 8:
            default:
              break;
          }
        });
      }

      availableRoomCapacity = availableRoomCapacity < original ? availableRoomCapacity : 0;
      return availableRoomCapacity;
    },
    // ✅#################### Batteries
    popAutonomy: function popAutonomy() {
      return this.room.pop.current_autonomy ? this.room.pop.current_autonomy.theoretical : 0;
    },
    batteriesTotalCapacity: function batteriesTotalCapacity() {
      var _this13 = this;

      var capacity = 0;
      Object.keys(this.roomPlanes).forEach(function (element) {
        var plane = _this13.roomPlanes[element];
        Object.keys(plane.battery_banks).forEach(function (item) {
          capacity += plane.battery_banks[item].capacity;
        });
      });
      var total = capacity * 48 / 1000 / this.popAutonomy;
      return total;
    },
    batteriesUsedCapacity: function batteriesUsedCapacity() {
      var _this14 = this;

      var used = 0;
      Object.keys(this.roomPlanes).forEach(function (element) {
        var plane = _this14.roomPlanes[element];
        used += _this14.chargeRealPower(plane);
      });
      return used;
    },
    batteriesAvailableCapacity: function batteriesAvailableCapacity() {
      var _this15 = this;

      var original = 10000000;
      var available = original;
      var availableA = original;
      var availableB = original;

      if (this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type_id) {
        Object.keys(this.roomPlanes).forEach(function (item) {
          var plane = _this15.roomPlanes[item];

          switch (_this15.room.current_room_delegation.plane_delegation_type_id) {
            case 1:
            case 2:
            case 3:
            case 4:
              available = _this15.availableBatteryCapacityPlane(plane);
              break;

            case 5:
            case 6:
              if (available > _this15.availableBatteryCapacityPlane(plane)) {
                available = _this15.availableBatteryCapacityPlane(plane);
              }

              break;

            case 7:
              if (availableA > _this15.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                availableA = _this15.availableBatteryCapacityPlane(plane);
              }

              if (availableB > _this15.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                availableB = _this15.availableBatteryCapacityPlane(plane);
              }

              available = availableA + availableB;
              break;

            case 8:
            default:
              break;
          }
        });

        switch (this.room.current_room_delegation.plane_delegation_type_id) {
          case 1:
          case 2:
          case 3:
          case 4:
            available = available;
            break;

          case 5:
          case 6:
          case 7:
            available = available * 2;
            break;

          case 8:
          default:
            break;
        }
      }

      available = available < original ? available : 0;
      return available;
    },
    // #################### Climate
    // ✅#################### Distribution
    distributionTotalCapacity: function distributionTotalCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0;
    },
    distributionUsedCapacity: function distributionUsedCapacity() {
      return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0;
    },
    distributionAvailableCapacity: function distributionAvailableCapacity() {
      return this.distributionTotalCapacity - this.distributionUsedCapacity;
    },
    // ✅#################### Surface
    totalSurface: function totalSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0;
    },
    usedSurface: function usedSurface() {
      return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0;
    },
    totalAvailableSurface: function totalAvailableSurface() {
      return this.totalSurface - this.usedSurface;
    }
  },
  methods: {
    getRoomPlanes: function getRoomPlanes() {
      var _this16 = this;

      if (this.room.current_room_delegation && this.room.current_room_delegation.id) {
        console.log(this.room.id);
        console.log(this.room.current_room_delegation);
        axios.get("/api/roomPlanes/".concat(this.room.id, "?plane_delegation_type_id=").concat(this.room.current_room_delegation.plane_delegation_type_id)).then(function (response) {
          console.log(response.data);
          _this16.roomPlanes = response.data.planes;
        })["catch"](function (error) {
          console.log('Error al traer los datos de Empalmes: ' + error);
        });
      }
    },
    getJunctions: function () {
      var _getJunctions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this17 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/popJunctions/".concat(this.room.pop_id)).then(function (response) {
                  _this17.junctions = response.data.junctions;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Empalmes: ' + error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getJunctions() {
        return _getJunctions.apply(this, arguments);
      }

      return getJunctions;
    }(),
    getGeneratorSets: function () {
      var _getGeneratorSets = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this18 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/generatorSets/".concat(this.room.pop_id)).then(function (response) {
                  _this18.generatorSets = response.data.generatorSets;
                  _this18.canEditGeneratorGroups = response.data.can;
                })["catch"](function (error) {
                  console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGeneratorSets() {
        return _getGeneratorSets.apply(this, arguments);
      }

      return getGeneratorSets;
    }(),
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
    powerA: function powerA(junction) {
      var latestProtectionRA = junction.latest_protection ? junction.latest_protection.regulada_a : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRA * latestMeasureRA_V / 1000;
      } else {
        return latestProtectionRA * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerB: function powerB(junction) {
      var latestProtectionRB = junction.latest_protection ? junction.latest_protection.regulada_b : 0;

      if (junction.junction_type_id == 2) {
        return latestProtectionRB * 220 / 1000;
      } else {
        return latestProtectionRB * 380 * Math.sqrt(3) / 1000;
      }
    },
    powerUsedA: function powerUsedA(junction) {
      var latestMeasureRA_A = junction.latest_measurement ? junction.latest_measurement.r_a_amp_measure : 0;
      var latestMeasureSA_A = junction.latest_measurement ? junction.latest_measurement.s_a_amp_measure : 0;
      var latestMeasureTA_A = junction.latest_measurement ? junction.latest_measurement.t_a_amp_measure : 0;
      var latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0;
      var latestMeasureSA_V = junction.latest_measurement ? junction.latest_measurement.s_a_volt_measure : 0;
      var latestMeasureTA_V = junction.latest_measurement ? junction.latest_measurement.t_a_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRA_A * latestMeasureRA_V / 1000;
      } else {
        return (latestMeasureRA_A * latestMeasureRA_V + latestMeasureSA_A * latestMeasureSA_V + latestMeasureTA_A * latestMeasureTA_V) / 1000;
      }
    },
    powerUsedB: function powerUsedB(junction) {
      var latestMeasureRB_A = junction.latest_measurement ? junction.latest_measurement.r_b_amp_measure : 0;
      var latestMeasureSB_A = junction.latest_measurement ? junction.latest_measurement.s_b_amp_measure : 0;
      var latestMeasureTB_A = junction.latest_measurement ? junction.latest_measurement.t_b_amp_measure : 0;
      var latestMeasureRB_V = junction.latest_measurement ? junction.latest_measurement.r_b_volt_measure : 0;
      var latestMeasureSB_V = junction.latest_measurement ? junction.latest_measurement.s_b_volt_measure : 0;
      var latestMeasureTB_V = junction.latest_measurement ? junction.latest_measurement.t_b_volt_measure : 0;

      if (junction.junction_type_id == 2) {
        return latestMeasureRB_A * latestMeasureRB_V / 1000;
      } else {
        return (latestMeasureRB_A * latestMeasureRB_V + latestMeasureSB_A * latestMeasureSB_V + latestMeasureTB_A * latestMeasureTB_V) / 1000;
      }
    },
    photovoltaicCapacity: function photovoltaicCapacity(junction) {
      // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
      var capacity = 0;

      if (junction.latest_solar_panel) {
        var solarPanelGroupQuantity = 6;

        for (var i = 1; i < solarPanelGroupQuantity; i++) {
          capacity = capacity + junction.latest_solar_panel['unit_capacity_group_' + i] * junction.latest_solar_panel['quantity_group_' + i];
        }
      }

      return capacity;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-3 has-text-centered" }, [
      _c(
        "div",
        {
          staticClass: "has-text-centered is-size-7 has-text-weight-bold",
          staticStyle: { padding: "4px" }
        },
        [_vm._v("GENERAL")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            padding: "8px",
            border: "1px solid #aaa",
            "border-radius": "15px",
            position: "relative"
          }
        },
        [
          _c("div", { staticStyle: { padding: "4px" } }, [
            _c(
              "div",
              {},
              [
                _c("font-awesome-icon", {
                  class:
                    _vm.totalAvailableEnergyCapacity <= 5 ||
                    _vm.totalAvailableClimateCapacity <= 5 ||
                    _vm.totalAvailableSurface <= 5
                      ? "has-text-info"
                      : (_vm.totalAvailableEnergyCapacity > 5 &&
                          _vm.totalAvailableEnergyCapacity <= 10) ||
                        (_vm.totalAvailableClimateCapacity > 5 &&
                          _vm.totalAvailableClimateCapacity <= 10) ||
                        (_vm.totalAvailableSurface > 5 &&
                          _vm.totalAvailableSurface <= 10)
                      ? "has-text-warning"
                      : "has-text-success",
                  attrs: { icon: "circle", size: "2x" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "has-text-centered has-text-white" }, [
              _c("div", { staticClass: " is-size-5 has-text-weight-bold" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm._f("numeral")(_vm.totalCapacity, "0,0.0")) +
                    "\n                        "
                ),
                _c("span", { staticClass: "is-size-6 has-text-weight-light" }, [
                  _vm._v("kW")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "has-text-weight-light is-size-7" }, [
                _vm._v("Disponibles")
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column has-text-centered" }, [
      _c(
        "div",
        {
          staticClass: "level has-text-centered is-size-7 has-text-weight-bold",
          staticStyle: { margin: "0", padding: "4px" }
        },
        [
          _c("div", { staticClass: "level-item" }, [_vm._v("ENERGIA")]),
          _vm._v(" "),
          _vm.canViewClimate
            ? _c("div", { staticClass: "level-item" }, [_vm._v("CLIMA")])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "level-item" }, [_vm._v("ESPACIO")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            padding: "8px",
            border: "1px solid #aaa",
            "border-radius": "15px"
          }
        },
        [
          _c("div", { staticClass: "level", staticStyle: { padding: "4px" } }, [
            _c(
              "div",
              {
                staticClass: "level-item",
                staticStyle: { position: "relative" }
              },
              [
                _c(
                  "div",
                  {},
                  [
                    _c("font-awesome-icon", {
                      class:
                        _vm.totalAvailableEnergyCapacity <= 5
                          ? "has-text-info"
                          : _vm.totalAvailableEnergyCapacity > 5 &&
                            _vm.totalAvailableEnergyCapacity <= 10
                          ? "has-text-warning"
                          : "has-text-success",
                      attrs: { icon: "circle", size: "2x" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "has-text-centered has-text-white" },
                      [
                        _c(
                          "div",
                          { staticClass: " is-size-5 has-text-weight-bold" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm._f("numeral")(
                                    _vm.canViewClimate
                                      ? _vm.totalAvailableEnergyCapacity
                                      : Math.min(
                                          _vm.totalAvailableEnergyCapacity,
                                          _vm.totalAvailableClimateCapacity
                                        ),
                                    "0,0.0"
                                  )
                                ) +
                                "\n                                "
                            ),
                            _c(
                              "span",
                              {
                                staticClass: "is-size-6 has-text-weight-light"
                              },
                              [_vm._v("kW")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "has-text-weight-light is-size-7" },
                          [_vm._v("Disponibles")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.canViewClimate
              ? _c("div", { staticClass: "level-item" }, [
                  _c(
                    "div",
                    {},
                    [
                      _c("font-awesome-icon", {
                        class:
                          _vm.totalAvailableClimateCapacity <= 5
                            ? "has-text-info"
                            : _vm.totalAvailableClimateCapacity > 5 &&
                              _vm.totalAvailableClimateCapacity <= 10
                            ? "has-text-warning"
                            : "has-text-success",
                        attrs: { icon: "circle", size: "2x" }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-centered has-text-white" },
                        [
                          _c(
                            "div",
                            { staticClass: " is-size-5 has-text-weight-bold" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("numeral")(
                                    _vm.totalAvailableClimateCapacity,
                                    "0,0.0"
                                  )
                                ) + "\n                            "
                              ),
                              _c(
                                "span",
                                {
                                  staticClass: "is-size-6 has-text-weight-light"
                                },
                                [_vm._v("kW")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "has-text-weight-light is-size-7" },
                            [_vm._v("Disponibles")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "level-item" }, [
              _c(
                "div",
                {},
                [
                  _c("font-awesome-icon", {
                    class:
                      _vm.totalAvailableSurface <= 5
                        ? "has-text-info"
                        : _vm.totalAvailableSurface > 5 &&
                          _vm.totalAvailableSurface <= 10
                        ? "has-text-warning"
                        : "has-text-success",
                    attrs: { icon: "circle", size: "2x" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "has-text-centered has-text-white" },
                    [
                      _c(
                        "div",
                        { staticClass: " is-size-5 has-text-weight-bold" },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("numeral")(
                                _vm.totalAvailableSurface,
                                "0,0.0"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "has-text-weight-light is-size-7" },
                        [_vm._v("Disponibles")]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomLights.vue?vue&type=template&id=4b4fd2f2& */ "./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&");
/* harmony import */ var _RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomLights.vue?vue&type=script&lang=js& */ "./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/capacity/RoomLights.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomLights.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomLights.vue?vue&type=template&id=4b4fd2f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/capacity/RoomLights.vue?vue&type=template&id=4b4fd2f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomLights_vue_vue_type_template_id_4b4fd2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);