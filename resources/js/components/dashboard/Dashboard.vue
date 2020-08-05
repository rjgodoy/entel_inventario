<template>
    <div class="">
        
        <section class="section is-marginless" :class="bodyBackground">
            
            <!-- SWITCH CORE & CRM BUTTONS-->
            <div class="container" style="margin-top: -32px; margin-bottom: 20px">
                <b-field>
                    <div class="columns">
                        <div class="column">
                            <!-- <b-button class="button is-warning is-small is-pulled-left" @click="viewCriticPops" v-model="criticPopsSwitch">POP Críticos</b-button> -->
                        </div>
                        <div class="column has-text-centered">
                            <b-switch  
                                @input="switchCore" 
                                class="is-size-6 has-text-weight-semibold" 
                                :class="textSwitchCore" 
                                type="is-link"
                                size="is-medium" 
                                :outlined="true">
                                POP CORE
                            </b-switch>
                        </div>
                        <div class="column">
                            <!-- <b-button class="button is-link is-small is-pulled-right" @click="changeStyle" v-model="darkMode">Style</b-button> -->
                        </div>
                    </div> 
                </b-field>

                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="crm in crms" :key="crm.id">
                        <a class="tile is-child box is-bold" :class="selectedCrm == crm ? 'is-link' : 'is-white'" @click="selectCrm(crm)">
                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    CRM {{ crm.nombre_crm }}
                                </div>

                                <div style="margin-top: 10px;" class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
                                    <div class="is-size-7 has-text-weight-light" v-text="'Subgerente'"></div> 
                                    <div class="is-size-7 has-text-weight-normal">{{ crm.subgerente_crm }}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- ZONA BUTTONS -->
            <div v-if="selectedCrm != null" class="" :class="innerBackground + ' ' + bodyBackground" style="margin: 0 -24px 0 -24px">
                <div class="container" style="margin: -20px auto 10px auto;">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="zona in zonas" :key="zona.id">
                            <a class="tile is-child box is-bold" :class="selectedZona == zona ? 'is-link' : 'is-white'" @click="selectZona(zona)">
                                <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                    <div class="is-size-6 has-text-weight-semibold">
                                        Zona {{ zona.nombre_zona }}
                                    </div>

                                    <div style="margin-top: 10px;" class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
                                        <div class="is-size-7 has-text-weight-light">Coordinador</div> 
                                        <div class="is-size-7 has-text-weight-semibold">{{ zona.responsable.nombre }} {{ zona.responsable.apellido }}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" style="width: 50%; margin-top: 30px;">
                <b-autocomplete
                    autofocus
                    size="is-default"
                    :data="popSearch"
                    rounded
                    icon-pack="fas"
                    icon="search"
                    placeholder="Buscar por nemónico, nombre o direccion del sitio..."
                    :keep-first="true"
                    :open-on-focus="searchText ? true : false"
                    :custom-formatter="searchFormat"
                    :loading="isFetching"
                    :check-infinite-scroll="true"
                    clearable
                    @typing="getAsyncData"
                    @select="option => selected = option"
                    @infinite-scroll="getMoreAsyncData">
                    <template slot="header">
                        <div class="is-size-7 has-text-weight-semibold has-text-link"> {{ counter }} <span class="has-text-weight-normal">Sitios</span></div>
                    </template>

                    <template slot-scope="props">
                        <div class="columns" style="padding: 10px;">

                            <div class="column is-5">
                                <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                    <span>
                                        <b-tooltip :label="status(props.option).state" position="is-right" type="is-dark">
                                            <font-awesome-icon :icon="['fas', 'circle']" :class="status(props.option).id == 1 ? 'has-text-success' : (status(props.option).id == 2 ? 'has-text-danger' : (status(props.option).id == 0 ? '' : 'has-text-warning'))"/>
                                        </b-tooltip>
                                    </span>
                                    &nbsp;&nbsp;{{ props.option.nem_site }}
                                </div>
                                <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                    {{ props.option ? props.option.nombre : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? props.option.pop.comuna.nombre_comuna : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? 'Zona ' + props.option.pop.comuna.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.pop.comuna.zona.crm.nombre_crm : '' }}
                                </div>
                            </div>

                            <div class="column is-2">

                                <div class="tags has-addons">
                                    <span class="tag is-dark">categoría</span>
                                    <span 
                                        class="tag has-text-weight-bold" 
                                        :class="props.option.classification_type_id == 1 ? 'is-danger' : 
                                            (props.option.classification_type_id == 2 ? 'is-warning' : 
                                            (props.option.classification_type_id == 3 ? 'is-link' : 'is-info'))"
                                        >
                                        {{ props.option ? props.option.classification_type.classification_type : '' }}
                                    </span>
                                </div>
                                <div class="">
                                    <span v-if="props.option.pop.alba_project == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
                                        {{ props.option.pop.alba_project == 1 ? 'alba' : '' }}
                                    </span>
                                </div>

                            </div>

                            <div class="column is-3">
                            </div>

                            <div class="column has-text-right">
                                <div class="">
                                    <button class="button is-small is-default is-fullwidth" @click="selectPop(props.option.pop); selectedSite = props.option">
                                        <font-awesome-icon icon="map-marked-alt"/>&nbsp;Ver en mapa
                                    </button>
                                </div>
                                <div class="">
                                    <router-link :to="'/pop/' + props.option.pop.id" class="button is-small is-link is-fullwidth" target="_blank">
                                        <font-awesome-icon icon="info-circle"/>&nbsp;Ver detalles
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template slot="footer">
                        <span v-show="page > totalPages" class="has-text-grey"> No hay más sitios. </span>
                    </template>
                </b-autocomplete>
            </div>

            <!-- CUADROS -->
            <div class="" :class="bodyBackground" style="margin: 20px 0 -30px 0;">
                <div class="">

                    <div class="tile is-ancestor">

                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-white" :class="currentTab === 'pops' ? 'is-bold is-link' : boxBackground" @click="currentTab = 'pops'">
                                        <div class="" style="padding-top: 10px;" >
                                            <b-icon 
                                                pack="fas" 
                                                icon="map-marker-alt" 
                                                class="fa-2x"
                                                :class="currentTab === 'pops' ? 'has-text-smart' : 'has-text-smart'">
                                            </b-icon>
                                        </div>
                                        
                                        <div class="is-size-4 has-text-weight-semibold" :class="currentTab === 'pops' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ popsQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal" :class="currentTab === 'pops' ? 'has-text-white' : secondaryText">POP</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-white" :class="currentTab === 'sites' ? 'is-bold is-link' : boxBackground" @click="currentTab = 'sites'">
                                        <div class="" style="padding-top: 10px;">
                                            <b-icon 
                                                pack="fas" 
                                                icon="server" 
                                                class="fa-2x"
                                                :class="currentTab === 'sites' ? 'has-text-eco' : 'has-text-eco'">
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'sites' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ sitesQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal" :class="currentTab === 'sites' ? 'has-text-white' : secondaryText">Sitios</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-white" :class="currentTab === 'technologies' ? 'is-bold is-link' : boxBackground" @click="currentTab = 'technologies'">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;">
                                            <b-icon 
                                                pack="fas" 
                                                icon="signal" 
                                                class="fa-2x"
                                                :class="currentTab === 'technologies' ? 'has-text-positive' : 'has-text-positive'">
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'technologies' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ technologiesQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal" :class="currentTab === 'technologies' ? 'has-text-white' : secondaryText">Tecnologías</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="tile">
                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-white" :class="currentTab === 'critics' ? 'is-bold is-link' : boxBackground" @click="viewCriticPops">
                                        <div class="" style="padding-top: 10px;">
                                            <b-icon 
                                                pack="fas" 
                                                icon="exclamation-triangle" 
                                                class="has-text-yellow fa-2x"
                                                >
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'critics' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ criticsQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal" :class="currentTab === 'critics' ? 'has-text-white' : secondaryText">POP Críticos</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-white" :class="currentTab === 'alba' ? 'is-bold is-link' : boxBackground" @click="viewAlbaPops">
                                        <div class="" style="padding-top: 10px;">
                                            <b-icon 
                                                pack="fas" 
                                                icon="file-invoice-dollar" 
                                                class="has-text-smart fa-2x"
                                                >
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'alba' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ albaQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal" :class="currentTab === 'alba' ? 'has-text-white' : secondaryText">Proyecto Alba</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-dark" style="position: relative;" 
                                        @click="downloadPops">
                                        <b-icon 
                                            style="padding-top: 20px; padding-left: 5px;"
                                            pack="fas" 
                                            icon="download" 
                                            class="has-text-eco fa-2x">
                                        </b-icon> 
                                        <div class="is-size-4 has-text-weight-bold" style="margin-top: 10px;">
                                            <p class="is-size-6 has-text-weight-semibold">Descargar listado de POP</p>
                                        </div>
                                        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                                    </a>
                                </div>
                            </div>

                            <div class="tile">
                                <div class="tile is-parent">
                                    <div class="tile is-child box">
                                        <div class="is-size-5 has-text-weight-semibold title">Nuevos POP</div>
                                        <div class="is-size-3 has-text-centered">{{ last_data_counters && last_data_counters.pop_news_month }}
                                            <p class="is-size-6 has-text-weight-light">POP nuevos ingresados este mes</p>
                                        </div>
                                        <div class="field" style="margin-top: 20px;">
                                            <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                            <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_site.pop.id" target="_blank">
                                                {{ last_data_counters.last_site.nem_site }} - {{ last_data_counters.last_site.nombre }}
                                            </router-link>
                                            <div class="is-size-7">
                                                <p>{{ last_data_counters.last_site.pop.comuna.zona.nombre_zona }}</p>
                                                <p class="has-text-weight-light">CRM {{ last_data_counters.last_site.pop.comuna.zona.crm.nombre_crm }}</p>
                                            </div>
                                        </div>

                                        <div class="has-text-right is-size-7 has-text-weight-light" style="padding-top: 10px;">Fecha actualización: {{ last_data_counters.last_updated_pops }}</div>
                                    </div>
                                </div>

                                <div class="tile is-parent">
                                    <div class="tile is-child box">
                                        <div class="is-size-5 has-text-weight-semibold title">Nuevos Sitios</div>
                                        <div class="is-size-3 has-text-centered">{{ last_data_counters && last_data_counters.sites_news_month }}
                                            <p class="is-size-6 has-text-weight-light">Sitios nuevos ingresados este mes</p>
                                        </div>
                                        <div class="field" style="margin-top: 20px;">
                                            <div class="is-size-7 has-text-weight-light">Utimo Sitio ingresado:</div>
                                            <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_site.pop.id" target="_blank">
                                                {{ last_data_counters.last_site.nem_site }} - {{ last_data_counters.last_site.nombre }}
                                            </router-link>
                                            <div class="is-size-7">
                                                <p>{{ last_data_counters.last_site.pop.comuna.zona.nombre_zona }}</p>
                                                <p class="has-text-weight-light">CRM {{ last_data_counters.last_site.pop.comuna.zona.crm.nombre_crm }}</p>
                                            </div>
                                        </div>

                                        <div class="has-text-right is-size-7 has-text-weight-light" style="padding-top: 10px;">Fecha actualización: {{ last_data_counters.last_updated_sites }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tile is-parent is-vertical is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
                            <div class="tile is-child card" style="border: solid 4px white" :class="boxBackground">
                                <map-view
                                    :user="user"
                                    :pops="pops"
                                    :map_attributes="map_attributes"
                                    :darkMode="darkMode"
                                />   
                            </div>                               
                        </div>

                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child box" :class="boxBackground">
                                <keep-alive>
                                    <component :is="currentTabComponent"
                                        :user="user"
                                        :bodyBackground="bodyBackground"
                                        :boxBackground="boxBackground"
                                        :primaryText="primaryText"
                                        :secondaryText="secondaryText"
                                        :selectedCrm="this.selectedCrm"
                                        :selectedZona="this.selectedZona"
                                        :core="core"
                                        :last_updated="currentLastUpdateData"
                                    />
                                </keep-alive>
                                </article>

                                <article v-if="(this.currentTab !== 'critics') && (this.currentTab !== 'alba')">
                                    <keep-alive>
                                    <pret-data-chart    
                                        :user="user"
                                        :bodyBackground="bodyBackground"
                                        :boxBackground="boxBackground"
                                        :primaryText="primaryText"
                                        :secondaryText="secondaryText"
                                    ></pret-data-chart>
                                    </keep-alive>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=-33.708&lon=-70.815&zoom=10&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=-33.708&detailLon=-70.815&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe> -->

        <!-- Equipamiento -->
        <section class="section" :class="bodyBackground">
            <!-- <div class="title">Equipamiento</div> -->
            <div class="columns is-multiline">
                <electric-lines-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <generator-sets-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <power-rectifiers-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />

                <air-conditioners-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />

                <vertical-structures-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <infrastructures-data
                    :user="user"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
            </div>
        </section>

    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faCircle, faTimesCircle, faMapMarkerAlt, faMapMarkedAlt, faInfoCircle, faServer, faSignal, faExclamationTriangle, faFileInvoiceDollar, faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

    library.add(faCircle, faTimesCircle, faMapMarkerAlt, faMapMarkedAlt, faInfoCircle, faServer, faSignal, faExclamationTriangle, faFileInvoiceDollar, faDownload, faSearch);

    var moment = require('moment');
    import debounce from 'lodash/debounce'
    export default {
        components: {
            // ###### Info ##########
            PopsData: () => import(/* webpackChunkName: "chunks/dashboard/popsData"*/'./PopsData'),
            SitesData: () => import(/* webpackChunkName: "chunks/dashboard/sitesData"*/"./SitesData"),
            TechnologiesData: () => import(/* webpackChunkName: "chunks/dashboard/technologyData"*/"./TechnologiesData"),
            CriticsData: () => import(/* webpackChunkName: "chunks/dashboard/criticPopsData"*/"./CriticPopsData"),
            AlbaData: () => import(/* webpackChunkName: "chunks/dashboard/albaPopsData"*/"./AlbaPopsData"),
            
            // ###### Map ###########
            // PopsMap,
            MapView: () => import(/* webpackChunkName: "chunks/maps/mapView/"*/'../maps/MapView'),
            // MapView,

            // ###### Charts ########
            PretDataChart: () => import(/* webpackChunkName: "chunks/dashboard/pretDataChart"*/'./PretDataChart'),
            // RedCoreChart,

            // ###### Equipment #####
            ElectricLinesData: () => import(/* webpackChunkName: "chunks/dashboard/electricLines"*/'./ElectricLinesData'),
            GeneratorSetsData: () => import(/* webpackChunkName: "chunks/dashboard/generatorSets"*/'./GeneratorSetsData'),
            PowerRectifiersData: () => import(/* webpackChunkName: "chunks/dashboard/powerRectifiers"*/'./PowerRectifiersData'),
            AirConditionersData: () => import(/* webpackChunkName: "chunks/dashboard/airConditioners"*/'./AirConditionersData'),
            VerticalStructuresData: () => import(/* webpackChunkName: "chunks/dashboard/verticalStructures"*/'./VerticalStructuresData'),
            InfrastructuresData: () => import(/* webpackChunkName: "chunks/dashboard/infrastructures"*/'./InfrastructuresData')
        },
        props : [
            'user',
            'message',
            'last_data_counters',
            'crms',
            'darkMode'
        ],
        created() {
            this.styleMode()
        },

        mounted() {
            // console.log(this.last_data_counters)
            // this.getCrms()
            this.getCounters()
            // this.lastUpdate()
            // this.syncCounter()
            this.loadMessage()
            this.getPops()
        },
        data: () => {
            return {
                core: 0,
                pops: [],
                zonas: [],

                isFetching: false,
                selected: null,
                page: 1,
                totalPages: 1,
                searchText: '',
                popSearch: [],
                active: 0,
                counter: 0,

                map_attributes: {
                    latitude: -33.44444275,
                    longitude: -70.6561017,
                    zoom: 5
                },

                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
                innerBackground: '',

                bodyBackgroundEnergy: '',
                bodyBackgroundClimate: '',
                bodyBackgroundInfrastructure: '',
                boxBackgroundEnergy: '',
                boxBackgroundClimate: '',
                boxBackgroundInfrastructure: '',
                
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-white',

                // selectedPop: null,
                selectedSite: null,
                selectedCrm: null,
                selectedZona: null,

                criticPopsSwitch: 0,
                albaPopsSwitch: 0,

                popsQuantity: 0,
                sitesQuantity: 0,
                technologiesQuantity: 0,
                criticsQuantity: 0,
                albaQuantity: 0,

                isLoading: false,

                // lastUpdateData: [],
                // lastDataCounter: [],

                currentTab: 'pops',
            }
        },

        watch: {
            selectedPop(newValue) {
                this.pops = [newValue]
            },

            selectedCrm(newValue) {
                this.selectedZona = null
                switch(this.currentTab) {
                    case 'critics':
                        this.viewCriticPops()
                        break
                    case 'alba':
                        this.viewAlbaPops()
                        break
                    default:
                        this.getPops()
                        break
                }

                if(newValue) {
                    this.zonas = newValue.zonas
                }
                this.getCounters()
            },

            selectedZona(newValue) {
                switch(this.currentTab) {
                    case 'critics':
                        this.viewCriticPops()
                        break
                    case 'alba':
                        this.viewAlbaPops()
                        break
                    default:
                        this.getPops()
                        break
                }
                this.getCounters()
            },

            core(newValue, oldValue) {
                switch(this.currentTab) {
                    case 'critics':
                        this.viewCriticPops()
                        break
                    case 'alba':
                        this.viewAlbaPops()
                        break
                    default:
                        this.getPops()
                        break
                }
                this.getCounters()
            },

            darkMode(newValue, oldValue) {
                this.styleMode()
            },

            currentTab(newValue, oldValue) {
                if (newValue == 'critics') {
                    this.viewCriticPops()
                } 
                else if (this.currentTab == 'alba') {
                    this.viewAlbaPops()
                }
                else if(
                    (oldValue == 'critics' || oldValue == 'alba') && 
                    (newValue == 'pops' || newValue == 'sites' || newValue == 'technologies')) {
                    this.getPops()
                }
            }
        },

        computed: {
            selectedPop() {
                return this.selectedSite ? this.selectedSite.pop : null
            },

            currentTabComponent: function () {
                return this.currentTab + '-data'
            },

            currentLastUpdateData: function () {
                if (this.currentTab != 'critics' || this.currentTab != 'alba') {
                    return this.last_data_counters['last_updated_' + this.currentTab]
                } else {
                    return
                }
            },

            middleFileName() {
                return this.selectedZona ? `Zona ${this.selectedZona.nombre_zona} - ` : (this.selectedCrm ? `CRM ${this.selectedCrm.nombre_crm} - ` : '')
            },

            textSwitchCore() {
                return this.core ? 'has-text-link' : ''
            }
        },

        methods: {
            searchFormat(pop) {
                this.selectedSite = this.selected
                return this.searchText
            },

            getPops: debounce(function () {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/dashboardMap?api_token=${this.user.api_token}&core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`)
                .then((response) => {
                    try {
                        // this.pops = []
                        // response.data.forEach(element =>{
                        //     setInterval(this.pops.push(element), 0.1)
                        // })
                        this.pops = response.data
                    } catch (ex) {
                        console.log(ex);
                    }
                })
            }, 10),

            async viewCriticPops() {
                this.currentTab = 'critics'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/criticPopsMap?api_token=${this.user.api_token}&core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data.data

                })
                this.criticPopsSwitch = this.criticPopsSwitch == 0 ? 1 : 0
            },

            async viewAlbaPops() {
                this.currentTab = 'alba'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/albaPopsMap?api_token=${this.user.api_token}&core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data.data
                })
                this.albaPopsSwitch = this.albaPopsSwitch == 0 ? 1 : 0
            },

            // CONTERS
            async getCounters() {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/dashboard?api_token=${this.user.api_token}&core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    this.popsQuantity = response.data.pops
                    this.sitesQuantity = response.data.sites
                    this.technologiesQuantity = response.data.technologies
                    this.criticsQuantity = response.data.critics
                    this.albaQuantity = response.data.alba_project
                })
            },

            status(site) {
                let state = 'Inactivo'
                let id = 0

                switch(site.site_type_id) {
                    case 1:
                    case 3:
                    case 4:
                        id = site.state_id
                        state = site.state.state
                        break
                    case 2:
                        site.technologies.forEach(element => {
                            switch (element.state_id) {
                                case 1:
                                    id = element.state_id
                                    state = element.state.state
                                    break
                                case 2:
                                    if (id == 0) {
                                        id = element.state_id
                                        state = element.state.state
                                    }
                                    break
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                    if (id != 1) {
                                        id = element.state_id
                                        state = element.state.state
                                    }
                                    break
                                case null:
                                default:
                                    break
                            }
                        })
                        break
                }

                return {
                    'id': id,
                    'state': state
                }
            },

            // Triggers
            selectPop(pop) {
                this.pops = [pop]
            },
            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
            },
            selectZona(zona) {
                this.selectedZona = this.selectedZona != zona ? zona : null
            },

            getAsyncData: debounce(function (text) {
                // String update
                if (this.searchText !== text) {
                    this.searchText = text
                    this.popSearch = []
                    this.page = 1
                    this.totalPages = 1
                }
                // String cleared
                if (!text.length) {
                    this.popSearch = []
                    this.page = 1
                    this.totalPages = 1
                    return
                }
                // Reached last page
                if (this.page > this.totalPages) {
                    return
                }
                this.isFetching = true
                axios.get(`/api/searchPops?api_token=${this.user.api_token}&text=${text}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}&core=${this.core}&page=${this.page}`)
                    .then((response) => {
                        response.data.data.forEach((item) => this.popSearch.push(item))
                        this.page++
                        this.totalPages = response.data.last_page
                        this.counter = response.data.total
                    })
                    .catch((error) => {
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 150),

            getMoreAsyncData: debounce(function () {
                this.getAsyncData(this.searchText)
            }, 50),
        
            clearSearch() {
                this.popSearch = []
                this.searchText = ''
                this.selectedPop = null
            },

            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                    this.innerBackground = 'has-background-dark-ter shadow-inset-dark',
                    this.bodyBackgroundEnergy = 'has-background-black-ter',
                    this.bodyBackgroundClimate = 'has-background-black-ter',
                    this.bodyBackgroundInfrastructure = 'has-background-black-ter',
                    this.boxBackgroundEnergy = 'has-background-light',
                    this.boxBackgroundClimate = 'has-background-light',
                    this.boxBackgroundInfrastructure = 'has-background-light'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                    this.innerBackground = 'has-background-white shadow-inset',
                    this.bodyBackgroundEnergy = 'has-background-white',
                    this.bodyBackgroundClimate = 'has-background-white',
                    this.bodyBackgroundInfrastructure = 'has-background-white',
                    this.boxBackgroundEnergy = 'has-background-light',
                    this.boxBackgroundClimate = 'has-background-light',
                    this.boxBackgroundInfrastructure = 'has-background-light'
                }
            },

            // SWITCHES
            async switchCore() {
                this.core = this.core == 0 ? 1 : 0
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
            },
            loadMessage() {
                if(this.message) {
                    this.$buefy.toast.open({
                        message: this.message,
                        type: 'is-success',
                        duration: 3000,
                        queue: false
                    })
                }
            },

            downloadPops() {
                this.isLoading = true

                var params = {
                    'api_token': this.user.api_token,
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0
                }

                axios.get('/api/pop/export', { 
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
                    link.download = `Listado PoP - ${this.middleFileName}${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                    link.click()
                    // setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                    //     window.URL.revokeObjectURL(data)
                    // }, 100)
                    
                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'La planilla se ha descargado exitosamente.',
                        type: 'is-success',
                        duration: 3000,
                        queue: false
                    })
                }).catch((error) => {
                    console.log(error)
                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'Ha ocurrido un error. Favor contactar al administrador',
                        type: 'is-danger',
                        duration: 3000,
                        queue: false
                    })
                })
            },

            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }

        },

    }
</script>

<style lang="scss" scoped>
  .box.minim {
    height: 425px;
  }
</style>
