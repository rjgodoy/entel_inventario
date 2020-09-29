<template>
    <div :class="">
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

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros CARACTERISTICAS -->
                        <div class="column is-4">
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
                        </div>

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros EQUIPAMIENTO -->
                        <div class="column is-3">
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
                        </div>
                    </div>
                </div>
            </div>
        </b-collapse>
        <div class="card-footer">
            <a class="card-footer-item item is-link is-bold"
                style="position: relative;" 
                @click="isDownloadModalActive=true"
                icon-pack="fas"
                size="is-medium"
                :loading="isLoading">
                <b-icon 
                    style=""
                    pack="fas" 
                    icon="download" 
                    class="has-text-eco fa-2x">
                </b-icon> 
                &nbsp;&nbsp;
                <div class="is-size-6 has-text-weight-normal">Descargar listado filtrado de POPs</div>
                <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                <!-- </b-button> -->
            </a>
            <div class="card-footer-item has-background-white">
                <div class="has-text-centered">
                    <span class="is-size-3 has-text-weight-semibold">
                        {{ pops.total | numeral('0,0')}}
                    </span>
                    <span class="is-size-6">POPs</span>
                </div>
            </div>
            <div class="card-footer-item has-background-white">
                <div class="snippet">
                    <span class="has-text-weight-normal">
                        <span class="is-size-6" v-if="!selectedPops.length">Selecciona los POP que desees del costado izquierdo de la tabla.</span>
                        <span class="is-size-7" v-if="selectedPops.length"><strong>{{ selectedPops.length }}</strong> pops seleccionados</span>
                    </span>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control" v-for="pop in selectedPops" :key="pop.id">
                            <div class="tags has-addons">
                                <a class="tag is-link">{{ pop.nombre }}</a>
                                <a class="tag is-delete" @click="removeSelectedPop(pop)"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="section has-background-white is-paddingless">
            <div class="columns is-marginless">
                <div class="column tile is-parent is-5 is-paddingless">
                    <div class="tile is-child box is-shadowless" style="max-height: 100%; min-height: 800px; padding-bottom: 48px">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input 
                                    class="input is-rounded" 
                                    :class="bodyBackground + ' ' + primaryText" 
                                    @keyup="getPops"
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
                                    <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Id">Id</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">Nombre POP</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-centered" :class="secondaryText"><abbr title="Sitios">Sitios</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-centered" :class="secondaryText"><abbr title="Categoría">Categoría</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr class="" v-for="pop in pops.data" :key="pop.id">
                                    <td class="has-text-weight-light" :class="primaryText">
                                        <b-checkbox v-model="selectedPops"
                                            size="is-medium"
                                            :native-value="pop">
                                        </b-checkbox>
                                    </td>

                                    <td class="">
                                        <!-- <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? pop.sites[0].nem_site : '' }}
                                        </div> -->
                                        <a :href="'/pop/' + pop.id" target="_blank" class="is-size-6 has-text-weight-normal">
                                            {{ pop ? pop.nombre : '' }}
                                        </a>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? pop.direccion : '' }}, {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}
                                        </div>
                                    </td>

                                    <td class="">
                                        <div class="columns is-multiline">
                                            <div class="column is-6 has-text-centered" v-for="site in pop.sites" :key="site.id">
                                                <div class="is-size-7 has-text-weight-normal has-text-centered">{{ site.nem_site }}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <!-- <td class="">
                                        <div class="is-size-6 has-text-weight-light" :class="secondaryText">
                                            {{ pop ? pop.direccion : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop.comuna.zona ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop.comuna.zona.crm ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </td> -->

                                    <td class="">
                                        <div class="has-text-centered">
                                            <div class="tag has-text-weight-bold is-size-7">
                                                {{ pop ? popClassification(pop).classification : '' }}
                                            </div>
                                        </div>
                                    </td>

                                    <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                        <a 
                                            class="button is-small is-link is-outlined has-tooltip-left" 
                                            :href="'/pop/' + pop.id" 
                                            type="button" 
                                            target="_blank"  
                                            data-tooltip="Ver información completa"
                                            >
                                            <font-awesome-icon icon="info"/>
                                        </a>

                                        <button 
                                            class="button is-small is-default" 
                                            @click="selectPop(pop)" 
                                            data-tooltip="Ver en mapa"
                                            >
                                            <font-awesome-icon icon="map-marked-alt"/>
                                        </button>

                                    </td>

                                </tr>    
                            </tbody>
                        </table>

                        <div class="block">
                            <nav class="pagination" role="navigation" aria-label="pagination">
                                <vue-pagination  
                                    :pagination="pops"
                                    @paginate="getPops()"
                                    :offset="4"
                                    :primaryText="primaryText">
                                </vue-pagination>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="column tile is-parent is-paddingless">
                    <div class="tile is-child map-container">
                        <map-view
                            :user="user"
                            :pops="popsMap"
                            :map_attributes="map_attributes"
                            :darkMode="darkMode"                    
                        ></map-view>
                    </div> 
                </div>
            </div>
        </section>

        <b-modal :active.sync="isDownloadModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-download
                @clicked="onClickDownload"
                />
        </b-modal>

    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDownload, faSortDown, faSortUp, faSearch, faInfo, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faDownload, faSortDown, faSortUp, faSearch, faInfo, faMapMarkedAlt);

export default {
    components: {
        MapView: () => import(/* webpackChunkName: "chunks/maps/mapView"*/'../maps/PopsMapView.vue'),
        ModalDownload: () => import(/* webpackChunkName: "chunks/dashboard/modalDownload"*/'../dashboard/ModalDownload'),
        VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
    },
    props : [
        'user',
        'darkMode'
    ],
    data() {
        return {
            crms: null,
            zonas: null,
            filters: [],
            // pops: [],
            popsMap: [],

            pops: {
                total: 0,
                per_page: 10,
                from: 1,
                to: 0,
                current_page: 1
            },

            map_attributes: {
                latitude: -33.44444275,
                longitude: -70.6561017,
                zoom: 5
            },

            equipments: {
                electric_line: {
                    label: 'Línea Eléctrica',
                    selected: 0
                },
                junction: {
                    label: 'Empalme',
                    selected: 0
                },
                generator_set: {
                    label: 'Grupo Electrógeno',
                    selected: 0
                },
                power_rectifier: {
                    label: 'Planta Rectificadora',
                    selected: 0
                },
                air_conditioner: {
                    label: 'Aire Acondicionado',
                    selected: 0
                },
                vertical_structure: {
                    label: 'Estructura Vertical',
                    selected: 0
                },
                infrastructure: {
                    label: 'Infraestructura',
                    selected: 0
                }
            },

            characteristics: {
                pe_3g: {
                    label: 'PE 3G',
                    selected: 0
                },
                mpls: {
                    label: 'MPLS',
                    selected: 0
                },
                olt: {
                    label: 'OLT',
                    selected: 0
                },
                olt_3play: {
                    label: 'OLT 3Play',
                    selected: 0
                },
                red_minima_n1: {
                    label: 'Red Mínima N1',
                    selected: 0
                },
                red_minima_n2: {
                    label: 'Red Mínima N2',
                    selected: 0
                },
                lloo: {
                    label: 'Localidad Obligatoria',
                    selected: 0
                },
                ranco: {
                    label: 'RANCO',
                    selected: 0
                },
                bafi: {
                    label: 'BAFI',
                    selected: 0
                },
                offgrid: {
                    label: 'Offgrid',
                    selected: 0
                },
                solar: {
                    label: 'Solar',
                    selected: 0
                },
                eolica: {
                    label: 'Eólica',
                    selected: 0
                },
                protected_zone: {
                    label: 'Zona protegida',
                    selected: 0
                },
                alba_project: {
                    label: 'Proyecto Alba',
                    selected: 0
                },
            },

            bodyBackground: '',
            boxBackground: '',
            primaryText: '',
            secondaryText: '',
            searchBodyBackground: '',

            selectedPrimaryBoxText: 'has-text-white',
            selectedSecondaryBoxText: 'has-text-light',
            
            isLoading: false,

            // selectedPop: null,
            selectedPops: [],
            selectedCrm: null,
            selectedZona: null,
            searchText: '',

            core: 0,
            critic: 0,
            vip: 0,

            isDownloadModalActive: false,
            cells: Array,

            // checkboxPosition: 'left',
            // isPaginated: true,
            // isPaginationSimple: false,
            // paginationPosition: 'bottom',
            // defaultSortDirection: 'asc',
            // sortIcon: 'arrow-up',
            // sortIconSize: 'is-small',
            // currentPage: 1,
            // perPage: 20
        }
    },

    created() {
        
    },

    mounted() {
        this.styleMode()
        this.getCrms()
        this.getFilterButtons()
        this.getPops()
        // this.getPopsMap()
    },

    watch: {
        core(val) { 
            this.getPops();
            // this.getPopsMap() 
        },

        critic(val) { 
            this.getPops();
            // this.getPopsMap() 
        },

        vip(val) { 
            this.getPops();
            // this.getPopsMap() 
        },


        selectedPops(val) { 
            val.length != 0 ? this.popsMap = val : this.getPops()
        }
    },

    computed: {
        selectedIds() {
            var popIds = []
            this.selectedPops.forEach(element => {
                popIds.push(element.id)
            })
            return popIds
        }
    },

    methods: {
        // BUTTONS
        getCrms() {
            axios.get(`/api/crms`)
            .then((response) => {
                this.crms = response.data.crms;
            })
            .catch(() => {
                console.log('handle server error from here');
            });
        },

        getFilterButtons() {
            axios.get(`/api/filters`)
            .then((response) => {
                // console.log(response.data)
                this.filters = response.data;
            })
        },

        changeEquipment(equipment) {
            equipment.selected = +!equipment.selected
            this.getPops()
            // this.getPopsMap()
        },

        changeCharacteristic(characteristic) {
            characteristic.selected = +!characteristic.selected
            this.getPops()
            // this.getPopsMap()
        },

        selectPop(pop) {
            this.popsMap = [pop]
        },

        selectCrm(crm) {
            // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
            // si había una zona seleccionada, la variable selectedZona será null.
            this.selectedCrm = this.selectedCrm != crm ? crm : null
            this.selectedZona = null
            this.zonas = crm.zonas
            this.getPops()
            // this.getPopsMap()
        },

        selectZona(zona) {
            this.selectedZona = this.selectedZona != zona ? zona : null
            this.getPops()
            // this.getPopsMap()
        },

        popClassification(pop) {
            var id = 6; var classification
            if (pop.sites) {
                pop.sites.forEach((item) => {
                    if (item.classification_type_id && item.classification_type_id < id) { 
                        id = item.classification_type_id
                        classification = item.classification_type.classification_type
                    }
                })
            }
            return {
                'classification': classification, 
                'id': id
            }
        },

        // APIs
        getPops() {
            var params = {
                'page': this.pops.current_page,
                'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                'text': this.searchText != '' ?  this.searchText : 0,

                'core': this.core,
                'critic': this.critic,
                'vip': this.vip,

                'pe_3g': this.characteristics.pe_3g.selected,
                'mpls': this.characteristics.mpls.selected,
                'olt': this.characteristics.olt.selected,
                'olt_3play': this.characteristics.olt_3play.selected,
                'red_minima_n1': this.characteristics.red_minima_n1.selected,
                'red_minima_n2': this.characteristics.red_minima_n2.selected,
                'lloo': this.characteristics.lloo.selected,
                'ranco': this.characteristics.ranco.selected,
                'bafi': this.characteristics.bafi.selected,
                'offgrid': this.characteristics.offgrid.selected,
                'solar': this.characteristics.solar.selected,
                'eolica': this.characteristics.eolica.selected,
                'alba_project': this.characteristics.alba_project.selected,
                'protected_zone': this.characteristics.protected_zone.selected,

                'electric_line': this.equipments.electric_line.selected,
                'junction': this.equipments.junction.selected,
                'generator_set': this.equipments.generator_set.selected,
                'power_rectifier': this.equipments.power_rectifier.selected,
                'air_conditioner': this.equipments.air_conditioner.selected,
                'vertical_structure': this.equipments.vertical_structure.selected,
                'infrastructure': this.equipments.infrastructure.selected
            }

            axios.get('/api/filterPops', { params: params })
            .then((response) => {
                // console.log(response)
                this.pops = response.data
                setInterval(this.getPopsMap(params), 200)
            })
        },

        // APIs
        getPopsMap(params) {
            // var params = {
            //     'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
            //     'zona_id': this.selectedZona ? this.selectedZona.id : 0,
            //     'text': this.searchText != '' ?  this.searchText : 0,

            //     'core': this.core,
            //     'critic': this.critic,
            //     'vip': this.vip,

            //     'pe_3g': this.characteristics.pe_3g.selected,
            //     'mpls': this.characteristics.mpls.selected,
            //     'olt': this.characteristics.olt.selected,
            //     'olt_3play': this.characteristics.olt_3play.selected,
            //     'red_minima_n1': this.characteristics.red_minima_n1.selected,
            //     'red_minima_n2': this.characteristics.red_minima_n2.selected,
            //     'lloo': this.characteristics.lloo.selected,
            //     'ranco': this.characteristics.ranco.selected,
            //     'bafi': this.characteristics.bafi.selected,
            //     'offgrid': this.characteristics.offgrid.selected,
            //     'solar': this.characteristics.solar.selected,
            //     'eolica': this.characteristics.eolica.selected,
            //     'alba_project': this.characteristics.alba_project.selected,
            //     'protected_zone': this.characteristics.protected_zone.selected,

            //     'electric_line': this.equipments.electric_line.selected,
            //     'junction': this.equipments.junction.selected,
            //     'generator_set': this.equipments.generator_set.selected,
            //     'power_rectifier': this.equipments.power_rectifier.selected,
            //     'air_conditioner': this.equipments.air_conditioner.selected,
            //     'vertical_structure': this.equipments.vertical_structure.selected,
            //     'infrastructure': this.equipments.infrastructure.selected
            // }

            axios.get('/api/popsMap', { params: params })
            .then((response) => {
                // console.log(response.data)
                this.popsMap = response.data

            })
        },

        // Style mode
        styleMode(){
            if (this.darkMode == 1) {
                // dark mode
                this.bodyBackground = 'has-background-black-ter'
                this.boxBackground = 'has-background-dark'
                this.primaryText = 'has-text-white'
                this.secondaryText = 'has-text-light'
                this.searchBodyBackground = 'has-background-dark'
            } else {
                // light mode
                this.bodyBackground = 'has-background-light'
                this.boxBackground = 'has-background-white'
                this.primaryText = 'has-text-dark'
                this.secondaryText = 'has-text-grey'
                this.searchBodyBackground = 'has-background-white'
            }
        },

        changeStyle() {
            if (this.darkMode == 0) {
                this.darkMode = 1
                this.styleMode()
            } else {
                this.darkMode = 0
                this.styleMode()
            }
        },

        clearSearch() {
            this.searchText = ''
            this.popSearch = []
            // this.selectedPop = null
            this.selectedPops = []
            this.selectedCrm = null
            this.selectedZona = null
            this.getPops()
        },

        // addPop(pop) {
        //     if (this.selectedPops.includes(pop)) {
        //         console.log('fail')
        //     //     var index = this.selectedPops.indexOf(pop);
        //     //     if (index > -1) {
        //     //       this.selectedPops.splice(index, 1);
        //     //     }
        //     } else {
        //         pop.selected = true
        //         this.selectedPops.push(pop)
        //         console.log(this.selectedPops)
        //         this.pops = this.selectedPops
        //     }
        // },

        removeSelectedPop(item){
            item.selected = false
            for( var i = 0; i < this.selectedPops.length; i++){ 
                if ( this.selectedPops[i] === item) {
                    this.selectedPops.splice(i, 1); 
                }
            }
        },

        downloadPops() {
            this.isLoading = true

            var params = {
                'selectedIds': this.selectedIds,
                'text': this.searchText != '' ?  this.searchText : 0,

                'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                
                'core': this.core,
                'critic': this.critic,
                'vip': this.vip,

                'pe_3g': this.characteristics.pe_3g.selected,
                'mpls': this.characteristics.mpls.selected,
                'olt': this.characteristics.olt.selected,
                'olt_3play': this.characteristics.olt_3play.selected,
                'red_minima_n1': this.characteristics.red_minima_n1.selected,
                'red_minima_n2': this.characteristics.red_minima_n2.selected,
                'lloo': this.characteristics.lloo.selected,
                'ranco': this.characteristics.ranco.selected,
                'bafi': this.characteristics.bafi.selected,
                'offgrid': this.characteristics.offgrid.selected,
                'solar': this.characteristics.solar.selected,
                'eolica': this.characteristics.eolica.selected,
                'alba_project': this.characteristics.alba_project.selected,
                'protected_zone': this.characteristics.protected_zone.selected,

                'electric_line': this.equipments.electric_line.selected,
                'junction': this.equipments.junction.selected,
                'generator_set': this.equipments.generator_set.selected,
                'power_rectifier': this.equipments.power_rectifier.selected,
                'air_conditioner': this.equipments.air_conditioner.selected,
                'vertical_structure': this.equipments.vertical_structure.selected,
                'infrastructure': this.equipments.infrastructure.selected,

                'resume': +this.cells.resume,
                'pops': +this.cells.pops,
                'sites': +this.cells.sites
            }

            axios.get('/api/pop/export', { 
                params: params, 
                responseType: 'arraybuffer' 
            })
            .then((response) => {
                console.log(response)
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
                link.download = 'listado_pops.xlsx'
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

        onClickDownload (value) {
            this.cells = value
            this.downloadPops()
        },

    }
}
</script>
