<template>
    <div class="column is-3">
        <article class="tile is-child box is-bold has-background">
            <div class="is-box-background is-transparent-light">
                <font-awesome-icon 
                    :icon="['fab', 'superpowers']" size="10x" class="is-pulled-right" style=""/>
            </div>
            <div class="columns">
                <div class="column is-8 is-size-5 has-text-weight-semibold has-text-left">Plantas Rectificadoras</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" v-for="item in this.powerRectifierData" :key="item.id">
                    <!-- <b-message type="is-positive"> -->
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_power_rectifiers | numeral('0,0') }}</div>
                        <div class="is-size-7">{{ item.nombre }}</div>
                    <!-- </b-message> -->
                </div>
            </div>
            
            <a class="tile is-child box is-bold is-white" style="position: relative; border: solid 1px #eee" 
                @click="downloadPowerRectifiers">
                <div class="columns">
                    <div class="column is-1 has-text-centered">
                        <font-awesome-icon 
                            :icon="['fas','download']" 
                            class="has-text-eco"/>
                    </div>
                    <div class="column">
                        <div class="is-size-4 has-text-weight-bold" style="margin-top: 2px;">
                            <p class="is-size-6 has-text-weight-semibold">Descargar listado de Plantas Rectificadoras</p>
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
            'selectedCrm',
            'selectedZona',
            'core'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                powerRectifierData: null,
                total: 0,
                buttonLoading: '',
                isLoading: false
            }
        },

        computed: {
            middleFileName() {
                return this.selectedZona ? `Zona ${this.selectedZona.nombre_zona} - ` : (this.selectedCrm ? `CRM ${this.selectedCrm.nombre_crm} - ` : '')
            },
        },

        created(){
            this.getPowerRectifierData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getPowerRectifierData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getPowerRectifierData()
            },
            core(newValue, oldValue) {
                this.getPowerRectifierData()
            }
        },
        methods: {
            totalPowerRectifiers() {
                this.total = 0
                this.powerRectifierData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_power_rectifiers;
            },
            getPowerRectifierData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/powerRectifierData/${this.core}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.powerRectifiers;
                            this.totalPowerRectifiers()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/powerRectifierDataCrm/${this.crmSelected.id}/${this.core}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.powerRectifiers;
                            this.totalPowerRectifiers()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/powerRectifierDataZona/${this.zonaSelected.id}/${this.core}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.powerRectifiers;
                            this.totalPowerRectifiers()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            
            downloadPowerRectifiers() {
                this.isLoading = true

                var params = {
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0
                }

                axios.get('/api/powerRectifiersExport', { 
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
                    link.download = `Listado Plantas Rectificadoras - ${this.middleFileName}${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
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
