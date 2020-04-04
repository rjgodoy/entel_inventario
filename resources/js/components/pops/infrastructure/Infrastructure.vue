<template>
    <section class="section">
        <div class="columns">
            

            <div class="column is-6">
                <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="infrastructures.length">
                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Infraestructura</div>
                    </div>
                    
                    <div :class="infrastructures.length > 4 ? '' : 'container'">
                        <div class="tile is-ancestor">
                            <div class="tile is-parent" v-for="data in infrastructures">
                                <!-- <div class="tile is-child box">
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-light is-size-7 title">Tipo</div>
                                            <div class="has-text-weight-semibold is-size-5 subtitle">
                                                {{ data.infrastructure_type ? data.infrastructure_type.infrastructure_type : 'Sin información' }}
                                            </div>                                            
                                        </div>
                                        <div class="column has-text-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'home']" 
                                                size="3x" 
                                                class="has-text-grey-lighter" 
                                                style="opacity: 0.5;"
                                                />
                                        </div>
                                    </div>
                                </div> -->
                                <space-chart/>
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

            <div class="column">

                <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="verticalStructures.length">
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
        </div>
    </section>
</template>

<script>

    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_entel from "../../constants/amChartsEntel.js";
    // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // this.darkMode ? 
    // am4core.useTheme(am4themes_dark) 
    // : 
    // am4core.useTheme(am4themes_entel)
    am4core.useTheme(am4themes_animated);

    export default {
        components: {
            SpaceChart: () => import('./SpaceChart')
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
                infrastructures: [],

                chart: null,
                chartData: []
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
        },

        beforeDestroy(){
            if (this.chart) {
                // this.chart.destroy()
                this.chart.dispose()
            }
            // this.$eventBus.$off('getSitesData')
        },
    }
</script>
