<template>
    <div class="tile box" :class="room.id && sala.id != room.id ? 'is-shadowless has-background-white-bis' : ''">
        <div class="tile is-vertical">
            <router-link class="is-size-5 has-text-weight-normal" :to="'/capacity/'+sala.id" @click.native="reload"
                :class="room.id && sala.id != room.id ? 'has-text-grey-light' : ''">
                {{ sala.name }} - {{ sala.old_name }}
            </router-link>

            <div class="box" v-if="sala.current_room_distribution">
                <div>DISTRIBUCION</div>
                <div>
                    <div>Capacidad Total: {{ totalCapacity }}</div>
                    <div>Capacidad Usada: {{ usedCapacity }}</div>
                    <div>Capacidad Disponible: {{ availableCapacity }}</div>
                </div>
            </div>

            <div class="box" v-if="sala.current_room_distribution">
                <div>INCENDIO</div>
                <div>
                    <div>Tipo Detección: {{ detectionType }}</div>
                    <div>Tipo Extinción: {{ extintionType }}</div>
                </div>
            </div>

            <div class="section columns">
                <div class="column is-6">
                    <div class="columns is-multiline">
                        <div class="column is-12" v-for="powerRectifier in powerRectifiers" v-if="powerRectifier.room_id == sala.id" :key="powerRectifier.id">
                            <a class="tile is-child is-size-5 has-text-weight-normal"
                                @click="isPowerRectifierModalActive = true; powerRectifierSelected = powerRectifier">
                                <b-message type="is-success" class="box is-paddingless">
                                    <div class="columns">
                                        <div class="column">Planta Nº {{ powerRectifier.id }}</div>
                                        <div class="column is-2 has-text-centered">
                                            <font-awesome-icon 
                                                :icon="['far', 'check-circle']"
                                                size="2x"
                                                class="has-text-success"
                                            />
                                        </div>
                                    </div>   
                                </b-message>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column is-12" v-for="airConditioner in airConditioners" v-if="airConditioner.room_id == sala.id" :key="airConditioner.id">
                            <a class="tile is-child is-size-5 has-text-weight-semibold"
                                @click="isAirConditionerModalActive = true; airConditionerSelected = airConditioner">
                                <b-message type="is-success" class="box is-paddingless">
                                    <div class="columns">
                                        <div class="column has-text-weight-normal has-text-dark is-size-6">Aire Acondicionado</div>
                                        <div class="column is-2 has-text-centered">
                                            <font-awesome-icon 
                                                :icon="['far', 'check-circle']"
                                                size="2x"
                                                class="has-text-success"
                                            />
                                        </div>
                                    </div>                                            
                                </b-message>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                
            <!-- <div class="is-divider" data-content="ESPACIO"></div> -->
            <!-- <space-chart/> -->
            
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },

        props : [
            'room',
            'sala',
            'can',
            'user',
            'pop'
        ],

        data() {
            return {
                powerRectifiers: Array,
                airConditioners: Array,

                powerRectifierSelected: null,
                airConditionerSelected: null,

                canEditPowerRectifiers: null,
                canEditAirConditioners: null,

                isPowerRectifierModalActive: false,
                isAirConditionerModalActive: false,

            }
        },

        mounted() {
            this.getAirConditioners()
            this.getPowerRectifiers()
            this.$emit('room-distribution', this.capacity);
        },

        computed: {
            totalCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0
            },

            usedCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0
            },

            availableCapacity() {
                return this.totalCapacity - this.usedCapacity
            },

            capacity() {
                return {
                    'totalCapacity': this.totalCapacity,
                    'usedCapacity': this.usedCapacity,
                    'availableCapacity': this.availableCapacity
                }
            },

            detectionType() {
                return this.sala.fire_detections ? this.sala.fire_detections[0].fire_detection_type.type : 'No tiene'
            },

            extintionType() {
                return this.sala.fire_detections && this.sala.fire_detections[0].fire_extintion_type ? this.sala.fire_detections[0].fire_extintion_type.type : 'No tiene'
            }
        },

        watch: {
            room(val) {
            //     // console.log(val)
            },

            // maintainer_id(val) {
            //     this.maintainers.forEach(item => {
            //         if(item.id == val) {
            //             this.currentMaintainerName = item.name
            //         }
            //     }) 
            // },

            // responsable_area_id(val) {
            //     this.responsableAreas.forEach(item => {
            //         if(item.id == val) {
            //             this.currentResponsableArea = item.area
            //         }
            //     }) 
            // },

            // topology_id(val) {
            //     this.topologyTypes.forEach(item => {
            //         if(item.id == val) {
            //             this.currentTopologyType = item.type
            //         }
            //     }) 
            // },

            // level_id(val) {
            //     this.levelTypes.forEach(item => {
            //         if(item.id == val) {
            //             this.currentLevelType = item.type
            //         }
            //     }) 
            // }

        },

        methods: {
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
                    this.powerRectifiers = response.data.powerRectifiers
                    this.canEditPowerRectifiers = response.data.can
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

            // getMaintainers() {
            //     axios.get(`/api/telecomCompanies?api_token=${this.user.api_token}`).then(response => {
            //         // console.log(response.data.telecomCompanies)
            //         this.maintainers = response.data.telecomCompanies
            //         if(response.data.telecomCompanies) {
            //             this.maintainers.forEach(item => {
            //                 if(item.id == this.maintainer_id) {
            //                     this.currentMaintainerName = item.name
            //                 }
            //             }) 
            //         }
            //     })
            // },

            // getResponsableAreas() {
            //     axios.get(`/api/generatorSetResponsableAreas?api_token=${this.user.api_token}`).then(response => {
            //         // console.log(response.data.responsableAreas)
            //         this.responsableAreas = response.data.responsableAreas
                    
            //         if(response.data.responsableAreas) {
            //             this.responsableAreas.forEach(item => {
            //                 if(item.id == this.responsable_area_id) {
            //                     this.currentResponsableArea = item.area
            //                 }
            //             })
            //         } 
            //     })
            // },

            // getTopologyTypes() {
            //     axios.get(`/api/generatorSetTopologyTypes?api_token=${this.user.api_token}`).then(response => {
            //         // console.log(response.data.telecomCompanies)
            //         this.topologyTypes = response.data.topologyTypes
            //         if(response.data.topologyTypes) {
            //             this.topologyTypes.forEach(item => {
            //                 if(item.id == this.topology_id) {
            //                     this.currentTopologyType = item.type
            //                 }
            //             }) 
            //         }
            //     })
            // },

            // getLevelTypes() {
            //     axios.get(`/api/generatorSetLevelTypes?api_token=${this.user.api_token}`).then(response => {
            //         // console.log(response.data.telecomCompanies)
            //         this.levelTypes = response.data.levelTypes
            //         if(response.data.levelTypes) {
            //             this.levelTypes.forEach(item => {
            //                 if(item.id == this.level_id) {
            //                     this.currentLevelType = item.type
            //                 }
            //             }) 
            //         }
            //     })
            // },

            // saveChanges() {
            //     if (!this.isEditMode && 
            //         this.primeCapacity != this.newPrimeCapacity || 
            //         this.usedCapacity != this.newUsedCapacity || 
            //         this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id ||
            //         this.generatorSet.generator_set_topology_type_id != this.topology_id ||
            //         this.generatorSet.generator_set_level_type_id != this.level_id ||
            //         (this.currentGeneratorResponsableAreaId != this.responsable_area_id)) {

            //         let params = {
            //             'api_token': this.user.api_token,
            //             'user_id': this.user.id,
            //             'generator_set_id': this.generatorSet.id,
            //             'prime_capacity': this.newPrimeCapacity,
            //             'used_capacity': this.newUsedCapacity,
            //             'maintainer_id': this.maintainer_id,
            //             'generator_set_responsable_area_id': this.responsable_area_id,
            //             'generator_set_topology_type_id': this.topology_id,
            //             'generator_set_level_type_id': this.level_id
            //         }
            //         console.log(params)
            //         axios.put(`/api/generatorSets/${this.generatorSet.id}`, params).then(response => {
            //             console.log(response.data)
            //             this.$eventBus.$emit('generator-set-capacities-updated');
            //         })
            //     }
            // } 

            reload() {
                console.log('reloaded')
                this.$eventBus.$emit('change-room')
            }      
        }
    }
</script>
