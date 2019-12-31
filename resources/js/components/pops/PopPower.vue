<template>
    <div class="section columns" style="min-height: 500px; margin: auto -48px auto -48px;">
        <div class="column is-two-thirds has-background-white">
            <section class="section" v-if="electricLines.length">
                <div style="margin: -40px auto -40px auto;">
                    <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Líneas Eléctricas</div>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in electricLines">
                                <div class="tile is-child box">
                                    <div class="has-text-weight-semibold">{{ data.distance }}</div>
                                    <div class="has-text-weight-semibold">{{ data.electric_line_type_id }}</div>
                                    <div class="has-text-weight-semibold">{{ data.phase_type_id }}</div>
                                    <div class="has-text-weight-semibold">{{ data.transformer_id }}</div>
                                    <div class="has-text-weight-semibold">{{ data.volt }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="transformers.length">
                <div style="margin: -40px auto -40px auto;">
                    <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Transformadores</div>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in transformers">
                                <div class="tile is-child box">
                                    <div class="has-text-weight-semibold">{{ data.primary_tension }}</div>
                                    <div class="has-text-weight-semibold">{{ data.phase_type_phase_type }}</div>
                                    <div class="has-text-weight-semibold">{{ data.power }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="connectionClients.length">
                <div style="margin: -40px auto -40px auto;">
                    <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Empalmes</div>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in connectionClients">
                                <div class="tile is-child box">
                                    <div class="has-text-right">
                                        <font-awesome-icon :icon="data.connection_client_state_id == 1 ? 'link' : 'unlink'" :class="data.connection_client_state_id == 1 ? 'has-text-success' : 'has-text-danger'"/>
                                    </div>
                                    <div class="has-text-weight-semibold"># Cliente: {{ data.client_number }}</div>
                                    <div class="has-text-weight-semibold">Credenciales de acceso: {{ data.access_credentials }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="generatorGroups.length">
                <div style="margin: -40px auto -40px auto;">
                    <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Grupos Electrógenos</div>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in generatorGroups">
                                <div class="tile is-child box">
                                    <div class="has-text-right">
                                        <font-awesome-icon :icon="data.connection_client_state_id == 1 ? 'link' : 'unlink'" :class="data.connection_client_state_id == 1 ? 'has-text-success' : 'has-text-danger'"/>
                                    </div>
                                    <div class="has-text-weight-semibold"># Cliente: {{ data.client_number }}</div>
                                    <div class="has-text-weight-semibold">Credenciales de acceso: {{ data.access_credentials }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="powerRectifiers.length">
                <div style="margin: -40px auto -40px auto;">
                    <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Rectificadores</div>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in powerRectifiers">
                                <div class="tile is-child box">
                                    <div class="has-text-right">
                                        <font-awesome-icon :icon="data.connection_client_state_id == 1 ? 'link' : 'unlink'" :class="data.connection_client_state_id == 1 ? 'has-text-success' : 'has-text-danger'"/>
                                    </div>
                                    <div class="has-text-weight-semibold"># Cliente: {{ data.client_number }}</div>
                                    <div class="has-text-weight-semibold">Credenciales de acceso: {{ data.access_credentials }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" v-if="electricLines.length + transformers.length + connectionClients.length + generatorGroups.length + powerRectifiers.length == 0">
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
                connectionClients: [],
                generatorGroups:[],
                powerRectifiers: []
            }
        },
        mounted() {
            this.getElectricLines()
            this.getTransformers()
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
            getTransformers() {
                axios.get(`/api/transformers/${this.pop.id}`)
                .then((response) => {
                    this.transformers = response.data.data
                    console.log(this.transformers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Transformadores: ' + error);
                });
            },
            getConnectionClients() {
                axios.get(`/api/connectionClients/${this.pop.id}`)
                .then((response) => {
                    this.connectionClients = response.data.data
                    console.log(this.connectionClients)
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
