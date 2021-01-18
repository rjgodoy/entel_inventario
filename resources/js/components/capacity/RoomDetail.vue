<template>
    <div class="" >
        <header class="modal-card-head has-background-white has-text-centered">
            <div class="columns modal-card-title is-vcentered">
                <div class="column is-2">
                    <router-link
                        v-if="previewRoom.id"
                        :to="'/capacity/' + previewRoom.id"
                        class="button is-default has-text-link" 
                        @click.native="record = false; getRoomData()"
                        type="button"
                        style="height: auto;">
                        <div class="columns is-vcentered">
                            <div class="column" style="padding-left: 8px; padding-right: 5px;">
                                &nbsp;<br><font-awesome-icon :icon="['fas', 'sort-up']" rotation="270"/><br>&nbsp;
                            </div>
                            <div class="column" style="padding-left: 5px; padding-right: 8px;">
                                <div class="has-text-weight-semibold is-size-6">{{ previewRoom.name }}</div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="column">
                    <div class="has-text-weight-semibold">{{ pop ? pop.nombre : '' }} - {{ room.name }}: {{ room.old_name }}</div>

                    <div class="has-text-centered" style="padding-top: 16px;">
                        <b-button v-if="canEditPowerRectifiers" size="is-small" @click="isNewRoomModalActive = true">Agregar nueva sala al POP</b-button>
                    </div>
                </div>
                <div class="column is-2">
                    <router-link
                        v-if="nextRoom.id"
                        :to="'/capacity/' + nextRoom.id"
                        class="button has-text-link is-default" 
                        @click.native="record = false; getRoomData()"
                        type="button"
                        style="height: auto;">
                        <div class="columns is-vcentered">
                            <div class="column" style="padding-left: 8px; padding-right: 5px;">
                                <div class="has-text-weight-semibold is-size-6">{{ nextRoom.name }}</div>
                            </div>
                            <div class="column" style="padding-left: 5px; padding-right: 8px;">
                                &nbsp;<br><font-awesome-icon :icon="['fas', 'sort-up']" rotation="90"/><br>&nbsp;
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </header>

        <section class="section is-paddingless">
            <div class="has-background-white" style="padding: 12px;">
                <div class="level">
                    <div class="level-item" v-for="data in capacityData" style="position: relative;">
                        <div class="">
                            <div class="is-size-6">
                                <div class="has-text-weight-semibold is-size-6" style="padding-bottom: 4px;">{{ data.title.toUpperCase() }}</div>
                                <div class="is-size-6">Total: {{ data.total | numeral('0,0.0') }} <span class="is-size-7">{{ data.unit }}</span></div>
                                <div class="is-size-6">Utilizada: {{ data.used | numeral('0,0.0') }} <span class="is-size-7">{{ data.unit }}</span></div>
                                <div class="is-size-6">Disponible: {{ data.available | numeral('0,0.0') }} <span class="is-size-7">{{ data.unit }}</span></div>
                            </div>
                            <div class="block" style="padding-top: 8px;">
                                <b-progress 
                                    :value="data.available * 100 / data.total" 
                                    show-value format="percent" 
                                    size="is-small"
                                    :type="data.available / data.total <= data.thresholds.critical ? 'is-danger' : (data.available / data.total <= data.thresholds.warning ? 'is-warning': 'is-success')">
                                </b-progress>
                            </div>
                        </div>
                        <!-- <b-loading :is-full-page="false" :active.sync="data.isLoading" :can-cancel="true"></b-loading> -->
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
                    <!-- <keep-alive> -->
                        <component :is="currentTabComponent"
                            :user="user"
                            :room="room"
                            :pop="room.pop"

                            :junctions=junctions
                            :generatorSets=generatorSets
                            :planes=planes
                            :planeTypes=planeTypes
                            :airConditioners=airConditioners

                            :canEditJunctions=canEditJunctions
                            :canEditGeneratorSets=canEditGeneratorSets
                            :canEditPowerRectifiers=canEditPowerRectifiers
                            :canEditAirConditioners=canEditAirConditioners
                            :canEditSurface=canEditSurface
                            :canEditDistribution=canEditDistribution
                            :canEditPlaneTypes=canEditPlaneTypes

                            :totalJunctionsCapacity=totalJunctionsCapacity
                            :totalUsedJunctionsCapacity=totalUsedJunctionsCapacity
                            :totalAvailableJunctionsCapacity=totalAvailableJunctionsCapacity

                            :totalGeneratorSetsCapacity=totalGeneratorSetsCapacity
                            :totalGeneratorSetsUsedCapacity=totalGeneratorSetsUsedCapacity
                            :totalAvailableGeneratorSetsCapacity=totalAvailableGeneratorSetsCapacity
                            :totalGeneratorSetsCapacityA=totalGeneratorSetsCapacityA
                            :totalGeneratorSetsCapacityB=totalGeneratorSetsCapacityB
                            :usedGeneratorSetsCapacityA=usedGeneratorSetsCapacityA
                            :usedGeneratorSetsCapacityB=usedGeneratorSetsCapacityB
                            :availableGeneratorSetsCapacityA=availableGeneratorSetsCapacityA
                            :availableGeneratorSetsCapacityB=availableGeneratorSetsCapacityB

                            :totalSurface=totalSurface
                            :usedSurface=usedSurface
                            :availableSurface=availableSurface

                            :totalDistributionCapacity=totalDistributionCapacity
                            :usedDistributionCapacity=usedDistributionCapacity
                            :availableDistributionCapacity=availableDistributionCapacity

                        ></component>
                    <!-- </keep-alive> -->
                </div>

            </div>
        </section>

        <b-modal :active.sync="isNewRoomModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-room
                :pop="pop" 
                :user="user"
                />
        </b-modal>
    </div>
</template>

<script>   
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faInfoCircle, faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator, faPlus, faEdit, faPencilAlt, faCheck, faEllipsisV, faEllipsisH, faSignInAlt, faSortUp, faRandom, faBolt, faSolarPanel, faShieldAlt, faCarBattery, faFire, faMap, faExclamationTriangle, faThumbtack } from "@fortawesome/free-solid-svg-icons";
    import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
    import { faFolderOpen as farFolderOpen, faMap as farMap } from '@fortawesome/free-regular-svg-icons'
    library.add(faInfoCircle, faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator, farFolderOpen, faPlus, faEdit, faPencilAlt, faCheck, faEllipsisV, faEllipsisH, faSignInAlt, faSortUp, faSuperpowers, faRandom, faBolt, faSolarPanel, faShieldAlt, faCarBattery, faFire, faMap, farMap, faExclamationTriangle, faThumbtack); 

    export default {
        components: {
            Capacity: () => import(/* webpackChunkName: "chunks/capacity/capacity"*/'./tabs/Capacity'),
            Projection: () => import(/* webpackChunkName: "chunks/capacity/projection"*/'./tabs/Projection'),
            // Requests: () => import(/* webpackChunkName: "chunks/capacity/requests"*/'./tabs/Requests'),
            Distribution: () => import(/* webpackChunkName: "chunks/capacity/distribution"*/'./tabs/Distribution'),
            Layout: () => import(/* webpackChunkName: "chunks/capacity/layout"*/'./tabs/Layout'),
            Documents: () => import(/* webpackChunkName: "chunks/pop/documents/documents"*/'../pop/documents/Documents'),
            ModalNewRoom: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newRoom"*/'../capacity/modals/new/ModalNewRoom'),
        },

        props : [
            'user'
        ],

        data() {
            return {
                room: '',
                currentTab: 'capacity',
                tabs: [
                    {
                        "title": "Capacity",
                        "component": "capacity",
                        "icon": "traffic-light",
                        "icon_type": "fas"
                    },
                    // {
                    //     "title": "Proyección",
                    //     "component": "projection",
                    //     "icon": "chart-line",
                    //     "icon_type": "fas"
                    // },
                    // {
                    //     "title": "Reserva",
                    //     "component": "requests",
                    //     "icon": "file-invoice",
                    //     "icon_type": "fas"
                    // },
                    {
                        "title": "Distribución",
                        "component": "distribution",
                        "icon": "bezier-curve",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Layout",
                        "component": "layout",
                        "icon": "map",
                        "icon_type": "far"
                    },
                    {
                        "title": "Documentos",
                        "component": "documents",
                        "icon": "folder-open",
                        "icon_type": "far"
                    },
                ],

                junctions: Object,
                generatorSets: Object,
                planes: Object,
                planeTypes: Object,
                airConditioners: Object,

                canEditJunctions: false,
                canEditGeneratorSets: false,
                canEditPowerRectifiers: false,
                canEditAirConditioners: false,
                canEditPlaneTypes: false,

                isNewRoomModalActive: false,

                planeTypeId: 0,

                record: false,
            }
        },

        created() {
            this.$eventBus.$on('room-data', this.getRoomData);
            this.$eventBus.$on('room-distribution', this.getRoomData);
            this.$eventBus.$on('room-surface', this.getRoomData);
            this.$eventBus.$on('room-security', this.getRoomData);
            this.$eventBus.$on('change-room', this.getRoomData);
            this.$eventBus.$on('new-power-rectifier', this.getRoomData)
            this.$eventBus.$on('new-junction', this.getRoomData)
            this.$eventBus.$on('power-rectifier-updated', this.getRoomData)
            this.$eventBus.$on('new-plane-updated', this.getRoomData)
            this.$eventBus.$on('new-battery-bank', this.getRoomData)
            this.$eventBus.$on('new-generator-set', this.getRoomData)
            this.$eventBus.$on('new-room', this.getRoomData)
            this.$eventBus.$on('air-conditioner-capacity', this.getRoomData);
            this.$eventBus.$on('new-solar-panel', this.getRoomData)
            this.$eventBus.$on('junction-measurements-updated', this.getRoomData)
            this.$eventBus.$on('generator-set-capacities-updated', this.getRoomData)
            this.$eventBus.$on('battery-autonomy', this.getRoomData)
            this.$eventBus.$on('battery-bank-deleted', this.getRoomData)
            this.$eventBus.$on('generator-set-deleted', this.getRoomData)
        },

        mounted() {
            this.getRoomData()
        },

        watch: {
            totalCapacityBatteries() {
                this.record ? this.recordCapacities() : this.record = true
            },

            planeTypeId(value) {     
            },

            isEditMode(val) {
                if (val == false) {
                    this.getPlanes()
                    // this.$eventBus.$emit('room-data')
                }
            },
        },

        computed: {
            canEditSurface() {
                return this.canEditPowerRectifiers || this.canEditJunctions || this.canEditAirConditioners
            },

            canEditDistribution() {
                return this.canEditPowerRectifiers || this.canEditJunctions || this.canEditAirConditioners
            },

            capacityData() { 
                return [{
                    "title": "Empalme",
                    "total": this.totalJunctionsCapacity,
                    "used": this.totalUsedJunctionsCapacity,
                    "available": this.totalAvailableJunctionsCapacity,
                    "isLoading": this.junctions.length && this.totalJunctionsCapacity == 0 ? true : false,
                    "thresholds": this.thresholds.junctions,
                    "unit": "kW"
                },
                {
                    "title": "Grupo Electrógeno",
                    "total": this.totalGeneratorSetsCapacity,
                    "used": this.totalGeneratorSetsUsedCapacity,
                    "available": this.totalAvailableGeneratorSetsCapacity,
                    "isLoading": this.totalGeneratorSetsCapacity || !this.generatorSets.length == 0 ? false : true,
                    "thresholds": this.thresholds.generatorSets,
                    "unit": "kW"
                },
                {
                    "title": "Plantas Rectificadoras",
                    "total": this.totalCapacityRoom,
                    "used": this.usedCapacityRoom,
                    "available": this.availableCapacityRoom(this.room),
                    "isLoading": this.totalCapacityRoom || !this.powerRectifiersInRoom(this.room) ? false : true,
                    "thresholds": this.thresholds.powerRectifiers,
                    "unit": "kW"
                },
                {
                    "title": "Baterías",
                    "total": this.totalCapacityBatteries(this.room),
                    "used": this.usedCapacityBatteries(this.room),
                    "available": this.availableCapacityBatteries(this.room),
                    "isLoading": this.totalCapacityBatteries(this.room) || !this.batteryBanksInRoom(this.room) ? false : true,
                    "thresholds": this.thresholds.batteries,
                    "unit": "kW"
                },
                {
                    "title": "Clima",
                    "total": this.totalClimateCapacity,
                    "used": this.usedClimateCapacity,
                    "available": this.totalAvailableClimateCapacity,
                    "isLoading": this.totalClimateCapacity && !this.usedClimateCapacity ? true : false,
                    "thresholds": this.thresholds.climate,
                    "unit": "kW"
                },
                {
                    "title": "Distribución",
                    "total": this.totalDistributionCapacity,
                    "used": this.usedDistributionCapacity,
                    "available": this.availableDistributionCapacity,
                    "isLoading": this.totalDistributionCapacity && !this.usedDistributionCapacity ? true : false,
                    "thresholds": this.thresholds.disponibility,
                    "unit": "kW"
                },
                {
                    "title": "Espacio",
                    "total": this.totalSurface,
                    "used": this.usedSurface,
                    "available": this.availableSurface,
                    "isLoading": this.totalSurface && !this.usedSurface ? true : false,
                    "thresholds": this.thresholds.surface,
                    "unit": "un"
                }]
            },

            pop() {
                return this.room.pop
            },

            currentTabComponent() {
                return this.currentTab
            },

            // ########################################### Junctions
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

                // Total
                totalJunctionsCapacity(){
                    let sum = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            if(!this.junctions[element].room_id || (this.junctions[element].room_id && this.junctions[element].room_id == this.room.id)) {
                                sum = sum + (this.powerA(this.junctions[element]) + this.powerB(this.junctions[element])) * this.junctions[element].use_factor + this.photovoltaicCapacity(this.junctions[element])
                            }
                        })
                    }
                    return sum
                },

                // Used
                totalUsedJunctionsCapacity() {
                    let punctualConsumption = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            if(!this.junctions[element].room_id || (this.junctions[element].room_id && this.junctions[element].room_id == this.room.id)) {
                                if(this.junctions[element].latest_measurement) {
                                    punctualConsumption += this.junctions[element].latest_measurement.punctual_consumption
                                }
                            }
                        })
                    }
                    return this.withoutBatteriesCapacity + this.batteriesRecharge + punctualConsumption
                },
                withoutBatteriesCapacity() {
                    let sum = 0
                    if (this.junctions.length) {
                        Object.keys(this.junctions).forEach(element => {
                            if(!this.junctions[element].room_id || (this.junctions[element].room_id && this.junctions[element].room_id == this.room.id)) {
                                sum = sum + this.powerUsedA(this.junctions[element]) + this.powerUsedB(this.junctions[element]) + this.averageConsumptionPerPhotovoltaicGroup
                            }
                        })
                    }
                    return sum
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
                averageConsumptionPerPhotovoltaicGroup() {
                    return 0
                },

                // Available
                totalAvailableJunctionsCapacity() {
                    return this.totalJunctionsCapacity - this.totalUsedJunctionsCapacity
                },

                // withoutBatteriesDisponibility() {
                //     return this.totalJunctionsCapacity - this.withoutBatteriesCapacity
                // },

                // usagePercent() {
                //     return this.totalJunctionsCapacity != 0 ? this.totalUsedJunctionsCapacity / this.totalJunctionsCapacity : 0
                // },
            // #######################################################

            
            // ###################################### Generator Sets
                //Total
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
                totalGeneratorSetsCapacityA() {
                    let sum = 0; let res = 0; let div = 1; 
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            if(!this.generatorSets[element].room_id || (this.generatorSets[element].room_id && this.generatorSets[element].room_id == this.room.id)) {

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
                            }
                        })
                    }
                    return sum - (res / div)
                },
                totalGeneratorSetsCapacityB() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            if(!this.generatorSets[element].room_id || (this.generatorSets[element].room_id && this.generatorSets[element].room_id == this.room.id)) {
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
                            }
                        })
                    }
                    return sum
                },
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

                // Used
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
                usedGeneratorSetsCapacityA() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            if(!this.generatorSets[element].room_id || (this.generatorSets[element].room_id && this.generatorSets[element].room_id == this.room.id)) {
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
                            }
                        })
                    }
                    return sum
                },
                usedGeneratorSetsCapacityB() {
                    let sum = 0
                    if (this.generatorSets.length) {
                        Object.keys(this.generatorSets).forEach(element => {
                            if(!this.generatorSets[element].room_id || (this.generatorSets[element].room_id && this.generatorSets[element].room_id == this.room.id)) {
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
                            }
                        })
                    }
                    return sum
                },

                // Available
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
                availableGeneratorSetsCapacityA() {
                    return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA
                },
                availableGeneratorSetsCapacityB() {
                    return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB
                },
            // #######################################################
            
    
            // ###################################### Power Rectifiers
                // Total
                totalCapacityRoom() {
                    let realRoomCapacity = 0
                    Object.keys(this.planes).forEach(element => {
                        let plane = this.planes[element]
                        realRoomCapacity += this.realPlaneCapacity(plane)
                    })
                    // this.totalPRCapacity = realRoomCapacity
                    return realRoomCapacity
                },

                // Used
                usedCapacityRoom() {
                    let usedRoomCapacity = 0
                    Object.keys(this.planes).forEach(element => {
                        let plane = this.planes[element]
                        usedRoomCapacity += this.totalPower(plane)
                    })
                    // this.usedPRCapacity = usedRoomCapacity
                    return usedRoomCapacity
                },
            // #######################################################


            // ############################################# Batteries
                popAutonomy() {
                    return this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
                },
            // #######################################################


            // ###################################### Air Conditioners
                totalClimateCapacity() {
                    return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.total_capacity : 0
                },
                usedClimateCapacity() {
                    return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.used_capacity : 0
                },
                totalAvailableClimateCapacity() {
                    return this.totalClimateCapacity - this.usedClimateCapacity
                },
            // #######################################################


            // ########################################## Distribution
                totalDistributionCapacity() {
                    return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0
                },

                usedDistributionCapacity() {
                    return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0
                },

                availableDistributionCapacity() {
                    return this.totalDistributionCapacity - this.usedDistributionCapacity
                },
            // #######################################################


            // ############################################### Surface
                totalSurface() {
                    return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0
                },

                usedSurface() {
                    return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0
                },

                availableSurface() {
                    return this.totalSurface - this.usedSurface
                },
            // #######################################################



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


            // detectionType() {
            //     return this.room.fire_detections ? this.room.fire_detections[0].fire_detection_type.type : 'No tiene'
            // },

            // extinctionType() {
            //     return this.room.fire_detections && this.room.fire_detections[0].fire_extinction_type ? this.room.fire_detections[0].fire_extinction_type.type : 'No tiene'
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

            thresholds() {
                return {
                    'junctions': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'generatorSets': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'powerRectifiers': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'batteries': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'climate': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'disponibility': {
                        'critical': 0.1,
                        'warning': 0.2
                    },
                    'surface': {
                        'critical': 0.1,
                        'warning': 0.2
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

            conditionsToRecord() {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let currentCapacities = []
                if (this.room.current_room_capacity) {
                    currentCapacities = [
                        Math.round(this.room.current_room_capacity.battery_autonomy,3),
                        Math.round(this.room.current_room_capacity.junction_total,3),
                        Math.round(this.room.current_room_capacity.junction_used,3),
                        Math.round(this.room.current_room_capacity.junction_available,3),
                        Math.round(this.room.current_room_capacity.generator_set_total,3),
                        Math.round(this.room.current_room_capacity.generator_set_used,3),
                        Math.round(this.room.current_room_capacity.generator_set_available,3),
                        Math.round(this.room.current_room_capacity.power_rectifier_total,3),
                        Math.round(this.room.current_room_capacity.power_rectifier_used,3),
                        Math.round(this.room.current_room_capacity.power_rectifier_available,3),
                        Math.round(this.room.current_room_capacity.battery_total,3),
                        Math.round(this.room.current_room_capacity.battery_used,3),
                        Math.round(this.room.current_room_capacity.battery_available,3),
                        Math.round(this.room.current_room_capacity.distribution_total,3),
                        Math.round(this.room.current_room_capacity.distribution_used,3),
                        Math.round(this.room.current_room_capacity.distribution_available,3),
                        Math.round(this.room.current_room_capacity.climate_total,3),
                        Math.round(this.room.current_room_capacity.climate_used,3),
                        Math.round(this.room.current_room_capacity.climate_available,3),
                        Math.round(this.room.current_room_capacity.surface_total,3),
                        Math.round(this.room.current_room_capacity.surface_used,3),
                        Math.round(this.room.current_room_capacity.surface_available,3)
                    ]
                }

                const newCapacities = [
                    Math.round(this.pop.current_battery_bank_autonomy && this.pop.current_battery_bank_autonomy.theoretical, 3),
                    Math.round(this.totalJunctionsCapacity,3),
                    Math.round(this.totalUsedJunctionsCapacity,3),
                    Math.round(this.totalAvailableJunctionsCapacity,3),
                    Math.round(this.totalGeneratorSetsCapacity,3),
                    Math.round(this.totalGeneratorSetsUsedCapacity,3),
                    Math.round(this.totalAvailableGeneratorSetsCapacity,3),
                    Math.round(this.totalCapacityRoom,3),
                    Math.round(this.usedCapacityRoom,3),
                    Math.round(this.availableCapacityRoom(this.room),3),
                    Math.round(this.totalCapacityBatteries(this.room),3),
                    Math.round(this.usedCapacityBatteries(this.room),3),
                    Math.round(this.availableCapacityBatteries(this.room),3),
                    Math.round(this.totalClimateCapacity,3),
                    Math.round(this.usedClimateCapacity,3),
                    Math.round(this.totalAvailableClimateCapacity,3),
                    Math.round(this.totalDistributionCapacity,3),
                    Math.round(this.usedDistributionCapacity,3),
                    Math.round(this.availableDistributionCapacity,3),
                    Math.round(this.totalSurface,3),
                    Math.round(this.usedSurface,3),
                    Math.round(this.availableSurface,3)
                ]
                const sumCurrentCapacities = currentCapacities.length ? currentCapacities.reduce(reducer) : 0
                const sumNewCapacities = newCapacities.reduce(reducer)

                console.log(this.room.current_room_capacity)

                if (!this.room.current_room_capacity || (this.room.current_room_capacity && (sumCurrentCapacities != sumNewCapacities))) {
                    return true
                }
                return false
            }
        },

        methods: {
            // Getters
            getRoomData() {
                axios.get(`/api/rooms/${this.$route.params.id}`)
                .then(response => {
                    // console.log(response.data)
                    this.room = response.data.room
                    this.planeTypeId = this.room.current_room_delegation ? this.room.current_room_delegation.plane_delegation_type_id : null

                    this.getJunctions()
                    this.getGeneratorSets()
                    this.getPlanes()
                    this.getPlaneTypes()
                    this.getAirConditioners()

                    this.record ? this.recordCapacities() : this.record = true
                })
            },
            getJunctions() {
                axios.get(`/api/popJunctions/${this.pop.id}`)
                .then((response) => {
                    // console.log(response.data)
                    this.junctions = response.data.junctions
                    this.canEditJunctions = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },
            getGeneratorSets() {
                axios.get(`/api/generatorSets/${this.pop.id}`)
                .then((response) => {
                    this.generatorSets = response.data.generatorSets
                    this.canEditGeneratorSets = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            getPlanes() {
                axios.get(`/api/roomPlanes/${this.room.id}?plane_delegation_type_id=${this.planeTypeId}`)
                .then((response) => {
                    this.planes = response.data.planes
                    this.canEditPowerRectifiers = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },
            getPlaneTypes() {
                axios.get(`/api/planeTypes`).then(response => {
                    this.planeTypes = response.data.planes
                    this.canEditPlaneTypes = response.data.can.update
                })
            },
            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}`)
                .then((response) => {
                    this.airConditioners = response.data.airConditioner
                    this.canEditAirConditioners = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            }, 

            recordCapacities() {
                if (this.conditionsToRecord) {
                    let params = {
                        'room_id': this.room.id,
                        'battery_autonomy': this.pop.current_battery_bank_autonomy && this.pop.current_battery_bank_autonomy.theoretical,
                        'junction_total': this.totalJunctionsCapacity,
                        'junction_used': this.totalUsedJunctionsCapacity,
                        'junction_available': this.totalAvailableJunctionsCapacity,
                        'generator_set_total': this.totalGeneratorSetsCapacity,
                        'generator_set_used': this.totalGeneratorSetsUsedCapacity,
                        'generator_set_available': this.totalAvailableGeneratorSetsCapacity,
                        'power_rectifier_total': this.totalCapacityRoom,
                        'power_rectifier_used': this.usedCapacityRoom,
                        'power_rectifier_available': this.availableCapacityRoom(this.room),
                        'battery_total': this.totalCapacityBatteries(this.room),
                        'battery_used': this.usedCapacityBatteries(this.room),
                        'battery_available': this.availableCapacityBatteries(this.room),
                        'climate_total': this.totalClimateCapacity,
                        'climate_used': this.usedClimateCapacity,
                        'climate_available': this.totalAvailableClimateCapacity,
                        'distribution_total': this.totalDistributionCapacity,
                        'distribution_used': this.usedDistributionCapacity,
                        'distribution_available': this.availableDistributionCapacity,
                        'surface_total': this.totalSurface,
                        'surface_used': this.usedSurface,
                        'surface_available': this.availableSurface,
                    }
                    axios.post('/api/roomCapacities', params)
                    .then(response => {
                        // console.log(response.data)
                    })
                }
            },

            // ########################################### Junctions
                // Total
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
                photovoltaicCapacity(junction) {
                    let capacity = 0
                    if (junction.solar_panels.length) {
                        Object.keys(junction.solar_panels).forEach(element => {
                            let panel = junction.solar_panels[element]
                            capacity = capacity + (panel.unit_capacity * panel.quantity)
                        })
                    }
                    return capacity / 1000
                },

                // Used
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
            // #####################################################


            // ###################################### Generator Sets
                // No hay funciones
            // #####################################################
            

            // #################################### Power Rectifiers
                realPlaneCapacity(plane) {
                    let currentRedundantModules = plane.current_redundant_modules
                    let currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0
                    return this.installedCapacity(plane) - currentRedundantModulesCapacity
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
                totalPower(plane) {
                    return this.chargeRealPower(plane) + this.batteryRechargePower(plane)
                },

                //Available
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
                availablePlaneCapacity(plane) {
                    return this.realPlaneCapacity(plane) - this.totalPower(plane)
                },
            // #####################################################


            // ########################################### Batteries
                // Total
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
                    // this.totalBatteryCapacity = total
                    return total
                },

                // Used
                usedCapacityBatteries(room) {
                    let used = 0
                    if (room.planes) {
                        Object.keys(room.planes).forEach(element => {
                            let plane = room.planes[element]
                            used += this.chargeRealPower(plane)
                        })
                    }
                    // this.usedBatteryCapacity = used
                    return used
                },
                chargeRealPower(plane) {
                    return plane.float_tension * plane.current / 1000
                },

                // Available
                availableCapacityBatteries(room) {
                    const original = 10000000
                    let available = original
                    let availableA = original
                    let availableB = original
                    if (room.planes && room.current_room_delegation) {
                        // Object.keys(room.planes).forEach(element => {
                        //     let plane = room.planes[element]
                        //     if(available > this.availableBatteryCapacityPlane(plane)) {
                        //         available = this.availableBatteryCapacityPlane(plane)
                        //     }
                        // })
                        Object.keys(room.planes).forEach(item => {
                            let plane = room.planes[item]
                            
                            switch(room.current_room_delegation.plane_delegation_type_id) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                    available = this.availableBatteryCapacityPlane(plane)
                                    break
                                case 5:
                                case 6:
                                case 20:
                                case 21:
                                case 22:
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
                                case 30:
                                default:
                                    break
                            }
                        })
                    

                        switch(room.current_room_delegation.plane_delegation_type_id) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                                available = available
                                break
                            case 5:
                            case 6:
                            case 7:
                            case 20:
                            case 21:
                            case 22:
                                available = available * 2
                                break
                            case 30:
                            default:
                                break
                        }
                    }

                    let total = available < 10000000 ? available : 0
                    this.availableBatteryCapacity = total
                    return total
                },
                availableBatteryCapacityPlane(plane) {
                    return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane)
                }, 
                batteryTotalCapacityPlane(plane) {
                    let capacity = 0
                    Object.keys(plane.battery_banks).forEach(item => {
                        capacity += plane.battery_banks[item].capacity
                    })
                    return (((capacity * 48) / 1000) / this.popAutonomy)
                },
            // #####################################################
            


            

            // powerRectifierBelongsToPlane(powerRectifier, plane) {
            //     let bool = false
            //     // if (plane.power_rectifiers) {
            //         Object.keys(plane.power_rectifiers).forEach(element => {
            //             let pr = plane.power_rectifiers[element]
            //             bool = pr.id == powerRectifier.id && !bool ? true : bool
            //         })
            //     // }
            //     return bool
            // },

            

            

            // nominalCapacity(plane) {
            //     let capacity = 0
            //     Object.keys(plane.power_rectifiers).forEach(element => {
            //         capacity += plane.power_rectifiers[element].capacity
            //     })
            //     return capacity
            // },

        

            // totalCurrent(plane) {
            //     return plane.current + this.rechargeCurrent(plane)
            // },


            // usePercentPlane(plane) {
            //     return this.totalPower(plane) / this.realPlaneCapacity(plane)
            // },


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

            powerRectifiersInRoom(room) {
                let powerRectifiersInRoom = 0
                if (room.planes) {
                    Object.keys(room.planes).forEach(element => {
                        let plane = room.planes[element]
                        powerRectifiersInRoom += plane.power_rectifiers.length                        
                    })
                }
                return powerRectifiersInRoom
            },

            batteryBanksInRoom(room) {
                let batteryBanks = 0
                if (room.planes) {
                    Object.keys(room.planes).forEach(element => {
                        let plane = room.planes[element]
                        batteryBanks += plane.battery_banks.length                        
                    })
                }
                return batteryBanks
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
            this.$eventBus.$off('room-security');
            this.$eventBus.$off('change-room');
            this.$eventBus.$off('new-power-rectifier')
            this.$eventBus.$off('new-junction')
            this.$eventBus.$off('power-rectifier-updated')
            this.$eventBus.$off('new-plane-updated')
            this.$eventBus.$off('new-battery-bank')
            this.$eventBus.$off('new-generator-set')
            this.$eventBus.$off('new-room')
            this.$eventBus.$off('air-conditioner-capacity');
            this.$eventBus.$off('new-solar-panel')
            this.$eventBus.$off('battery-autonomy')
            this.$eventBus.$off('battery-bank-deleted')
            this.$eventBus.$off('generator-set-deleted')
        }
    }
</script>
