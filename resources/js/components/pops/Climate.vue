<template>
    <section class="section">
        <div class="columns">
            <div class="column">

                <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="airConditioners.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Aires Acondicionados</div>
                    </div>
                    
                    <div :class="airConditioners.length > 4 ? '' : 'container'">
                        <div class="columns is-multiline">
                            <div class="column is-3" v-for="data in airConditioners">
                                <div class="tile is-child box">
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7 title">Marca</div>
                                            <div class="has-text-weight-semibold is-size-5 subtitle">{{ data.air_conditioner_brand.air_conditioner_brand }}</div>
                                            
                                            <div class="has-text-weight-light is-size-7 title">Tipo equipo</div>
                                            <div class="has-text-weight-semibold is-size-6 subtitle">{{ data.air_conditioner_brand.air_conditioner_type.air_conditioner_type }}</div>
                                        </div>
                                        <div class="column has-text-right">
                                            <font-awesome-icon v-if="data.air_conditioner_brand.air_conditioner_type.icon"
                                                :icon="[data.air_conditioner_brand.air_conditioner_type.icon_type, data.air_conditioner_brand.air_conditioner_type.icon]" 
                                                size="3x" 
                                                class="has-text-grey-lighter" 
                                                style="opacity: 0.5;"/>
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
                </section>

                <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="airConditioners.length == 0">
                    <div class="container">
                        <div class="box">
                            POP no tiene equipos de clima.
                        </div>
                    </div>
                </section>
            </div>
            <!-- <div class="column is-2 has-background-dark is-bold">
                <div>
                    
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'user',
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
                axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
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
