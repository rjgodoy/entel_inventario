<template>
    <div class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Dashobard</div>
        </div>

        <div class="columns">
            <div class="column is-4">
                <div class="box">
                    <div class="has-text-centered has-text-dark is-size-5" style="padding-bottom: 20px;">Estado actual (%)</div>
                    <!-- <capacity-chart
                        :actualData="actualData"
                    /> -->
                    <!-- <polar-area-chart :width="400" :height="150"
                        v-if="loaded"
                        :chart-data="chartData"
                        :options="options"
                    ></polar-area-chart> -->
                </div>
            </div>

            <div class="column box is-dark is-bold">
                <RoomLights 
                    :room=room
                    :user=user
                />

                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <GaugeChart />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faCircle);

var numeral = require('numeral');
import PolarAreaChart from '../../constants/chartJs/PolarAreaChart.js'
import CapacityChart from './CapacityChart'

import GaugeChart from './GaugeChart'

export default {
    components: {
        RoomLights: () => import(/* webpackChunkName: "chunks/capacity/roomLights"*/'./RoomLights'),
        PolarAreaChart,
        CapacityChart,
        GaugeChart
    },

    props : [ 
        // 'actualData', 
        'user', 
        'room'
    ],

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
            return this.user.roles[0].slug == 'engineer-admin' 
                || this.user.roles[0].slug == 'admin' 
                || this.user.roles[0].slug == 'developer'
                || this.user.roles[0].slug == 'super-viewer' 
                || this.user_permissions.find(element => element.slug == 'edit-air-conditioner') ? true : false
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
                        // this.actualData.junction ? numeral((1 - this.actualData.junction) * 100).format('0,0') : null,
                        // this.actualData.generator ? numeral((1 - this.actualData.generator) * 100).format('0,0') : null,
                        // this.actualData.rectifier ? numeral((1 - this.actualData.rectifier) * 100).format('0,0') : null,
                        // this.actualData.battery ? numeral((1 - this.actualData.battery) * 100).format('0,0') : null,
                        // this.actualData.distribution ? numeral((1 - this.actualData.distribution) * 100).format('0,0') : null,
                        // this.actualData.climate ? numeral((1 - this.actualData.climate) * 100).format('0,0') : null,
                        // this.actualData.space ? numeral((1 - this.actualData.space) * 100).format('0,0') : null,
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
