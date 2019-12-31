<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground" style="overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">POP</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button">CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>
            
            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Fijo">Fijo</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Macro">Macro</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Inbuilding">Inbuilding</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.popData">
                        <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ item.fijo | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.macro | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.inbuilding | numeral('0,0') }}</td>
                        <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ item.fijo + item.macro + item.inbuilding | numeral('0,0') }}</td>
                    </tr>
                    <tr class="is-size-7 has-text-weight-bold">
                        <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalFija | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalMacro | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalInbuilding | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</td>
                    </tr>
                </tbody>
            </table>

            <form @submit="formSubmit">
                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link" :class="buttonLoading">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de POPs
                        </button>
                    </p>
                    <p class="control">
                        <b-tooltip label="Tooltip Text" position="is-right">
                            <a href="/pop" type="button" class="button is-small is-link" data-tooltip="">
                                <font-awesome-icon icon="bars"/>
                            </a>
                        </b-tooltip>
                    </p>
                </div>

            </form>
        </article>
    </div>
</template>

<script>
    export default {
        props : [
            'selectedCrm',
            'selectedZona',
            // 'csrf',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'core'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                popData: null,
                total: 0,
                totalFija: 0,
                totalMacro: 0,
                totalInbuilding: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getPopData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getPopData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getPopData()
            },
            core(newValue, oldValue) {
                this.getPopData()
            }
        },
        methods: {
            totalPops() {
                this.totalFija = 0
                this.totalMacro = 0
                this.totalInbuilding = 0
                this.total = 0
                this.popData.forEach(this.counter)
            },
            counter(item, index) {
                this.totalFija = this.totalFija + item.fijo
                this.totalMacro = this.totalMacro + item.macro
                this.totalInbuilding = this.totalInbuilding + item.inbuilding
                this.total = this.total + item.fijo + item.macro + item.inbuilding
            },
            getPopData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/popData/${this.core}`)
                        .then((response) => {
                            this.popData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/popDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.popData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/popDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            this.popData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            formSubmit(e) {
                // Activate loading button
                this.buttonLoading = 'is-loading'

                e.preventDefault()
                axios({
                    url: '/pop/export',
                    method: 'POST',
                    responseType: 'blob',
                    // headers: {
                    //     'Content-Type': 'text/html; charset=utf-8',
                    //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    // }
                })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]))
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute('download', 'listado_pops.xlsx')
                    document.body.appendChild(link)
                    link.click()

                    // Deativate loading button
                    this.buttonLoading = ''
                })
                .catch((error) => {
                    console.log('Error: ' + error);
                });
            }
        }
    }
</script>
