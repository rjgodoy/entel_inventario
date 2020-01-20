<template>
    <!-- <div class="tile is-parent"> -->
        <article class="tile is-child box" :class="boxBackground" style="overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Sitios</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>
            
            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Fijo">Fijo</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Móvil">Móvil</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Switch">Switch</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Phone">Phone</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.data">
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
                        <td class="has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="columns">
                <div class="column">
                    <b-field>
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
                    </b-field>
                </div>
                <div class="column is-right">
                    <div class="is-size-7 has-text-right" style="margin-top: 10px" :class="secondaryText">Ultima actualización: {{ last_updated }}</div>
                </div>
            </div>
        </article>
    <!-- </div> -->
</template>

<script>
    // import EventBus from "../../constants/event-bus";
    export default {
        props : [
            'selectedCrm',
            'selectedZona',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'core',
            'last_updated',
            'criticPopsSwitch'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                data: null,
                total: 0,
                totalFijo: 0,
                totalMovil: 0,
                totalSwitch: 0,
                totalPhone: 0,
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
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getData()
            },
            core(newValue, oldValue) {
                this.getData()
            },
            criticPopsSwitch(newValue, oldValue) {
                this.$eventBus.$emit('getSitesData', this.data)
            }
        },
        methods: {
            totalSites() {
                this.totalFijo = 0
                this.totalMovil = 0
                this.totalSwitch = 0
                this.totalPhone = 0
                this.total = 0
                this.data.forEach(this.counter)
            },
            counter(item, index) {
                this.totalFijo = this.totalFijo + item.fijo
                this.totalMovil = this.totalMovil + item.movil
                this.totalSwitch = this.totalSwitch + item.switch
                this.totalPhone = this.totalPhone + item.phone
                this.total = this.total + item.fijo + item.movil + item.switch + item.phone
            },
            getData() {
                // Si no hay un CRM seleccionado
                if (this.crmSelected == null) {                             

                    axios.get(`/api/sitesData?core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalSites()
                        this.$eventBus.$emit('getSitesData', this.data)
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (this.zonaSelected == null){
                    axios.get(`api/sitesDataCrm?crm_id=${this.crmSelected.id}&core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalSites()
                        this.$eventBus.$emit('getSitesData', this.data)
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`api/sitesDataZona?zona_id=${this.zonaSelected.id}&core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalSites()
                        this.$eventBus.$emit('getSitesData', this.data)
                    })
                }
                
            },
            downloadSites() {
                this.buttonLoading = 1

                axios.get(`/pop/export?core=${this.core}&crm_id=${this.crmSelected ? this.crmSelected.id : 0}&zona_id=${this.zonaSelected ? this.zonaSelected.id : 0}`, {
                    responseType: 'blob',
                })
                .then((response) => {
                    console.log(response.data)
                    const blob = new Blob([response.data], { type: 'application/xls' })
                    // const objectUrl = window.URL.createObjectURL(blob)

                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'test.xlsx'
                    link.click()
                    this.buttonLoading = 0
                })
            }
        }
    }
</script>
