<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">POPs</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button">CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>
            
            <table class="table is-fullwidth" :class="boxBackground">
                <thead>
                    <tr class="is-size-7">
                        <th class="" :class="secondaryText"><abbr title="CRM">CRM</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Fija">Fija</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Movil">Movil</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Otros">Otros</abbr></th>
                        <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="is-size-7" v-for="item in this.popData">
                        <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                        <td class="has-text-right" :class="primaryText">{{ item.fijo | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">{{ item.movil | numeral('0,0') }}</td>
                        <td class="has-text-right" :class="primaryText">0</td>
                        <td class="has-text-right" :class="primaryText">{{ item.fijo + item.movil | numeral('0,0') }}</td>
                    </tr>
                </tbody>
            </table>
            <form method="POST" action="/dashboard/pops/export">
                <input type="hidden" name="_token" :value="csrf" />

                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link">
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
                popData: null,
                total: 0
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
            }
        },
        methods: {
            totalPops() {
                this.popData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.fijo + item.movil;
            },
            getPopData() {
                if (this.zonaSelected != null) {
                    axios.get(`api/popDataZona/${this.zonaSelected.id}`)
                        .then((response) => {
                            this.popData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.crmSelected != null){
                    axios.get(`api/popDataCrm/${this.crmSelected.id}`)
                        .then((response) => {
                            this.popData = response.data.data;
                            this.totalPops()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/popData`)
                        .then((response) => {
                            this.popData = response.data.data;
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
