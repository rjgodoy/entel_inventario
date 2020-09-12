<template>
    <section class="">
        <div class="">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout</div>
        </div>

        <div class="tile is-ancestor" style="padding-top: 24px;">

            <div class="tile is-vertical">

                <div class="tile">
                    <div class="tile is-parent is-4">
                        <div class="tile box is-child has-background">
                            <div class="is-box-background is-transparent-light" style="margin-top: -20px">
                                <font-awesome-icon :icon="['fas', 'car-battery']" size="10x" class="is-pulled-right" style=""/>
                            </div>

                            <div class="columns">
                                <div class="column is-10">
                                    <div class="is-size-6 has-text-weight-bold">AUTONOMIA DE BATERÍAS DEL POP</div>
                                </div>
                                <div class="column" v-if="canEditJunctions">
                                    <button class="button is-small is-pulled-right" :class="isEditMode ? 'is-success' : 'is-default'"
                                        @click="isEditMode = !isEditMode; updateAutonomy()">
                                        <font-awesome-icon :icon="isEditMode ? ['fas', 'check'] : ['fas', 'pencil-alt']" />
                                    </button>
                                </div>
                            </div>

                            <div v-if="!isEditMode" class="is-size-4 has-text-weight-semibold">{{ newTheoreticalAutonomy }} <span class="is-size-5">hrs</span></div>
                            <b-input v-if="isEditMode" v-model="newTheoreticalAutonomy"></b-input>
                        </div>
                    </div>
                </div>

                <div class="tile">
                    <div class="tile is-4">
                        <Junctions 
                            :pop="pop"
                            :junctions="junctions"
                            :can="canEditJunctions"
                            :user="user"
                            :totalJunctionsCapacity=totalJunctionsCapacity
                            :totalUsedJunctionsCapacity=totalUsedJunctionsCapacity
                            :totalAvailableJunctionsCapacity=totalAvailableJunctionsCapacity
                        />
                    </div>
                    <div class="tile" v-if="generatorSets.length">
                        <GeneratorSets 
                            :pop="pop"
                            :generatorSets="generatorSets"
                            :can="canEditGeneratorSets"
                            :user="user"
                            :totalGeneratorSetsCapacity=totalGeneratorSetsCapacity
                            :totalGeneratorSetsUsedCapacity=totalGeneratorSetsUsedCapacity
                            :totalAvailableGeneratorSetsCapacity=totalAvailableGeneratorSetsCapacity
                            :totalGeneratorSetsCapacityA=totalGeneratorSetsCapacityA
                            :totalGeneratorSetsCapacityB=totalGeneratorSetsCapacityB
                            :usedGeneratorSetsCapacityA=usedGeneratorSetsCapacityA
                            :usedGeneratorSetsCapacityB=usedGeneratorSetsCapacityB
                            :availableGeneratorSetsCapacityA=availableGeneratorSetsCapacityA
                            :availableGeneratorSetsCapacityB=availableGeneratorSetsCapacityB
                        />
                    </div>
                    <div class="tile is-3">
                        <SolarPanels 
                            :pop="pop"
                            :junctions="junctions"
                            :can="canEditJunctions"
                            :user="user"
                        />
                    </div>
                </div>

                <div class="tile">
                    <div class="tile is-parent">
                        <Equipment 
                            :pop="pop"
                            :room="room"
                            :user="user"
                            :planes=planes
                            :planeTypes=planeTypes
                            :airConditioners=airConditioners
                            :canEditPowerRectifiers=canEditPowerRectifiers
                            :canEditAirConditioners=canEditAirConditioners
                            :canEditSurface=canEditSurface
                            :canEditDistribution=canEditDistribution

                            :totalSurface=totalSurface
                            :usedSurface=usedSurface
                            :availableSurface=availableSurface

                            :totalDistributionCapacity=totalDistributionCapacity
                            :usedDistributionCapacity=usedDistributionCapacity
                            :availableDistributionCapacity=availableDistributionCapacity
                        />
                    </div>
                </div>
            </div>
        </div>

    </section>
        
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRandom, faMicrochip, faChargingStation, faGasPump, faEdit, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faRandom, faMicrochip, faChargingStation, faGasPump, faEdit, farCheckCircle, faExclamationTriangle);
    // import LeaderLine from 'leader-line'
    export default {
        components: {
            Junctions: () => import(/* webpackChunkName: "chunks/capacity/blocks/junction"*/'../blocks/Junctions'),
            GeneratorSets: () => import(/* webpackChunkName: "chunks/capacity/blocks/generator"*/'../blocks/GeneratorSets'),
            SolarPanels: () => import(/* webpackChunkName: "chunks/capacity/blocks/solarPanels"*/'../blocks/SolarPanels'),
            Equipment: () => import(/* webpackChunkName: "chunks/capacity/blocks/equipment"*/'../blocks/Equipment'),
        },

        props : [
            'user',
            'room',
            'junctions',
            'generatorSets',
            'planes',
            'planeTypes',
            'airConditioners',
            'canEditJunctions',
            'canEditGeneratorSets',
            'canEditPowerRectifiers',
            'canEditAirConditioners',
            'canEditSurface',
            'canEditDistribution',

            'totalJunctionsCapacity',
            'totalUsedJunctionsCapacity',
            'totalAvailableJunctionsCapacity',

            'totalGeneratorSetsCapacity',
            'totalGeneratorSetsUsedCapacity',
            'totalAvailableGeneratorSetsCapacity',
            'totalGeneratorSetsCapacityA',
            'totalGeneratorSetsCapacityB',
            'usedGeneratorSetsCapacityA',
            'usedGeneratorSetsCapacityB',
            'availableGeneratorSetsCapacityA',
            'availableGeneratorSetsCapacityB',

            'totalSurface',
            'usedSurface',
            'availableSurface',

            'totalDistributionCapacity',
            'usedDistributionCapacity',
            'availableDistributionCapacity',
        ],

        data() {
            return {
                isEditMode: false,
                newTheoreticalAutonomy: this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
            }
        },

        computed: {
            pop() {
                return this.room && this.room.pop
            }
        },

        watch: {
            room(val) {
                this.newTheoreticalAutonomy = this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
            }
        },

        methods: {
            updateAutonomy() {
                if(!this.isEditMode && this.pop && this.pop.current_battery_bank_autonomy && this.newTheoreticalAutonomy != this.pop.current_battery_bank_autonomy.theoretical) {
                    let params = {
                        'pop_id': this.pop.id,
                        'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
                    }
                    axios.post(`/api/batteryBankAutonomies`, params)
                    .then(response => {
                        this.$eventBus.$emit('battery-autonomy')
                        // console.log(response.data)
                    })
                }
            }
        },
    }
</script>
