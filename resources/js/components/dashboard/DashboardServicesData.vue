<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground" style="min-height: 300px; max-height: 500px; overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Servicios Fijos</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button" >CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="BAFI">BAFI</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="OLT">OLT</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="OLT 3Play">OLT 3Play</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Red Minima N1">Red Min N1</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Red Minima N2">Red Min N2</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="crm in this.serviceData">
                        <td><a href="" title="CRM Norte"  class="has-text-weight-bold" :class="secondaryText">{{ crm.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ crm.bafi | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.olt | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.olt_3play | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.red_minima_n1 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.red_minima_n2 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ total_crm = crm.bafi + crm.olt + crm.olt_3play + crm.red_minima_n1 + crm.red_minima_n2 | numeral('0,0') }}</td>
                    </tr>
                </tbody>
            </table>
            <form method="POST" action="dashboard/services/export">
                <input type="hidden" name="_token" :value="csrf" />

                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de services
                        </button>
                    </p>
                    <p class="control">
                        <a href="/pops" type="button" class="button is-small is-link">
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
            'csrf',
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
                serviceData: null,
                total: 0
            }
        },
        created() {
            this.getServiceData()
        },
        mounted() {
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getServiceData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getServiceData()
            },
            core(newValue, oldValue) {
                this.getServiceData()
            }
        },
        methods: {
            totalPops() {
                this.total = 0
                this.serviceData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total = this.total + item.bafi + item.olt + item.olt_3play + item.red_minima_n1 + item.red_minima_n2;
            },
            getServiceData() {
                if (this.crmSelected == null) {
                    axios.get(`api/serviceData/${this.core}`)
                        .then((response) => {
                            this.serviceData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/serviceDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.serviceData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/serviceDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            this.serviceData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
        }
    }
</script>
