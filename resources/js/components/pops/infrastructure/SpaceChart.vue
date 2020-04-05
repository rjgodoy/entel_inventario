<template>
    <article class="tile is-child box" :class="boxBackground" style="padding: 10px;">
        <div class="" ref="chartdiv" style="height: 200px; width: 100%"></div>
    </article>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_entel from "../../../constants/amChartsEntel.js";
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
                // axios.get(`/api/siteStats`).then((response) => {
                    // console.log(response.data)
                    // this.chartData = response.data
                    this.graph()
                // })
            },

            graph() {
                // Chart
                let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
                chart.hiddenState.properties.opacity = 0;
                chart.colors.step = 2;

                // X axis
                let xAxis = chart.xAxes.push( new am4charts.CategoryAxis() );
                xAxis.dataFields.category = "x";
                xAxis.renderer.grid.template.location = 0;
                xAxis.renderer.minGridDistance = 10;
                xAxis.renderer.labels.template.disabled = true;
                xAxis.data = [{ x: "1" }, { x: "2" }, { x: "3" }, { x: "4" }, { x: "5" }, { x: "6" }, { x: "7" }, { x: "8" }, { x: "9" }, { x: "10" }];

                // Y axis
                let yAxis = chart.yAxes.push( new am4charts.CategoryAxis() );
                yAxis.renderer.labels.template.disabled = true;
                yAxis.renderer.grid.template.location = 0;
                yAxis.renderer.minGridDistance = 10;
                yAxis.dataFields.category = "y";
                yAxis.data = [{ y: "1" }, { y: "2" }, { y: "3" }, { y: "4" }, { y: "5" }, { y: "6" }, { y: "7" }, { y: "8" }, { y: "9" }, { y: "10" }];

                // Legend
                chart.legend = new am4charts.Legend();

                // Create series
                function createSeries(name) {
                    let series = chart.series.push( new am4charts.ColumnSeries() );
                    series.dataFields.categoryX = "x";
                    series.dataFields.categoryY = "y";
                    series.sequencedInterpolation = true;
                    series.defaultState.transitionDuration = 3000;
                    series.name = name;

                    // Set up column appearance
                    let column = series.columns.template;
                    column.strokeWidth = 1;
                    column.strokeOpacity = 1;
                    column.stroke = am4core.color( "#ffffff" );
                    column.width = am4core.percent( 100 );
                    column.height = am4core.percent( 100 );
                    //column.column.cornerRadius(6, 6, 6, 6);

                    return series;
                }

                let series1 = createSeries("Plantas Rectificadoras");
                series1.data = [
                    { x: "1", y: "1" },
                    { x: "1", y: "2" },
                    { x: "1", y: "3" },
                    { x: "1", y: "4" },
                    { x: "1", y: "5" },
                    { x: "1", y: "6" },
                    { x: "1", y: "7" },
                    { x: "1", y: "8" },
                    { x: "1", y: "9" },
                    { x: "1", y: "10" },

                    { x: "2", y: "1" },
                    { x: "2", y: "2" },
                    { x: "2", y: "3" },
                    { x: "2", y: "4" },
                    { x: "2", y: "5" },
                    { x: "2", y: "6" },
                    { x: "2", y: "7" },
                    { x: "2", y: "8" },
                    { x: "2", y: "9" },
                    { x: "2", y: "10" },

                    { x: "3", y: "1" },
                    { x: "3", y: "2" },
                    { x: "3", y: "3" },
                ];

                let series2 = createSeries("Republican");
                series2.data = [
                    { x: "3", y: "4" },
                    { x: "3", y: "5" },
                    { x: "3", y: "6" },
                    { x: "3", y: "7" },
                    { x: "3", y: "8" },
                    { x: "3", y: "9" },
                    { x: "3", y: "10" },

                    { x: "4", y: "1" },
                    { x: "4", y: "2" },
                    { x: "4", y: "3" },
                    { x: "4", y: "4" },
                    { x: "4", y: "5" },
                    { x: "4", y: "6" },
                    { x: "4", y: "7" },
                    { x: "4", y: "8" },
                    { x: "4", y: "9" },
                    { x: "4", y: "10" },

                    { x: "5", y: "1" },
                    { x: "5", y: "2" },
                    { x: "5", y: "3" },
                    { x: "5", y: "4" },
                    { x: "5", y: "5" },
                    { x: "5", y: "6" },
                ];

                let series3 = createSeries("Libertarian");
                series3.data = [
                    { x: "5", y: "7" },
                    { x: "5", y: "8" },
                    { x: "5", y: "9" },
                    { x: "5", y: "10" },

                    { x: "6", y: "1" },
                    { x: "6", y: "2" },
                    { x: "6", y: "3" },
                    { x: "6", y: "4" },
                    { x: "6", y: "5" },
                    { x: "6", y: "6" },
                    { x: "6", y: "7" },
                    { x: "6", y: "8" },
                    { x: "6", y: "9" },
                    { x: "6", y: "10" },

                    { x: "7", y: "1" },
                    { x: "7", y: "2" },
                    { x: "7", y: "3" },
                    { x: "7", y: "4" },
                    { x: "7", y: "5" },
                    { x: "7", y: "6" },
                    { x: "7", y: "7" },
                    { x: "7", y: "8" },
                    { x: "7", y: "9" },
                ];


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

