<template>
    <div>

        <section class="level has-background-dark is-marginless" >
            <div class="level-item" style="margin: 10px 0 10px 0;">
                <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">POP</div>
            </div>
        </section>

        <section class="hero is-medium has-background-white">
            <div class="hero-body columns" style="margin-top: -50px; margin-bottom: -50px;">
                <div class="column has-text-left">
                    <div class="columns">
                        <div class="column is-three-fifths">
                            <!-- <div class="is-divider" data-content="POP" style="margin: 40px auto 20px auto"></div> -->
                            <div class="columns is-four-fifths">
                                <div class="column has-text-left">
                                    <div class="is-size-4 has-text-weight-semibold">{{ pop.nombre }}
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
                                    <div class="is-size-5 has-text-weight-normal">{{ pop.nem_fijo ? pop.nem_fijo : '-' }}
                                        <p class="is-size-7 has-text-weight-light">NEMONICO FIJO</p>
                                    </div>
                                </div>
                                <div class="column has-text-centered">
                                    <div class="is-size-5 has-text-weight-normal">{{ pop.cod_planificacion ? pop.cod_planificacion : '-' }}
                                        <p class="is-size-7 has-text-weight-light">CODIGO PLANIFICACION</p>
                                    </div>
                                </div>
                                <div class="column has-text-right">
                                    <div class="is-size-5 has-text-weight-normal">{{ pop.nem_movil ? pop.nem_movil : '-' }}
                                        <p class="is-size-7 has-text-weight-light">NEMONICO MOVIL</p>
                                    </div>
                                </div>
                            </div>

                            <div class="is-divider" data-content="TIPO POP" style="margin: 20px auto 20px auto"></div>

                            <div class="columns">
                                <div class="column has-text-left">
                                    <div class="is-size-5 has-text-weight-normal">{{ pop_class ? pop_class.pop_class_type.pop_class_type : '-' }}
                                        <p class="is-size-7 has-text-weight-light">TIPO POP</p>
                                    </div>
                                </div>
                                <div class="column has-text-centered">
                                    <div class="is-size-5 has-text-weight-normal">{{ site ? site.site_type.site_type : '-' }}
                                        <p class="is-size-7 has-text-weight-light">TIPO SITIO</p>
                                    </div>
                                </div>
                                <div class="column has-text-right">
                                    <div class="is-size-5 has-text-weight-normal">{{ net ? net.net_type.net_type : '-' }}
                                        <p class="is-size-7 has-text-weight-light">TIPO RED</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="column has-text-right" style="margin-right: 48px;">
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
                                    <a :href="'tel:' + pop.comuna.zona.responsable.telefono_movil" class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ pop.comuna.zona.responsable.telefono_movil }}
                                        <p class="is-size-7 has-text-weight-light has-text-dark" style="margin-top: -4px;">telefono</p>
                                    </a>
                                    <div class="is-size-7 has-text-weight-semibold" style="margin-top: 5px;">{{ pop.comuna.zona.responsable.anexo_fono }}
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
                                    <div class="is-size-6 has-text-weight-normal">{{ pop.latitude }}
                                        <p class="is-size-7 has-text-weight-light">Latitud</p>
                                    </div>
                                </div>
                                <div class="column has-background-right">
                                    <div class="is-size-6 has-text-weight-normal">{{ pop.longitude }}
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

        <section class="hero is-bold" :class="heroBackgroundBlue">
            <div class="hero-body">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ classification ? classification.classification_type.classification_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">CLASIFICACION</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ attention_priority ? attention_priority.attention_priority_type.attention_priority_type : '-' }}</p>
                            <p class="heading has-text-weight-semibold">PRIORIDAD ATENCION EN TERRENO</p>
                        </div>
                    </div>
                    <!-- <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-4 has-text-weight-semibold">{{ this.classification.classification_type.classification_type }}</p>
                            <p class="heading has-text-weight-semibold">DEPENDENCIAS</p>
                        </div>
                    </div> -->
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
            <div class="" :class="bodyBackground">
                <div class="columns">

                    <!-- CUADROS DE INFORMACION -->
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">

                                <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">NEGOCIO FIJO</div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="pe_3g" type="radio" name="pe_3g" :checked="pop.pe_3g ? true : false" :disabled="pop.pe_3g ? false : true">
                                    <label for="pe_3g" class="is-size-6" :class="pop.pe_3g ? 'has-text-weight-semibold' : ''" :disabled="pop.pe_3g ? false : true">PE 3G</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="mpls" type="radio" name="mpls" :checked="pop.mpls ? true : false" :disabled="pop.mpls ? false : true">
                                    <label for="mpls" class="is-size-6" :class="pop.mpls ? 'has-text-weight-semibold' : ''">MPLS</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="olt" type="radio" name="olt" :checked="pop.olt ? true : false" :disabled="pop.olt ? false : true">
                                    <label for="olt" class="is-size-6" :class="pop.olt ? 'has-text-weight-semibold' : ''">OLT</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="olt_3play" type="radio" name="olt_3play" :checked="pop.olt_3play ? true : false" :disabled="pop.olt_3play ? false : true">
                                    <label for="olt_3play" class="is-size-6" :class="pop.olt_3play ? 'has-text-weight-semibold' : ''">OLT 3Play</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="core" type="radio" name="core" :checked="pop.core ? true : false" :disabled="pop.core ? false : true">
                                    <label for="core" class="is-size-6" :class="pop.core ? 'has-text-weight-semibold' : ''">CORE</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="bafi" type="radio" name="bafi" :checked="pop.bafi ? true : false" :disabled="pop.bafi ? false : true">
                                    <label for="bafi" class="is-size-6" :class="pop.bafi ? 'has-text-weight-semibold' : ''">Banda Ancha Fija Inalámbrica (BAFI)</label>
                                </div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">

                                <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">NEGOCIO MOVIL</div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="red_minima_n1" type="radio" name="red_minima_n1" :checked="pop.red_minima_n1 ? true : false" :disabled="pop.red_minima_n1 ? false : true">
                                    <label for="red_minima_n1" class="is-size-6" :class="pop.red_minima_n1 ? 'has-text-weight-semibold' : ''" :disabled="pop.red_minima_n1 ? false : true">Red Mínima N1</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="red_minima_n2" type="radio" name="red_minima_n2" :checked="pop.red_minima_n2 ? true : false" :disabled="pop.red_minima_n2 ? false : true">
                                    <label for="red_minima_n2" class="is-size-6" :class="pop.red_minima_n2 ? 'has-text-weight-semibold' : ''">Red Mínima N2</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="vip" type="radio" name="vip" :checked="pop.vip ? true : false" :disabled="pop.vip ? false : true">
                                    <label for="vip" class="is-size-6" :class="pop.vip ? 'has-text-weight-semibold' : ''">VIP</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="localidad_obligatoria" type="radio" name="localidad_obligatoria" :checked="pop.localidad_obligatoria ? true : false" :disabled="pop.localidad_obligatoria ? false : true">
                                    <label for="localidad_obligatoria" class="is-size-6" :class="pop.localidad_obligatoria ? 'has-text-weight-semibold' : ''">Localidad Obligatoria</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="ranco" type="radio" name="ranco" :checked="pop.ranco ? true : false" :disabled="pop.ranco ? false : true">
                                    <label for="ranco" class="is-size-6" :class="pop.ranco ? 'has-text-weight-semibold' : ''">RAN Consolidado (RANCO)</label>
                                </div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">

                                <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">CARACTERISTICAS INFRAESTRUCTURA</div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="offgrid" type="radio" name="offgrid" :checked="pop.offgrid ? true : false" :disabled="pop.offgrid ? false : true">
                                    <label for="offgrid" class="is-size-6" :class="pop.offgrid ? 'has-text-weight-semibold' : ''" :disabled="pop.offgrid ? false : true">Offgrid</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="solar" type="radio" name="solar" :checked="pop.solar ? true : false" :disabled="pop.solar ? false : true">
                                    <label for="solar" class="is-size-6" :class="pop.solar ? 'has-text-weight-semibold' : ''">Paneles Solares</label>
                                </div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="eolica" type="radio" name="eolica" :checked="pop.eolica ? true : false" :disabled="pop.eolica ? false : true">
                                    <label for="eolica" class="is-size-6" :class="pop.eolica ? 'has-text-weight-semibold' : ''">Eólico</label>
                                </div>
                                
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">

                                <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">GESTION AMBIENTAL</div>
                                <div class="field">
                                    <input class="is-checkradio is-link" id="protected_zone" type="radio" name="protected_zone" :checked="pop.protected_zone ? true : false" :disabled="pop.protected_zone ? false : true">
                                    <label for="protected_zone" class="is-size-6" :class="pop.protected_zone ? 'has-text-weight-semibold' : ''">Zona protegida</label>
                                </div>

                                <div class="field">
                                    <input class="is-checkradio is-link" id="rca" type="radio" name="rca" :checked="rcas.length ? true : false" :disabled="rcas.length ? false : true">
                                    <label for="rca" class="is-size-6" :class="rcas.length ? 'has-text-weight-semibold' : ''" :disabled="rcas.length ? false : true">R.C.A.</label>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
    import AutonomyChart from '../AutonomyChart.vue';
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
            'autonomy-chart': AutonomyChart
        },
        props : [
            'pop',
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
            'nets',
            'net',
            'pop_classes',
            'pop_class',
            'sites',
            'site',
            'rcas',
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
            }
        },
        mounted() {
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
            }
        }
    }
</script>
