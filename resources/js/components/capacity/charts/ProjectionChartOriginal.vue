<script>
var moment = require('moment')
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    props : [
        'room'
    ],

    data() {
        return {
            projectionData: Object,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Empalme',
                        steppedLine: true,
                        borderColor: '#FA5252',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Grupo Electrógeno',
                        steppedLine: true,
                        borderColor: '#BE4BDB',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Planta Rect.',
                        steppedLine: true,
                        borderColor: '#7950F2',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Batería',
                        steppedLine: true,
                        borderColor: '#228BE6',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Clima',
                        steppedLine: true,
                        borderColor: '#10B885',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Distribución',
                        steppedLine: true,
                        borderColor: '#FAB006',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        label: 'Espacio',
                        steppedLine: true,
                        borderColor: '#FD7E14',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                        // pointBorderColor: 'rgb(0, 0, 0)'
                    },
                    {
                        // label: 'Proyección',
                        animation: false,
                        steppedLine: true,
                        borderColor: '#FD7E14',
                        fill: false,
                        data: [],
                        borderWidth: 1,
                        pointStyle: 'rectRot',
                        pointRadius: 2,
                    }
                ],
            },
            chartOptions: {
                legend: {
                    onHover: function(event, legendItem) {
                        // log('onHover: ' + legendItem.text);
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 1000
                },
                title: {
                    display: false,
                    text: 'Proyección'
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
                hover: {
                    mode: 'dataset',
                    intersect: true
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
                        //     if ((majorUnit === 'day' && val.hour() === 9)
                        //         || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        //         || (majorUnit === 'year' && val.month() === 0)) {
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
                        scaleLabel: {
                            display: true,
                            labelString: '% Potencia Disponible'
                        },
                        gridLines: {
                            drawBorder: false,
                            color: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']
                        },
                        ticks: {
                            min: 0,
                            max: 100,

                            // forces step size to be 5 units
                            // stepSize: 5
                        }
                    }]
                }
            }
        }
    },

    mounted() {
        this.getChartData()
    },

    watch: {
        room(val) {
            this.chartData.labels = []
            this.chartData.datasets[0].data = []
            this.chartData.datasets[1].data = []
            this.chartData.datasets[2].data = []
            this.chartData.datasets[3].data = []
            this.chartData.datasets[4].data = []
            this.chartData.datasets[5].data = []
            this.chartData.datasets[6].data = []
            this.chartData.datasets[7].data = []
            this.getChartData()
        },

        chartData(val) {
            this.$data._chart.update()
        }
    },

    methods: {
        getChartData() {
            if(this.room.id){
                axios.get(`/api/roomCapacities/${this.room.id}`)
                .then(response => {
                    if (response.data) {
                        this.projectionData = response.data
                        let j = -1

                        // All Data
                        Object.keys(this.projectionData).forEach(element => {
                            this.chartData.labels.push(moment(this.projectionData[element].created_at))
                            this.chartData.datasets[0].data.push(this.projectionData[element].junction_available * 100 / this.projectionData[element].junction_total)
                            this.chartData.datasets[1].data.push(this.projectionData[element].generator_set_available * 100 / this.projectionData[element].generator_set_total)
                            this.chartData.datasets[2].data.push(this.projectionData[element].power_rectifier_available * 100 / this.projectionData[element].power_rectifier_total)
                            this.chartData.datasets[3].data.push(this.projectionData[element].battery_available * 100 / this.projectionData[element].battery_total)
                            this.chartData.datasets[4].data.push(this.projectionData[element].climate_available * 100 / this.projectionData[element].climate_total)
                            this.chartData.datasets[5].data.push(this.projectionData[element].distribution_available * 100 / this.projectionData[element].distribution_total)
                            this.chartData.datasets[6].data.push(this.projectionData[element].surface_available * 100 / this.projectionData[element].surface_total)
                            moment(this.projectionData[element].created_at).month() == moment().month() && moment(this.projectionData[element].created_at).year() == moment().year() ? this.chartData.datasets[7].data.push(110) : this.chartData.datasets[7].data.push(-1)
                            j++
                        })

                        
                        // TODAY Data
                        if(this.projectionData[j]) {
                            let date = moment()
                            let isThisMonth = false
                            let isPreviousMonth = false
                            for (var i = 0; i <= 5; i++) {
                                // console.log(j + i)
                                isThisMonth = this.chartData.labels[j] && this.chartData.labels[j].month() == date.month()
                                isPreviousMonth = date - this.chartData.labels[j] > 0
                                
                                if (!isThisMonth && isPreviousMonth) {

                                    this.chartData.labels.push(date)
                                    this.chartData.datasets[0].data.push(this.projectionData[j].junction_available * 100 / this.projectionData[j].junction_total)
                                    this.chartData.datasets[1].data.push(this.projectionData[j].generator_set_available * 100 / this.projectionData[j].generator_set_total)
                                    this.chartData.datasets[2].data.push(this.projectionData[j].power_rectifier_available * 100 / this.projectionData[j].power_rectifier_total)
                                    this.chartData.datasets[3].data.push(this.projectionData[j].battery_available * 100 / this.projectionData[j].battery_total)
                                    this.chartData.datasets[4].data.push(this.projectionData[j].climate_available * 100 / this.projectionData[j].climate_total)
                                    this.chartData.datasets[5].data.push(this.projectionData[j].distribution_available * 100 / this.projectionData[j].distribution_total)
                                    this.chartData.datasets[6].data.push(this.projectionData[j].surface_available * 100 / this.projectionData[j].surface_total)
                                    this.chartData.datasets[7].data.push(110)
                                    // con la linea vertical
                                } else if (!isThisMonth && !isPreviousMonth){
                                    // console.log(date)
                                    this.chartData.labels.push(date)
                                    this.chartData.datasets[0].data.push(this.projectionData[j].junction_available * 100 / this.projectionData[j].junction_total)
                                    this.chartData.datasets[1].data.push(this.projectionData[j].generator_set_available * 100 / this.projectionData[j].generator_set_total)
                                    this.chartData.datasets[2].data.push(this.projectionData[j].power_rectifier_available * 100 / this.projectionData[j].power_rectifier_total)
                                    this.chartData.datasets[3].data.push(this.projectionData[j].battery_available * 100 / this.projectionData[j].battery_total)
                                    this.chartData.datasets[4].data.push(this.projectionData[j].climate_available * 100 / this.projectionData[j].climate_total)
                                    this.chartData.datasets[5].data.push(this.projectionData[j].distribution_available * 100 / this.projectionData[j].distribution_total)
                                    this.chartData.datasets[6].data.push(this.projectionData[j].surface_available * 100 / this.projectionData[j].surface_total)
                                    this.chartData.datasets[7].data.push(-1)
                                } 

                                date = moment(date).add(i, 'M')
                            }
                        }

                        // console.log(this.chartData)
                        
                        // PROJECTION Data

                    }
                    this.renderChart(this.chartData, this.chartOptions)
                })
            }
        },
    }
}  
</script>