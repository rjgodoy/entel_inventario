<template>
    <div class="has-background-light">

        <pop-log 
            :pop="pop"
        />

        <b-button
            type="is-primary" 
            @click="openLog" 
            data-target="quickviewDefault" 
            data-show="quickview" 
            size="is-small"
            >Log del POP
        </b-button>
        <b-button 
            @click="closeLog" 
            data-dismiss="quickview"
            size="is-small"
            >Log dismiss
        </b-button>
        <b-button
            type="is-primary" 
            size="is-small"
            @click="changeStyle" 
            >style
        </b-button>

        <!-- DATOS BASICOS -->
        <section class="hero has-background-white">
            <div class="hero-body columns" style="margin-top: 46px; margin-bottom: -60px;">
                <div class="column has-text-left">
                    <div class="columns">
                        <div class="column is-half">
                            <div class="columns is-four-fifths">
                                <div class="column has-text-left is-four-fifths">
                                    <div class="is-size-3 has-text-weight-semibold">{{ pop.nombre }}
                                        <p class="is-size-7 has-text-weight-light">NOMBRE POP</p>
                                    </div>
                                </div>
                                <div class="column has-text-right">
                                    <b-tooltip label="Categoría: corresponde a la mayor categoría entre todos los sitios del POP" type="is-dark" position="is-right">
                                        <b-tag type="is-info" size="is-large">{{ popClassification }}</b-tag>
                                        <!-- <p class="is-size-7 has-text-weight-light">CATEGORIA</p> -->
                                    </b-tooltip>
                                </div>
                            </div>

                            <div class="title is-size-5 has-text-weight-normal">{{ pop.cod_planificacion ? pop.cod_planificacion : '-' }}
                                <div class="subtitle is-size-7 has-text-weight-light">CODIGO PLANIFICACION</div>
                            </div>
                            
                            <div class="is-divider" data-content="CENTRO REGIONAL MANTENIMIENTO" style="margin: 40px auto 20px auto"></div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.comuna ? pop.comuna.zona.nombre_zona : '' }}
                                        <p class="is-size-7 has-text-weight-light">ZONA</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.comuna ? pop.comuna.zona.crm.nombre_crm : '' }}
                                        <p class="is-size-7 has-text-weight-light">CRM</p>
                                    </div>
                                </div>
                            </div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-6 has-text-weight-semibold">{{ responsableZona.nombre }} {{ responsableZona.apellido }}
                                        <p class="is-size-7 has-text-weight-light">{{ responsableZona.nombre_cargo_especifico }}</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <a :href="'mailto:' + responsableZona.email" class="is-size-7 has-text-weight-semibold has-text-link" style="margin-top: -20px;">{{ responsableZona.email ? responsableZona.email : '-' }}
                                        <p class="is-size-7 has-text-weight-light has-text-dark">email</p>
                                    </a>
                                    <a :href="'tel:' + responsableZona.telefono_movil" class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ responsableZona.telefono_movil ? responsableZona.telefono_movil : '-' }}
                                        <p class="is-size-7 has-text-weight-light has-text-dark" style="margin-top: -4px;">telefono</p>
                                    </a>
                                    <div class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ responsableZona.anexo_fono ? responsableZona.anexo_fono : '-' }}
                                        <p class="is-size-7 has-text-weight-light" style="margin-top: -4px;">anexo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div>

                        <div class="column">
                            <div class="is-divider" :data-content="sites.length + ' SITIOS'" style="margin: 20px auto 20px auto"></div>
                            <div class="tile is-ancestor">
                                <div class="tile is-parent is-vertical">
                                    <div v-for="site in sites" class="tile is-child box has-background-light">
                                        <div class="columns">
                                            <div class="column is-8">
                                                <div class="is-size-5 has-text-weight-normal">{{ site.nem_site ? site.nombre : '-' }}</div>
                                                <div class="is-size-6 has-text-weight-semibold">{{ site.nem_site ? site.nem_site : '-' }}</div>
                                            </div>
                                            <div class="column">
                                                <b-taglist attached class="is-right">
                                                    <b-tag type="is-smart" size="is-normal">
                                                        {{ site.site_type.site_type.toUpperCase() }}
                                                    </b-tag>
                                                    <b-tag type="is-positive" size="is-normal">
                                                        {{ site.classification_type ? site.classification_type.classification_type : '' }}
                                                    </b-tag>
                                                </b-taglist>
                                            </div>
                                        </div>
                                        
                                        <div v-if="site.technologies.length" class="is-divider" data-content="TECNOLOGIAS" style="margin: 10px auto 10px auto"></div>

                                        <div class="tile is-ancestor">
                                            <div class="tile is-vertical">
                                                <div class="tile">
                                                    <div v-for="tech in site.technologies" class="tile is-parent">
                                                        <div class="tile is-child box">
                                                            <div class="title is-size-5 has-text-weight-normal">{{ tech.nem_tech }}
                                                                <div class="subtitle is-size-7 has-text-weight-light">Tecnología</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- <div class="title is-size-5 has-text-weight-normal">{{ site }}</div> -->
                                    </div>
                                    <!-- <div class="tile is-child box">
                                        <div class="title is-size-5 has-text-weight-normal">{{ pop.nem_site ? pop.nem_site : technologies }}
                                            <div class="subtitle is-size-7 has-text-weight-light">NEMONICO SWITCH</div>
                                        </div>
                                    </div> -->
                                </div>
                                <!-- <div class="tile is-parent is-vertical">
                                    <div class="tile is-child box">
                                        <div class="title is-size-5 has-text-weight-normal">{{ pop.nem_movil ? pop.nem_movil : 'No existe sitio Movil' }}
                                            <div class="subtitle is-size-7 has-text-weight-light">NEMONICO MOVIL</div>
                                        </div>
                                    </div>
                                    <div class="tile is-child box">
                                        PHONE
                                    </div>
                                </div> -->
                            </div>
                        </div>

                    </div>
                </div>

                <div class="column" style="margin: -106px -24px 0 0px;">
                    <div class="card">
                        <figure class="">
                            <pop-map
                                :classification="popClassification"
                                :popMaster="pop"
                                :darkMode="darkMode"
                            ></pop-map>
                        </figure>
                        <div class="card-content">
                            <div class="columns">
                                <div class="column is-8">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.direccion }}</div>
                                    <div class="is-size-7 has-text-weight-normal">Comuna de {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}</div>
                                </div>
                                <div class="column">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="is-size-6 has-text-weight-semibold">{{ pop.latitude }}
                                                <p class="is-size-7 has-text-weight-light">Latitud</p>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="is-size-6 has-text-weight-semibold">{{ pop.longitude }}
                                                <p class="is-size-7 has-text-weight-light">Longitud</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TECNOLOGIAS -->
        <section class="level has-background-dark has-text-white is-marginless">
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">2G 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec2g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec2g1900 ? tec2g1900.nem_tech : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 82px;"></div>

            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">3G 900
                    <span class="has-text-weight-bold is-size-5" :class="tec3g900 ? 'has-text-eco' : ''">&nbsp;{{ tec3g900 ? tec3g900.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">3G 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec3g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec3g1900 ? tec3g1900.nem_tech : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 82px;"></div>

            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 700
                    <span class="has-text-weight-bold is-size-5" :class="tec4g700 ? 'has-text-eco' : ''">&nbsp;{{ tec4g700 ? tec4g700.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec4g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec4g1900 ? tec4g1900.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 2600
                    <span class="has-text-weight-bold is-size-5" :class="tec4g2600 ? 'has-text-eco' : ''">&nbsp;{{ tec4g2600 ? tec4g2600.nem_tech : '-' }}</span>
                </div>
            </div>
        </section>

        <!-- CARACTERISTICAS -->
        <!-- <section class="hero is-bold" :class="heroBackground">
            <div class="hero-body">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ attention_priority ? attention_priority.attention_priority_type.attention_priority_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">PRIORIDAD ATENCION EN TERRENO</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ dependences ? dependences.length : 0 }}</p>
                            <p class="heading has-text-weight-semibold">DEPENDENCIAS DIRECTAS</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ dependences ? dependences.length : 0 }}</p>
                            <p class="heading has-text-weight-semibold">DEPENDENCIAS TOTALES</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ category ? category.category_type.category_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">CLASIFICACION PLANIFICACION</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ attention ? attention.attention_type.attention_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">TIPO ATENCION EN TERRENO</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ autonomy ? autonomy.theoretical : '-' }} <span class="is-size-5">hrs.</span></p>
                            <p class="heading has-text-weight-semibold">AUTONOMIA TEORICA</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section> -->


        <section class="section">
            <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">
                <div class="tile is-parent" v-for="tab in tabs">
                    <a class="tile is-child box" :key="tab.component" :class="currentTab === tab.component ? 'has-background-link' : boxBackground" @click="currentTab = tab.component">
                        <div :class="currentTab === tab.component ? selectedSecondaryBoxText : secondaryText"> 
                            <div class="is-size-6 has-text-weight-semibold">
                                {{ tab.title }}
                            </div>

                            <div style="margin-top: 10px;">
                                <!-- <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div>  -->
                            </div>
                        </div>
                    </a>
                    <!-- <a class="tile is-child box" :class="tabButtonView == item.id ? 'has-background-link' : boxBackground" @click="changeView(item.id)">
                        <font-awesome-icon :icon="item.icon" class="fa-2x" :class="tabButtonView == item.id ? selectedSecondaryBoxText : secondaryText"/>
                        <div :class="tabButtonView == item.id ? selectedSecondaryBoxText : secondaryText" style="margin-top: 10px;"> 
                            <div class="is-size-6 has-text-weight-semibold">
                                {{ item.title.toUpperCase() }}
                            </div>
                        </div>
                    </a> -->
                </div>
            </div>

            <characteristics :is="currentTabComponent"
                :pop="pop"
                :rcas="[]"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            />

            <!-- <power v-if="tabButtonView == 2"
                :pop="pop"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            /> -->

<!--             <clima v-if="tabButtonView == 3"
                :pop="pop"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            />

            <infrastructure v-if="tabButtonView == 4"
                :pop="pop"
                :rcas="rcas"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            />

            <characteristics v-if="tabButtonView == 5"
                :pop="pop"
                :rcas="rcas"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            />

            <comsite v-if="tabButtonView == 6"
                :pop="pop"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            />

            <documents v-if="tabButtonView == 7"
                :pop="pop"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            /> -->
        </section>

    </div>
    
</template>

<script>
    // import AutonomyChart from '../AutonomyChart.vue';
    import PopCharacteristics from './PopCharacteristics.vue';
    // import PopPower from './PopPower.vue';
    // import PopClima from './PopClima.vue';
    // import PopInfrastructure from './PopInfrastructure.vue';
    // import PopDocuments from './PopDocuments.vue';
    const bulmaQuickview = require('../../../../node_modules/bulma-quickview/src/js/index').default;
    export default {
        components: {
            PopMap: () => import("./PopMapView"),
            // 'autonomy-chart': AutonomyChart,
            'pop-characteristics': PopCharacteristics,
            // 'pop-power': PopPower,
            // 'pop-climate': PopClima,
            // 'pop-infrastructure': PopInfrastructure,
            PopComsite: () => import("./PopComsite"),
            // 'pop-documents': PopDocuments,
            PopLog: () => import("./PopLog")
        },
        props : [
            // 'pop_menu',
            // 'attention',
            // 'attentions',
            // 'attention_priority',
            // 'attention_priorities',
            // 'autonomy',
            // 'autonomies',
            // 'category',
            // 'categories',
            // 'coverage',
            // 'coverages',
            // 'dependences',
            // 'derivation',
            // 'derivations',
            // 'nets',
            // 'net',
            // 'pop_classes',
            // 'pop_class',
            // 'rcas',
            // 'site',
            // 'transports',
            // 'transport',
        ],
        data() {
            return {
                pop: [],
                technologiesArray: [],

                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                heroBackground: 'is-info',

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',

                tabButtonView: 1,
                logOpened: 0,

                tabs: null,
                currentTab: 'characteristics'
            }
        },

        created() {
            this.styleMode()
        },

        mounted() {
            this.getAllData()
            this.getTabs()
            var quickviews = bulmaQuickview.attach();
        },

        computed: {
            sites() {
                var array = []
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) { 
                        array.push(item) 
                    })
                } 
                return array
            },
            sitesFijo() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 1) : null
            },
            sitesMovil() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 2) : null
            },
            sitesSwitch() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 3) : null
            },
            sitesPhone() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 4) : null
            },

            technologies() {
                var array = []
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.technologies.length > 0) { 
                            array.push(item.technologies) 
                        }
                    })
                }
                return array[0]
            },
            tec2g1900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 1) : null
            },
            tec3g900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 2) : null
            },
            tec3g1900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 3) : null
            },
            tec3g3500() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 4) : null
            },
            tec4g700() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 5) : null
            },
            tec4g1900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 6) : null
            },
            tec4g2600() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 7) : null
            },
            tec4g3500() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 8) : null
            },

            popClassification() {
                var i = 6; var cat
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.classification_type_id && item.classification_type_id < i) { 
                            i = item.classification_type_id
                            cat = item.classification_type.classification_type
                        }
                    })
                }
                return cat
            },

            responsableZona() {
                var array = []
                if (this.pop.comuna) {
                    array = {
                        'nombre': this.pop.comuna.zona.responsable.nombre,
                        'apellido': this.pop.comuna.zona.responsable.apellido,
                        'email': this.pop.comuna.zona.responsable.email,
                        'telefono_movil': this.pop.comuna.zona.responsable.telefono_movil,
                        'anexo_fono': this.pop.comuna.zona.responsable.anexo_fono,
                        'nombre_cargo_especifico': this.pop.comuna.zona.responsable.nombre_cargo_especifico
                    }
                }
                return array
            },
            currentTabComponent: function () {
                return 'pop-' + this.currentTab
            }
        },
        methods: {
            getTabs() {
                axios.get(`/api/popMenu`).then((response) => {
                    this.tabs = response.data.data
                })
            },
            getAllData() {
                axios.get(`/api/pop/${this.$route.params.id}`).then((response) => {
                    this.pop = response.data
                    // console.log(this.pop)
                })


                // axios.get(`/api/popTechnologies?pop_id=${this.$route.params.id}`).then((response) => {
                //     // console.log(response.data.data)
                //     this.technologies = response.data.data
                // })
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
                this.darkMode = this.darkMode == 0 ? 1 : 0
                this.styleMode()
            },
            changeView(view) {
                if (this.tabButtonView != view) {
                    this.tabButtonView = view
                }
            },
            openLog() {
                this.logOpened = 1
                // console.log(this.logOpened)
            },
            closeLog() {
                this.logOpened = 0
                // console.log(this.logOpened)
            }
        }
    }
</script>
