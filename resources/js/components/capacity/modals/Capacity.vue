<template>
    <div class="">
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Dashobard</div>
        </div>
        <div class="columns">
            <div class="column is-4">
                <div class="box">
                    <div class="has-text-centered has-text-dark is-size-5" style="padding-bottom: 20px;">Estado actual (%)</div>
                    <capacity-chart
                        :actualData="actualData"
                    />
                    <!-- <polar-area-chart :width="400" :height="150"
                        v-if="loaded"
                        :chart-data="chartData"
                        :options="options"
                    ></polar-area-chart> -->
                </div>
            </div>

            <div class="column is-2 has-text-centered">
                <div class="has-text-centered is-size-7">GENERAL</div>
                <div style="padding: 12px; border: 1px solid #888; border-radius: 15px;">
                    <!-- <div class=""> -->
                        <div class="" style="padding-top: 10px;">
                            <font-awesome-icon 
                                icon="circle"
                                size="2x" 
                                :class="energy <= 5 || climate <= 5 || space <= 5 ? 'has-text-info' : ((energy > 5 && energy <= 10) || (climate > 5 && climate <= 10) || (space > 5 && space <= 10) ? 'has-text-warning' : 'has-text-success')"
                                />
                        </div>
                        <div class="has-text-centered">
                            <div class=" is-size-4 has-text-weight-bold" style="padding-top:12px">{{ Math.min(energy, climate) }}
                            <span class="is-size-6 has-text-weight-light">kW</span></div>
                            <p class="has-text-weight-light is-size-7">Disponibles</p>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
            
            <div class="column has-text-centered" style="padding-top: 0">
                <div class="columns" style="padding: 8px;">
                    <div class="column has-text-centered is-size-7">ENERGIA</div>
                    <div class="column has-text-centered is-size-7" v-if="canViewClimate">CLIMA</div>
                    <div class="column has-text-centered is-size-7">ESPACIO</div>
                </div>
                <div style="margin-top: -32px; padding: 12px; border: 1px solid #888; border-radius: 15px;">
                    <div class="columns">
                        <!-- ##### ENERGIA ##### -->
                        <!-- ################### -->
                        <div class="column">
                            <!-- <font-awesome-layers class="fa-md"> -->
                                <!-- <font-awesome-icon 
                                    icon="traffic-light" 
                                    class="has-text-dark" 
                                    size="3x"
                                    /> -->
                                    <!-- :transform="energy <= 5 ? 'shrink-6.6 up-25.8 left-29.75' : (energy > 5 && energy <= 10 ? 'shrink-6.6 up-13 left-29.75' : 'shrink-6.6 up-1.2 left-29.8')" -->
                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="energy <= 5 ? 'has-text-info' : (energy > 5 && energy <= 10 ? 'has-text-warning' : 'has-text-success')"
                                     
                                    />
                            <!-- </font-awesome-layers> -->
                            <!-- <font-awesome-icon
                                :icon="['fas', 'circle']"
                                size="2x"
                                class="has-text-warning"
                                /> -->
                                <div class="has-text-centered">
                                    <div class=" is-size-5 has-text-weight-bold">{{ canViewClimate ? energy : Math.min(energy, climate) }}
                                    <span class="is-size-6 has-text-weight-light">kW</span></div>
                                    <p class="has-text-weight-light is-size-7">Disponibles</p>
                                </div>
                        </div>
                    <!-- </div> -->


                        <!-- ##### CLIMA ##### -->
                        <!-- ################# -->
                        <div class="column" 
                            v-if="canViewClimate">

                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="climate <= 5 ? 'has-text-info' : (climate > 5 && climate <= 10 ? 'has-text-warning' : 'has-text-success')"
                                     
                                    />
                                <div class="has-text-centered">
                                    <div class=" is-size-5 has-text-weight-bold">{{ climate }}
                                    <span class="is-size-6 has-text-weight-light">kW</span></div>
                                    <p class="has-text-weight-light is-size-7">Disponibles</p>
                                </div>
                            <!-- </div> -->
                        </div>

                        <!-- ##### ESPACIO ##### -->
                        <!-- ################### -->
                        <div class="column">

                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="space <= 5 ? 'has-text-info' : (space > 5 && space <= 10 ? 'has-text-warning' : 'has-text-success')"
                                     
                                    />
                                <div class="has-text-centered">
                                    <div class=" is-size-5 has-text-weight-bold">{{ space }}</div>
                                    <p class="has-text-weight-light is-size-7">Disponibles</p>
                                </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
    var numeral = require('numeral');
    import PolarAreaChart from '../../../constants/chartJs/PolarAreaChart.js'
    import CapacityChart from '../CapacityChart'

    export default {
        components: {
            PolarAreaChart,
            CapacityChart
        },

        props : [ 'actualData', 'user' ],

        data() {
            return {
                energy: 15,
                climate: 5,
                space: 6,
                loaded: false,
                chartData: [],
                options: {
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Chart.js Polar Area Chart'
                    // },
                    scale: {
                        ticks: {
                            beginAtZero: true
                        },
                        reverse: false
                    },
                    animation: {
                        animateRotate: false,
                        animateScale: true
                    }
                }

            }
        },

        watch: {
            data() {
                this.fillData()
            },
        },

        computed: {
            canViewClimate() {
               return this.user.roles[0].slug == 'engineer-admin' || this.user.roles[0].slug == 'admin' || this.user.roles[0].slug == 'developer' || this.user_permissions.find(element => element.slug == 'edit-air-conditioner') ? true : false
            }
        },

        async mounted() {
            this.fillData()
        },

        methods: {
            fillData() {
                this.loaded = false

                this.chartData = {
                    labels: ['Empalme', 'Generador', 'Rectificador', 'Baterías', 'Distribucion', 'Clima', 'Espacio'],
                    datasets: [{
                        data: [
                            this.actualData.junction ? numeral((1 - this.actualData.junction) * 100).format('0,0') : null,
                            this.actualData.generator ? numeral((1 - this.actualData.generator) * 100).format('0,0') : null,
                            this.actualData.rectifier ? numeral((1 - this.actualData.rectifier) * 100).format('0,0') : null,
                            this.actualData.battery ? numeral((1 - this.actualData.battery) * 100).format('0,0') : null,
                            this.actualData.distribution ? numeral((1 - this.actualData.distribution) * 100).format('0,0') : null,
                            this.actualData.climate ? numeral((1 - this.actualData.climate) * 100).format('0,0') : null,
                            this.actualData.space ? numeral((1 - this.actualData.space) * 100).format('0,0') : null,
                        ],
                        backgroundColor: [
                            'rgba(102, 183, 220, 0.5)',
                            'rgba(104, 148, 220, 0.5)',
                            'rgba(104, 113, 220, 0.5)',
                            'rgba(118, 103, 220, 0.5)',
                            'rgba(163, 103, 220, 0.5)',
                            'rgba(199, 103, 220, 0.5)',
                            'rgba(220, 103, 206, 0.5)',
                        ],
                        // label: 'My dataset' // for legend
                    }],
                    labels: ['Empalme', 'Generador', 'Rectificador', 'Baterías', 'Distribucion', 'Clima', 'Espacio'],
                }

                this.loaded = true
            }
        }
    }
</script>
