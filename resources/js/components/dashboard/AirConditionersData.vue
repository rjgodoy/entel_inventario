<template>
    <div class="column is-4">
        <article class="tile is-child box is-bold">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Aires Acondicionados</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" :class="primaryText" v-for="item in this.airConditionerData" :key="item.id">
                    <!-- <b-message type="is-smart"> -->
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_air_conditioners | numeral('0,0') }}</div>
                        <div class="is-size-7">{{ item.nombre }}</div>
                    <!-- </b-message> -->
                </div>
            </div>

            <a class="tile is-child box is-bold is-white" style="position: relative; border: solid 1px #eee" 
                @click="downloadAirConditioners">
                <div class="columns">
                    <div class="column is-1 has-text-centered">
                        <font-awesome-icon 
                            :icon="['fas','download']" 
                            class="has-text-eco"/>
                    </div>
                    <div class="column">
                        <div class="is-size-4 has-text-weight-bold" style="margin-top: 2px;">
                            <p class="is-size-6 has-text-weight-semibold">Descargar listado de Aires Acondicionados</p>
                        </div>
                    </div>
                </div>
                <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
            </a>

        </article>
    </div>
</template>

<script>
    var moment = require('moment')
    export default {
        props : [
            'user',
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
                isLoading: false
            }
        },
        created(){
            this.getAirConditionerData()
        },

        computed: {
            middleFileName() {
                return this.selectedZona ? `Zona ${this.selectedZona.nombre_zona} - ` : (this.selectedCrm ? `CRM ${this.selectedCrm.nombre_crm} - ` : '')
            },
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
                            this.airConditionerData = response.data.airConditioner;
                            this.totalAirConditioners()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`/api/airConditionerDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.airConditionerData = response.data.airConditioner;
                            this.totalAirConditioners()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/airConditionerDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            console.log(response)
                            this.airConditionerData = response.data.airConditioner;
                            this.totalAirConditioners()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            // formSubmit(e) {
            //     // Activate loading button
            //     this.buttonLoading = 'is-loading'

            //     e.preventDefault()
            //     axios({
            //         url: '/pop/export',
            //         method: 'POST',
            //         responseType: 'blob',
            //         // headers: {
            //         //     'Content-Type': 'text/html; charset=utf-8',
            //         //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            //         // }
            //     })
            //     .then((response) => {
            //         const url = window.URL.createObjectURL(new Blob([response.data]))
            //         const link = document.createElement('a')
            //         link.href = url
            //         link.setAttribute('download', 'listado_pops.xlsx')
            //         document.body.appendChild(link)
            //         link.click()

            //         // Deativate loading button
            //         this.buttonLoading = ''
            //     })
            //     .catch((error) => {
            //         console.log('Error: ' + error);
            //     });
            // }

            downloadAirConditioners() {
                this.isLoading = true

                var params = {
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0
                }

                axios.get('/api/airConditionersExport', { 
                    params: params, 
                    responseType: 'arraybuffer' 
                })
                .then((response) => {
                    console.log(response.data)
                    const blob = new Blob([response.data], { type: 'application/xlsx' })
                    // const objectUrl = window.URL.createObjectURL(blob)

                    // IE doesn't allow using a blob object directly as link href
                    // instead it is necessary to use msSaveOrOpenBlob
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(newBlob)
                        return
                    }

                    const data = window.URL.createObjectURL(blob)
                    let link = document.createElement('a')
                    link.href = data
                    link.download = `Listado Aires Acondicionados - ${this.middleFileName}${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                    link.click()
                    // setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                    //     window.URL.revokeObjectURL(data)
                    // }, 100)
                    
                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'La planilla se ha descargado exitosamente.',
                        type: 'is-success',
                        duration: 5000
                    })
                }).catch((error) => {
                    console.log(error)
                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'Ha ocurrido un error. Favor contactar al administrador',
                        type: 'is-danger',
                        duration: 5000
                    })
                })
            },
        }
    }
</script>
