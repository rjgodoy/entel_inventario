<template>
    <div class="tile">
        <section class="tile" style="padding: 24px;">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile box">
                        <div class="tile columns">

                            <div class="tile column has-background-dark has-text-weight-bold has-text-white">
                                <div class="tile is-child">
                                    <div class="title has-text-weight-bold is-size-6 has-text-white">EMPALMES</div>
                                    <div>
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ responsable.area }}</div>
                                        <div class="has-text-weight-normal is-size-6">Responsable</div>
                                    </div>
                                    <div>
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalCapacity | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                    </div>
                                    <div>
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalUsedCapacity | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Capacidad Total utilizado</div>
                                    </div>
                                    <div>
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalDisponibility | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Capacidad Total disponible</div>
                                    </div>
                                </div>
                            </div>

                            <div class="column tile">
                                <div class="columns tile is-parent">
                                    <a class="box tile is-child column" 
                                        v-for="junction in junctions" :key="junction.id"
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
            </div>
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
    </div>
</template>

<script>
    export default {
        components: {
            ModalJunction: () => import(/* webpackChunkName: "chunks/pop/layout/modals/junction"*/'../../pop/layout/modals/ModalJunction'),
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
                Object.keys(this.pop.rooms).forEach(element => {
                    let room = this.pop.rooms[element]
                    if(room.power_rectifiers.length) {
                        Object.keys(room.planes).forEach(item => {
                            let roomPlane = room.planes[item]
                            total += this.batteryRechargePower(roomPlane)
                        })
                    }
                })
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
                // console.log(val)
            }
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

        }
    }
</script>
