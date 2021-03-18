<template>
    <section class="">
        <b-collapse class="card has-background-dark" animation="slide" aria-id="contentIdForA11y3" :open="true">
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
                <!-- <div class="has-text-centered has-text-weight-bold is-size-5 has-text-grey-light" style="margin-bottom: 5px">FILTROS</div> -->
                <div class="">
                    <div class="columns">

                        <!-- Filtros CRM -->
                        <div class="column is-2">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">CRM</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-6" v-for="crm in crms" :key="crm.id">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedCrm == crm ? 'is-link' : 'is-black-ter'" @click="selectCrm(crm); generatorsData.current_page = 1">
                                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                                <!-- <div class="is-size-7 has-text-weight-normal">CRM</div> -->
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ crm.nombre_crm }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros ZONAS -->
                        <div class="column is-2">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">ZONAS</div>
                            <div v-if="!selectedCrm">
                                <div class="has-text-centered has-text-weight-light has-text-grey-light is-size-6">Selecciona un CRM</div>
                            </div>
                            <div v-if="selectedCrm" class="columns is-multiline is-gapless">
                                <div class="column" :class="zonas.length == 2 || zonas.length == 3 ? 'is-12' : 'is-6'" v-for="zona in zonas" :key="zona.id">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedZona == zona ? 'is-link' : 'is-black-ter'" @click="selectZona(zona); generatorsData.current_page = 1">
                                            <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ zona.nombre_zona }}</div>
                                                <div class="subtitle is-size-7 has-text-weight-normal has-text-light">{{ zona.cod_zona }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Filtros IMPORTANCIA -->
                        <div class="column is-1">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">IMPORTANCIA</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-12">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="core ? 'is-link' : 'is-black-ter'" @click="core = +!core; generatorsData.current_page = 1" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">CORE</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="column is-12">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="critic ? 'is-link' : 'is-black-ter'" @click="critic = +!critic; generatorsData.current_page = 1" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">CRITICO</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="column is-12">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="vip ? 'is-link' : 'is-black-ter'" @click="vip = +!vip; generatorsData.current_page = 1" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">VIP</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Filtros Marcas -->
                        <div class="column is-4">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">MARCAS</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-3" v-for="brand in brands">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedBrand == brand ? 'is-link' : 'is-black-ter'" @click="selectedBrand = selectedBrand != brand ? brand : null; generatorsData.current_page = 1">
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ brand.name }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Filtros Tipos -->
                        <div class="column is-2">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">TIPO</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-6" v-for="type in types">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedType == type ? 'is-link' : 'is-black-ter'" @click="selectedType = selectedType != type ? type : null; generatorsData.current_page = 1">
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ type.name }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Filtros SubZonas -->
                        <div class="column is-1">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">SUB ZONA</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column" v-for="subZone in subZones">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="selectedSubZone == subZone ? 'is-link' : 'is-black-ter'" @click="selectedSubZone = selectedSubZone != subZone ? subZone : null; generatorsData.current_page = 1">
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ subZone.name }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </b-collapse>

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
                                                @keyup="getGeneratorsData" 
                                                @input="generatorsData.current_page = 1"
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
                                        <b-button class="is-success" data-tooltip="Descargar planilla" @click="generatorExport()">
                                            <font-awesome-icon :icon="['fas', 'download']" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>

                            <table class="table is-fullwidth is-striped is-hoverable is-bordered">
                                <thead>
                                    <tr class="">
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Ubicación">Ubicación</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Nombre">Nombre</abbr></th>
                                        <!-- <th class="is-size-7 has-text-weight-semibold"><abbr title="Nemónico">Nemónico</abbr></th> -->
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Marca">Marca</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Tipo">Tipo</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="HF Día">HF Día</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Prom. Consumo">Prom. Consumo</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Niv. Combustible">Niv. Combustible</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Horometro">Horometro</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Mantención">Mantención</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold has-text-centered">Fichas</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <GeneratorTable class="is-size-6" v-for="data in generatorsData.data" :key="data.id" :generator="data" />
                                </tbody>
                            </table>


                            <div class="level">
                                <nav class="level-left pagination" role="navigation" aria-label="pagination">
                                    <vue-pagination  
                                        :pagination="generatorsData"
                                        @paginate="getGeneratorsData()"
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
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
            GeneratorTable: () => import(/* webpackChunkName: "chunks/generators/generatorTable"*/'./GeneratorTable'),
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

                generatorsData: {
                    can: Array,
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
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

                // last_data: null,
                // last_day_data: null,
                secondaryText: '',
                selectedSecondaryBoxText: 'has-text-light',
                
            }
        },

        watch: {
            selectedCrm(newValue) {
                // this.getGeneratorsData()
                this.selectedZona = null
            },

            selectedZona(newValue) {
                // this.getGeneratorsData()
            },

            selectedBrand(newValue) {
                this.getGeneratorsData()
                this.generatorsData.current_page = 1
            },

            selectedType(newValue) {
                this.getGeneratorsData()
                this.generatorsData.current_page = 1
            },

            selectedSubZone() {
                this.getGeneratorsData()
                this.generatorsData.current_page = 1
            },

            core(newValue) {
                this.getGeneratorsData()
            },

            critic(newValue) {
                this.getGeneratorsData()
            },

            vip(newValue) {
                this.getGeneratorsData()
            }
        },

        mounted() {
            this.getCrms()
            this.getBrands()
            this.getTypes()
            this.getSubZones()
            this.getGeneratorsData()
        },

        methods: {
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms
                })
            },

            getBrands() {
                axios.get(`/api/genplaBrands`)
                .then((response) => {
                    this.brands = response.data
                })
            },

            getTypes() {
                axios.get(`/api/genplaTypes`)
                .then((response) => {
                    this.types = response.data
                })
            },

            getSubZones() {
                axios.get(`/api/genplaSubZones`)
                .then((response) => {
                    this.subZones = response.data
                })
            },

            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
                this.selectedZona = null
                this.zonas = crm.zonas
                this.getGeneratorsData()
            },

            selectZona(zona) {
                console.log(zona)
                this.selectedZona = this.selectedZona != zona ? zona : null
                this.getGeneratorsData()
            },

            getGeneratorsData() {
                this.isLoading = true
                let params = {
                    'page': this.generatorsData.current_page,
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
                console.log(params)
                axios.get('/api/generatorsPlatform', { params: params })
                .then((response) => {
                    // console.log(response)
                    this.generatorsData = response.data
                    this.isLoading = false
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getGeneratorsData()
            },

            generatorExport() {
                this.isbuttonLoading = true

                var params = {
                    'text': this.searchText,
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                    'brand_id': this.selectedBrand ? this.selectedBrand.id : 0,
                    'group_type_id': this.selectedType ? this.selectedType : 0,
                    'sub_zone_id': this.selectedSubZone ? this.selectedSubZone : 0,
                    'critic': this.critic,
                    'vip': this.vip
                }

                axios.get('/api/generatorsPlatformExport', { 
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
                    link.download = `Listado Grupos Electrógenos - ${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                    link.click()
                    
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
            }
        }
    }
</script>
