<template>
    <!-- <article class="box" :class="boxBackground" style="width: 100%; height: 200px;"> -->
        <div class="" ref="chartdiv" style="height: 400px;"></div>
    <!-- </article> -->
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_entel from "../../constants/amChartsEntel.js";
    // import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // this.darkMode ? 
    // am4core.useTheme(am4themes_dark) 
    // : 
    // am4core.useTheme(am4themes_entel)
    // am4core.useTheme(am4themes_animated);
    // am4core.disposeAllCharts();

    export default {
        props : [
            'user',
            'room',
            'chartData'
        ],
        data() {
            return {
                chart: '',
            }
        },
        mounted() {
            this.graph()
        },

        watch: {
            chartData(newValue) {
                this.chart && this.chart.dispose()
                this.graph()
            }
        },

        methods : {

            // loadChart() {
            //     console.log('Values are changed')
            //     this.chart.invalidateRawData();
            // },

            async graph() {
                // Create chart
                let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
                chart.paddingRight = 20;

                // Add data
                this.chartData.length ? this.chartData.forEach((element) => {
                    chart.data.push({
                        "date": new Date(element.year, element.month - 1, 1, 0, 0, 0, 0),
                        "junction": element.junction * 100,
                        "generator": element.generator * 100,
                        "rectifier": element.rectifier * 100,
                        "battery": element.battery * 100,
                        "distribution": element.distribution * 100,
                        "climate": element.climate * 100,
                        "space": element.space * 100
                    })
                }) : []

                // chart.dateFormatter.inputDateFormat = "yyyy";

                let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                // dateAxis.renderer.grid.template.location = 0;
                dateAxis.renderer.minGridDistance = 50;
                dateAxis.dateFormats.setKey("month", "[font-size: 12px]MMM");
                dateAxis.periodChangeDateFormats.setKey("month", "[bold]yyyy");
                // dateAxis.baseInterval = { timeUnit: "day", count: 1 };

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.tooltip.disabled = true;

                function createSeries(field, name) {
                    let series = chart.series.push(new am4charts.StepLineSeries());
                    series.dataFields.dateX = "date";
                    series.dataFields.valueY = field;
                    series.tooltipText = "{valueY.value.formatNumber('#,###.00')}%";
                    series.strokeWidth = 3;
                    series.name = name;

                    // let segment = series.segments.template;
                    // segment.interactionsEnabled = true;

                    // let hoverState = segment.states.create("hover");
                    // hoverState.properties.strokeWidth = 3;

                    // let dimmed = segment.states.create("dimmed");
                    // dimmed.properties.stroke = am4core.color("#dadada");

                    // segment.events.on("over", function(event) {
                    //     processOver(event.target.parent.parent.parent);
                    // });

                    // segment.events.on("out", function(event) {
                    //     processOut(event.target.parent.parent.parent);
                    // });

                    return series;
                }

                createSeries("junction", "Empalme");
                createSeries("generator", "GGEE");
                createSeries("rectifier", "Fuente CC");
                createSeries("battery", "Baterías");
                createSeries("distribution", "Distribución");
                createSeries("climate", "Climatización");
                createSeries("space", "Espacio");


                chart.cursor = new am4charts.XYCursor();
                chart.cursor.xAxis = dateAxis;
                chart.cursor.fullWidthLineX = true;
                chart.cursor.lineX.strokeWidth = 0;
                chart.cursor.lineX.fill = chart.colors.getIndex(2);
                chart.cursor.lineX.fillOpacity = 0.1;

                // chart.scrollbarX = new am4core.Scrollbar();

                chart.legend = new am4charts.Legend();
                chart.legend.position = "right";
                chart.legend.scrollable = true;
                // chart.legend.itemContainers.template.events.on("over", function(event) {
                //     processOver(event.target.dataItem.dataContext);
                // })

                // chart.legend.itemContainers.template.events.on("out", function(event) {
                //     processOut(event.target.dataItem.dataContext);
                // })

                let rangeH = dateAxis.axisRanges.create();
                rangeH.date = new Date();
                rangeH.grid.stroke = chart.colors.getIndex(7);
                rangeH.grid.strokeOpacity = 0.6;
                rangeH.grid.strokeDasharray = "5,2";
                rangeH.label.text = "Histórico";
                rangeH.label.inside = true;
                // rangeH.label.rotation = 270;
                rangeH.label.horizontalCenter = "right";
                rangeH.label.verticalCenter = "top";


                let rangeP = dateAxis.axisRanges.create();
                rangeP.date = new Date();
                rangeP.endDate = chart.data[0].date;
                rangeP.axisFill.fill = chart.colors.getIndex(1);
                rangeP.axisFill.fillOpacity = 0.2;
                rangeP.label.text = "Proyección";
                rangeP.label.inside = true;
                // rangeP.label.rotation = 90;
                rangeP.label.horizontalCenter = "left";
                rangeP.label.verticalCenter = "bottom";

                function processOver(hoveredSeries) {
                    hoveredSeries.toFront();

                    hoveredSeries.segments.each(function(segment) {
                        segment.setState("hover");
                    })

                    chart.series.each(function(series) {
                        if (series != hoveredSeries) {
                            series.segments.each(function(segment) {
                                segment.setState("dimmed");
                            })
                            series.bulletsContainer.setState("dimmed");
                        }
                    });
                }

                function processOut(hoveredSeries) {
                    chart.series.each(function(series) {
                        series.segments.each(function(segment) {
                            segment.setState("default");
                        })
                        series.bulletsContainer.setState("default");
                    });
                }

                this.chart = chart;
            },

        },

        beforeDestroy(){
            // this.chart && this.chart.dispose()
        },
    }  
</script>

