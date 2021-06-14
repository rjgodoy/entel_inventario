<template>
    <section class="">
        <!-- <b-collapse class="card has-background-dark" animation="slide" aria-id="contentIdForA11y3" :open="true">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <div class="card-header-title has-text-grey-light">
                    FILTROS
                </div>
                <a class="card-header-icon">
                    <font-awesome-icon :icon="props.open ? 'sort-down' : 'sort-up'" />
                </a>
            </div>
            <div class="card-content">
                <div class="">
                    <div class="columns">

                        <div class="column is-2">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">CRM</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-6" v-for="crm in crms" :key="crm.id">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedCrm == crm ? 'is-link' : 'is-black-ter'" @click="selectCrm(crm); electricLinesData.current_page = 1">
                                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ crm.nombre_crm }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column is-2">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">ZONAS</div>
                            <div v-if="!selectedCrm">
                                <div class="has-text-centered has-text-weight-light has-text-grey-light is-size-6">Selecciona un CRM</div>
                            </div>
                            <div v-if="selectedCrm" class="columns is-multiline is-gapless">
                                <div class="column" :class="zonas.length == 2 || zonas.length == 3 ? 'is-12' : 'is-6'" v-for="zona in zonas" :key="zona.id">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedZona == zona ? 'is-link' : 'is-black-ter'" @click="selectZona(zona); electricLinesData.current_page = 1">
                                            <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText">
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ zona.nombre_zona }}</div>
                                                <div class="subtitle is-size-7 has-text-weight-normal has-text-light">{{ zona.cod_zona }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </b-collapse> -->

        <div class="section">
            <div class="container">

                <div class="field columns">

                    <div class="column">
                        <div class="box">

                            <div class="field">
                                <div class="columns">
                                    <div class="column">
                                        <p class="control has-icons-left has-icons-right">
                                            <input 
                                                class="input is-rounded"  
                                                @keyup="getElectricLinesData" 
                                                @input="electricLinesData.meta.current_page = 1"
                                                v-model="searchText" 
                                                type="text" 
                                                arial-label="Buscar" 
                                                placeholder="Buscar..." 
                                                autofocus
                                            >
                                            <span class="icon is-small is-left">
                                                <font-awesome-icon icon="search"/>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <button class="delete" @click="clearSearch"></button>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="column is-1 has-text-right">
                                        <b-button class="is-success" :loading="isbuttonLoading" @click="downloadElectricLines">
                                            <font-awesome-icon :icon="['fas', 'download']" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>

                            <table class="table is-fullwidth is-striped is-hoverable is-bordered">
                                <thead>
                                    <tr class="">
                                        <!-- <th class="is-size-6 has-text-weight-semibold"><abbr title="Ping">Ping</abbr></th> -->
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Ubicación">Pop</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold"><abbr title="Zona">Zona</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Tipo">Tipo</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Fase">Fase</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Postación">Postación</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Ferretería">Ferretería</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Terreno">Terreno</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Vegetación">Vegetación</abbr></th>
                                        
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <ElectricLineTable class="is-size-6" v-for="data in electricLinesData.electricLines" :key="data.id" :electricLine="data" />
                                </tbody>
                            </table>


                            <div class="level">
                                <nav class="level-left pagination" role="navigation" aria-label="pagination">
                                    <vue-pagination  
                                        :pagination="electricLinesData.meta"
                                        @paginate="getElectricLinesData()"
                                        :offset="4">
                                    </vue-pagination>
                                </nav>
                                <div class="level-right has-text-right">
                                    <!-- <div class="is-size-7 " :class="secondaryText">Fecha ultima actualización: {{ last_updated.formatted }}</div> -->
                                </div>
                            </div>

                            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                               
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        <!-- <b-modal :active.sync="isDownloadModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-download
                @clicked="onClickDownload"
                />
        </b-modal> -->
    </section>
</template>

<script>
    var moment = require('moment')
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faSearch, faBars, faSortDown, faSortUp, faChevronLeft, faChevronRight, faDownload } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faClipboard as farClipboard } from '@fortawesome/free-regular-svg-icons'
    library.add(faSearch, faBars, farClipboard, faSortDown, faSortUp, faChevronLeft, faChevronRight, faDownload);

    export default {
        components: {
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../../helpers/VuePagination'),
            ElectricLineTable: () => import(/* webpackChunkName: "chunks/electricLines/electricLineTable"*/'./ElectricLineTable'),
            // ModalDownload: () => import(/* webpackChunkName: "chunks/electrcLines/modals/modalDownload"*/'./modals/ModalDownload'),
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                zonas: Array,
                brands: Array,
                types: Array,
                subZones: Array,
                searchText: '',

                electricLinesData: {
                    can: Array,
                    electricLines: Object,
                    meta: {
                        current_page: 1,
                        total: 0,
                        per_page: 2,
                        from: 1,
                        to: 0,
                    }
                },
                
                selectedCrm: null,
                selectedZona: null,
                selectedBrand: null,
                selectedType: null,
                selectedSubZone: null,
                core: 0,
                critic: 0,
                vip: 0,

                isLoading: false,
                isbuttonLoading: false,
                isDownloadModalActive: false,

                // last_data: null,
                // last_day_data: null,
                secondaryText: '',
                selectedSecondaryBoxText: 'has-text-light',
                
            }
        },

        watch: {
            selectedCrm(newValue) {
                // this.getElectricLinesData()
                this.selectedZona = null
            },

            selectedZona(newValue) {
                // this.getElectricLinesData()
            },

            // selectedBrand(newValue) {
            //     this.getElectricLinesData()
            //     this.electricLinesData.current_page = 1
            // },

            // selectedType(newValue) {
            //     this.getElectricLinesData()
            //     this.electricLinesData.current_page = 1
            // },

            // selectedSubZone() {
            //     this.getElectricLinesData()
            //     this.electricLinesData.current_page = 1
            // },

            // core(newValue) {
            //     this.getElectricLinesData()
            // },

            // critic(newValue) {
            //     this.getElectricLinesData()
            // },

            // vip(newValue) {
            //     this.getElectricLinesData()
            // }
        },

        computed: {
            middleFileName() {
                return this.selectedZona ? `Zona ${this.selectedZona.nombre_zona} - ` : (this.selectedCrm ? `CRM ${this.selectedCrm.nombre_crm} - ` : '')
            },
        },

        mounted() {
            this.getCrms()
            // this.getBrands()
            // this.getTypes()
            // this.getSubZones()
            this.getElectricLinesData()
        },

        methods: {
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms
                })
            },

            // getBrands() {
            //     axios.get(`/api/genplaBrands`)
            //     .then((response) => {
            //         this.brands = response.data
            //     })
            // },

            // getTypes() {
            //     axios.get(`/api/genplaTypes`)
            //     .then((response) => {
            //         this.types = response.data
            //     })
            // },

            // getSubZones() {
            //     axios.get(`/api/genplaSubZones`)
            //     .then((response) => {
            //         this.subZones = response.data
            //     })
            // },

            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
                this.selectedZona = null
                this.zonas = crm.zonas
                this.getElectricLinesData()
            },

            selectZona(zona) {
                console.log(zona)
                this.selectedZona = this.selectedZona != zona ? zona : null
                this.getElectricLinesData()
            },

            getElectricLinesData() {
                this.isLoading = true
                let params = {
                    'page': this.electricLinesData.meta.current_page,
                    'text': this.searchText,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                    'brand_id': this.selectedBrand ? this.selectedBrand.id : 0,
                    'group_type_id': this.selectedType ? this.selectedType.id : 0,
                    'sub_zone_id': this.selectedSubZone ? this.selectedSubZone.id : 0,
                    'core': this.core,
                    'critic': this.critic,
                    'vip': this.vip
                }
                // console.log(params)
                axios.get('/api/electricLines', { params: params })
                .then((response) => {
                    // console.log(response)
                    this.electricLinesData = response.data
                    this.isLoading = false
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getElectricLinesData()
            },

            downloadElectricLines() {
                this.isbuttonLoading = true

                var params = {
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
                    link.download = `Listado Lineas Eléctricas - ${this.middleFileName}${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                    link.click()
                    // setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                    //     window.URL.revokeObjectURL(data)
                    // }, 100)
                    
                    this.isbuttonLoading = false
                    this.$buefy.toast.open({
                        message: 'La planilla se ha descargado exitosamente.',
                        type: 'is-success',
                        duration: 5000
                    })
                }).catch((error) => {
                    console.log(error)
                    this.isbuttonLoading = false
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
