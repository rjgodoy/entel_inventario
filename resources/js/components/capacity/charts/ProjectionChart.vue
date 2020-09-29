<!-- <template>
    <div class='chart'>
        <div id='chart'></div>
    </div>
</template> -->

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
            chartdata: {
                labels: ['January', 'February'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
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
                this.chartData[0].data = response.data
                this.renderChart(this.chartdata, this.options)
                // this.graph()
            })
        },

        // graph() {
        //     console.log(this.chartData)
        //     var dates = ['x']
        //     var junctionData = ['Empalme']
        //     var generatorData = ['Generador']
        //     var rectifierData = ['Planta Rectificadora']
        //     var batteryData = ['Batería']
        //     var distributionData = ['Distribución']
        //     var climateData = ['Clima']
        //     var spaceData = ['Espacio']

        //     if (this.chartData) {
        //         Object.keys(this.chartData).forEach(element => { dates.push( this.chartData[element].created_at ) });
        //         Object.keys(this.chartData).forEach(element => { junctionData.push( this.chartData[element].junction_available / this.chartData[element].junction_total ) });
        //         Object.keys(this.chartData).forEach(element => { generatorData.push( this.chartData[element].generator_available / this.chartData[element].generator_total ) });
        //         Object.keys(this.chartData).forEach(element => { rectifierData.push( this.chartData[element].rectifier_available / this.chartData[element].rectifier_total ) });
        //         Object.keys(this.chartData).forEach(element => { batteryData.push( this.chartData[element].battery_available / this.chartData[element].battery_total ) });
        //         Object.keys(this.chartData).forEach(element => { distributionData.push( this.chartData[element].distribution_available / this.chartData[element].distribution_total ) });
        //         Object.keys(this.chartData).forEach(element => { climateData.push( this.chartData[element].climate_available / this.chartData[element].climate_total ) });
        //         Object.keys(this.chartData).forEach(element => { spaceData.push( this.chartData[element].surface_available / this.chartData[element].surface_total ) });
        //     }

        //     // this.chartData.forEach(element => { dates.push( element.created_at ) });
        //     // this.chartData.forEach(element => { junctionData.push( element.junction_available ) });
        //     // this.chartData.forEach(element => { generatorData.push( element.generator_available ) });
        //     // this.chartData.forEach(element => { rectifierData.push( element.rectifier_available ) });
        //     // this.chartData.forEach(element => { batteryData.push( element.battery_available ) });
        //     // this.chartData.forEach(element => { distributionData.push( element.distribution_available ) });
        //     // this.chartData.forEach(element => { climateData.push( element.climate_available ) });
        //     // this.chartData.forEach(element => { spaceData.push( element.surface_available ) });

        //     this.data.columns.push(dates)
        //     this.data.columns.push(junctionData)
        //     this.data.columns.push(generatorData)
        //     this.data.columns.push(rectifierData)
        //     this.data.columns.push(batteryData)
        //     this.data.columns.push(distributionData)
        //     this.data.columns.push(climateData)
        //     this.data.columns.push(spaceData)

        //     var chart = c3.generate({
        //         data: this.data,
        //         axis: this.axis,
        //         grid: this.grid,
        //         tooltip: this.tooltip,
        //         regions: this.regions,
        //         zoom: this.zoom,
        //         subchart: this.subchart,
        //         color: this.color
        //     })
        //     this.chart = chart;
        // }
    },

}  
</script>