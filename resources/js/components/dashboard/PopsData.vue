<template>
    
    <div>
        <div class="columns">
            <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">POP</div>
            <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.totalPops | numeral('0,0') }}</div>
        </div>
        
        <table class="table is-fullwidth" style="background-color: rgba(0,0,0,0)">
            <thead>
                <tr class="is-size-7">
                    <th class="" :class="secondaryText">{{ selectedCrm == null ? 'CRM' : (selectedZona == null ? 'Zona' : 'Comuna') }}</th>
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
                <tr class="is-size-7" v-for="item in popsData" :key="item.id">
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
                    <td class="has-text-right" :class="primaryText">{{ this.totalPops | numeral('0,0') }}</td>
                </tr>
            </tbody>
        </table>

        <div class="columns">
            <div class="column is-right">
                <div class="is-size-7 has-text-right" style="margin-top: 10px" :class="secondaryText">
                    Ultima actualización: {{ last_updated }}
                </div>
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
            'last_updated'
        ],
        data() {
            return {
                popsData: [],
                buttonLoading: 0,
                isLoading: false
            }
        },
        created(){
        },
        mounted() {   
            this.getData()  
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
            totalOpto() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.opto)
                return counter
            },
            totalRadio() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.radio)
                return counter
            },
            totalRepetidor() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.repetidor)
                return counter
            },
            totalIndoor() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.indoor)
                return counter
            },
            totalOutdoor() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.outdoor)
                return counter
            },
            totalPoleSite() {
                var counter = 0
                this.popsData.forEach(element => counter = counter + element.pole_site)
                return counter
            },
            totalPops() {
                return this.totalOpto + this.totalRadio + this.totalRepetidor + this.totalIndoor + this.totalOutdoor + this.totalPoleSite
            }
        },

        methods: {
            getData() {
                // Si no hay un CRM seleccionado
                if (!this.selectedCrm) {                             

                    axios.get(`/api/popData?core=${this.core}`)
                    .then((response) => {
                        this.popsData = response.data.pop
                        this.isLoading = false
                        // this.$eventBus.$emit('graphData', this.popsData)
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (!this.selectedZona){
                    axios.get(`/api/popDataCrm?crm_id=${this.selectedCrm.id}&core=${this.core}`)
                    .then((response) => {
                        this.popsData = response.data.pop
                        this.isLoading = false
                        // this.$eventBus.$emit('graphData', this.popsData)
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`/api/popDataZona?zona_id=${this.selectedZona.id}&core=${this.core}`)
                    .then((response) => {
                        this.popsData = response.data.pop
                        this.isLoading = false
                        // this.$eventBus.$emit('graphData', this.popsData)
                    })
                }

            },
        }
    }
</script>
