<template>
    <section class="">
        <div class="">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout</div>
        </div>

        <div class="tile is-ancestor" style="padding-top: 24px;">

            <div class="tile is-vertical">

                <div class="tile">
                    <div class="tile is-parent is-4">
                        <div class="tile box is-child">

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
                        />
                    </div>
                    <div class="tile" v-if="generatorSets.length">
                        <GeneratorSets 
                            :pop="pop"
                            :generatorSets="generatorSets"
                            :can="canEditGeneratorGroups"
                            :user="user"
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
            'room'
        ],

        data() {
            return {
                junctions: Object,
                generatorSets: Object,

                canEditJunctions: null,
                canEditGeneratorGroups: null,

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
                this.getJunctions()
                this.getGeneratorSets()
                this.newTheoreticalAutonomy = this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
            }
        },

        created() {
            this.$eventBus.$on('junction-measurements-updated', this.getJunctions)
            this.$eventBus.$on('generator-set-capacities-updated', this.getGeneratorSets)
            this.$eventBus.$on('new-solar-panel', this.getJunctions)
        },

        mounted() {
            this.getJunctions()
            this.getGeneratorSets()
        },

        methods: {
            getJunctions() {
                if(this.pop) {
                    axios.get(`/api/popJunctions/${this.pop.id}`)
                    .then((response) => {
                        this.junctions = response.data.junctions
                        this.canEditJunctions = response.data.can
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Empalmes: ' + error);
                    });
                }
            },

            getGeneratorSets() {
                if(this.pop) {
                    axios.get(`/api/generatorSets/${this.pop.id}`)
                    .then((response) => {
                        this.generatorSets = response.data.generatorSets
                        this.canEditGeneratorGroups = response.data.can
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                    });
                }
            },

            updateAutonomy() {
                if(!this.isEditMode && this.pop && this.pop.current_battery_bank_autonomy && this.newTheoreticalAutonomy != this.pop.current_battery_bank_autonomy.theoretical) {
                    let params = {
                        'pop_id': this.pop.id,
                        'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
                    }
                    axios.post(`/api/batteryBankAutonomies`, params)
                    .then(response => {
                        console.log(response.data)
                    })
                }
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('junction-measurements-updated')
            this.$eventBus.$off('generator-set-capacities-updated')
            this.$eventBus.$off('new-solar-panel')
        }
    }
</script>
