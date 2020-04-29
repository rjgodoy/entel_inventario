<template>
    <div class="box">
        <div class="has-text-centered has-text-dark is-size-5">Disponibilidad de Potencia</div>
        <projection-chart
            :chartData="chartData"
        />
    </div>
</template>

<script>    
    export default {
        components: {
            ProjectionChart: () => import('./ProjectionChart'),
        },
        props : [
            'data'
        ],

        computed: {
            chartData() {
                var labels = []; var junction = []; var generator = []; var rectifier = [];
                var battery = []; var distribution = []; var climate = []; var space = [];
                this.data.forEach(element => {
                    var i = 0;
                    labels.push(new Date(element.year, element.month, 1))
                    i++
                })
                this.data.forEach(element => junction.push(element.junction * 100))
                this.data.forEach(element => generator.push(element.generator * 100))
                this.data.forEach(element => rectifier.push(element.rectifier * 100))
                this.data.forEach(element => battery.push(element.battery * 100))
                this.data.forEach(element => distribution.push(element.distribution * 100))
                this.data.forEach(element => climate.push(element.climate * 100))
                this.data.forEach(element => space.push(element.space * 100))

                return {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Empalme',
                                steppedLine: 'before',
                                borderColor: 'rgba(102, 183, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(102, 183, 220, 0.2)",
                                strokeColor: "rgba(102, 183, 220, 1)",
                                pointColor: "rgba(102, 183, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(102, 183, 220, 1)",
                                data: junction
                            },
                            {
                                label: 'Generador',
                                steppedLine: 'before',
                                borderColor: 'rgba(104, 148, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(104, 148, 220, 0.2)",
                                strokeColor: "rgba(104, 148, 220, 1)",
                                pointColor: "rgba(104, 148, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(104, 148, 220, 1)",
                                data: generator
                            },
                            {
                                label: 'Planta',
                                steppedLine: 'before',
                                borderColor: 'rgba(104, 113, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(104, 113, 220, 0.2)",
                                strokeColor: "rgba(104, 113, 220, 1)",
                                pointColor: "rgba(104, 113, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(104, 113, 220, 1)",
                                data: rectifier
                            },
                            {
                                label: 'Baterías',
                                steppedLine: 'before',
                                borderColor: 'rgba(118, 103, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(118, 103, 220, 0.2)",
                                strokeColor: "rgba(118, 103, 220, 1)",
                                pointColor: "rgba(118, 103, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(118, 103, 220, 1)",
                                data: battery
                            },
                            {
                                label: 'Distribución',
                                steppedLine: 'before',
                                borderColor: 'rgba(163, 103, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(163, 103, 220, 0.2)",
                                strokeColor: "rgba(163, 103, 220, 1)",
                                pointColor: "rgba(163, 103, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(163, 103, 220, 1)",
                                data: distribution
                            },
                            {
                                label: 'Clima',
                                steppedLine: 'before',
                                borderColor: 'rgba(199, 103, 220, 0.8)',
                                fill: false,
                                fillColor: "rgba(199, 103, 220, 0.2)",
                                strokeColor: "rgba(199, 103, 220, 1)",
                                pointColor: "rgba(199, 103, 220, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(199, 103, 220, 1)",
                                data: climate
                            },
                            {
                                label: 'Espacio',
                                steppedLine: 'before',
                                borderColor: 'rgba(220, 103, 206, 0.8)',
                                fill: false,
                                fillColor: "rgba(220, 103, 206, 0.2)",
                                strokeColor: "rgba(220, 103, 206, 1)",
                                pointColor: "rgba(220, 103, 206, 1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220, 103, 206, 1)",
                                data: space
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        // title: {
                        //     display: false,
                        //     text: 'Disponibilidad de Potencia',
                        // },
                        tooltips: {
                            position: 'average',
                            mode: 'index',
                            intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: true
                                },
                                type: 'time',
                                time: {
                                    unit: 'month'
                                },
                                displayFormats: {
                                    month: 'MMM'
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: true
                                },
                                ticks: {
                                    min: 0,
                                    max: 100,
                                    stepSize: 20
                                }
                            }]
                        }
                    }
                }
            }
        }

    }
</script>
