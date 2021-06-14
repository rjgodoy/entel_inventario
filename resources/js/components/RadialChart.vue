<template>
    <!-- <div class="tile is-parent"> -->
        <!-- <article class="tile is-child box is-paddingless" :class="boxBackground" style="width: 100%; height: auto;"> -->
            <div class="" ref="chartdiv" style="height: 300px;"></div>
        <!-- </article> -->
    <!-- </div> -->
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    am4core.useTheme(am4themes_animated);
    export default {
        props : [
            'chartData',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode'
        ],
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            this.graph()
        },
        watch : {
            // parentData(newValue, oldValue) {
                // Set graph to null
                // this.chart.dispose()
                // Get device temperatures and graph
                // this.getTemperatures(newValue.device_id)
                // this.getPings(newValue.device_id)
            // }
        },
        methods : {
            graph() {
                /* Create chart instance */
                var chart = am4core.create(this.$refs.chartdiv, am4charts.RadarChart);

                /* Add data */
                chart.data = [{
                    "crm": "Norte",
                    "info": 49
                }, {
                    "crm": "Centro Norte",
                    "info": 70
                }, {
                    "crm": "Metropolitano",
                    "info": 30
                }, {
                    "crm": "Centro Sur",
                    "info": 40
                }, {
                    "crm": "Sur",
                    "info": 15
                }, {
                    "crm": "Austral",
                    "info": 80
                }];

                /* Create axes */
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "crm";

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
                valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

                /* Create and configure series */
                let series = chart.series.push(new am4charts.RadarSeries());
                series.dataFields.valueY = "info";
                series.dataFields.categoryX = "crm";
                series.name = "Información";
                series.strokeWidth = 2;

                this.chart = chart;
            }
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.destroy()
                this.chart.dispose()
            }
        }
    }  
</script>

