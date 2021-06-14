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
                        label: 'Proyección',
                        steppedLine: true,
                        borderColor: '#222',
                        fill: true,
                        data: [],
                        borderWidth: 0,
                        pointStyle: 'rectRot',
                        pointRadius: 0,
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

                        let juncDiff = 0
                        let genDiff = 0
                        let rectDiff = 0
                        let battDiff = 0
                        let climaDiff = 0
                        let distDiff = 0
                        let surfDiff = 0
                        let juncCount = 0
                        let genCount = 0
                        let rectCount = 0
                        let battCount = 0
                        let climaCount = 0
                        let distCount = 0
                        let surfCount = 0

                        let disminutionThreshold = 0.3

                        // All Data
                        Object.keys(this.projectionData).forEach(element => {
                            this.chartData.labels.push(moment(this.projectionData[element].created_at))
                            this.chartData.datasets[0].data.push(this.projectionData[element].junction_available * 100 / this.projectionData[element].junction_total)
                            juncCount = this.projectionData[element].junction_available - juncDiff >= disminutionThreshold ? juncCount + 1 : juncCount
                            juncDiff = this.projectionData[element].junction_available

                            this.chartData.datasets[1].data.push(this.projectionData[element].generator_set_available * 100 / this.projectionData[element].generator_set_total)
                            genCount = this.projectionData[element].generator_set_available - genDiff >= disminutionThreshold ? genCount + 1 : genCount
                            genDiff = this.projectionData[element].generator_set_available

                            this.chartData.datasets[2].data.push(this.projectionData[element].power_rectifier_available * 100 / this.projectionData[element].power_rectifier_total)
                            rectCount = this.projectionData[element].power_rectifier_available - rectDiff >= disminutionThreshold ? rectCount + 1 : rectCount
                            rectDiff = this.projectionData[element].power_rectifier_available

                            this.chartData.datasets[3].data.push(this.projectionData[element].battery_available * 100 / this.projectionData[element].battery_total)
                            battCount = this.projectionData[element].battery_available - battDiff >= disminutionThreshold ? battCount + 1 : battCount
                            battDiff = this.projectionData[element].battery_available

                            this.chartData.datasets[4].data.push(this.projectionData[element].climate_available * 100 / this.projectionData[element].climate_total)
                            climaCount = this.projectionData[element].climate_available - climaDiff >= disminutionThreshold ? climaCount + 1 : climaCount
                            climaDiff = this.projectionData[element].climate_available

                            this.chartData.datasets[5].data.push(this.projectionData[element].distribution_available * 100 / this.projectionData[element].distribution_total)
                            distCount = this.projectionData[element].distribution_available - distDiff >= disminutionThreshold ? distCount + 1 : distCount
                            distDiff = this.projectionData[element].distribution_available

                            this.chartData.datasets[6].data.push(this.projectionData[element].surface_available * 100 / this.projectionData[element].surface_total)
                            surfCount = this.projectionData[element].surface_available - surfDiff >= disminutionThreshold ? surfCount + 1 : surfCount
                            surfDiff = this.projectionData[element].surface_available

                            moment(this.projectionData[element].created_at).month() == moment().month() && moment(this.projectionData[element].created_at).year() == moment().year() ? this.chartData.datasets[7].data.push(110) : this.chartData.datasets[7].data.push(-1)
                            j++
                        })
                        

                        let juncLow = ((this.projectionData[0].junction_available / this.projectionData[0].junction_total) - (this.projectionData[j].junction_available / this.projectionData[j].junction_total)) * 100 / j
                        let genLow = ((this.projectionData[0].generator_set_available / this.projectionData[0].generator_set_total) - (this.projectionData[j].generator_set_available / this.projectionData[j].generator_set_total)) * 100 / j
                        let rectLow = ((this.projectionData[0].power_rectifier_available / this.projectionData[0].power_rectifier_total) - (this.projectionData[j].power_rectifier_available / this.projectionData[j].power_rectifier_total)) * 100 / j
                        let battLow = ((this.projectionData[0].battery_available / this.projectionData[0].battery_total) - (this.projectionData[j].battery_available / this.projectionData[j].battery_total)) * 100 / j
                        let climaLow = ((this.projectionData[0].climate_available / this.projectionData[0].climate_total) - (this.projectionData[j].climate_available / this.projectionData[j].climate_total)) * 100 / j
                        let distLow = ((this.projectionData[0].distribution_available / this.projectionData[0].distribution_total) - (this.projectionData[j].distribution_available / this.projectionData[j].distribution_total)) * 100 / j
                        let surfLow = ((this.projectionData[0].surface_available / this.projectionData[0].surface_total) - (this.projectionData[j].surface_available / this.projectionData[j].surface_total)) * 100 / j
                        

                        let juncAvailable = this.projectionData[j].junction_available * 100 / this.projectionData[j].junction_total
                        let genAvailable = this.projectionData[j].generator_set_available * 100 / this.projectionData[j].generator_set_total
                        let rectAvailable = this.projectionData[j].power_rectifier_available * 100 / this.projectionData[j].power_rectifier_total
                        let battAvailable = this.projectionData[j].battery_available * 100 / this.projectionData[j].battery_total
                        let climaAvailable = this.projectionData[j].climate_available * 100 / this.projectionData[j].climate_total
                        let distAvailable = this.projectionData[j].distribution_available * 100 / this.projectionData[j].distribution_total
                        let surfAvailable = this.projectionData[j].surface_available * 100 / this.projectionData[j].surface_total
                        
                        // TODAY Data
                        if(this.projectionData[j]) {
                            let date = moment()
                            let isThisMonth = false
                            let isPreviousMonth = false
                            for (var i = 0; i <= 12; i++) {
                                // console.log(j + i)
                                isThisMonth = this.chartData.labels[j] && this.chartData.labels[j].month() == date.month()
                                isPreviousMonth = date - this.chartData.labels[j+i] > 0
                                
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

                                } else if (!isThisMonth && !isPreviousMonth){

                                    this.chartData.labels.push(date)

                                    let juncDism = Math.abs(juncLow * juncCount)
                                    if (juncCount > 0 && i % Math.ceil(j/juncCount) == 0) {
                                        let ja = juncAvailable - juncDism < 0 ? 0 : juncAvailable - juncDism
                                        this.chartData.datasets[0].data.push(ja)
                                        juncAvailable = juncAvailable - juncDism
                                    } else { this.chartData.datasets[0].data.push(juncAvailable) }

                                    let genDism = Math.abs(genLow * genCount)
                                    if (genCount > 0 && i % Math.ceil(j/genCount) == 0) {
                                        let ga = genAvailable - genDism < 0 ? 0 : genAvailable - genDism
                                        this.chartData.datasets[1].data.push(ga)
                                        genAvailable = genAvailable - genDism
                                    } else { this.chartData.datasets[1].data.push(genAvailable) }

                                    let rectDism = Math.abs(rectLow * rectCount)
                                    if (rectCount > 0 && i % Math.ceil(j/rectCount) == 0) {
                                        let ra = rectAvailable - rectDism < 0 ? 0 : rectAvailable - rectDism
                                        this.chartData.datasets[2].data.push(ra)
                                        rectAvailable = rectAvailable - rectDism
                                    } else { this.chartData.datasets[2].data.push(rectAvailable) }

                                    let battDism = Math.abs(battLow * battCount)
                                    if (battCount > 0 && i % Math.ceil(j/battCount) == 0) {
                                        let ba = battAvailable - battDism < 0 ? 0 : battAvailable - battDism
                                        this.chartData.datasets[3].data.push(ba)
                                        battAvailable = battAvailable - battDism
                                    } else { this.chartData.datasets[3].data.push(battAvailable) }

                                    let climaDism = Math.abs(climaLow * climaCount)
                                    if (climaCount > 0 && i % Math.ceil(j/climaCount) == 0) {
                                        let ca = climaAvailable - climaDism < 0 ? 0 : climaAvailable - climaDism
                                        this.chartData.datasets[4].data.push(ca)
                                        climaAvailable = climaAvailable - climaDism
                                    } else { this.chartData.datasets[4].data.push(climaAvailable) }

                                    let distDism = Math.abs(distLow * distCount)
                                    if (distCount > 0 && i % Math.ceil(j/distCount) == 0) {
                                        let da = distAvailable - distDism < 0 ? 0 : distAvailable - distDism
                                        this.chartData.datasets[5].data.push(da)
                                        distAvailable = distAvailable - distDism
                                    } else { this.chartData.datasets[5].data.push(distAvailable) }

                                    let surfDism = Math.abs(surfLow * surfCount)
                                    if (surfCount > 0 && i % Math.ceil(j/surfCount) == 0) {
                                        let sa = surfAvailable - surfDism < 0 ? 0 : surfAvailable - surfDism
                                        this.chartData.datasets[6].data.push(sa)
                                        surfAvailable = surfAvailable - surfDism
                                    } else { this.chartData.datasets[6].data.push(surfAvailable) }

                                    this.chartData.datasets[7].data.push(110)
                                } 

                                date = moment(date).add(1, 'M')
                            }
                        }

                    }
                    this.renderChart(this.chartData, this.chartOptions)
                })
            }
        },
    }
}  
</script>