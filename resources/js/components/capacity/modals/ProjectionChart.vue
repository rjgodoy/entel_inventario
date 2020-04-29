<template>
    <D3LineChart :config="chart_config" :datum="chart_data" />
</template>

<script>
    import { D3LineChart } from 'vue-d3-charts'
    export default {
        components: {
            D3LineChart
        },

        props : [
            'chart_data'
        ],

        data() {
            return {
                chart_config: {
                    values: ['junction', 'generator', 'rectifier', 'battery', 'distribution', 'climate', 'space'],
                    date: {
                        key: 'projected_at',
                        inputFormat: '%Y-%m-%d',
                        outputFormat: '%Y-%m',
                    },
                    tooltip: {
                        labels: ['Empalme', 'Grupo Electrógeno', 'Planta Rectificadora', 'Batería', 'Distribución', 'Espacio']
                    },
                    axis: {
                        yFormat: '.1s',
                        yTicks: 6,
                        yTitle: 'Lorem ipsum',
                        xTicks: 5,
                    },
                    color: {
                        scheme: ['#41B882', '#222f3e'],
                        current: "#1f77b4",
                    },
                    curve: 'curveStep',
                    transition: {
                        ease: 'easeBounceOut',
                        duration: 1000
                    }
                }
            }
        },

        watch: {
            // chart_data(val) {
            //     console.log(val)
            // }
        },

        mounted() {
            console.log(this.chart_data)
        },

        beforeDestroy() {
        }
        
    }  
</script>

