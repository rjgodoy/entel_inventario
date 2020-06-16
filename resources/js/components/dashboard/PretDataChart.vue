<template>
    <article class="tile is-child box" :class="boxBackground">
        <!-- <div class='chart'> -->
            <div id='chart' class="has-text-dark" style="height: 200px; width: 100%"></div>
        <!-- </div> -->
    </article>
</template>

<script>
var moment = require('moment')
import c3 from 'c3'
import * as d3 from 'd3'
export default {
    props : [
        'user',
        'bodyBackground',
        'boxBackground',
        'primaryText',
        'secondaryText'
    ],
    data() {
        return {
            chart: '',
            chartData: Array,
            data: {
                x: 'x',
                columns: [],
                type: 'bar',
                // groups: [
                //     ['Nuevos', 'Generador', 'Planta Rectificadora', 'Batería', 'Distribución', 'Clima', 'Espacio']
                // ],
                colors: {
                    'Nuevos': '#005cff',
                    'Eliminados': '#ff3c00',
                //     'Planta Rectificadora': 'rgba(104, 113, 220, 1)',
                //     'Batería': 'rgba(118, 103, 220, 1)',
                //     'Distribución': 'rgba(163, 103, 220, 1)',
                //     'Clima': 'rgba(199, 103, 220, 1)',
                //     'Espacio': 'rgba(220, 103, 206, 1)'
                }
            },
            bar: {
                width: {
                    ratio: 0.5 
                }
            },
            axis: {
                x: {
                    color: '#ffffff',
            //         label: {
            //             // text: 'X Label',
            //             // position: 'outer-center'
            //             // inner-right : default
            //             // inner-center
            //             // inner-left
            //             // outer-right
            //             // outer-center
            //             // outer-left
            //         },
                    type: 'timeseries',
                    tick: {
                        format: '%B'
                    }
                },
            //     y : {
            //         tick: {
            //             format: d3.format(".0%")
            //         }
            //     }
            },
            // grid: {
            //     x: {
            //         show: true,
            //         lines: [
            //             { 
            //                 value: moment().format('YYYY-MM') + '-01', 
            //                 text: 'Proyección',
            //                 // class: 'projection',
            //                 // position: 'start'
            //             },
            //         ]
            //     },
            //     y: {
            //         // show: true,
            //         // lines: [
            //             // { value: 50, text: 'Mitad' },
            //         // ]
            //     }
            // },
            tooltip: {
                format: {
                    title: function (d) { return 'Disponibilidad ' + moment(d).format('MMMM YYYY'); },
                    // value: d3.format('.1'),
                }
            }
        }
    },
    mounted() {
        this.graphData()
        // this.graph()
    },

    watch: {
        // chartData(val) {
        //     this.graph()
        // }
    },

    methods : {
        graphData() {
            axios.get(`/api/siteStats?api_token=${this.user.api_token}`)
            .then((response) => {
                console.log(response.data)
                this.chartData = response.data.data
                this.graph()
            })
        },

        graph() {
            var dates = ['x']
            var news = ['Nuevos']
            var deleted = ['Eliminados']

            this.chartData.forEach(element => { 
                var d = new Date(element.year, element.month - 1, 1)                
                dates.push( d ) 
            });
            this.chartData.forEach(element => { news.push( element.q_new ) });
            this.chartData.forEach(element => { deleted.push( element.q_deleted ) });

            this.data.columns.push(dates)
            this.data.columns.push(news)
            this.data.columns.push(deleted)

            var chart = c3.generate({
                data: this.data,
                axis: this.axis,
                // grid: this.grid,
                tooltip: this.tooltip,
            })
            this.chart = chart;
        }
    },

}  
</script>

<style scoped>
    @import './../../../../node_modules/c3/c3.min.css';

    /* .c3 .c3-axis.c3-axis-x g, */
    .c3 .c3-axis-x path,
    .c3 .c3-axis-x line {
        stroke: white;
    }
    /* .c3 .c3-axis.c3-axis-y g, */
    .c3 .c3-axis-y path,
    .c3 .c3-axis-y line {
        stroke: white;
    }
</style>

