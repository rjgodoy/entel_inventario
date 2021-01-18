<template>
    <div class="small">
        <line-chart
            v-if="loaded"
            :chartData="chartData"
            :options="options"/>
        <button @click="fillData()">Randomize</button>
    </div>
</template>

<script>
var moment = require('moment')
import LineChart from './LineChart.vue'

export default {
    components: {
        LineChart
    },
    props: ['unitData'],
    data () {
        return {
            loaded: false,
            chartData: null,
            options: {
                title: {
                    display: true,
                    text: 'Nivel de combustible recargas'
                },
                animation: {
                    duration: 1000
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'series',
                        offset: true,
                        ticks: {
                            major: {
                                enabled: true,
                                fontStyle: 'bold'
                            },
                            source: 'data',
                            autoSkip: true,
                            autoSkipPadding: 75,
                            maxRotation: 0,
                            sampleSize: 100
                        },
                        // afterBuildTicks: function(scale, ticks) {
                        //     var majorUnit = scale._majorUnit;
                        //     var firstTick = ticks[0];
                        //     var i, ilen, val, tick, currMajor, lastMajor;

                        //     val = moment(ticks[0].value);
                        //     if ((majorUnit === 'minute' && val.second() === 0)
                        //             || (majorUnit === 'hour' && val.minute() === 0)
                        //             || (majorUnit === 'day' && val.hour() === 9)
                        //             || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        //             || (majorUnit === 'year' && val.month() === 0)) {
                        //         firstTick.major = true;
                        //     } else {
                        //         firstTick.major = false;
                        //     }
                        //     lastMajor = val.get(majorUnit);

                        //     for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        //         tick = ticks[i];
                        //         val = moment(tick.value);
                        //         currMajor = val.get(majorUnit);
                        //         tick.major = currMajor !== lastMajor;
                        //         lastMajor = currMajor;
                        //     }
                        //     return ticks;
                        // }
                    }],
                    yAxes: [{
                        display: true,
                        id: 'y-axis-1',
                        position: 'left',
                        gridLines: {
                            drawBorder: false,
                            // color: ['black', 'positive']
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Recarga Combustible'
                        },
                        ticks: {
                            min: 0,
                            // max: 100,

                            // forces step size to be 5 units
                            // stepSize: 5
                        }
                    },
                    {
                        display: true,
                        id: 'y-axis-2',
                        position: 'right',
                        gridLines: {
                            drawBorder: false,
                            // color: ['black', 'positive']
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Nivel Combustible %'
                        },
                        ticks: {
                            min: 0,
                            max: 100,

                            // forces step size to be 5 units
                            // stepSize: 5
                        }
                    }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(tooltipItem, myData) {
                            var label = myData.datasets[tooltipItem.datasetIndex].label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += parseFloat(tooltipItem.value).toFixed(2);
                            return label;
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    mode: 'dataset',
                    intersect: true
                },
            }
        }
    },
    mounted () {
        this.fillData()
    },
    watch: {
        unitData(value) {
            this.fillData()
        }
    },
    methods: {
        fillData () {
            this.loaded = false
            if (this.unitData != null) {
                this.chartData = {
                    labels: [],
                    datasets: [
                    {
                        label: 'Recarga de combustible',
                        type: 'line',
                        lineTension: 0,
                        steppedLine: false,
                        borderColor: '#FA5252',
                        // backgroundColor: '#f87979',
                        fill: false,
                        borderWidth: 2,
                        pointStyle: 'rectRot',
                        pointRadius: 3,
                        yAxisID: 'y-axis-1',
                        data: []
                    }, {
                        label: 'Nivel de combustible %',
                        type: 'line',
                        lineTension: 0,
                        steppedLine: false,
                        borderColor: '#BE4BDB',
                        // backgroundColor: '#f87979',
                        fill: false,
                        borderWidth: 2,
                        pointStyle: 'rectRot',
                        pointRadius: 3,
                        yAxisID: 'y-axis-2',
                        data: []
                    }
                    ]
                }
                this.unitData.forEach(element => {
                    this.chartData.labels.push(element.created)
                    this.chartData.datasets[0].data.push(element.fuel_consumption)
                    this.chartData.datasets[1].data.push(element.fuel_level_percentage * 100)
                })
            }
            this.loaded = true
        }
    }
}
</script>