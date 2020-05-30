<template>
    <section class="section is-paddingless">

        <div class="columns tile is-ancestor is-multiline">
            <div class="column tile is-parent">
                <div class="tile is-child box">

                    <div class="columns">
                        <div class="column is-4">
                            <div class="has-text-weight-semibold is-size-4">{{ junction.electric_company ? junction.electric_company.name : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Distribuidora</div>


                            <div class="has-text-weight-semibold is-size-5" style="padding-top: 12px;">{{ junction.client_number ? junction.client_number : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Número Cliente</div>

                            <div class="has-text-weight-semibold is-size-6" 
                                style="padding-top: 12px;"
                                :class="junction.junction_number ? '' : 'has-text-info'">
                                {{ junction.junction_number ? junction.junction_number : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Número Empalme</div>

                            <div class="is-divider"></div>

                            <div class="has-text-weight-light is-size-7">Tipo Empalme</div>
                            <div class="has-text-weight-semibold is-size-6">{{ junction.junction_type ? junction.junction_type.type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Tipo Conexión</div>
                            <div class="has-text-weight-semibold is-size-6">{{ junction.junction_connection ? junction.junction_connection.connection : 'Sin información' }}</div>
                        </div>

                        <div class="column">
                            <div class="box">
                                <div class="title has-text-centered is-size-5 has-text-weight-semibold">Tablero Empalme</div>
                                <div class="is-divider" data-content="Protecciones" style="margin-bottom: 16px;"></div>
                                <!-- <div class="has-text-weight-semibold is-size-5 has-text-centered">{{ junction.latest_protection ? junction.latest_protection.nominal_a : 'Sin información' }}<span class="is-size-6">A</span></div> -->

                                <div class="level" v-if="junction.latest_protection">
                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Nominal 1</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_protection.nominal_a }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Regulada 1</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_protection.regulada_a }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Nominal 2</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_protection.nominal_b }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Regulada 2</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_protection.regulada_b }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            
                                <div class="is-divider" data-content="Mediciones" style="margin-bottom: 16px;"></div>
                                <div class="level" v-if="junction.latest_measurement">
                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Fase R</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_measurement.r_measure }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                            <div class="has-text-weight-normal is-size-6">
                                                {{ junction.latest_measurement.r_measure * 220 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Fase S</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_measurement.s_measure }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                            <div class="has-text-weight-normal is-size-6">
                                                {{ junction.latest_measurement.s_measure * 220 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="level-item">
                                        <div class="has-text-centered">
                                            <div class="is-size-7">Fase T</div>
                                            <div class="has-text-weight-semibold">
                                                {{ junction.latest_measurement.t_measure }}
                                                <span class="is-size-6">A</span>
                                            </div>
                                            <div class="has-text-weight-normal is-size-6">
                                                {{ junction.latest_measurement.t_measure * 220 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button v-if="can.update" 
                                    @click="isEditJunctionModalActive = true"
                                    class="button is-size-7 is-small is-fullwidth" 
                                    style="padding-top: 0px; padding-bottom: 0px;">
                                    Editar parámetros
                                </button>

                                <b-modal :active.sync="isEditJunctionModalActive"
                                    has-modal-card
                                    trap-focus
                                    aria-role="dialog"
                                    aria-modal >
                                    <edit-junction-parameters 
                                        :junction="junction"
                                        :user="user"
                                        :pop="pop"/>
                                </b-modal>


                            </div>
                        </div>

                        
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            
                        </div>
                        <!-- <div class="column is-6">
                            <div class="has-text-weight-light is-size-7">Credenciales de acceso</div>
                            <div class="has-text-weight-normal is-size-6">{{ junction.access_credentials ? junction.access_credentials : 'Sin credenciales' }}</div>
                        </div> -->
                    </div>

                    <div class="is-divider" data-content="Capacidades"></div>

                    <div class="level">
                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad total</div>
                                <div class="has-text-weight-semibold is-size-4">{{ capacidadTotal | numeral(0,0) }} 
                                    <span class="is-size-6">W/kW</span>
                                </div>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad utilizada</div>
                                <div class="has-text-weight-semibold is-size-4">{{ consumoTablero | numeral(0,0) }} 
                                    <span class="is-size-6">W/kW</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <b-progress 
                        :value="usagePercent * 100" 
                        size="is-large" 
                        type="is-success" 
                        show-value>
                        Capacidad utilizada: <span class="has-text-success">
                            {{ usagePercent | numeral('0.[00]%') }}
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
            EditJunctionParameters: () => import(/* webpackChunkName: "chunks/pop/power/modals/editJunction"*/'./modals/EditJunctionParameters'),
        },
        props : [
            'pop',
            'can',
            'junction',
            'user'
        ],
        data() {
            return {
                isEditJunctionModalActive: false,
            }
        },
        mounted() {
            // console.log(this.junction)
        },
        computed: {
            capacidadTotal() {
                return this.junction.latest_protection ? this.junction.latest_protection.nominal_a * 380 * 1.7320508 : 0
            },

            consumoTablero() {
                return this.junction.latest_measurement ? (this.junction.latest_measurement.r_measure + this.junction.latest_measurement.s_measure + this.junction.latest_measurement.t_measure) * 220 : 0
            },

            usagePercent() {
                return this.capacidadTotal != 0 ? this.consumoTablero / this.capacidadTotal : 0
            }
        },
        methods: {            
        }
    }
</script>
