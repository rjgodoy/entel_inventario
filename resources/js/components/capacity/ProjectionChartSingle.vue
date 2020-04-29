<template>
    <canvas width="400" height="150" ref="canvas"></canvas>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        props : [
            'chartData'
        ],

        data() {
            return {
                chart: null
            }
        },

        watch: {
            chartData () {
                this.chart.update()
            }
        },

        mounted() {
            console.log(this.chartData)
            this.chart = new Chart(
                this.$refs.canvas.getContext('2d'),
                {
                    type: this.chartData.type,
                    data: this.chartData.data,
                    options: this.chartData.options
                }
            )
        },

        beforeDestroy() {
            this.chart.destroy()
        }
        
    }  
</script>

