<template>
    <section class="section is-marginless" :class="bodyBackground">
        <!-- Area Filter Buttons -->
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
                        </div>
                    </a>
                </div>
            </div>
        </div>


        <div class="tile is-ancestor">
            <div class="tile is-7 is-parent">
                <div class="tile is-child box" :class="boxBackground" style="min-height: 700px;">
                    <div class="field">
                        <div class="field">
                            <div class="tags has-addons is-right">
                                <span class="is-size-7" v-if="searchText.length" style="padding-left: 0">
                                    <strong style="margin-left: 10px;">{{ pops.total | numeral('0,0')}}</strong> pops encontrados
                                </span>

                                <span class="tag is-dark">pops</span>
                                <span class="tag has-text-weight-bold">
                                    {{ totalPops | numeral('0,0')}}
                                </span>
                                
                            </div>
                            
                        </div>
                        
                        <p class="control has-icons-left has-icons-right">
                            <input 
                                class="input is-rounded" 
                                :class="bodyBackground + ' ' + primaryText" 
                                @keyup="search" 
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
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">POP</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Categoría">Categoría</abbr></th>
                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="is-size-7 has-text-weight-light" v-for="pop in pops.data">
                                <td class="has-text-weight-light" :class="primaryText">{{ pop.id }}</th>
                                <td class="">
                                    <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                        {{ pop ? (pop.nem_fijo && pop.nem_movil ? pop.nem_fijo + ' - ' + pop.nem_movil : (pop.nem_fijo ? pop.nem_fijo : pop.nem_movil)) : 'No tiene nemónico' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="primaryText">
                                        {{ pop ? pop.nombre_pop : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop ? pop.nombre_comuna : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop ? 'Zona: ' + pop.nombre_zona : '' }} - {{ pop ? 'CRM: ' + pop.nombre_crm : '' }}
                                    </div>
                                </td>

                                <td>
                                    <div class="field is-pulled-right">
                                        <!-- <div class="tags has-addons"> -->
                                            <span 
                                                class="tag has-text-weight-bold is-light is-size-7" 
                                                :class="pop.classification_type_id == 1 ? 'is-danger' : 
                                                    (pop.classification_type_id == 2 ? 'is-warning' : 
                                                    (pop.classification_type_id == 3 ? 'is-blue' : 'is-link'))"
                                            >
                                                {{ pop ? pop.type : '' }}
                                            </span>
                                        <!-- </div> -->
                                    </div>
                                </td>

                                <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                    <a :href="'/pop/' + pop.id" type="button" target="_blank" class="button is-small is-link tooltip" data-tooltip="Ver información completa">
                                        <font-awesome-icon icon="bars"/>
                                    </a>

                                    <button class="button is-small is-default tooltip" @click="selectPop(pop)" v-model="selectedPop" data-tooltip="Ver en mapa">
                                        <font-awesome-icon icon="map-marked-alt"/>
                                    </button>
                                </td>

                            </tr>    
                        </tbody>
                    </table>
                    <nav class="pagination" role="navigation" aria-label="pagination">
                        <vue-pagination  
                            :pagination="pops"
                            @paginate="search()"
                            :offset="4"
                            :primaryText="primaryText">
                        </vue-pagination>
                    </nav>
                    <div class="field">
                        <div class="field has-text-right">
                            <!-- <a href="{{ route('comsite.create') }}" type="submit" class="button is-link is-small">{{ __('Sincronizar') }}</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-5 is-parent">
                <!-- <map-view
                    :selectedPop="selectedPop"
                    :selectedCrm="selectedCrm"
                    :selectedZona="selectedZona"
                    :map_attributes="map_attributes"
                    :darkMode="darkMode"
                    :selectedPops="selectedPops"
                ></map-view> -->
            </div>
        </div>
    </section>
</template>

<script>
    import VuePagination from './VuePagination.vue';
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
    export default {
        components: {
            'map-view': MapView,
            'vue-pagination': VuePagination
        },
        props : [
            'map_attributes',
            'csrf'
        ],
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

                pops: {
                    total: 0,
                    per_page: 10,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                totalPops: 0,
                searchText: '',

                selectedPop: null,
                selectedCrm: null,
                selectedZona: null,

                selectedPops: [],
            }
        },
        created() {
            this.styleMode()
        },
        mounted() {
            this.search()
            this.getCrms()
        },
        methods: {
            // Triggers
            selectPop(pop) {
                this.selectedPop = pop
            },

            selectPops(user) {
                if (this.area_id != null) {
                    this.selectedPops = []
                    this.area_id = null
                    this.selectedPops.push(user)
                } else if (this.selectedPops.includes(user)) {
                    var index = this.selectedPops.indexOf(user);
                    if (index > -1) {
                      this.selectedPops.splice(index, 1);
                    }
                    
                } else {
                    this.selectedPops.push(user)
                }
            },

            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                if (this.selectedCrm != crm) {
                    this.selectedCrm = crm
                    this.selectedZona = null
                    this.getPops()
                } else {
                    this.selectedCrm = null
                    this.selectedZona = null
                    this.getPops()
                }

                this.getZonas(this.selectedCrm)
                this.search()
            },
            selectZona(zona) {
                if (this.selectedZona != zona) {
                    this.selectedZona = zona
                    this.getPops()
                } else {
                    this.selectedZona = null
                    this.getPops()
                }
                this.search()
            },

            // APIs
            getPops() {
                if (this.selectedCrm == null) {
                    axios.get(`api/pops?page=${this.pops.current_page}`)
                        .then((response) => {
                            console.log(response.data)
                            this.pops = response.data
                            this.totalPops = this.pops.total
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.selectedZona == null){
                    axios.get(`api/popsCrm?page=${this.pops.current_page}&crm_id=${this.selectedCrm.id}`)
                        .then((response) => {
                            this.pops = response.data
                            this.totalPops = this.pops.total
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/popsZona?page=${this.pops.current_page}&zona_id=${this.selectedZona.id}`)
                        .then((response) => {
                            this.pops = response.data
                            this.totalPops = this.pops.total
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
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
            search() {
                if (this.searchText != '') {
                    if (this.selectedCrm == null) {
                        axios.get(`api/filterPops?page=${this.pops.current_page}&text=${this.searchText}`)
                            .then((response) => {
                                this.pops = response.data;
                                this.counter = this.pops.length
                            })
                            .catch(() => {
                            });
                    } else if (this.selectedZona == null) {
                        axios.get(`api/filterPopsCrm?page=${this.pops.current_page}&crm_id=${this.selectedCrm.id}&text=${this.searchText}`)
                            .then((response) => {
                                this.pops = response.data;
                                this.counter = this.pops.length
                            })
                            .catch(() => {
                            });
                    } else {
                        axios.get(`api/filterPopsZona?page=${this.pops.current_page}&zona_id=${this.selectedZona.id}&text=${this.searchText}`)
                            .then((response) => {
                                this.pops = response.data;
                                this.counter = this.pops.length
                            })
                            .catch(() => {
                            });
                    }
                } else {
                    this.getPops()
                }
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
        }
    }
</script>
