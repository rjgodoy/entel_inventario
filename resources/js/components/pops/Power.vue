<template>
    <section class="section">
        <div class="columns">
            <div class="column is-10">

                <section class="section" v-if="electricLines.electric_line">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Líneas Eléctricas</div>
                    </div>
                    
                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="data in electricLines.electric_line">
                            <div class="tile is-child box">

                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Nº Línea Eléctrica</div>
                                        <div class="has-text-weight-semibold is-size-5">{{ data.id }}</div>
                                        
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
                                </div>
                                <div class="columns is-multiline">
                                    <div class="column is-6" v-for="transformer in data.transformers">

                                        <div class="tile is-child box has-background-light">
                                            <div class="title is-size-5 has-text-weight-semibold">Transformador Nº {{ transformer.id }}</div>
                                            <b-field v-if="electricLines.can.update">
                                                <b-select placeholder="" icon="bolt" icon-pack="fas" v-model="electricLineSelected" @input="setTransformerElectricLine(transformer.id, electricLineSelected)">
                                                    <option v-for="electricLine in electricLines.electric_line" :value="electricLine.id">{{ electricLine.id }}</option>
                                                </b-select>
                                            </b-field>
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
                </section>

                <section class="section" v-if="clientConnections.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Empalmes</div>
                    </div>
                    
                    <div :class="clientConnections.length > 4 ? '' : 'container'">
                        <div class="columns tile is-ancestor is-multiline">
                            <div class="column is-3 tile is-parent" v-for="data in clientConnections">
                                <div class="tile is-child box">

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
                </section>

                <section class="section" v-if="generatorSets.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Grupos Electrógenos</div>
                    </div>
                    
                    <div :class="generatorSets.length > 4 ? '' : 'container'">
                        <div class="columns tile is-ancestor is-multiline">
                            <div class="column is-6 tile is-parent" v-for="data in generatorSets">
                                <div class="tile is-child box">

                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Marca</div>
                                            <div class="has-text-weight-semibold is-size-5 ">{{ data.generator_set_type ? data.generator_set_type.generator_set_type : 'Sin información' }}</div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                            <div class="has-text-weight-semibold is-size-6">{{ data.generator_set_type ? data.generator_set_type.generator_set_model : 'Sin información' }}</div>
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
                </section>

                <section class="section" v-if="powerRectifiers.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Plantas Rectificadoras</div>
                    </div>
                    
                    <div :class="powerRectifiers.length > 4 ? '' : 'container'">
                        <div class="columns tile is-ancestor is-multiline">
                            <div class="column is-4 tile is-parent" v-for="data in powerRectifiers">

                                <div class="tile is-child box">
                                    
                                    
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                                            <div class="has-text-weight-semibold is-size-5">{{ data.power_rectifier_type ? data.power_rectifier_type.power_rectifier_type : 'Sin información' }}</div>
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
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad total</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.capacity ? data.capacity : 'Sin información' }} <span class="is-size-7" v-if="data.capacity">kW</span></div>
                                            
                                        </div>
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7">Nº módulos</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.modules ? data.modules : 'Sin información' }}</div>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <div class="" v-if="data.room">
                                                <div class="has-text-weight-semibold is-size-6">{{ data.room.site.nem_site }} - {{ data.room.name }}</div>
                                                <div class="has-text-weight-normal is-size-7">Sitio</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="section" v-if="electricLines.electric_line && electricLines.electric_line.length + transformers.length + clientConnections.length + generatorSets.length + powerRectifiers.length == 0">
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
                electricLines: [],
                transformers: [],
                clientConnections: [],
                generatorSets:[],
                powerRectifiers: [],
                electricLineSelected: 0
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
                    this.electricLines = response.data
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },
            getConnectionClients() {
                axios.get(`/api/clientConnections/${this.pop.id}`)
                .then((response) => {
                    this.clientConnections = response.data.data
                    // console.log(this.clientConnections)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },
            getGeneratorGroups() {
                axios.get(`/api/generatorSets/${this.pop.id}`)
                .then((response) => {
                    this.generatorSets = response.data.data
                    // console.log(this.generatorSets)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}`)
                .then((response) => {
                    this.powerRectifiers = response.data.data
                    // console.log(this.powerRectifiers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            setTransformerElectricLine(transformer_id, electricLine_id) {
                axios.put(`/api/transformers/${transformer_id}?electric_line_id=${electricLine_id}`)
                .then((response) => {
                    console.log(response)
                    this.getElectricLines()
                })
            }
        }
    }
</script>
