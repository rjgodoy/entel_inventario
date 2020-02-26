<template>
    <div class="section" style="min-height: 500px; margin: auto -48px auto -48px;">
        <!-- <div class="has-text-weight-semibold is-size-4 has-text-centered">PODER</div> -->

        <section class="section has-background-white" v-if="airConditioners.length">
            <div style="margin: -24px auto -40px auto;">
                <div class="field">
                    <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Aires Acondicionados</div>
                </div>
                
                <div :class="airConditioners.length > 4 ? '' : 'container'">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-tablet" v-for="data in airConditioners">
                            <div class="tile is-child box" style="max-width: 350px; position: center;">
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7 title">Marca</div>
                                        <div class="has-text-weight-semibold is-size-5 subtitle">{{ data.air_conditioner_brand.air_conditioner_brand }}</div>
                                        
                                        <div class="has-text-weight-light is-size-7 title">Tipo equipo</div>
                                        <div class="has-text-weight-semibold is-size-6 subtitle">{{ data.air_conditioner_brand.air_conditioner_type.air_conditioner_type }}</div>
                                    </div>
                                    <div class="column has-text-right">
                                        <b-icon
                                            v-if="data.air_conditioner_brand.air_conditioner_type.icon" 
                                            :pack="data.air_conditioner_brand.air_conditioner_type.icon_type" 
                                            :icon="data.air_conditioner_brand.air_conditioner_type.icon" 
                                            class="fa-3x is-right has-text-grey-lighter"
                                            style="padding: 30px;">
                                        </b-icon>
                                        <!-- <font-awesome-icon 
                                            v-if="data.air_conditioner_brand.air_conditioner_type.icon"
                                            :icon="[data.air_conditioner_brand.air_conditioner_type.icon_type, data.air_conditioner_brand.air_conditioner_type.icon]"
                                            size="3x" 
                                            class="is-right has-text-grey-lighter"
                                        /> -->
                                    </div>
                                </div>

                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Capacidad</div>
                                        <div class="has-text-weight-normal is-size-6">{{ data.capacity | numeral('0,0') }} <span class="is-size-7">BTU</span></div>
                                    </div>
                                    <div class="column has-text-right">
                                        <div class="has-text-weight-light is-size-7">Nº Serie</div>
                                        <div class="has-text-weight-normal is-size-7">{{ data.serial_number ? data.serial_number : 'Sin Información' }}</div>
                                        <div class="has-text-weight-light is-size-7">Año instalación</div>
                                        <div class="has-text-weight-normal is-size-7">{{ data.installed_at ? data.installed_at : 'Sin Información' }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" v-if="airConditioners.length == 0">
            <div class="container">
                <div class="box">
                    POP no tiene equipos de clima.
                </div>
            </div>
        </section>
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
                airConditioners: []   
            }
        },
        mounted() {
            this.getAirConditioners()
        },
        methods: {
            // APIs
            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}`)
                .then((response) => {
                    this.airConditioners = response.data.data
                    console.log(this.airConditioners)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            }
        }
    }
</script>
