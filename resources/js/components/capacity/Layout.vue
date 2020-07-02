<template>
    <div class="">
        <section class="">
            <div class="">
                <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout del POP</div>
            </div>

            <!-- Empalme -->
            <MiniJunctions 
                :pop="pop"
                :junctions="junctions"
                :can="canEditJunctions"
                :user="user"
            />
                
            <!-- Grupo Electrógeno -->
            <MiniGeneratorSets 
                :pop="pop"
                :generatorSets="generatorSets"
                :can="canEditGeneratorGroups"
                :user="user"
            />
                            
            <!-- Salas -->
            <MiniRooms 
                :pop="pop"
                :room="room"
                :salas="salas"
                :user="user"
            />

        </section>
    </div>
        
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
            MiniJunctions: () => import(/* webpackChunkName: "chunks/capacity/blocks/junction"*/'../capacity/blocks/Junctions'),
            MiniGeneratorSets: () => import(/* webpackChunkName: "chunks/capacity/blocks/generator"*/'../capacity/blocks/GeneratorSets'),
            MiniRooms: () => import(/* webpackChunkName: "chunks/capacity/blocks/room"*/'../capacity/blocks/Rooms'),
        },

        props : [
            'user',
            'room'
        ],

        data() {
            return {
                junctions: [],
                generatorSets: Array,

                canEditJunctions: null,
                canEditGeneratorGroups: null,
            }
        },

        computed: {
            pop() {
                return this.room ? this.room.pop : null
            },

            salas() {
                return this.pop && this.pop.rooms ? this.pop.rooms : ''
            },
        },

        watch: {
            room(val) {
                this.getJunctions()
                this.getGeneratorSets()
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
                    await axios.get(`/api/popJunctions/${this.pop.id}?api_token=${this.user.api_token}`)
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
                    await axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
                    .then((response) => {
                        this.generatorSets = response.data.generatorSets
                        this.canEditGeneratorGroups = response.data.can
                    })
                    .catch((error) => {
                        console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                    });
                }
            },
        },

        beforeDestroy() {
            this.$eventBus.$off('junction-measurements-updated')
            this.$eventBus.$off('generator-set-capacities-updated')
        }
    }
</script>
