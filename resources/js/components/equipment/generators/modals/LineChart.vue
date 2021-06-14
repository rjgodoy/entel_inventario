<script>
var moment = require('moment')
import { Line, mixins } from 'vue-chartjs'

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: {
    	chartData: {
    		type: Object,
    		default: null
    	},
    	options: {
    		type: Object,
    		default: null
    	}
    },
    mounted () {
    	this.renderChart(this.chartData, this.options)
    },

    watch: {
    	chartData () {
    		this.renderChart(this.chartData, this.options)
    		// this.$data._chart.update()
    	}
    }
}
</script>
