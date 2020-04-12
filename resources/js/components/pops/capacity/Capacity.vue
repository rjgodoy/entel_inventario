<template>
    <section class="section is-paddingless">
        <div class="columns">
            <div class="column">
                <div class="section">

                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">

                            <!-- Empalme -->
                            <div class="tile">
                                <div class="tile is-parent"></div>
                                <div class="tile is-parent">

                                    <a class="tile is-child is-size-5 has-text-weight-semibold" 
                                        @click="isJunctionModalActive = true">
                                        <b-message type="is-success">
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
                                <div class="tile is-parent">
                                    <a class="tile is-child is-size-5 has-text-weight-semibold" 
                                        @click="isGeneratorModalActive = true">
                                        <b-message type="is-warning">
                                            <div class="columns">
                                                <div class="column">Grupo Electrógeno</div>
                                                <div class="column is-2 has-text-centered">
                                                    <font-awesome-icon 
                                                        :icon="['fas', 'exclamation-triangle']"
                                                        size="2x"
                                                        class="has-text-warning"
                                                    />
                                                </div>
                                            </div>   
                                        </b-message>
                                    </a>
                                </div>
                                <div class="tile is-parent"></div>
                            </div>

                            <!-- Tablero -->
                            <div class="tile">
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
                            </div>

                            <!-- Salas -->
                            <div class="tile is-parent columns is-multiline">
                                <div class="column tile is-6" v-for="room in pop.rooms">
                                    <div class="tile box has-background-white">
                                        <div class="tile is-vertical">
                                            <div class="is-size-6">{{ room.name }} - {{ room.old_name }} </div>
                                            <div>
                                            <div class="section columns">
                                                <div class="column is-6">
                                                    <div class="columns is-multiline">
                                                        <div class="column is-12" v-for="power_rectifier in room.power_rectifiers">
                                                            <a class="tile is-child is-size-5 has-text-weight-semibold">
                                                                <b-message type="is-success">
                                                                    <div class="columns">
                                                                        <div class="column">Planta Nº {{ power_rectifier.id }}</div>
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
                                                    <div class="box" v-for="air_conditioner in room.air_conditioners"></div>
                                                </div>
                                            </div>
                                                
                                            <div class="is-divider" data-content="ESPACIO"></div>
                                            <space-chart/>
                                            
                                            </div>
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

        <b-modal :active.sync="isJunctionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-junction 
                :user="user"
                :pop="pop"
            ></modal-junction>
        </b-modal>

        <b-modal :active.sync="isGeneratorModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-generator 
                :user="user"
                :pop="pop"
            ></modal-generator>
        </b-modal>
    </section>
        
</template>

<script>
    export default {
        components: {
            ModalJunction: () => import('./ModalJunction'),
            ModalGenerator: () => import('./ModalGenerator'),
            CapacityChart: () => import('./CapacityChart'),
            // GrowingChart: () => import('./GrowingChart'),
            SpaceChart: () => import('../infrastructure/SpaceChart')
        },
        props : [
            'user',
            'pop'
        ],
        data() {
            return {
                isJunctionModalActive: false,
                isGeneratorModalActive: false,
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
