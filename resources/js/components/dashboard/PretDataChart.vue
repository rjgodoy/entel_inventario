<template>
    <article class="tile is-child box is-bold is-dark" :class="boxBackground" style="padding: 10px;">
        <div class="" ref="chartdiv" style="height: 200px; width: 100%"></div>
    </article>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_entel from "../../constants/amChartsEntel.js";
    // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // this.darkMode ? 
    // am4core.useTheme(am4themes_dark) 
    // : 
    am4core.useTheme(am4themes_entel)
    // am4core.useTheme(am4themes_animated);
    am4core.disposeAllCharts();

    export default {
        props : [
            'user',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText'
        ],
        data() {
            return {
                chart: '',
                chartData: Array
            }
        },
        mounted() {
            // this.graph()
            this.graphData()
            // this.$eventBus.$on('getSitesData', this.graph)
        },

        watch: {
            chartData(newValue) {
                this.chart && this.chart.dispose()
                this.graph()
            }
        },

        methods : {
            graphData() {
                axios.get(`/api/siteStats?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
                    this.chartData = response.data
                    this.graph()
                })
            },

            graph() {
                // Create chart instance
                var chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

                // Add data
                this.chartData.data.forEach((element) => {
                    chart.data.push({
                        "date": new Date(element.year, element.month - 1, 1),
                        "new": element.q_new,
                        "deleted": element.q_deleted
                    })
                })

                var title = chart.titles.create();
                title.text = "Ingresos y retiros de Sitios";
                title.fontSize = 20;
                title.marginBottom = 30;
                title.fill = am4core.color("white");
                title.align = 'center';
                title.fontWeight = 'bold'

                // Create axes
                var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.labels.template.location = 0;
                dateAxis.renderer.labels.template.fill = am4core.color("white");
                dateAxis.renderer.minGridDistance = 30;
                dateAxis.renderer.cellStartLocation = 7;
                dateAxis.renderer.cellEndLocation = 23;
                dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
                dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");

                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.renderer.labels.template.fill = am4core.color("white");

                // Create series
                function createSeries(field, name) {
                    var series = chart.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = field; 
                    series.dataFields.dateX = "date"; 
                    series.name = name;   
                    series.tooltipText = "{name}: [b]{valueY}[/]";
                    series.strokeWidth = 2;
                }

                createSeries("new", "Nuevos");
                createSeries("deleted", "Eliminados");

                chart.cursor = new am4charts.XYCursor();
                // chart.scrollbarX = new am4core.Scrollbar();

                // Add legend
                // chart.legend = new am4charts.Legend();

                this.chart = chart;
            }
        },

        beforeDestroy(){
            this.chart && this.chart.dispose()
        },
    }  
</script>

