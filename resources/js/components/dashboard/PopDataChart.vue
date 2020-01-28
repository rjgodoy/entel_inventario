<template>
    <article class="tile is-child box is-paddingless" :class="boxBackground" style="width: 100%; height: auto;">
        <div class="" ref="chartdiv" style="height: 400px;"></div>
    </article>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_entel from "@amcharts/amcharts4/themes/entel.js";
    // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // this.darkMode ? 
    // am4core.useTheme(am4themes_dark) 
    // : 
    am4core.useTheme(am4themes_entel)
    // am4core.useTheme(am4themes_animated);

    export default {
        props : [
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode',
            'chartData'
        ],
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            this.graph()
            // this.$eventBus.$on('getSitesData', this.graph)
        },

        beforeDestroy(){
            if (this.chart) {
                this.chart.dispose()
            }
            // this.$eventBus.$off('getSitesData')
        },
        watch: {
            chartData(newValue, oldValue) {
                if (this.chart) {
                    this.chart.dispose()
                }
                this.graph()
            }
        },

        methods : {
            graph() {
                // data.forEach(element => console.log(element))

                /* Create chart instance */
                var chart = am4core.create(this.$refs.chartdiv, am4charts.RadarChart)
                // let chart = am4core.create("chartdiv", am4charts.RadarChart);
                chart.hiddenState.properties.opacity = 0 // this creates initial fade-in

                chart.data = this.chartData

                chart.padding(20, 20, 20, 20);

                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "nombre";
                categoryAxis.renderer.labels.template.location = 0.5;
                categoryAxis.renderer.tooltipLocation = 0.5;

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.tooltip.disabled = true;
                valueAxis.renderer.labels.template.horizontalCenter = "left";
                valueAxis.min = 0;

                let series1 = chart.series.push(new am4charts.RadarColumnSeries());
                series1.columns.template.tooltipText = "{name}: {valueY.value}";
                series1.columns.template.width = am4core.percent(80);
                series1.name = "Opto Estación";
                series1.dataFields.categoryX = "nombre";
                series1.dataFields.valueY = "opto";
                series1.stacked = true;

                let series2 = chart.series.push(new am4charts.RadarColumnSeries());
                series2.columns.template.width = am4core.percent(80);
                series2.columns.template.tooltipText = "{name}: {valueY.value}";
                series2.name = "Radio Estación";
                series2.dataFields.categoryX = "nombre";
                series2.dataFields.valueY = "radio";
                series2.stacked = true;

                let series3 = chart.series.push(new am4charts.RadarColumnSeries());
                series3.columns.template.width = am4core.percent(80);
                series3.columns.template.tooltipText = "{name}: {valueY.value}";
                series3.name = "Repetidor";
                series3.dataFields.categoryX = "nombre";
                series3.dataFields.valueY = "repetidor";
                series3.stacked = true;

                let series4 = chart.series.push(new am4charts.RadarColumnSeries());
                series4.columns.template.width = am4core.percent(80);
                series4.columns.template.tooltipText = "{name}: {valueY.value}";
                series4.name = "Indoor";
                series4.dataFields.categoryX = "nombre";
                series4.dataFields.valueY = "indoor";
                series4.stacked = true;

                let series5 = chart.series.push(new am4charts.RadarColumnSeries());
                series5.columns.template.width = am4core.percent(80);
                series5.columns.template.tooltipText = "{name}: {valueY.value}";
                series5.name = "Outdoor";
                series5.dataFields.categoryX = "nombre";
                series5.dataFields.valueY = "outdoor";
                series5.stacked = true;

                let series6 = chart.series.push(new am4charts.RadarColumnSeries());
                series6.columns.template.width = am4core.percent(80);
                series6.columns.template.tooltipText = "{name}: {valueY.value}";
                series6.name = "Pole Site";
                series6.dataFields.categoryX = "nombre";
                series6.dataFields.valueY = "pole_site";
                series6.stacked = true;

                chart.seriesContainer.zIndex = -1;

                // chart.scrollbarX = new am4core.Scrollbar();
                // chart.scrollbarX.exportable = false;
                // chart.scrollbarY = new am4core.Scrollbar();
                // chart.scrollbarY.exportable = false;

                chart.cursor = new am4charts.RadarCursor();
                chart.cursor.xAxis = categoryAxis;
                chart.cursor.fullWidthXLine = true;
                chart.cursor.lineX.strokeOpacity = 0;
                chart.cursor.lineX.fillOpacity = 0.1;
                chart.cursor.lineX.fill = am4core.color("#000000");
                this.chart = chart
            }
        }
    }  
</script>

