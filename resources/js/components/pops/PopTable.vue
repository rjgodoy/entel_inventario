<template>
    <div :class="">
        <section class="section has-background-dark" style="padding-top: 5px; padding-bottom: 32px">
            <div class="has-text-centered has-text-weight-bold is-size-5 has-text-grey-light" style="margin-bottom: 5px">FILTROS</div>
            <div class="">
                <div class="columns">

                    <!-- Filtros CRM -->
                    <div class="column is-2">
                        <div class="title is-size-6 has-text-weight-bold has-text-centered has-text-grey-light">CRMs</div>
                        <div class="columns is-multiline is-gapless">
                            <div class="column is-6" v-for="crm in crms" :key=crm.id>
                                <a class="is-fullwidth button" :class="selectedCrm == crm ? 'is-link' : 'is-black-ter'" @click="selectCrm(crm)">
                                    <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                        <!-- <div class="is-size-7 has-text-weight-normal">CRM</div> -->
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">{{ crm.nombre_crm }}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                    <!-- Filtros ZONAS -->
                    <div class="column is-2">
                        <div class="title is-size-6 has-text-weight-bold has-text-centered has-text-grey-light">Zonas</div>
                        <div v-if="!selectedCrm">
                            <div class="has-text-centered has-text-weight-light has-text-grey-light is-size-5">Selecciona un CRM</div>
                        </div>
                        <div v-if="selectedCrm" class="columns is-multiline is-gapless">
                            <div class="column" :class="zonas.length == 2 || zonas.length == 3 ? 'is-12' : 'is-6'" v-for="zona in zonas" :key="zona.id">
                                <a class="is-fullwidth button" :class="selectedZona == zona ? 'is-link' : 'is-black-ter'" @click="selectZona(zona)">
                                    <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                        <!-- <div class="is-size-7 has-text-weight-normal">Zona</div> -->
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">{{ zona.nombre_zona }}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Filtros IMPORTANCIA -->
                    <div class="column is-1">
                        <div class="title is-size-6 has-text-weight-bold has-text-centered has-text-grey-light">Importancia</div>
                        <div class="columns is-multiline is-gapless">
                            <div class="column is-12">
                                <a class="is-fullwidth button" :class="core ? 'is-link' : 'is-black-ter'" @click="core = +!core" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">CORE</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-12">
                                <a class="is-fullwidth button" :class="critic ? 'is-link' : 'is-black-ter'" @click="critic = +!critic" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">CRITICO</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-12">
                                <a class="is-fullwidth button" :class="vip ? 'is-link' : 'is-black-ter'" @click="vip = +!vip" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">VIP</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                    <!-- Filtros CARACTERISTICAS -->
                    <div class="column is-4">
                        <div class="title is-size-6 has-text-weight-bold has-text-centered has-text-grey-light">Características</div>
                        <div class="columns is-multiline is-gapless">
                            <div class="column is-3">
                                <a class="tile is-child button" :class="pe_3g ? 'is-link' : 'is-black-ter'" @click="pe_3g = +!pe_3g" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">PE 3G</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="mpls ? 'is-link' : 'is-black-ter'" @click="mpls = +!mpls" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">MPLS</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="olt ? 'is-link' : 'is-black-ter'" @click="olt = +!olt" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">OLT</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="olt_3play ? 'is-link' : 'is-black-ter'" @click="olt_3play = +!olt_3play" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">OLT 3Play</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="red_minima_n1 ? 'is-link' : 'is-black-ter'" @click="red_minima_n1 = +!red_minima_n1" disabled>
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Red Mínima N1</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="red_minima_n2 ? 'is-link' : 'is-black-ter'" @click="red_minima_n2 = +!red_minima_n2" disabled>
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Red Mínima N2</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="lloo ? 'is-link' : 'is-black-ter'" @click="lloo = +!lloo" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Localidad Obligatoria</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="ranco ? 'is-link' : 'is-black-ter'" @click="ranco = +!ranco" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">RANCO</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="bafi ? 'is-link' : 'is-black-ter'" @click="bafi = +!bafi" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">BAFI</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="offgrid ? 'is-link' : 'is-black-ter'" @click="offgrid = +!offgrid" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Offgrid</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="solar ? 'is-link' : 'is-black-ter'" @click="solar = +!solar" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Solar</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="eolica ? 'is-link' : 'is-black-ter'" @click="eolica = +!eolica" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Eólica</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="protected_zone ? 'is-link' : 'is-black-ter'" @click="protected_zone = +!protected_zone" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Zona protegida</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-3">
                                <a class="tile is-child button" :class="alba_project ? 'is-link' : 'is-black-ter'" @click="alba_project = +!alba_project" >
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Proyecto Alba</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                    <!-- Filtros EQUIPAMIENTO -->
                    <div class="column is-3">
                        <div class="title is-size-6 has-text-weight-bold has-text-centered has-text-grey-light">Equipamiento</div>
                        <div class="columns is-multiline is-gapless">
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="junction ? 'is-link' : 'is-black-ter'" @click="junction = +!junction">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Empalme</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="generator_set ? 'is-link' : 'is-black-ter'" @click="generator_set = +!generator_set">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Grupo Electrógeno</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="power_rectifier ? 'is-link' : 'is-black-ter'" @click="power_rectifier = +!power_rectifier">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Planta Rectificadora</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="air_conditioner ? 'is-link' : 'is-black-ter'" @click="air_conditioner = +!air_conditioner">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Aire Acondicionado</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="vertical_structure ? 'is-link' : 'is-black-ter'" @click="vertical_structure = +!vertical_structure">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Estructura Vertical</div>
                                    </div>
                                </a>
                            </div>
                            <div class="column is-4">
                                <a class="tile is-child button" 
                                    :class="infrastructure ? 'is-link' : 'is-black-ter'" @click="infrastructure = +!infrastructure">
                                    <div :class="secondaryText"> 
                                        <div class="is-size-7 has-text-weight-normal has-text-grey-light">Contenedor</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section tile is-ancestor has-background-light">            
            <div class="tile is-7 is-parent">
                <div class="tile is-child box" style="max-height: 100%; min-height: 800px;">

                    <div class="field">
                        <div class="columns">
                            <div class="column">
                                <div class="has-text-centered">
                                    <span class="is-size-4 has-text-weight-semibold">
                                        {{ pops.total | numeral('0,0')}}
                                    </span>
                                    <span class="is-size-6">POPs</span>
                                </div>
                            </div>
                        </div>
                        
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

                    <table class="table is-fullwidth" :class="boxBackground">
                        <thead>
                            <tr>
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Id">Id</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">Nombre POP</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold has-text-centered" :class="secondaryText"><abbr title="Sitios">Sitios</abbr></th>
                                <!-- <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">Dirección</abbr></th> -->
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

                    <div class="field">
                        <nav class="pagination" role="navigation" aria-label="pagination">
                            <vue-pagination  
                                :pagination="pops"
                                @paginate="getPops()"
                                :offset="4"
                                :primaryText="primaryText">
                            </vue-pagination>
                        </nav>

                        <div class="has-text-right">
                            <b-button 
                                type="is-link"
                                style="position: relative;" 
                                @click="downloadPops"
                                icon-left="download"
                                icon-pack="fas"
                                size="is-medium"
                                :loading="isLoading">
                                <div class="is-size-6 has-text-weight-normal">Descargar POPs</div>
                                <!-- <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading> -->
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tile is-parent is-vertical">
                <div class="tile box is-child is-12">
                    <div class="snippet">
                        <span class="has-text-weight-normal is-size-7"><strong>{{ selectedPops.length }}</strong> pops selected</span>
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
                <div class="tile box is-child">
                    <map-view
                        :user="user"
                        :pops="popsMap"
                        :map_attributes="map_attributes"
                        :darkMode="darkMode"                    
                    ></map-view>
                </div> 
            </div>
        </section>

    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faInfo, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faInfo, faMapMarkedAlt);

import VuePagination from '../VuePagination.vue';
import LoadingComponent from '../helpers/LoadingComponent.vue';
// import ErrorComponent from './maps/ErrorComponent.vue';
// const MapView = () => ({
//     // The component to load (should be a Promise)
//     component: import('../maps/MapView.vue'),
//     // A component to use while the async component is loading
//     // loading: LoadingComponent,
//     // A component to use if the load fails
//     // error: ErrorComponent,
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 200,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 300
// });
export default {
    components: {
        MapView: () => import('../maps/MapView.vue'),
        VuePagination,
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
            pe_3g: 0,
            mpls: 0,
            olt: 0,
            olt_3play: 0,
            red_minima_n1: 0,
            red_minima_n2: 0,
            lloo: 0,
            ranco: 0,
            bafi: 0,
            offgrid: 0,
            solar: 0,
            eolica: 0,
            protected_zone: 0,
            alba_project: 0,

            junction: 0,
            generator_set: 0,
            power_rectifier: 0,
            air_conditioner: 0,
            vertical_structure: 0,
            infrastructure: 0,

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
        this.styleMode()
        this.getCrms()
        this.getFilterButtons()
    },

    mounted() {
        this.getPops()
        this.getPopsMap()
    },

    watch: {
        core(newValue) { this.getPops(); this.getPopsMap() },
        critic(newValue) { this.getPops(); this.getPopsMap() },

        vip(newValue) { this.getPops(); this.getPopsMap() },
        pe_3g(newValue) { this.getPops(); this.getPopsMap() },
        mpls(newValue) { this.getPops(); this.getPopsMap() },
        olt(newValue) { this.getPops(); this.getPopsMap() },
        olt_3play(newValue) { this.getPops(); this.getPopsMap() },
        red_minima_n1(newValue) { this.getPops(); this.getPopsMap() },
        red_minima_n2(newValue) { this.getPops(); this.getPopsMap() },
        lloo(newValue) { this.getPops(); this.getPopsMap() },
        ranco(newValue) { this.getPops(); this.getPopsMap() },
        bafi(newValue) { this.getPops(); this.getPopsMap() },
        offgrid(newValue) { this.getPops(); this.getPopsMap() },
        solar(newValue) { this.getPops(); this.getPopsMap() },
        eolica(newValue) { this.getPops(); this.getPopsMap() },
        protected_zone(newValue) { this.getPops(); this.getPopsMap() },
        alba_project(newValue) { this.getPops(); this.getPopsMap() },

        junction(newValue) { this.getPops(); this.getPopsMap() },
        generator_set(newValue) { this.getPops(); this.getPopsMap() },
        power_rectifier(newValue) { this.getPops(); this.getPopsMap() },
        air_conditioner(newValue) { this.getPops(); this.getPopsMap() },
        vertical_structure(newValue) { this.getPops(); this.getPopsMap() },
        infrastructure(newValue) { this.getPops(); this.getPopsMap() },

        selectedPops(newValue) { 
            newValue.length != 0 ? this.popsMap = newValue : this.getPops()
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
            axios.get(`/api/crms?api_token=${this.user.api_token}`)
            .then((response) => {
                this.crms = response.data.data;
            })
            .catch(() => {
                console.log('handle server error from here');
            });
        },

        getFilterButtons() {
            axios.get(`/api/filters?api_token=${this.user.api_token}`)
            .then((response) => {
                // console.log(response.data)
                this.filters = response.data;
            })
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
            this.getPopsMap()
        },

        selectZona(zona) {
            this.selectedZona = this.selectedZona != zona ? zona : null
            this.getPops()
            this.getPopsMap()
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
                'api_token': this.user.api_token,

                'page': this.pops.current_page,
                'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                'text': this.searchText != '' ?  this.searchText : 0,

                'core': this.core,
                'critic': this.critic,

                'vip': this.vip,
                'pe_3g': this.pe_3g,
                'mpls': this.mpls,
                'olt': this.olt,
                'olt_3play': this.olt_3play,
                'red_minima_n1': this.red_minima_n1,
                'red_minima_n2': this.red_minima_n2,
                'lloo': this.lloo,
                'ranco': this.ranco,
                'bafi': this.bafi,
                'offgrid': this.offgrid,
                'solar': this.solar,
                'eolica': this.eolica,
                'alba_project': this.alba_project,
                'protected_zone': this.protected_zone,

                'junction': this.junction,
                'generator_set': this.generator_set,
                'power_rectifier': this.power_rectifier,
                'air_conditioner': this.air_conditioner,
                'vertical_structure': this.vertical_structure,
                'infrastructure': this.infrastructure
            }

            axios.get('/api/filterPops', { params: params })
            .then((response) => {
                console.log(response)
                this.pops = response.data
            })
        },

        // APIs
        getPopsMap() {
            var params = {
                'api_token': this.user.api_token,

                'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                'text': this.searchText != '' ?  this.searchText : 0,

                'core': this.core,
                'critic': this.critic,

                'vip': this.vip,
                'pe_3g': this.pe_3g,
                'mpls': this.mpls,
                'olt': this.olt,
                'olt_3play': this.olt_3play,
                'red_minima_n1': this.red_minima_n1,
                'red_minima_n2': this.red_minima_n2,
                'lloo': this.lloo,
                'ranco': this.ranco,
                'bafi': this.bafi,
                'offgrid': this.offgrid,
                'solar': this.solar,
                'eolica': this.eolica,
                'alba_project': this.alba_project,
                'protected_zone': this.protected_zone,

                'junction': this.junction,
                'generator_set': this.generator_set,
                'power_rectifier': this.power_rectifier,
                'air_conditioner': this.air_conditioner,
                'vertical_structure': this.vertical_structure,
                'infrastructure': this.infrastructure
            }

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
                'api_token': this.user.api_token,

                'selectedIds': this.selectedIds,
                'text': this.searchText != '' ?  this.searchText : 0,

                'crm_id': this.selectedCrm ? this.selectedCrm.id : 0,
                'zona_id': this.selectedZona ? this.selectedZona.id : 0,
                
                'core': this.core,
                'critic': this.critic,

                'vip': this.vip,
                'pe_3g': this.pe_3g,
                'mpls': this.mpls,
                'olt': this.olt,
                'olt_3play': this.olt_3play,
                // 'red_minima_n1': this.red_minima_n1,
                // 'red_minima_n2': this.red_minima_n2,
                'lloo': this.lloo,
                'ranco': this.ranco,
                'bafi': this.bafi,
                'offgrid': this.offgrid,
                'solar': this.solar,
                'eolica': this.eolica,
                'alba_project': this.alba_project,
                'protected_zone': this.protected_zone,

                'junction': this.junction,
                'generator_set': this.generator_set,
                'power_rectifier': this.power_rectifier,
                'air_conditioner': this.air_conditioner,
                'vertical_structure': this.vertical_structure,
                'infrastructure': this.infrastructure
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

    }
}
</script>
