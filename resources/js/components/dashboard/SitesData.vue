<template>
    <div>
        <div class="columns">
            <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">SITIOS</div>
            <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.totalSites | numeral('0,0') }}</div>
        </div>
        
        <table class="table is-fullwidth" style="background-color: rgba(0,0,0,0)">
            <thead>
                <tr class="is-size-7">
                    <th class="" :class="secondaryText">{{ selectedCrm == null ? 'CRM' : (selectedZona == null ? 'Zona' : 'Comuna') }}</th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Fijo">Fijo</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Móvil">Móvil</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Switch">Switch</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Phone">Phone</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Repetidor">Repetidor</abbr></th>
                    <th class="has-text-right" :class="secondaryText"><abbr title="Total">Total</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr class="is-size-7" v-for="item in sitesData" :key="item.id">
                    <td><a href="" title="CRM Norte" class="has-text-weight-bold" :class="secondaryText">{{ item.nombre }}</a></td>
                    <td class="has-text-right" :class="primaryText">{{ item.fijo | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.movil | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.switch | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.phone | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ item.repetidor | numeral('0,0') }}</td>
                    <td class="has-text-right has-text-weight-bold" :class="primaryText">{{ item.fijo + item.movil + item.switch + item.phone + item.repetidor | numeral('0,0') }}</td>
                </tr>
                <tr class="is-size-7 has-text-weight-bold">
                    <td><a href="" title="Total"  class="" :class="secondaryText">Total</a></td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalFijo | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalMovil | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalSwitch | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalPhone | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalRepetidor | numeral('0,0') }}</td>
                    <td class="has-text-right" :class="primaryText">{{ this.totalSites | numeral('0,0') }}</td>
                </tr>
            </tbody>
        </table>

        <div class="columns">
            <div class="column is-right">
                <div class="is-size-7 has-text-right" style="margin-top: 10px" :class="secondaryText">Ultima actualización: {{ last_updated }}</div>
            </div>
        </div>
        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
</template>

<script>

    export default {
        components: {
        },
        props : [
            'selectedCrm',
            'selectedZona',
            'core',

            'primaryText',
            'secondaryText',
            'last_updated',
        ],
        data() {
            return {
                sitesData: [],
                buttonLoading: 0,
                isLoading: false
            }
        },
        created(){
            this.getData()
        },
        mounted() {   
            this.isLoading = true    
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.getData()
            },
            selectedZona(newValue, oldValue) {
                this.getData()
            },
            core(newValue, oldValue) {
                this.getData()
            },
        },
        computed: {
            totalFijo() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.fijo)
                return counter
            },
            totalMovil() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.movil)
                return counter
            },
            totalSwitch() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.switch)
                return counter
            },
            totalPhone() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.phone)
                return counter
            },
            totalRepetidor() {
                var counter = 0
                this.sitesData.forEach(element => counter = counter + element.repetidor)
                return counter
            },
            totalSites() {
                return this.totalFijo + this.totalMovil + this.totalSwitch + this.totalPhone + this.totalRepetidor
            },
        },
        methods: {
            getData() {
                // Si no hay un CRM seleccionado
                if (!this.selectedCrm) {                             
                    axios.get(`/api/sitesData?core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.pop;
                        this.isLoading = false
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (!this.selectedZona){
                    axios.get(`/api/sitesDataCrm?crm_id=${this.selectedCrm.id}&core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.pop;
                        this.isLoading = false
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`/api/sitesDataZona?zona_id=${this.selectedZona.id}&core=${this.core}`)
                    .then((response) => {
                        this.sitesData = response.data.pop;
                        this.isLoading = false
                    })
                }
                
            },
        }
    }
</script>
