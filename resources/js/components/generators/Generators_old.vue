<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column tile is-parent"
                    v-for="crm in crms"
                    :key="crm.id"
                    @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">

                    <div class="tile is-child box has-text-centered" :class="currentCrm === crm.id ? 'is-bold is-link' : ''">
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

            <div class="box ">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input 
                            class="input is-rounded" 
                            @keyup="getGeneratorsData" 
                            v-model="searchText" 
                            type="text" 
                            arial-label="Buscar" 
                            placeholder="Buscar por nombre, cod. móvil o marca" 
                            autofocus>
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="search"/>
                        </span>
                        <span class="icon is-small is-right">
                            <button class="delete" @click="clearSearch"></button>
                        </span>
                    </div>
                </div>

                <div class="field">          
                    <table class="table is-fullwidth">
                        <thead>
                            <tr>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id"># ID</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Ubicación</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Nombre</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Marca</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">HF Día</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Prom. Consumo</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Niv. Combustible</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Horometro</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Mantención</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Ficha</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold"><abbr title="id">Mantenciones</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="is-size-7 has-text-weight-light" v-for="generator in generatorsData.data">
                                <td hidden>{{ getLastValues(generator.id) }}</td>
                                <td class="has-text-weight-light">
                                    {{ generator.id }}
                                </td>
                                
                                <td class="has-text-weight-light has-text-centered">
                                    {{ generator.g_zone && generator.g_zone.name }}
                                </td>

                                <td class="">
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ generator.name }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ generator.mobile_code }}
                                    </div>
                                </td>
                                <td class="has-text-weight-light">
                                    {{ generator.g_model && generator.g_model.g_brand ? generator.g_model.g_brand.name : 'N/A' }}
                                </td>

                                <td class="">
                                    <div class="has-text-weight-light has-text-centered">
                                        <GeneratorSlotHF :last_data="last_data"/>
                                        <!-- {{ hourmeter_consumption(last_data) | numeral('0,0.00') }} -->
                                    </div>
                                </td>

                                <td class="">
                                    <div class="has-text-weight-light has-text-centered">
                                        <!-- <GeneratorColumn :generator="generator" :last_data="last_data" :data_type="'average_consumption'"/> -->
                                        <!-- {{ last_values(generator.id) }} -->
                                    </div>
                                </td>

                                <td class="has-text-weight-light has-text-centered">
                                    <!-- <div v-if="">
                                        <b-progress :value="last_data.fuel_level_percentage * 100" size="is-medium" show-value 
                                        :type="last_data.fuel_level_percentage <= 0.2 ? 'is-danger' : (last_data.fuel_level_percentage > 0.2 && last_data.fuel_level_percentage <= 0.5 ? 'is-warning' : 'is-success')">
                                            <span class="">
                                                {{ last_data.fuel_level_percentage * 100 | numeral('0,0.0') }}%
                                            </span>
                                            &nbsp;
                                            <span v-if="generator.g_model.g_fuel_pond" class="has-text-weight-normal">
                                                {{ last_data.fuel_level + '/' + generator.g_model.g_fuel_pond.capacity }}
                                            </span>
                                        </b-progress>
                                    </div> -->
                                </td>
                                <td class="has-text-weight-light has-text-centered">
                                    <!-- <GeneratorColumn :generator="generator" :last_data="last_data" :data_type="'hourmeter'"/> -->
                                    <!-- <div class="has-text-weight-light">
                                        {{ generator.g_last_values ? generator.g_last_values.hourmeter : 'N/A' }}
                                    </div> -->
                                </td>
                                <td class="has-text-weight-light has-text-centered">
                                    <div class="has-text-weight-light">
                                        {{ generator.g_last_maintance ? generator.g_last_maintance.created : 'N/A' }}
                                    </div>
                                </td>
                                
                                <td class="has-text-weight-light has-text-centered">
                                    <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text" @click="generatorSelected = generator; isGeneratorDetailModalActive = true">
                                        <font-awesome-icon :icon="['far','clipboard']"/>
                                    </button>
                                </td>
                                <td class="has-text-weight-light has-text-centered">
                                    <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                                        <font-awesome-icon icon="bars"/>
                                    </button>
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
                    </div>
                </div>
               
            </div>
        </div>

        <b-modal :active.sync="isGeneratorDetailModalActive"
            has-modal-card
            full-screen
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-detail
                :generator="generatorSelected" 
                :user="user"
                />
        </b-modal>
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
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
            GeneratorDetail: () => import(/* webpackChunkName: "chunks/generators/modals/generatorDetail"*/'./modals/GeneratorDetail'),
            GeneratorSlotHF: () => import(/* webpackChunkName: "chunks/generators/generatorSlotHF"*/'./GeneratorSlotHF'),
            GeneratorColumn: () => import(/* webpackChunkName: "chunks/generators/generatorColumn"*/'./GeneratorColumn')
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                generatorsData: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1,
                },
                searchText: '',
                currentCrm: 0,
                generatorSelected: null,
                isGeneratorDetailModalActive: false,

                last_data: null,
                last_day_data: Object
            }
        },

        computed: {
        },

        watch: {
            currentCrm(newValue) {
                this.getGeneratorsData()
                // console.log(this.currentCrm)
            },
        },

        mounted() {
            this.getCrms()
            this.getGeneratorsData()
        },

        methods: {
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms
                })
            },

            getGeneratorsData() {
                let params = {
                    'page': this.generatorsData.current_page,
                    'text': this.searchText,
                    'crm_id': this.currentCrm
                }
                axios.get('/api/generatorsPlatform', { params: params })
                .then((response) => {
                    // console.log(response.data)
                    this.generatorsData = response.data
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getGeneratorsData()
            },

            getLastValues(generator_id) {  
                axios.get(`/api/generatorLastValues/${generator_id}`)
                .then((response) => {
                    console.log(response.data)
                    this.last_data = response.data
                })
            },

            hourmeter_consumption() {
                let data = null
                let i = 0
                Object.keys(this.last_day_data).forEach(element => {
                    data = data + this.last_day_data[element].hourmeter_consumption
                    i++
                })

                return data ? data / i : 'N/A'
            },

            fuel_consumption() {
                let data = null
                let i = 0
                Object.keys(this.last_day_data).forEach(element => {
                    data = data + this.last_day_data[element].fuel_consumption
                    i++
                })

                return data ? data / i : 'N/A'
            },

            // last_values(generator_id) {
            //     this.last_data.fuel_consumption = null
            //     this.last_data.fuel_level = null
            //     this.last_data.fuel_level_percentage = null
            //     this.last_data.hourmeter = null
            //     this.last_data.hourmeter_consumption = null
                
            //     axios.get(`/api/generatorLastValues/${generator_id}`)
            //     .then((response) => {
            //         console.log(response.data)
            //         this.last_data.fuel_consumption = response.data.fuel_consumption
            //         this.last_data.fuel_level = response.data.fuel_level
            //         this.last_data.fuel_level_percentage = response.data.fuel_level_percentage
            //         this.last_data.hourmeter = response.data.hourmeter
            //         this.last_data.hourmeter_consumption = response.data.hourmeter_consumption
            //     })
            // },

            last_day_values(generator_id, created_at) {
                let params = {
                    'generator_id': generator_id,
                    'created_at': moment(created_at, "YYYY-MM-DD hh:mm:ss").format("YYYY-MM-DD")
                }

                axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    console.log(response)
                })
            },

            // fuel_level_percentage(generator) {
            //     console.log(generator)
            //     return this.last_values(generator.id) ? this.last_values(generator.id).fuel_level_percentage : null
            // }

        }
    }
</script>
