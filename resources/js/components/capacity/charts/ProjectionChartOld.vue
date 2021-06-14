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
        'room'
    ],
    
    data() {
        return {
            chartData: Object,
            chart: '',
            data: {
                x: 'x',
                columns: [],
                types: {
                    'Empalme': 'step',
                    'Generador': 'step',
                    'Planta Rectificadora': 'step',
                    'Batería': 'step',
                    'Distribución': 'step',
                    'Clima': 'step',
                    'Espacio': 'step'
                },
                // groups: [
                //     ['Empalme', 'Generador', 'Planta Rectificadora', 'Batería', 'Distribución', 'Clima', 'Espacio']
                // ],
                // colors: {
                //     'Empalme': 'rgba(102, 183, 220, 1)',
                //     'Generador': 'rgba(104, 148, 220, 1)',
                //     'Planta Rectificadora': 'rgba(104, 113, 220, 1)',
                //     'Batería': 'rgba(118, 103, 220, 1)',
                //     'Distribución': 'rgba(163, 103, 220, 1)',
                //     'Clima': 'rgba(199, 103, 220, 1)',
                //     'Espacio': 'rgba(220, 103, 206, 1)'
                // }
            },
            axis: {
                x: {
                    label: {
                        // text: 'X Label',
                        // position: 'outer-center'
                        // inner-right : default
                        // inner-center
                        // inner-left
                        // outer-right
                        // outer-center
                        // outer-left
                    },
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                },
                y : {
                    tick: {
                        format: d3.format(".0%")
                    }
                }
            },
            grid: {
                x: {
                    show: true,
                    lines: [
                        { 
                            value: moment().format('YYYY-MM') + '-01', 
                            text: 'Proyección',
                            // class: 'projection',
                            // position: 'start'
                        },
                    ]
                },
                y: {
                    // show: true,
                    // lines: [
                        // { value: 50, text: 'Mitad' },
                    // ]
                }
            },
            tooltip: {
                format: {
                    title: function (d) { return 'Disponibilidad ' + moment(d).format('MMMM YYYY'); },
                    value: d3.format('.1%'),
                }
            },
            // regions: [
            //     { 
            //         start: moment().format('YYYY-MM') + '-01', 
            //         end: this.chartData[0].created_at,
            //         // class: 'projection' 
            //     },
            // ],
            zoom: {
                enabled: true
            },
            subchart: {
                show: true
            },
            color: {
                pattern: ['#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            }
        }
    },

    mounted() {
        this.getChartData()
    },

    methods: {
        getChartData() {
            axios.get(`/api/roomCapacities/${this.room.id}`)
            .then(response => {
                this.chartData = response.data
                this.graph()
            })
        },

        graph() {
            console.log(this.chartData)
            var dates = ['x']
            var junctionData = ['Empalme']
            var generatorData = ['Generador']
            var rectifierData = ['Planta Rectificadora']
            var batteryData = ['Batería']
            var distributionData = ['Distribución']
            var climateData = ['Clima']
            var spaceData = ['Espacio']

            if (this.chartData) {
                Object.keys(this.chartData).forEach(element => { dates.push( this.chartData[element].created_at ) });
                Object.keys(this.chartData).forEach(element => { junctionData.push( this.chartData[element].junction_available / this.chartData[element].junction_total ) });
                Object.keys(this.chartData).forEach(element => { generatorData.push( this.chartData[element].generator_available / this.chartData[element].generator_total ) });
                Object.keys(this.chartData).forEach(element => { rectifierData.push( this.chartData[element].rectifier_available / this.chartData[element].rectifier_total ) });
                Object.keys(this.chartData).forEach(element => { batteryData.push( this.chartData[element].battery_available / this.chartData[element].battery_total ) });
                Object.keys(this.chartData).forEach(element => { distributionData.push( this.chartData[element].distribution_available / this.chartData[element].distribution_total ) });
                Object.keys(this.chartData).forEach(element => { climateData.push( this.chartData[element].climate_available / this.chartData[element].climate_total ) });
                Object.keys(this.chartData).forEach(element => { spaceData.push( this.chartData[element].surface_available / this.chartData[element].surface_total ) });
            }

            // this.chartData.forEach(element => { dates.push( element.created_at ) });
            // this.chartData.forEach(element => { junctionData.push( element.junction_available ) });
            // this.chartData.forEach(element => { generatorData.push( element.generator_available ) });
            // this.chartData.forEach(element => { rectifierData.push( element.rectifier_available ) });
            // this.chartData.forEach(element => { batteryData.push( element.battery_available ) });
            // this.chartData.forEach(element => { distributionData.push( element.distribution_available ) });
            // this.chartData.forEach(element => { climateData.push( element.climate_available ) });
            // this.chartData.forEach(element => { spaceData.push( element.surface_available ) });

            this.data.columns.push(dates)
            this.data.columns.push(junctionData)
            this.data.columns.push(generatorData)
            this.data.columns.push(rectifierData)
            this.data.columns.push(batteryData)
            this.data.columns.push(distributionData)
            this.data.columns.push(climateData)
            this.data.columns.push(spaceData)

            var chart = c3.generate({
                data: this.data,
                axis: this.axis,
                grid: this.grid,
                tooltip: this.tooltip,
                regions: this.regions,
                zoom: this.zoom,
                subchart: this.subchart,
                color: this.color
            })
            this.chart = chart;
        }
    },

}  
</script>

<style scoped>
    @import './../../../../../node_modules/c3/c3.min.css';
    /* .c3-region.projection {
        fill: green;
    } */

    /* .c3-xgrid-line.projection line {
        stroke: blue;
    } */
</style>