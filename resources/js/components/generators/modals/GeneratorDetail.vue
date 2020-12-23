<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-text-centered">
            <div class="modal-card-title">
                <div class="is-size-4 has-text-weight-semibold">Datos generador {{ generator.name }}<br/>
                    <div class="is-size-5 has-text-weight-normal p-2">CRM {{ generator.g_zone.g_sector.name }} - {{ generator.g_zone.name }}</div>
                </div>
            </div>
        </header>
        <section class="modal-card-body">
            <div class="columns">
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="data in boxes">
                            <div class="box p-3" :class="data.color">
                                <div class="is-size-7">{{ data.title }}</div>
                                <div class="is-size-5 has-text-weight-semibold">{{ data.info }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-8">
                    
                </div>
            </div>
            
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    var numeral = require('numeral');
    export default {
        components: {
            // AirConditioner: () => import(/* webpackChunkName: "chunks/pop/climate/airConditioner"*/'../../pop/climate/AirConditioner')
        },
        props : [
            'generator',
            'last_data',
            'last_day_data',
            'hourmeter_consumption',
            'fuel_consumption',            
            'user'
        ],
        data() {
            return {
                boxes: [
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
                        "info": this.generator.g_model ? numeral(this.generator.g_model.g_fuel_pond.capacity).format('0,0') + ' lts' : 'N/A',
                    },
                    {
                        "title": "Horometro",
                        "info": this.last_data ? numeral(this.last_data.hourmeter).format('0,0') : 'N/A',
                    },
                    {
                        "title": "Nivel combustible (%)",
                        "info": this.last_data ? this.last_data.fuel_level_percentage * 100 + '%' : 'N/A',
                    },
                    {
                        "title": "Nivel combustible",
                        "info": this.last_data ? numeral(this.last_data.fuel_level).format('0,0.0') + ' lts' : 'N/A',
                    },
                    {
                        "title": "Promedio general HF/día",
                        "info": this.hourmeter_consumption ? numeral(this.hourmeter_consumption).format('0,0.00') : 'N/A',
                    },
                    {
                        "title": "Promedio consumo lts./día",
                        "info": this.fuel_consumption ? this.fuel_consumption : 'N/A',
                    },
                    {
                        "title": "Última medición",
                        "info": this.generator.g_last_maintance ? this.generator.g_last_maintance.created : 'N/A',
                    },
                    {
                        "title": "Horas de funcionamiento entre visitas",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                    {
                        "title": "Días nivel crítico",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                    {
                        "title": "Fecha proxima recarga",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                    {
                        "title": "Mantenciones correctivas",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                    {
                        "title": "Mantenciones preventivas",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                    {
                        "title": "Combustible utilizado lts. (recargas)",
                        "info": this.generator.mobile_code,
                        "color": "has-background-warning"
                    },
                ]
                
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            
        }
    }
</script>
