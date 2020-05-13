<template>
    <div>
        <div class="columns">
            <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Sitios</div>
            <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.totalSites | numeral('0,0') }}</div>
        </div>
        
        <table class="table is-fullwidth" :class="boxBackground">
            <thead>
                <tr class="is-size-7">
                    <th class="" :class="secondaryText">{{ selectedCrm == null ? 'CRM' : (selectedZona == null ? 'Zona' : 'Comuna') }}</th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Fijo">Fijo</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Móvil">Móvil</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Switch">Switch</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Phone">Phone</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr class="is-size-7" v-for="item in sitesData" :key="item.id">
                    <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                    <td class="has-text-right" :class="primaryText">{{ item.fijo | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.movil | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.switch | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.phone | numeral('0,0') }}</td>
                    <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ item.fijo + item.movil + item.switch + item.phone | numeral('0,0') }}</td>
                </tr>
                <tr class="is-size-7 has-text-weight-bold">
                    <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalFijo | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalMovil | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalSwitch | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalPhone | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalSites | numeral('0,0') }}</td>
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
                        @click="downloadSites">
                        <font-awesome-icon icon="download"/> 
                        &nbsp;&nbsp;Listado de Sitios
                    </b-button>
                    <b-tooltip label="Tooltip Text" position="is-right">
                        <a href="/sites" type="button" class="button is-small is-link" data-tooltip="">
                            <font-awesome-icon icon="bars"/>
                        </a>
                    </b-tooltip>
                </b-field> -->
            </div>
            <div class="column is-right">
                <div class="is-size-7 has-text-right" style="margin-top: 10px" :class="secondaryText">Ultima actualización: {{ last_updated }}</div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
        props : [
            'user',
            'selectedCrm',
            'selectedZona',
            'core',

            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'last_updated',
        ],
        data() {
            return {
                sitesData: [],
                buttonLoading: 0,
            }
        },
        created(){
            this.getData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.getData()
            },
            selectedZona(newValue, oldValue) {
                this.getData()
            },
            core(newValue, oldValue) {
                this.getData()
            },
        },
        computed: {
            totalFijo() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.fijo)
                return counter
            },
            totalMovil() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.movil)
                return counter
            },
            totalSwitch() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.switch)
                return counter
            },
            totalPhone() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.phone)
                return counter
            },
            totalSites() {
                return this.totalFijo + this.totalMovil + this.totalSwitch + this.totalPhone
            },
        },
        methods: {
            getData() {
                // Si no hay un CRM seleccionado
                if (!this.selectedCrm) {                             
                    axios.get(`/api/sitesData?api_token=${this.user.api_token}&core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.data;
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    }).finally(() => {
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (!this.selectedZona){
                    axios.get(`/api/sitesDataCrm?api_token=${this.user.api_token}&crm_id=${this.selectedCrm.id}&core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.data;
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    }).finally(() => {
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`/api/sitesDataZona?api_token=${this.user.api_token}&zona_id=${this.selectedZona.id}&core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.data;
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    }).finally(() => {
                        // this.$eventBus.$emit('getSitesData', this.sitesData)
                    })
                }
                
            },
            // downloadSites() {
            //     this.buttonLoading = 1

            //     axios.get(`/pop/export?api_token=${this.user.api_token}&core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
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
