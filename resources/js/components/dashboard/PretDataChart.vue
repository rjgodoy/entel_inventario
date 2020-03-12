<template>
    <article class="tile is-child box" :class="boxBackground" style="width: 100%; height: auto; margin-top: -20px;">
        <div class="" ref="chartdiv" style="height: 100%;"></div>
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
                chart: null,
                chartData: []
            }
        },
        mounted() {
            this.graph()
            this.graphData()
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
            graphData() {
                axios.get(`/api/siteStats`).then((response) => {
                    // console.log(response.data)
                    this.chartData = response.data
                })
            },

            graph() {
                var chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

                // Add data
                chart.data = this.chartData.data
                // chart.data = [ 
                //     {
                //         "month": "Julio",
                //         "new": 4,
                //         "eliminated": 2
                //     }, {
                //         "month": "Agosto",
                //         "new": 10,
                //         "eliminated": 5
                //     }, {
                //         "month": "Septiembre",
                //         "new": 3,
                //         "eliminated": 0
                //     }, {
                //         "month": "Octubre",
                //         "new": 5,
                //         "eliminated": 1
                //     }, {
                //         "month": "Noviembre",
                //         "new": 6,
                //         "eliminated": 1
                //     }, {
                //         "month": "Diciembre",
                //         "new": 3,
                //         "eliminated": 4
                //     } 
                // ];

                var title = chart.titles.create();
                title.text = "Ingresos y retiros de sitios";
                title.fontSize = 16;
                title.marginBottom = 30;
                title.align = 'center';
                title.fontWeight = 'bold'

                // Create axes
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "mes";
                // categoryAxis.title.text = "Ingresos y retiros de sitios";
                // categoryAxis.title.fontSize = 16;
                // categoryAxis.title.align = 'left'
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 5;
                categoryAxis.renderer.cellStartLocation = 0.4;
                categoryAxis.renderer.cellEndLocation = 0.6;

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                valueAxis.title.text = "Cantidad (Q)";
                valueAxis.title.fontSize = 12;

                // Create series
                function createSeries(field, name, stacked) {
                    let series = chart.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = field;
                    series.dataFields.categoryX = "mes";
                    series.name = name;
                    series.columns.template.tooltipText = "[font-size: 12px]{name}: [bold font-size: 12px]{valueY}[/]";
                    series.stacked = stacked;
                    series.columns.template.width = am4core.percent(65);
                    series.fontSize = 12;
                }

                createSeries("new", "Nuevos", false);
                // createSeries("eliminated", "Eliminados", false);

                // Add legend
                // chart.legend = new am4charts.Legend();

                this.chart = chart;
            }
        },

        beforeDestroy(){
            if (this.chart) {
                this.chart.destroy()
                this.chart.dispose()
            }
            // this.$eventBus.$off('getSitesData')
        },
    }  
</script>

