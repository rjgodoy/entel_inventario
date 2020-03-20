<template>
    <article class="tile is-child box" :class="boxBackground" style="width: 100%; height: auto; margin-top: -20px;">
        <div class="" ref="chartdiv" style="height: 200px;"></div>
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
                axios.get(`/api/siteStats`).then((response) => {
                    // console.log(response.data)
                    this.chartData = response.data
                    this.graph()
                })
            },

            graph() {
                var chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

                // Add data
                // for(var i = 0; i < this.chartData.data.length; i++) {
                //     var date = new Date(this.chartData.data[i].year, this.chartData.data[i].year, 1)
                //     console.log(date)
                //     chart.data.push({
                //         date: date,
                //         new: Math.round(Math.random() * 50)
                //     })
                // }

                // Add data
                this.chartData.data.forEach((element) => {
                    chart.data.push({
                        date: new Date(element.year, element.month - 1, 1),
                        new: element.q_new,
                        deleted: element.q_deleted
                    })
                })


                var title = chart.titles.create();
                title.text = "Ingresos y retiros de sitios";
                title.fontSize = 16;
                title.marginBottom = 30;
                title.align = 'left';
                title.fontWeight = 'bold'

                // Create axes
                let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                dateAxis.dataFields.category = "date";
                dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");
                dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.minGridDistance = 5;
                dateAxis.renderer.cellStartLocation = 0.4;
                dateAxis.renderer.cellEndLocation = 0.6;

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                valueAxis.title.text = "Cantidad (Q)";
                valueAxis.fontSize = 12;

                // Create series
                function createSeries(field, name, stacked) {
                    let series = chart.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.dateX = "date";
                    series.name = name;
                    series.columns.template.tooltipText = "[font-size: 12px]{name}: [bold font-size: 12px]{valueY}[/]";
                    series.stacked = stacked;
                    series.columns.template.width = am4core.percent(65);
                }

                createSeries("new", "Nuevos", false);
                createSeries("deleted", "Eliminados", false);

                // Add legend
                // chart.legend = new am4charts.Legend();

                this.chart = chart;
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

