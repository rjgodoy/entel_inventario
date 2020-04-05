<template>
    <article class="tile is-child box" :class="boxBackground" style="padding: 10px;">
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
                chart: null,
                chartData: []
            }
        },
        mounted() {
            this.graphData()
            // this.$eventBus.$on('getSitesData', this.graph)
        },

        // watch: {
        //     chartData(newValue, oldValue) {
        //         // if (this.chart) {
        //         //     this.chart.dispose()
        //         // }
        //         this.graph()
        //     }
        // },

        methods : {
            graphData() {
                axios.get(`/api/siteStats?api_token=${this.user.api_token}`).then((response) => {
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
                title.text = "Ingresos y retiros de sitios";
                title.fontSize = 16;
                title.marginBottom = 30;
                title.align = 'left';
                title.fontWeight = 'bold'

                // Create axes
                var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.labels.template.location = 0;
                dateAxis.renderer.minGridDistance = 30;
                dateAxis.renderer.cellStartLocation = 7;
                dateAxis.renderer.cellEndLocation = 23;
                dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
                dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");

                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

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





                

                // // Create axes
                // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                // dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
                // dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");
                // dateAxis.renderer.grid.template.location = 0;
                // dateAxis.renderer.labels.template.location = 0.5;
                // dateAxis.renderer.minGridDistance = 30;
                // dateAxis.renderer.cellStartLocation = 10;
                // dateAxis.renderer.cellEndLocation = 20;


                // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                // valueAxis.min = 0;
                // valueAxis.title.text = "Cantidad (Q)";
                // valueAxis.fontSize = 12;

                // // Create series
                // function createSeries(field, name) {
                //     let series = chart.series.push(new am4charts.ColumnSeries());
                //     series.dataFields.valueY = field;
                //     series.dataFields.dateX = "date";
                //     series.name = name;
                //     series.columns.template.tooltipText = "[font-size: 12px]{name}: [bold font-size: 12px]{valueY}[/]";
                //     series.strokeWidth = 2;
                //     // series.columns.template.width = am4core.percent(50);
                // }

                // createSeries("new", "Nuevos");
                // createSeries("deleted", "Eliminados");

                // Add legend
                // chart.legend = new am4charts.Legend();

                // this.chart = chart;
            }
        },

        beforeDestroy(){
            if (this.chart) {
                // this.chart.destroy()
                this.chart.dispose()
            }
            // this.$eventBus.$off('getSitesData')
        },
    }  
</script>

