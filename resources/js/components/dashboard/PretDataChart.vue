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
            'secondaryText'
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
                var chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

                // Add data
                chart.data = [ {
                    "month": "Julio",
                    "new": 4,
                    "eliminated": 2
                }, {
                    "month": "Agosto",
                    "new": 10,
                    "eliminated": 5
                }, {
                    "month": "Septiembre",
                    "new": 3,
                    "eliminated": 0
                }, {
                    "month": "Octubre",
                    "new": 5,
                    "eliminated": 1
                }, {
                    "month": "Noviembre",
                    "new": 6,
                    "eliminated": 1
                }, {
                    "month": "Diciembre",
                    "new": 3,
                    "eliminated": 4
                } ];

                // Create axes
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "month";
                categoryAxis.title.text = "Ingresos y retiros de sitios";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 20;
                categoryAxis.renderer.cellStartLocation = 0.1;
                categoryAxis.renderer.cellEndLocation = 0.9;

                let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                valueAxis.title.text = "Cantidad (Q)";

                // Create series
                function createSeries(field, name, stacked) {
                    let series = chart.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.categoryX = "month";
                    series.name = name;
                    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
                    series.stacked = stacked;
                    series.columns.template.width = am4core.percent(50);
                }

                createSeries("new", "Nuevos", false);
                createSeries("eliminated", "Eliminados", false);

                // Add legend
                chart.legend = new am4charts.Legend();

                this.chart = chart;
            }
        },

        beforeDestroy(){
            if (this.chart) {
                this.chart.dispose()
            }
            // this.$eventBus.$off('getSitesData')
        },
    }  
</script>

