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
                                                <!-- <div class="is-size-7 has-text-weight-normal">Zona</div> -->
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ zona.nombre_zona }}</div>
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

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros CARACTERISTICAS -->
                        <!-- <div class="column is-4">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">CARACTERISTICAS</div>
                            <div class="columns is-multiline is-gapless">

                                <div class="column is-3" v-for="characteristic in characteristics">
                                    <div class="field" style="margin: 1px;">
                                        <a class="tile is-child button" :class="characteristic.selected ? 'is-link' : 'is-black-ter'" @click="changeCharacteristic(characteristic)" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ characteristic.label }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div> -->

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros EQUIPAMIENTO -->
                        <!-- <div class="column is-3">
                            <div class="is-size-6 has-text-weight-normal has-text-centered has-text-grey-light" style="padding-bottom: 8px;">EQUIPAMIENTO</div>
                            <div class="columns is-multiline is-gapless">

                                <div class="column is-4" v-for="equipment in equipments">
                                    <div class="field" style="margin: 1px;">
                                        <a class="tile is-child button" 
                                            :class="equipment.selected ? 'is-link' : 'is-black-ter'" @click="changeEquipment(equipment)">
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">{{ equipment.label }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div> -->
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

                            <table class="table is-fullwidth">
                                <thead>
                                    <tr>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Ubicación">Ubicación</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Nombre">Nombre</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Nemónico">Nemónico</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Marca">Marca Contratos</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="HF Día">HF Día</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Prom. Consumo">Prom. Consumo</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Niv. Combustible">Niv. Combustible</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Horometro">Horometro</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Mantención">Mantención</abbr></th>
                                        <th class="is-size-7 has-text-weight-semibold has-text-centered">Fichas</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr class="is-size-6" v-for="data in generatorsData.data">
                                        <td class="has-text-weight-bold">{{ data.g_zone ? data.g_zone.name : '' }}</td>
                                        <td class="">
                                            <div class="is-size-6 has-text-weight-normal">
                                                {{ data.name }}
                                            </div>
                                            <!-- <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                                {{ data.pop ? data.pop.comuna.nombre : '' }}
                                            </div>
                                            <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                                {{ data.pop ? 'Zona: ' + data.pop.comuna.zona.nombre : '' }} - {{ data.pop ? 'CRM: ' + data.pop.comuna.zona.crm.nombre : '' }}
                                            </div> -->
                                        </td>
                                        <td class="is-size-6 has-text-weight-light has-text-centered">{{ data.mobile_code }}</td>

                                        <td class="">
                                            <div class="is-size-6 has-text-weight-normal" :class="secondaryText">
                                                {{ data.g_model && data.g_model.g_brand ? data.g_model.g_brand.name : 'N/A' }}
                                            </div>
                                        </td>

                                        <td class="is-size-6 has-text-weight-light has-text-centered">
                                            <generator-slot :generator="data" :data_type="'hf'"/>
                                        </td>

                                        <td class="is-size-6 has-text-weight-light has-text-centered">
                                            <generator-slot :generator="data" :data_type="'average_consumption'"/>
                                        </td>

                                        <td class="is-size-6 has-text-weight-light has-text-centered">
                                            <generator-slot :generator="data" :data_type="'fuel_level'"/>
                                        </td>

                                        <td class="is-size-6 has-text-weight-light has-text-centered">
                                            <generator-slot :generator="data" :data_type="'hourmeter'"/>
                                        </td>

                                        <td class="has-text-weight-light has-text-centered">
                                            <div class="is-size-6">
                                                {{ data.g_last_maintance ? data.g_last_maintance.created : 'N/A' }}
                                            </div>
                                            <div class="is-size-7" v-if="data.g_last_maintance">
                                                <span class="tag is-default">
                                                    {{ data.g_last_maintance ? data.g_last_maintance.g_maintance_status.code : 'N/A' }}
                                                </span>
                                            </div>
                                        </td>

                                        <td class="has-text-weight-light has-text-centered">
                                            <generator-slot :generator="data" :data_type="'fichas'" :user="user"/>
                                            <!-- <generator-detail-button :generator="data" :data_type="'fichas'" :user="user"/> -->
                                        </td>
                                    </tr>    
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
                               
                                <!-- <b-table
                                    :data="generatorsData.data"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPage"
                                    :pagination-simple="isPaginationSimple"
                                    :pagination-position="paginationPosition"
                                    :default-sort-direction="defaultSortDirection"
                                    :pagination-rounded="isPaginationRounded"
                                    :sort-icon="sortIcon"
                                    :sort-icon-size="sortIconSize"
                                    :loading="isLoading"
                                    :row-class="(row, index) => rowData(row)"
                                    default-sort="user.first_name"
                                    aria-next-label="Next page"
                                    aria-previous-label="Previous page"
                                    aria-page-label="Page"
                                    aria-current-label="Current page">

                                    <b-table-column field="g_zone.name" label="Ubicación"  sortable>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.g_zone.name }}
                                            </div>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="Nombre"  sortable searchable>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.name }}
                                            </div>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="mobile_code" label="Nemónico"  sortable searchable>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.mobile_code }}
                                            </div>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="g_model.g_brand.name" label="Marca"  sortable searchable>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.g_model && props.row.g_model.g_brand ? props.row.g_model.g_brand.name : 'N/A' }}
                                            </div>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="HF Día"  sortable numeric>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <generator-slot :lastData="last_data" :generator="props.row" :data_type="'hf'"/>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="Prom. Consumo"  sortable numeric>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <generator-slot :lastData="last_data" :generator="props.row" :data_type="'average_consumption'"/>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="Niv. Combustible" width="180" centered loading>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <generator-slot :lastData="last_data" :generator="props.row" :data_type="'fuel_level'"/>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="Horometro"  sortable numeric>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <generator-slot :lastData="last_data" :generator="props.row" :data_type="'hourmeter'"/>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="name" label="Mantención"  sortable>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.g_last_maintance ? props.row.g_last_maintance.created : 'N/A' }}
                                            </div>
                                            <div class="is-size-7" v-if="props.row.g_last_maintance">
                                                <span class="tag is-default">
                                                    {{ props.row.g_last_maintance ? props.row.g_last_maintance.g_maintance_status.code : 'N/A' }}
                                                </span>
                                            </div>
                                        </template>
                                    </b-table-column>

                                    <b-table-column field="date" label="Fichas" width="100" centered>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <generator-slot :lastData="last_data" :generator="props.row" :data_type="'fichas'" :user="user"/>
                                        </template>
                                    </b-table-column>
                                </b-table> -->

                            </div>
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
    import { faSearch, faBars, faSortDown, faSortUp, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faClipboard as farClipboard } from '@fortawesome/free-regular-svg-icons'
    library.add(faSearch, faBars, farClipboard, faSortDown, faSortUp, faChevronLeft, faChevronRight);

    export default {
        components: {
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
            // GeneratorDetailButton: () => import(/* webpackChunkName: "chunks/generators/generatorDetailButton"*/'./GeneratorDetailButton'),
            GeneratorSlot: () => import(/* webpackChunkName: "chunks/generators/generatorSlot"*/'./GeneratorSlot'),
            // TableColumns: () => import(/* webpackChunkName: "chunks/generators/tableColumns"*/'./TableColumns'),
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                zonas: Array,
                brands: Array,
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
                core: 0,
                critic: 0,
                vip: 0,

                isLoading: false,

                // last_data: null,
                // last_day_data: null,
                secondaryText: '',
                selectedSecondaryBoxText: 'has-text-light',
                
            }
        },

        computed: {
            selectedZonaId() {
                return this.currentZonaId && this.currentZonaId.id
            }
        },

        watch: {
            selectedCrm(newValue) {
                this.getGeneratorsData()
                this.selectedZona = null
            },

            selectedZona(newValue) {
                this.getGeneratorsData()
            },

            selectedBrand(newValue) {
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

            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
                this.selectedZona = null
                this.zonas = crm.zonas
                this.getGeneratorsData()
            },

            selectZona(zona) {
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
                    'core': this.core,
                    'critic': this.critic,
                    'vip': this.vip
                }
                axios.get('/api/generatorsPlatform', { params: params })
                .then((response) => {
                    this.generatorsData = response.data
                    console.log(response)
                    this.isLoading = false
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getGeneratorsData()
            },



            // getLastDayData(generator_id) {
            //     let params = {
            //         'generator_id': parseInt(generator_id)
            //     }

            //     axios.get('/api/generatorLastDay', { params: params })
            //     .then((response) => {
            //         this.last_day_data = response.data
            //         this.last_data = response.data[0]
            //     })
            // },

            

        }
    }
</script>
