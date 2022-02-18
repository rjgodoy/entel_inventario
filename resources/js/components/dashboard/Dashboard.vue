<template>
    <div class="">
        
        <section class="section is-marginless" :class="bodyBackground">
            
            <!-- SWITCH CORE & CRM BUTTONS-->
            <div class="container" style="margin-top: -32px; margin-bottom: 20px">
                <b-field>
                    <div class="columns">
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
            <div v-if="selectedCrm != null"  
                :class="innerBackground + ' ' + bodyBackground" style="margin: 0 -24px 0 -24px">
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

            <!-- BUSCADOR -->
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

                                <div class="is-size-7 has-text-weight-semibold " :class="primaryText">
                                    <span class="">POP: {{ props.option ? props.option.pop.nombre.toUpperCase() : '' }}</span> 
                                </div>


                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? props.option.pop.comuna.nombre_comuna : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? 'Zona ' + props.option.pop.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.pop.zona.crm.nombre_crm : '' }}
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
                                    <span v-if="props.option.pop.turret_type_id == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
                                        {{ props.option.pop.turret_type_id == 1 ? 'alba' : '' }}
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
                        <span v-show="page > totalPages" class="has-text-grey is-size-7"> No hay más sitios. </span>
                    </template>
                </b-autocomplete>
            </div>

            <!-- CUADROS -->
            <div class="" :class="bodyBackground" style="margin: 20px 0 -30px 0;">
                <div class="">
                    <div class="tile is-ancestor">

                        <!-- Cuadros sector izquierdo -->
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
                                            <div class="is-size-6 has-text-weight-semibold" :class="currentTab === 'pops' ? 'has-text-white' : secondaryText" style="margin-bottom: -2px">POP</div>
                                            <div class="has-text-weight-light is-size-7">activos</div>
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
                                            <p class="is-size-6 has-text-weight-semibold" :class="currentTab === 'sites' ? 'has-text-white' : secondaryText" style="margin-bottom: -2px">Sitios</p>
                                            <div class="has-text-weight-light is-size-7">activos</div>
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
                                            <p class="is-size-6 has-text-weight-semibold" :class="currentTab === 'technologies' ? 'has-text-white' : secondaryText" style="margin-bottom: -2px">Tecnologías</p>
                                            <div class="has-text-weight-light is-size-7">activas</div>
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
                                                class="has-text-warning fa-2x"
                                                >
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'critics' ? 'has-text-white' : primaryText" style="margin-top: 10px;">{{ criticsQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-semibold" :class="currentTab === 'critics' ? 'has-text-white' : secondaryText">POP Críticos</p>
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
                                            <p class="is-size-6 has-text-weight-semibold" :class="currentTab === 'alba' ? 'has-text-white' : secondaryText">Proyecto Alba</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box is-bold is-dark" style="position: relative;" 
                                        @click="isDownloadModalActive=true">
                                        <b-icon 
                                            style="padding-top: 20px; padding-left: 5px;"
                                            pack="fas" 
                                            icon="download" 
                                            class="has-text-eco fa-2x">
                                        </b-icon> 
                                        <div class="is-size-4 has-text-weight-bold" style="margin-top: 10px;">
                                            <p class="is-size-6 has-text-weight-semibold">Descargar listado de POP, Sitios y Tecnologías</p>
                                        </div>
                                        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                                    </a>
                                </div>
                            </div>

                            <div class="tile">
                                <div class="tile is-parent">
                                    <div class="tile is-child box">
                                        <div class="is-size-6 has-text-weight-semibold title">Nuevos Sitios</div>
                                        <div style="margin: auto 32px auto 32px" class="has-text-centered">
                                            <div class="has-text-weight-semibold" style="font-size: 2.1rem">{{ last_data_counters && last_data_counters.sites_news_month }}</div>
                                            <div class="is-size-6 has-text-weight-light">Sitios nuevos ingresados este mes</div>
                                        </div>
                                        
                                        <hr class="is-paddingless" />

                                        <div class="field" style="margin-top: -12px;">
                                            <div class="is-size-7 has-text-weight-light">Utimo Sitio ingresado:</div>
                                            <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_site.pop.id" target="_blank">
                                                {{ last_data_counters.last_site.nem_site }} - {{ last_data_counters.last_site.nombre }}
                                            </router-link>
                                            <div class="is-size-7 has-text-weight-light">
                                                <div>Zona {{ last_data_counters.last_site.pop.zona.nombre_zona }} - <span class="has-text-weight-light">CRM {{ last_data_counters.last_site.pop.zona.crm.nombre_crm }}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tile is-parent">
                                    <div class="tile is-child box">
                                        <div class="is-size-6 has-text-weight-semibold title">Nuevas Tecnologías</div>
                                        <div style="margin: auto 32px auto 32px" class="has-text-centered">
                                            <div class="has-text-weight-semibold" style="font-size: 2.1rem">{{ last_data_counters && last_data_counters.technologies_news_month }}</div>
                                            <div class="is-size-6 has-text-weight-light">Tecnologías nuevas ingresados este mes</div>
                                        </div>

                                        <hr class="is-paddingless"/>

                                        <div class="field" style="margin-top: -12px;">
                                            <div class="is-size-7 has-text-weight-light">Utima Tecnología ingresada:</div>
                                            <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_technology.site.pop.id + '#sites'" target="_blank">
                                                {{ last_data_counters.last_technology.nem_tech }} - {{ last_data_counters.last_technology.ran_device_name }}
                                            </router-link>
                                            <div class="is-size-7 has-text-weight-light">
                                                <div>Zona {{ last_data_counters.last_technology.site.pop.zona.nombre_zona }} - <span class="has-text-weight-light">CRM {{ last_data_counters.last_technology.site.pop.zona.crm.nombre_crm }}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Cuadros sector mapa -->
                        <div class="tile is-parent is-vertical is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
                            <div class="tile is-child card" style="border: solid 4px white" :class="boxBackground">
                                <b-tabs type="is-toggle" size="is-small" expanded v-model="tabShow" class="is-marginless">
                                    <b-tab-item label="POP"></b-tab-item>
                                    <b-tab-item label="Clima"></b-tab-item>
                                    <!-- <b-tab-item label="Chile"></b-tab-item> -->
                                </b-tabs>
                                <keep-alive>
                                    <map-view
                                        style="margin-top: -27px;"
                                        v-if="tabShow == 0"
                                        :pops="pops"
                                        :darkMode="darkMode"
                                    /> 
                                </keep-alive>

                                <keep-alive>
                                    <iframe style="margin-top: -27px; padding-bottom: 0" v-if="tabShow == 1" width="100%" height="95%" src="https://embed.windy.com/embed2.html?lat=-33.500&lon=-70.667&detailLat=-33.500&detailLon=-70.667&width=650&height=450&zoom=5&level=surface&overlay=temp&product=gfs&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0">
                                    </iframe>
                                </keep-alive>

                                <!-- <keep-alive>
                                    <iframe  style="margin-top: -27px; padding-bottom: 0" v-if="tabShow == 2" width="100%" height="95%"  src="https://app.powerbi.com/view?r=eyJrIjoiZWEzYjg4YmUtODM2Ny00MTBkLWJhNzUtYzNlYzk1YjgxYzE2IiwidCI6IjVmNjBkNjdiLTg0YmUtNGRkNy1hYzM2LTkwYzgxOTEwMTFmYSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
                                </keep-alive> -->

                            </div>                               
                        </div>

                        <!-- Cuadros sector derecho -->
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child box has-background" :class="boxBackground">
                                    <div class="is-box-background is-transparent-light">
                                        <font-awesome-icon 
                                            :icon="['fas', currentIcon]" size="10x" class="is-pulled-right" style=""/>
                                    </div>
                                    <keep-alive>
                                        <component :is="currentTabComponent"
                                            class="animate__animated animate__fadeIn"
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
                                        <pret-data-chart/>
                                    </keep-alive>
                                </article>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <!-- <iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=-33.708&lon=-70.815&zoom=10&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=-33.708&detailLon=-70.815&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe> -->
        <hr class="is-paddingless is-divider p-0 mb-1" data-content="Equipamiento"/>

        <!-- Equipamiento -->
        <section class="section" :class="bodyBackground">
            <div class="columns is-multiline">
                <!-- <equipment-component v-for="equipment in equipmentComponent" :key="equipment.name"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                    /> -->

                <electric-lines-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <junctions-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <generator-sets-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <power-rectifiers-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />

                <air-conditioners-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />

                <vertical-structures-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <infrastructures-data
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
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
    import { faCircle, faTimesCircle, faMapMarkerAlt, faMapMarkedAlt, faInfoCircle, faServer, faSignal, faExclamationTriangle, faFileInvoiceDollar, faDownload, faSearch, faChargingStation, faWind, faBroadcastTower, faGripLines, faBolt } from "@fortawesome/free-solid-svg-icons";
    import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

    library.add(faCircle, faTimesCircle, faMapMarkerAlt, faMapMarkedAlt, faInfoCircle, faServer, faSignal, faExclamationTriangle, faFileInvoiceDollar, faDownload, faSearch, faChargingStation, faSuperpowers, faWind, faBroadcastTower, faGripLines, faBolt);

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
            ElectricLinesData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/electricLines"*/'./equipment/ElectricLinesData'),
            JunctionsData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/junctions"*/'./equipment/JunctionsData'),
            GeneratorSetsData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/generatorSets"*/'./equipment/GeneratorSetsData'),
            PowerRectifiersData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/powerRectifiers"*/'./equipment/PowerRectifiersData'),
            AirConditionersData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/airConditioners"*/'./equipment/AirConditionersData'),
            VerticalStructuresData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/verticalStructures"*/'./equipment/VerticalStructuresData'),
            InfrastructuresData: () => import(/* webpackChunkName: "chunks/dashboard/equipment/infrastructures"*/'./equipment/InfrastructuresData'),
            ModalDownload: () => import(/* webpackChunkName: "chunks/dashboard/modalDownload"*/'./ModalDownload'),
        },

        props : [
            'user',
            'last_data_counters',
            'darkMode'
        ],

        created() {
            this.styleMode()
        },

        mounted() {
            this.getCrms()
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

                equipmentComponent: [
                    { 'name': 'ElectricLinesData' },
                    { 'name': 'JunctionsData' },
                    { 'name': 'GeneratorSetsData' },
                    { 'name': 'PowerRectifiersData' },
                    { 'name': 'AirConditionersData' },
                    { 'name': 'VerticalStructuresData' },
                    { 'name': 'InfrastructuresData' }
                ],

                crms: Array,
                tabShow: 0,

                isFetching: false,
                selected: null,
                page: 1,
                totalPages: 1,
                searchText: '',
                popSearch: [],
                active: 0,
                counter: 0,

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
                isDownloadModalActive: false,

                cells: Array,

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
            currentIcon() {
                return this.currentTab == 'pops' ? 'map-marker-alt' : 
                    (this.currentTab == 'sites' ? 'server' : 
                        (this.currentTab == 'technologies' ? 'signal' : 
                            (this.currentTab == 'critics' ? 'exclamation-triangle' : 
                                (this.currentTab == 'sites' ? 'alba' : 'file-invoice-dollar'))))
            },

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
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms
                })
            },

            searchFormat(pop) {
                this.selectedSite = this.selected
                return this.searchText
            },

            async getPops () {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0
                await axios.get(`/api/dashboardMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`)
                .then((response) => {
                    try {
                        this.pops = response.data
                    } catch (error) {
                        console.log(error);
                    }
                })
            },

            async viewCriticPops() {
                this.currentTab = 'critics'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/criticPopsMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data.pop

                })
                this.criticPopsSwitch = this.criticPopsSwitch == 0 ? 1 : 0
            },

            async viewAlbaPops() {
                this.currentTab = 'alba'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/albaPopsMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data.pop
                })
                this.albaPopsSwitch = this.albaPopsSwitch == 0 ? 1 : 0
            },

            // CONTERS
            async getCounters() {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/dashboard?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
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
                    case 1: // Fijo
                    case 3: // Switch
                    case 4: // Phone
                    case 5: // Repetidor
                        id = site.state_id
                        state = site.state.state
                        break
                    case 2: // Movil
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
                axios.get(`/api/searchPops?text=${text}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}&core=${this.core}&page=${this.page}`)
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
            }, 350),

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
                    'core': this.core,
                    'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                    'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                    'resume': +this.cells.resume,
                    'pops': +this.cells.pops,
                    'sites': +this.cells.sites
                }

                axios.get('/api/pop/export', { 
                    params: params, 
                    responseType: 'arraybuffer' 
                })
                .then((response) => {
                    // console.log(response.data)
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

            onClickDownload (value) {
                this.cells = value
                this.downloadPops()
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
