<template>
    <section class="section">
        <div class="container">
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

            <div class="columns">
                <div class="column tile is-parent"
                    v-for="zona in zonas"
                    :key="zona.id"
                    @click="currentZonaId = (currentZonaId === zona.id ? 0 : zona.id); currentCrmId = 0">

                    <div class="tile is-child box has-text-centered p-1" :class="currentZonaId == zona.id ? 'is-bold is-link' : ''">
                        <div 
                            v-text="zona.sigla_crm"
                            class="is-size-4 has-text-weight-semibold">
                        </div>
                        <div style="padding-top: 5px;">
                            <div class="is-size-7 has-text-weight-normal">
                                {{ zona.cod_zona }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                        default-sort="user.first_name"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        aria-page-label="Page"
                        aria-current-label="Current page">

                        <!-- <b-table-column field="id" label="ID" width="10" sortable numeric>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">
                                    {{ props.row.id }}
                                </div>
                            </template>
                        </b-table-column> -->

                        <b-table-column field="g_zone.name" label="Ubicación" width="5" sortable>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">
                                    {{ props.row.g_zone.name }}
                                </div>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Nombre" width="10" sortable searchable>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">
                                    {{ props.row.name }}
                                </div>
                            </template>
                        </b-table-column>

                        <b-table-column field="mobile_code" label="Nemónico" width="10" sortable searchable>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">
                                    {{ props.row.mobile_code }}
                                </div>
                            </template>
                        </b-table-column>

                        <b-table-column field="g_model.g_brand.name" label="Marca" width="10" sortable searchable>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">
                                    {{ props.row.g_model && props.row.g_model.g_brand ? props.row.g_model.g_brand.name : 'N/A' }}
                                </div>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="HF Día" width="10" sortable numeric>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <generator-slot :generator="props.row" :data_type="'hf'"/>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Prom. Consumo" width="10" sortable numeric>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <generator-slot :generator="props.row" :data_type="'average_consumption'"/>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Niv. Combustible" width="20" sortable numeric>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <generator-slot :generator="props.row" :data_type="'fuel_level'"/>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Horometro" width="10" sortable numeric>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <generator-slot :generator="props.row" :data_type="'hourmeter'"/>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Mantención" width="10" sortable>
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

                        <b-table-column field="date" label="Fichas" width="5" centered>
                            <template v-slot:header="{ column }">
                                <div class="is-size-6">{{ column.label }}</div>
                            </template>
                            <template v-slot="props">
                                <generator-slot :generator="props.row" :data_type="'fichas'" :user="user"/>
                            </template>
                        </b-table-column>

                    </b-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    var moment = require('moment')
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faClipboard as farClipboard } from '@fortawesome/free-regular-svg-icons'
    library.add(faSearch, faBars, farClipboard);

    export default {
        components: {
            GeneratorSlot: () => import(/* webpackChunkName: "chunks/generators/generatorSlot"*/'./GeneratorSlot'),
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                zonas: Array,

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

                // searchText: '',
                currentCrmId: 0,
                currentZonaId: null,
                
                
            }
        },

        computed: {
            selectedZonaId() {
                return this.currentZonaId && this.currentZonaId.id
            }
        },

        watch: {
            currentCrmId(newValue) {
                this.getGeneratorsData()
                this.currentZonaId = null
                // console.log(this.currentCrmId)
            },

            currentZonaId(newValue) {
                console.log(this.currentZonaId)
                this.getGeneratorsData()
            },
        },

        mounted() {
            this.getCrms()
            this.getZonas()
            this.getGeneratorsData()
        },

        methods: {
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms
                })
            },

            getZonas() {
                axios.get(`/api/zonas`)
                .then((response) => {
                    // console.log(response.data)
                    this.zonas = response.data.zonas
                })
            },

            getGeneratorsData() {
                let params = {
                    // 'page': this.generatorsData.current_page,
                    // 'text': this.searchText,
                    'crm_id': this.currentCrmId,
                    'zona_id': this.currentZonaId
                }
                axios.get('/api/generatorsPlatform', { params: params })
                .then((response) => {
                    // console.log(response.data)
                    this.generatorsData = response
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
                    console.log(response.data[0])
                    this.last_data = response.data[0]
                })
            },

        }
    }
</script>
