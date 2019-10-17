<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground">
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
                        <th class="" :class="secondaryText"><abbr title="CRM">CRM</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="2G">2G</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="3g">3G</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="4G">4G</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="crm in this.technologyData">
                        <td class=""><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ crm.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec2g900 + crm.tec2g1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec3g900 + crm.tec3g1900 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec4g700 + crm.tec4g2600 | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ crm.tec2g900 + crm.tec2g1900 + crm.tec3g900 + crm.tec3g1900 + crm.tec4g700 + crm.tec4g2600 | numeral('0,0') }}</td>
                    </tr>
                </tbody>
            </table>
            <form method="POST" action="dashboard/technologies/export">
                <input type="hidden" name="_token" :value="csrf" />

                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de technologies
                        </button>
                    </p>
                    <p class="control">
                        <a href="/technologies" type="button" class="button is-small is-link">
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
            'secondaryText'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                technologyData: null,
                total: 0
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
            }
        },
        methods: {
            totalPops() {
                this.total = 0
                this.technologyData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.tec2g900 + item.tec2g1900 + item.tec3g900 + item.tec3g1900 + item.tec4g700 + item.tec4g2600;
            },
            getTechnologyData() {
                if (this.zonaSelected != null) {
                    axios.get(`api/technologyDataZona/${this.zonaSelected.id}`)
                        .then((response) => {
                            this.technologyData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.crmSelected != null){
                    axios.get(`api/technologyDataCrm/${this.crmSelected.id}`)
                        .then((response) => {
                            this.technologyData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/technologyData`)
                        .then((response) => {
                            this.technologyData = response.data.data;
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
