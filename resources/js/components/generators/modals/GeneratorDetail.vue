<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-text-centered">
            <div class="modal-card-title">
                <div class="columns">
                    <div class="column is-2 is-vcentered">
                        <b-field>
                            <b-button class="is-default is-medium is-outlined" @click="isGeneratorDataModalActive=true">Ver detalles</b-button>
                        </b-field>
                    </div>
                    <div class="column">
                        <div class="is-size-4 has-text-weight-semibold">Datos generador {{ generator.name }}<br/>
                            <div class="is-size-5 has-text-weight-normal p-2">CRM {{ generator.g_zona.g_sector.name }} - {{ generator.g_zona.zona }} - {{ generator.g_zona.name }}</div>
                        </div>
                    </div>
                    <div class="column is-2"></div>
                </div>
            </div>
        </header>
        <section class="modal-card-body">
            <div class="columns">
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="data in boxes">
                            <div class="box p-3 has-text-left" :class="data.color">
                                <div class="is-size-7">{{ data.title }}</div>
                                <div class="is-size-5 has-text-weight-semibold">{{ data.info }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-8">
                    <GeneratorCharts :generator="generator" />
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <DetailTable :generator="generator" :last_day_data='last_day_data'/>
                </div>
            </div>
            
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>

        <b-modal :active.sync="isGeneratorDataModalActive"
            has-modal-card
            full-screen
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-data
                :generator="generator" 
                :last_day_data='last_day_data'
                />
        </b-modal>
    </div>
</template>

<script>    
    var numeral = require('numeral');
    export default {
        components: {
            GeneratorCharts: () => import(/* webpackChunkName: "chunks/generators/modals/generatorCharts"*/'./GeneratorCharts'),
            GeneratorData: () => import(/* webpackChunkName: "chunks/generators/modals/generatorData"*/'./GeneratorData'),
            DetailTable: () => import(/* webpackChunkName: "chunks/generators/modals/detailTable"*/'./DetailTable'),
        },

        props : [
            'generator',
            'last_day_data'
        ],

        data() {
            return {
                isGeneratorDataModalActive: false
            }
        },

        computed: {
            boxes() {
                return [
                    {
                        "title": "Código generador",
                        "info": this.generator.mobile_code,
                    },
                    {
                        "title": "Marca grupo",
                        "info": this.generator.g_model ? this.generator.g_model.g_brand.name : 'N/A',
                    },
                    {
                        "title": "Capacidad estanque (lts)",
                        "info": this.generator.g_model ? numeral(this.generator.g_model.g_fuel_pond.capacity).format('0,00') + ' lts' : 'N/A',
                    },
                    {
                        "title": "Horometro",
                        "info": this.last_day_data ? numeral(this.last_day_data.hourmeter).format('0,00') : 'N/A',
                    },
                    {
                        "title": "Nivel combustible (%)",
                        "info": this.last_day_data ? numeral(this.last_day_data.fuel_level_percentage * 100).format('0,0.00') + '%' : 'N/A',
                    },
                    {
                        "title": "Nivel combustible",
                        "info": this.last_day_data ? numeral(this.last_day_data.fuel_level).format('0,0.00') + ' lts' : 'N/A',
                    },
                    {
                        "title": "Promedio general HF/día",
                        "info": this.last_day_data ? numeral(this.last_day_data.avg_hourmeter_consumption).format('0,0.00') : 'N/A',
                    },
                    {
                        "title": "Promedio consumo lts./día",
                        "info": this.last_day_data ? numeral(this.last_day_data.avg_fuel_consumption).format('0,0.00') + ' lts.' : 'N/A',
                    },
                    {
                        "title": "Última medición",
                        "info": this.generator.g_last_maintance ? this.generator.g_last_maintance.created : 'N/A',
                    },
                    // {
                    //     "title": "Horas de funcionamiento entre visitas",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                    // {
                    //     "title": "Días nivel crítico",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                    // {
                    //     "title": "Fecha proxima recarga",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                    // {
                    //     "title": "Mantenciones correctivas",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                    // {
                    //     "title": "Mantenciones preventivas",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                    // {
                    //     "title": "Combustible utilizado lts. (recargas)",
                    //     "info": this.generator.mobile_code,
                    //     "color": "has-background-warning"
                    // },
                ]
            },
        },

        created() {
        },

        mounted() {
        },

        methods: {
            
        }
    }
</script>
