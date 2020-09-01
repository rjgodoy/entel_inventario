<template>
    <div class="tile is-parent">
        <section class="tile box">
            <!-- <b-field label="EMPALMES" label-position="on-border" class="tile"> -->
                <!-- <div class="tile box is-shadowless" style="border: solid 0.05rem black"> -->
                <div class="tile is-vertical" v-if="junctions.length">
                    <div class="is-size-6 has-text-weight-bold" style="padding-bottom: 12px;">EMPALMES</div>

                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <b-field label="CAPACIDADES" label-position="on-border" class="tile">
                                <div class="tile box is-shadowless is-paddingless" style="border: solid 0.05rem black">

                                    <div class="tile">
                                        <div class="tile is-parent">
                                            <div class="has-text-centered tile is-child">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <div class="has-text-centered tile is-child">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalUsedCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Utilizado</div>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <div class="has-text-centered tile is-child">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalDisponibility | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </b-field>
                        </div>

                        <div class="tile is-parent">
                            <div class="columns tile">
                                <div class="column tile is-parent" v-for="junction in junctions" :key="junction.id">
                                    <a class="box tile is-child" 
                                        @click="isJunctionModalActive = true; junctionSelected = junction">
                                        <div class="">
                                            <div class="columns">
                                                <div class="column">
                                                    <div class="has-text-weight-semibold is-size-6">Empalme</div>
                                                </div>
                                                <div class="column is-2 has-text-centered">
                                                    <!-- <font-awesome-icon 
                                                        :icon="['far', 'check-circle']"
                                                        size="2x"
                                                        class="has-text-success"
                                                    /> -->
                                                </div>
                                            </div>   
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tile columns is-vcentered" v-if="!junctions.length">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            <div class="block">NO TIENE EMPALMES REGISTRADOS</div>
                            <b-tag class="is-default has-text-weight-light has-text-grey is-size-7">
                                <a @click="isNewJunctionModalActive = true">Agregar</a>
                            </b-tag>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            <!-- </b-field> -->
        </section>
        <b-modal :active.sync="isJunctionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-junction 
                :junction="junctionSelected"
                :can="can"
                :user="user"
                />
        </b-modal>
        <b-modal :active.sync="isNewJunctionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-junction 
                :user="user"
                :pop="pop"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalJunction: () => import(/* webpackChunkName: "chunks/pop/layout/modals/junction"*/'../../pop/layout/modals/ModalJunction'),
            ModalNewJunction: () => import(/* webpackChunkName: "chunks/pop/layout/modals/newJunction"*/'../../pop/layout/modals/ModalNewJunction'),
        },

        props : [
            'junctions',
            'can',
            'user',
            'pop'
        ],

        data() {
            return {
                junctionSelected: null,
                isJunctionModalActive: false,
                isNewJunctionModalActive: false
            }
        },

        computed: {
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

            totalCapacity(){
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
                return this.totalCapacity - this.withoutBatteriesCapacity
            },

            batteriesRecharge() {
                let total = 0
                if(this.pop.rooms && this.pop.rooms.length) {
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

            totalUsedCapacity() {
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

            totalDisponibility() {
                return this.totalCapacity - this.totalUsedCapacity
            },

            usagePercent() {
                return this.totalCapacity != 0 ? this.totalUsedCapacity / this.totalCapacity : 0
            }

        },

        watch: {
            junctions(val) {
                if (val.length) {
                    Object.keys(val).forEach(junction => {
                        if (this.junctionSelected && this.junctionSelected.id == val[junction].id) {
                            this.junctionSelected = val[junction]
                        }
                    }) 
                }               
            }
        },

        created() {
        },
        
        mounted() {
            // console.log(this.generatorSets)
            // this.getGeneratorSets()
        },

        methods: {
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

        },

        beforeDestroy() {
        }
    }
</script>
