<template>
    <div class="">
        
        <section class="section is-marginless" :class="bodyBackground">
            

            <!-- SWITCH CORE & CRM BUTTONS-->
            <div class="container" style="margin: -20px auto 20px auto;">
                <b-field>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column has-text-centered">
                            <!-- <b-checkbox-button v-model="core"
                                native-value="Core"
                                type="is-danger">
                                <span>Core</span>
                            </b-checkbox-button> -->
                            <b-switch  @input="switchCore">Red CORE</b-switch>
                        </div>
                        <div class="column">
                            <b-button class="button is-link is-small is-pulled-right" @click="changeStyle" v-model="darkMode">Style</b-button>
                        </div>
                    </div>
                    
                </b-field>

                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="crm in crms">
                        <a class="tile is-child box" :class="selectedCrm == crm ? 'has-background-link' : boxBackground" @click="selectCrm(crm)">
                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    CRM {{ crm.nombre_crm }}
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

            <!-- ZONA BUTTONS -->
            <div v-if="selectedCrm != null" class="" :class="innerBackground" style="margin: 0 -24px 0 -24px">
                <div class="container" style="margin: -20px auto 10px auto;">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="zona in zonas">
                            <a class="tile is-child box" :class="selectedZona == zona ? 'has-background-link' : boxBackground" @click="selectZona(zona)">
                                <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                    <div class="is-size-6 has-text-weight-semibold">
                                        Zona {{ zona.nombre_zona }}
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
            </div>

            <!-- BUSCADOR -->
            <div class="container" style="width: 50%; margin-top: 30px;">
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
                        <span v-if="searchText.length >= 3" class="container is-size-7 is-right field" :class="secondaryText" >
                            <strong style="margin-left: 10px;" :class="primaryText">{{ counter | numeral('0,0')}}</strong> pops encontrados
                        </span>
                        <div class="dropdown-content" :class="searchBodyBackground + ' ' + primaryText" style="max-height: 400px; overflow: auto;">
                            <div v-for="pop in popSearch" class="dropdown-item" :class="pop.alba_project ? '' : ''">
                                <a :href="'pop/' + pop.id" target="_blank" class="columns">
                                    <div class="column is-6">
                                        <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                            {{ pop.nem_site }}
                                            <!-- {{ pop ? (pop.nem_fijo && pop.nem_movil ? pop.nem_fijo + ' - ' + pop.nem_movil : (pop.nem_fijo ? pop.nem_fijo : pop.nem_movil)) : 'No tiene nemónico' }} -->
                                            
                                        </div>
                                        <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                            {{ pop ? pop.nombre_sitio : '' }}
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
                                            <!-- <img v-if="pop.attention_type_id == 2" alt="Servicio 24/7" class="" src="img/24_7_color.png" style="max-height: 30px;" /> -->
                                        </div>
                                        <div class="has-text-centered">
                                            <span v-if="pop.alba_project == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
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
                                                {{ pop ? pop.classification_type : '' }}
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
            <div class="" :class="bodyBackground" style="margin: 20px 0 -30px 0;">
                <div class="">

                    <!-- CUADROS DE INFORMACION -->
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-vertical">
                            <pop-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                            <services-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                            <movil-services-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                        </div>

                        <!-- MAPA -->
                        <div class="tile is-parent is-vertical">
                            <div class="tile is-parent">
                                <map-view
                                    :boxBackground="boxBackground"
                                    :selectedPop="selectedPop"
                                    :selectedCrm="selectedCrm"
                                    :selectedZona="selectedZona"
                                    :map_attributes="map_attributes"
                                    :darkMode="darkMode"
                                    :selectedPops="selectedPops"
                                    :core="core"
                                />
                            </div>
                        </div>

                        <div class="tile is-parent is-vertical">
                            <sites-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                            <technologies-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                            <infra-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                            <!-- <radial-chart/> -->
                        </div>

                        <!-- <div class="tile is-parent is-vertical">
                            
                            
                        </div> -->

                        
                    </div>

                    <div class="tile is-ancestor">
                        
                        <div class="tile is-parent is-vertical">
                            
                        </div>
                        <div class="tile is-parent is-vertical">
                            
                        </div>
                        <div class="tile is-parent is-vertical">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        <!-- PODER -->
        <section class="section is-marginless" :class="bodyBackgroundEnergy">
            <div class="title">PODER</div>
            <div class="tile is-ancestor">
                <electric-line-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <generator-group-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <power-rectifier-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
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

        <!-- CLIMA -->
        <section class="section is-marginless" :class="bodyBackgroundClimate">
            <div class="title">CLIMA</div>
            <div class="tile is-ancestor">
                <air-conditioner-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundClimate"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
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

        <!-- INFRAESTRUCTURA -->
        <section class="section is-marginless" :class="bodyBackgroundInfrastructure">
            <div class="title">INFRAESTRUCTURA</div>
            <div class="tile is-ancestor">
                <vertical-structure-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundInfrastructure"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <infrastructure-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundInfrastructure"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
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
    import DashboardSitesData from './DashboardSitesData.vue';
    import DashboardTechnologiesData from './DashboardTechnologiesData.vue';
    import DashboardServicesData from './DashboardServicesData.vue';
    import DashboardMovilServicesData from './DashboardMovilServicesData.vue';
    import DashboardInfraData from './DashboardInfraData.vue';

    import DashboardElectricLinesData from './DashboardElectricLinesData.vue';
    import DashboardGeneratorGroupsData from './DashboardGeneratorGroupsData.vue';
    import DashboardPowerRectifiersData from './DashboardPowerRectifiersData.vue';
    import DashboardAirConditionersData from './DashboardAirConditionersData.vue';
    import DashboardVerticalStructuresData from './DashboardVerticalStructuresData.vue';
    import DashboardInfrastructuresData from './DashboardInfrastructuresData.vue';
    
    // import RadialChart from '../RadialChart.vue';
    import MapView from "../maps/MapView.vue";

    var moment = require('moment');
    export default {
        components: {
            'pop-data': DashboardPopData,
            'sites-data': DashboardSitesData,
            'technologies-data': DashboardTechnologiesData,
            'services-data': DashboardServicesData,
            'movil-services-data': DashboardMovilServicesData,
            'infra-data': DashboardInfraData,
            'electric-line-data': DashboardElectricLinesData,
            'generator-group-data': DashboardGeneratorGroupsData,
            'power-rectifier-data': DashboardPowerRectifiersData,
            'air-conditioner-data': DashboardAirConditionersData,
            'vertical-structure-data': DashboardVerticalStructuresData,
            'infrastructure-data': DashboardInfrastructuresData,
            'map-view': MapView,
            // 'radial-chart': RadialChart,
            // 'Mapa': Mapa
            // 'map-view': function(resolve) {
            //     require(['./maps/MapView.vue'], resolve)
            // }
        },
        props : [
            'map_attributes',
        ],
        created() {
            this.styleMode()
            this.getCrms()
        },
        mounted() {
            
        },
        data() {
            return {
                core: 0,
                crms: null,
                zonas: null,

                darkMode: 0,
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
                selectedSecondaryBoxText: 'has-text-light',

                selectedPop: null,
                selectedCrm: null,
                selectedZona: null,
                selectedPops: [],
                
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

            switchCore() {
                if (this.core == 0) {
                    this.core = 1
                    this.search()
                } else {
                    this.core = 0
                    this.search()
                }
            },
            
            // APIs
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.data;
                })
                .catch((error) => {
                    console.log('Error al traer los CRM: ' + error);
                });
            },
            getZonas(crm) {
                if (crm != null) {
                    axios.get(`/api/zonasCrm/${crm.id}`)
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
                if (this.searchText.length >= 3) {
                    if (this.selectedCrm == null) {
                        axios.get(`/api/searchPops?text=${this.searchText}&core=${this.core}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                                console.log('handle server error from here');
                            });
                    } else if (this.selectedZona == null) {
                        axios.get(`/api/searchPopsCrm?text=${this.searchText}&crm_id=${this.selectedCrm.id}&core=${this.core}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                                console.log('handle server error from here');
                            });
                    } else {
                        axios.get(`/api/searchPopsZona?text=${this.searchText}&zona_id=${this.selectedZona.id}&core=${this.core}`)
                            .then((response) => {
                                this.popSearch = response.data
                                this.counter = this.popSearch.length
                                this.active = 1
                            })
                            .catch(() => {
                                console.log('handle server error from here');
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
                    this.innerBackground = 'has-background-dark-ter shadow-inset-dark',
                    this.bodyBackgroundEnergy = 'has-background-black-ter',
                    this.bodyBackgroundClimate = 'has-background-black-ter',
                    this.bodyBackgroundInfrastructure = 'has-background-black-ter',
                    this.boxBackgroundEnergy = 'has-background-green-light',
                    this.boxBackgroundClimate = 'has-background-blue-light',
                    this.boxBackgroundInfrastructure = 'has-background-yellow-light'
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
                    this.boxBackgroundEnergy = 'has-background-green-light',
                    this.boxBackgroundClimate = 'has-background-blue-light',
                    this.boxBackgroundInfrastructure = 'has-background-yellow-light'
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

        computed: {
            
        },
    }
</script>

<style lang="scss" scoped>
  .box.minim {
    height: 425px;
  }
</style>
