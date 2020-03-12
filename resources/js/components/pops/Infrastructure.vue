<template>
    <section class="section">
        <div class="columns">
            <div class="column is-8">

                <section class="section" v-if="verticalStructures.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Estructuras Verticales</div>
                    </div>
                    
                    <div :class="verticalStructures.length > 4 ? '' : 'container'">
                        <div class="columns is-multiline tile is-ancestor">
                            <div class="column is-12 tile is-parent" v-for="data in verticalStructures">
                                <div class="tile is-child box" style="max-width: 550px; position: center;">
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7 title">Tipo</div>
                                            <div class="has-text-weight-semibold is-size-5 subtitle">{{ data.vertical_structure_type ? data.vertical_structure_type.vertical_structure_type : 'Sin información' }}</div>
                                            
                                            <div class="has-text-weight-light is-size-7 title">Altura</div>
                                            <div class="has-text-weight-semibold is-size-6 subtitle">
                                                {{ data.height ? data.height : 'Sin información' }}
                                                <span class="is-size-7">m</span>
                                            </div>
                                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Factor de uso</div>
                                            <div class="has-text-weight-normal is-size-6">{{ data.use_factor ? data.use_factor : 'Sin información' }}</div>
                                        </div>
                                        <div class="column has-text-centered">
                                            <img :src="'/img/vertical_structures/' + data.vertical_structure_type.image" style="max-height: 500px;"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="column" v-if="verticalStructures.length == 0">
                <section class="section">
                    <div class="box">
                        POP no tiene estructura vertical.
                    </div>
                </section>
            </div>

            <div class="column">
                <section class="section" v-if="infrastructures.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Infraestructura</div>
                    </div>
                    
                    <div :class="infrastructures.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in infrastructures">
                                <div class="tile is-child box">
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7 title">Tipo</div>
                                            <div class="has-text-weight-semibold is-size-5 subtitle">{{ data.infrastructure_type ? data.infrastructure_type.infrastructure_type : 'Sin información' }}</div>
                                            
                                            <div class="has-text-weight-light is-size-7 title">Tipo equipo</div>
                                            <!-- <div class="has-text-weight-semibold is-size-6 subtitle">{{ data.air_conditioner_brand.air_conditioner_type.air_conditioner_type }}</div> -->
                                        </div>
                                        <div class="column has-text-right">
                                            <b-icon
                                                :pack="data.infrastructure_type.icon_type" 
                                                :icon="data.infrastructure_type.icon"
                                                class="fa-3x is-right has-text-grey-lighter"
                                                style="padding: 30px;">
                                            </b-icon>
                                        </div>
                                    </div>

                                    <!-- <div class="columns">
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
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="column" v-if="infrastructures.length == 0">
                <section class="section">
                    <div class="box">
                        POP no tiene infraestructura.
                    </div>
                </section>
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
                verticalStructures: [],
                infrastructures: []
            }
        },
        mounted() {
            this.getVerticalStructures()
            this.getInfrastructures()
        },
        methods: {
            // APIs
            getVerticalStructures() {
                axios.get(`/api/verticalStructures/${this.pop.id}`)
                .then((response) => {
                    this.verticalStructures = response.data.data
                    console.log(this.verticalStructures)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },
            getInfrastructures() {
                axios.get(`/api/infrastructures/${this.pop.id}`)
                .then((response) => {
                    this.infrastructures = response.data.data
                    console.log(this.infrastructures)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Transformadores: ' + error);
                });
            }
        }
    }
</script>
