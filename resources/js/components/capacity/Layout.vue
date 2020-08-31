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
                            <a @click="isEditMode = !isEditMode; updateAutonomy()" v-if="canEditJunctions" class="is-pulled-right">
                                <b-tag :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small">
                                    {{ isEditMode ? 'Guardar' : 'Editar' }}
                                </b-tag>
                            </a>
                            <div class="is-size-6 has-text-weight-bold" style="padding-bottom: 12px;">AUTONOMIA DEL POP</div>
                            <div v-if="!isEditMode" class="is-size-5 has-text-weight-semibold">{{ newTheoreticalAutonomy }} <span class="is-size-6">hrs</span></div>
                            <b-input v-if="isEditMode" size="is-small" v-model="newTheoreticalAutonomy"></b-input>
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
                    <div class="tile">
                        <MiniRooms 
                            :pop="pop"
                            :room="room"
                            :salas="salas"
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
            Junctions: () => import(/* webpackChunkName: "chunks/capacity/blocks/junction"*/'../capacity/blocks/Junctions'),
            GeneratorSets: () => import(/* webpackChunkName: "chunks/capacity/blocks/generator"*/'../capacity/blocks/GeneratorSets'),
            SolarPanels: () => import(/* webpackChunkName: "chunks/capacity/blocks/solarPanels"*/'../capacity/blocks/SolarPanels'),
            MiniRooms: () => import(/* webpackChunkName: "chunks/capacity/blocks/room"*/'../capacity/blocks/Rooms'),
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
                newTheoreticalAutonomy: this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0

            }
        },

        computed: {
            pop() {
                return this.room && this.room.pop
            },

            salas() {
                return this.pop && this.pop.rooms ? this.pop.rooms : ''
            },
        },

        watch: {
            room(val) {
                this.getJunctions()
                this.getGeneratorSets()
                this.newTheoreticalAutonomy = this.pop && this.pop.current_autonomy ? this.pop.current_autonomy.theoretical : 0
            }
        },

        created() {
            this.$eventBus.$on('junction-measurements-updated', this.getJunctions)
            this.$eventBus.$on('generator-set-capacities-updated', this.getGeneratorSets)
        },

        mounted() {
            this.getJunctions()
            this.getGeneratorSets()
        },

        methods: {
            async getJunctions() {
                if(this.pop) {
                    await axios.get(`/api/popJunctions/${this.pop.id}`)
                    .then((response) => {
                        this.junctions = response.data.junctions
                        this.canEditJunctions = response.data.can
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Empalmes: ' + error);
                    });
                }
            },

            async getGeneratorSets() {
                if(this.pop) {
                    await axios.get(`/api/generatorSets/${this.pop.id}`)
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
                if(!this.isEditMode && this.pop && this.pop.current_autonomy && this.newTheoreticalAutonomy != this.pop.current_autonomy.theoretical) {
                    let params = {
                        'pop_id': this.pop.id,
                        'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
                    }
                    axios.post(`/api/autonomies`, params)
                    .then(response => {
                        console.log(response.data)
                    })
                }
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('junction-measurements-updated')
            this.$eventBus.$off('generator-set-capacities-updated')
        }
    }
</script>
