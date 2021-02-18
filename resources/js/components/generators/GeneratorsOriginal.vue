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
                                        <a class="is-fullwidth button" :class="selectedCrm == crm ? 'is-link' : 'is-black-ter'" @click="selectCrm(crm)">
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
                                        <a class="is-fullwidth button" :class="selectedZona == zona ? 'is-link' : 'is-black-ter'" @click="selectZona(zona)">
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
                                        <a class="is-fullwidth button" :class="core ? 'is-link' : 'is-black-ter'" @click="core = +!core" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">CORE</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="column is-12">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="critic ? 'is-link' : 'is-black-ter'" @click="critic = +!critic" >
                                            <div :class="secondaryText"> 
                                                <div class="is-size-7 has-text-weight-normal has-text-light">CRITICO</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="column is-12">
                                    <div class="field" style="margin: 1px;">
                                        <a class="is-fullwidth button" :class="vip ? 'is-link' : 'is-black-ter'" @click="vip = +!vip" >
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
                                        <a class="is-fullwidth button" :class="selectedBrand == brand ? 'is-link' : 'is-black-ter'" @click="selectedBrand = selectedBrand != brand ? brand : null">
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
                <!-- <div class="field">
                    <div class="columns">
                        <div class="column tile is-parent"
                            v-for="crm in crms"
                            :key="crm.id"
                            @click="currentCrmId = currentCrmId === crm.id ? 0 : crm.id">

                            <div class="tile is-child box has-text-centered p-3" :class="currentCrmId === crm.id ? 'is-bold is-link' : ''">
                                <div 
                                    v-text="crm.sigla_crm"
                                    class="is-size-4 has-text-weight-semibold">
                                </div>
                                <div style="padding-top: 5px;">
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ crm.nombre_crm }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="level">
                        <div class="level-item"
                            v-for="zona in zonas"
                            :key="zona.id"
                            @click="currentZonaId = (currentZonaId === zona.id ? 0 : zona.id); currentCrmId = 0">

                            <div class="box has-text-centered p-3" :class="currentZonaId == zona.id ? 'is-bold is-link' : ''">
                                <div style="padding-top: 5px;">
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ zona.cod_zona }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns is-multiline">
                        <div class="column is-3"
                            v-for="brand in brands"
                            :key="brand.id"
                            @click="currentBrandId = currentBrandId === brand.id ? 0 : brand.id">

                            <div class="box has-text-centered p-3" :class="currentBrandId == brand.id ? 'is-bold is-link' : ''">
                                <div style="padding-top: 5px;">
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ brand.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div> -->

                <div class="field columns">
                    <!-- <div class="column is-2">
                    </div> -->
                    <div class="column">
                        <div class="box">
                            <div class="field">
                                <!-- <b-field grouped group-multiline>
                                    <b-select v-model="defaultSortDirection">
                                        <option value="asc">Default sort direction: ASC</option>
                                        <option value="desc">Default sort direction: DESC</option>
                                    </b-select>
                                    <b-select v-model="perPage" :disabled="!isPaginated">
                                        <option value="5">5 per page</option>
                                        <option value="10">10 per page</option>
                                        <option value="15">15 per page</option>
                                        <option value="20">20 per page</option>
                                    </b-select>
                                    <div class="control">
                                        <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
                                    </div>
                                    <div class="control is-flex">
                                        <b-switch v-model="isPaginated">Paginated</b-switch>
                                    </div>
                                    <div class="control is-flex">
                                        <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
                                    </div>
                                    <div class="control is-flex">
                                        <b-switch v-model="isPaginationRounded" :disabled="!isPaginated">Rounded pagination</b-switch>
                                    </div>
                                    <b-select v-model="paginationPosition" :disabled="!isPaginated">
                                        <option value="bottom">bottom pagination</option>
                                        <option value="top">top pagination</option>
                                        <option value="both">both</option>
                                    </b-select>
                                    <b-select v-model="sortIcon">
                                        <option value="arrow-up">Arrow sort icon</option>
                                        <option value="menu-up">Caret sort icon</option>
                                        <option value="chevron-up">Chevron sort icon </option>
                                    </b-select>
                                    <b-select v-model="sortIconSize">
                                        <option value="is-small">Small sort icon</option>
                                        <option value="">Regular sort icon</option>
                                        <option value="is-medium">Medium sort icon</option>
                                        <option value="is-large">Large sort icon</option>
                                    </b-select>
                                </b-field> -->

                                <b-table
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


                                    <!-- <b-table-column field="id" label="ID"  sortable numeric>
                                        <template v-slot:header="{ column }">
                                            <div class="is-size-6">{{ column.label }}</div>
                                        </template>
                                        <template v-slot="props">
                                            <div class="is-size-6">
                                                {{ props.row.id }}
                                            </div>
                                        </template>
                                    </b-table-column> -->

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
                                </b-table>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="column is-2">
                    </div> -->
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
    var moment = require('moment')
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faSearch, faBars, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faClipboard as farClipboard } from '@fortawesome/free-regular-svg-icons'
    library.add(faSearch, faBars, farClipboard, faSortDown, faSortUp);

    export default {
        components: {
            GeneratorSlot: () => import(/* webpackChunkName: "chunks/generators/generatorSlot"*/'./GeneratorSlot'),
            TableColumns: () => import(/* webpackChunkName: "chunks/generators/tableColumns"*/'./TableColumns'),
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                zonas: Array,
                brands: Array,
                generatorsData: Object,
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 20,
                selectedCrm: null,
                selectedZona: null,
                selectedBrand: null,
                isLoading: false,
                row: null,
                last_data: null,
                last_day_data: null,
                secondaryText: '',
                selectedSecondaryBoxText: 'has-text-light',
                core: 0,
                critic: 0,
                vip: 0,
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
                    // 'page': this.generatorsData.current_page,
                    // 'text': this.searchText,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                    'brand_id': this.selectedBrand ? this.selectedBrand.id : 0,
                    'core': this.core,
                    'critic': this.critic,
                    'vip': this.vip
                }
                axios.get('/api/generatorsPlatform', { params: params })
                .then((response) => {
                    this.generatorsData = response
                    this.isLoading = false
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getGeneratorsData()
            },

            async getLastDayData(generator_id) {
                let params = {
                    'generator_id': parseInt(generator_id)
                }

                await axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    this.last_day_data = response.data
                    this.last_data = response.data[0]
                })
            },

            rowData(data) {
                this.getLastDayData(data.id)
            }

        }
    }
</script>
