<template>
    <div>

        <div class="columns">
            <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Tecnologías</div>
            <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.totalTechnologies | numeral('0,0') }}</div>
        </div>
        
        <table class="table is-fullwidth" :class="boxBackground">
            <thead>
                <tr class="is-size-7">
                    <th class="" :class="secondaryText">{{ selectedCrm == null ? 'CRM' : (selectedZona == null ? 'Zona' : 'Comuna') }}</th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="2G">2G 1900</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="3G 900">3G 900</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="3G 1900">3G 1900</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="LTE 700">LTE 700</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="LTE 1900">LTE 1900</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="LTE 2600">LTE 2600</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="LTE 3500">LTE 3500</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr class="is-size-7" v-for="crm in this.technologyData">
                    <td class=""><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ crm.nombre }}</a></td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tec2g1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tec3g900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tec3g1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tecLTE700 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tecLTE1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tecLTE2600 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ crm.tecLTE3500 | numeral('0,0') }}</td>
                    <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ crm.tec2g1900 + crm.tec3g900 + crm.tec3g1900 + crm.tecLTE700 + crm.tecLTE1900 + crm.tecLTE2600 + crm.tecLTE3500 | numeral('0,0') }}</td>
                </tr>
                <tr class="is-size-7 has-text-weight-bold">
                    <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                    <td class="has-text-right" :class="primaryText">{{ this.total2G1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.total3G900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.total3G1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalLTE700 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalLTE1900 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalLTE2600 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalLTE3500 | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalTechnologies | numeral('0,0') }}</td>
                </tr>
            </tbody>
        </table>
        <div class="columns">
            <div class="column">
                <!-- <b-field>
                    <b-button 
                        :loading="buttonLoading ? true : false"
                        type="is-link"
                        size="is-small"
                        @click="downloadTechnologies">
                        <font-awesome-icon icon="download"/> 
                        &nbsp;&nbsp;Listado de Tecnologías
                    </b-button>
                    <b-tooltip label="Tooltip Text" position="is-right">
                        <a href="/technologies" type="button" class="button is-small is-link" data-tooltip="">
                            <font-awesome-icon icon="bars"/>
                        </a>
                    </b-tooltip>
                </b-field> -->
            </div>
            <div class="column is-right">
                <div class="is-size-7 has-text-right" style="margin-top: 10px" :class="secondaryText">Ultima actualización: {{ last_updated }}</div>
            </div>
        </div>


<!--         <chart
            :chartData="technologyData"
        ></chart> -->

    </div>
</template>

<script>
    // const RadialChart = () => ({
    //     // The component to load (should be a Promise)
    //     component: import('../RadialChart.vue'),
    //     // A component to use while the async component is loading
    //     // loading: LoadingComponent,
    //     // A component to use if the load fails
    //     // error: ErrorComponent,
    //     // Delay before showing the loading component. Default: 200ms.
    //     delay: 200,
    //     // The error component will be displayed if a timeout is
    //     // provided and exceeded. Default: Infinity.
    //     timeout: 3000
    // })

    export default {
        components: {
            // 'chart': RadialChart
        },
        props : [
            'selectedCrm',
            'selectedZona',
            'core',
            
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'last_updated'
        ],
        data() {
            return {
                technologyData: [],
                // buttonLoading: 0
            }
        },
        created() {
        },
        mounted() {   
            this.getTechnologyData()         
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.getTechnologyData()
            },
            selectedZona(newValue, oldValue) {
                this.getTechnologyData()
            },
            core(newValue, oldValue) {
                this.getTechnologyData()
            }
        },
        computed: {
            total2G1900() {
                var counter = 0
                this.technologyData.forEach(element => counter = counter + element.tec2g1900)
                return counter
            },
            total3G900() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tec3g900 })
                return counter
            },
            total3G1900() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tec3g1900 })
                return counter
            },
            totalLTE700() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tecLTE700 })
                return counter
            },
            totalLTE1900() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tecLTE1900 })
                return counter
            },
            totalLTE2600() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tecLTE2600 })
                return counter
            },
            totalLTE3500() {
                var counter = 0
                this.technologyData.forEach(function(item) { counter = counter + item.tecLTE3500 })
                return counter
            },
            totalTechnologies() {
                return this.total2G1900 + this.total3G900 + this.total3G1900 + this.total3G3500 + this.totalLTE700 + this.totalLTE1900 + this.totalLTE2600 + this.totalLTE3500
            }
        },
        methods: {
            getTechnologyData() {
                if (!this.selectedCrm) {
                    axios.get(`/api/technologyData?core=${this.core}`)
                    .then((response) => {
                        this.technologyData = response.data.data;
                        // this.totalTechnologies()
                    })
                } else if (!this.selectedZona){
                    axios.get(`/api/technologyDataCrm?crm_id=${this.selectedCrm.id}&core=${this.core}`)
                    .then((response) => {
                        this.technologyData = response.data.data;
                        // this.totalTechnologies()
                    })
                } else {
                    axios.get(`/api/technologyDataZona?zona_id=${this.selectedZona.id}&core=${this.core}`)
                    .then((response) => {
                        this.technologyData = response.data.data;
                        // this.totalTechnologies()
                    })
                }
            },
            // downloadTechnologies() {
            //     this.buttonLoading = 1

            //     axios.get(`/pop/export?core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
            //         responseType: 'blob',
            //     })
            //     .then((response) => {
            //         console.log(response.data)
            //         const blob = new Blob([response.data], { type: 'application/xls' })
            //         // const objectUrl = window.URL.createObjectURL(blob)

            //         let link = document.createElement('a')
            //         link.href = window.URL.createObjectURL(blob)
            //         link.download = 'test.xlsx'
            //         link.click()
            //         this.buttonLoading = 0
            //     })
            // }
        }
    }
</script>
