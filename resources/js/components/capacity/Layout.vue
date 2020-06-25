<template>
    <div class="">
        <section class="">
            <div class="">
                <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout</div>
            </div>

            <div class="columns">
                <div class="column">
                    <div class="section">

                        <div class="tile is-ancestor">
                            <div class="tile is-vertical">

                                <!-- Empalme -->
                                <div class="tile">
                                    <div class="tile is-parent"></div>
                                    <div class="tile is-parent" v-for="junction in junctions" :key="junction.id">

                                        <a class="tile is-child is-size-5 has-text-weight-normal"
                                            @click="isJunctionModalActive = true; junctionSelected = junction">
                                            <b-message type="is-success" class="box is-paddingless">
                                                <div class="columns">
                                                    <div class="column">Empalme</div>
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
                                    <div class="tile is-parent"></div>
                                </div>
                        
                                <!-- Grupo Electrógeno -->
                                <MiniGeneratorSets 
                                    :pop="pop"
                                    :generatorSets="generatorSets"
                                    :can="canEditGeneratorGroups"
                                    :user="user"
                                />
                                <!-- <div class="tile box is-dark is-bold" v-if="generatorSets.length">
                                    <div class="tile is-parent" v-if="generatorSets.length < 2"></div>
                                    <div class="tile is-parent level" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                                        <a class="tile is-child level-item is-size-5 has-text-weight-normal"
                                            @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                                            <div class="box is-success">
                                                <div class="columns">
                                                    <div class="column">
                                                        <div class="has-text-weight-semibold is-size-6">Grupo Electrógeno</div>
                                                    </div>
                                                    <div class="column is-2 has-text-centered">
                                                        <font-awesome-icon 
                                                            :icon="['far', 'check-circle']"
                                                            size="2x"
                                                            class="has-text-success"
                                                        />
                                                    </div>
                                                </div>   
                                            </div>
                                        </a>
                                    </div>
                                    <div class="tile is-parent" v-if="generatorSets.length < 2"></div>
                                </div> -->

                                <!-- Tablero -->
                                <!-- <div class="tile">
                                    <div class="tile is-parent"></div>
                                    <div class="tile is-parent">
                                        <a class="tile is-child is-size-5 has-text-weight-semibold">
                                            <b-message type="is-success">
                                                <div class="columns">
                                                    <div class="column">Tablero</div>
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
                                    <div class="tile is-parent"></div>
                                </div> -->

                                <!-- Salas -->

                                <MiniRooms 
                                    :pop="pop"
                                    :room="room"
                                    :salas="salas"
                                    :can="canEditGeneratorGroups"
                                    :user="user"
                                />
                                
                            </div>
                        </div>


                    </div>
                </div>

                <!-- <div class="column is-4 has-text-centered has-background-dark">
                    <div class="section">
                        <capacity-chart/>
                    </div>
                </div> -->
            </div>

        </section>

        <b-modal :active.sync="isJunctionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-junction 
                :junction="junctionSelected"
                :can="canEditJunctions"
                :user="user"
                />
        </b-modal>

        <!-- <b-modal :active.sync="isGeneratorModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-generator 
                :generatorSet="generatorSetSelected"
                :can="canEditGeneratorGroups"
                :user="user"/>
        </b-modal> -->

        <!-- <b-modal :active.sync="isPowerRectifierModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-power-rectifier 
                :powerRectifier="powerRectifierSelected"
                :can="canEditPowerRectifiers"
                :user="user"
                />
        </b-modal> -->

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
    </div>
        
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMicrochip, faChargingStation, faGasPump, faEdit, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faMicrochip, faChargingStation, faGasPump, faEdit, farCheckCircle, faExclamationTriangle);
    // import LeaderLine from 'leader-line'
    export default {
        components: {
            MiniGeneratorSets: () => import(/* webpackChunkName: "chunks/pop/layout/blocks/generator"*/'../capacity/blocks/GeneratorSets'),
            MiniRooms: () => import(/* webpackChunkName: "chunks/pop/layout/blocks/generator"*/'../capacity/blocks/Rooms'),

            ModalJunction: () => import(/* webpackChunkName: "chunks/pop/layout/modals/junction"*/'../pop/layout/modals/ModalJunction'),
            ModalPowerRectifier: () => import(/* webpackChunkName: "chunks/pop/layout/modals/powerRectifier"*/'../pop/layout/modals/ModalPowerRectifier'),
            ModalAirConditioner: () => import(/* webpackChunkName: "chunks/pop/layout/modals/airConditioner"*/'../pop/layout/modals/ModalAirConditioner'),
            CapacityChart: () => import(/* webpackChunkName: "chunks/pop/layout/capacityChart"*/'./CapacityChart'),
            // GrowingChart: () => import(/* webpackChunkName: "chunks/pop/layout/growingChart"*/'./GrowingChart'),
        },

        props : [
            'user',
            'room'
        ],

        data() {
            return {
                junctions: [],
                generatorSets: Array,
                // powerRectifiers: Array,
                // airConditioners: Array,

                junctionSelected: '',
                generatorSetSelected: null,
                // powerRectifierSelected: null,
                // airConditionerSelected: null,

                canEditJunctions: null,
                canEditGeneratorGroups: null,
                // canEditPowerRectifiers: null,
                // canEditAirConditioners: null,

                isJunctionModalActive: false,
                isGeneratorModalActive: false,
                // isPowerRectifierModalActive: false,
                // isAirConditionerModalActive: false,
            }
        },

        computed: {
            pop() {
                return this.room ? this.room.pop : null
            },

            salas() {
                return this.pop && this.pop.rooms ? this.pop.rooms : ''
            },


            // totalCapacityA() {
            //     let sum; let res; let div; 
            //     switch(this.generatorSet.generator_set_topology_type_id) {
            //         case 1:
            //             sum = c9 + 
            //             break
            //         case 1:
            //             break
            //         case 1:
            //             break
            //         case 1:
            //             break

            //     }

            //     SUMIFS(C8;C9;"A+B";C10;"A") + 
            //     SUMIFS(C17;C18;"A+B";C19;"A") + 
            //     SUMIFS(C26;C27;"A+B";C28;"A") + 
            //     SUMIFS(C35;C36;"A+B";C37;"A") + 

            //     SUMIF(C9;"ÚNICO";C8) + 
            //     SUMIF(C18;"ÚNICO";C17) + 
            //     SUMIF(C27;"ÚNICO";C26) + 
            //     SUMIF(C36;"ÚNICO";C35) + 
                
            //     SUMIF(C9;"N+1";C8) + 
            //     SUMIF(C18;"N+1";C17) + 
            //     SUMIF(C27;"N+1";C26) + 
            //     SUMIF(C36;"N+1";C35
            //     ) - (
            //     SUMIF(C9;"N+1";C8) + 
            //     SUMIF(C18;"N+1";C17) + 
            //     SUMIF(C27;"N+1";C26) + 
            //     SUMIF(C36;"N+1";C35)
            //     )/
            //     IF( 
            //         COUNTIF(C9;"N+1")+
            //         COUNTIF(C18;"N+1")+
            //         COUNTIF(C27;"N+1")+
            //         COUNTIF(C36;"N+1")=0;1;

            //     (COUNTIF(C9;"N+1")+
            //         COUNTIF(C18;"N+1")+
            //         COUNTIF(C27;"N+1")+
            //         COUNTIF(C36;"N+1"))
            //     )
            // }
        },

        watch: {
            room(val) {
                // console.log(this.pop)
                // console.log(this.salas)
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
            // this.getPowerRectifiers()
            // this.getAirConditioners()

            // let leader = new LeaderLine(
            //     document.getElementById('alpha'),
            //     document.getElementById('beta')
            // );
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

            // getPowerRectifiers() {
            //     axios.get(`/api/powerRectifiers/${this.pop.id}?api_token=${this.user.api_token}`)
            //     .then((response) => {
            //         // console.log(response.data)
            //         this.powerRectifiers = response.data.powerRectifiers
            //         this.canEditPowerRectifiers = response.data.can
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Empalmes: ' + error);
            //     });
            // },

            // getAirConditioners() {
            //     axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
            //     .then((response) => {
            //         // console.log(response.data)
            //         this.airConditioners = response.data.airConditioner
            //         this.canEditAirConditioners = response.data.can
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Empalmes: ' + error);
            //     });
            // },
        },

        beforeDestroy() {
            this.$eventBus.$off('junction-measurements-updated')
            this.$eventBus.$off('generator-set-capacities-updated')
        }
    }
</script>
