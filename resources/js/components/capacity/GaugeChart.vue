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
        // 'chartData'
    ],
    
    data() {
        return {
            chart: '',
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
        //        label: {
        //            format: function(value, ratio) {
        //                return value;
        //            },
        //            show: false // to turn off the min/max labels.
        //        },
        //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
        //    max: 100, // 100 is default
        //    units: ' %',
        //    width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
        //            unit: 'value', // percentage is default
        //            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            }
        }
    },

    mounted() {
        this.graph()
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

            setTimeout(function () {
                chart.load({
                    columns: [['data', 10]]
                });
            }, 1000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 50]]
                });
            }, 2000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 70]]
                });
            }, 3000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 0]]
                });
            }, 4000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 100]]
                });
            }, 5000);

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