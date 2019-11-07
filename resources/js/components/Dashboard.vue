<template>
    <div class="">
        
        <section class="section is-marginless" :class="bodyBackground">
            <button class="button is-link" @click="changeStyle" v-model="darkMode">Style</button>

            <!-- BOTONES -->
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="crm in crms">
                        <a class="tile is-child box" :class="selectedCrm == crm ? 'has-background-link' : boxBackground" @click="selectCrm(crm)">
                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    CRM {{ crm.nombre }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">Subgerente</div> 
                                    <div class="is-size-7 has-text-weight-semibold">{{ crm.subgerente_crm }}</div>
                                </div>
                                <!-- <div class="is-size-5 has-text-weight-semibold">
                                    <div>{{ crm.zonas.length }}</div>
                                    <div class="is-size-7 has-text-weight-normal">Zonas</div> 
                                </div> -->
                            </div>

                            
                            <!-- <div 
                                class="is-size-2 has-text-centered has-text-weight-semibold" 
                                :class="selectedCrm == crm ? selectedPrimaryBoxText : primaryText"
                                >
                                25.2
                                <span class="is-size-5">&nbsp;Cº</span>
                            </div> -->

                        </a>
                    </div>
                </div>
            </div>
            <div v-if="selectedCrm != null" class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="zona in zonas">
                        <a class="tile is-child box" :class="selectedZona == zona ? 'has-background-link' : boxBackground" @click="selectZona(zona)">
                            <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Zona {{ zona.nombre }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">Coordinador</div> 
                                    <div class="is-size-7 has-text-weight-semibold">{{ zona.responsable.nombre }} {{ zona.responsable.apellido }}</div>
                                </div>
                                <!-- <div class="is-size-5 has-text-weight-semibold">
                                    <div>{{ crm.zonas.length }}</div>
                                    <div class="is-size-7 has-text-weight-normal">Zonas</div> 
                                </div> -->
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- BUSCAR -->
            <div class="container section" style="width: 50%" >
                <span class="container is-size-7 is-right" v-if="searchText.length >= 4">
                    <strong style="margin-left: 10px;">{{ counter | numeral('0,0')}}</strong> pops encontrados
                </span>
                <p class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-rounded" 
                        :class="searchBodyBackground + ' ' + primaryText" 
                        v-model="searchText" 
                        @keyup="search" 
                        type="text" 
                        arial-label="Buscar..." 
                        placeholder="Buscar..." 
                        autofocus
                        v-clickOutside="clickOutside"
                        @click="setActive"
                        >
                    <span class="icon is-small is-left">
                        <font-awesome-icon icon="search"/>
                    </span>
                    <span class="icon is-small is-right">
                        <button class="delete" @click="clearSearch"></button>
                    </span>
                    
                </p>
                
                <div class="dropdown" :class="popSearch.length && active == 1 ? 'is-active' : ''" style="width: 100%">
                    <div class="dropdown-menu" style="width: 100%" id="dropdown-menu" role="menu">
                        <div class="dropdown-content" :class="searchBodyBackground + ' ' + primaryText" style="max-height: 400px; overflow: auto;">
                            <div v-for="pop in popSearch" class="dropdown-item">
                                <a :href="'pop/' + pop.id" target="_blank" class="columns">
                                    <div class="column is-6">
                                        <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                            {{ pop ? (pop.nem_fijo && pop.nem_movil ? pop.nem_fijo + ' - ' + pop.nem_movil : (pop.nem_fijo ? pop.nem_fijo : pop.nem_movil)) : 'No tiene nemónico' }}
                                        </div>
                                        <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                            {{ pop ? pop.nombre_pop : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? pop.nombre_comuna : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? 'Zona ' + pop.nombre_zona : '' }} - {{ pop ? 'CRM ' + pop.nombre_crm : '' }}
                                        </div>
                                    </div>

                                    <div class="column is-1">
                                        <div class="has-text-centered">
                                            <img v-if="pop.attention_type_id == 2" alt="Servicio 24/7" class="" src="img/24_7_color.png" style="max-height: 30px;" />
                                        </div>
                                        <div class="has-text-centered">
                                            <span v-if="pop.alba_project == 1" class="tag is-light is-primary has-text-weight-bold is-size-7">
                                                {{ pop.alba_project == 1 ? 'alba' : '' }}
                                            </span>
                                        </div>
                                        
                                    </div>

                                    <div class="column">
                                        <div class="tags has-addons is-right">
                                            <span class="tag is-dark">categoría</span>
                                            <span 
                                                class="tag has-text-weight-bold" 
                                                :class="pop.classification_type_id == 1 ? 'is-danger' : 
                                                    (pop.classification_type_id == 2 ? 'is-warning' : 
                                                    (pop.classification_type_id == 3 ? 'is-link' : 'is-info'))"
                                            >
                                                {{ pop ? pop.type : '' }}
                                            </span>
                                        </div>
                                    </div>
                                </a>


                                <div class="field">
                                    <button class="button is-small is-default" @click="selectPop(pop)" v-model="selectedPop">
                                        <font-awesome-icon icon="map-marked-alt"/>&nbsp;Ver en mapa
                                    </button>
                                    <a class="button is-small is-link" :href="'pop/' + pop.id" target="_blank">
                                        <font-awesome-icon icon="info-circle"/>&nbsp;Ver detalles
                                    </a>
                                </div>
                                <hr class="dropdown-divider">
                            </div>
                        </div>
                    </div>
                </div>       
            </div>

            <!-- CUADROS -->
            <div class="is-marginless" :class="bodyBackground">
                <div class="columns">

                    <!-- CUADROS DE INFORMACION -->
                    <div class="column is-two-thirds">
                        <div class="tile is-ancestor">
                            <pop-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :csrf="csrf"
                            ></pop-data>
                            <technologies-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :csrf="csrf"
                            ></technologies-data>
                        </div>
                        <div class="tile is-ancestor">
                             <services-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :csrf="csrf">
                            </services-data>
                            <radial-chart>
                                
                            </radial-chart>
                        </div>
                    </div>

                    <!-- MAPA -->
                    <div class="column">
                        <!-- <map-view
                            :selectedPop="selectedPop"
                            :selectedCrm="selectedCrm"
                            :selectedZona="selectedZona"
                            :map_attributes="map_attributes"
                            :darkMode="darkMode"
                        ></map-view> -->
                    </div>
                </div>
            </div>
            
        </section>

        <section class="section is-marginless" :class="bodyBackground">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <div class="is-size-6 has-text-weight-semibold" :class="secondaryText">TEMPERATURE</div>
                        <div class="is-size-2 has-text-weight-semibold" :class="primaryText">25.2<span class="is-size-5">&nbsp;Cº</span></div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Foo</p>
                        <p class="subtitle">Bar</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Third column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import DashboardPopData from './DashboardPopData.vue';
    import DashboardTechnologiesData from './DashboardTechnologiesData.vue';
    import DashboardServicesData from './DashboardServicesData.vue';
    import RadialChart from './RadialChart.vue';
    // import LoadingComponent from './maps/LoadingComponent.vue';
    // import ErrorComponent from './maps/ErrorComponent.vue';
    const MapView = () => ({
        // The component to load (should be a Promise)
        component: import('./maps/MapView.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        // delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 300
    });
    var moment = require('moment');
    export default {
        components: {
            'pop-data': DashboardPopData,
            'technologies-data': DashboardTechnologiesData,
            'services-data': DashboardServicesData,
            'map-view': MapView,
            'radial-chart': RadialChart,
            // 'map-view': function(resolve) {
            //     require(['./maps/MapView.vue'], resolve)
            // }
        },
        props : [
            'map_attributes',
            'csrf'
        ],
        created() {
            this.styleMode()
            this.getCrms()
        },
        mounted() {
            
        },
        data() {
            return {
                crms: null,
                zonas: null,

                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
                
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',

                selectedPop: null,
                selectedCrm: null,
                selectedZona: null,
                
                searchText: '',
                popSearch: [],
                active: null,
                counter: 0
            }
        },
        methods: {
            // Triggers
            selectPop(pop) {
                this.selectedPop = pop
            },
            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                if (this.selectedCrm != crm) {
                    this.selectedCrm = crm
                    this.selectedZona = null
                } else {
                    this.selectedCrm = null
                    this.selectedZona = null
                }
                this.getZonas(this.selectedCrm)
                this.search()
            },
            selectZona(zona) {
                if (this.selectedZona != zona) {
                    this.selectedZona = zona
                } else {
                    this.selectedZona = null
                }
                this.search()
            },
            
            // APIs
            getCrms() {
                axios.get(`api/crms`)
                    .then((response) => {
                        this.crms = response.data.data;
                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
            },
            getZonas(crm) {
                if (crm != null) {
                    axios.get(`api/zonasCrm/${crm.id}`)
                        .then((response) => {
                            this.zonas = response.data.data;
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    this.zonas = null
                }
            },

            // Search bar
            search(){
                if (this.searchText.length >= 4) {
                    if (this.selectedCrm == null) {
                        axios.get(`api/searchPops/${this.searchText}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                            });
                    } else if (this.selectedZona == null) {
                        axios.get(`api/searchPopsCrm/${this.searchText}/${this.selectedCrm.id}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                            });
                    } else {
                        axios.get(`api/searchPopsZona/${this.searchText}/${this.selectedZona.id}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                            });
                    }
                } else if (this.searchText == '') {
                    this.clearSearch()
                } else {
                    this.popSearch = []
                }
            },
            clearSearch() {
                this.popSearch = []
                this.searchText = ''
                this.selectedPop = null
            },
            clickOutside() {
                this.active = null
            },
            setActive() {
                this.active = 1
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
            }
        },
        events: {
            clickOutside(event) {                
            }
        }
    }
</script>
