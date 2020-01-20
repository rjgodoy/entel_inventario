<template>
    <!-- <div class="tile is-parent"> -->
        <article class="tile is-child box" :class="boxBackground" style="overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">POP</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>
            
            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Opto Estación">Opto Estación</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Radio Estación">Radio Estación</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Repetidor">Repetidor</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Indoor">Indoor</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Outdoor">Outdoor</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Pole Site">Pole Site</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.data">
                        <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ item.opto | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.radio | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.repetidor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.indoor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.outdoor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.pole_site | numeral('0,0') }}</td>
                        <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ item.opto + item.radio + item.repetidor + item.indoor + item.outdoor + item.pole_site | numeral('0,0') }}</td>
                    </tr>
                    <tr class="is-size-7 has-text-weight-bold">
                        <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalOpto | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalRadio | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalRepetidor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalIndoor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalOutdoor | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalPoleSite | numeral('0,0') }}</td>
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
                            @click="downloadPops">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de POPs
                        </b-button>
                        <b-tooltip label="Tooltip Text" position="is-right">
                            <a href="/pop" type="button" class="button is-small is-link" data-tooltip="">
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
    export default {
        props : [
            'selectedCrm',
            'selectedZona',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'core',
            'last_updated'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                data: null,
                total: 0,
                totalOpto: 0,
                totalRadio: 0,
                totalRepetidor: 0,
                totalIndoor: 0,
                totalOutdoor: 0,
                totalPoleSite: 0,
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
            }
        },
        methods: {
            totalPops() {
                this.totalOpto = 0
                this.totalRadio = 0
                this.totalRepetidor = 0
                this.totalIndoor = 0
                this.totalOutdoor = 0
                this.totalPoleSite = 0
                this.total = 0
                this.data.forEach(this.counter)
            },
            counter(item, index) {
                this.totalOpto = this.totalOpto + item.opto
                this.totalRadio = this.totalRadio + item.radio
                this.totalRepetidor = this.totalRepetidor + item.repetidor
                this.totalIndoor = this.totalIndoor + item.indoor
                this.totalOutdoor = this.totalOutdoor + item.outdoor
                this.totalPoleSite = this.totalPoleSite + item.pole_site
                this.total = this.total + item.opto + item.radio + item.repetidor + item.indoor + item.outdoor + item.pole_site
            },
            getData() {
                // Si no hay un CRM seleccionado
                if (this.crmSelected == null) {                             

                    axios.get(`/api/popData?core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalPops()
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (this.zonaSelected == null){
                    axios.get(`api/popDataCrm?crm_id=${this.crmSelected.id}&core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalPops()
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`api/popDataZona?zona_id=${this.zonaSelected.id}&core=${this.core}`)
                    .then((response) => {
                        this.data = response.data.data;
                        this.totalPops()
                    })
                }
            },
            downloadPops() {
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
