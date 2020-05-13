<template>
    <div class="">
        <section class="">
            <div class="columns">
                <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout</div>
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
                                            ref="alpha" 
                                            id="alpha" 
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
                                <div class="tile">
                                    <div class="tile is-parent"></div>
                                    <div class="tile is-parent" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                                        <a class="tile is-child is-size-5 has-text-weight-normal" 
                                            ref="beta"
                                            id="beta"
                                            @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                                            <b-message type="is-success" class="box is-paddingless">
                                                <div class="columns">
                                                    <div class="column">Grupo Electrógeno</div>
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
                                <div class="tile is-parent columns is-multiline">
                                    <div class="column tile is-6" v-for="room in pop.rooms" :key="room.id">
                                        <div class="tile box" :class="room_id && room.id != room_id ? 'is-shadowless has-background-white-bis' : ''">
                                            <div class="tile is-vertical">
                                                <div class="is-size-5 has-text-weight-normal" 
                                                    :class="room_id && room.id != room_id ? 'has-text-grey-light' : ''">
                                                    {{ room.name }} - {{ room.old_name }}
                                                </div>

                                                <div class="section columns">
                                                    <div class="column is-6">
                                                        <div class="columns is-multiline">
                                                            <div class="column is-12" v-for="powerRectifier in powerRectifiers" v-if="powerRectifier.room_id == room.id" :key="powerRectifier.id">
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
                                                            <div class="column is-12" v-for="airConditioner in airConditioners" v-if="airConditioner.room_id == room.id" :key="airConditioner.id">
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
                                    </div>
                                </div>
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
                :pop="pop"
                :user="user"
                />
        </b-modal>

        <b-modal :active.sync="isGeneratorModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-generator 
                :generatorSet="generatorSetSelected"
                :can="canEditGeneratorGroups"
                :pop="pop"
                :user="user"/>
        </b-modal>

        <b-modal :active.sync="isPowerRectifierModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-power-rectifier 
                :powerRectifier="powerRectifierSelected"
                :can="canEditPowerRectifiers"
                :pop="pop"
                :user="user"
                />
        </b-modal>

        <b-modal :active.sync="isAirConditionerModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-air-conditioner 
                :airConditioner="airConditionerSelected"
                :can="canEditAirConditioners"
                :pop="pop"
                :user="user"
                />
        </b-modal>
    </div>
        
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(farCheckCircle, faExclamationTriangle);
    // import LeaderLine from 'leader-line'
    export default {
        components: {
            ModalJunction: () => import('./modals/ModalJunction'),
            ModalGenerator: () => import('./modals/ModalGenerator'),
            ModalPowerRectifier: () => import('./modals/ModalPowerRectifier'),
            ModalAirConditioner: () => import('./modals/ModalAirConditioner'),
            CapacityChart: () => import('./CapacityChart'),
            // GrowingChart: () => import('./GrowingChart'),
            SpaceChart: () => import('../infrastructure/SpaceChart')
        },
        props : [
            'user',
            'pop',
            'room_id'
        ],
        data() {
            return {
                junctionSelected: null,
                generatorSetSelected: null,
                powerRectifierSelected: null,
                airConditionerSelected: null,
                canEditJunctions: null,
                canEditGeneratorGroups: null,
                canEditPowerRectifiers: null,
                canEditAirConditioners: null,
                junctions: Array,
                generatorSets: Array,
                powerRectifiers: Array,
                airConditioners: Array,
                isJunctionModalActive: false,
                isGeneratorModalActive: false,
                isPowerRectifierModalActive: false,
                isAirConditionerModalActive: false,
            }
        },
        mounted() {
            this.getJunctions()
            this.getGeneratorSets()
            this.getPowerRectifiers()
            this.getAirConditioners()

            // let leader = new LeaderLine(
            //     document.getElementById('alpha'),
            //     document.getElementById('beta')
            // );
        },
        methods: {
            getJunctions() {
                axios.get(`/api/junctions/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
                    this.junctions = response.data.junction
                    this.canEditJunctions = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            getGeneratorSets() {
                axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.generatorSets = response.data.generatorSets
                    this.canEditGeneratorGroups = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },

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
        }
    }
</script>
