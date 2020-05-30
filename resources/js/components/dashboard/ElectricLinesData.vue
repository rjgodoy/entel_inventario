<template>
    <div class="column is-4">
        <article class="tile is-child box is-bold" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Lineas Eléctricas</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" :class="primaryText" v-for="item in this.electricLineData" :key="item.id">
                    <!-- <b-message type="is-positive"> -->
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_electric_lines | numeral('0,0') }}</div>
                        <div class="is-size-7">{{ item.nombre }}</div>
                    <!-- </b-message> -->
                </div>
            </div>

            <a class="tile is-child box is-bold is-dark has-text-white" style="position: relative;" 
                @click="downloadElectricLines">
                <b-icon 
                    style="padding-top: 20px; padding-left: 5px;"
                    pack="fas" 
                    icon="download" 
                    class="has-text-eco fa-2x">
                </b-icon> 
                <div class="is-size-4 has-text-weight-bold" style="margin-top: 10px;">
                    <p class="is-size-6 has-text-weight-semibold">Descargar listado de Lineas Eléctricas</p>
                </div>
                <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
            </a>
        </article>
    </div>
</template>

<script>
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
                electricLineData: null,
                total: 0,
                buttonLoading: '',
                isLoading: false
            }
        },
        created(){
            this.getElectricLineData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getElectricLineData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getElectricLineData()
            },
            core(newValue, oldValue) {
                this.getElectricLineData()
            }
        },
        methods: {
            totalElectricLines() {
                this.total = 0
                this.electricLineData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_electric_lines;
            },
            getElectricLineData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/electricLineData/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.electricLineData = response.data.electricLine;
                            this.totalElectricLines()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`/api/electricLineDataCrm/${this.crmSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.electricLineData = response.data.electricLine;
                            this.totalElectricLines()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/electricLineDataZona/${this.zonaSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.electricLineData = response.data.electricLine;
                            this.totalElectricLines()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            
            downloadElectricLines() {
                this.isLoading = true

                var params = {
                    'api_token': this.user.api_token,
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0
                }

                axios.get('/api/electricLinesExport', { 
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
                    link.download = 'listado_aires_acondicionados.xlsx'
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
