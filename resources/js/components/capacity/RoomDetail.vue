<template>
    <div class="" >
        <header class="modal-card-head has-background-white has-text-centered">
            <div class="columns modal-card-title">
                <div class="column is-2">
                    <b-tag type="is-link" size="is-small" v-if="previewRoom.id">
                        <router-link :to="'/capacity/' + previewRoom.id" @click.native="getRoomData()">
                            <div class="has-text-weight-semibold is-size-6 has-text-white">{{ previewRoom.name }}</div>
                        </router-link>
                    </b-tag>
                </div>
                <div class="column">
                    <div class="has-text-weight-semibold">{{ pop ? pop.nombre : '' }} - {{ room.name }}: {{ room.old_name }}</div>
                </div>
                <div class="column is-2">
                    <b-tag type="is-link" size="is-small" v-if="nextRoom.id">
                        <router-link :to="'/capacity/' + nextRoom.id" @click.native="getRoomData()">
                            <div class="has-text-weight-semibold is-size-6 has-text-white">{{ nextRoom.name }}</div>
                        </router-link>
                    </b-tag>
                </div>
            </div>
            
            
        </header>

        <section class="section is-paddingless">
            <div class="box">
                <div class="level">
                    <div class="level-item" v-for="data in capacityData" style="position: relative;">
                        <div class="">
                            <div class="is-size-6">
                                <div class="has-text-weight-semibold" style="padding-bottom: 4px;">{{ data.title }}</div>
                                <div class="">Total: {{ data.total | numeral('0,0.0') }}</div>
                                <div class="">Utilizada: {{ data.used | numeral('0,0.0') }}</div>
                                <div class="">Disponible: {{ data.available | numeral('0,0.0') }}</div>
                            </div>
                            <div class="block" style="padding-top: 8px;">
                                <b-progress 
                                    :value="data.available * 100 / data.total" 
                                    show-value format="percent" 
                                    size="is-small"
                                    :type="data.available <= data.thresholds.critical ? 'is-danger' : (data.available <= data.thresholds.warning ? 'is-warning': 'is-success')">
                                </b-progress>
                            </div>
                        </div>
                        <b-loading :is-full-page="false" :active.sync="data.isLoading" :can-cancel="true"></b-loading>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="modal-card-body hero is-light" style="padding-top: 0">
            <div class="columns section">

                <div class="column is-1">
                    <div class="columns is-multiline">
                        <div class="column is-12"
                            v-for="tab in tabs" 
                            :key="tab.component" 
                            @click="currentTab = tab.component"
                            :class="currentTab === tab.component && (currentTab == 'eco' ? 'has-background-eco' : 'is-bold is-link')">
                            <div class="tile is-child box has-text-centered" :class="currentTab === tab.component ? 'is-bold is-link' : ''">
                                <font-awesome-icon 
                                    :icon="[tab.icon_type, tab.icon]"
                                    size="2x"
                                    :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'"/>
                                <div style="padding-top: 5px;">
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ tab.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column" style="padding-left: 48px;">
                    <keep-alive>
                        <component :is="currentTabComponent"
                            :user="user"
                            :room="room"
                            :pop="pop"
                        ></component>
                    </keep-alive>
                </div>

            </div>
            
        </section>
    </div>
</template>

<script>   
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faInfoCircle, faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons'
    library.add(faInfoCircle, faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator, farFolderOpen); 

    export default {
        components: {
            Capacity: () => import(/* webpackChunkName: "chunks/capacity/capacity"*/'./Capacity'),
            Projection: () => import(/* webpackChunkName: "chunks/capacity/projection"*/'./Projection'),
            // Requests: () => import(/* webpackChunkName: "chunks/capacity/requests"*/'./Requests'),
            // Calculator: () => import(/* webpackChunkName: "chunks/capacity/calculator"*/'./Calculator'),
            Layout: () => import(/* webpackChunkName: "chunks/capacity/layout"*/'./Layout'),
            Documents: () => import(/* webpackChunkName: "chunks/pop/documents/documents"*/'../pop/documents/Documents'),
        },

        props : [
            'user'
        ],

        data() {
            return {
                room: '',
                currentTab: 'layout',
                tabs: [
                    {
                        "title": "Capacity",
                        "component": "capacity",
                        "icon": "traffic-light",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Proyección",
                        "component": "projection",
                        "icon": "chart-line",
                        "icon_type": "fas"
                    },
                    // {
                    //     "title": "Reserva",
                    //     "component": "requests",
                    //     "icon": "file-invoice",
                    //     "icon_type": "fas"
                    // },
                    {
                        "title": "Layout",
                        "component": "layout",
                        "icon": "bezier-curve",
                        "icon_type": "fas"
                    },
                    // {
                    //     "title": "Calculador",
                    //     "component": "calculator",
                    //     "icon": "calculator",
                    //     "icon_type": "fas"
                    // },
                    {
                        "title": "Documentos",
                        "component": "documents",
                        "icon": "folder-open",
                        "icon_type": "far"
                    },
                ],

                junctions: Object,
                generatorSets: Object,
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

                planeTypeId: 0,
                planeTypes: [],
            }
        },

        computed: {
            capacityData() { 
                return [{
                    "title": "Empalme",
                    "total": this.totalJunctionsCapacity,
                    "used": this.totalUsedJunctionsCapacity,
                    "available": this.totalAvailableJunctionsCapacity,
                    "isLoading": this.totalJunctionsCapacity ? false : true,
                    "thresholds": this.thresholds.junctions
                },
                {
                    "title": "Grupo Electrógeno",
                    "total": this.totalGeneratorSetsCapacity,
                    "used": this.totalGeneratorSetsUsedCapacity,
                    "available": this.totalAvailableGeneratorSetsCapacity,
                    "isLoading": this.totalGeneratorSetsCapacity ? false : true,
                    "thresholds": this.thresholds.generatorSets
                },
                {
                    "title": "Plantas Rectificadoras",
                    "total": this.totalCapacityRoom,
                    "used": this.usedCapacityRoom,
                    "available": this.availableCapacityRoom(this.room),
                    "isLoading": this.totalCapacityRoom ? false : true,
                    "thresholds": this.thresholds.powerRectifiers
                },
                {
                    "title": "Baterías",
                    "total": this.totalCapacityBatteries(this.room),
                    "used": this.usedCapacityBatteries(this.room),
                    "available": this.availableCapacityBatteries(this.room),
                    "isLoading": this.totalCapacityBatteries(this.room) ? false : true,
                    "thresholds": this.thresholds.batteries
                },
                {
                    "title": "Clima",
                    "total": this.totalJunctionsCapacity,
                    "used": this.totalUsedJunctionsCapacity,
                    "available": this.totalAvailableJunctionsCapacity,
                    "isLoading": this.totalJunctionsCapacity ? false : true,
                    "thresholds": this.thresholds.climate
                },
                {
                    "title": "Distribución",
                    "total": this.totalDistributionCapacity,
                    "used": this.usedDistributionCapacity,
                    "available": this.availableDistributionCapacity,
                    "isLoading": this.totalDistributionCapacity ? false : true,
                    "thresholds": this.thresholds.disponibility
                },
                {
                    "title": "Espacio",
                    "total": this.totalSurface,
                    "used": this.usedSurface,
                    "available": this.availableSurface,
                    "isLoading": this.totalSurface ? false : true,
                    "thresholds": this.thresholds.surface
                }]
            },

            pop() {
                return this.room.pop
            },

            currentTabComponent() {
                return this.currentTab
            },

            // Junctions
            responsable() {
                let area = 'Sin Información'; let id = null;
                // if (this.generatorSets.length) {
                //     Object.keys(this.generatorSets).forEach(element => {
                //         if(this.generatorSets[element].current_generator_responsable) {
                //             switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
                //                 case 1:
                //                     id = 1
                //                     area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                //                     break
                //                 case 2:
                //                     id = id == 1 ? id : 2
                //                     arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                //                     break
                //                 case 3:
                //                     id = id == 1 || id == 2 ? id : 3
                //                     area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                //                     break
                //                 default:
                //                     break
                //             }
                //         }
                //     })
                // }
                

                return {
                    'id': id,
                    'area': area
                }
            },

            averageConsumptionPerPhotovoltaicGroup() {  // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
                return 0
            },

            totalJunctionsCapacity(){
                let sum = 0
                if (this.junctions.length) {
                    Object.keys(this.junctions).forEach(element => {
                        sum = sum + (this.powerA(this.junctions[element]) + this.powerB(this.junctions[element])) * this.junctions[element].use_factor + this.photovoltaicCapacity(this.junctions[element])
                    })
                }
                return sum
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

            withoutBatteriesDisponibility() {
                return this.totalJunctionsCapacity - this.withoutBatteriesCapacity
            },

            batteriesRecharge() {
                let total = 0
                if (this.pop) {
                    Object.keys(this.pop.rooms).forEach(element => {
                        let room = this.pop.rooms[element]
                        if(room.power_rectifiers.length) {
                            Object.keys(room.planes).forEach(item => {
                                let roomPlane = room.planes[item]
                                total += this.batteryRechargePower(roomPlane)
                            })
                        }
                    })
                }
                return total
            },

            totalUsedJunctionsCapacity() {
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

            totalAvailableJunctionsCapacity() {
                return this.totalJunctionsCapacity - this.totalUsedJunctionsCapacity
            },

            usagePercent() {
                return this.totalJunctionsCapacity != 0 ? this.totalUsedJunctionsCapacity / this.totalJunctionsCapacity : 0
            },


            // Generator Sets
            generatorSetsResponsable() {
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

            totalGeneratorSetsCapacityA() {
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

            totalGeneratorSetsCapacityB() {
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

            totalGeneratorSetsCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total
                    })
                }
                return total
            },

            usedGeneratorSetsCapacityA() {
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

            usedGeneratorSetsCapacityB() {
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

            totalGeneratorSetsUsedCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total
                    })
                }
                return total
            },

            availableGeneratorSetsCapacityA() {
                return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA
            },

            availableGeneratorSetsCapacityB() {
                return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB
            },

            totalAvailableGeneratorSetsCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.availableGeneratorSetsCapacityA + this.availableGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.available_capacity : total
                    })
                }
                return total
            },


            // Power Rectifiers
            planeType() {
                let type = 'Sin Información'
                switch(this.planeTypeId) {
                    case 1:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 1 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 2:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 2 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 3:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 3 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 4:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 4 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 5:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 5 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 6:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 6 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 7:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 7 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    case 8:
                        Object.keys(this.planeTypes).forEach(item => {
                           type = this.planeTypes[item].id == 8 && type == 'Sin Información' ? this.planeTypes[item].type : type
                        })
                        break
                    default:
                        break
                }
                return type
            },

            totalCapacityRoom() {
                let realRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    realRoomCapacity += this.realPlaneCapacity(plane)
                })
                this.totalPRCapacity = realRoomCapacity
                return realRoomCapacity
            },

            usedCapacityRoom() {
                let usedRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    usedRoomCapacity += this.totalPower(plane)
                })
                this.usedPRCapacity = usedRoomCapacity
                return usedRoomCapacity
            },

            // Distribution
            totalDistributionCapacity() {
                return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0
            },

            usedDistributionCapacity() {
                return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0
            },

            availableDistributionCapacity() {
                return this.totalDistributionCapacity - this.usedDistributionCapacity
            },

            // Surface
            totalSurface() {
                return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0
            },

            usedSurface() {
                return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0
            },

            availableSurface() {
                return this.totalSurface - this.usedSurface
            },



            // detectionType() {
            //     return this.room.fire_detections ? this.room.fire_detections[0].fire_detection_type.type : 'No tiene'
            // },

            // extintionType() {
            //     return this.room.fire_detections && this.room.fire_detections[0].fire_extintion_type ? this.room.fire_detections[0].fire_extintion_type.type : 'No tiene'
            // },

            // canEditDistribution() {
            //     return this.canEditAirConditioners && this.canEditPowerRectifiers
            // },

            // canEditSurface() {
            //     return this.canEditAirConditioners && this.canEditPowerRectifiers
            // },

            // powerRectifierData() {
            //     return {
            //         'totalPRCapacity': this.totalPRCapacity,
            //         'usedPRCapacity': this.usedPRCapacity,
            //         'availablePRCapacity': this.availablePRCapacity
            //     }
            // },

            // batteryData() {
            //     return {
            //         'totalBatteryCapacity': this.totalBatteryCapacity,
            //         'usedBatteryCapacity': this.usedBatteryCapacity,
            //         'availableBatteryCapacity': this.availableBatteryCapacity
            //     }
            // },

            popAutonomy() {
                return this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0
            },

            thresholds() {
                return {
                    'junctions': {
                        'critical': 5,
                        'warning': 15
                    },
                    'generatorSets': {
                        'critical': 5,
                        'warning': 15
                    },
                    'powerRectifiers': {
                        'critical': 5,
                        'warning': 15
                    },
                    'batteries': {
                        'critical': 5,
                        'warning': 15
                    },
                    'climate': {
                        'critical': 5,
                        'warning': 15
                    },
                    'disponibility': {
                        'critical': 5,
                        'warning': 15
                    },
                    'surface': {
                        'critical': 5,
                        'warning': 15
                    }
                }
            },

            popRooms() {
                let rooms = []
                if (this.pop) {
                    Object.keys(this.pop.rooms).forEach(element => {
                        rooms.push(this.pop.rooms[element].id)
                        rooms.sort(function (a, b) {
                            if (a > b) {
                                return 1;
                            }
                            if (a < b) {
                                return -1;
                            }
                            // a must be equal to b
                            return 0;
                        })
                    })
                }
                return rooms
            },

            previewRoom() {
                let id = 0
                let name = ''
                if (this.popRooms) {
                    const res = this.popRooms.indexOf(this.room.id)
                    if (res - 1 >= 0) {
                        id = this.popRooms[res - 1]
                        name = this.roomName(id)
                    }
                }
                return { 'id': id, 'name': name }
            },

            nextRoom() {
                let id = 0
                let name = ''
                if (this.popRooms) {
                    const res = this.popRooms.indexOf(this.room.id)
                    if (res + 1 <= this.popRooms.length - 1) {
                        id = this.popRooms[res + 1]
                        name = this.roomName(id)
                    }
                }
                return { 'id': id, 'name': name }
            },
        },

        watch: {
            planeTypeId(value) {     
            },

            isEditMode(val) {
                if (val == false) {
                    this.getPlanes()
                    // this.$eventBus.$emit('room-data')
                }
            },
        },

        created() {
            this.$eventBus.$on('room-data', this.getRoomData);
            this.$eventBus.$on('room-distribution', this.getRoomData);
            this.$eventBus.$on('room-surface', this.getRoomData);
            this.$eventBus.$on('change-room', this.getRoomData);
        },

        mounted() {
            this.getRoomData()

            // this.$emit('room-distribution', this.distribution);
            // this.$emit('room-surface', this.surface);
            // this.$emit('power-rectifier-data', this.powerRectifierData);
            // this.$emit('battery-data', this.batteryData);
        },

        methods: {
            getRoomData() {
                axios.get(`/api/rooms/${this.$route.params.id}?api_token=${this.user.api_token}`)
                .then(response => {
                    this.room = response.data.room
                    this.planeTypeId = this.room.current_room_delegation ? this.room.current_room_delegation.plane_delegation_type_id : null

                    this.getJunctions()
                    this.getGeneratorSets()

                    this.getPlaneTypes()
                    this.getAirConditioners()
                    this.getPlanes()
                })
            },



            // Junctions
            async getJunctions() {
                // if(this.pop) {
                await axios.get(`/api/popJunctions/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.junctions = response.data.junctions
                    this.canEditJunctions = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
                // }
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

            batteryRechargePower(plane) {
                return this.rechargeCurrent(plane) * plane.float_tension / 1000
            },

            rechargeCurrent(plane) {
                let current = 0
                Object.keys(plane.battery_banks).forEach(item => {
                    current += plane.battery_banks[item].capacity
                })
                return plane.recharge_factor * current
            },

            powerRectifiersInRoom(room) {
                let powerRectifiersInRoom = 0
                Object.keys(room.planes).forEach(element => {
                    let plane = room.planes[element]
                    powerRectifiersInRoom += plane.power_rectifiers.length                        
                })
                // console.log(powerRectifiersInRoom)
                return powerRectifiersInRoom
            },


            // Generator Sets
            async getGeneratorSets() {
                // if(this.pop) {
                    await axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
                    .then((response) => {
                        this.generatorSets = response.data.generatorSets
                        this.canEditGeneratorGroups = response.data.can
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                    });
                // }
            },


            // Power Rectifiers
            getPlaneTypes() {
                axios.get(`/api/planeTypes?api_token=${this.user.api_token}`).then(response => {
                    this.planeTypes = response.data.planes
                })
            },

            hasPlanes(room) {
                let bool = false
                if(this.planes) {
                    Object.keys(this.planes).forEach(element => {
                        let plane = this.planes[element]
                        Object.keys(plane.rooms).forEach(item => {
                            bool = !bool ? plane.rooms[item].id == room.id : bool
                        })
                    })
                }
                return bool
            },

            powerRectifierBelongsToPlane(powerRectifier, plane) {
                let bool = false
                // if (plane.power_rectifiers) {
                    Object.keys(plane.power_rectifiers).forEach(element => {
                        let pr = plane.power_rectifiers[element]
                        bool = pr.id == powerRectifier.id && !bool ? true : bool
                    })
                // }
                return bool
            },

            hasAirConditioners(room) {
                let bool = false
                if(this.airConditioners) {
                    Object.keys(this.airConditioners).forEach(element => {
                        bool = !bool ? this.airConditioners[element].room_id == room.id : bool
                    })
                }
                return bool
            },

            getPlanes() {
                axios.get(`/api/roomPlanes/${this.room.id}?api_token=${this.user.api_token}&plane_delegation_type_id=${this.planeTypeId}`)
                .then((response) => {
                    this.planes = response.data.planes
                    this.canEditPowerRectifiers = response.data.can ? response.data.can : false
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
                    this.airConditioners = response.data.airConditioner
                    this.canEditAirConditioners = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            }, 

            nominalCapacity(plane) {
                let capacity = 0
                Object.keys(plane.power_rectifiers).forEach(element => {
                    capacity += plane.power_rectifiers[element].capacity
                })
                return capacity
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

            totalCurrent(plane) {
                return plane.current + this.rechargeCurrent(plane)
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

            usePercentPlane(plane) {
                return this.totalPower(plane) / this.realPlaneCapacity(plane)
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

            availableCapacityRoom(room) {
                let availableRoomCapacity = 10000000
                let availableRoomCapacityA = 10000000
                let availableRoomCapacityB = 10000000
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    if(room.current_room_delegation) {
                        switch(room.current_room_delegation.plane_delegation_type_id) {
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
                                if(availableRoomCapacityA > this.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                                    availableRoomCapacityA = this.availablePlaneCapacity(plane)
                                    // i++
                                } 

                                if(availableRoomCapacityB > this.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                                    availableRoomCapacityB = this.availablePlaneCapacity(plane)
                                }
                                availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB
                                break
                            case 8:
                            default:
                                break
                        }
                    }
                })
                availableRoomCapacity = availableRoomCapacity < 10000000 ? availableRoomCapacity : 0
                this.availablePRCapacity = availableRoomCapacity
                return availableRoomCapacity
            },


            // Batteries
            totalCapacityBatteries(room) {
                let capacity = 0
                if (room.planes) {
                    Object.keys(room.planes).forEach(element => {
                        let plane = room.planes[element]
                        Object.keys(plane.battery_banks).forEach(item => {
                            capacity += plane.battery_banks[item].capacity
                        })
                    })
                }
                let total = (((capacity * 48) / 1000) / this.popAutonomy)
                this.totalBatteryCapacity = total
                return total
            },

            usedCapacityBatteries(room) {
                let used = 0
                if (room.planes) {
                    Object.keys(room.planes).forEach(element => {
                        let plane = room.planes[element]
                        used += this.chargeRealPower(plane)
                    })
                }
                this.usedBatteryCapacity = used
                return used
            },

            availableCapacityBatteries(room) {
                let available = 10000000
                if (room.planes) {
                    Object.keys(room.planes).forEach(element => {
                        let plane = room.planes[element]
                        if(available > this.availableBatteryCapacityPlane(plane)) {
                            available = this.availableBatteryCapacityPlane(plane)
                        }
                    })
                }
                let total = available != 10000000 ? available * 2 : 0
                this.availableBatteryCapacity = total
                return total
            },  

            roomName(room_id) {
                let name = ''
                if (this.pop) {
                    Object.keys(this.pop.rooms).forEach(element => {
                        name = this.pop.rooms[element].id == room_id ? this.pop.rooms[element].name : name
                    })
                }
                return name
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('room-data');
            this.$eventBus.$off('room-distribution');
            this.$eventBus.$off('room-surface');
            this.$eventBus.$off('change-room');
        }
    }
</script>
