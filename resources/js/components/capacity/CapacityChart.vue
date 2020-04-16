<template>
    <div class="" ref="chartdiv" style="height: 400px;"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_entel from "../../constants/amChartsEntel.js";
    // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    // am4core.useTheme(am4themes_entel)
    // am4core.useTheme(am4themes_dark) 
    am4core.useTheme(am4themes_animated);
    // am4core.disposeAllCharts();

    export default {
        props : [
            // 'room',
            'lastData'
        ],
        data() {
            return {
                chart: '',
            }
        },
        mounted() {
            console.log(this.lastData)
            this.graph()
        },

        computed: {
            // lastData() {
            //     return this.lastData
            // }
        },

        watch: {
            lastData(newValue) {
                this.chart && this.chart.dispose()
                this.graph()
            }
        },

        methods : {

            async graph() {
                // Create chart instance
                let chart = am4core.create(this.$refs.chartdiv, am4charts.RadarChart);

                // Add data
                chart.data = [{
                        "category": "Empalme",
                        "value": 100 - this.lastData.junction * 100,
                        "full": 100
                    }, 
                    {
                        "category": "GGEE",
                        "value": 100 - this.lastData.generator * 100,
                        "full": 100
                    }, 
                    {
                        "category": "Plantas CC",
                        "value": 100 - this.lastData.rectifier * 100,
                        "full": 100 
                    }, 
                    {
                        "category": "Baterías",
                        "value": 100 - this.lastData.battery * 100,
                        "full": 100
                    }, 
                    {
                        "category": "Distribución",
                        "value": 100 - this.lastData.distribution * 100,
                        "full": 100
                    }, 
                    {
                        "category": "Clima",
                        "value": 100 - this.lastData.climate * 100,
                        "full": 100
                    }, 
                    {
                        "category": "Espacio",
                        "value": 100 - this.lastData.space * 100,
                        "full": 100
                    }
                ];

                // Make chart not full circle
                chart.startAngle = -90;
                chart.endAngle = 180;
                chart.innerRadius = am4core.percent(20);

                // Set number format
                chart.numberFormatter.numberFormat = "#.#'%'";

                // Create axes
                let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "category";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.grid.template.strokeOpacity = 0;
                categoryAxis.renderer.labels.template.horizontalCenter = "right";
                categoryAxis.renderer.labels.template.fontWeight = 500;
                categoryAxis.renderer.labels.template.fontSize = 14;
                categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
                    return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
                });
                categoryAxis.renderer.minGridDistance = 10;

                let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
                valueAxis.renderer.grid.template.strokeOpacity = 0;
                valueAxis.min = 0;
                valueAxis.max = 100;
                valueAxis.strictMinMax = true;
                valueAxis.renderer.labels.template.fontSize = 12;

                // Create series
                let series1 = chart.series.push(new am4charts.RadarColumnSeries());
                series1.dataFields.valueX = "full";
                series1.dataFields.categoryY = "category";
                series1.clustered = false;
                series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
                series1.columns.template.fillOpacity = 0.08;
                series1.columns.template.cornerRadiusTopLeft = 20;
                series1.columns.template.strokeWidth = 0;
                series1.columns.template.radarColumn.cornerRadius = 20;

                let series2 = chart.series.push(new am4charts.RadarColumnSeries());
                series2.dataFields.valueX = "value";
                series2.dataFields.categoryY = "category";
                series2.clustered = false;
                series2.columns.template.strokeWidth = 0;
                series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
                series2.columns.template.radarColumn.cornerRadius = 20;

                series2.columns.template.adapter.add("fill", function(fill, target) {
                    return chart.colors.getIndex(target.dataItem.index);
                });

                // Add cursor
                chart.cursor = new am4charts.RadarCursor();

                this.chart = chart;
            }
        },

        beforeDestroy(){
            this.chart && this.chart.dispose()
        },
    }  
</script>

