<template>
    <div :class="bodyBackground">
        <section class="section" style="padding-top: 30px; padding-bottom: 0px;">
            <div class="">
                <div class="box">
                    
                    <div class="columns">

                        <!-- Filtros CRM -->
                        <div class="column is-2">
                            <div class="title is-size-6 has-text-weight-light has-text-centered">CRMs</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-6" v-for="crm in crms">
                                    <a class="is-fullwidth button" :class="selectedCrm == crm ? 'has-background-link' : boxBackground" @click="selectCrm(crm)">
                                        <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                            <!-- <div class="is-size-7 has-text-weight-normal">CRM</div> -->
                                            <div class="is-size-7 has-text-weight-light">{{ crm.nombre_crm }}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros ZONAS -->
                        <div class="column is-2">
                            <div class="title is-size-5 has-text-weight-light has-text-centered">Zonas</div>
                            <div v-if="!selectedCrm">
                                <div class="has-text-centered has-text-weight-light has-text-grey-light">Selecciona un CRM</div>
                            </div>
                            <div v-if="selectedCrm" class="columns is-multiline is-gapless">
                                <div class="column" :class="zonas.length == 2 || zonas.length == 3 ? 'is-12' : 'is-6'" v-for="zona in zonas">
                                    <a class="is-fullwidth button" :class="selectedZona == zona ? 'has-background-link' : boxBackground" @click="selectZona(zona)">
                                        <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                            <!-- <div class="is-size-7 has-text-weight-normal">Zona</div> -->
                                            <div class="is-size-7 has-text-weight-light">{{ zona.nombre_zona }}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Filtros EXCLUSIVOS -->
                        <div class="column is-1">
                            <div class="title is-size-5 has-text-weight-light has-text-centered">Importancia</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-12">
                                    <a class="is-fullwidth button" :class="core ? 'is-link' : boxBackground" @click="core = +!core" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">CORE</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-12">
                                    <a class="is-fullwidth button" :class="critic ? 'is-link' : boxBackground" @click="critic = +!critic" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">CRITICO</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-12">
                                    <a class="is-fullwidth button" :class="vip ? 'is-link' : boxBackground" @click="vip = +!vip" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">VIP</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros CARACTERISTICAS -->
                        <div class="column is-4">
                            <div class="title is-size-5 has-text-weight-light has-text-centered">Características</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="pe_3g ? 'is-link' : boxBackground" @click="pe_3g = +!pe_3g" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">PE 3G</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="mpls ? 'is-link' : boxBackground" @click="mpls = +!mpls" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">MPLS</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="olt ? 'is-link' : boxBackground" @click="olt = +!olt" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">OLT</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="olt_3play ? 'is-link' : boxBackground" @click="olt_3play = +!olt_3play" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">OLT 3Play</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="red_minima_n1 ? 'is-link' : boxBackground" @click="red_minima_n1 = +!red_minima_n1" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Red Mínima N1</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="red_minima_n2 ? 'is-link' : boxBackground" @click="red_minima_n2 = +!red_minima_n2" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Red Mínima N2</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="lloo ? 'is-link' : boxBackground" @click="lloo = +!lloo" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Localidad Obligatoria</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="ranco ? 'is-link' : boxBackground" @click="ranco = +!ranco" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">RANCO</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="bafi ? 'is-link' : boxBackground" @click="bafi = +!bafi" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">BAFI</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="offgrid ? 'is-link' : boxBackground" @click="offgrid = +!offgrid" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Offgrid</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="solar ? 'is-link' : boxBackground" @click="solar = +!solar" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Solar</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="eolica ? 'is-link' : boxBackground" @click="eolica = +!eolica" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Eólica</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="protected_zone ? 'is-link' : boxBackground" @click="protected_zone = +!protected_zone" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Zona protegida</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a class="tile is-child button" :class="alba_project ? 'is-link' : boxBackground" @click="alba_project = +!alba_project" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Proyecto Alba</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div> -->

                        <!-- Filtros EQUIPAMIENTO -->
                        <div class="column is-3">
                            <div class="title is-size-5 has-text-weight-light has-text-centered">Equipamiento</div>
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="olt ? 'is-link' : boxBackground" @click="olt = +!olt" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Empalme</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="core ? 'is-link' : boxBackground" @click="core = +!core">
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Grupo Electrógeno</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="vip ? 'is-link' : boxBackground" @click="vip = +!vip" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Planta Rectificadora</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="pe_3g ? 'is-link' : boxBackground" @click="pe_3g = +!pe_3g" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Aire Acondicionado</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="mpls ? 'is-link' : boxBackground" @click="mpls = +!mpls" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Estructura Vertical</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="column is-4">
                                    <a class="tile is-child button" :class="olt ? 'is-link' : boxBackground" @click="olt = +!olt" >
                                        <div :class="secondaryText"> 
                                            <div class="is-size-7 has-text-weight-light">Contenedor</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>

        <section class="section tile is-ancestor">            
            <div class="tile is-7 is-parent">
                <div class="tile is-child box" style="max-height: 100%; min-height: 800px;">

                    <div class="field">
                        <div class="columns">
                            <div class="column">
                                <span class="is-size-7" v-if="searchText.length" style="padding-left: 0">
                                    <strong style="margin-left: 10px;">{{ pops.total | numeral('0,0')}}</strong> pops encontrados
                                </span>
                            </div>
                            <div class="column">
                                <div class="is-right is-size-5">
                                    <span class="is-dark">POP</span>
                                    <span class="has-text-weight-bold">
                                        {{ counter | numeral('0,0')}}
                                    </span>
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
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">Sitios</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">Dirección</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Categoría">Categoría</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="" v-for="pop in pops.data">
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
                                    <a :href="'/pop/' + pop.id" target="_blank" class="is-size-6 has-text-weight-normal" :class="primaryText">
                                        {{ pop ? pop.nombre : '' }}
                                    </a>
                                </td>

                                <td class="">
                                    <div class="columns is-multiline">
                                        <div class="column is-6" v-for="site in pop.sites">
                                            <div class="is-size-7 has-text-weight-normal">{{ site.nem_site }}</div>
                                        </div>
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop ? pop.sites.nem_site : '' }}
                                    </div>
                                </td>

                                <td class="">
                                    <div class="is-size-6 has-text-weight-light" :class="secondaryText">
                                        {{ pop ? pop.direccion : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop.comuna.zona ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop.comuna.zona.crm ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                    </div>
                                </td>

                                <td>
                                    <div class="field is-pulled-right">
                                        <div class="tags has-addons">
                                            <span 
                                                class="tag has-text-weight-bold is-size-7" 
                                                :class="">
                                                {{ pop ? popClassification(pop).classification : '' }}
                                            </span>
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
                                        v-model="selectedPop" 
                                        data-tooltip="Ver en mapa"
                                        >
                                        <font-awesome-icon icon="map-marked-alt"/>
                                    </button>

                                </td>

                            </tr>    
                        </tbody>
                    </table>

                    <nav class="pagination" role="navigation" aria-label="pagination">
                        <vue-pagination  
                            :pagination="pops"
                            @paginate="getPops()"
                            :offset="4"
                            :primaryText="primaryText">
                        </vue-pagination>
                    </nav>


                    <form @submit="formSubmit">
                        <div class="field has-addons has-text-right">
                            <p class="control">
                                <button type="submit" class="button is-small is-link" :class="buttonLoading">
                                    <font-awesome-icon icon="download"/> 
                                    &nbsp;&nbsp;Listado de POPs
                                </button>
                            </p>
                        </div>
                    </form>
                    <form @submit="formSubmit">
                        <div class="field has-addons has-text-right">
                            <p class="control">
                                <button type="submit" class="button is-small is-link" :class="buttonLoading">
                                    <font-awesome-icon icon="download"/> 
                                    &nbsp;&nbsp;Listado de POPs filtrados
                                </button>
                            </p>
                        </div>

                    </form>
                    <div class="field">
                        <div class="field ">
                            <!-- <a href="{{ route('comsite.create') }}" type="submit" class="button is-link is-small">{{ __('Sincronizar') }}</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
            <div class="tile is-parent is-vertical">
                <div class="tile box is-child is-12">
                    <div class="snippet">
                        <span class="has-text-weight-normal is-size-7"><strong>{{ selectedPops.length }}</strong> pops selected</span>
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control" v-for="pop in selectedPops">
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
    import VuePagination from '../VuePagination.vue';
    // import LoadingComponent from './maps/LoadingComponent.vue';
    // import ErrorComponent from './maps/ErrorComponent.vue';
    const MapView = () => ({
        // The component to load (should be a Promise)
        component: import('../maps/MapView.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 300
    });
    export default {
        components: {
            MapView,
            VuePagination,
        },
        props : [
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
                
                buttonLoading: '',

                selectedPop: null,
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

            selectedPops(newValue) { 
                newValue.length != 0 ? this.popsMap = newValue : this.getPops()
            }
        },

        computed: {
            counter() {
                return this.pops.length
            }
        },
        methods: {
            // BUTTONS
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.data;
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
                    pop.sites.forEach(function(item) {
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
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0
                var text = this.searchText != '' ?  this.searchText : 0

                var params = {
                    'page': this.pops.current_page,
                    'crm_id': crm_id,
                    'zona_id': zona_id,
                    'text': text,

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
                    'protected_zone': this.protected_zone
                }

                axios.get('/api/filterPops', {params: params})
                .then((response) => {
                    // console.log(response.data)
                    this.pops = response.data
                })
            },

            // APIs
            getPopsMap() {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0
                var text = this.searchText != '' ?  this.searchText : 0

                var params = {
                    'crm_id': crm_id,
                    'zona_id': zona_id,
                    'text': text,

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
                    'protected_zone': this.protected_zone
                }

                axios.get('/api/popsMap', {params: params})
                .then((response) => {
                    console.log(response.data)
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
                    this.secondaryText = 'has-text-grey-light'
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
                this.selectedPop = null
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

            formSubmit(e) {
                // Activate loading button
                this.buttonLoading = 'is-loading'

                e.preventDefault()
                axios({
                    url: '/pop/export',
                    method: 'POST',
                    responseType: 'blob',
                    // headers: {
                    //     'Content-Type': 'text/html; charset=utf-8',
                    //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    // }
                })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]))
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute('download', 'listado_pops.xlsx')
                    document.body.appendChild(link)
                    link.click()

                    // Deativate loading button
                    this.buttonLoading = ''
                })
                .catch((error) => {
                    console.log('Error: ' + error);
                });
            },

        }
    }
</script>
