<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground" style="min-height: 300px; max-height: 500px; overflow-y: scroll;">
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
                        <th class="has-text-right" :class="secondaryText"><abbr title="Fija">Fija</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Movil">Movil</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Movil">Pole Site</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Otros">Otros</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.popData">
                        <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ item.fijo | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.movil | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.poleSite | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.others | numeral('0,0') }}</td>
                        <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ item.fijo + item.movil | numeral('0,0') }}</td>
                    </tr>
                    <tr class="is-size-7 has-text-weight-bold">
                        <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalFija | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalMovil | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalPoleSite | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalOthers | numeral('0,0') }}</td>
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
                        <a href="/pop" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                            <font-awesome-icon icon="bars"/>
                        </a>
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
                totalMovil: 0,
                totalPoleSite: 0,
                totalOthers: 0,
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
                this.totalMovil = 0
                this.totalPoleSite = 0
                this.totalOthers = 0
                this.total = 0
                this.popData.forEach(this.counter)
            },
            counter(item, index) {
                this.totalFija = this.totalFija + item.fijo
                this.totalMovil = this.totalMovil + item.movil
                this.totalPoleSite = this.totalPoleSite + item.poleSite
                this.totalOthers = this.totalOthers + item.others
                this.total = this.total + item.fijo + item.movil + item.poleSite + item.others
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
