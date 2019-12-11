<template>
    <div class="has-background-light">
        <section class="level has-background-dark is-marginless" >
            <div class="level-item" style="margin: 10px 0 10px 0;">
                <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">POP</div>
            </div>
        </section>

        <section class="hero is-medium has-background-white">
            <div class="hero-body columns" style="margin-top: -50px; margin-bottom: -50px;">
                <div class="column has-text-left">
                    <div class="columns">
                        <div class="column is-half">
                            <!-- <div class="is-divider" data-content="POP" style="margin: 40px auto 20px auto"></div> -->
                            <div class="columns is-four-fifths">
                                <div class="column has-text-left is-four-fifths">
                                    <div class="is-size-3 has-text-weight-semibold">{{ pop.nombre }}
                                        <p class="is-size-7 has-text-weight-light">NOMBRE</p>
                                    </div>
                                </div>
                                <div class="column has-text-right">
                                    <div class="is-size-4 has-text-weight-semibold">{{ classification.classification_type.classification_type }}
                                        <p class="is-size-7 has-text-weight-light">CATEGORIA</p>
                                    </div>
                                </div>
                            </div>

                            <div class="is-divider" data-content="NEMONICOS" style="margin: 20px auto 20px auto"></div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="title is-size-5 has-text-weight-normal">{{ pop.nem_fijo ? pop.nem_fijo : '-' }}
                                        <div class="subtitle is-size-7 has-text-weight-light">NEMONICO FIJO</div>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ pop.nem_movil ? pop.nem_movil : '-' }}
                                        <div class="subtitle is-size-7 has-text-weight-light">NEMONICO MOVIL</div>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ pop.cod_planificacion ? pop.cod_planificacion : '-' }}
                                        <div class="subtitle is-size-7 has-text-weight-light">CODIGO PLANIFICACION</div>
                                    </div>
                                </div>

                                <div class="column has-text-right">
                                    <div class="title is-size-5 has-text-weight-normal">{{ site ? site.site_type.site_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO SITIO</p>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ pop_class ? pop_class.pop_class_type.pop_class_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO POP</p>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ net ? net.net_type.net_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO RED</p>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ transport ? transport.transport_type.transport_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO TRANSPORTE</p>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ derivation ? derivation.derivation_type.derivation_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO DERIVACION</p>
                                    </div>

                                    <div class="title is-size-5 has-text-weight-normal">{{ coverage ? coverage.coverage_type.coverage_type : '-' }}
                                        <p class="subtitle is-size-7 has-text-weight-light">TIPO COBERTURA</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="is-divider-vertical" style="margin-left: -20px; margin-right: -20px;"></div>

                        <div class="column " style="margin-right: 48px;">
                            <div class="is-divider" data-content="DIRECCION" style="margin: 20px auto 20px auto"></div>
                            <div class="is-size-5 has-text-weight-semibold">{{ pop.direccion }}</div>
                            <div class="is-size-6 has-text-weight-normal">{{ pop.comuna.nombre_comuna }}
                                <p class="is-size-7 has-text-weight-light">COMUNA</p>
                            </div>
                            
                            <div class="is-divider" data-content="CENTRO REGIONAL MANTENIMIENTO" style="margin: 40px auto 20px auto"></div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.comuna.zona.nombre_zona }}
                                        <p class="is-size-7 has-text-weight-light">ZONA</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.comuna.zona.crm.nombre_crm }}
                                        <p class="is-size-7 has-text-weight-light">CRM</p>
                                    </div>
                                </div>
                            </div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.comuna.zona.responsable.nombre }} {{ pop.comuna.zona.responsable.apellido }}
                                        <p class="is-size-7 has-text-weight-light">{{ pop.comuna.zona.responsable.nombre_cargo_especifico }}</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <a :href="'mailto:' + pop.comuna.zona.responsable.email" class="is-size-7 has-text-weight-semibold has-text-link" style="margin-top: -20px;">{{ pop.comuna.zona.responsable.email }}
                                        <p class="is-size-7 has-text-weight-light has-text-dark">email</p>
                                    </a>
                                    <a :href="'tel:' + pop.comuna.zona.responsable.telefono_movil" class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ pop.comuna.zona.responsable.telefono_movil  ? pop.comuna.zona.responsable.telefono_movil : '-'}}
                                        <p class="is-size-7 has-text-weight-light has-text-dark" style="margin-top: -4px;">telefono</p>
                                    </a>
                                    <div class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ pop.comuna.zona.responsable.anexo_fono ? pop.comuna.zona.responsable.anexo_fono : '-' }}
                                        <p class="is-size-7 has-text-weight-light" style="margin-top: -4px;">anexo</p>
                                    </div>
                                </div>
                            </div>

                            <!-- <p class="is-size-7 has-text-weight-light">
                                Zona 
                                <span class="is-size-6 has-text-weight-semibold">{{ pop.comuna.zona.nombre_zona }}</span>
                            </p> 
                            <p class="is-size-7 has-text-weight-light">
                                CRM 
                                <span class="is-size-6 has-text-weight-semibold">{{ pop.comuna.zona.crm.nombre_crm }}</span>
                            </p> -->

                            <div class="is-divider" data-content="COORDENADAS" style="margin: 40px auto 20px auto"></div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.latitude }}
                                        <p class="is-size-7 has-text-weight-light">Latitud</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <div class="is-size-6 has-text-weight-semibold">{{ pop.longitude }}
                                        <p class="is-size-7 has-text-weight-light">Longitud</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column" style="margin: -106px -24px -106px -48px;">
                    <pop-map-view
                        :pop="this.pop"
                        :classification="classification"
                        :darkMode="darkMode"
                    ></pop-map-view>
                </div>
            </div>
        </section>

        <section class="level has-background-dark has-text-white is-marginless">
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">2G 900
                    <span class="has-text-weight-semibold is-size-6" :class="tec2g900 ? 'has-text-success' : ''">&nbsp;{{ tec2g900 ? tec2g900.site : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">2G 1900
                    <span class="has-text-weight-semibold is-size-6" :class="tec2g1900 ? 'has-text-success' : ''">&nbsp;{{ tec2g1900 ? tec2g1900.site : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 82px;"></div>

            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">3G 900
                    <span class="has-text-weight-semibold is-size-6" :class="tec3g900 ? 'has-text-success' : ''">&nbsp;{{ tec3g900 ? tec3g900.site : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">3G 1900
                    <span class="has-text-weight-semibold is-size-6" :class="tec3g1900 ? 'has-text-success' : ''">&nbsp;{{ tec3g1900 ? tec3g1900.site : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 82px;"></div>

            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 700
                    <span class="has-text-weight-semibold is-size-6" :class="tec4g700 ? 'has-text-success' : ''">&nbsp;{{ tec4g700 ? tec4g700.site : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 1900
                    <span class="has-text-weight-semibold is-size-6" :class="tec4g1900 ? 'has-text-success' : ''">&nbsp;{{ tec4g1900 ? tec4g1900.site : '-' }}</span>
                </div>
            </div>
            <div class="level-item" style="margin: 20px auto 20px auto;">
                <div class="is-size-7 has-text-weight-bold">LTE 2600
                    <span class="has-text-weight-semibold is-size-6" :class="tec4g2600 ? 'has-text-success' : ''">&nbsp;{{ tec4g2600 ? tec4g2600.site : '-' }}</span>
                </div>
            </div>
        </section>

        <section class="hero is-bold" :class="heroBackgroundBlue">
            <div class="hero-body">
                <nav class="level">
                    <!-- <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ classification ? classification.classification_type.classification_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">CLASIFICACION</p>
                        </div>
                    </div> -->
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
                        <!-- <img src="/img/24_7_color.png" style="max-height: 50px;"> -->
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ attention ? attention.attention_type.attention_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">TIPO ATENCION EN TERRENO</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <!-- <autonomy-chart
                                :autonomy="autonomy"
                            ></autonomy-chart> -->
                            <p class="is-size-4 has-text-weight-semibold">{{ autonomy ? autonomy.theoretical : '-' }} <span class="is-size-5">hrs.</span></p>
                            <p class="heading has-text-weight-semibold">AUTONOMIA TEORICA</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <section class="section">
            <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">
                <div class="tile is-parent" v-for="item in pop_menu">
                    <a class="tile is-child box" :class="tabButtonView == item.id ? 'has-background-link' : boxBackground" @click="changeView(item.id)">
                        <font-awesome-icon :icon="item.icon" class="fa-2x" :class="tabButtonView == item.id ? selectedSecondaryBoxText : secondaryText"/>
                        <div :class="tabButtonView == item.id ? selectedSecondaryBoxText : secondaryText"> 
                            <div class="is-size-6 has-text-weight-normal">
                                {{ item.title }}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <characteristics v-if="tabButtonView == 1"
            :pop="pop"
            :rcas="rcas"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
            :csrf="csrf"
        />

        <power v-if="tabButtonView == 2"
            :pop="pop"
            :rcas="rcas"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
            :csrf="csrf"
        />

        <characteristics v-if="tabButtonView == 3"
            :pop="pop"
            :rcas="rcas"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
            :csrf="csrf"
        />

        <characteristics v-if="tabButtonView == 4"
            :pop="pop"
            :rcas="rcas"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
            :csrf="csrf"
        />

        <characteristics v-if="tabButtonView == 5"
            :pop="pop"
            :rcas="rcas"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
            :csrf="csrf"
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
        />

    </div>
    
</template>

<script>
    import AutonomyChart from '../AutonomyChart.vue';
    import PopCharacteristics from './PopCharacteristics.vue';
    import PopPower from './PopPower.vue';
    import PopComsite from './PopComsite.vue';
    import PopDocuments from './PopDocuments.vue';
    const PopMapView = () => ({
        // The component to load (should be a Promise)
        component: import('../maps/PopMapView.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        // delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        // timeout: 300
    });
    export default {
        components: {
            'pop-map-view': PopMapView,
            'autonomy-chart': AutonomyChart,
            'characteristics': PopCharacteristics,
            'power': PopPower,
            'comsite': PopComsite,
            'documents': PopDocuments
        },
        props : [
            'pop',
            'pop_menu',
            'attention',
            'attentions',
            'attention_priority',
            'attention_priorities',
            'autonomy',
            'autonomies',
            'category',
            'categories',
            'classification',
            'classifications',
            'coverage',
            'coverages',
            'dependences',
            'derivation',
            'derivations',
            'nets',
            'net',
            'pop_classes',
            'pop_class',
            'rcas',
            'sites',
            'site',
            'tec2g900',
            'tec2g1900',
            'tec3g900',
            'tec3g1900',
            'tec4g700',
            'tec4g1900',
            'tec4g2600',
            'transports',
            'transport',
            'csrf'
        ],
        data() {
            return {
                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                heroBackgroundBlue: 'is-link',

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',

                tabButtonView: 1
            }
        },
        mounted() {
            this.styleMode()
        },
        methods: {
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
            changeView(view) {
                if (this.tabButtonView != view) {
                    this.tabButtonView = view
                }
            },
        }
    }
</script>
