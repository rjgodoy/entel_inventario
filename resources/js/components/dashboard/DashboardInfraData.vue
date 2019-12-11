<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground" style="min-height: 300px; max-height: 500px; overflow-y: scroll;">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Servicios Infraestructura</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button" >CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText">{{ crmSelected == null ? 'CRM' : (zonaSelected == null ? 'Zona' : 'Comuna') }}</th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Offgrid">Offgrid</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Solar">Solar</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Eólica">Eólica</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Alba">Alba</abbr></th>
                        <!-- <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="crm in this.infraData">
                        <td><a href="" title="CRM Norte"  class="has-text-weight-bold" :class="secondaryText">{{ crm.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ crm.offgrid | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.solar | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.eolica | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.alba_project | numeral('0,0') }}</td>
                        <!-- <td class="has-text-right" :class="primaryText">{{ total_crm = crm.offgrid + crm.solar + crm.eolica + crm.alba_project | numeral('0,0') }}</td> -->
                    </tr>
                        
                    <tr class="is-size-7 has-text-weight-bold">
                        <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalOffgrid | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalSolar | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalEolica | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ this.totalAlbaProject | numeral('0,0') }}</td>
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
                infraData: null,
                total: 0,
                totalOffgrid: 0,
                totalSolar: 0,
                totalEolica: 0,
                totalAlbaProject: 0
            }
        },
        created() {
            this.getInfraData()
        },
        mounted() {
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getInfraData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getInfraData()
            },
            core(newValue, oldValue) {
                this.getInfraData()
            }
        },
        methods: {
            totalPops() {
                this.totalOffgrid = 0
                this.totalSolar = 0
                this.totalEolica = 0
                this.totalAlbaProject = 0
                this.total = 0
                this.infraData.forEach(this.counter)
            },
            counter(item, index) {
                this.totalOffgrid = this.totalOffgrid + item.offgrid
                this.totalSolar = this.totalSolar + item.solar
                this.totalEolica = this.totalEolica + item.eolica
                this.totalAlbaProject = this.totalAlbaProject + item.alba_project
                this.total = this.total + item.offgrid + item.solar + item.eolica + item.alba_project;
            },
            getInfraData() {
                if (this.crmSelected == null) {
                    axios.get(`api/infraData/${this.core}`)
                        .then((response) => {
                            this.infraData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/infraDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.infraData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/infraDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            this.infraData = response.data.data;
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
