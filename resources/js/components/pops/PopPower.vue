<template>
    <div class="section columns" style="min-height: 500px; margin: auto -48px auto -48px;">
        <div class="column is-two-thirds has-background-white">

            <section class="section has-background-white" v-if="electricLines.length">
                <div style="margin: -24px auto -40px auto;">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Líneas Eléctricas</div>
                    </div>
                    
                    <div :class="electricLines.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in electricLines">
                                <div class="tile is-child box" style="max-width: 450px; position: center;">

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Tipo</div>
                                            <div class="has-text-weight-semibold is-size-5">{{ data.electric_line_type ? data.electric_line_type.electric_line_type : 'Sin información' }}</div>
                                            
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Tipo fase</div>
                                            <div class="has-text-weight-semibold is-size-6">{{ data.phase_type ? data.phase_type.phase_type : 'Sin información' }}</div>
                                        </div>
                                        <div class="column has-text-right">
                                            <b-icon
                                                pack="fad" 
                                                icon="bolt"
                                                class="fa-3x is-right has-text-grey-lighter"
                                                style="padding: 30px;">
                                            </b-icon>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column is-4">
                                            <div class="has-text-weight-light is-size-7">Voltaje</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.volt | numeral('0,0') }} <span class="is-size-7" v-if="data.volt">V</span></div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Distancia</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.distance | numeral('0,0') }} <span class="is-size-7" v-if="data.distance">m</span></div>
                                        </div>
                                        <div class="column">
                                            <div class="tile is-ancestor">
                                                <div class="tile is-parent" v-for="transformer in data.transformers">
                                                    <div class="tile is-child box has-background-white-ter">
                                                        <div class="title is-size-5 has-text-weight-semibold">Transformador</div>
                                                        
                                                        <div class="columns">
                                                            <div class="column">
                                                                <div class="has-text-weight-normal is-size-7">Tensión primaria</div>
                                                                <div class="has-text-weight-normal is-size-6">{{ transformer.primary_tension ? transformer.primary_tension : 'Sin información' }}
                                                                </div>
                                                                <div class="has-text-weight-normal is-size-7" style="margin-top: 5px;">Tipo fase</div>
                                                                <div class="has-text-weight-normal is-size-6">{{ transformer.phase_type ? transformer.phase_type.phase_type : 'Sin información' }}
                                                                </div>
                                                            </div>
                                                            <div class="column">
                                                                <div class="has-text-weight-normal is-size-7">Potencia</div>
                                                                <div class="has-text-weight-normal is-size-6">{{ transformer.power }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section has-background-white" v-if="clientConnections.length">
                <div style="margin: -24px auto -40px auto;">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Empalmes</div>
                    </div>
                    
                    <div :class="clientConnections.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in clientConnections">
                                <div class="tile is-child box" style="max-width: 450px; position: center;">

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Número Cliente</div>
                                            <div class="has-text-weight-semibold is-size-5 ">{{ data.client_number ? data.client_number : 'Sin información' }}</div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Sitio</div>
                                            <div class="has-text-weight-semibold is-size-6">{{ data.nem_site ? data.nem_site : 'Sin información' }}</div>
                                        </div>
                                        <div class="column has-text-right">
                                            <b-icon
                                                pack="fad" 
                                                icon="plug"
                                                class="fa-3x is-right has-text-grey-lighter"
                                                style="padding: 30px;">
                                            </b-icon>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column is-4">
                                            <div class="has-text-weight-light is-size-7">Distribuidora</div>
                                            <div class="has-text-weight-semibold is-size-5">{{ data.electric_company ? data.electric_company.name : 'Sin información' }}</div>
                                        </div>
                                        <div class="column is-6">
                                            <div class="has-text-weight-light is-size-7">Credenciales de acceso</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.access_credentials ? data.access_credentials : 'Sin credenciales' }}</div>
                                        </div>
                                        <div class="column is-2 has-text-right">
                                            <b-tooltip :label="data.client_connection_state.description" position="is-right">
                                                <font-awesome-icon 
                                                    :icon="data.client_connection_state_id == 1 ? 'link' : 'unlink'" 
                                                    :class="data.client_connection_state_id == 1 ? 'has-text-success' : 'has-text-danger'"
                                                />
                                            </b-tooltip>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section has-background-white" v-if="generatorGroups.length">
                <div style="margin: -24px auto -40px auto;">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Grupos Electrógenos</div>
                    </div>
                    
                    <div :class="generatorGroups.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in generatorGroups">
                                <div class="tile is-child box" style="max-width: 450px; position: center;">

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Marca</div>
                                            <div class="has-text-weight-semibold is-size-5 ">{{ data.generator_group_type ? data.generator_group_type.generator_group_type : 'Sin información' }}</div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                            <div class="has-text-weight-semibold is-size-6">{{ data.generator_group_type ? data.generator_group_type.generator_group_model : 'Sin información' }}</div>
                                        </div>
                                        <div class="column has-text-right">
                                            <b-icon
                                                pack="fad" 
                                                icon="charging-station"
                                                class="fa-3x is-right has-text-grey-lighter"
                                                style="padding: 30px;">
                                            </b-icon>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column is-4">
                                            <div class="has-text-weight-light is-size-7">Potencia</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.power ? data.power : 'Sin información' }} <span class="is-size-7" v-if="data.power">kW</span></div>
                                        </div>
                                        <div class="column">
                                            <!-- <div class="has-text-weight-light is-size-7">Credenciales de acceso</div> -->
                                            <!-- <div class="has-text-weight-normal is-size-6">{{ data.access_credentials ? data.access_credentials : 'Sin credenciales' }}</div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section has-background-white" v-if="powerRectifiers.length">
                <div style="margin: -24px auto -40px auto;">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Plantas Rectificadoras</div>
                    </div>
                    
                    <div :class="powerRectifiers.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in powerRectifiers">
                                <div class="tile is-child box" style="max-width: 450px; position: center;">

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Marca</div>
                                            <div class="has-text-weight-semibold is-size-5 ">{{ data.power_rectifier_type ? data.power_rectifier_type.power_rectifier_type : 'Sin información' }}</div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                            <div class="has-text-weight-semibold is-size-6">{{ data.power_rectifier_type ? data.power_rectifier_type.power_rectifier_model : 'Sin información' }}</div>
                                        </div>
                                        <div class="column has-text-right">
                                            <b-icon
                                                pack="fad" 
                                                icon="random"
                                                class="fa-3x is-right has-text-grey-lighter"
                                                style="padding: 30px;">
                                            </b-icon>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Voltaje</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.volt ? data.volt : 'Sin información' }} <span class="is-size-7" v-if="data.volt">V</span></div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad máxima</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.max_capacity ? data.max_capacity : 'Sin información' }} <span class="is-size-7" v-if="data.max_capacity">kW</span></div>
                                        </div>
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Nº módulos</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.modules ? data.modules : 'Sin información' }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="electricLines.length + transformers.length + clientConnections.length + generatorGroups.length + powerRectifiers.length == 0">
                <div class="container">
                    <div class="box">
                        No hay datos de energía.
                    </div>
                </div>
            </section>
        </div>
        <div class="column has-background-dark is-bold">
            <div>
                
            </div>
        </div>
        <!-- <div class="has-text-weight-semibold is-size-4 has-text-centered">PODER</div> -->
    </div>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        data() {
            return {
                electricLines: [],
                transformers: [],
                clientConnections: [],
                generatorGroups:[],
                powerRectifiers: []
            }
        },
        mounted() {
            this.getElectricLines()
            this.getConnectionClients()
            this.getGeneratorGroups()
            this.getPowerRectifiers()
        },
        methods: {
            // APIs
            getElectricLines() {
                axios.get(`/api/electricLines/${this.pop.id}`)
                .then((response) => {
                    this.electricLines = response.data.data
                    console.log(this.electricLines)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },
            getConnectionClients() {
                axios.get(`/api/clientConnections/${this.pop.id}`)
                .then((response) => {
                    this.clientConnections = response.data.data
                    console.log(this.clientConnections)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },
            getGeneratorGroups() {
                axios.get(`/api/generatorGroups/${this.pop.id}`)
                .then((response) => {
                    this.generatorGroups = response.data.data
                    console.log(this.generatorGroups)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}`)
                .then((response) => {
                    this.powerRectifiers = response.data.data
                    console.log(this.powerRectifiers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
