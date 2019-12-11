<template>
    <section class="section container" style="min-height: 500px;">
        <div class="has-text-weight-semibold is-size-4 has-text-centered">Poder</div>
        <div class="tile is-ancestor">
            <div class="has-text-weight-light is-size-5 has-text-centered">Líneas Eléctricas</div>
            <div class="tile is-parent" v-if="electricLines" v-for="data in electricLines">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold">{{ data.distance }}</div>
                    <div class="has-text-weight-semibold">{{ data.electric_line_type_id }}</div>
                    <div class="has-text-weight-semibold">{{ data.phase_type_id }}</div>
                    <div class="has-text-weight-semibold">{{ data.transformer_id }}</div>
                    <div class="has-text-weight-semibold">{{ data.volt }}</div>
                </div>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="has-text-weight-light is-size-5 has-text-centered">Transformadores</div>
            <div class="tile is-parent" v-if="transformers" v-for="data in transformers">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold">{{ data.primary_tension }}</div>
                    <div class="has-text-weight-semibold">{{ data.phase_type_phase_type }}</div>
                    <div class="has-text-weight-semibold">{{ data.power }}</div>
                </div>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="has-text-weight-light is-size-5 has-text-centered">Empalmes</div>
            <div class="tile is-parent" v-if="connectionClients" v-for="data in connectionClients">
                <div class="tile is-child box">
                    <div class="has-text-right">
                        <font-awesome-icon :icon="data.connection_client_state_id == 1 ? 'link' : 'unlink'" :class="data.connection_client_state_id == 1 ? 'has-text-success' : 'has-text-danger'"/>
                    </div>
                    <div class="has-text-weight-semibold"># Cliente: {{ data.client_number }}</div>
                    <div class="has-text-weight-semibold">Credenciales de acceso: {{ data.access_credentials }}</div>
                </div>
            </div>
        </div>
        <div class="box" v-if="connectionClients.length == 0 && electricLines.length == 0">
            <div class="">
                No hay datos de energía.
            </div>
        </div>
    </section>
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
                connectionClients: [],
                transformers: [],
                electricLines: []
            }
        },
        mounted() {
            this.getConnectionClients()
            this.getTransformers()
            this.getElectricLines()
        },
        methods: {
            // APIs
            getConnectionClients() {
                axios.get(`/api/connectionClients/${this.pop.id}`)
                .then((response) => {
                    this.connectionClients = response.data.data
                    console.log(this.connectionClients)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Comsite: ' + error);
                });
            },
            getTransformers() {
                axios.get(`/api/transformers/${this.pop.id}`)
                .then((response) => {
                    this.transformers = response.data.data
                    console.log(this.transformers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Comsite: ' + error);
                });
            },
            getElectricLines() {
                axios.get(`/api/electricLines/${this.pop.id}`)
                .then((response) => {
                    this.electricLines = response.data.data
                    console.log(this.electricLines)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Comsite: ' + error);
                });
            }
        }
    }
</script>
