<template>
    <section class="section" style="padding-top: 0px;" v-if="junctions.length">
        <!-- <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Empalmes</div>
        </div> -->
        
        <div class="columns tile is-ancestor is-multiline">
            <div class="column tile is-parent" :class="'is-' + 12/junctions.length" v-for="data in junctions">
                <div class="tile is-child box">

                    <div class="columns">

                        <div class="column is-3">
                            <div class="has-text-weight-semibold is-size-4">{{ data.electric_company ? data.electric_company.name : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Distribuidora</div>


                            <div class="has-text-weight-semibold is-size-5" style="padding-top: 12px;">{{ data.client_number ? data.client_number : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Número Cliente</div>

                            <div class="is-divider"></div>

                            <div class="has-text-weight-light is-size-7">Tipo Empalme</div>
                            <div class="has-text-weight-semibold is-size-6">{{ data.junction_type ? data.junction_type.type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Tipo Conexión</div>
                            <div class="has-text-weight-semibold is-size-6">{{ data.junction_connection ? data.junction_connection.connection : 'Sin información' }}</div>
                        </div>

                        <div class="column is-6">
                            
                            <div class="is-divider" data-content="Protecciones"></div>

                            <!-- <div class="has-text-weight-semibold is-size-5 has-text-centered">{{ data.latest_protection ? data.latest_protection.nominal_a : 'Sin información' }}<span class="is-size-6">A</span></div> -->

                            <div class="level" v-if="data.latest_protection">
                                <div class="level-item">
                                    <div class="has-text-centered">
                                        <div class="is-size-7">Nominal 1</div>
                                        <div class="has-text-weight-semibold">
                                            {{ data.latest_protection.nominal_a }}
                                            <span class="is-size-6">A</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="level-item">
                                    <div class="has-text-centered">
                                        <div class="is-size-7">Regulada 1</div>
                                        <div class="has-text-weight-semibold">
                                            {{ data.latest_protection.regulada_a }}
                                            <span class="is-size-6">A</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="has-text-centered">
                                        <div class="is-size-7">Nominal 2</div>
                                        <div class="has-text-weight-semibold">
                                            {{ data.latest_protection.nominal_b }}
                                            <span class="is-size-6">A</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="level-item">
                                    <div class="has-text-centered">
                                        <div class="is-size-7">Regulada 2</div>
                                        <div class="has-text-weight-semibold">
                                            {{ data.latest_protection.regulada_b }}
                                            <span class="is-size-6">A</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <table class="table is-fullwidth">
                                <tr>
                                    <th class="has-text-centered is-size-6">Nominal 1</th>
                                    <th class="has-text-centered is-size-6">Regulada 1</th>
                                    <th class="has-text-centered is-size-6">Nominal 2</th>
                                    <th class="has-text-centered is-size-6">Regulada 2</th>
                                </tr>
                                <tr>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_protection" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_protection.nominal_a }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_protection" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_protection.regulada_a }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_protection" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_protection.nominal_b }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                    <td class="has-text-centered">
                                        <div  v-if="data.latest_protection" class="has-text-weight-semibold is-size-5">
                                            {{ data.latest_protection.regulada_b }} <span class="is-size-6">A</span>
                                        </div>
                                        <div v-else>Sin Información</div>
                                    </td>
                                </tr>
                            </table> -->

                            <!-- <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Mediciones</div> -->
                            <div class="is-divider" data-content="Mediciones"></div>
                            <table class="table is-fullwidth">
                                <tr>
                                    <th class="has-text-centered is-size-6">Medición R</th>
                                    <th class="has-text-centered is-size-6">Medición S</th>
                                    <th class="has-text-centered is-size-6">Medición T</th>
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

                        <div class="column is-3 has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'plug']" 
                                size="5x" 
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

                    <div class="is-divider" data-content="Capacidades"></div>

                    <div class="level">
                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad total</div>
                                <div class="has-text-weight-semibold">{{ capacidadTotal(data.latest_protection) | numeral(0,0) }} 
                                    <span class="is-size-6">W/kW</span>
                                </div>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad utilizada</div>
                                <div class="has-text-weight-semibold">{{ consumoTablero | numeral(0,0) }} 
                                    <span class="is-size-6">W/kW</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <b-progress :value="capacidadTotal(data.latest_protection) ? consumoTablero * 100 / capacidadTotal(data.latest_protection) : 0 | numeral('0.[00]')" size="is-large" type="is-success" show-value>
                        Capacidad utilizada: <span class="has-text-success">
                            {{ capacidadTotal(data.latest_protection) ? consumoTablero / capacidadTotal(data.latest_protection) : 0 | numeral('0.[00]%') }}
                        </span>
                    </b-progress>
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
            'user',
            'pop'
        ],
        data() {
            return {
                junctions: Array,
                consumoTablero: 45980
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
                axios.get(`/api/junctions/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    console.log(response.data)
                    this.junctions = response.data.data
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            capacidadTotal(latest_protection) {
                return latest_protection ? latest_protection.nominal_a * 380 * 1.7320508 : 0
            },
        }
    }
</script>
