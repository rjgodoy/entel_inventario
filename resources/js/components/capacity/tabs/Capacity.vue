<template>
    <div class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Dashobard</div>
        </div>

        <div class="columns">
            <!-- <div class="column is-4">
                <div class="box">
                    <div class="has-text-centered has-text-dark is-size-5" style="padding-bottom: 20px;">Estado actual (%)</div>
                    <capacity-chart
                        :actualData="actualData"
                    />
                    <polar-area-chart :width="400" :height="150"
                        v-if="loaded"
                        :chart-data="chartData"
                        :options="options"
                    ></polar-area-chart>
                </div>
            </div> -->

            <div class="column is-6">
                <div class="box is-dark is-bold">
                    <RoomLights 
                        :room=room
                        :user=user
                    />

                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                <GaugeChart 
                                    :totalEnergy="totalEnergy"
                                    :totalClimate="totalClimate"
                                    :totalSurface="totalSurface"
                                    :availableEnergy="availableEnergy"
                                    :availableClimate="availableClimate"
                                    :availableSurface="availableSurface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="column">
                <div class="box">
                    <div class="columns">
                        <div class="column is-size-5 has-text-weight-semibold has-text-left">GRAFICO DE USO</div>
                    </div>
                    <PolarChart
                        :room=room
                    />
                </div>
            </div> -->
            
        </div>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="columns">
                        <div class="column is-size-5 has-text-weight-semibold has-text-left">GRAFICO DE PROYECCIÓN</div>
                    </div>
                    <ProjectionChart
                        :room=room
                    />
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

export default {
    components: {
        RoomLights: () => import(/* webpackChunkName: "chunks/capacity/roomLights"*/'../RoomLights'),
        GaugeChart: () => import(/* webpackChunkName: "chunks/capacity/gaugeChart"*/'../charts/GaugeChart'),
        ProjectionChart: () => import(/* webpackChunkName: "chunks/capacity/charts/projectionChart"*/'../charts/ProjectionChart'),
        PolarChart: () => import(/* webpackChunkName: "chunks/capacity/charts/polarChart"*/'../charts/PolarChart')

    },

    props : [ 
        'totalEnergy',
        'totalClimate',
        'totalSurface',
        'availableEnergy',
        'availableClimate',
        'availableSurface',
        'user', 
        'room',
    ],

    data() {
        return {
            totalE: null,
            totalC: null,
            totalS: null,
            availableE: null,
            availableC: null,
            availableS: null,
        }
    },

    computed: {
        canViewClimate() {
            return this.user.roles[0].slug == 'engineer-admin' 
                || this.user.roles[0].slug == 'admin' 
                || this.user.roles[0].slug == 'developer'
                || this.user.roles[0].slug == 'super-viewer' 
                || this.user_permissions.find(element => element.slug == 'edit-air-conditioner') ? true : false
        },
    },

    mounted() {
        // 
    },

    watch: {
        // room(val) {

        // },
        totalEnergy(val){ this.totalE = val },
        totalClimate(val){ this.totalC = val },
        totalSurface(val){  this.totalS = val },
        availableEnergy(val){ this.availableE = val },
        availableClimate(val){ this.availableC = val },
        availableSurface(val){ this.availableS = val },
    },

    methods: {
        //
    }
}
</script>
