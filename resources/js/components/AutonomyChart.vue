<template>
    <article class="">
        <div class="" ref="chartdiv"></div>
    </article>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    am4core.useTheme(am4themes_animated);
    export default {
        props : [
            'autonomy'
        ],
        data() {
            return {
                // chartData: []
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
                
                // create chart
                let chart = am4core.create(this.$refs.chartdiv, am4charts.GaugeChart);
                chart.innerRadius = -15;

                let axis = chart.xAxes.push(new am4charts.ValueAxis());
                axis.min = 0;
                axis.max = 100;
                axis.strictMinMax = true;

                let colorSet = new am4core.ColorSet();

                let gradient = new am4core.LinearGradient();
                gradient.stops.push({color:am4core.color("red")})
                gradient.stops.push({color:am4core.color("yellow")})
                gradient.stops.push({color:am4core.color("green")})

                axis.renderer.line.stroke = gradient;
                axis.renderer.line.strokeWidth = 15;
                axis.renderer.line.strokeOpacity = 1;

                axis.renderer.grid.template.disabled = true;

                let hand = chart.hands.push(new am4charts.ClockHand());
                hand.radius = am4core.percent(70);
                setTimeout(
                    function(){
                        console.log(this.autonomy.theoretical)
                        hand.showValue(48, 1000, am4core.ease.cubicOut);
                    }, 2000
                );
                    

            }
        }
    }  
</script>

