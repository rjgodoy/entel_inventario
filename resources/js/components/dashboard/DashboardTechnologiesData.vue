<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground" style="overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Tecnologías</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button">CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>
            
            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="2G">2G 1900</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="3G 900">3G 900</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="3G 1900">3G 1900</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="3G 3500">3G 3500</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="4G 700">4G 700</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="4G 1900">4G 1900</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="4G 2600">4G 2600</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="4G 3500">4G 3500</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="crm in this.technologyData">
                        <td class=""><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ crm.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec2g1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec3g900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec3g1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec3g3500 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec4g700 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec4g1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec4g2600 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec4g3500 | numeral('0,0') }}</td>
                        <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ crm.tec2g1900 + crm.tec3g900 + crm.tec3g1900 + crm.tec3g3500 + crm.tec4g700 + crm.tec4g1900 + crm.tec4g2600 + crm.tec4g3500 | numeral('0,0') }}</td>
                    </tr>
                    <tr class="is-size-7 has-text-weight-bold">
                        <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                        <td class="has-text-right" :class="primaryText">{{ this.total2G1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total3G900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total3G1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total3G3500 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total4G700 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total4G1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total4G2600 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total4G3500 | numeral('0,0') }}</td>
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
                            @click="downloadTechnologies">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de Tecnologías
                        </b-button>
                        <b-tooltip label="Tooltip Text" position="is-right">
                            <a href="/technologies" type="button" class="button is-small is-link" data-tooltip="">
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
    </div>
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
                technologyData: null,
                total: 0,
                total2G1900: 0,
                total3G900: 0,
                total3G1900: 0,
                total3G3500: 0,
                total4G700: 0,
                total4G1900: 0,
                total4G2600: 0,
                total4G3500: 0,
                buttonLoading: 0
            }
        },
        created() {
            this.getTechnologyData()
        },
        mounted() {            
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getTechnologyData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getTechnologyData()
            },
            core(newValue, oldValue) {
                this.getTechnologyData()
            }
        },
        methods: {
            totalTechnologies() {
                this.total = 0
                this.total2G1900 = 0
                this.total3G900 = 0
                this.total3G1900 = 0
                this.total3G3500 = 0
                this.total4G700 = 0
                this.total4G1900 = 0
                this.total4G2600 = 0
                this.total4G3500 = 0
                this.technologyData.forEach(this.counter)
            },
            counter(item, index) {
                this.total2G1900 = this.total2G1900 + item.tec2g1900
                this.total3G900 = this.total3G900 + item.tec3g900
                this.total3G1900 = this.total3G1900 + item.tec3g1900
                this.total3G3500 = this.total3G3500 + item.tec3g3500
                this.total4G700 = this.total4G700 + item.tec4g700
                this.total4G1900 = this.total4G1900 + item.tec4g1900
                this.total4G2600 = this.total4G2600 + item.tec4g2600
                this.total4G3500 = this.total4G3500 + item.tec4g3500
                this.total = this.total + item.tec2g1900 + item.tec3g900 + item.tec3g1900 + item.tec3g3500 + item.tec4g700 + item.tec4g1900 + item.tec4g2600 + item.tec4g3500;

            },
            getTechnologyData() {
                if (this.zonaSelected != null) {
                    axios.get(`api/technologyDataZona?zona_id=${this.zonaSelected.id}&core=${this.core}`)
                        .then((response) => {
                            this.technologyData = response.data.data;
                            this.totalTechnologies()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.crmSelected != null){
                    axios.get(`api/technologyDataCrm?crm_id=${this.crmSelected.id}&core=${this.core}`)
                        .then((response) => {
                            this.technologyData = response.data.data;
                            this.totalTechnologies()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/technologyData?core=${this.core}`)
                        .then((response) => {
                            this.technologyData = response.data.data;
                            this.totalTechnologies()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            downloadTechnologies() {
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
