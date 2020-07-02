<template>
    <div class="tile is-child box" :class="isRoomSelected ? 'is-shadowless has-background-white-bis shadow-dark' : ''"
        :style="isRoomSelected ? '' : 'border: solid 0.5px black;'">
        <div class="tile is-vertical">

            <div class="block">
                <router-link class="is-size-5" :to="'/capacity/'+sala.id" @click.native="reload"
                    :class="room.id && sala.id != room.id ? 'has-text-grey-light has-text-weight-light' : 'has-text-weight-bold'">
                    {{ sala.name }} - {{ sala.old_name }}
                </router-link>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <b-field label="PLANTAS RECTIFICADORAS" label-position="on-border" class="tile" 
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div class="tile is-vertical box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile" v-if="hasPlanes(sala)">
                                <div class="tile is-parent"
                                    v-for="plane in planes" 
                                    v-if="plane.room_id == sala.id" 
                                    :key="plane.id">
                                    <b-field :label="'PLANO '+ plane.plane_type.type" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                            <div class="tile is-vertical">
                                                <div class="tile is-parent" 
                                                    v-if="hasPowerRectifiers(plane)"
                                                    v-for="powerRectifier in plane.power_rectifiers" 
                                                    :key="powerRectifier.id" 
                                                    @click="isPowerRectifierModalActive = true; powerRectifierSelected = powerRectifier">
                                                    <a class="box tile is-child">
                                                        <div class="field">
                                                            <div class="has-text-weight-bold is-size-6">PLANTA Nº {{ powerRectifier.id }}</div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="tile is-parent">
                                                    <div class="box tile is-child">
                                                        <div class="is-size-7">Capacidad nominal: {{ nominalCapacity(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Capacidad instalada: {{ installedCapacity(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Potencia real de carga: {{ chargeRealPower(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Corriente recarga: {{ rechargeCurrent(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Potencia recarga baterías: {{ batteryRechargePower(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Corriente total carga + baterías: {{ totalCurrent(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Potencia total carga + baterías: {{ totalPower(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Capacidad real: {{ realPlaneCapacity(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Capacidad disponible: {{ availablePlaneCapacity(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Porcentaje Uso: {{ usePercentPlane(plane) * 100 | numeral('0,0.0') }}</div>

                                                        <div class="is-size-7">Capacidad baterias: {{ batteryTotalCapacityPlane(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Utilizado baterias: {{ chargeRealPower(plane) | numeral('0,0.0') }}</div>
                                                        <div class="is-size-7">Disponible baterias: {{ availableBatteryCapacityPlane(plane) | numeral('0,0.0') }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-field>
                                </div> 
                            </div>

                            <div class="tile" v-if="hasPlanes(sala)">
                                <div class="tile is-parent">
                                    <b-field label="CAPACIDAD SALA" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">

                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                            <div class="tile is-vertical">
                                                <div class="is-size-7">Capacidad total sala: {{ totalCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                <div class="is-size-7">Capacidad usada sala: {{ usedCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                <div class="is-size-7">Capacidad disponible sala: {{ availableCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                <div class="is-size-7">Capacidad total baterías: {{ totalCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                                <div class="is-size-7">Capacidad total baterías: {{ usedCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                                <div class="is-size-7">Capacidad total baterías: {{ availableCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                            </div>
                                        </div>

                                    </b-field>
                                </div>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!hasPlanes(sala)">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE PLANTAS RECTIFICADORAS
                                    </div>
                                </div>
                            </div>

                        </div>
                    </b-field>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <b-field label="CLIMATIZACION" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile is-vertical" v-if="hasAirConditioners(sala)">
                                <a class="tile is-child box" 
                                    v-for="airConditioner in airConditioners" 
                                    v-if="airConditioner.room_id == sala.id" 
                                    :key="airConditioner.id" 
                                    @click="isAirConditionerModalActive = true; airConditionerSelected = airConditioner">
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">AIRE ACONDICIONADO Nº {{ airConditioner.id }}</div>
                                    </div>
                                </a>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!hasAirConditioners(sala)">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE EQUIPOS DE CLIMA
                                    </div>
                                </div>
                            </div>

                        </div>
                    </b-field>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent is-8">
                    <b-field label="ESPACIO" label-position="on-border" class="tile" 
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div v-if="!canEditSurface" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile is-vertical" v-if="sala.current_room_surface">
                                <div class="tile box is-child has-text-centered">
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">SUPERFICIE</div>
                                    </div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Usada</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!sala.current_room_surface">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE ESPACIO
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a v-if="canEditSurface" 
                            @click="isSurfaceModalActive = true"
                            class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-vertical" v-if="sala.current_room_surface">
                                <div class="tile box is-child has-text-centered">
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">SUPERFICIE</div>
                                    </div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Usada</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableSurface }} <span class="is-size-7">m2</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile columns is-vcentered" v-if="!sala.current_room_surface">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE ESPACIO
                                    </div>
                                </div>
                            </div>
                        </a>
                    </b-field>
                </div>

                <div class="tile is-parent">
                    <b-field label="SEGURIDAD" label-position="on-border" class="tile"
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile is-vertical" v-if="sala.fire_detections.length">
                                <div class="tile box is-child has-text-right">
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">INCENDIO</div>
                                    </div>
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Detección</div>
                                    </div>
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">{{ extintionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Extinción</div>
                                    </div>
                                </div>

                                <!-- <div class="tile box is-child has-text-right">
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">VIGILANCIA</div>
                                    </div>
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Cámara</div>
                                    </div>
                                    <div class="field">
                                        <div class="has-text-weight-bold is-size-6">{{ extintionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Gestión Remota</div>
                                    </div>
                                </div> -->
                            </div>

                            <div class="tile columns is-vcentered" v-if="!sala.fire_detections.length">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE EQUIPOS DE SEGURIDAD
                                    </div>
                                </div>
                            </div>

                        </div>
                    </b-field>
                </div>
            </div>

            <div class="tile is-ancestor" v-if="sala.current_room_distribution">
                <div class="tile is-parent">

                    <b-field label="DISTRIBUCION" label-position="on-border" class="tile"
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div v-if="!canEditDistribution" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-vertical" v-if="true">
                                <div class="tile box is-child has-text-right">
                                    <div class="level">
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Usada</div>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a v-if="canEditDistribution" 
                            @click="isDistributionModalActive = true"
                            class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-vertical" v-if="true">
                                <div class="tile box is-child has-text-right">
                                    <div class="level">
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Usada</div>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableCapacity }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </b-field>

                </div>
            </div>
                
            <!-- <div class="is-divider" data-content="ESPACIO"></div> -->
            <!-- <space-chart/> -->
            
        </div>

        <b-modal :active.sync="isPowerRectifierModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-power-rectifier 
                :powerRectifier="powerRectifierSelected"
                :can="canEditPowerRectifiers"
                :user="user"
                />
        </b-modal>

        <!-- <b-modal :active.sync="isAirConditionerModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-air-conditioner 
                :airConditioner="airConditionerSelected"
                :can="canEditAirConditioners"
                :user="user"
                />
        </b-modal> -->

        <b-modal :active.sync="isDistributionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-distribution
                :sala="sala"
                :user="user"
                :canEdit="canEditDistribution"
                />
        </b-modal>

        <b-modal :active.sync="isSurfaceModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-surface
                :sala="sala"
                :user="user"
                :canEdit="canEditSurface"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalPowerRectifier: () => import(/* webpackChunkName: "chunks/pop/layout/modals/powerRectifier"*/'../../pop/layout/modals/ModalPowerRectifier'),
            ModalAirConditioner: () => import(/* webpackChunkName: "chunks/pop/layout/modals/airConditioner"*/'../../pop/layout/modals/ModalAirConditioner'),
            ModalDistribution: () => import(/* webpackChunkName: "chunks/pop/layout/modals/distribution"*/'../../pop/layout/modals/ModalDistribution'),
            ModalSurface: () => import(/* webpackChunkName: "chunks/pop/layout/modals/surface"*/'../../pop/layout/modals/ModalSurface'),
        },

        props : [
            'room',
            'sala',
            'user',
            'pop'
        ],

        data() {
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
                availableBatteryCapacity: 0

            }
        },

        mounted() {
            console.log(this.sala)
            this.getAirConditioners()
            // this.getPowerRectifiers()
            this.getPlanes()
            this.$emit('room-distribution', this.distribution);
            this.$emit('room-surface', this.surface);
            this.$emit('power-rectifier-data', this.powerRectifierData);
            this.$emit('battery-data', this.batteryData);
        },

        computed: {
            isRoomSelected() {
                return this.room.id && this.sala.id != this.room.id
            },

            totalCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0
            },

            usedCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0
            },

            availableCapacity() {
                return this.totalCapacity - this.usedCapacity
            },

            distribution() {
                return {
                    'totalCapacity': this.totalCapacity,
                    'usedCapacity': this.usedCapacity
                }
            },

            surface() {
                return {
                    'totalSurface': this.totalSurface,
                    'usedSurface': this.usedSurface
                }
            },

            detectionType() {
                return this.sala.fire_detections ? this.sala.fire_detections[0].fire_detection_type.type : 'No tiene'
            },

            extintionType() {
                return this.sala.fire_detections && this.sala.fire_detections[0].fire_extintion_type ? this.sala.fire_detections[0].fire_extintion_type.type : 'No tiene'
            },

            canEditDistribution() {
                return this.canEditAirConditioners && this.canEditPowerRectifiers
            },

            canEditSurface() {
                return this.canEditAirConditioners && this.canEditPowerRectifiers
            },

            totalSurface() {
                return this.sala.current_room_surface ? this.sala.current_room_surface.total_surface : 0
            },

            usedSurface() {
                return this.sala.current_room_surface ? this.sala.current_room_surface.used_surface : 0
            },

            availableSurface() {
                return this.totalSurface - this.usedSurface
            },

            powerRectifierData() {
                return {
                    'totalPRCapacity': this.totalPRCapacity,
                    'usedPRCapacity': this.usedPRCapacity,
                    'availablePRCapacity': this.availablePRCapacity
                }
            },

            batteryData() {
                return {
                    'totalBatteryCapacity': this.totalBatteryCapacity,
                    'usedBatteryCapacity': this.usedBatteryCapacity,
                    'availableBatteryCapacity': this.availableBatteryCapacity
                }
            },

            popAutonomy() {
                return this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0
            },
            
        },

        watch: {
            room(val) {
                this.$emit('room-distribution', this.distribution);
                this.$emit('room-surface', this.surface);
                this.$emit('power-rectifier-data', this.powerRectifierData);
                this.$emit('battery-data', this.batteryData);
            },

            powerRectifierData(value) {
                this.$emit('power-rectifier-data', value);
            },

            batteryData(value) {
                this.$emit('battery-data', value);
            }
        },

        methods: {
            isCurrentSala(sala) {
                return sala.id == this.room.id
            },

            powerRectifiersInRoom(sala) {
                let powerRectifiersInRoom = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    powerRectifiersInRoom += plane.power_rectifiers.length                        
                })
                console.log(powerRectifiersInRoom)
                return powerRectifiersInRoom
            },

            hasPlanes(sala) {
                let bool = false
                if(this.planes) {
                    Object.keys(this.planes).forEach(element => {
                        bool = !bool ? this.planes[element].room_id == sala.id : bool
                    })
                }
                return bool
            },

            hasPowerRectifiers(plane) {
                let bool = false
                if(plane.power_rectifiers) {
                    Object.keys(plane.power_rectifiers).forEach(element => {
                        bool = !bool ? plane.power_rectifiers[element].plane_id == plane.id : bool
                    })
                }
                return bool
            },

            hasAirConditioners(sala) {
                let bool = false
                if(this.airConditioners) {
                    Object.keys(this.airConditioners).forEach(element => {
                        bool = !bool ? this.airConditioners[element].room_id == sala.id : bool
                    })
                }
                return bool
            },

            getPlanes() {
                axios.get(`/api/roomPlanes/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
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

            // Power Rectifiers
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



            totalCapacityRoom(sala) {
                let realRoomCapacity = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    realRoomCapacity += this.realPlaneCapacity(plane)
                })
                this.totalPRCapacity = realRoomCapacity
                return realRoomCapacity
            },

            usedCapacityRoom(sala) {
                let usedRoomCapacity = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    usedRoomCapacity += this.totalPower(plane)
                })
                this.usedPRCapacity = usedRoomCapacity
                return usedRoomCapacity
            },

            availableCapacityRoom(sala) {
                let availableRoomCapacity = 10000000
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    // if (plane.room_id == sala.id) {
                    if(availableRoomCapacity > this.availablePlaneCapacity(plane)) {
                        availableRoomCapacity = this.availablePlaneCapacity(plane)
                    }
                    // }
                })
                availableRoomCapacity = availableRoomCapacity < 10000000 ? availableRoomCapacity : 0
                this.availablePRCapacity = availableRoomCapacity
                return availableRoomCapacity
            },


            // Batteries
            totalCapacityBatteries(sala) {
                let capacity = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    Object.keys(plane.battery_banks).forEach(item => {
                        capacity += plane.battery_banks[item].capacity
                    })
                })
                let total = (((capacity * 48) / 1000) / this.popAutonomy)
                this.totalBatteryCapacity = total
                return total
            },

            usedCapacityBatteries(sala) {
                let used = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    used += this.chargeRealPower(plane)
                })
                this.usedBatteryCapacity = used
                return used
            },

            availableCapacityBatteries(sala) {
                let available = 10000000
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    if(available > this.availableBatteryCapacityPlane(plane)) {
                        available = this.availableBatteryCapacityPlane(plane)
                    }
                })
                let total = available * 2
                this.availableBatteryCapacity = total
                return total
            },

            reload() {
                console.log('reloaded')
                this.$eventBus.$emit('change-room')
            }    
        },

        beforeDestroy() {
            // this.$emit('room-distribution');
        }
    }
</script>
