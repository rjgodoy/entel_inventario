<template>
    <div class='chart'>
        <div id='chart'></div>
    </div>
</template>

<script>
var moment = require('moment')
import c3 from 'c3'
import * as d3 from 'd3'
export default {
    props : [
        'totalEnergy',
        'totalClimate',
        'totalSurface',
        'availableEnergy',
        'availableClimate',
        'availableSurface',
    ],
    
    data() {
        return {
            pEnergy: parseFloat(this.availableEnergy * 100 / this.totalEnergy),
            pClimate: parseFloat(this.availableClimate * 100 / this.totalClimate),
            pSurface: parseFloat(this.availableSurface * 100 / this.totalSurface),
            totalE: null,
            availableE: null,
            chart: '',
            data: {
                columns: [
                    // ['Energía', 100],
                    ['Clima', 100],
                    ['Espacio', 100]
                ],
                type: 'gauge',
                // onclick: function (d, i) { console.log("onclick", d, i); },
                // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
                label: {
                    format: function(value, ratio) {
                       return value;
                    },
                    show: false // to turn off the min/max labels.
                },
                min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 100, // 100 is default
                units: ' %',
                width: 50 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    // unit: 'value', // percentage is default
                    // max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            }
        }
    },

    computed: {

    },

    mounted() {
        // this.graph()
    },

    watch: {
        totalEnergy(val) {
            this.totalE = val
            
        },

        availableEnergy(val) {
            this.availableE = val
        },
    },

    methods: {

        graph() {
            // var dates = ['x']

            // this.chartData.forEach(element => { dates.push( element.projected_at ) });

            // this.data.columns.push(dates)

            var chart = c3.generate({
                data: this.data,
                gauge: this.gauge,
                color: this.color,
                size: this.size,
            })
            
            this.chart = chart;

            // setTimeout(function () {
            //     chart.load({
            //         columns: [['Energía', this.energy]]
            //     });
            // }, 200);

            setTimeout(function () {
                chart.load({
                    columns: [['Clima', this.pClimate]]
                });
            }, 400);

            setTimeout(function () {
                chart.load({
                    columns: [['Espacio', this.pSurface]]
                });
            }, 600);
        }
    },

}  
</script>

<style scoped>
    @import './../../../../node_modules/c3/c3.min.css';
    /* .c3-region.projection {
        fill: green;
    } */

    /* .c3-xgrid-line.projection line {
        stroke: blue;
    } */
</style>