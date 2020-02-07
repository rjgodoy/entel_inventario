<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Aires Acondicionados</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button">CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <!-- <div class="tile is-ancestor">
                <div class="tile is-vertical"> -->

                    <!-- <div class="tile is-12" v-for="n in 3">
                        <div class="tile is-parent is-6" v-for="item in this.airConditionerData" v-if="n <= 2">
                            <div class="tile is-child box">
                                <div class="is-size-6 has-text-weight-semibold">{{ (crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna')) + ' ' + item.nombre }}</div>
                                <div class="is-size-4 has-text-weight-light">{{ item.q_air_conditioners | numeral('0,0') }}</div>
                            </div>
                        </div>
                    </div> -->

                    <!-- <div class="tile is-12">
                        <div class="tile is-parent is-6" v-for="item in this.airConditionerData" v-if="item.id > 2 && item.id <= 4">
                            <div class="tile is-child box">
                                <div class="is-size-6 has-text-weight-semibold">{{ (crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna')) + ' ' + item.nombre }}</div>
                                <div class="is-size-4 has-text-weight-light">{{ item.q_air_conditioners | numeral('0,0') }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="tile is-12">
                        <div class="tile is-parent is-6" v-for="item in this.airConditionerData" v-if="item.id > 4">
                            <div class="tile is-child box">
                                <div class="is-size-6 has-text-weight-semibold">{{ (crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna')) + ' ' + item.nombre }}</div>
                                <div class="is-size-4 has-text-weight-light">{{ item.q_air_conditioners | numeral('0,0') }}</div>
                            </div>
                        </div>
                    </div> -->

                <!-- </div>
            </div> -->

            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <!-- <th class="has-text-right" :class="secondaryText"><abbr title="Fija">Q POP con equipamiento</abbr></th> -->
                        <th class="has-text-right" :class="secondaryText"><abbr title="Movil">Q POP con equipamiento</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Otros">Q Aires Acondicionados</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.airConditionerData">
                        <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                        <!-- <td class="has-text-right" :class="primaryText">{{ item.q_pops | numeral('0,0') }}</td> -->
                        <td class="has-text-right" :class="primaryText">{{ item.q_info | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.q_air_conditioners | numeral('0,0') }}</td>
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
                airConditionerData: null,
                total: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getAirConditionerData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getAirConditionerData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getAirConditionerData()
            },
            core(newValue, oldValue) {
                this.getAirConditionerData()
            }
        },
        methods: {
            totalAirConditioners() {
                this.total = 0
                this.airConditionerData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_air_conditioners;
            },
            getAirConditionerData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/airConditionerData/${this.core}`)
                        .then((response) => {
                            this.airConditionerData = response.data.data;
                            this.totalAirConditioners()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`/api/airConditionerDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.airConditionerData = response.data.data;
                            this.totalAirConditioners()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/airConditionerDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            console.log(response)
                            this.airConditionerData = response.data.data;
                            this.totalAirConditioners()
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
