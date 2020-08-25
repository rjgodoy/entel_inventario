<template>
    <div class="columns">

        <!-- ##### GENERAL ##### -->
        <div class="column is-3 has-text-centered">
            <div class="has-text-centered is-size-7 has-text-weight-bold" style="padding: 4px;">GENERAL</div>
            <div class="" style="padding: 8px; border: 1px solid #aaa; border-radius: 15px; position: relative;">
                <div class="" style="padding: 4px">
                    <div class="">
                        <font-awesome-icon 
                            icon="circle"
                            size="2x" 
                            :class="totalAvailableEnergyCapacity <= 5 || totalAvailableClimateCapacity <= 5 || totalAvailableSurface <= 5 ? 'has-text-info' : ((totalAvailableEnergyCapacity > 5 && totalAvailableEnergyCapacity <= 10) || (totalAvailableClimateCapacity > 5 && totalAvailableClimateCapacity <= 10) || (totalAvailableSurface > 5 && totalAvailableSurface <= 10) ? 'has-text-warning' : 'has-text-success')"
                            />
                    </div>
                    <div class="has-text-centered has-text-white">
                        <div class=" is-size-5 has-text-weight-bold">
                            {{ totalCapacity | numeral('0,0.0') }}
                            <span class="is-size-6 has-text-weight-light">kW</span>
                        </div>
                        <p class="has-text-weight-light is-size-7">Disponibles</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="column has-text-centered">

            <div class="level has-text-centered is-size-7 has-text-weight-bold" style="margin: 0; padding: 4px;">
                <div class="level-item">ENERGIA</div>
                <div class="level-item" v-if="canViewClimate">CLIMA</div>
                <div class="level-item">ESPACIO</div>
            </div>

            <div style="padding: 8px; border: 1px solid #aaa; border-radius: 15px;">
                <div class="level"  style="padding: 4px">

                    <!-- ##### ENERGIA ##### -->
                    <div class="level-item" style="position: relative">
                        <div class="">
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableEnergyCapacity <= 5 ? 'has-text-info' : (totalAvailableEnergyCapacity > 5 && totalAvailableEnergyCapacity <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">
                                    {{ canViewClimate ? totalAvailableEnergyCapacity : Math.min(totalAvailableEnergyCapacity, totalAvailableClimateCapacity) | numeral('0,0.0') }}
                                    <span class="is-size-6 has-text-weight-light">kW</span>
                                </div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                    <!-- ##### CLIMA ##### -->
                    <div class="level-item" v-if="canViewClimate">
                        <div class="">
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableClimateCapacity <= 5 ? 'has-text-info' : (totalAvailableClimateCapacity > 5 && totalAvailableClimateCapacity <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">{{ totalAvailableClimateCapacity | numeral('0,0.0') }}
                                <span class="is-size-6 has-text-weight-light">kW</span></div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                    <!-- ##### ESPACIO ##### -->
                    <div class="level-item">
                        <div class="">
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableSurface <= 5 ? 'has-text-info' : (totalAvailableSurface > 5 && totalAvailableSurface <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">{{ totalAvailableSurface | numeral('0,0.0') }}</div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    // import { library } from "@fortawesome/fontawesome-svg-core";
    // import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    // library.add(faCircle, faSearch);

    export default {
        components: {
        },
        props : [
            'user',
            'room'
        ],
        
        data() {
            return {
                junctions: Object,
                generatorSets: Object,
                roomPlanes: Array
            }
        },

        created() {
        },

        mounted() {
            this.getRoomPlanes()
            this.getJunctions()
            this.getGeneratorSets()
        },

        watch: {
            currentCrm(newValue) {
                this.getRoomsData()
            }
        },

        computed: {
            totalCapacity() {
                // return this.junctionsTotalAvailableCapacity
                // return this.generatorSetTotalAvailableCapacity
                // return this.powerRectifiersAvailableCapacity
                // return this.batteriesAvailableCapacity
                // return this.distributionAvailableCapacity
                
                let total = Math.min(this.totalAvailableEnergyCapacity, this.totalAvailableClimateCapacity)
                if (total >= 0) {
                    return total
                }
                return 0
            },

            totalAvailableEnergyCapacity() {
                let total = Math.min(
                    this.junctionsTotalAvailableCapacity, 
                    this.generatorSetTotalAvailableCapacity, 
                    this.powerRectifiersAvailableCapacity,
                    this.batteriesAvailableCapacity,
                    this.distributionAvailableCapacity
                )
                if (total > 0) {
                    return total
                }
                return 0
            },

            totalAvailableClimateCapacity() {
                let total = Math.min(20, 25)
                if (total >= 0) {
                    return total
                }
                return 0
            },

            canViewClimate() {
                return this.user.roles[0].slug == 'engineer-admin' 
                    || this.user.roles[0].slug == 'admin' 
                    || this.user.roles[0].slug == 'developer'
                    || this.user.roles[0].slug == 'super-viewer' 
                    ? true : false
            },

            // ✅#################### Junctions
                jnctionsTotalCapacity(){
                    let sum = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            sum = sum + (this.powerA(this.junctions[element]) + this.powerB(this.junctions[element])) * this.junctions[element].use_factor + this.photovoltaicCapacity(this.junctions[element])
                        })
                    }
                    return sum
                },

                averageConsumptionPerPhotovoltaicGroup() {  // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
                    return 0
                },

                withoutBatteriesDisponibility() {
                    return this.jnctionsTotalCapacity - this.withoutBatteriesCapacity
                },

                batteriesRecharge() {
                    let total = 0
                    Object.keys(this.room.pop.rooms).forEach(element => {
                        let popRoom = this.room.pop.rooms[element]
                        if(popRoom.power_rectifiers.length) {
                            Object.keys(popRoom.planes).forEach(item => {
                                let roomPlane = popRoom.planes[item]
                                total += this.batteryRechargePower(roomPlane)
                            })
                        }
                    })
                    return total
                },

                withoutBatteriesCapacity() {
                    let sum = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            sum = sum + this.powerUsedA(this.junctions[element]) + this.powerUsedB(this.junctions[element]) + this.averageConsumptionPerPhotovoltaicGroup
                        })
                    }
                    return sum
                },

                junctionsUsedCapacity() {
                    let punctualConsumption = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            if(this.junctions[element].latest_measurement) {
                                punctualConsumption += this.junctions[element].latest_measurement.punctual_consumption
                            }
                        })
                    }
                    return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption
                },

                junctionsTotalAvailableCapacity() {
                    return this.jnctionsTotalCapacity - this.junctionsUsedCapacity
                },


            // ✅#################### Generator Sets
                generatorSetResponsable() {
                    let area = 'Sin Información'; let id = null;
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            if(this.generatorSets[element].current_generator_responsable) {
                                switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
                                    case 1:
                                        id = 1
                                        area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                        break
                                    case 2:
                                        id = id == 1 ? id : 2
                                        arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                        break
                                    case 3:
                                        id = id == 1 || id == 2 ? id : 3
                                        area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                        break
                                    default:
                                        break
                                }
                            }
                        })
                    }
                    

                    return {
                        'id': id,
                        'area': area
                    }
                },

                totalGeneratorSetCapacityA() {
                    let sum = 0; let res = 0; let div = 1; 
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
                            let capacity = primeCapacity * 0.8

                            switch(this.generatorSets[element].generator_set_topology_type_id) {
                                case 1:
                                    sum = sum + capacity
                                    break
                                case 2:
                                    sum = sum + capacity
                                    res = res + capacity
                                    div = div++
                                    break
                                case 3:
                                    sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum
                                    break
                                default:
                                    break
                            }
                        })
                    }
                    return sum - (res / div)
                },

                totalGeneratorSetCapacityB() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
                            let capacity = primeCapacity * 0.8

                            switch(this.generatorSets[element].generator_set_topology_type_id) {
                                case 1:
                                case 2:
                                default:
                                    break
                                case 3:
                                    sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum
                                    break
                            }
                        })
                    }
                    return sum
                },

                totalGeneratorSetCapacity() {
                    return this.generatorSetResponsable.id == 1 ? this.totalGeneratorSetCapacityA + this.totalGeneratorSetCapacityB : 123
                },

                generatorSetUsedCapacityA() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

                            switch(this.generatorSets[element].generator_set_topology_type_id) {
                                case 1:
                                case 2:
                                    sum = sum + usedCapacity
                                    break
                                case 3:
                                    sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum
                                    break
                                default:
                                    break
                            }
                        })
                    }
                    return sum
                },

                generatorSetUsedCapacityB() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

                            switch(this.generatorSets[element].generator_set_topology_type_id) {
                                case 1:
                                case 2:
                                default:
                                    break
                                case 3:
                                    sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum
                                    break
                            }
                        })
                    }
                    return sum
                },

                totalGeneratorSetUsedCapacity() {
                    return this.generatorSetResponsable.id == 1 ? this.generatorSetUsedCapacityA + this.generatorSetUsedCapacityB : 456
                },

                generatorSetAvailableCapacityA() {
                    return this.totalGeneratorSetCapacityA - this.generatorSetUsedCapacityA
                },

                generatorSetAvailableCapacityB() {
                    return this.totalGeneratorSetCapacityB - this.generatorSetUsedCapacityB
                },

                generatorSetTotalAvailableCapacity() {
                    return this.generatorSetResponsable.id == 1 ? this.generatorSetAvailableCapacityA + this.generatorSetAvailableCapacityB : 789
                },


            // ✅#################### Power Rectifiers
                powerRectifiersTotalCapacity() {
                    let realRoomCapacity = 0
                    // if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type) {
                    //     let plane_types = this.room.current_room_delegation.plane_delegation_type.plane_types
                    //     Object.keys(plane_types).forEach(element => {
                    //         let planes = plane_types[element].planes
                            Object.keys(this.roomPlanes).forEach(item => {
                                let plane = this.roomPlanes[item]
                                realRoomCapacity += this.realPlaneCapacity(plane)
                            })
                    //     })
                    // }
                    return realRoomCapacity
                },

                powerRectifiersUsedCapacity() {
                    let usedRoomCapacity = 0
                    // if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type) {
                    //     let plane_types = this.room.current_room_delegation.plane_delegation_type.plane_types
                    //     Object.keys(plane_types).forEach(element => {
                    //         let planes = plane_types[element].planes
                            Object.keys(this.roomPlanes).forEach(item => {
                                let plane = this.roomPlanes[item]
                                usedRoomCapacity += this.totalPower(plane)
                            })
                        // })
                    // }
                    return usedRoomCapacity
                },

                powerRectifiersAvailableCapacity() {
                    const original = 10000000
                    let availableRoomCapacity = original
                    let availableRoomCapacityA = original
                    let availableRoomCapacityB = original
                    if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type_id) {
                        Object.keys(this.roomPlanes).forEach(item => {
                            let plane = this.roomPlanes[item]
                            switch(this.room.current_room_delegation.plane_delegation_type_id) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    availableRoomCapacity = this.availablePlaneCapacity(plane)
                                    break
                                case 5:
                                case 6:
                                    if(availableRoomCapacity > this.availablePlaneCapacity(plane)) {
                                        availableRoomCapacity = this.availablePlaneCapacity(plane)
                                    }
                                    break
                                case 7:
                                    if((availableRoomCapacityA > this.availablePlaneCapacity(plane)) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                                        availableRoomCapacityA = this.availablePlaneCapacity(plane)
                                        console.log(availableRoomCapacityA)
                                    }

                                    if((availableRoomCapacityB > this.availablePlaneCapacity(plane)) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                                        availableRoomCapacityB = this.availablePlaneCapacity(plane)
                                        console.log(availableRoomCapacityB)
                                    }
                                    // console.log(availableRoomCapacityA)
                                    availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB
                                    break
                                case 8:
                                default:
                                    break
                            }
                        })
                    }
                    availableRoomCapacity = availableRoomCapacity < original ? availableRoomCapacity : 0
                    return availableRoomCapacity
                },


            // ✅#################### Batteries
                popAutonomy() {
                    return this.room.pop.current_autonomy ? this.room.pop.current_autonomy.theoretical : 0
                },

                batteriesTotalCapacity() {
                    let capacity = 0
                    Object.keys(this.roomPlanes).forEach(element => {
                        let plane = this.roomPlanes[element]
                        Object.keys(plane.battery_banks).forEach(item => {
                            capacity += plane.battery_banks[item].capacity
                        })
                    })
                    let total = (((capacity * 48) / 1000) / this.popAutonomy)
                    return total
                },

                batteriesUsedCapacity() {
                    let used = 0
                    Object.keys(this.roomPlanes).forEach(element => {
                        let plane = this.roomPlanes[element]
                        used += this.chargeRealPower(plane)
                    })
                    return used
                },

                batteriesAvailableCapacity() {
                    const original = 10000000
                    let available = original
                    let availableA = original
                    let availableB = original
                    if(this.room.current_room_delegation && this.room.current_room_delegation.plane_delegation_type_id) {
                        Object.keys(this.roomPlanes).forEach(item => {
                            let plane = this.roomPlanes[item]
                            switch(this.room.current_room_delegation.plane_delegation_type_id) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    available = this.availableBatteryCapacityPlane(plane)
                                    break
                                case 5:
                                case 6:
                                    if(available > this.availableBatteryCapacityPlane(plane)) {
                                        available = this.availableBatteryCapacityPlane(plane)
                                    }
                                    break
                                case 7:
                                    if(availableA > this.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                                        availableA = this.availableBatteryCapacityPlane(plane)
                                    } 

                                    if(availableB > this.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                                        availableB = this.availableBatteryCapacityPlane(plane)
                                    }
                                    available = availableA + availableB
                                    break
                                case 8:
                                default:
                                    break
                            }
                        })

                        switch(this.room.current_room_delegation.plane_delegation_type_id) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                available = available
                                break
                            case 5:
                            case 6:
                            case 7:
                                available = available * 2
                                break
                            case 8:
                            default:
                                break
                        }
                    }

                    available = available < original ? available : 0
                    return available
                },


            // #################### Climate


            // ✅#################### Distribution
                distributionTotalCapacity() {
                    return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0
                },

                distributionUsedCapacity() {
                    return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0
                },

                distributionAvailableCapacity() {
                    return this.distributionTotalCapacity - this.distributionUsedCapacity
                },


            // ✅#################### Surface
                totalSurface() {
                    return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0
                },

                usedSurface() {
                    return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0
                },

                totalAvailableSurface() {
                    return this.totalSurface - this.usedSurface
                },

            
        },

        methods: {
            getRoomPlanes() {
                if (this.room.current_room_delegation && this.room.current_room_delegation.id) {
                    console.log(this.room.id)
                    console.log(this.room.current_room_delegation)

                    axios.get(`/api/roomPlanes/${this.room.id}?api_token=${this.user.api_token}&plane_delegation_type_id=${this.room.current_room_delegation.plane_delegation_type_id}`)
                    .then((response) => {
                        console.log(response.data)
                        this.roomPlanes = response.data.planes
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Empalmes: ' + error);
                    });
                }
            },

            async getJunctions() {
                await axios.get(`/api/popJunctions/${this.room.pop_id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.junctions = response.data.junctions
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            async getGeneratorSets() {
                await axios.get(`/api/generatorSets/${this.room.pop_id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.generatorSets = response.data.generatorSets
                    this.canEditGeneratorGroups = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },

            installedCapacity(plane) {
                let capacity = 0
                Object.keys(plane.power_rectifiers).forEach(element => {
                    let pr = plane.power_rectifiers[element]
                    Object.keys(pr.power_rectifier_modules).forEach(item => {
                        capacity += pr.power_rectifier_modules[item].capacity
                    })
                    
                })
                return capacity
            },

            chargeRealPower(plane) {
                return plane.float_tension * plane.current / 1000
            },

            rechargeCurrent(plane) {
                let current = 0
                Object.keys(plane.battery_banks).forEach(item => {
                    current += plane.battery_banks[item].capacity
                })
                return plane.recharge_factor * current
            },

            batteryRechargePower(plane) {
                return this.rechargeCurrent(plane) * plane.float_tension / 1000
            },

            totalPower(plane) {
                return this.chargeRealPower(plane) + this.batteryRechargePower(plane)
            },

            realPlaneCapacity(plane) {
                let currentRedundantModules = plane.current_redundant_modules
                let currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0
                return this.installedCapacity(plane) - currentRedundantModulesCapacity
            },

            availablePlaneCapacity(plane) {
                return this.realPlaneCapacity(plane) - this.totalPower(plane)
            },

            batteryTotalCapacityPlane(plane) {
                let capacity = 0
                Object.keys(plane.battery_banks).forEach(item => {
                    capacity += plane.battery_banks[item].capacity
                })
                return (((capacity * 48) / 1000) / this.popAutonomy)
            },

            availableBatteryCapacityPlane(plane) {
                return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane)
            },

            powerA(junction) {
                let latestProtectionRA = junction.latest_protection ? junction.latest_protection.regulada_a : 0
                let latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0
                if (junction.junction_type_id == 2) {
                    return latestProtectionRA * latestMeasureRA_V / 1000
                } else {
                    return latestProtectionRA * 380 * Math.sqrt(3) / 1000
                }
            },

            powerB(junction) {
                let latestProtectionRB = junction.latest_protection ? junction.latest_protection.regulada_b : 0
                if (junction.junction_type_id == 2) {
                    return latestProtectionRB * 220 / 1000
                } else {
                    return latestProtectionRB * 380 * Math.sqrt(3) / 1000
                }
            },

            powerUsedA(junction){
                let latestMeasureRA_A = junction.latest_measurement ? junction.latest_measurement.r_a_amp_measure : 0
                let latestMeasureSA_A = junction.latest_measurement ? junction.latest_measurement.s_a_amp_measure : 0
                let latestMeasureTA_A = junction.latest_measurement ? junction.latest_measurement.t_a_amp_measure : 0
                let latestMeasureRA_V = junction.latest_measurement ? junction.latest_measurement.r_a_volt_measure : 0
                let latestMeasureSA_V = junction.latest_measurement ? junction.latest_measurement.s_a_volt_measure : 0
                let latestMeasureTA_V = junction.latest_measurement ? junction.latest_measurement.t_a_volt_measure : 0
                if (junction.junction_type_id == 2) {
                    return latestMeasureRA_A * latestMeasureRA_V / 1000
                } else {
                    return ( (latestMeasureRA_A * latestMeasureRA_V) + (latestMeasureSA_A * latestMeasureSA_V) + (latestMeasureTA_A * latestMeasureTA_V) ) / 1000
                }
            },

            powerUsedB(junction){
                let latestMeasureRB_A = junction.latest_measurement ? junction.latest_measurement.r_b_amp_measure : 0
                let latestMeasureSB_A = junction.latest_measurement ? junction.latest_measurement.s_b_amp_measure : 0
                let latestMeasureTB_A = junction.latest_measurement ? junction.latest_measurement.t_b_amp_measure : 0
                let latestMeasureRB_V = junction.latest_measurement ? junction.latest_measurement.r_b_volt_measure : 0
                let latestMeasureSB_V = junction.latest_measurement ? junction.latest_measurement.s_b_volt_measure : 0
                let latestMeasureTB_V = junction.latest_measurement ? junction.latest_measurement.t_b_volt_measure : 0
                if (junction.junction_type_id == 2) {
                    return latestMeasureRB_A * latestMeasureRB_V / 1000
                } else {
                    return ( (latestMeasureRB_A * latestMeasureRB_V) + (latestMeasureSB_A * latestMeasureSB_V) + (latestMeasureTB_A * latestMeasureTB_V) ) / 1000
                }
            },

            photovoltaicCapacity(junction) {    // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
                let capacity = 0
                if (junction.latest_solar_panel) {
                    const solarPanelGroupQuantity = 6
                    for (var i = 1; i < solarPanelGroupQuantity; i++) {
                        capacity = capacity + (junction.latest_solar_panel['unit_capacity_group_'+i] * junction.latest_solar_panel['quantity_group_'+i])
                    }
                }
                return capacity
            },

            
        },

    }
</script>