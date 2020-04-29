<template>
    <div class="">
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Proyección</div>
        </div>
        <div class="box">
            <div class="has-text-centered has-text-dark is-size-5" style="padding-bottom: 20px;">Disponibilidad de Potencia</div>
            <LineChart
                :chart_data="data"
            ></LineChart>
        </div>
        <div class="box">
            <b-field grouped group-multiline>
                <b-select v-model="defaultSortDirection">
                    <option value="asc">Default sort direction: ASC</option>
                    <option value="desc">Default sort direction: DESC</option>
                </b-select>
                <b-select v-model="perPage" :disabled="!isPaginated">
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                </b-select>
                <div class="control">
                    <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
                </div>
                <div class="control is-flex">
                    <b-switch v-model="isPaginated">Paginated</b-switch>
                </div>
                <div class="control is-flex">
                    <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
                </div>
                <b-select v-model="paginationPosition" :disabled="!isPaginated">
                    <option value="bottom">bottom pagination</option>
                    <option value="top">top pagination</option>
                    <option value="both">both</option>
                </b-select>
                <b-select v-model="sortIcon">
                    <option value="arrow-up">Arrow sort icon</option>
                    <option value="menu-up">Caret sort icon</option>
                    <option value="chevron-up">Chevron sort icon </option>
                </b-select>
                <b-select v-model="sortIconSize">
                    <option value="is-small">Small sort icon</option>
                    <option value="">Regular sort icon</option>
                    <option value="is-medium">Medium sort icon</option>
                    <option value="is-large">Large sort icon</option>
                </b-select>

                <b-tooltip label="Nueva proyección" position="is-right" type="is-dark">
                    <button class="button" @click="alert('new')">
                        <font-awesome-icon :icon="['fas', 'plus']" class="has-text-link"></font-awesome-icon>
                    </button>
                </b-tooltip>
            </b-field>

            <b-table
                :data="data"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="id"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="40" sortable numeric>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="junction" label="Empalme" sortable>
                        {{ props.row.junction }}
                    </b-table-column>

                    <b-table-column field="generator" label="Generador" sortable>
                        {{ props.row.generator }}
                    </b-table-column>

                    <b-table-column field="rectifier" label="Rectificador" sortable>
                        {{ props.row.rectifier }}
                    </b-table-column>

                    <b-table-column field="battery" label="Batterías" sortable>
                        {{ props.row.battery }}
                    </b-table-column>

                    <b-table-column field="distribution" label="Distribución" sortable>
                        {{ props.row.distribution }}
                    </b-table-column>

                    <b-table-column field="climate" label="Clima" sortable>
                        {{ props.row.climate }}
                    </b-table-column>

                    <b-table-column field="space" label="Espacio" sortable>
                        {{ props.row.space }}
                    </b-table-column>



                    <!-- <b-table-column field="user.last_name" label="Last Name" sortable>
                        {{ props.row.user.last_name }}
                    </b-table-column> -->

                    <b-table-column field="date" label="Fecha" sortable centered>
                        <span class="tag is-success">
                            {{ new Date(props.row.year, props.row.month, 1).toLocaleDateString() }}
                        </span>
                    </b-table-column>

                    <b-table-column>
                        <!-- <b-tooltip label="Tooltip right" position="Nueva proyec"> -->
                            <button class="button has-text-danger is-small">
                                <font-awesome-icon :icon="['far', 'trash-alt']" ></font-awesome-icon>
                            </button>
                        <!-- </b-tooltip> -->
                    </b-table-column>

                </template>
            </b-table>
        </div>
    </div>
    
</template>

<script>
    var numeral = require('numeral');
    import LineChart from './ProjectionChart'

    export default {
        components: {
            LineChart
        },

        props: [ 'data' ],

        data() {
            return {
                loaded: false,
                // chartData: [],
                // options: {
                //     responsive: true,
                //     // title: {
                //     //     display: false,
                //     //     text: 'Disponibilidad de Potencia',
                //     // },
                //     tooltips: {
                //         position: 'average',
                //         mode: 'index',
                //         intersect: false,
                //     },
                //     scales: {
                //         xAxes: [{
                //             gridLines: {
                //                 display: true
                //             },
                //             type: 'time',
                //             time: {
                //                 unit: 'month'
                //             },
                //             displayFormats: {
                //                 month: 'MMM'
                //             },
                //         }],
                //         yAxes: [{
                //             gridLines: {
                //                 display: true
                //             },
                //             ticks: {
                //                 min: 0,
                //                 max: 100,
                //                 stepSize: 20
                //             }
                //         }]
                //     },
                //     annotation: {
                //         annotations: [{
                //             type: 'line',
                //             // drawTime: 'afterDatasetsDraw',
                //             mode: 'vertical',
                //             scaleID: 'x-axis-0',
                //             value: new Date(),
                //             // endValue: new Date(this.data[0].year, this.data[0].month, 1),
                //             // borderColor: 'rgb(75, 192, 192)',
                //             borderWidth: 3,
                //             label: {
                //                 enabled: true,
                //                 content: 'Proyección',
                //                 position: "top",
                //                 xPadding: 10,
                //                 yPadding: 10,
                //                 xAdjust: -64,
                //                 yAdjust: 32,
                //             }
                //         },{
                //             type: 'line',
                //             // drawTime: 'afterDatasetsDraw',
                //             mode: 'vertical',
                //             scaleID: 'x-axis-0',
                //             value: new Date(),
                //             // endValue: new Date(this.data[0].year, this.data[0].month, 1),
                //             // borderColor: 'rgb(75, 192, 192)',
                //             borderWidth: 2,
                //             label: {
                //                 enabled: true,
                //                 content: 'Histórico',
                //                 position: "top",
                //                 xPadding: 10,
                //                 yPadding: 10,
                //                 xAdjust: 64,
                //                 yAdjust: 32,
                //             }
                //         }]
                //     } 
                // },

                // data,
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5
            }
        },

        watch: {
            data(newValue) {
                // console.log(newValue)
                // this.fillData()
            },
        },

        async mounted() {
            // console.log(this.data)
            // this.fillData()
        },

        methods: {
            // fillData () {
            //     this.loaded = false

            //     var labels = []; var junction = []; var generator = []; var rectifier = [];
            //     var battery = []; var distribution = []; var climate = []; var space = [];
            //     this.data.forEach(element => {
            //         var i = 0;
            //         labels.push(new Date(element.year, element.month, 1))
            //         i++
            //     })
            //     this.data.forEach(element => junction.push( numeral(element.junction * 100).format('0.0') ))
            //     this.data.forEach(element => generator.push( numeral(element.generator * 100).format('0.0') ))
            //     this.data.forEach(element => rectifier.push( numeral(element.rectifier * 100).format('0.0') ))
            //     this.data.forEach(element => battery.push( numeral(element.battery * 100).format('0.0') ))
            //     this.data.forEach(element => distribution.push( numeral(element.distribution * 100).format('0.0') ))
            //     this.data.forEach(element => climate.push( numeral(element.climate * 100).format('0.0') ))
            //     this.data.forEach(element => space.push( numeral(element.space * 100).format('0.0') ))

            //     this.chartData = {
            //         labels: labels,
            //         datasets: [
            //             {
            //                 label: 'Empalme',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(102, 183, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(102, 183, 220, 0.2)",
            //                 strokeColor: "rgba(102, 183, 220, 1)",
            //                 pointColor: "rgba(102, 183, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(102, 183, 220, 1)",
            //                 backgroundColor: "rgba(102, 183, 220, 1)",
            //                 data: junction
            //             },
            //             {
            //                 label: 'Generador',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(104, 148, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(104, 148, 220, 0.2)",
            //                 strokeColor: "rgba(104, 148, 220, 1)",
            //                 pointColor: "rgba(104, 148, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(104, 148, 220, 1)",
            //                 backgroundColor: "rgba(104, 148, 220, 1)",
            //                 data: generator
            //             },
            //             {
            //                 label: 'Planta',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(104, 113, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(104, 113, 220, 0.2)",
            //                 strokeColor: "rgba(104, 113, 220, 1)",
            //                 pointColor: "rgba(104, 113, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(104, 113, 220, 1)",
            //                 backgroundColor: "rgba(104, 113, 220, 1)",
            //                 data: rectifier
            //             },
            //             {
            //                 label: 'Baterías',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(118, 103, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(118, 103, 220, 0.2)",
            //                 strokeColor: "rgba(118, 103, 220, 1)",
            //                 pointColor: "rgba(118, 103, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(118, 103, 220, 1)",
            //                 backgroundColor: "rgba(118, 103, 220, 1)",
            //                 data: battery
            //             },
            //             {
            //                 label: 'Distribución',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(163, 103, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(163, 103, 220, 0.2)",
            //                 strokeColor: "rgba(163, 103, 220, 1)",
            //                 pointColor: "rgba(163, 103, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(163, 103, 220, 1)",
            //                 backgroundColor: "rgba(163, 103, 220, 1)",
            //                 data: distribution
            //             },
            //             {
            //                 label: 'Clima',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(199, 103, 220, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(199, 103, 220, 0.2)",
            //                 strokeColor: "rgba(199, 103, 220, 1)",
            //                 pointColor: "rgba(199, 103, 220, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(199, 103, 220, 1)",
            //                 backgroundColor: "rgba(199, 103, 220, 1)",
            //                 data: climate
            //             },
            //             {
            //                 label: 'Espacio',
            //                 steppedLine: 'before',
            //                 borderColor: 'rgba(220, 103, 206, 0.8)',
            //                 fill: false,
            //                 fillColor: "rgba(220, 103, 206, 0.2)",
            //                 strokeColor: "rgba(220, 103, 206, 1)",
            //                 pointColor: "rgba(220, 103, 206, 1)",
            //                 pointStrokeColor: "#fff",
            //                 pointHighlightFill: "#fff",
            //                 pointHighlightStroke: "rgba(220, 103, 206, 1)",
            //                 backgroundColor: "rgba(220, 103, 206, 1)",
            //                 data: space
            //             }
            //         ]
            //     }

            //     this.loaded = true
            // }
        }
    }
</script>