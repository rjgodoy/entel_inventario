<template>
    <section class="section container" style="padding-top: 0px;" v-if="junctions.length">
        <!-- <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Empalmes</div>
        </div> -->
        
        <div class="columns tile is-ancestor is-multiline">
            <div class="column tile is-parent" :class="'is-' + 12/junctions.length" v-for="data in junctions">
                <div class="tile is-child box">

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-semibold is-size-4">{{ data.electric_company ? data.electric_company.name : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Distribuidora</div>


                            <div class="has-text-weight-semibold is-size-5" style="padding-top: 12px;">{{ data.client_number ? data.client_number : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Número Cliente</div>
                            
                        </div>
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Tipo Empalme</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.junction_type ? data.junction_type.type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Tipo Conexión</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.junction_connection ? data.junction_connection.connection : 'Sin información' }}</div>

                            <div class="is-divider" data-content="Mediciones"></div>

                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Protecciones</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.junction_protections ? data.junction_protections : 'Sin información' }}</div>
                            <!-- <div class="has-text-weight-semibold is-size-5">{{ data.latest_protection ? data.latest_protection : 'Sin información' }}</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.latest_protection ? data.latest_protection : 'Sin información' }}</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.latest_protection ? data.latest_protection : 'Sin información' }}</div> -->

                            <!-- <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Mediciones</div> -->
                            <div class="is-divider" data-content="Mediciones"></div>
                            <table class="table is-fullwidth">
                                <tr>
                                    <th class="has-text-centered">Medición R</th>
                                    <th class="has-text-centered">Medición S</th>
                                    <th class="has-text-centered">Medición T</th>
                                </tr>
                                <tr>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_measurement" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_measurement.r_measure }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_measurement" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_measurement.s_measure }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_measurement" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_measurement.t_measure }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'plug']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            
                        </div>
                        <!-- <div class="column is-6">
                            <div class="has-text-weight-light is-size-7">Credenciales de acceso</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.access_credentials ? data.access_credentials : 'Sin credenciales' }}</div>
                        </div> -->
                    </div>
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
            'darkMode'
        ],
        data() {
            return {
                junctions: Array
            }
        },
        mounted() {
            this.getJunctions()
        },
        computed: {
            currentTabComponent() {
                return this.currentTab
            },
        },
        methods: {
            // APIs
            getJunctions() {
                axios.get(`/api/junctions/${this.pop.id}`)
                .then((response) => {
                    this.junctions = response.data.data
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            }
        }
    }
</script>
